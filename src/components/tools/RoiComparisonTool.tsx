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
  LBS_PER_METRIC_TON,
  DISCOUNT_RATE,
} from "@/data/energy-data";

interface ComparisonResults {
  solar: ScenarioResult;
  fossil: ScenarioResult;
  lifetimeDifference: number;
  npvAdvantage: number;
  co2Avoided: number;
  breakEvenYear: number | null;
  yearByYear: { year: number; solarCumulative: number; fossilCumulative: number }[];
}

interface ScenarioResult {
  year1Cost: number;
  lifetimeCost: number;
  npv: number;
}

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function RoiComparisonTool() {
  const [state, setState] = useState("IL");
  const [annualKwh, setAnnualKwh] = useState(1000000);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo<ComparisonResults | null>(() => {
    const rate = electricityRates[state];
    const irradiance = solarIrradiance[state];
    const ef = emissionsFactors[state];
    if (!rate || !irradiance || !ef) return null;

    const ratePerKwh = rate / 100;

    // Solar scenario: size to cover 85% of load
    const targetKwh = annualKwh * 0.85;
    const systemSizeKw = targetKwh / (irradiance * 365 * 0.80);
    const solarProduction = systemSizeKw * irradiance * 365 * 0.80;
    const grossCost = systemSizeKw * COMMERCIAL_SOLAR_COST_PER_WATT * 1000;
    const netCost = grossCost * (1 - FEDERAL_ITC_RATE);
    const remainingKwh = annualKwh - solarProduction;

    // Build year-by-year comparison
    const yearByYear: { year: number; solarCumulative: number; fossilCumulative: number }[] = [];
    let fossilCumTotal = 0;
    let solarCumTotal = netCost; // upfront investment
    let fossilLifetimeCost = 0;
    let solarLifetimeCost = netCost;
    let fossilNPV = 0;
    let solarNPV = netCost;
    let breakEvenYear: number | null = null;
    let totalCo2Avoided = 0;

    for (let y = 1; y <= SYSTEM_LIFETIME_YEARS; y++) {
      const escalatedRate = ratePerKwh * Math.pow(1 + ELECTRICITY_ESCALATION_RATE, y - 1);
      const discountFactor = 1 / Math.pow(1 + DISCOUNT_RATE, y);

      // Fossil: pay full grid rate on all kWh
      const fossilYearCost = annualKwh * escalatedRate;
      fossilCumTotal += fossilYearCost;
      fossilLifetimeCost += fossilYearCost;
      fossilNPV += fossilYearCost * discountFactor;

      // Solar: pay grid rate only on remaining kWh + minimal O&M
      const degraded = solarProduction * Math.pow(1 - SYSTEM_DEGRADATION_RATE, y - 1);
      const gridPurchase = Math.max(0, annualKwh - degraded);
      const oAndM = systemSizeKw * 12; // ~$12/kW/yr O&M
      const solarYearCost = gridPurchase * escalatedRate + oAndM;
      solarCumTotal += solarYearCost;
      solarLifetimeCost += solarYearCost;
      solarNPV += solarYearCost * discountFactor;

      totalCo2Avoided += (degraded * ef) / LBS_PER_METRIC_TON;

      yearByYear.push({
        year: y,
        solarCumulative: solarCumTotal,
        fossilCumulative: fossilCumTotal,
      });

      if (!breakEvenYear && solarCumTotal <= fossilCumTotal) {
        breakEvenYear = y;
      }
    }

    return {
      solar: {
        year1Cost: netCost + (remainingKwh * ratePerKwh) + (systemSizeKw * 12),
        lifetimeCost: solarLifetimeCost,
        npv: solarNPV,
      },
      fossil: {
        year1Cost: annualKwh * ratePerKwh,
        lifetimeCost: fossilLifetimeCost,
        npv: fossilNPV,
      },
      lifetimeDifference: fossilLifetimeCost - solarLifetimeCost,
      npvAdvantage: fossilNPV - solarNPV,
      co2Avoided: totalCo2Avoided,
      breakEvenYear,
      yearByYear,
    };
  }, [state, annualKwh]);

  const maxCumulative = results
    ? Math.max(...results.yearByYear.map((y) => Math.max(y.solarCumulative, y.fossilCumulative)))
    : 0;

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 lg:p-10 shadow-sm">
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-6">
          Compare Solar vs. Grid Power
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="roi-state" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              State
            </label>
            <select
              id="roi-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent"
            >
              {Object.entries(stateNames)
                .sort(([, a], [, b]) => a.localeCompare(b))
                .map(([abbr, name]) => (
                  <option key={abbr} value={abbr}>{name}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="roi-kwh" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              Annual Electricity Usage (kWh)
            </label>
            <input
              id="roi-kwh"
              type="number"
              min={10000}
              value={annualKwh}
              onChange={(e) => setAnnualKwh(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent"
            />
            <p className="mt-1 text-xs text-[var(--color-mist)]">
              Avg commercial facility: 500,000 – 2,000,000 kWh/yr
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowResults(true)}
          className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
        >
          Compare Scenarios
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Hero Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fossil */}
            <div className="bg-white rounded-2xl border-2 border-[var(--bg-slate)] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600" />
              <p className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-[var(--color-mist)] uppercase tracking-widest mb-4">
                Status Quo — Grid Power
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-[var(--color-charcoal)] mb-1">
                {formatCurrency(results.fossil.lifetimeCost)}
              </p>
              <p className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-mist)] mb-6">
                25-year total cost of electricity
              </p>
              <div className="space-y-3 pt-4 border-t border-[var(--bg-slate)]">
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Year 1 Cost</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">{formatCurrency(results.fossil.year1Cost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">NPV (6% discount)</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">{formatCurrency(results.fossil.npv)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Rate Escalation</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-red-500">+2.5%/yr</span>
                </div>
              </div>
            </div>

            {/* Solar */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 p-8 relative overflow-hidden ring-1 ring-emerald-100">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-solar-deep)] to-emerald-500" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-[family-name:var(--font-outfit)] font-bold rounded-full">
                RECOMMENDED
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
                Solar + Grid
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-[var(--color-midnight)] mb-1">
                {formatCurrency(results.solar.lifetimeCost)}
              </p>
              <p className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-mist)] mb-6">
                25-year total cost including solar investment
              </p>
              <div className="space-y-3 pt-4 border-t border-emerald-100">
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Year 1 Cost (incl. install)</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">{formatCurrency(results.solar.year1Cost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">NPV (6% discount)</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">{formatCurrency(results.solar.npv)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Break-Even Year</span>
                  <span className="font-[family-name:var(--font-outfit)] font-semibold text-emerald-600">
                    {results.breakEvenYear ? `Year ${results.breakEvenYear}` : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="bg-gradient-to-r from-emerald-50 to-[var(--bg-cool)] rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-3xl font-extrabold text-emerald-600">
                {formatCurrency(results.lifetimeDifference)}
              </p>
              <p className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-slate)] mt-1">
                25-year savings
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-3xl font-extrabold text-[var(--color-electric-deep)]">
                {formatCurrency(results.npvAdvantage)}
              </p>
              <p className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-slate)] mt-1">
                NPV advantage
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-3xl font-extrabold text-[var(--color-solar-deep)]">
                {formatNumber(results.co2Avoided)}
              </p>
              <p className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-slate)] mt-1">
                metric tons CO<sub>2</sub> avoided
              </p>
            </div>
          </div>

          {/* 25-Year Chart */}
          <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
            <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
              25-Year Cumulative Cost Comparison
            </h4>
            <div className="relative h-72">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-6 w-16 flex flex-col justify-between text-[10px] font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
                <span>{formatCurrency(maxCumulative)}</span>
                <span>{formatCurrency(maxCumulative / 2)}</span>
                <span>$0</span>
              </div>

              {/* Chart area */}
              <div className="ml-20 h-full flex items-end gap-[3px] pb-6">
                {results.yearByYear.map((d) => (
                  <div key={d.year} className="flex-1 relative group flex gap-[1px]">
                    {/* Fossil bar */}
                    <div
                      className="flex-1 bg-gray-300 rounded-t-sm transition-all duration-300 hover:bg-gray-400"
                      style={{ height: `${(d.fossilCumulative / maxCumulative) * 100}%` }}
                    />
                    {/* Solar bar */}
                    <div
                      className="flex-1 rounded-t-sm transition-all duration-300"
                      style={{
                        height: `${(d.solarCumulative / maxCumulative) * 100}%`,
                        background: d.solarCumulative <= d.fossilCumulative
                          ? "linear-gradient(to top, #059669, #34d399)"
                          : "linear-gradient(to top, var(--color-solar-deep), var(--color-solar))",
                      }}
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[var(--bg-dark)] text-white text-xs font-[family-name:var(--font-outfit)] px-3 py-2 rounded-lg whitespace-nowrap z-10 shadow-lg">
                      <p className="font-bold">Year {d.year}</p>
                      <p className="text-gray-300">Grid: {formatCurrency(d.fossilCumulative)}</p>
                      <p className="text-emerald-300">Solar: {formatCurrency(d.solarCumulative)}</p>
                    </div>
                    {d.year % 5 === 0 && (
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
                        {d.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-2 ml-20 text-xs font-[family-name:var(--font-outfit)]">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-gray-300" />
                Grid only
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[var(--color-solar-deep)]" />
                Solar + grid (pre-breakeven)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                Solar + grid (post-breakeven)
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[var(--bg-warm)] rounded-2xl p-8 text-center">
            <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-2">
              Want a Customized ROI Analysis?
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6">
              This estimate uses national averages. Tim can model your specific utility tariff, shading, financing terms, and incentives.
            </p>
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
            >
              Get Your Custom Analysis
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
