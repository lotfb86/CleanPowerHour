import Link from "next/link";
import type { Metadata } from "next";
import { BatteryStorageSizing } from "@/components/tools/BatteryStorageSizing";

export const metadata: Metadata = {
  title: "Battery Storage Sizing Guide",
  description:
    "Size your commercial battery storage system for demand management, TOU arbitrage, backup power, or solar self-consumption. ITC-adjusted cost and payback analysis.",
  openGraph: {
    title: "Battery Storage Sizing Guide | Clean Power Consulting Group",
    description:
      "Free commercial battery sizing calculator with multi-use-case optimization and financial projections.",
  },
};

export default function BatterySizingPage() {
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
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-electric-deep)]/20 text-[var(--color-electric)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
              </svg>
            </div>
            <span className="px-3 py-1 bg-[var(--color-electric-deep)]/20 text-[var(--color-electric)] text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full uppercase tracking-wider">
              Energy Storage
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Battery Storage Sizing Guide
          </h1>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 max-w-2xl leading-relaxed">
            Select your use cases — demand management, TOU arbitrage, backup, or solar shifting — and get a right-sized battery recommendation with cost and savings analysis.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--bg-slate)] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <BatteryStorageSizing />
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
              <li><strong className="text-[var(--color-charcoal)]">Battery cost:</strong> NREL ATB 2024, $345/kWh installed (4-hour LFP system)</li>
              <li><strong className="text-[var(--color-charcoal)]">Federal ITC:</strong> 30% standalone storage ITC under the Inflation Reduction Act</li>
              <li><strong className="text-[var(--color-charcoal)]">Round-trip efficiency:</strong> 88% for LFP battery systems</li>
              <li><strong className="text-[var(--color-charcoal)]">Degradation:</strong> 2% annual capacity degradation</li>
              <li><strong className="text-[var(--color-charcoal)]">Demand charges:</strong> $15/kW/month commercial average (varies significantly by utility)</li>
              <li><strong className="text-[var(--color-charcoal)]">TOU spread:</strong> $0.08/kWh average on-peak to off-peak differential</li>
              <li><strong className="text-[var(--color-charcoal)]">Demand shaving:</strong> Assumes 30% peak reduction with 2-hour discharge</li>
              <li><strong className="text-[var(--color-charcoal)]">Backup sizing:</strong> 40% of peak demand as critical load</li>
              <li><strong className="text-[var(--color-charcoal)]">System configuration:</strong> C/4 rate (4-hour duration) as default</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
