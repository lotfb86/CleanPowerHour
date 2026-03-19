"use client";

import { useState, useMemo } from "react";
import {
  emissionsFactors,
  stateNames,
  EPA_CO2_PER_VEHICLE_TONS,
  EPA_CO2_PER_ACRE_FOREST_TONS,
  EPA_CO2_PER_HOME_TONS,
  LBS_PER_METRIC_TON,
} from "@/data/energy-data";

interface FootprintResults {
  electricityTons: number;
  naturalGasTons: number;
  fleetTons: number;
  travelTons: number;
  totalTons: number;
  equivalentCars: number;
  equivalentHomes: number;
  equivalentAcres: number;
  breakdown: { label: string; tons: number; color: string; percent: number }[];
  reductionOpportunities: { label: string; savings: number; description: string }[];
}

// Natural gas: 1 therm = 11.7 lbs CO2 (EPA)
const CO2_PER_THERM = 11.7;
// Gasoline: 19.6 lbs CO2 per gallon (EPA)
const CO2_PER_GALLON_GAS = 19.6;
// Diesel: 22.4 lbs CO2 per gallon (EPA)
const CO2_PER_GALLON_DIESEL = 22.4;
// Air travel: 0.488 lbs CO2 per passenger-mile (EPA)
const CO2_PER_FLIGHT_MILE = 0.488;
// Average hotel night: 28.5 kg CO2 (Cornell Hospitality)
const CO2_PER_HOTEL_NIGHT_LBS = 62.8;

function formatNumber(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function CarbonFootprintCalculator() {
  const [state, setState] = useState("IL");
  const [electricityKwh, setElectricityKwh] = useState(500000);
  const [naturalGasTherms, setNaturalGasTherms] = useState(20000);
  const [fleetGallons, setFleetGallons] = useState(5000);
  const [fuelType, setFuelType] = useState<"gasoline" | "diesel">("gasoline");
  const [flightMiles, setFlightMiles] = useState(50000);
  const [hotelNights, setHotelNights] = useState(100);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo<FootprintResults | null>(() => {
    const ef = emissionsFactors[state];
    if (!ef) return null;

    const electricityLbs = electricityKwh * ef;
    const electricityTons = electricityLbs / LBS_PER_METRIC_TON;

    const naturalGasLbs = naturalGasTherms * CO2_PER_THERM;
    const naturalGasTons = naturalGasLbs / LBS_PER_METRIC_TON;

    const co2PerGallon = fuelType === "diesel" ? CO2_PER_GALLON_DIESEL : CO2_PER_GALLON_GAS;
    const fleetLbs = fleetGallons * co2PerGallon;
    const fleetTons = fleetLbs / LBS_PER_METRIC_TON;

    const travelLbs = flightMiles * CO2_PER_FLIGHT_MILE + hotelNights * CO2_PER_HOTEL_NIGHT_LBS;
    const travelTons = travelLbs / LBS_PER_METRIC_TON;

    const totalTons = electricityTons + naturalGasTons + fleetTons + travelTons;

    const breakdown = [
      { label: "Electricity", tons: electricityTons, color: "var(--color-solar-deep)", percent: 0 },
      { label: "Natural Gas", tons: naturalGasTons, color: "var(--color-electric-deep)", percent: 0 },
      { label: "Vehicle Fleet", tons: fleetTons, color: "#059669", percent: 0 },
      { label: "Business Travel", tons: travelTons, color: "#7C3AED", percent: 0 },
    ].map((b) => ({ ...b, percent: totalTons > 0 ? (b.tons / totalTons) * 100 : 0 }));

    const reductionOpportunities = [
      {
        label: "Switch to 100% Renewable Electricity",
        savings: electricityTons,
        description: "Install on-site solar or purchase renewable energy certificates",
      },
      {
        label: "Electrify Natural Gas Systems",
        savings: naturalGasTons * 0.7,
        description: "Replace gas heating with high-efficiency heat pumps",
      },
      {
        label: "Electrify Vehicle Fleet",
        savings: fleetTons * 0.65,
        description: "Transition to electric vehicles with on-site charging",
      },
      {
        label: "Reduce Business Travel 50%",
        savings: travelTons * 0.5,
        description: "Virtual meetings and optimized travel schedules",
      },
    ].filter((o) => o.savings > 0);

    return {
      electricityTons,
      naturalGasTons,
      fleetTons,
      travelTons,
      totalTons,
      equivalentCars: totalTons / EPA_CO2_PER_VEHICLE_TONS,
      equivalentHomes: totalTons / EPA_CO2_PER_HOME_TONS,
      equivalentAcres: totalTons / EPA_CO2_PER_ACRE_FOREST_TONS,
      breakdown,
      reductionOpportunities,
    };
  }, [state, electricityKwh, naturalGasTherms, fleetGallons, fuelType, flightMiles, hotelNights]);

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 lg:p-10 shadow-sm">
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-6">
          Enter Your Facility Data
        </h3>

        {/* State */}
        <div className="mb-6">
          <label
            htmlFor="carbon-state"
            className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2"
          >
            State
          </label>
          <select
            id="carbon-state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full max-w-xs px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
          >
            {Object.entries(stateNames)
              .sort(([, a], [, b]) => a.localeCompare(b))
              .map(([abbr, name]) => (
                <option key={abbr} value={abbr}>
                  {name}
                </option>
              ))}
          </select>
          <p className="mt-1 text-xs text-[var(--color-mist)]">
            Used to calculate grid emissions factor for your region
          </p>
        </div>

        {/* Energy Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-solar-deep)]/10">
              <svg className="w-4 h-4 text-[var(--color-solar-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-midnight)]">
              Energy Usage
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="carbon-elec" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Annual Electricity (kWh)
              </label>
              <input
                id="carbon-elec"
                type="number"
                min={0}
                value={electricityKwh}
                onChange={(e) => setElectricityKwh(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              />
              <p className="mt-1 text-xs text-[var(--color-mist)]">Check your utility bill for annual usage</p>
            </div>
            <div>
              <label htmlFor="carbon-gas" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Annual Natural Gas (therms)
              </label>
              <input
                id="carbon-gas"
                type="number"
                min={0}
                value={naturalGasTherms}
                onChange={(e) => setNaturalGasTherms(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              />
              <p className="mt-1 text-xs text-[var(--color-mist)]">Heating, process heat, etc.</p>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600/10">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.07-.504 1.07-1.125V14.25M3.375 14.25h17.25" />
              </svg>
            </div>
            <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-midnight)]">
              Vehicle Fleet
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="carbon-fleet" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Annual Fuel (gallons)
              </label>
              <input
                id="carbon-fleet"
                type="number"
                min={0}
                value={fleetGallons}
                onChange={(e) => setFleetGallons(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="carbon-fueltype" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Fuel Type
              </label>
              <select
                id="carbon-fueltype"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value as "gasoline" | "diesel")}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              >
                <option value="gasoline">Gasoline</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
          </div>
        </div>

        {/* Travel Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/10">
              <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </div>
            <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-midnight)]">
              Business Travel
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="carbon-flights" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Annual Flight Miles
              </label>
              <input
                id="carbon-flights"
                type="number"
                min={0}
                value={flightMiles}
                onChange={(e) => setFlightMiles(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="carbon-hotel" className="block text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] mb-2">
                Annual Hotel Nights
              </label>
              <input
                id="carbon-hotel"
                type="number"
                min={0}
                value={hotelNights}
                onChange={(e) => setHotelNights(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-electric-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-electric)] transition-all duration-300 shadow-lg shadow-[var(--color-electric-deep)]/25"
        >
          Calculate Footprint
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Total Footprint */}
          <div className="bg-gradient-to-br from-[var(--bg-dark)] to-[var(--bg-dark-alt)] rounded-2xl p-8 lg:p-10 text-center">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
              Your Annual Carbon Footprint
            </p>
            <p className="font-[family-name:var(--font-outfit)] text-6xl lg:text-7xl font-extrabold text-white mb-2">
              {formatNumber(results.totalTons)}
            </p>
            <p className="font-[family-name:var(--font-outfit)] text-lg text-white/70">
              metric tons CO<sub>2</sub>e per year
            </p>

            {/* Equivalency Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                <p className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold text-[var(--color-solar)]">
                  {formatNumber(results.equivalentCars)}
                </p>
                <p className="text-xs text-white/50 mt-1">passenger cars / year</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                <p className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold text-emerald-400">
                  {formatNumber(results.equivalentHomes)}
                </p>
                <p className="text-xs text-white/50 mt-1">average US homes</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                <p className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold text-[var(--color-electric)]">
                  {formatNumber(results.equivalentAcres)}
                </p>
                <p className="text-xs text-white/50 mt-1">acres forest to offset</p>
              </div>
            </div>
          </div>

          {/* Breakdown Chart */}
          <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
            <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
              Emissions Breakdown
            </h4>

            {/* Horizontal stacked bar */}
            <div className="h-12 rounded-xl overflow-hidden flex mb-6">
              {results.breakdown
                .filter((b) => b.percent > 0)
                .map((b) => (
                  <div
                    key={b.label}
                    className="h-full flex items-center justify-center transition-all duration-700"
                    style={{ width: `${b.percent}%`, backgroundColor: b.color }}
                  >
                    {b.percent > 12 && (
                      <span className="text-white text-xs font-[family-name:var(--font-outfit)] font-bold">
                        {b.percent.toFixed(0)}%
                      </span>
                    )}
                  </div>
                ))}
            </div>

            {/* Legend + detail rows */}
            <div className="space-y-3">
              {results.breakdown.map((b) => (
                <div key={b.label} className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                  <span className="flex-1 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-charcoal)]">
                    {b.label}
                  </span>
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                    {formatNumber(b.tons)} tons
                  </span>
                  <span className="w-16 text-right text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
                    {b.percent.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reduction Opportunities */}
          <div className="bg-white rounded-2xl border border-[var(--bg-slate)] p-8 shadow-sm">
            <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-2">
              Reduction Opportunities
            </h4>
            <p className="text-sm font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6">
              Potential actions ranked by impact
            </p>

            <div className="space-y-4">
              {results.reductionOpportunities
                .sort((a, b) => b.savings - a.savings)
                .map((opp) => {
                  const maxSavings = results.reductionOpportunities[0]?.savings || 1;
                  return (
                    <div key={opp.label} className="group">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                          {opp.label}
                        </span>
                        <span className="text-sm font-[family-name:var(--font-outfit)] font-bold text-emerald-600">
                          -{formatNumber(opp.savings)} tons/yr
                        </span>
                      </div>
                      <div className="h-3 bg-[var(--bg-slate)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-700"
                          style={{ width: `${(opp.savings / maxSavings) * 100}%` }}
                        />
                      </div>
                      <p className="mt-1 text-xs font-[family-name:var(--font-newsreader)] text-[var(--color-mist)]">
                        {opp.description}
                      </p>
                    </div>
                  );
                })}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--bg-slate)] flex items-center justify-between">
              <span className="text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)]">
                Total Potential Reduction
              </span>
              <span className="text-lg font-[family-name:var(--font-outfit)] font-extrabold text-emerald-600">
                -{formatNumber(results.reductionOpportunities.reduce((sum, o) => sum + o.savings, 0))} tons/yr
                <span className="text-sm font-normal text-[var(--color-mist)] ml-2">
                  ({((results.reductionOpportunities.reduce((sum, o) => sum + o.savings, 0) / results.totalTons) * 100).toFixed(0)}% of total)
                </span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[var(--bg-cool)] rounded-2xl p-8 text-center">
            <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-2">
              Ready to Reduce Your Carbon Footprint?
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6">
              Tim can help you develop a comprehensive decarbonization strategy tailored to your facility.
            </p>
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-electric-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-electric)] transition-all duration-300 shadow-lg shadow-[var(--color-electric-deep)]/25"
            >
              Book a Decarbonization Strategy Call
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
