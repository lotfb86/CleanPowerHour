import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PodcastPreview } from "@/components/sections/PodcastPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Power Consulting Group | Cleantech Business Growth Experts",
  description:
    "Grow your cleantech business with Tim Montague — 30+ years of experience, 150+ MW of solar developed, and host of the Clean Power Hour podcast (400+ episodes, 1M+ views).",
  openGraph: {
    title: "Clean Power Consulting Group | Cleantech Business Growth Experts",
    description:
      "Grow your cleantech business with Tim Montague — 30+ years of experience, 150+ MW of solar developed, and host of the Clean Power Hour podcast.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Clean Power Consulting Group",
  description:
    "Cleantech business consulting, executive coaching, and career coaching from Tim Montague — 30+ years of experience in solar energy and sustainability.",
  url: "https://cleanpower.group",
  logo: "https://cleanpower.group/images/cph-logo-wix-full.jpeg",
  founder: {
    "@type": "Person",
    name: "Tim Montague",
    jobTitle: "President & Founder",
    sameAs: [
      "https://www.linkedin.com/in/TimMontague",
      "https://www.youtube.com/@CleanPowerHour",
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/TimMontague",
    "https://www.youtube.com/@CleanPowerHour",
    "https://x.com/cleanpowerhour",
  ],
  areaServed: "US",
  serviceType: [
    "Solar Consulting",
    "Executive Coaching",
    "Career Coaching",
    "AI Consulting for Clean Energy",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <PodcastPreview />
      <TestimonialsSection />
      <AboutPreview />
    </>
  );
}
