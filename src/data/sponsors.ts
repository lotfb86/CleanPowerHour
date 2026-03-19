export interface Sponsor {
  name: string;
  slug: string;
  tier: "terawatt" | "gigawatt" | "megawatt";
  description: string;
  logo: string;
  url: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Chint Power Systems (CPS America)",
    slug: "cps-america",
    tier: "terawatt",
    description:
      "America's leading supplier of 3-phase string inverters with over 5 GW deployed across 10,000+ commercial, industrial, and utility-scale projects. #1 market share for 3-phase string inverters for 6 of the past 7 years. Headquartered in Richardson, Texas.",
    logo: "/images/sponsors/chint-power-systems.png",
    url: "https://chintpowersystems.com",
  },
  {
    name: "Commercial Solar Guy",
    slug: "commercial-solar-guy",
    tier: "gigawatt",
    description:
      "John Fitzgerald Weaver — premier solar consultant, industry leader, and writer for PV Magazine USA. Co-host of the Clean Power Hour podcast.",
    logo: "/images/sponsors/commercial-solar-guy.png",
    url: "https://commercialsolarguy.com",
  },
  {
    name: "Conductor Solar",
    slug: "conductor-solar",
    tier: "gigawatt",
    description:
      "Accelerates critical transactions in solar project development and financing, facilitating connections between key parties for solar PV and battery energy storage.",
    logo: "/images/sponsors/conductor-solar.png",
    url: "https://conductorsolar.com",
  },
  {
    name: "TenneSEIA",
    slug: "tennesseia",
    tier: "megawatt",
    description:
      "Tennessee Solar Energy Industries Association — promoting solar energy and complementary technologies in the Tennessee Valley as a state affiliate for national SEIA.",
    logo: "/images/sponsors/tennesseia-solar.jpg",
    url: "https://tennesseia.org",
  },
  {
    name: "Denowatts",
    slug: "denowatts",
    tier: "megawatt",
    description:
      "Solar performance management through Digital Twin Benchmarking technology. Founded by Dan Leary.",
    logo: "/images/sponsors/denowatts.png",
    url: "https://denowatts.com",
  },
  {
    name: "ISEA",
    slug: "isea",
    tier: "megawatt",
    description:
      "Illinois Solar Energy Association — Illinois' premier solar industry trade association since 1975, uniting over 500 businesses and individuals.",
    logo: "/images/sponsors/illinois-solar-energy-association.png",
    url: "https://illinoissolar.org",
  },
  {
    name: "OMCO Solar",
    slug: "omco-solar",
    tier: "gigawatt",
    description:
      "Factory-direct manufacturer of solar mounting solutions with 7 decades of steel manufacturing expertise. 11 GW of solar mounting structures delivered nationwide.",
    logo: "/images/sponsors/omco-solar.png",
    url: "https://omcosolar.com",
  },
  {
    name: "Sandbox Solar",
    slug: "sandbox-solar",
    tier: "megawatt",
    description:
      "Northern Colorado's Best Solar Company, based in Fort Collins. Colorado Top Solar Contractor and Nextdoor Neighborhood Favorite.",
    logo: "/images/sponsors/sandbox-solar.png",
    url: "https://sandboxsolar.com",
  },
  {
    name: "Sunzaun",
    slug: "sunzaun",
    tier: "megawatt",
    description:
      "Innovation in vertical solar systems, born from Sunstall Inc. Pioneering new form factors for solar energy deployment.",
    logo: "/images/sponsors/sunzaun.png",
    url: "https://sunzaun.com",
  },
];

export const sponsorTiers = {
  terawatt: {
    name: "Terawatt Sponsor",
    duration: "52 weeks (exclusive)",
    features: [
      "10+ featured interviews",
      "30-second spots on 52 weekly episodes",
      "Entire back catalog pre-roll",
      "Customer interview opportunities",
      "Category exclusivity",
    ],
    status: "SOLD",
  },
  gigawatt: {
    name: "Gigawatt Sponsor",
    duration: "10 weeks",
    features: [
      "30-second spots on 10 weekly episodes",
      "Two sponsored content interviews",
    ],
    available: 3,
  },
  megawatt: {
    name: "Megawatt Sponsor",
    duration: "5 weeks",
    features: [
      "30-second spots on 5 weekly episodes",
      "One sponsored content interview",
    ],
    available: 4,
  },
};
