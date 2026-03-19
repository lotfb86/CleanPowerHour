import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Energy Tools & Calculators",
  description:
    "Free clean energy tools and calculators. Solar savings estimator, carbon footprint calculator, and more coming soon.",
  openGraph: {
    title: "Tools & Calculators | Clean Power Consulting Group",
    description:
      "Free clean energy tools and calculators from Clean Power Consulting Group.",
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
            Resources
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Clean Energy Tools
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Free calculators and tools to help you evaluate clean energy
            opportunities and make data-driven decisions.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="bg-[var(--bg-warm)] rounded-2xl p-12 lg:p-16">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--color-solar-deep)]/10 text-[var(--color-solar-deep)] mx-auto mb-8">
              <svg
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17l-5.1-2.55a1.5 1.5 0 010-2.68l5.1-2.55m0 7.78l5.1-2.55a1.5 1.5 0 000-2.68l-5.1-2.55m0 7.78V4.5m0 10.67V19.5"
                />
              </svg>
            </div>

            <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-4">
              Tools Coming Soon
            </h2>
            <p className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto mb-4">
              We&rsquo;re building a suite of free clean energy calculators and
              decision tools, including:
            </p>
            <ul className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-slate)] max-w-md mx-auto text-left space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-solar-deep)] mt-1">&#10003;</span>
                Solar Savings Estimator
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-solar-deep)] mt-1">&#10003;</span>
                Carbon Footprint Calculator
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-solar-deep)] mt-1">&#10003;</span>
                ROI Comparison Tool
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-solar-deep)] mt-1">&#10003;</span>
                Energy Storage Sizing Guide
              </li>
            </ul>
            <p className="font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-mist)]">
              Want to be notified when tools launch? Get in touch.
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16">
            <p className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-mist)] mb-4">
              Need a custom analysis for your project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] transition-colors duration-200"
            >
              Contact Tim
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
