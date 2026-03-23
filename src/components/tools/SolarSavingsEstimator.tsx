"use client";

import { useState, useMemo } from "react";
import {
  electricityRates,
  solarIrradiance,
  emissionsFactors,
  stateNames,
  COMMERCIAL_SOLAR_COST_PER_WATT,
  FEDERAL_ITC_RATE,
  SYSTEM_DEGRADATION_RATE,
  SYSTEM_LIFETIME_YEARS,
  ELECTRICITY_ESCALATION_RATE,
  EPA_CO2_PER_VEHICLE_TONS,
  EPA_CO2_PER_ACRE_FOREST_TONS,
  LBS_PER_METRIC_TON,
} from "@/data/energy-data";

interface Results {
  systemSizeKw: number;
  annualProductionKwh: number;
  year1Savings: number;
  lifetimeSavings: number;
  systemCost: number;
  costAfterItc: number;
  paybackYears: number;
  annualCo2OffsetTons: number;
  equivalentCars: number;
  equivalentAcres: number;
  monthlyBreakdown: { month: string; production: number; savings: number }[];
  cumulativeSavings: { year: number; savings: number; cost: number }[];
}

const MONTHLY_PRODUCTION_FACTORS = [
  0.058, 0.065, 0.085, 0.095, 0.105, 0.110,
  0.112, 0.105, 0.092, 0.078, 0.055, 0.040,
];
const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function SolarSavingsEstimator() {
  const [state, setState] = useState("IL");
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [roofArea, setRoofArea] = useState(10000);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "monthly" | "cumulative">("overview");

  const results = useMemo<Results | null>(() => {
    const rate = electricityRates[state];
    const irradiance = solarIrradiance[state];
    const emissionsFactor = emissionsFactors[state];
    if (!rate || !irradiance || !emissionsFactor) return null;

    const annualBill = monthlyBill * 12;
    const annualUsageKwh = annualBill / (rate / 100);

    // Size system to cover ~85% of usage (practical max for C&I)
    const targetKwh = annualUsageKwh * 0.85;
    const systemSizeKw = Math.min(
      targetKwh / (irradiance * 365 * 0.80), // 80% performance ratio
      roofArea / 100 // ~100 sq ft per kW for commercial
    );

    const annualProductionKwh = systemSizeKw * irradiance * 365 * 0.80;
    const year1Savings = annualProductionKwh * (rate / 100);
    const systemCost = systemSizeKw * COMMERCIAL_SOLAR_COST_PER_WATT * 1000;
    const costAfterItc = systemCost * (1 - FEDERAL_ITC_RATE);

    // Lifetime savings with degradation and escalation
    let lifetimeSavings = 0;
    const cumulativeSavings: { year: number; savings: number; cost: number }[] = [];
    let totalSavingsAccum = 0;
    for (let y = 1; y <= SYSTEM_LIFETIME_YEARS; y++) {
      const degradedProduction = annualProductionKwh * Math.pow(1 - SYSTEM_DEGRADATION_RATE, y - 1);
      const escalatedRate = (rate / 100) * Math.pow(1 + ELECTRICITY_ESCALATION_RATE, y - 1);
      const yearSavings = degradedProduction * escalatedRate;
      lifetimeSavings += yearSavings;
      totalSavingsAccum += yearSavings;
      cumulativeSavings.push({
        year: y,
        savings: totalSavingsAccum,
        cost: costAfterItc,
      });
    }

    const paybackYears = costAfterItc / year1Savings;

    const annualCo2OffsetLbs = annualProductionKwh * emissionsFactor;
    const annualCo2OffsetTons = annualCo2OffsetLbs / LBS_PER_METRIC_TON;

    const monthlyBreakdown = MONTHLY_PRODUCTION_FACTORS.map((factor, i) => ({
      month: MONTH_NAMES[i],
      production: annualProductionKwh * factor,
      savings: annualProductionKwh * factor * (rate / 100),
    }));

    return {
      systemSizeKw,
      annualProductionKwh,
      year1Savings,
      lifetimeSavings,
      systemCost,
      costAfterItc,
      paybackYears,
      annualCo2OffsetTons,
      equivalentCars: annualCo2OffsetTons / EPA_CO2_PER_VEHICLE_TONS,
      equivalentAcres: annualCo2OffsetTons / EPA_CO2_PER_ACRE_FOREST_TONS,
      monthlyBreakdown,
      cumulativeSavings,
    };
  }, [state, monthlyBill, roofArea]);

  const maxMonthlyProd = results
    ? Math.max(...results.monthlyBreakdown.map((m) => m.production))
    : 0;

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 lg:p-10 shadow-sm">
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-6">
          Enter Your Details
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* State */}
          <div>
            <label
              htmlFor="solar-state"
              className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2"
            >
              State
            </label>
            <select
              id="solar-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent transition-shadow"
            >
              {Object.entries(stateNames)
                .sort(([, a], [, b]) => a.localeCompare(b))
                .map(([abbr, name]) => (
                  <option key={abbr} value={abbr}>
                    {name}
                  </option>
                ))}
            </select>
          </div>

          {/* Monthly Bill */}
          <div>
            <label
              htmlFor="solar-bill"
              className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2"
            >
              Monthly Electric Bill
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-mist)] text-sm">$</span>
              <input
                id="solar-bill"
                type="number"
                min={100}
                max={500000}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent transition-shadow"
              />
            </div>
            <p className="mt-1 text-xs text-[var(--color-mist)]">Commercial monthly average</p>
          </div>

          {/* Roof Area */}
          <div>
            <label
              htmlFor="solar-roof"
              className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2"
            >
              Available Roof/Ground Area
            </label>
            <div className="relative">
              <input
                id="solar-roof"
                type="number"
                min={500}
                max={1000000}
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent transition-shadow"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-mist)] text-xs">sq ft</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
        >
          Calculate Savings
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Hero Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard
              label="Year 1 Savings"
              value={formatCurrency(results.year1Savings)}
              sublabel={`${formatNumber(results.annualProductionKwh)} kWh produced`}
              accent="solar"
            />
            <ResultCard
              label="25-Year Savings"
              value={formatCurrency(results.lifetimeSavings)}
              sublabel={`${(results.lifetimeSavings / results.costAfterItc).toFixed(1)}x return on investment`}
              accent="solar"
            />
            <ResultCard
              label="Payback Period"
              value={`${results.paybackYears.toFixed(1)} yrs`}
              sublabel={`After 30% ITC (${formatCurrency(results.costAfterItc)})`}
              accent="electric"
            />
            <ResultCard
              label="CO2 Offset"
              value={`${results.annualCo2OffsetTons.toFixed(0)} tons/yr`}
              sublabel={`= ${results.equivalentCars.toFixed(0)} cars off the road`}
              accent="success"
            />
          </div>

          {/* System Details */}
          <div className="bg-white rounded-2xl border border-[var(--bg-slate)] shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[var(--bg-slate)]">
              {(["overview", "monthly", "cumulative"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 text-sm font-[family-name:var(--font-outfit)] font-semibold transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-[var(--color-solar-deep)] border-b-2 border-[var(--color-solar-deep)] bg-[var(--bg-warm)]"
                      : "text-[var(--color-mist)] hover:text-[var(--color-charcoal)]"
                  }`}
                >
                  {tab === "overview" ? "System Overview" : tab === "monthly" ? "Monthly Production" : "25-Year Projection"}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === "overview" && (
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)]">
                      System Specs
                    </h4>
                    <DetailRow label="System Size" value={`${results.systemSizeKw.toFixed(0)} kW`} />
                    <DetailRow label="Annual Production" value={`${formatNumber(results.annualProductionKwh)} kWh`} />
                    <DetailRow label="Your Electricity Rate" value={`${electricityRates[state]}\u00A2/kWh`} />
                    <DetailRow label="Solar Irradiance" value={`${solarIrradiance[state]} peak sun hrs/day`} />
                  </div>
                  <div className="space-y-5">
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)]">
                      Financial Summary
                    </h4>
                    <DetailRow label="Gross System Cost" value={formatCurrency(results.systemCost)} />
                    <DetailRow label="Federal ITC (30%)" value={`-${formatCurrency(results.systemCost * FEDERAL_ITC_RATE)}`} highlight />
                    <DetailRow label="Net Cost After ITC" value={formatCurrency(results.costAfterItc)} />
                    <DetailRow label="Simple Payback" value={`${results.paybackYears.toFixed(1)} years`} />
                  </div>
                  <div className="sm:col-span-2 mt-2">
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-5">
                      Environmental Impact
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <ImpactCard
                        icon={
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                        }
                        value={`${results.annualCo2OffsetTons.toFixed(0)}`}
                        label="metric tons CO2 avoided per year"
                      />
                      <ImpactCard
                        icon={
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.07-.504 1.07-1.125V14.25M3.375 14.25h17.25M3.375 14.25V6.375a1.125 1.125 0 011.125-1.125h4.5V14.25" />
                          </svg>
                        }
                        value={`${results.equivalentCars.toFixed(0)}`}
                        label="cars removed from the road"
                      />
                      <ImpactCard
                        icon={
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                          </svg>
                        }
                        value={`${results.equivalentAcres.toFixed(0)}`}
                        label="acres of forest equivalent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "monthly" && (
                <div>
                  <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
                    Estimated Monthly Production &amp; Savings
                  </h4>
                  <div className="space-y-3">
                    {results.monthlyBreakdown.map((m) => (
                      <div key={m.month} className="flex items-center gap-4">
                        <span className="w-8 text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                          {m.month}
                        </span>
                        <div className="flex-1 h-8 bg-[var(--bg-slate)] rounded-lg overflow-hidden relative">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--color-solar-deep)] to-[var(--color-solar)] rounded-lg transition-all duration-700"
                            style={{ width: `${(m.production / maxMonthlyProd) * 100}%` }}
                          />
                        </div>
                        <span className="w-24 text-right text-sm font-[family-name:var(--font-outfit)] text-[var(--color-charcoal)]">
                          {formatNumber(m.production)} kWh
                        </span>
                        <span className="w-20 text-right text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-solar-deep)]">
                          {formatCurrency(m.savings)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "cumulative" && (
                <div>
                  <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
                    Cumulative Savings vs. System Cost
                  </h4>
                  <div className="relative h-72 flex items-end gap-[2px]">
                    {results.cumulativeSavings.map((d) => {
                      const maxVal = results.lifetimeSavings;
                      const height = (d.savings / maxVal) * 100;
                      const isPastPayback = d.savings >= d.cost;
                      return (
                        <div key={d.year} className="flex-1 flex flex-col items-center group relative">
                          <div
                            className={`w-full rounded-t transition-all duration-300 ${
                              isPastPayback
                                ? "bg-gradient-to-t from-emerald-500 to-emerald-400"
                                : "bg-gradient-to-t from-[var(--color-solar-deep)] to-[var(--color-solar)]"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                          {/* Tooltip */}
                          <div className="absolute -top-16 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[var(--bg-dark)] text-white text-xs font-[family-name:var(--font-outfit)] px-3 py-2 rounded-lg whitespace-nowrap z-10 shadow-lg">
                            <p className="font-bold">Year {d.year}</p>
                            <p>Savings: {formatCurrency(d.savings)}</p>
                          </div>
                          {d.year % 5 === 0 && (
                            <span className="mt-2 text-[10px] font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
                              Yr {d.year}
                            </span>
                          )}
                        </div>
                      );
                    })}
                    {/* Payback line */}
                    <div
                      className="absolute left-0 right-0 border-t-2 border-dashed border-[var(--color-electric-deep)]"
                      style={{
                        bottom: `${(results.costAfterItc / results.lifetimeSavings) * 100}%`,
                      }}
                    >
                      <span className="absolute -top-5 right-0 text-[10px] font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-electric-deep)] bg-white px-1">
                        System Cost ({formatCurrency(results.costAfterItc)})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-4 text-xs font-[family-name:var(--font-outfit)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-sm bg-[var(--color-solar-deep)]" />
                      Pre-payback
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                      Post-payback (pure savings)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-8 border-t-2 border-dashed border-[var(--color-electric-deep)]" />
                      System cost
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[var(--bg-warm)] rounded-2xl p-8 text-center">
            <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-2">
              Want a Detailed Analysis for Your Property?
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6">
              This is an estimate. Tim can provide a site-specific analysis with actual production modeling, shading analysis, and financing options.
            </p>
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
            >
              Book a Free Strategy Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultCard({
  label,
  value,
  sublabel,
  accent,
}: {
  label: string;
  value: string;
  sublabel: string;
  accent: "solar" | "electric" | "success";
}) {
  const accentColors = {
    solar: "from-[var(--color-solar-deep)] to-[var(--color-solar)]",
    electric: "from-[var(--color-electric-deep)] to-[var(--color-electric)]",
    success: "from-emerald-600 to-emerald-500",
  };
  return (
    <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-6 shadow-sm">
      <p className="text-xs font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-mist)] uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className={`text-3xl font-[family-name:var(--font-outfit)] font-extrabold bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent`}>
        {value}
      </p>
      <p className="mt-1 text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">
        {sublabel}
      </p>
    </div>
  );
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--bg-slate)] last:border-0">
      <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">{label}</span>
      <span className={`text-sm font-[family-name:var(--font-outfit)] font-semibold ${highlight ? "text-emerald-600" : "text-[var(--color-charcoal)]"}`}>
        {value}
      </span>
    </div>
  );
}

function ImpactCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-[var(--bg-cool)]">
      <div className="text-[var(--color-electric-deep)] flex justify-center mb-2">{icon}</div>
      <p className="text-2xl font-[family-name:var(--font-outfit)] font-extrabold text-[var(--color-midnight)]">{value}</p>
      <p className="text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mt-1">{label}</p>
    </div>
  );
}
