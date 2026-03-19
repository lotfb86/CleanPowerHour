import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllEpisodes,
  getPodcastMeta,
  extractBuzzsproutId,
  formatDate,
  formatDuration,
} from "@/lib/episodes";
import { AudioPlayer } from "@/components/podcast/AudioPlayer";
import { EpisodeSearch } from "@/components/podcast/EpisodeSearch";
import { sponsors } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Clean Power Hour Podcast — 400+ Episodes on Clean Energy",
  description:
    "Listen to the Clean Power Hour podcast with Tim Montague and John Weaver. 400+ episodes covering solar, battery storage, wind energy, and the clean energy transition.",
  openGraph: {
    title: "Clean Power Hour Podcast — 400+ Episodes on Clean Energy",
    description:
      "400+ episodes of deep industry conversations on solar, storage, and the clean energy transition.",
    images: [
      {
        url: "/images/cph-podcast-artwork.jpg",
        width: 1200,
        height: 1200,
        alt: "Clean Power Hour podcast artwork",
      },
    ],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://feeds.buzzsprout.com/1765472.rss",
    },
  },
};

export default function PodcastPage() {
  const episodes = getAllEpisodes();
  const podcastMeta = getPodcastMeta();
  const latestEpisode = episodes[0];
  const latestEpisodeId = extractBuzzsproutId(latestEpisode.audioUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Clean Power Hour",
    description:
      "The Clean Power Hour podcast is speeding the clean energy transition. Tim Montague and John Weaver highlight clean energy innovations shaping the next generation of renewable energy sources.",
    url: "https://cleanpower.group/podcast",
    image: "/images/cph-podcast-artwork.jpg",
    author: {
      "@type": "Person",
      name: "Tim Montague",
    },
    publisher: {
      "@type": "Organization",
      name: "Clean Power Consulting Group",
    },
    webFeed: "https://feeds.buzzsprout.com/1765472.rss",
    numberOfEpisodes: episodes.length,
    genre: ["Technology", "Business", "Clean Energy"],
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — Latest Episode */}
      <section className="relative bg-[var(--bg-dark)] py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/unsplash/power-grid-sunset.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Info */}
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest">
                Clean Power Hour Podcast
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Speeding the Clean Energy Transition
              </h1>
              <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg text-white/70 leading-relaxed max-w-xl">
                {episodes.length}+ episodes of deep industry conversations.
                Tim Montague and John Weaver cover solar, battery storage, wind,
                and every technology driving the energy transition. New episodes
                every Tuesday.
              </p>

              {/* Subscribe buttons */}
              <div className="mt-8 space-y-3">
                <p className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-white/40 uppercase tracking-widest">
                  Subscribe
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://podcasts.apple.com/us/podcast/clean-power-hour/id1544099899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-[family-name:var(--font-outfit)] font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.535 14.243c-.226.352-.7.438-1.052.212-.007-.005-2.484-1.463-2.484-3.962V8.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v3.993c0 1.572 1.488 2.593 1.824 2.798.352.226.438.7.212 1.052zM12 6.25a2 2 0 110 4 2 2 0 010-4zM7.735 9.322a4.5 4.5 0 118.53 0 .5.5 0 01-.948.316 3.5 3.5 0 10-6.634 0 .5.5 0 01-.948-.316zM5.78 8.292a6.5 6.5 0 1112.44 0 .5.5 0 01-.957.29 5.5 5.5 0 10-10.526 0 .5.5 0 01-.957-.29z" />
                    </svg>
                    Apple Podcasts
                  </a>
                  <a
                    href="https://open.spotify.com/show/0JgvPFNHvlGAz6esmFvsIR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-[family-name:var(--font-outfit)] font-semibold hover:bg-white/20 transition-colors duration-200"
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-[family-name:var(--font-outfit)] font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </a>
                  <a
                    href="https://feeds.buzzsprout.com/1765472.rss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-[family-name:var(--font-outfit)] font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.18 15.64a2.18 2.18 0 110 4.36 2.18 2.18 0 010-4.36zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zm0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
                    </svg>
                    RSS
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Latest episode player */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-3">
                  Latest Episode
                </p>
                <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-white mb-1">
                  {latestEpisode.title}
                </h2>
                <p className="font-[family-name:var(--font-outfit)] text-sm text-white/50 mb-5">
                  {latestEpisode.episodeNumber && (
                    <span>Episode {latestEpisode.episodeNumber} &middot; </span>
                  )}
                  {formatDate(latestEpisode.pubDate)} &middot;{" "}
                  {formatDuration(latestEpisode.duration)}
                </p>

                {latestEpisodeId && (
                  <AudioPlayer
                    episodeId={latestEpisodeId}
                    title={`Listen to ${latestEpisode.title}`}
                  />
                )}

                <Link
                  href={`/podcast/${latestEpisode.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-[var(--color-electric)] font-[family-name:var(--font-outfit)] text-sm font-semibold hover:text-white transition-colors duration-200"
                >
                  View full show notes
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
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-extrabold text-[var(--color-midnight)] tracking-tight">
              All Episodes
            </h2>
            <p className="mt-3 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)]">
              Browse {episodes.length} episodes of clean energy conversations
            </p>
          </div>

          <EpisodeSearch episodes={episodes} />
        </div>
      </section>

      {/* Sponsor strip */}
      <section className="bg-[var(--bg-cool)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center font-[family-name:var(--font-outfit)] text-xs font-semibold text-[var(--color-mist)] uppercase tracking-widest mb-8">
            Proudly sponsored by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.slug}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/podcast/sponsors"
              className="inline-flex items-center gap-2 text-[var(--color-electric-deep)] font-[family-name:var(--font-outfit)] text-sm font-semibold hover:text-[var(--color-electric)] transition-colors duration-200"
            >
              View all sponsors
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
      </section>
    </>
  );
}
