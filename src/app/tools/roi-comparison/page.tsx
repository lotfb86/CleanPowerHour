import Link from "next/link";
import type { Metadata } from "next";
import { RoiComparisonTool } from "@/components/tools/RoiComparisonTool";

export const metadata: Metadata = {
  title: "Solar vs. Grid ROI Comparison",
  description:
    "Compare 25-year costs of grid power vs. commercial solar. See your break-even year, lifetime savings, and Net Present Value advantage with interactive charts.",
  openGraph: {
    title: "Solar vs. Grid ROI Comparison | Clean Power Consulting Group",
    description:
      "Free ROI comparison tool: grid power vs. commercial solar over 25 years with NPV analysis.",
  },
};

export default function RoiComparisonPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <span className="px-3 py-1 bg-[var(--color-solar-deep)]/20 text-[var(--color-solar)] text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full uppercase tracking-wider">
              Financial Analysis
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Solar vs. Grid ROI Comparison
          </h1>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 max-w-2xl leading-relaxed">
            See the 25-year total cost of staying on grid power vs. investing in commercial solar. Includes NPV analysis, break-even calculation, and cumulative cost charts.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--bg-slate)] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <RoiComparisonTool />
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[var(--bg-white)] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-6">
            Methodology & Assumptions
          </h2>
          <div className="prose prose-slate max-w-none font-[family-name:var(--font-newsreader)]">
            <ul className="space-y-3 text-[var(--color-slate)]">
              <li><strong className="text-[var(--color-charcoal)]">Analysis period:</strong> 25 years (standard commercial solar warranty)</li>
              <li><strong className="text-[var(--color-charcoal)]">Discount rate:</strong> 6% for NPV calculations</li>
              <li><strong className="text-[var(--color-charcoal)]">Rate escalation:</strong> 2.5% annual grid electricity increase (EIA historical avg)</li>
              <li><strong className="text-[var(--color-charcoal)]">Solar sizing:</strong> 85% of annual load, 80% performance ratio</li>
              <li><strong className="text-[var(--color-charcoal)]">O&M cost:</strong> $12/kW/year for commercial solar</li>
              <li><strong className="text-[var(--color-charcoal)]">Module degradation:</strong> 0.5% per year</li>
              <li><strong className="text-[var(--color-charcoal)]">Federal ITC:</strong> 30% under the Inflation Reduction Act</li>
              <li><strong className="text-[var(--color-charcoal)]">Note:</strong> Does not include state/local incentives, MACRS depreciation, or SREC revenue which may further improve solar economics</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
