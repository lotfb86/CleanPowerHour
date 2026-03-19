import Link from "next/link";
import type { Metadata } from "next";
import { CarbonFootprintCalculator } from "@/components/tools/CarbonFootprintCalculator";

export const metadata: Metadata = {
  title: "Carbon Footprint Calculator",
  description:
    "Calculate your business carbon footprint across electricity, natural gas, vehicle fleet, and travel. Get actionable decarbonization strategies ranked by impact.",
  openGraph: {
    title: "Carbon Footprint Calculator | Clean Power Consulting Group",
    description:
      "Free commercial carbon footprint calculator with EPA-verified emissions factors and reduction strategies.",
  },
};

export default function CarbonFootprintPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <span className="px-3 py-1 bg-[var(--color-electric-deep)]/20 text-[var(--color-electric)] text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full uppercase tracking-wider">
              Decarbonization
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Carbon Footprint Calculator
          </h1>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 max-w-2xl leading-relaxed">
            Understand your facility&rsquo;s total emissions across electricity, gas, fleet, and business travel. See where the biggest reduction opportunities are.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--bg-slate)] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <CarbonFootprintCalculator />
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
              <li><strong className="text-[var(--color-charcoal)]">Grid emissions:</strong> EPA eGRID 2022, state-level CO2 output emission rates (lbs CO2/kWh)</li>
              <li><strong className="text-[var(--color-charcoal)]">Natural gas:</strong> EPA standard factor, 11.7 lbs CO2 per therm</li>
              <li><strong className="text-[var(--color-charcoal)]">Gasoline:</strong> EPA standard factor, 19.6 lbs CO2 per gallon</li>
              <li><strong className="text-[var(--color-charcoal)]">Diesel:</strong> EPA standard factor, 22.4 lbs CO2 per gallon</li>
              <li><strong className="text-[var(--color-charcoal)]">Air travel:</strong> EPA, 0.488 lbs CO2 per passenger-mile</li>
              <li><strong className="text-[var(--color-charcoal)]">Hotel stays:</strong> Cornell Hospitality Research, 28.5 kg CO2 per night</li>
              <li><strong className="text-[var(--color-charcoal)]">Equivalencies:</strong> EPA Greenhouse Gas Equivalencies Calculator</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
