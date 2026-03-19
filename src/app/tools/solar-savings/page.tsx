import Link from "next/link";
import type { Metadata } from "next";
import { SolarSavingsEstimator } from "@/components/tools/SolarSavingsEstimator";

export const metadata: Metadata = {
  title: "Solar Savings Estimator",
  description:
    "Estimate your commercial solar savings, payback period, and environmental impact. Uses EIA electricity rates, NREL solar irradiance, and EPA emissions data for all 50 states.",
  openGraph: {
    title: "Solar Savings Estimator | Clean Power Consulting Group",
    description:
      "Free solar savings calculator for commercial properties. State-specific data, 30% ITC, 25-year projections.",
  },
};

export default function SolarSavingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-outfit)] text-white/50 hover:text-white/80 transition-colors duration-200 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Tools
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-solar-deep)]/20 text-[var(--color-solar)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <span className="px-3 py-1 bg-[var(--color-solar-deep)]/20 text-[var(--color-solar)] text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full uppercase tracking-wider">
              Commercial Solar
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Solar Savings Estimator
          </h1>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 max-w-2xl leading-relaxed">
            Enter your state, monthly electric bill, and available roof area to see your potential solar savings, payback period, and environmental impact over 25 years.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--bg-slate)] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SolarSavingsEstimator />
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[var(--bg-white)] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-6">
            Methodology & Data Sources
          </h2>
          <div className="prose prose-slate max-w-none font-[family-name:var(--font-newsreader)]">
            <ul className="space-y-3 text-[var(--color-slate)]">
              <li><strong className="text-[var(--color-charcoal)]">Electricity rates:</strong> EIA state-level commercial averages (2024)</li>
              <li><strong className="text-[var(--color-charcoal)]">Solar irradiance:</strong> NREL TMY data, peak sun hours by state</li>
              <li><strong className="text-[var(--color-charcoal)]">Installation cost:</strong> SEIA/Wood Mackenzie Q3 2024 benchmark ($1.64/W commercial)</li>
              <li><strong className="text-[var(--color-charcoal)]">Federal ITC:</strong> 30% under the Inflation Reduction Act</li>
              <li><strong className="text-[var(--color-charcoal)]">System sizing:</strong> Covers ~85% of usage, 80% performance ratio, 100 sq ft/kW</li>
              <li><strong className="text-[var(--color-charcoal)]">Degradation:</strong> 0.5% annual module degradation</li>
              <li><strong className="text-[var(--color-charcoal)]">Rate escalation:</strong> 2.5% annual electricity cost increase</li>
              <li><strong className="text-[var(--color-charcoal)]">CO2 factors:</strong> EPA eGRID 2022 state-level emissions</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
