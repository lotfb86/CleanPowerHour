# REBUILD PLAN — Clean Power Consulting Group + Clean Power Hour Unified Website

## 1. SITE ARCHITECTURE

### Primary Navigation
```
Home (/)
Services (/services)
  ├── Solar Consulting (/services/solar-consulting)
  ├── Career Coaching (/services/career-coaching)
  ├── Executive Coaching (/services/executive-coaching)
  ├── CLEAN Power Market Expansion (/services/clean-power-method)
  ├── Cleantech Mastermind (/services/mastermind)
  ├── AI Consulting (/services/ai-consulting)
  └── C&I Strategy (/services/ci-strategy)
Podcast (/podcast)
  ├── Episode Listing with Search/Filter (/podcast)
  ├── Individual Episode Pages (/podcast/[slug]) — 401+ static pages
  └── Sponsors (/podcast/sponsors)
Training (/training)
Book (/book) — "Wired for Sun" landing page
Blog (/blog)
  ├── Blog Listing (/blog)
  └── Individual Posts (/blog/[slug])
About (/about)
  ├── About Tim & John (/about)
  ├── Media Kit (/about/media-kit)
  └── Reviews & Testimonials (/about/reviews)
Contact (/contact)
```

### Secondary/Footer Navigation
```
Shop (/shop) — MerchyMe landing page
Events (/events)
Privacy Policy (/privacy)
Terms of Service (/terms)
Fulfillment Policy (/fulfillment)
```

### URL Structure Rules
- All URLs lowercase, hyphenated, no trailing slashes
- Podcast episodes: /podcast/[slug-from-title]
- Blog posts: /blog/[slug-from-title]
- Services: /services/[service-slug]
- No date-based URLs for blog (cleaner, more evergreen)

### Internal Linking Strategy
- Every service page links to related podcast episodes
- Every podcast episode page has a CTA to book a consultation
- Blog posts link to relevant services and episodes
- About page links to services, book, and podcast
- Homepage features latest episodes + primary service CTAs
- Training page links to relevant episodes discussing training topics
- Reviews appear on: dedicated page, homepage snippet, service pages

---

## 2. DESIGN DIRECTION

### Aesthetic Commitment
**"Industrial Editorial — Clean Energy Authority"**

A refined, editorial-quality design that feels like a premium business publication meets the energy transition. Think: if McKinsey and Patagonia had a design baby raised by the energy industry. Bold typographic hierarchy, generous whitespace, subtle industrial textures (grid patterns, circuit-like lines, solar cell patterns), and a restrained color palette with one electrifying accent.

The unforgettable thing: seamless integration of a world-class consulting presence with 400+ episodes of deep industry content. No competitor has both.

### Color System

All colors defined as CSS custom properties. Never hardcode hex values outside token definitions.

#### Primary Palette
| Token | Hex | Role | Contrast on White |
|-------|-----|------|-------------------|
| `--color-midnight` | #0A1628 | Primary text, dark sections | 16.4:1 ✅ AA |
| `--color-charcoal` | #1E293B | Secondary text, headings | 12.6:1 ✅ AA |
| `--color-slate` | #475569 | Tertiary text, captions | 5.9:1 ✅ AA |
| `--color-mist` | #64748B | Placeholder, disabled, meta text | 4.8:1 ✅ AA |

#### Accent Palette
| Token | Hex | Role | On White | On Midnight |
|-------|-----|------|----------|-------------|
| `--color-solar` | #D97706 | Primary accent — warm amber | 3.6:1 ⚠️ Large | N/A |
| `--color-solar-deep` | #B45309 | Accessible accent for normal text | 4.8:1 ✅ AA | N/A |
| `--color-electric` | #0EA5E9 | Secondary accent — decorative/large text only | 2.8:1 ⚠️ Decorative | 6.5:1 ✅ AA |
| `--color-electric-deep` | #0369A1 | Accessible electric for normal text | 5.9:1 ✅ AA | N/A |

#### Background Palette
| Token | Hex | Role |
|-------|-----|------|
| `--bg-white` | #FFFFFF | Primary background |
| `--bg-warm` | #FFFBF5 | Warm off-white sections |
| `--bg-cool` | #F0F9FF | Cool blue-tinted sections |
| `--bg-slate` | #F1F5F9 | Neutral gray sections |
| `--bg-dark` | #0A1628 | Dark sections (midnight) |
| `--bg-dark-alt` | #1E293B | Dark section variation |

#### Semantic Colors
| Token | Hex | Role |
|-------|-----|------|
| `--color-success` | #059669 | Success states |
| `--color-warning` | #D97706 | Warning states (reuses solar) |
| `--color-error` | #DC2626 | Error states |
| `--color-info` | #0EA5E9 | Info states (reuses electric) |

#### CTA Button Colors
- Primary CTA: `--color-solar-deep` (#B45309) background, white text → 6.2:1 ✅
- Secondary CTA: `--bg-dark` (#0A1628) background, white text → 16.4:1 ✅
- Ghost CTA: Transparent, `--color-charcoal` text, 1px border

**Color Philosophy:**
- Dominant: Deep midnight/charcoal text creates authority
- Sharp accent: Solar amber draws the eye to CTAs and key elements
- Supporting: Electric blue for links and interactive elements
- The palette avoids both "generic corporate blue" and "cliche eco green"
- Black/white logo works perfectly on both light and dark backgrounds

### Typography

#### Font Selection
- **Display/Headings:** **Outfit** (Google Fonts) — Geometric sans-serif with personality. Clean, modern, distinctive without being trendy. Weights: 400, 500, 600, 700, 800.
- **Body:** **Newsreader** (Google Fonts) — Refined serif with excellent readability at body sizes. Provides editorial quality contrast against geometric headings. Weights: 400, 400i, 500, 600.
- **Mono/Code/Labels:** **JetBrains Mono** or system monospace — For episode numbers, stats, timestamps.

#### Typographic Scale
| Level | Font | Size (desktop) | Size (mobile) | Weight | Line Height |
|-------|------|----------------|---------------|--------|-------------|
| Display | Outfit | 72px / 4.5rem | 40px / 2.5rem | 800 | 1.1 |
| H1 | Outfit | 48px / 3rem | 32px / 2rem | 700 | 1.2 |
| H2 | Outfit | 36px / 2.25rem | 28px / 1.75rem | 700 | 1.25 |
| H3 | Outfit | 28px / 1.75rem | 22px / 1.375rem | 600 | 1.3 |
| H4 | Outfit | 22px / 1.375rem | 18px / 1.125rem | 600 | 1.35 |
| Body | Newsreader | 18px / 1.125rem | 16px / 1rem | 400 | 1.6 |
| Body (dark bg) | Newsreader | 18px / 1.125rem | 16px / 1rem | 400 | 1.7 |
| Small | Newsreader | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption/Label | Outfit | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 |
| Stat/Number | Outfit | varies | varies | 700 | 1.0 |

#### Typography Rules
- Body text minimum 16px on all viewports
- Dark backgrounds: line-height bumps to 1.7
- Headings: tight tracking (-0.02em for display, -0.01em for H1-H2)
- Never more than 75ch per line for body text (optimal: 65ch)

### Component Style Guide

#### Buttons
- Primary: Rounded-lg, solar-deep background, white text, subtle shadow, scale(1.02) on hover
- Secondary: Rounded-lg, midnight background, white text
- Ghost: Transparent, charcoal border, charcoal text → solar-deep on hover
- All buttons: 48px minimum touch target, focus ring with electric-deep color

#### Cards
- Rounded-xl, subtle shadow, white background
- Hover: translate-y(-2px), enhanced shadow
- Episode cards: Artwork left, content right (horizontal on desktop, stacked on mobile)
- Service cards: Icon top, heading, description, CTA bottom

#### Sections
- Alternate between bg-white, bg-warm, bg-cool, bg-slate
- Never two consecutive sections with the same background
- Dark sections (bg-dark) used sparingly for emphasis (hero, testimonials, CTA blocks)
- Generous padding: py-24 (desktop), py-16 (mobile)

#### Animations & Motion
- Page load: Staggered fade-up reveals (animation-delay: 0.1s increments)
- Scroll-triggered: Elements fade up as they enter viewport (IntersectionObserver)
- Hover: translateY(-2px) on cards, color transitions on links/buttons (200ms ease)
- Stats: Counter animation on scroll-into-view
- All animations respect prefers-reduced-motion
- CSS-only for HTML, Framer Motion for React interactions
- Only animate transform and opacity for 60fps

#### Visual Textures & Depth
- Subtle dot grid pattern overlay on dark sections (opacity: 0.05)
- Gradient mesh on hero section (midnight → charcoal with solar accent glow)
- Noise texture overlay on image sections (very subtle, adds analog warmth)
- Solar cell / circuit board line patterns as decorative elements
- Generous layering: overlapping elements, cards breaking section boundaries

---

## 3. DESIGN SYSTEM COMMITMENT

**Direction: Industrial Editorial — Clean Energy Authority**

Every page built from this plan should feel like it belongs to the same brand. The consulting pages are more restrained and editorial; the podcast pages are more content-dense and dynamic; but they share the same type system, color tokens, component library, and spatial rhythm.

The podcast section visually connects through shared design tokens but feels distinct through:
- More content density (episode grids vs. consulting whitespace)
- Audio player UI elements (waveform patterns, playback controls)
- Episode artwork thumbnails adding visual variety
- Slightly more relaxed layout (editorial → content hub)

---

## 4. COPY STRATEGY

### Messaging Pillars
1. **Consulting Authority:** Tim is THE cleantech business growth expert. 30+ years, $200M+ in sales, 150+ MW developed, scaled companies, Silicon Valley to solar.
2. **Podcast Credibility:** 400+ episodes = 400+ industry conversations. Every major player has been on the show. This is the industry's living archive.
3. **Energy Transition Mission:** Not just business — a mission to decarbonize the economy. Every consultation, every episode, every tool serves this mission.

### Tone of Voice
- Authoritative but approachable (expert friend, not professor)
- Mission-driven but pragmatic (idealist with a spreadsheet)
- Confident but not arrogant (proven track record speaks for itself)
- Technical depth accessible to executives (no jargon without context)

### Key Copy Decisions
- Tim's bio: Use the cleanpowerhour.com version (150+ MW, more detailed) as the canonical version
- Hero: Consulting-first. "Growing cleantech companies with 30+ years of expertise and 400+ episodes of industry insight."
- CTAs: Action-specific, not generic. "Book Your Free Strategy Call" not "Contact Us"
- Stats prominently displayed: 150+ MW, 400+ episodes, 1M+ views, 23K+ LinkedIn, 30+ years
- Social proof: Sprinkled near CTAs, not siloed on a separate page only

### Content Deduplication
- Tim's bio: One canonical version, used with slight variations per context
- Service descriptions: Fresh copy for each service, drawing from both sites
- Blog: All 5 posts from both sites migrated to /blog with original dates

---

## 5. SEO IMPLEMENTATION PLAN

### Target Keywords Per Page
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Home | cleantech consultant | solar business coach, clean energy consulting |
| Solar Consulting | solar consulting services | commercial solar consultant, C&I solar |
| Career Coaching | cleantech career coaching | solar career transition, renewable energy careers |
| Executive Coaching | cleantech executive coaching | solar executive mentor |
| CLEAN Power | solar market expansion | clean energy growth strategy |
| Mastermind | cleantech mastermind group | solar executive peer group |
| AI Consulting | cleantech AI consulting | AI for solar companies |
| C&I Strategy | commercial solar strategy | C&I solar sales |
| Podcast | clean energy podcast | solar podcast, renewable energy show |
| Training | solar training courses | NABCEP certification training |
| Book | commercial solar playbook | Wired for Sun |
| Blog | (varies per post) | cleantech insights, solar industry news |

### Meta Strategy
- Every page: unique title (<60 chars), unique meta description (<160 chars)
- Title format: "[Page-Specific Title] | Clean Power Consulting Group"
- OG tags: title, description, image (custom OG image per page type)
- Twitter cards: summary_large_image

### Schema Types to Implement
```
Organization — Clean Power Consulting Group
  ├── sameAs: [all social URLs]
  ├── contactPoint: phone, email
  └── address: business address

Person — Tim Montague
  ├── jobTitle: "President & Founder"
  ├── worksFor: Organization
  └── sameAs: [LinkedIn, Twitter, etc.]

PodcastSeries — Clean Power Hour
  ├── name, description, image
  ├── url: /podcast
  └── webFeed: RSS URL

PodcastEpisode (per episode page)
  ├── name, datePublished, duration
  ├── url, associatedMedia (audio)
  └── partOfSeries: PodcastSeries

Service (per service page)
  ├── name, description, provider
  └── areaServed, serviceType

Book — Wired for Sun
  ├── name, author, isbn
  └── url (Amazon)

Review (per review)
  ├── author, datePublished
  ├── reviewRating: 5
  └── itemReviewed: PodcastSeries

FAQPage (on service pages with FAQ sections)
```

### Sitemap & Robots.txt
- Auto-generated sitemap.xml with all pages including 401+ episode pages
- robots.txt: Allow all, point to sitemap
- Canonical URLs on every page
- No-index on: legal pages, search results pages

### 301 Redirect Implementation
- Documented in REDIRECT_MAP.md (generated by SEO audit agent)
- Implemented in next.config.js redirects array or vercel.json
- All cleanpowerhour.com URLs → cleanpower.group equivalents

---

## 6. PODCAST INTEGRATION PLAN

### RSS Feed Parsing
- **Build-time script:** Fetch https://feeds.buzzsprout.com/1765472.rss at build time
- **Caching:** Cache RSS XML locally in `.cache/rss-feed.xml` to avoid hitting Buzzsprout on every dev build
- **Data flow:** RSS XML → parse → episodes.json → Next.js generateStaticParams → 401+ static pages
- **Slug generation:** Title → lowercase, remove special chars, hyphenate, truncate at 80 chars

### Episode Page Template
```
/podcast/[slug]
├── Episode title (H1)
├── Meta bar: Date · Episode #XXX · Duration
├── Embedded Buzzsprout player (iframe)
├── Show notes / description (parsed HTML)
├── "Listen On" buttons: Apple, Spotify, YouTube, RSS
├── Episode artwork (if available, fallback to podcast artwork)
├── Related episodes (prev/next chronologically)
├── Sponsor attribution strip
├── CTA: "Book a Free Strategy Call with Tim"
├── Social sharing buttons
└── JSON-LD PodcastEpisode schema
```

### Episode Listing Page (/podcast)
```
├── "Latest Episode" hero with embedded player
├── Podcast description & subscribe buttons
├── Sponsor logo strip
├── Search bar (client-side, searching titles + descriptions)
├── Filter: by year, by topic tag (if parseable from titles)
├── Paginated grid: 24 episodes per page
├── Each card: artwork, title, date, episode #, brief description
└── JSON-LD PodcastSeries schema
```

### Buzzsprout Player Integration
- Use Buzzsprout's iframe embed: `<iframe src="https://www.buzzsprout.com/1765472/{episode-id}?client_source=small_player&iframe=true">`
- Extract episode IDs from the audio URLs in the RSS feed
- Fallback: Direct audio element with <source> pointing to .mp3 URL

### ISR Configuration
- Revalidation period: 3600 seconds (1 hour)
- New episodes (published Tuesdays) auto-generate pages within 1 hour
- No full rebuild needed for new content

### Platform Links
- Apple Podcasts: https://podcasts.apple.com/us/podcast/clean-power-hour/id1582667621
- Spotify: https://open.spotify.com/show/4QpRZoiYIV72ZNz7hTYX0W
- YouTube: https://www.youtube.com/@cleanpowerhour
- RSS: https://feeds.buzzsprout.com/1765472.rss
- (Google Podcasts REMOVED — discontinued 2024)

---

## 7. BLOG INFRASTRUCTURE

### Content Storage
- MDX files in `/content/blog/`
- Frontmatter: title, date, description, author, tags, featuredImage

### Existing Posts to Migrate (5 total)
**From cleanpower.group:**
1. "From Resi to Commercial Solar: A Solar Industry Perspective" — Apr 8, 2025
2. "Montague discusses clean energy transition on Earth911 podcast" — Dec 16, 2024
3. "Tips for Connecting with Leads in the C&I Solar Sales Process" — Nov 1, 2022

**From cleanpowerhour.com:**
4. "Wired for Intelligence: How AI is Revolutionizing the Clean Energy Industry" — Nov 11, 2025
5. "Why I Believe in a Smarter, Safer Clean Energy Future: Solar, Storage & AI" — Nov 4, 2025

### Blog Features
- Listing page with newest-first sort, tag filtering
- Individual post pages with: beautiful long-form typography, table of contents (for long posts), social sharing, author bio card, CTA at bottom, related posts
- RSS feed for blog (/blog/feed.xml)

---

## 8. IMAGE STRATEGY

| Image Category | Decision | Details |
|----------------|----------|---------|
| Tim's headshot | KEEP | Excellent quality (1.4MB studio shot) |
| John's headshot | KEEP | Authentic on-site photo, may enhance |
| CPH logo (badge) | RECREATE | Need SVG version. Trace from JPEG. |
| Podcast artwork | KEEP | High quality from Buzzsprout |
| WSI badge | KEEP | Good quality PNG |
| Sponsor logos (9) | KEEP | All downloaded, variable quality |
| Service page images | REPLACE | Current stock photos are generic. Source high-quality solar/cleantech imagery from Unsplash or generate |
| Hero backgrounds | CREATE NEW | Dynamic gradients + subtle textures per design system |
| Blog post images | MIGRATE + REPLACE | Migrate existing, replace low quality |
| Episode thumbnails | PULL FROM RSS | Use artworkUrl from episodes.json |

---

## 9. TECHNICAL PLAN

### Tech Stack (Confirmed)
- **Framework:** Next.js 14+ (App Router) with SSG default
- **Styling:** Tailwind CSS v3+
- **Content:** MDX for blog, JSON for episodes
- **Deployment:** Vercel via GitHub
- **Package manager:** pnpm
- **Linting:** ESLint + Prettier
- **Accessibility:** @axe-core/playwright as dev dependency

### Project Structure
```
cleanpower-site/
├── app/
│   ├── layout.tsx          (root layout, fonts, analytics)
│   ├── page.tsx            (homepage)
│   ├── services/
│   │   ├── page.tsx        (services listing)
│   │   └── [slug]/page.tsx (individual services)
│   ├── podcast/
│   │   ├── page.tsx        (episode listing)
│   │   ├── [slug]/page.tsx (individual episodes)
│   │   └── sponsors/page.tsx
│   ├── blog/
│   │   ├── page.tsx        (blog listing)
│   │   └── [slug]/page.tsx (individual posts)
│   ├── training/page.tsx
│   ├── book/page.tsx
│   ├── about/
│   │   ├── page.tsx        (about + team)
│   │   ├── media-kit/page.tsx
│   │   └── reviews/page.tsx
│   ├── contact/page.tsx
│   ├── shop/page.tsx
│   ├── events/page.tsx
│   ├── tools/              (Phase 11b)
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── fulfillment/page.tsx
│   └── not-found.tsx       (custom 404)
├── components/
│   ├── ui/                 (design system primitives)
│   ├── layout/             (header, footer, nav)
│   ├── sections/           (reusable page sections)
│   └── podcast/            (episode card, player, etc.)
├── content/
│   └── blog/               (MDX files)
├── data/
│   ├── episodes.json       (parsed RSS feed)
│   ├── services.ts         (service definitions)
│   ├── sponsors.ts         (sponsor data)
│   ├── reviews.ts          (review data)
│   └── events.ts           (event calendar data)
├── lib/
│   ├── rss-parser.ts       (build-time RSS fetching)
│   ├── mdx.ts              (MDX processing)
│   └── utils.ts            (shared utilities)
├── public/
│   ├── images/             (optimized images)
│   ├── fonts/              (if self-hosting)
│   └── favicon/            (favicon set)
├── scripts/
│   ├── parse-rss.js        (RSS feed parser)
│   └── check-contrast.js   (WCAG contrast checker)
├── styles/
│   └── globals.css         (CSS custom properties, base styles)
└── next.config.js          (redirects, image domains, etc.)
```

### Third-Party Integrations
| Service | Integration Method |
|---------|-------------------|
| Buzzsprout | RSS feed parsing + iframe player embed |
| Calendly | Inline embed widget on service pages |
| HeatSpring | External links with affiliate params |
| MerchyMe | External link from /shop landing page |
| Amazon | External link from /book landing page |
| YouTube | Video embeds on about/testimonials |
| Voiceflow | Evaluate: embed chatbot widget or rebuild |

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Largest Contentful Paint: < 2.5s
- First Input Delay: < 100ms
- Cumulative Layout Shift: < 0.1
- All images: WebP/AVIF via next/image
- Fonts: next/font with display: swap
- Code splitting: per-route automatic
- Static pages: all pages except ISR episode pages

---

## 10. ACCESSIBILITY TARGETS

- Zero axe-core critical/serious violations at launch
- WCAG AA across ALL color combinations (verified computationally, documented)
- Keyboard navigation: every interactive element reachable
- Focus indicators: visible, meeting contrast requirements
- Skip-to-main-content link on every page
- All form inputs with <label> elements
- ARIA only when native HTML is insufficient
- Color never the sole means of conveying information
- Logical heading hierarchy (one h1 per page)
- prefers-reduced-motion respected
- Podcast player keyboard-navigable and screen-reader friendly
- All images: descriptive alt text (decorative images: alt="")

---

*Rebuild Plan complete. Ready for Phase 6 (Build).*
