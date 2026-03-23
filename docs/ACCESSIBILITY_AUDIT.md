# Accessibility Audit: cleanpower.group

**Audit Date:** March 19, 2026
**Standard:** WCAG 2.1 AA
**Auditor:** Automated + manual review

---

## Executive Summary

The rebuilt site meets WCAG 2.1 AA standards across all tested criteria. Color contrast ratios have been verified, semantic HTML is used throughout, keyboard navigation works correctly, and screen reader support is implemented via proper heading hierarchy, ARIA labels, and skip navigation.

---

## Color Contrast (WCAG 1.4.3)

All text/background combinations verified against AA minimums (4.5:1 normal text, 3:1 large text):

| Text Color | Background | Ratio | Rating |
|---|---|---|---|
| `--midnight` (#0A1628) | `--bg-white` (#FFFFFF) | 18.1:1 | AAA |
| `--charcoal` (#1E293B) | `--bg-white` (#FFFFFF) | 14.6:1 | AAA |
| `--slate` (#475569) | `--bg-white` (#FFFFFF) | 7.6:1 | AAA |
| `--mist` (#64748B) | `--bg-white` (#FFFFFF) | 4.8:1 | AA |
| `--solar-deep` (#B45309) | `--bg-white` (#FFFFFF) | 5.0:1 | AA |
| `--electric-deep` (#0369A1) | `--bg-white` (#FFFFFF) | 5.9:1 | AA |
| white (#FFFFFF) | `--bg-dark` (#0A1628) | 18.1:1 | AAA |
| white (#FFFFFF) | `--solar-deep` (#B45309) | 5.0:1 | AA |

---

## Semantic HTML (WCAG 1.3.1)

- [x] Proper heading hierarchy (h1 → h2 → h3) on all pages
- [x] Single `<h1>` per page
- [x] `<nav>` element for header and mobile navigation
- [x] `<main>` element with `id="main-content"` for skip link target
- [x] `<footer>` with `role="contentinfo"`
- [x] `<section>` elements for page sections
- [x] Ordered/unordered lists for navigation and list content

---

## Keyboard Navigation (WCAG 2.1.1)

- [x] Skip-to-main-content link (visible on focus)
- [x] All interactive elements focusable via Tab
- [x] Focus-visible styles applied globally (`outline: 2px solid var(--color-electric-deep)`)
- [x] Mobile menu toggle accessible via keyboard
- [x] External links clearly indicated (open in new tab)

---

## Images & Media (WCAG 1.1.1)

- [x] All `<Image>` components have `alt` attributes
- [x] Decorative SVG icons have `aria-hidden` or are inside labeled containers
- [x] Logo images have descriptive alt text

---

## Motion & Animation (WCAG 2.3.1, 2.3.3)

- [x] `prefers-reduced-motion` media query reduces all animation durations to 0.01ms
- [x] No auto-playing video or audio
- [x] All hover transitions are subtle (200-300ms)

---

## Forms (WCAG 1.3.5, 3.3.2)

- [x] Contact page links to external Calendly booking (accessible third-party tool)
- [x] Email link provided as alternative contact method

---

## Responsive Design (WCAG 1.4.10)

- [x] Content reflows at 320px viewport width without horizontal scrolling
- [x] Touch targets meet 44x44px minimum on mobile
- [x] Text scales properly with browser zoom up to 200%

---

## Known Limitations

1. **Third-party embeds:** Buzzsprout podcast player accessibility depends on Buzzsprout's implementation
2. **External links:** HeatSpring, Calendly, and MerchyMe accessibility is outside our control
3. **Contact form:** Currently uses mailto link; a dedicated accessible form is recommended for Phase 11
