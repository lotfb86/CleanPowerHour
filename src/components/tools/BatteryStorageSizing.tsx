"use client";

import { useState, useMemo } from "react";
import {
  electricityRates,
  stateNames,
  BATTERY_COST_PER_KWH,
  FEDERAL_ITC_RATE,
} from "@/data/energy-data";

interface BatteryResults {
  recommendedKwh: number;
  recommendedKw: number;
  grossCost: number;
  netCost: number;
  annualSavings: number;
  paybackYears: number;
  dailyCycles: number;
  useCaseBreakdown: { label: string; kwh: number; percent: number; icon: string }[];
  tenYearSavings: number;
  resilienceHours: number;
}

// Demand charge: avg commercial ~$15/kW/mo
const AVG_DEMAND_CHARGE = 15;
// TOU spread: avg 8c/kWh differential
const AVG_TOU_SPREAD = 0.08;
// Battery round-trip efficiency
const BATTERY_EFFICIENCY = 0.88;
// Battery degradation per year
const BATTERY_DEGRADATION = 0.02;

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type UseCase = "demand_management" | "tou_arbitrage" | "backup" | "solar_shift";

export function BatteryStorageSizing() {
  const [state, setState] = useState("IL");
  const [peakDemandKw, setPeakDemandKw] = useState(200);
  const [avgDailyKwh, setAvgDailyKwh] = useState(2000);
  const [hasSolar, setHasSolar] = useState(true);
  const [solarSizeKw, setSolarSizeKw] = useState(150);
  const [useCases, setUseCases] = useState<UseCase[]>(["demand_management", "tou_arbitrage"]);
  const [backupHoursTarget, setBackupHoursTarget] = useState(4);
  const [showResults, setShowResults] = useState(false);

  const toggleUseCase = (uc: UseCase) => {
    setUseCases((prev) =>
      prev.includes(uc) ? prev.filter((u) => u !== uc) : [...prev, uc]
    );
  };

  const results = useMemo<BatteryResults | null>(() => {
    const rate = electricityRates[state];
    if (!rate) return null;

    let totalKwh = 0;
    let totalAnnualSavings = 0;
    const breakdown: { label: string; kwh: number; percent: number; icon: string }[] = [];

    // Demand Management: shave ~30% of peak
    if (useCases.includes("demand_management")) {
      const shaveKw = peakDemandKw * 0.3;
      const shaveKwh = shaveKw * 2; // 2-hour discharge
      totalKwh += shaveKwh;
      const savings = shaveKw * AVG_DEMAND_CHARGE * 12;
      totalAnnualSavings += savings;
      breakdown.push({ label: "Demand Management", kwh: shaveKwh, percent: 0, icon: "peak" });
    }

    // TOU Arbitrage
    if (useCases.includes("tou_arbitrage")) {
      const arbitrageKwh = avgDailyKwh * 0.25; // shift 25% of daily load
      totalKwh = Math.max(totalKwh, arbitrageKwh); // overlaps with demand mgmt
      const savings = arbitrageKwh * AVG_TOU_SPREAD * 365 * BATTERY_EFFICIENCY;
      totalAnnualSavings += savings;
      breakdown.push({ label: "TOU Arbitrage", kwh: arbitrageKwh, percent: 0, icon: "clock" });
    }

    // Backup Power
    if (useCases.includes("backup")) {
      const criticalLoadKw = peakDemandKw * 0.4;
      const backupKwh = criticalLoadKw * backupHoursTarget;
      totalKwh = Math.max(totalKwh, backupKwh);
      // No direct savings, but avoided outage cost is real
      breakdown.push({ label: "Backup Power", kwh: backupKwh, percent: 0, icon: "shield" });
    }

    // Solar Shifting
    if (useCases.includes("solar_shift") && hasSolar) {
      const shiftKwh = solarSizeKw * 3; // store 3 hours of solar
      totalKwh = Math.max(totalKwh, shiftKwh);
      const savings = shiftKwh * (rate / 100) * 0.3 * 365; // 30% higher value
      totalAnnualSavings += savings;
      breakdown.push({ label: "Solar Self-Consumption", kwh: shiftKwh, percent: 0, icon: "sun" });
    }

    // Ensure minimum sizing
    totalKwh = Math.max(totalKwh, 50);

    // Update percentages
    const totalBreakdownKwh = breakdown.reduce((s, b) => s + b.kwh, 0);
    breakdown.forEach((b) => {
      b.percent = totalBreakdownKwh > 0 ? (b.kwh / totalBreakdownKwh) * 100 : 0;
    });

    const recommendedKw = totalKwh / 4; // 4-hour system (C/4)
    const grossCost = totalKwh * BATTERY_COST_PER_KWH;
    const netCost = grossCost * (1 - FEDERAL_ITC_RATE);
    const paybackYears = totalAnnualSavings > 0 ? netCost / totalAnnualSavings : Infinity;

    // 10-year savings with degradation
    let tenYearSavings = 0;
    for (let y = 0; y < 10; y++) {
      tenYearSavings += totalAnnualSavings * Math.pow(1 - BATTERY_DEGRADATION, y);
    }

    const criticalLoad = peakDemandKw * 0.4;
    const resilienceHours = criticalLoad > 0 ? totalKwh / criticalLoad : 0;

    return {
      recommendedKwh: totalKwh,
      recommendedKw,
      grossCost,
      netCost,
      annualSavings: totalAnnualSavings,
      paybackYears,
      dailyCycles: useCases.includes("tou_arbitrage") ? 1.2 : 0.8,
      useCaseBreakdown: breakdown,
      tenYearSavings,
      resilienceHours,
    };
  }, [state, peakDemandKw, avgDailyKwh, hasSolar, solarSizeKw, useCases, backupHoursTarget]);

  const useCaseOptions: { id: UseCase; label: string; description: string; icon: React.ReactNode }[] = [
    {
      id: "demand_management",
      label: "Demand Charge Management",
      description: "Reduce peak demand charges by discharging during high-load periods",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      id: "tou_arbitrage",
      label: "Time-of-Use Arbitrage",
      description: "Charge during off-peak, discharge during peak pricing windows",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "backup",
      label: "Backup / Resilience",
      description: "Provide emergency power during grid outages",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      id: "solar_shift",
      label: "Solar Self-Consumption",
      description: "Store excess solar production for evening/night use",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 lg:p-10 shadow-sm">
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-6">
          Size Your Battery System
        </h3>

        {/* Basic Info */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div>
            <label htmlFor="batt-state" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              State
            </label>
            <select
              id="batt-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
            >
              {Object.entries(stateNames)
                .sort(([, a], [, b]) => a.localeCompare(b))
                .map(([abbr, name]) => (
                  <option key={abbr} value={abbr}>{name}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="batt-peak" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              Peak Demand (kW)
            </label>
            <input
              id="batt-peak"
              type="number"
              min={10}
              value={peakDemandKw}
              onChange={(e) => setPeakDemandKw(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
            />
            <p className="mt-1 text-xs text-[var(--color-mist)]">From your utility bill</p>
          </div>
          <div>
            <label htmlFor="batt-daily" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              Avg Daily Usage (kWh)
            </label>
            <input
              id="batt-daily"
              type="number"
              min={100}
              value={avgDailyKwh}
              onChange={(e) => setAvgDailyKwh(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
            />
          </div>
        </div>

        {/* Solar Existing */}
        <div className="mb-8 p-6 bg-[var(--bg-warm)] rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={hasSolar}
                onChange={(e) => setHasSolar(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--color-solar-deep)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
            <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
              I have or plan to install solar
            </span>
          </div>
          {hasSolar && (
            <div className="max-w-xs">
              <label htmlFor="batt-solar" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Solar System Size (kW)
              </label>
              <input
                id="batt-solar"
                type="number"
                min={10}
                value={solarSizeKw}
                onChange={(e) => setSolarSizeKw(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-solar-deep)] focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Use Cases */}
        <div className="mb-8">
          <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-midnight)] mb-4">
            Primary Use Cases
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {useCaseOptions.map((uc) => {
              const active = useCases.includes(uc.id);
              if (uc.id === "solar_shift" && !hasSolar) return null;
              return (
                <button
                  key={uc.id}
                  onClick={() => toggleUseCase(uc.id)}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    active
                      ? "border-[var(--color-electric-deep)] bg-[var(--bg-cool)]"
                      : "border-[var(--bg-slate)] bg-white hover:border-[var(--color-mist)]"
                  }`}
                >
                  <div
                    className={`shrink-0 mt-0.5 ${
                      active ? "text-[var(--color-electric-deep)]" : "text-[var(--color-mist)]"
                    }`}
                  >
                    {uc.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-[family-name:var(--font-outfit)] font-semibold ${
                      active ? "text-[var(--color-electric-deep)]" : "text-[var(--color-charcoal)]"
                    }`}>
                      {uc.label}
                    </p>
                    <p className="text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-mist)] mt-0.5">
                      {uc.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Backup Hours */}
        {useCases.includes("backup") && (
          <div className="mb-8 max-w-xs">
            <label htmlFor="batt-backup" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
              Backup Duration Target (hours)
            </label>
            <input
              id="batt-backup"
              type="number"
              min={1}
              max={24}
              value={backupHoursTarget}
              onChange={(e) => setBackupHoursTarget(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
            />
            <p className="mt-1 text-xs text-[var(--color-mist)]">Hours of backup for critical loads (40% of peak)</p>
          </div>
        )}

        <button
          onClick={() => setShowResults(true)}
          disabled={useCases.length === 0}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-electric-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-electric)] transition-all duration-300 shadow-lg shadow-[var(--color-electric-deep)]/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Size My System
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Results */}
      {showResults && results && useCases.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* System Recommendation */}
          <div className="bg-gradient-to-br from-[var(--color-electric-deep)] to-[#0c4a6e] rounded-2xl p-8 lg:p-10 text-white">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
              Recommended System
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-white">
                  {formatNumber(results.recommendedKwh)}
                </p>
                <p className="text-sm text-white/60 mt-1">kWh capacity</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-white">
                  {formatNumber(results.recommendedKw)}
                </p>
                <p className="text-sm text-white/60 mt-1">kW power rating</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-[var(--color-solar-light)]">
                  {formatCurrency(results.netCost)}
                </p>
                <p className="text-sm text-white/60 mt-1">after 30% ITC</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-emerald-300">
                  {results.resilienceHours.toFixed(1)}
                </p>
                <p className="text-sm text-white/60 mt-1">hours backup (critical loads)</p>
              </div>
            </div>
          </div>

          {/* Financial Details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
              <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-5">
                Investment Summary
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Gross System Cost</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold">{formatCurrency(results.grossCost)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Federal ITC (30%)</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-emerald-600">
                    -{formatCurrency(results.grossCost * FEDERAL_ITC_RATE)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Net Cost</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-bold text-[var(--color-midnight)]">{formatCurrency(results.netCost)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Cost per kWh</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold">
                    ${(results.netCost / results.recommendedKwh).toFixed(0)}/kWh
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
              <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-5">
                Savings & Returns
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Annual Savings</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-emerald-600">{formatCurrency(results.annualSavings)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">10-Year Savings</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-emerald-600">{formatCurrency(results.tenYearSavings)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Simple Payback</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-bold text-[var(--color-electric-deep)]">
                    {results.paybackYears === Infinity ? "N/A (backup only)" : `${results.paybackYears.toFixed(1)} years`}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--bg-slate)]">
                  <span className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)]">Daily Cycle Estimate</span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold">{results.dailyCycles.toFixed(1)} cycles/day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case Breakdown */}
          <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
            <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
              Sizing by Use Case
            </h4>
            <div className="space-y-4">
              {results.useCaseBreakdown.map((uc) => (
                <div key={uc.label} className="flex items-center gap-4">
                  <span className="flex-1 text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                    {uc.label}
                  </span>
                  <div className="w-48 h-3 bg-[var(--bg-slate)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-electric-deep)] to-[var(--color-electric)] rounded-full transition-all duration-700"
                      style={{ width: `${uc.percent}%` }}
                    />
                  </div>
                  <span className="w-24 text-right text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                    {formatNumber(uc.kwh)} kWh
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-mist)]">
              System sized to the largest single use case to avoid oversizing. Battery can serve multiple use cases simultaneously.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[var(--bg-cool)] rounded-2xl p-8 text-center">
            <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-2">
              Need a Detailed Storage Analysis?
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6">
              This is a preliminary sizing tool. Tim can help model your specific load profile, utility tariff structure, and financing options.
            </p>
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-electric-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-electric)] transition-all duration-300 shadow-lg shadow-[var(--color-electric-deep)]/25"
            >
              Get a Custom Storage Assessment
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
