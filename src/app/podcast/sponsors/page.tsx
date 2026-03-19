import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sponsors, sponsorTiers } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Podcast Sponsors — Clean Power Hour",
  description:
    "Meet the sponsors of the Clean Power Hour podcast. Industry leaders supporting the clean energy transition through podcast sponsorship.",
  openGraph: {
    title: "Podcast Sponsors — Clean Power Hour",
    description:
      "Meet the sponsors of the Clean Power Hour podcast. Industry leaders supporting the clean energy transition.",
  },
};

const tierOrder = ["terawatt", "gigawatt", "megawatt"] as const;

const tierColors: Record<string, { bg: string; border: string; badge: string; badgeText: string }> = {
  terawatt: {
    bg: "bg-[var(--bg-warm)]",
    border: "border-[var(--color-solar)]",
    badge: "bg-[var(--color-solar-deep)]",
    badgeText: "text-white",
  },
  gigawatt: {
    bg: "bg-[var(--bg-cool)]",
    border: "border-[var(--color-electric)]",
    badge: "bg-[var(--color-electric-deep)]",
    badgeText: "text-white",
  },
  megawatt: {
    bg: "bg-[var(--bg-slate)]",
    border: "border-[var(--color-mist)]",
    badge: "bg-[var(--color-charcoal)]",
    badgeText: "text-white",
  },
};

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest">
            Our Sponsors
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Powering the Podcast
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            These industry leaders help make the Clean Power Hour possible.
            Their support enables us to bring you 400+ episodes of clean energy
            insights every week.
          </p>
        </div>
      </section>

      {/* Sponsors by tier */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {tierOrder.map((tier) => {
            const tierInfo = sponsorTiers[tier];
            const tierSponsors = sponsors.filter((s) => s.tier === tier);
            const colors = tierColors[tier];

            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier} className="mb-20 last:mb-0">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-10">
                  <span
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-[family-name:var(--font-outfit)] font-bold ${colors.badge} ${colors.badgeText}`}
                  >
                    {tierInfo.name}
                  </span>
                  <span className="font-[family-name:var(--font-outfit)] text-sm text-[var(--color-mist)]">
                    {tierInfo.duration}
                  </span>
                </div>

                {/* Sponsor cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.slug}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col rounded-2xl ${colors.bg} border ${colors.border}/20 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                    >
                      {/* Logo area */}
                      <div className="flex items-center justify-center p-8 min-h-[160px]">
                        <div className="relative h-20 w-48">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="192px"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 p-6 pt-0">
                        <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] group-hover:text-[var(--color-electric-deep)] transition-colors duration-200">
                          {sponsor.name}
                        </h3>
                        <p className="mt-2 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-slate)] leading-relaxed">
                          {sponsor.description}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-[var(--color-electric-deep)] font-[family-name:var(--font-outfit)] text-sm font-semibold">
                          Visit website
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="bg-[var(--bg-cool)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-extrabold text-[var(--color-midnight)] tracking-tight">
              Sponsorship Tiers
            </h2>
            <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
              Reach thousands of clean energy professionals and decision-makers
              every week through the Clean Power Hour podcast.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tierOrder.map((tier) => {
              const info = sponsorTiers[tier];
              const colors = tierColors[tier];
              const isTerawatt = tier === "terawatt";

              return (
                <div
                  key={tier}
                  className={`relative rounded-2xl bg-white border-2 ${colors.border}/30 p-8 ${
                    isTerawatt ? "ring-2 ring-[var(--color-solar)]" : ""
                  }`}
                >
                  {isTerawatt && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-solar-deep)] text-white text-xs font-[family-name:var(--font-outfit)] font-bold uppercase tracking-wider">
                      Premium
                    </span>
                  )}

                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)]">
                    {info.name}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-outfit)] text-sm text-[var(--color-mist)]">
                    {info.duration}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {info.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-charcoal)]"
                      >
                        <svg
                          className="w-5 h-5 shrink-0 text-[var(--color-success)] mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    {"status" in info && info.status === "SOLD" ? (
                      <span className="inline-block w-full text-center px-6 py-3 rounded-xl bg-[var(--bg-slate)] text-[var(--color-mist)] font-[family-name:var(--font-outfit)] font-semibold text-sm">
                        Currently Sold
                      </span>
                    ) : (
                      <span className="inline-block font-[family-name:var(--font-outfit)] text-sm text-[var(--color-success)] font-semibold">
                        {"available" in info ? `${info.available} slots available` : ""}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-extrabold text-[var(--color-midnight)] tracking-tight">
            Become a Sponsor
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] leading-relaxed">
            The Clean Power Hour reaches thousands of clean energy professionals
            weekly across Apple Podcasts, Spotify, YouTube, and more. Put your
            brand in front of the decision-makers driving the energy transition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:tim@cleanpowerhour.com?subject=Podcast%20Sponsorship%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-lg font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-solar)] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us About Sponsorship
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--bg-slate)] text-[var(--color-charcoal)] text-lg font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:border-[var(--color-electric-deep)] hover:text-[var(--color-electric-deep)] transition-colors duration-200"
            >
              Browse Episodes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
