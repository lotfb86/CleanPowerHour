import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Energy Tools & Calculators",
  description:
    "Free interactive clean energy tools: Solar Savings Estimator, Carbon Footprint Calculator, Solar vs. Grid ROI Comparison, and Battery Storage Sizing Guide. Data-driven decisions for your clean energy transition.",
  openGraph: {
    title: "Tools & Calculators | Clean Power Consulting Group",
    description:
      "Free clean energy tools and calculators from Clean Power Consulting Group. Estimate solar savings, calculate your carbon footprint, compare ROI, and size battery storage.",
  },
};

const tools = [
  {
    slug: "solar-savings",
    title: "Solar Savings Estimator",
    description:
      "Estimate your commercial solar potential, savings, payback period, and environmental impact based on your state, electricity bill, and available roof area.",
    features: [
      "State-specific electricity rates & solar irradiance",
      "30% Federal ITC included",
      "25-year savings projection with degradation",
      "CO2 offset & environmental equivalencies",
    ],
    accent: "solar" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    slug: "carbon-footprint",
    title: "Carbon Footprint Calculator",
    description:
      "Calculate your facility's total carbon footprint across electricity, natural gas, vehicle fleet, and business travel. Get actionable reduction strategies ranked by impact.",
    features: [
      "EPA-verified emissions factors by state",
      "Multi-source: electricity, gas, fleet, travel",
      "Visual emissions breakdown chart",
      "Ranked decarbonization opportunities",
    ],
    accent: "electric" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    slug: "roi-comparison",
    title: "Solar vs. Grid ROI Comparison",
    description:
      "Side-by-side comparison of 25-year costs: staying on grid power vs. investing in commercial solar. See your break-even year and lifetime NPV advantage.",
    features: [
      "25-year cost projection with 2.5% escalation",
      "Net Present Value (NPV) at 6% discount rate",
      "Visual break-even point identification",
      "Cumulative cost comparison chart",
    ],
    accent: "solar" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    slug: "battery-sizing",
    title: "Battery Storage Sizing Guide",
    description:
      "Right-size your commercial battery storage system based on your use cases: demand charge management, TOU arbitrage, backup power, or solar self-consumption.",
    features: [
      "Multi-use-case sizing optimization",
      "Demand charge shaving analysis",
      "Resilience/backup duration calculator",
      "ITC-adjusted financial projections",
    ],
    accent: "electric" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
      </svg>
    ),
  },
];

const accentStyles = {
  solar: {
    bg: "bg-[var(--color-solar-deep)]/10",
    text: "text-[var(--color-solar-deep)]",
    button: "bg-[var(--color-solar-deep)] hover:bg-[var(--color-solar)]",
    border: "border-[var(--color-solar-deep)]/20",
    gradient: "from-[var(--color-solar-deep)] to-[var(--color-solar)]",
  },
  electric: {
    bg: "bg-[var(--color-electric-deep)]/10",
    text: "text-[var(--color-electric-deep)]",
    button: "bg-[var(--color-electric-deep)] hover:bg-[var(--color-electric)]",
    border: "border-[var(--color-electric-deep)]/20",
    gradient: "from-[var(--color-electric-deep)] to-[var(--color-electric)]",
  },
};

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--bg-dark)] py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/unsplash/solar-farm-aerial.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Free Resources
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Clean Energy Tools
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Interactive calculators powered by real EIA, EPA, and NREL data.
            Make data-driven decisions about solar, storage, and decarbonization.
          </p>

          {/* Quick jump nav */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-[family-name:var(--font-outfit)] font-medium rounded-full hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                {tool.title}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, i) => {
              const styles = accentStyles[tool.accent];
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group bg-white rounded-2xl border border-[var(--bg-slate)] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden"
                >
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--bg-slate)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-outfit)] text-sm font-bold text-[var(--color-mist)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${styles.bg} ${styles.text} mb-6`}>
                    {tool.icon}
                  </div>

                  {/* Content */}
                  <h2 className="font-[family-name:var(--font-outfit)] text-xl lg:text-2xl font-bold text-[var(--color-midnight)] mb-3 group-hover:text-[var(--color-solar-deep)] transition-colors duration-200">
                    {tool.title}
                  </h2>
                  <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-8">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${styles.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <span className={`inline-flex items-center gap-2 px-6 py-3 ${styles.button} text-white text-sm font-[family-name:var(--font-outfit)] font-semibold rounded-xl transition-colors duration-200 shadow-sm group-hover:shadow-lg`}>
                    Launch Calculator
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="bg-[var(--bg-slate)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-3">
              Powered by Authoritative Data
            </h2>
            <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">
              All calculators use the latest publicly available data from federal agencies and research institutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "EIA", full: "Energy Information Administration", detail: "Electricity rates by state" },
              { name: "EPA", full: "Environmental Protection Agency", detail: "eGRID emissions factors" },
              { name: "NREL", full: "National Renewable Energy Lab", detail: "Solar irradiance data" },
              { name: "SEIA", full: "Solar Energy Industries Association", detail: "Installation cost benchmarks" },
            ].map((source) => (
              <div key={source.name} className="bg-white rounded-xl p-6 text-center">
                <p className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold text-[var(--color-midnight)] mb-1">
                  {source.name}
                </p>
                <p className="text-xs font-[family-name:var(--font-outfit)] text-[var(--color-mist)] mb-2">
                  {source.full}
                </p>
                <p className="text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">
                  {source.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-[var(--color-midnight)] mb-4">
            Need a Custom Analysis?
          </h2>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] mb-8">
            These tools provide estimates based on national averages. For a site-specific analysis with your actual utility tariff, shading, financing terms, and incentives, book a free strategy call with Tim.
          </p>
          <Link
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-lg font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
          >
            Book a Free Strategy Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
