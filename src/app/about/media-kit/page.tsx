import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Clean Power Hour podcast media kit. 1M+ downloads, 45,500 monthly listeners, 23K LinkedIn followers. Sponsorship opportunities for cleantech brands.",
  openGraph: {
    title: "Media Kit | Clean Power Consulting Group",
    description:
      "Clean Power Hour podcast media kit. Sponsorship opportunities for cleantech brands.",
  },
};

const stats = [
  { value: "1M+", label: "Total Downloads" },
  { value: "45,500", label: "Monthly Listeners" },
  { value: "23K+", label: "LinkedIn Followers" },
  { value: "8K+", label: "YouTube Subscribers" },
];

const tiers = [
  {
    name: "Bronze",
    price: "$1,500/mo",
    features: [
      "Pre-roll ad read (30 seconds)",
      "Logo on episode show notes",
      "Social media mention (1x/month)",
    ],
  },
  {
    name: "Silver",
    price: "$3,000/mo",
    featured: true,
    features: [
      "Mid-roll ad read (60 seconds)",
      "Logo on website sponsors page",
      "Social media mentions (4x/month)",
      "Newsletter inclusion (2x/month)",
      "Backlink from cleanpower.group",
    ],
  },
  {
    name: "Gold",
    price: "$5,000/mo",
    features: [
      "Dedicated interview episode",
      "Pre-roll + mid-roll ad reads",
      "Premium website placement",
      "Social media campaign (8x/month)",
      "Newsletter feature (4x/month)",
      "YouTube video integration",
      "Custom content collaboration",
    ],
  },
];

export default function MediaKitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Media Kit
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Partner With the Clean Power Hour
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Reach the decision-makers driving the clean energy transition. Our audience is highly engaged, technically sophisticated, and ready to act.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--bg-white)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-[var(--color-solar-deep)]">
                  {stat.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-outfit)] text-sm font-medium text-[var(--color-mist)] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-[var(--bg-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)] mb-6">
                Our Audience
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  The Clean Power Hour audience consists of cleantech professionals, executives, entrepreneurs, investors, and policymakers who are actively building the clean energy future.
                </p>
                <p>
                  Our listeners include solar company owners, EPC project managers, utility-scale developers, energy storage specialists, C-suite executives at cleantech firms, and sustainability officers at Fortune 500 companies.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)] mb-6">
                Content Strategy
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  We publish 2-3 episodes per week covering solar, energy storage, microgrids, EVs, policy, and cleantech business strategy. Each episode features expert interviews with industry leaders.
                </p>
                <p>
                  Our content is distributed across Apple Podcasts, Spotify, YouTube, LinkedIn, and our email newsletter, ensuring maximum reach and engagement for sponsor messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-3">
              Sponsorship
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
              Sponsorship Packages
            </h2>
            <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
              All packages include a minimum 3-month commitment. Custom packages available upon request.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  tier.featured
                    ? "border-[var(--color-solar-deep)] shadow-xl ring-2 ring-[var(--color-solar-deep)]/20"
                    : "border-[var(--bg-slate)]"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-solar-deep)] text-white text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)]">
                  {tier.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-outfit)] text-3xl font-extrabold text-[var(--color-solar-deep)]">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[var(--color-success)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-charcoal)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-white">
            Interested in a Custom Package?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-white/70 max-w-xl mx-auto">
            We work with sponsors to create tailored campaigns that deliver results. Let&rsquo;s discuss what works for your brand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tim@cleanpowerhour.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg"
            >
              Contact for Sponsorship
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              General Inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
