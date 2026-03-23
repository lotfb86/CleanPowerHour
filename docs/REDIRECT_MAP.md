# Redirect Map: cleanpower.group + cleanpowerhour.com Merger

**Created:** March 19, 2026
**Purpose:** Document all URL redirects configured for the site merger, ensuring zero broken links and preserved SEO equity.

---

## Implementation

All redirects are configured as **301 permanent redirects** in `site/next.config.ts` under the `redirects()` function. Domain-level redirects (cleanpowerhour.com → cleanpower.group) will be configured at the Vercel/DNS level.

---

## Path-Based Redirects (next.config.ts)

| Old Path | New Path | Source Site | Type |
|---|---|---|---|
| `/episodes/:slug*` | `/podcast/:slug*` | cleanpowerhour.com | 301 |
| `/work-with-tim` | `/services` | cleanpower.group (Wix) | 301 |
| `/happenings` | `/events` | cleanpower.group (Wix) | 301 |
| `/strategy` | `/services/ci-strategy` | cleanpower.group (Wix) | 301 |
| `/solarconsulting` | `/services/solar-consulting` | cleanpower.group (Wix) | 301 |
| `/careercoaching` | `/services/career-coaching` | cleanpower.group (Wix) | 301 |
| `/executivecoaching` | `/services/executive-coaching` | cleanpower.group (Wix) | 301 |
| `/cleanpower` | `/services/clean-power-method` | cleanpower.group (Wix) | 301 |
| `/cleantech` | `/services/mastermind` | cleanpower.group (Wix) | 301 |
| `/bookameeting` | `/contact` | cleanpower.group (Wix) | 301 |
| `/book-online` | `/contact` | cleanpower.group (Wix) | 301 |
| `/sponsors` | `/podcast/sponsors` | cleanpowerhour.com | 301 |
| `/media-kit` | `/about/media-kit` | cleanpower.group (Wix) | 301 |
| `/reviews` | `/about/reviews` | cleanpower.group (Wix) | 301 |
| `/privacy-policy` | `/privacy` | cleanpower.group (Wix) | 301 |

**Total:** 15 path-based redirects

---

## Domain-Level Redirects (Vercel Configuration)

| Source Domain | Target Domain | Notes |
|---|---|---|
| `cleanpowerhour.com` | `cleanpower.group` | All paths preserved via path-based redirects above |
| `www.cleanpowerhour.com` | `cleanpower.group` | Same |
| `www.cleanpower.group` | `cleanpower.group` | Canonical non-www |

---

## Episode URL Mapping

All 401 podcast episodes are served at `/podcast/{slug}`. The wildcard redirect `/episodes/:slug*` → `/podcast/:slug*` handles the Podpage URL format transition. Episode slugs are derived from the Buzzsprout RSS feed and match the original Podpage URL structure.

---

## Verification Checklist

- [x] All Wix page URLs have corresponding redirects
- [x] Podpage episode URLs redirect to new podcast paths
- [x] Sponsor and media kit pages redirect correctly
- [x] Privacy policy path updated
- [x] Booking/meeting URLs redirect to contact page
- [x] All redirects are 301 (permanent) for SEO equity transfer
