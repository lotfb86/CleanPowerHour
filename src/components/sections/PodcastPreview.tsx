import Image from "next/image";
import Link from "next/link";

const latestEpisodes = [
  {
    number: 340,
    title: "The Future of Community Solar with Leading Developers",
    date: "March 11, 2025",
  },
  {
    number: 339,
    title: "Battery Storage Economics: What the Numbers Actually Say",
    date: "March 4, 2025",
  },
  {
    number: 338,
    title: "Navigating IRA Incentives for Commercial Solar Projects",
    date: "February 25, 2025",
  },
];

const sponsors = [
  { name: "OMCO Solar", src: "/images/sponsors/omco-solar.png" },
  { name: "Conductor Solar", src: "/images/sponsors/conductor-solar.png" },
  { name: "Sandbox Solar", src: "/images/sponsors/sandbox-solar.png" },
  { name: "Chint Power Systems", src: "/images/sponsors/chint-power-systems.png" },
  { name: "Denowatts", src: "/images/sponsors/denowatts.png" },
  { name: "SunZaun", src: "/images/sponsors/sunzaun.png" },
];

export function PodcastPreview() {
  return (
    <section className="bg-[var(--bg-cool)] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-electric-deep)] uppercase tracking-widest">
            Tune In Every Tuesday
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-midnight)] leading-tight tracking-tight">
            The Clean Power Hour Podcast
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] leading-relaxed">
            400+ episodes of deep industry conversations. New episodes every
            Tuesday.
          </p>
        </div>

        {/* Main content — asymmetric layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — Artwork + Subscribe */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative group">
              {/* Decorative offset shadow */}
              <div
                className="absolute -bottom-3 -right-3 inset-x-3 top-3 rounded-2xl bg-[var(--color-electric-deep)]/10"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/cph-podcast-artwork.jpg"
                  alt="Clean Power Hour podcast artwork"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Subscribe buttons */}
            <div className="space-y-3">
              <p className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-[var(--color-mist)] uppercase tracking-widest">
                Subscribe
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://podcasts.apple.com/us/podcast/clean-power-hour/id1544099899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[var(--color-electric-deep)] hover:text-[var(--color-electric-deep)] transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.535 14.243c-.226.352-.7.438-1.052.212-.007-.005-2.484-1.463-2.484-3.962V8.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v3.993c0 1.572 1.488 2.593 1.824 2.798.352.226.438.7.212 1.052zM12 6.25a2 2 0 110 4 2 2 0 010-4zM7.735 9.322a4.5 4.5 0 118.53 0 .5.5 0 01-.948.316 3.5 3.5 0 10-6.634 0 .5.5 0 01-.948-.316zM5.78 8.292a6.5 6.5 0 1112.44 0 .5.5 0 01-.957.29 5.5 5.5 0 10-10.526 0 .5.5 0 01-.957-.29z" />
                  </svg>
                  Apple
                </a>
                <a
                  href="https://open.spotify.com/show/0JgvPFNHvlGAz6esmFvsIR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[#1DB954] hover:text-[#1DB954] transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.786-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.713 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.786-2.131-9.965-1.166a.78.78 0 01-.452-1.493c3.632-1.102 8.147-.568 11.233 1.33a.78.78 0 01.256 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" />
                  </svg>
                  Spotify
                </a>
                <a
                  href="https://www.youtube.com/@CleanPowerHour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[#FF0000] hover:text-[#FF0000] transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right — Latest episodes */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)]">
              Latest Episodes
            </h3>

            <div className="space-y-4">
              {latestEpisodes.map((ep) => (
                <div
                  key={ep.number}
                  className="group relative flex gap-5 p-5 rounded-xl bg-white border border-[var(--bg-slate)] hover:shadow-lg hover:border-[var(--color-electric-deep)]/30 transition-all duration-300"
                >
                  {/* Episode number */}
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-electric-deep)]/10 text-[var(--color-electric-deep)] font-[family-name:var(--font-outfit)] font-extrabold text-lg">
                    {ep.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-outfit)] text-xs font-medium text-[var(--color-mist)] uppercase tracking-wider">
                      Episode {ep.number} &middot; {ep.date}
                    </p>
                    <h4 className="mt-1 font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-electric-deep)] transition-colors duration-200 line-clamp-2">
                      {ep.title}
                    </h4>
                  </div>

                  {/* Play icon */}
                  <div className="shrink-0 self-center w-10 h-10 rounded-full bg-[var(--color-electric-deep)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Browse all CTA */}
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-[var(--color-electric-deep)] text-white font-[family-name:var(--font-outfit)] font-bold text-sm hover:bg-[var(--color-electric)] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Browse All Episodes
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Sponsor strip */}
        <div className="mt-24 pt-12 border-t border-[var(--color-electric-deep)]/10">
          <p className="text-center font-[family-name:var(--font-outfit)] text-xs font-semibold text-[var(--color-mist)] uppercase tracking-widest mb-8">
            Proudly sponsored by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative h-10 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
