/**
 * Clean energy reference data for calculators.
 * Sources: EIA, EPA eGRID, NREL, SEIA
 */

// Average commercial electricity rates by state (cents/kWh) — EIA 2024
export const electricityRates: Record<string, number> = {
  AL: 13.01, AK: 21.57, AZ: 11.73, AR: 10.28, CA: 22.15,
  CO: 11.96, CT: 21.62, DE: 12.46, FL: 11.85, GA: 12.15,
  HI: 36.22, ID: 8.89, IL: 10.86, IN: 12.37, IA: 12.69,
  KS: 12.15, KY: 10.68, LA: 10.41, ME: 17.62, MD: 13.18,
  MA: 22.59, MI: 13.85, MN: 12.41, MS: 11.58, MO: 10.84,
  MT: 11.22, NE: 10.91, NV: 10.58, NH: 19.45, NJ: 14.83,
  NM: 12.09, NY: 18.42, NC: 10.71, ND: 10.47, OH: 11.62,
  OK: 9.84, OR: 10.18, PA: 11.38, RI: 21.83, SC: 11.42,
  SD: 11.97, TN: 11.58, TX: 10.29, UT: 9.83, VT: 18.14,
  VA: 10.67, WA: 9.71, WV: 10.25, WI: 13.04, WY: 10.32,
  DC: 13.55,
};

// CO2 emissions factors by state (lbs CO2 per kWh) — EPA eGRID 2022
export const emissionsFactors: Record<string, number> = {
  AL: 0.81, AK: 1.06, AZ: 0.82, AR: 0.97, CA: 0.39,
  CO: 1.13, CT: 0.43, DE: 0.78, FL: 0.86, GA: 0.82,
  HI: 1.28, ID: 0.19, IL: 0.68, IN: 1.39, IA: 0.73,
  KS: 0.85, KY: 1.48, LA: 0.82, ME: 0.26, MD: 0.66,
  MA: 0.57, MI: 1.06, MN: 0.75, MS: 0.82, MO: 1.31,
  MT: 0.93, NE: 1.08, NV: 0.65, NH: 0.23, NJ: 0.49,
  NM: 1.09, NY: 0.39, NC: 0.70, ND: 1.47, OH: 1.07,
  OK: 0.79, OR: 0.25, PA: 0.67, RI: 0.59, SC: 0.53,
  SD: 0.32, TN: 0.64, TX: 0.82, UT: 1.29, VT: 0.01,
  VA: 0.60, WA: 0.15, WV: 1.70, WI: 1.01, WY: 1.56,
  DC: 0.66,
};

// Average solar irradiance (peak sun hours/day) by state — NREL
export const solarIrradiance: Record<string, number> = {
  AL: 4.8, AK: 3.0, AZ: 6.5, AR: 4.7, CA: 5.8,
  CO: 5.5, CT: 4.0, DE: 4.2, FL: 5.2, GA: 4.8,
  HI: 5.5, ID: 4.7, IL: 4.2, IN: 4.1, IA: 4.3,
  KS: 5.0, KY: 4.2, LA: 4.8, ME: 3.9, MD: 4.3,
  MA: 4.0, MI: 3.8, MN: 4.1, MS: 4.8, MO: 4.5,
  MT: 4.5, NE: 4.8, NV: 6.2, NH: 3.9, NJ: 4.2,
  NM: 6.4, NY: 3.8, NC: 4.7, ND: 4.3, OH: 3.9,
  OK: 5.1, OR: 4.0, PA: 4.0, RI: 4.0, SC: 4.9,
  SD: 4.7, TN: 4.5, TX: 5.3, UT: 5.6, VT: 3.8,
  VA: 4.4, WA: 3.6, WV: 3.9, WI: 4.0, WY: 5.0,
  DC: 4.3,
};

// State names for display
export const stateNames: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  DC: "Washington DC",
};

// Constants
export const COMMERCIAL_SOLAR_COST_PER_WATT = 1.64; // $/W installed (SEIA Q3 2024)
export const BATTERY_COST_PER_KWH = 345; // $/kWh installed (NREL ATB 2024, 4hr LFP)
export const FEDERAL_ITC_RATE = 0.30; // 30% ITC under IRA
export const SYSTEM_DEGRADATION_RATE = 0.005; // 0.5% annual degradation
export const SYSTEM_LIFETIME_YEARS = 25;
export const ELECTRICITY_ESCALATION_RATE = 0.025; // 2.5% annual rate increase
export const DISCOUNT_RATE = 0.06; // 6% for NPV calculations

// EPA Equivalency Factors
export const EPA_CO2_PER_VEHICLE_TONS = 4.6; // metric tons CO2 per passenger vehicle/year
export const EPA_CO2_PER_ACRE_FOREST_TONS = 0.84; // metric tons CO2 sequestered per acre/year
export const EPA_CO2_PER_HOME_TONS = 7.72; // metric tons CO2 per average home/year
export const LBS_PER_METRIC_TON = 2204.62;
