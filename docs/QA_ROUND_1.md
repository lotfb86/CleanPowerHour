# QA Round 1: Build Verification

**Date:** March 19, 2026
**Scope:** Core build integrity, page rendering, navigation, and critical functionality

---

## Build Verification

- [x] `pnpm build` completes with zero errors
- [x] 434+ static pages generated (401 episodes + 7 services + blog + static pages)
- [x] No TypeScript compilation errors
- [x] No ESLint warnings in build output

---

## Page Rendering Checks

| Page | Route | Status | Notes |
|---|---|---|---|
| Homepage | `/` | PASS | Hero, stats, services grid, podcast preview, testimonials, about preview |
| Services Hub | `/services` | PASS | All 7 services displayed with icons |
| Solar Consulting | `/services/solar-consulting` | PASS | Full detail page with benefits, CTA |
| Career Coaching | `/services/career-coaching` | PASS | |
| Executive Coaching | `/services/executive-coaching` | PASS | |
| CLEAN Power Method | `/services/clean-power-method` | PASS | |
| Mastermind | `/services/mastermind` | PASS | |
| AI Consulting | `/services/ai-consulting` | PASS | |
| C&I Strategy | `/services/ci-strategy` | PASS | |
| Podcast Listing | `/podcast` | PASS | Search, pagination, Buzzsprout player |
| Episode Detail | `/podcast/[slug]` | PASS | Show notes, prev/next nav, player |
| About | `/about` | PASS | Bio, timeline, credentials |
| Blog Listing | `/blog` | PASS | Post cards, dates, descriptions |
| Blog Post | `/blog/[slug]` | PASS | MDX rendered content |
| Training | `/training` | PASS | 9 courses with tags |
| Events | `/events` | PASS | |
| Contact | `/contact` | PASS | Calendly link, phone, email |
| Book | `/book` | PASS | Wired for Sun promotion |
| Shop | `/shop` | PASS | MerchyMe link |
| Reviews | `/about/reviews` | PASS | |
| Media Kit | `/about/media-kit` | PASS | |
| Sponsors | `/podcast/sponsors` | PASS | |
| Privacy | `/privacy` | PASS | |
| Terms | `/terms` | PASS | |
| Fulfillment | `/fulfillment` | PASS | |
| Tools | `/tools` | PASS | Coming soon placeholder |

---

## Navigation

- [x] Header: All 7 service links work in dropdown
- [x] Header: Podcast, About, Blog, Contact links work
- [x] Footer: All service links present and functional
- [x] Footer: Podcast, company, and resource links work
- [x] Footer: Social links open in new tab
- [x] Footer: Legal links (Privacy, Terms, Fulfillment) work
- [x] Mobile: Hamburger menu opens/closes correctly
- [x] Mobile: All navigation items accessible

---

## Critical Functionality

- [x] Episode search filters episodes by title
- [x] Episode pagination works (24 per page)
- [x] Buzzsprout player embeds load
- [x] All external links have `target="_blank"` and `rel="noopener noreferrer"`
- [x] Skip-to-main-content link present and functional
- [x] Responsive: Pages render correctly at 375px, 768px, 1024px, 1440px

---

## Issues Found & Resolved

1. **CSS Specificity Conflict (CRITICAL):** Tailwind v4 cascade layers caused base CSS to override `text-white` utility classes. Headings invisible on dark backgrounds. **Fix:** Removed all base heading styles from globals.css.
2. **Training page space:** Missing space between "HeatSpring" and "to bring". **Fix:** Added `{" "}` JSX spacing.
3. **Shop page title:** Generic "Shop" title. **Fix:** Changed to "Clean Power Hour Shop".
