# QA Round 3: Cross-Browser, Accessibility & Final Polish

**Date:** March 19, 2026
**Scope:** Cross-browser rendering, accessibility compliance, content accuracy, and final polish

---

## Accessibility Compliance (WCAG 2.1 AA)

| Criterion | Status | Notes |
|---|---|---|
| 1.1.1 Non-text Content | PASS | All images have alt text |
| 1.3.1 Info and Relationships | PASS | Semantic HTML throughout |
| 1.4.3 Contrast (Minimum) | PASS | All ratios meet AA (see ACCESSIBILITY_AUDIT.md) |
| 1.4.10 Reflow | PASS | No horizontal scroll at 320px |
| 2.1.1 Keyboard | PASS | All interactive elements focusable |
| 2.4.1 Bypass Blocks | PASS | Skip-to-main link |
| 2.4.2 Page Titled | PASS | Unique titles on all pages |
| 2.4.6 Headings and Labels | PASS | Proper h1 → h2 → h3 hierarchy |
| 2.5.5 Target Size | PASS | Touch targets ≥ 44px on mobile |
| 3.1.1 Language of Page | PASS | `lang="en"` on `<html>` |

---

## Visual QA — Key Pages

| Page | Desktop (1440px) | Tablet (768px) | Mobile (375px) |
|---|---|---|---|
| Homepage | PASS | PASS | PASS |
| Services Hub | PASS | PASS | PASS |
| Podcast Listing | PASS | PASS | PASS |
| Episode Detail | PASS | PASS | PASS |
| About | PASS | PASS | PASS |
| Blog | PASS | PASS | PASS |
| Training | PASS | PASS | PASS |
| Contact | PASS | PASS | PASS |

---

## Content Accuracy

- [x] Tim's credentials: 30+ years, 150+ MW, $200M+, 400+ episodes — verified
- [x] All HeatSpring affiliate links include `?aff_id=ne1aha` parameter
- [x] Calendly links point to correct booking pages per service
- [x] MerchyMe store link correct: `cleanpowerhour.merchyme.com`
- [x] Social links: LinkedIn, YouTube, Twitter — all correct
- [x] Phone: +1 (217) 722-0429 — displayed in footer
- [x] Email: tim@cleanpowerhour.com — displayed in footer
- [x] WSI Certified AI Consultancy badge displayed

---

## Font Loading

- [x] Outfit (display/headings): loads with `display: swap`
- [x] Newsreader (body/paragraphs): loads with `display: swap`
- [x] No FOIT (flash of invisible text) — swap prevents it

---

## Link Integrity

- [x] All internal links resolve to valid routes
- [x] All external links have `target="_blank"` and `rel="noopener noreferrer"`
- [x] No broken images (Buzzsprout remote patterns configured in next.config.ts)
- [x] Footer "Tools" link resolves to `/tools` page

---

## Final Items Resolved in This Round

1. **Tools page created** — placeholder with coming-soon content and planned tool list
2. **Sitemap updated** — added `/tools` route
3. **RSS feed autodiscovery** — added `<link rel="alternate" type="application/rss+xml">` to `<head>` via layout metadata
4. **All 7 services in footer** — C&I Strategy added

---

## Remaining Recommendations (Future Phases)

1. Add Google Analytics / Plausible analytics
2. Build interactive tools (Solar Savings Estimator, Carbon Calculator) — Phase 11
3. Implement server-side contact form — Phase 11
4. Run Lighthouse CI in deployment pipeline
5. Add `axe-core` automated accessibility testing
6. Configure Vercel Web Analytics
