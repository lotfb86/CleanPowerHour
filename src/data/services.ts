export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  calendlyUrl: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "solar-consulting",
    title: "Solar Consulting",
    shortTitle: "Solar Consulting",
    description: "Scale your solar business with expert guidance from site assessment to close.",
    longDescription:
      "Whether you're launching a solar division or scaling an existing operation, Tim Montague brings 150+ MW of development experience and $200M+ in technology sales to help you win more deals, optimize your pipeline, and accelerate growth. From C&I site assessment to proposal strategy to closing techniques — get the edge that comes from three decades of doing this work.",
    benefits: [
      "Pipeline development and lead qualification strategy",
      "Proposal optimization for higher close rates",
      "C&I site assessment and feasibility analysis",
      "Sales team coaching and process improvement",
      "Market entry strategy for new territories",
      "Competitive positioning and differentiation",
    ],
    calendlyUrl: "https://go.cleanpowerhour.com/solar-strategy-call",
    icon: "solar",
  },
  {
    slug: "career-coaching",
    title: "Career Coaching for Cleantech Professionals",
    shortTitle: "Career Coaching",
    description: "Navigate your cleantech career transition with confidence.",
    longDescription:
      "The clean energy sector is growing faster than talent can fill it. Whether you're pivoting from another industry or leveling up within cleantech, Tim's career coaching draws on his own Silicon Valley-to-solar journey and 30+ years of hiring, mentoring, and building teams. Get clarity on your path, sharpen your positioning, and accelerate your career in the energy transition.",
    benefits: [
      "Career transition roadmap from adjacent industries",
      "Resume and LinkedIn optimization for cleantech",
      "Interview preparation and salary negotiation",
      "Network building strategy in the solar/storage industry",
      "Professional certification guidance (NABCEP, etc.)",
      "Personal brand development",
    ],
    calendlyUrl: "https://calendly.com/tim-montague/30-minute-coaching",
    icon: "career",
  },
  {
    slug: "executive-coaching",
    title: "Executive Coaching for Cleantech Leaders",
    shortTitle: "Executive Coaching",
    description: "Sharpen your leadership edge in the cleantech industry.",
    longDescription:
      "Leading a cleantech company means navigating rapid technology change, evolving policy landscapes, and fierce competition for talent and deals. Tim's executive coaching provides a confidential sounding board and strategic advisor for C-suite leaders and founders who need to think bigger, move faster, and lead more effectively through the energy transition.",
    benefits: [
      "Strategic thinking and decision-making frameworks",
      "Leadership style assessment and development",
      "Team building and organizational scaling",
      "Stakeholder communication and board presentation skills",
      "Work-life balance and executive resilience",
      "Vision casting and company culture development",
    ],
    calendlyUrl: "https://calendly.com/tim-montague/coaching_consulting",
    icon: "executive",
  },
  {
    slug: "clean-power-method",
    title: "CLEAN Power Market Expansion Method",
    shortTitle: "CLEAN Power Method",
    description: "Our proprietary market expansion framework for solar companies.",
    longDescription:
      "The CLEAN Power Method is Tim Montague's proprietary framework for helping solar companies systematically expand into new markets. Built from real-world experience scaling Continental Energy Solutions from 3 to 15+ staff and originating 50+ MW of projects, this method provides a repeatable, data-driven approach to geographic and vertical market expansion.",
    benefits: [
      "Market analysis and opportunity scoring",
      "Go-to-market strategy development",
      "Sales infrastructure and process design",
      "Partnership and channel strategy",
      "Revenue forecasting and milestone planning",
      "Team hiring and training roadmap",
    ],
    calendlyUrl: "https://calendly.com/tim-montague/coaching_consulting",
    icon: "expand",
  },
  {
    slug: "mastermind",
    title: "Cleantech Executive Mastermind",
    shortTitle: "Cleantech Mastermind",
    description: "Join a peer group of ambitious cleantech executives.",
    longDescription:
      "The Cleantech Executive Mastermind is a curated peer group for solar and clean energy executives who want to grow faster together. Facilitated by Tim Montague, this group combines structured accountability, peer learning, and expert guest sessions to help members tackle their biggest challenges and seize their biggest opportunities.",
    benefits: [
      "Monthly facilitated peer group sessions",
      "Quarterly one-on-one coaching with Tim",
      "Access to Tim's 23,000+ LinkedIn network",
      "Guest expert sessions from industry leaders",
      "Confidential problem-solving with peers",
      "Accountability and goal tracking",
    ],
    calendlyUrl: "https://calendly.com/tim-montague/coaching_consulting",
    icon: "mastermind",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting for Cleantech Companies",
    shortTitle: "AI Consulting",
    description: "Integrate AI into your cleantech operations for competitive advantage.",
    longDescription:
      "As a WSI Certified AI Business Consultant, Tim helps cleantech companies identify and implement AI opportunities that drive real business results — not hype. From automating proposal generation to AI-powered site assessment to intelligent CRM workflows, discover how artificial intelligence can give your clean energy business a decisive edge.",
    benefits: [
      "AI readiness assessment and opportunity mapping",
      "Use case identification and prioritization",
      "Vendor selection and implementation planning",
      "Team training and AI literacy programs",
      "ROI analysis and business case development",
      "Ongoing AI strategy advisory",
    ],
    calendlyUrl: "https://calendly.com/tim-montague/ai-consulting",
    icon: "ai",
  },
  {
    slug: "ci-strategy",
    title: "C&I Solar Strategy",
    shortTitle: "C&I Strategy",
    description: "Comprehensive strategy for commercial and industrial solar.",
    longDescription:
      "Commercial and industrial solar is where the biggest opportunities — and the biggest challenges — live. Tim's C&I strategy consulting helps solar companies and developers navigate the complex C&I landscape with proven frameworks for lead generation, project qualification, proposal development, and closing. Stop leaving MW on the table.",
    benefits: [
      "C&I market assessment and targeting",
      "Lead generation and qualification systems",
      "Proposal development and pricing strategy",
      "Utility rate analysis and savings modeling",
      "Financing options and ITC/IRA optimization",
      "Project management and delivery oversight",
    ],
    calendlyUrl: "https://go.cleanpowerhour.com/solar-strategy-call",
    icon: "ci",
  },
];
