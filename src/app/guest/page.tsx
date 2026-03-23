import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Montague — Podcast Guest Media Kit",
  description:
    "Book Tim Montague as a podcast guest. Host of Clean Power Hour (500+ episodes), author of Wired for Sun, WSI-Certified AI Consultant. Expert in C&I solar, energy storage, microgrids, and AI adoption for clean energy.",
  openGraph: {
    title: "Tim Montague — Podcast Guest Media Kit",
    description:
      "Book Tim Montague as a podcast guest. Host of Clean Power Hour (500+ episodes), expert in C&I solar, energy storage, microgrids, and AI adoption for clean energy.",
  },
};

const talkingPoints = [
  {
    title: "Why C&I Solar Is the Biggest Untapped Opportunity in Clean Energy",
    description:
      "Most of the solar conversation centers on utility-scale or residential. Tim makes the case for why commercial and industrial solar is where the real business opportunity lives — and why most developers are leaving money on the table.",
  },
  {
    title: "Battery Storage & Microgrids Are Reshaping Energy Resilience",
    description:
      "From extreme weather events to grid instability, businesses and communities are waking up to energy resilience. Tim breaks down the real-world economics, technology options, and deployment strategies that are working today.",
  },
  {
    title: "AI Adoption in the Energy Sector — What's Working, What's Hype",
    description:
      "As a WSI-Certified AI Consultant, Tim brings a practitioner's lens to AI in clean energy. He covers real workflows, tools, and revenue-driving use cases — not theoretical applications.",
  },
  {
    title: "How to Build a B2B Media Platform That Drives Business Development",
    description:
      "Tim built Clean Power Hour into an industry authority with 500+ episodes — sponsor-supported and used as a business development engine for his consulting firm. He teaches other niche operators how to replicate this model.",
  },
  {
    title: "The Energy Transition from a Boots-on-the-Ground Business Perspective",
    description:
      "Not just policy and punditry — Tim has originated and developed 150+ MW of solar projects and driven $200M+ in technology sales. His take on the energy transition is grounded in execution, not abstraction.",
  },
  {
    title: "What Solar Developers and EPCs Get Wrong About Sales",
    description:
      "After 500+ interviews with clean energy executives and 15+ years in solar sales and consulting, Tim has a sharp perspective on the go-to-market mistakes that stall growth — and the fixes that actually work.",
  },
  {
    title: "Lessons from 500+ Interviews with Clean Energy Leaders",
    description:
      "Tim has sat across from the CEOs, engineers, investors, and policymakers shaping the energy transition. He distills the patterns — what the best operators do differently and what the industry gets consistently wrong.",
  },
];

const credentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    label: "Host, Clean Power Hour",
    detail: "500+ episodes · Top independent clean energy podcast",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: "Author, Wired for Sun",
    detail: "The Commercial Solar Playbook — available on Amazon",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "WSI-Certified AI Consultant",
    detail: "Advises solar EPCs & clean-tech companies on AI strategy",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "150+ MW Solar Developed",
    detail: "C&I solar projects originated and developed",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "HeatSpring Instructor",
    detail: "NABCEP-aligned C&I solar sales & development courses",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    label: "$200M+ in Technology Sales",
    detail: "Career-spanning sales leadership in clean energy & tech",
  },
];

const sampleQuestions = [
  "What does the C&I solar opportunity really look like right now, and why do so many developers overlook it?",
  "How are battery storage and microgrids changing the conversation around energy resilience for businesses?",
  "You've interviewed 500+ clean energy leaders. What separates the companies that are winning from those that are struggling?",
  "You're a certified AI consultant working with solar and clean energy companies. What are the most practical AI use cases you're seeing actually move the needle?",
  "You built Clean Power Hour into one of the top independent podcasts in the energy industry. What's the playbook for building a media platform as a B2B business development tool?",
  "Your new book is on energy resilience and microgrids. What's the most important thing businesses and communities need to understand right now?",
  "What do solar developers and EPCs consistently get wrong about sales and go-to-market?",
  "Where is the energy transition actually headed in the next 3–5 years — not the hype, but the realistic picture from someone boots on the ground?",
];

const links = [
  { label: "Podcast", url: "https://www.cleanpowerhour.com", display: "cleanpowerhour.com" },
  { label: "Consulting", url: "https://www.cleanpower.group/", display: "cleanpower.group" },
  { label: "YouTube", url: "https://www.youtube.com/@cleanpowerhour", display: "youtube.com/@cleanpowerhour" },
  { label: "LinkedIn", url: "https://bit.ly/tgmontague2026", display: "linkedin.com/in/tgmontague" },
  { label: "Book", url: "https://www.amazon.com/dp/B0FJSG8PVH", display: "Wired for Sun on Amazon" },
  { label: "HeatSpring", url: "https://www.heatspring.com/instructors/tim-montague", display: "heatspring.com" },
];

export default function GuestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--bg-dark)] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-solar) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-electric) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
                  Podcast Guest Media Kit
                </p>
                <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Tim Montague
                </h1>
                <p className="mt-3 font-[family-name:var(--font-outfit)] text-xl sm:text-2xl text-[var(--color-solar)] font-medium">
                  Clean Energy Operator. Podcast Host. Author. AI Consultant.
                </p>
              </div>

              <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/75 leading-relaxed max-w-xl">
                Tim Montague is the host of <strong className="text-white">Clean Power Hour</strong> (500+ episodes on the energy transition),
                President of Clean Power Consulting Group, author of <em>Wired for Sun</em>, and a WSI-Certified AI Consultant.
                He brings 15+ years of boots-on-the-ground experience in C&amp;I solar, battery storage, and clean energy business strategy.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:tim@cleanpowerhour.com"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Book Tim as a Guest
                </a>
                <a
                  href="https://www.cleanpowerhour.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  Listen to Clean Power Hour
                </a>
              </div>
            </div>

            {/* Headshot / Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-60"
                  style={{ background: "linear-gradient(135deg, var(--color-solar), var(--color-electric))" }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/team/tim-montague.jpg"
                  alt="Tim Montague — host of Clean Power Hour, author, and clean energy consultant"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover w-full max-w-xs lg:max-w-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[var(--color-solar-deep)] py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 text-center">
            {[
              { value: "500+", label: "Podcast Episodes" },
              { value: "1M+", label: "Podcast Downloads" },
              { value: "150+ MW", label: "Solar Developed" },
              { value: "15+ Yrs", label: "Clean Energy Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-[family-name:var(--font-newsreader)] text-sm text-white/70">{stat.label}</dt>
                <dd className="mt-1 font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-3">
              Credentials
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
              Who Tim Is
            </h2>
            <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
              Tim operates at the intersection of clean energy business development, media, and AI adoption.
              He&rsquo;s not a policy analyst or academic — he&rsquo;s an operator who has done the work and interviewed the people making it happen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex gap-4 p-6 rounded-2xl border border-[var(--bg-slate)] bg-[var(--bg-warm)] hover:border-[var(--color-solar-deep)]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[var(--color-solar-deep)]/10 text-[var(--color-solar-deep)] flex items-center justify-center">
                  {cred.icon}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-outfit)] font-bold text-[var(--color-midnight)] text-sm">
                    {cred.label}
                  </p>
                  <p className="mt-0.5 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-slate)] leading-snug">
                    {cred.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talking Points */}
      <section className="bg-[var(--bg-slate)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-3">
              Topics
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
              What Tim Can Deliver for Your Audience
            </h2>
            <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
              Any of these topics can anchor a full episode or serve as a thread through a broader conversation.
              Tim tailors every appearance to the show&rsquo;s audience and recent episodes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {talkingPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl bg-[var(--bg-white)] border border-[var(--bg-slate)] hover:shadow-md transition-shadow duration-200"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-solar-deep)] text-white flex items-center justify-center font-[family-name:var(--font-outfit)] font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[var(--color-midnight)] text-base leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-newsreader)] text-[var(--color-charcoal)] leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Interview Questions */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-3">
                Sample Questions
              </p>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
                Ready to Run With
              </h2>
              <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                These questions are starting points — Tim is a seasoned interviewer himself,
                so the conversation will go wherever it needs to go for your audience.
              </p>
              <div className="mt-8 p-5 rounded-xl bg-[var(--bg-warm)] border border-[var(--color-solar-deep)]/15">
                <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-midnight)] mb-2">
                  Format Flexibility
                </p>
                <ul className="space-y-1 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-charcoal)]">
                  <li>✓ Long-form interview (45–75 min)</li>
                  <li>✓ Short punchy format (20–30 min)</li>
                  <li>✓ Solo or co-hosted shows</li>
                  <li>✓ Video or audio-only</li>
                  <li>✓ Remote or in-person (Champaign, IL)</li>
                </ul>
              </div>
            </div>

            <ol className="lg:col-span-3 space-y-4">
              {sampleQuestions.map((q, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-[var(--bg-slate)] bg-[var(--bg-warm)]"
                >
                  <span className="shrink-0 font-[family-name:var(--font-outfit)] text-sm font-bold text-[var(--color-solar-deep)] w-6 pt-0.5">
                    {i + 1}.
                  </span>
                  <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-charcoal)] leading-relaxed">
                    &ldquo;{q}&rdquo;
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Social Proof / Past Appearances */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-3">
              Peer Context
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-white">
              Tim&rsquo;s Place in the Clean Energy Media Landscape
            </h2>
            <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-white/70 leading-relaxed">
              Clean Power Hour sits alongside shows like Suncast (Nico Johnson) and the work of Peter Kelly-Detwiler
              as an independent, operator-led voice in the energy transition conversation.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                quote: "One of the most widely followed independent podcasts on the energy transition.",
                context: "500+ episodes with CEOs, engineers, policymakers, and developers",
              },
              {
                quote: "A practitioner's lens on AI adoption — not theory, but real workflows driving revenue.",
                context: "WSI-Certified AI Consultant advising solar EPCs and clean-tech companies",
              },
              {
                quote: "Currently writing a book on energy resilience, microgrids, and battery storage strategy.",
                context: "Grounded in financial modeling, case studies, and current policy trends",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="font-[family-name:var(--font-newsreader)] text-white/90 leading-relaxed italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="font-[family-name:var(--font-outfit)] text-xs text-white/50 uppercase tracking-wide">
                  {item.context}
                </p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-center font-[family-name:var(--font-outfit)] text-sm font-semibold text-white/50 uppercase tracking-widest mb-8">
              Tim&rsquo;s Links
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/80 hover:border-[var(--color-solar)] hover:text-[var(--color-solar)] font-[family-name:var(--font-outfit)] text-sm font-medium transition-all duration-200"
                >
                  <span className="font-semibold text-white/50">{link.label}:</span>
                  {link.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-4">
            Book Tim
          </p>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)] max-w-2xl mx-auto">
            Ready to Have Tim on Your Show?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] max-w-xl mx-auto leading-relaxed">
            Reach out directly — Tim keeps his schedule lean and says yes to shows where
            the audience is a genuine fit. Expect a response within 48 hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tim@cleanpowerhour.com"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email tim@cleanpowerhour.com
            </a>
            <a
              href="https://bit.ly/tgmontague2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--color-solar-deep)] text-[var(--color-solar-deep)] text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar-deep)] hover:text-white transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-slate)]">
            Prefer a quick pitch? DM Tim on{" "}
            <a href="https://bit.ly/tgmontague2026" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-solar-deep)]">
              LinkedIn
            </a>{" "}
            and he&rsquo;ll get back to you.
          </p>
        </div>
      </section>
    </>
  );
}
