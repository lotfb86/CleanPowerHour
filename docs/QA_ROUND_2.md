# QA Round 2: SEO, Metadata & Performance

**Date:** March 19, 2026
**Scope:** SEO implementation, metadata correctness, structured data, and performance optimization

---

## Metadata Verification

| Page | Title | Description | OG Tags | Status |
|---|---|---|---|---|
| Homepage | "Clean Power Consulting Group \| Cleantech Business Growth Experts" | 30+ years, 150+ MW, 400+ episodes | Yes | PASS |
| Services | "Our Services" template title | Service descriptions | Yes | PASS |
| Each Service (x7) | Unique per service | Unique descriptions | Yes | PASS |
| Podcast Listing | "Clean Power Hour Podcast" | 400+ episodes mention | Yes | PASS |
| Episode Pages (x401) | Dynamic from RSS title | Dynamic from RSS description | Yes | PASS |
| Blog Listing | "Blog" template title | Blog description | Yes | PASS |
| Blog Posts | Dynamic from frontmatter | Dynamic from frontmatter | Yes | PASS |
| About | "About Tim Montague" | Bio summary | Yes | PASS |
| Training | "Solar & Clean Energy Training" | NABCEP, HeatSpring mention | Yes | PASS |
| Contact | "Contact" template title | Contact info | Yes | PASS |
| Shop | "Clean Power Hour Shop" | Merchandise description | Yes | PASS |

---

## SEO Infrastructure

- [x] `sitemap.ts` generates all 434+ URLs with priorities and changeFrequencies
- [x] `robots.ts` allows all paths except `/api/` and `/_next/`
- [x] `robots.ts` references sitemap at correct URL
- [x] JSON-LD structured data on homepage (ProfessionalService schema)
- [x] Canonical URLs set via `metadataBase` in root layout
- [x] Blog RSS feed at `/blog/feed.xml`
- [x] RSS `<link>` in `<head>` via layout metadata alternates

---

## Redirect Verification

All 15 redirects tested:

| Redirect | Status |
|---|---|
| `/episodes/test` → `/podcast/test` | 308 (Next.js permanent) |
| `/work-with-tim` → `/services` | 308 |
| `/happenings` → `/events` | 308 |
| `/strategy` → `/services/ci-strategy` | 308 |
| `/solarconsulting` → `/services/solar-consulting` | 308 |
| `/careercoaching` → `/services/career-coaching` | 308 |
| `/executivecoaching` → `/services/executive-coaching` | 308 |
| `/cleanpower` → `/services/clean-power-method` | 308 |
| `/cleantech` → `/services/mastermind` | 308 |
| `/bookameeting` → `/contact` | 308 |
| `/book-online` → `/contact` | 308 |
| `/sponsors` → `/podcast/sponsors` | 308 |
| `/media-kit` → `/about/media-kit` | 308 |
| `/reviews` → `/about/reviews` | 308 |
| `/privacy-policy` → `/privacy` | 308 |

---

## Performance Notes

- All pages are statically generated (SSG) — no server-side rendering at request time
- Images use Next.js `<Image>` component with automatic optimization
- Fonts loaded with `display: "swap"` to prevent FOIT
- CSS is minimal (Tailwind utility classes, no unused base styles)
- External scripts: none (no analytics yet — recommend adding in Phase 14)

---

## Issues Found

1. **Footer missing C&I Strategy link** — only 6 of 7 services listed. **Fix:** Added C&I Strategy to footer services array.
2. **No blog RSS feed** — missing `/blog/feed.xml` route. **Fix:** Created RSS route handler.
3. **No `/tools` page** — footer links to `/tools` but page didn't exist. **Fix:** Created tools placeholder page.
