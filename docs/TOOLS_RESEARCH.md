# Tools Research: Interactive Clean Energy Calculators

**Date:** March 19, 2026
**Purpose:** Research and plan interactive tools for cleanpower.group/tools per Master Prompt Phase 11

---

## Proposed Tools

### 1. Solar Savings Estimator

**Purpose:** Help prospects estimate annual savings from a commercial/industrial solar installation.

**Inputs:**
- Monthly electricity bill ($)
- Location (state/zip for solar irradiance lookup)
- Roof or ground-mount
- System size preference (or auto-calculate)

**Outputs:**
- Estimated system size (kW)
- Year 1 savings ($)
- 25-year lifetime savings ($)
- Simple payback period (years)
- Estimated CO2 offset (tons/year)

**Data Sources:**
- NREL PVWatts API (free, reliable, industry standard)
- EIA average electricity rates by state
- ITC/IRA incentive calculations (current law)

**Technical Approach:**
- Client-side React component with form inputs
- API route to call PVWatts for location-specific production estimates
- Results displayed as cards with chart visualization

---

### 2. Carbon Footprint Calculator

**Purpose:** Help businesses estimate their carbon footprint and potential reduction from clean energy.

**Inputs:**
- Annual electricity usage (kWh) or monthly bill
- Location (state for grid emissions factor)
- Natural gas usage (optional)
- Fleet vehicles (optional)

**Outputs:**
- Annual CO2 emissions (metric tons)
- Comparison to industry averages
- Reduction potential from solar/storage
- Equivalent trees planted / cars removed

**Data Sources:**
- EPA eGRID emissions factors by state
- EIA energy consumption data
- EPA equivalency calculator formulas

**Technical Approach:**
- Client-side calculator, no API needed
- EPA formulas are public and well-documented
- Visual output with comparison charts

---

### 3. ROI Comparison Tool

**Purpose:** Compare the ROI of solar investment vs. other business investments.

**Inputs:**
- System cost ($)
- Annual savings ($)
- Tax incentives (ITC %, depreciation)
- Financing terms (cash, loan, PPA)

**Outputs:**
- IRR (Internal Rate of Return)
- NPV (Net Present Value)
- Payback period
- Comparison to S&P 500, bonds, real estate

**Technical Approach:**
- Client-side financial calculations
- Interactive chart showing cumulative cash flows
- Sensitivity analysis slider for electricity rate escalation

---

### 4. Energy Storage Sizing Guide

**Purpose:** Help users estimate the right battery storage size for their needs.

**Inputs:**
- Use case (backup, peak shaving, arbitrage, self-consumption)
- Critical load (kW)
- Desired backup hours
- Solar system size (if paired)

**Outputs:**
- Recommended battery capacity (kWh)
- Recommended power rating (kW)
- Estimated cost range
- Annual savings from peak shaving (if applicable)

**Technical Approach:**
- Client-side calculator with conditional logic per use case
- Reference pricing from public NREL ATB data

---

## Implementation Priority

| Tool | Impact | Effort | Priority |
|---|---|---|---|
| Solar Savings Estimator | High — lead generation | Medium (PVWatts API) | 1 |
| Carbon Footprint Calculator | Medium — awareness | Low (client-side only) | 2 |
| ROI Comparison Tool | High — decision support | Low (client-side only) | 3 |
| Energy Storage Sizing Guide | Medium — niche audience | Low (client-side only) | 4 |

---

## Technical Notes

- All tools should be client-side React components for instant interactivity
- Only the Solar Savings Estimator needs a server-side API route (PVWatts)
- Each tool should include a CTA to book a consultation with Tim for detailed analysis
- Results should be shareable (URL params or PDF export)
- Mobile-responsive design using existing Tailwind design system

---

## Competitive Landscape

Leading cleantech sites with calculators:
- **EnergySage:** Comprehensive solar calculator (market leader)
- **Project Sunroof (Google):** Satellite-based rooftop analysis
- **NREL PVWatts:** Industry-standard production calculator

Our differentiation: C&I focused (not residential), integrated with consulting services, and paired with Tim's expertise for interpretation.
