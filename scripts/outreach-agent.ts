#!/usr/bin/env npx tsx
/**
 * Podcast Outreach Agent — Tim Montague
 *
 * Uses Claude to generate personalized pitches, sends them via SMTP,
 * and keeps tracking.csv up to date.
 *
 * Usage:
 *   npx tsx scripts/outreach-agent.ts              # dry run — preview all pending pitches
 *   npx tsx scripts/outreach-agent.ts --send       # send pending pitches via SMTP
 *   npx tsx scripts/outreach-agent.ts --followup   # process 7-day and 14-day follow-ups
 *   npx tsx scripts/outreach-agent.ts --all        # dry run all (pitched + not pitched)
 *
 * Required env vars (.env.local or shell):
 *   ANTHROPIC_API_KEY   — your Anthropic API key
 *   SMTP_HOST           — e.g. smtp.gmail.com
 *   SMTP_PORT           — e.g. 587
 *   SMTP_USER           — e.g. tim@cleanpowerhour.com
 *   SMTP_PASS           — App password (not your main password)
 *   FROM_EMAIL          — e.g. tim@cleanpowerhour.com
 *   FROM_NAME           — e.g. Tim Montague
 */

import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";
import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TrackingRow {
  podcastName: string;
  host: string;
  contactMethod: string;
  contactInfo: string;
  pitchTemplateUsed: string;
  datePitched: string;
  status: string;
  followUp7Day: string;
  followUp14Day: string;
  notes: string;
}

interface TargetRow {
  podcastName: string;
  hostName: string;
  tier: string;
  estimatedAudience: string;
  contactMethod: string;
  contactInfo: string;
  recentEpisodeTopics: string;
  guestCaliber: string;
  whyTimIsAFit: string;
  pitchAngle: string;
  audienceAlignment: string;
  guestCaliberMatch: string;
  recencyActivity: string;
  accessibility: string;
  overallScore: string;
  sourceUrl: string;
  conflictFlag: string;
  notes: string;
}

// ---------------------------------------------------------------------------
// CSV helpers
// ---------------------------------------------------------------------------

function parseCsvRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCsv(content: string): string[][] {
  return content
    .split("\n")
    .filter((l) => l.trim())
    .map(parseCsvRow);
}

function rowsToTracking(rows: string[][]): TrackingRow[] {
  const [, ...data] = rows;
  return data.map((r) => ({
    podcastName: r[0] ?? "",
    host: r[1] ?? "",
    contactMethod: r[2] ?? "",
    contactInfo: r[3] ?? "",
    pitchTemplateUsed: r[4] ?? "",
    datePitched: r[5] ?? "",
    status: r[6] ?? "",
    followUp7Day: r[7] ?? "",
    followUp14Day: r[8] ?? "",
    notes: r[9] ?? "",
  }));
}

function rowsToTargets(rows: string[][]): TargetRow[] {
  const [, ...data] = rows;
  return data.map((r) => ({
    podcastName: r[0] ?? "",
    hostName: r[1] ?? "",
    tier: r[2] ?? "",
    estimatedAudience: r[3] ?? "",
    contactMethod: r[4] ?? "",
    contactInfo: r[5] ?? "",
    recentEpisodeTopics: r[6] ?? "",
    guestCaliber: r[7] ?? "",
    whyTimIsAFit: r[8] ?? "",
    pitchAngle: r[9] ?? "",
    audienceAlignment: r[10] ?? "",
    guestCaliberMatch: r[11] ?? "",
    recencyActivity: r[12] ?? "",
    accessibility: r[13] ?? "",
    overallScore: r[14] ?? "",
    sourceUrl: r[15] ?? "",
    conflictFlag: r[16] ?? "",
    notes: r[17] ?? "",
  }));
}

function serializeTracking(rows: TrackingRow[]): string {
  const header =
    "Podcast Name,Host,Contact Method,Contact Info,Pitch Template Used,Date Pitched,Status,Follow-Up Date (7-day),Follow-Up Date (14-day),Notes";
  const lines = rows.map((r) =>
    [
      r.podcastName,
      r.host,
      r.contactMethod,
      r.contactInfo,
      r.pitchTemplateUsed,
      r.datePitched,
      r.status,
      r.followUp7Day,
      r.followUp14Day,
      r.notes,
    ]
      .map((v) => (v.includes(",") || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v))
      .join(",")
  );
  return [header, ...lines].join("\n") + "\n";
}

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function isPast(dateStr: string): boolean {
  if (!dateStr) return false;
  return new Date(dateStr) <= new Date();
}

// ---------------------------------------------------------------------------
// Claude pitch generation
// ---------------------------------------------------------------------------

const client = new Anthropic();

const TIM_BIO = `
Tim Montague is:
- Host of Clean Power Hour (500+ episodes, one of the top independent podcasts on the energy transition)
- President, Clean Power Consulting Group (cleanpower.group)
- Author of "Wired for Sun: The Commercial Solar Playbook" (Amazon: https://www.amazon.com/dp/B0FJSG8PVH)
- WSI-Certified AI Consultant advising solar EPCs, developers, and clean-tech companies
- HeatSpring instructor (NABCEP-aligned C&I solar sales & development courses)
- Currently writing a book on modern energy resilience and microgrids
- 15+ years in clean energy business strategy and consulting
- 150+ MW of C&I solar developed; $200M+ in technology sales

Key links:
- Podcast: https://www.cleanpowerhour.com
- Consulting: https://www.cleanpower.group/
- YouTube: https://www.youtube.com/@cleanpowerhour
- LinkedIn: https://bit.ly/tgmontague2026
- Book: https://www.amazon.com/dp/B0FJSG8PVH
- HeatSpring: https://www.heatspring.com/instructors/tim-montague

Talking points Tim can deliver:
1. Why C&I solar is the biggest untapped opportunity in clean energy
2. How battery storage and microgrids are reshaping energy resilience for businesses and communities
3. The real-world state of AI adoption in the energy sector — what's working, what's hype
4. How to build a media platform (podcast/YouTube) as a business development engine in a niche B2B industry
5. The energy transition from a boots-on-the-ground business perspective
6. What solar developers and EPCs get wrong about sales and go-to-market
7. Lessons from 500+ interviews with clean energy leaders
`;

async function generatePitch(target: TargetRow, isFollowUp: boolean = false, followUpRound: 1 | 2 = 1): Promise<{ subject: string; body: string }> {
  const isAiShow = target.podcastName.toLowerCase().includes("ai") ||
    target.pitchAngle.toLowerCase().includes("ai");
  const isBizShow = target.tier === "2" &&
    !target.podcastName.toLowerCase().includes("solar") &&
    !target.podcastName.toLowerCase().includes("energy");

  let templateHint: string;
  if (isFollowUp) {
    templateHint = followUpRound === 1
      ? "This is a 7-day follow-up. Write 2-3 sentences max. Reference the original pitch. Keep it warm and brief."
      : "This is a final 14-day follow-up. Write 1-2 sentences. Keep the door open. No pressure.";
  } else if (isAiShow) {
    templateHint = "Template B: Business/AI/Entrepreneurship angle. Lead with Tim's AI consulting work and podcast-as-business-development story.";
  } else if (isBizShow) {
    templateHint = "Template B: Business/Entrepreneurship angle. Lead with the media platform as B2B demand gen engine story.";
  } else {
    templateHint = "Template A: Clean Energy/Solar/Storage. Lead with Clean Power Hour and Tim's operator expertise.";
  }

  const prompt = `You are a podcast guest booking agent writing on behalf of Tim Montague.

Write a personalized pitch email for the following podcast. Be direct and specific — reference their actual content. No fluff, no corporate jargon. Tim's voice is direct, knowledgeable, and collegial — he talks like an operator, not a marketer.

PODCAST DETAILS:
- Name: ${target.podcastName}
- Host: ${target.hostName}
- Recent episode topics: ${target.recentEpisodeTopics}
- Notable past guests: ${target.guestCaliber}
- Why Tim is a fit: ${target.whyTimIsAFit}
- Best pitch angle: ${target.pitchAngle}

TIM'S BIO & CREDENTIALS:
${TIM_BIO}

TEMPLATE GUIDANCE: ${templateHint}

RULES:
- Personalize based on the show's actual recent topics — mention 1-2 specific things
- Pick 2-3 talking points that fit THIS show's audience (don't list all 7)
- Keep the body under 250 words
- Close with a clear but low-pressure ask
- Sign off as: "Best, [Your name] on behalf of Tim Montague"
  (leave "[Your name]" as a placeholder — the sender will fill it in)
- Include Tim's links at the end (Podcast + Book + LinkedIn at minimum)

Return ONLY a JSON object with "subject" and "body" keys. No markdown fences.`;

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    thinking: { type: "adaptive" },
    messages: [{ role: "user", content: prompt }],
  });

  let raw = "";
  for (const block of response.content) {
    if (block.type === "text") raw = block.text;
  }

  // Strip any markdown code fences if present
  raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();

  try {
    const parsed = JSON.parse(raw) as { subject: string; body: string };
    return parsed;
  } catch {
    // Fallback: extract subject/body from text
    const subjectMatch = raw.match(/"subject"\s*:\s*"([^"]+)"/);
    const bodyMatch = raw.match(/"body"\s*:\s*"([\s\S]+?)"\s*\}/);
    return {
      subject: subjectMatch?.[1] ?? `Guest pitch: Tim Montague — Clean Power Hour host`,
      body: bodyMatch?.[1]?.replace(/\\n/g, "\n") ?? raw,
    };
  }
}

// ---------------------------------------------------------------------------
// Email sending
// ---------------------------------------------------------------------------

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT ?? "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendEmail(to: string, subject: string, body: string): Promise<void> {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"${process.env.FROM_NAME ?? "Tim Montague"}" <${process.env.FROM_EMAIL ?? process.env.SMTP_USER}>`,
    to,
    subject,
    text: body,
  });
}

function extractEmailFromContactInfo(contactInfo: string): string | null {
  const match = contactInfo.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const doSend = args.includes("--send");
  const doFollowup = args.includes("--followup");
  const showAll = args.includes("--all");

  const ROOT = path.resolve(process.cwd());
  const TRACKING_PATH = path.join(ROOT, "content/podcast-outreach/tracking.csv");
  const TARGETS_PATH = path.join(ROOT, "content/podcast-outreach/targets.csv");
  const PREVIEW_PATH = path.join(ROOT, "content/podcast-outreach/preview-pitches.txt");

  // Load data
  const trackingRows = rowsToTracking(parseCsv(fs.readFileSync(TRACKING_PATH, "utf-8")));
  const targetRows = rowsToTargets(parseCsv(fs.readFileSync(TARGETS_PATH, "utf-8")));
  const targetMap = new Map(targetRows.map((t) => [t.podcastName, t]));

  let previewOutput = `OUTREACH AGENT — Preview Run\nGenerated: ${new Date().toISOString()}\n${"=".repeat(70)}\n\n`;
  let actionCount = 0;
  let updatedTracking = [...trackingRows];

  for (let i = 0; i < updatedTracking.length; i++) {
    const row = updatedTracking[i];
    const target = targetMap.get(row.podcastName);

    // Determine what action to take for this row
    const isNotPitched = row.status === "[Not Pitched]";
    const isFollowUp7 = row.status === "Pitched" && isPast(row.followUp7Day) && !doFollowup ? false : row.status === "Pitched" && isPast(row.followUp7Day);
    const isFollowUp14 = row.status === "Followed Up (7d)" && isPast(row.followUp14Day) && !doFollowup ? false : row.status === "Followed Up (7d)" && isPast(row.followUp14Day);
    const isSkipped = row.status.includes("Skipped") || row.status.includes("Sponsorship Required") || row.status.includes("Declined") || row.status.includes("No Response") || row.status.includes("Booked") || row.status.includes("HOLD");

    if (isSkipped && !showAll) continue;
    if (!isNotPitched && !isFollowUp7 && !isFollowUp14 && !showAll) continue;

    // Only pitch shows with an email address (or flagged as email contact)
    const hasEmail = extractEmailFromContactInfo(row.contactInfo) !== null ||
      row.contactMethod.toLowerCase().includes("email");

    if (!hasEmail && isNotPitched) {
      console.log(`⚠  ${row.podcastName} — no email found, skipping (${row.contactMethod})`);
      continue;
    }

    if (!target) {
      console.log(`⚠  ${row.podcastName} — not in targets.csv, skipping`);
      continue;
    }

    actionCount++;
    const isFollowUp = isFollowUp7 || isFollowUp14;
    const followUpRound = isFollowUp14 ? 2 : 1;

    console.log(`\n📬 ${row.podcastName} (${isFollowUp ? `Follow-up ${followUpRound}` : "Initial pitch"})`);
    console.log(`   Host: ${row.host}`);
    console.log(`   Contact: ${row.contactInfo}`);
    console.log(`   Generating pitch with Claude...`);

    const pitch = await generatePitch(target, isFollowUp, followUpRound);

    const separator = "-".repeat(70);
    const pitchPreview = `\n${separator}\n${row.podcastName.toUpperCase()}${isFollowUp ? ` — FOLLOW-UP ${followUpRound}` : ""}\nTO: ${row.contactInfo}\nSUBJECT: ${pitch.subject}\n${separator}\n${pitch.body}\n`;

    previewOutput += pitchPreview;
    console.log(`\nSUBJECT: ${pitch.subject}`);
    console.log(`\n${pitch.body.slice(0, 300)}${pitch.body.length > 300 ? "..." : ""}`);

    const email = extractEmailFromContactInfo(row.contactInfo);

    if (doSend && email) {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log(`\n⛔ --send flag set but SMTP_USER / SMTP_PASS not configured. Set them in .env.local.`);
      } else {
        try {
          await sendEmail(email, pitch.subject, pitch.body);
          console.log(`\n✅ Email sent to ${email}`);

          // Update tracking row
          updatedTracking[i] = {
            ...row,
            datePitched: isNotPitched ? today() : row.datePitched,
            status: isFollowUp14 ? "Followed Up (14d)" : isFollowUp7 ? "Followed Up (7d)" : "Pitched",
            followUp7Day: isNotPitched ? addDays(today(), 7) : row.followUp7Day,
            followUp14Day: isNotPitched ? addDays(today(), 14) : row.followUp14Day,
          };
        } catch (err) {
          console.error(`\n❌ Failed to send to ${email}:`, (err as Error).message);
        }
      }
    } else if (!doSend) {
      console.log(`\n[DRY RUN] Would send to: ${email ?? row.contactInfo}`);
      console.log(`  Run with --send to actually send.`);
    }
  }

  // Save preview file
  fs.writeFileSync(PREVIEW_PATH, previewOutput, "utf-8");

  // Save updated tracking if any emails were sent
  if (doSend) {
    fs.writeFileSync(TRACKING_PATH, serializeTracking(updatedTracking), "utf-8");
    console.log(`\n📊 tracking.csv updated.`);
  }

  console.log(`\n${"=".repeat(70)}`);
  console.log(`Done. ${actionCount} actions processed.`);
  console.log(`Preview saved to: content/podcast-outreach/preview-pitches.txt`);

  if (actionCount === 0) {
    console.log(`\nNo pending pitches found.`);
    console.log(`  • Use --followup to process due follow-ups`);
    console.log(`  • Use --all to preview everything (including already-pitched shows)`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
