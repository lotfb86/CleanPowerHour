import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllEpisodes,
  getEpisodeBySlug,
  getAdjacentEpisodes,
  extractBuzzsproutId,
  formatDate,
  formatDuration,
  stripHtml,
  truncate,
} from "@/lib/episodes";
import { AudioPlayer } from "@/components/podcast/AudioPlayer";
import { CopyLinkButton } from "@/components/podcast/CopyLinkButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const episodes = getAllEpisodes();
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return { title: "Episode Not Found" };
  }

  const plainDescription = truncate(stripHtml(episode.description), 160);

  return {
    title: episode.title,
    description: plainDescription,
    openGraph: {
      title: episode.title,
      description: plainDescription,
      type: "article",
      images: episode.artworkUrl
        ? [{ url: episode.artworkUrl, width: 1200, height: 1200, alt: episode.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: plainDescription,
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-[var(--color-midnight)]">
          Episode Not Found
        </h1>
        <Link
          href="/podcast"
          className="mt-4 inline-block text-[var(--color-electric-deep)] font-[family-name:var(--font-outfit)] font-semibold hover:text-[var(--color-electric)] transition-colors duration-200"
        >
          Back to all episodes
        </Link>
      </div>
    );
  }

  const episodeId = extractBuzzsproutId(episode.audioUrl);
  const { prev, next } = getAdjacentEpisodes(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: truncate(stripHtml(episode.description), 300),
    url: `https://cleanpower.group/podcast/${episode.slug}`,
    datePublished: new Date(episode.pubDate).toISOString(),
    duration: `PT${Math.floor(parseInt(episode.duration) / 60)}M${parseInt(episode.duration) % 60}S`,
    ...(episode.episodeNumber && { episodeNumber: episode.episodeNumber }),
    image: episode.artworkUrl,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: episode.audioUrl,
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Clean Power Hour",
      url: "https://cleanpower.group/podcast",
    },
    author: {
      "@type": "Person",
      name: "Tim Montague",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
              <li>
                <Link
                  href="/podcast"
                  className="hover:text-[var(--color-electric-deep)] transition-colors duration-200"
                >
                  Podcast
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-[var(--color-charcoal)] truncate">
                {episode.title}
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-midnight)] leading-tight tracking-tight">
            {episode.title}
          </h1>

          {/* Meta bar */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-[family-name:var(--font-outfit)] text-sm text-[var(--color-mist)]">
            <time dateTime={new Date(episode.pubDate).toISOString()}>
              {formatDate(episode.pubDate)}
            </time>
            {episode.episodeNumber && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>Episode {episode.episodeNumber}</span>
              </>
            )}
            {episode.duration && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{formatDuration(episode.duration)}</span>
              </>
            )}
          </div>

          {/* Audio Player */}
          {episodeId && (
            <div className="mt-8">
              <AudioPlayer
                episodeId={episodeId}
                title={`Listen to ${episode.title}`}
              />
            </div>
          )}

          {/* Listen On buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://podcasts.apple.com/us/podcast/clean-power-hour/id1544099899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[var(--color-electric-deep)] hover:text-[var(--color-electric-deep)] transition-colors duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.535 14.243c-.226.352-.7.438-1.052.212-.007-.005-2.484-1.463-2.484-3.962V8.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v3.993c0 1.572 1.488 2.593 1.824 2.798.352.226.438.7.212 1.052zM12 6.25a2 2 0 110 4 2 2 0 010-4zM7.735 9.322a4.5 4.5 0 118.53 0 .5.5 0 01-.948.316 3.5 3.5 0 10-6.634 0 .5.5 0 01-.948-.316zM5.78 8.292a6.5 6.5 0 1112.44 0 .5.5 0 01-.957.29 5.5 5.5 0 10-10.526 0 .5.5 0 01-.957-.29z" />
              </svg>
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/0JgvPFNHvlGAz6esmFvsIR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[#1DB954] hover:text-[#1DB954] transition-colors duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a
              href="https://feeds.buzzsprout.com/1765472.rss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-semibold hover:border-[var(--color-solar-deep)] hover:text-[var(--color-solar-deep)] transition-colors duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.18 15.64a2.18 2.18 0 110 4.36 2.18 2.18 0 010-4.36zM4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44zm0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
              </svg>
              RSS Feed
            </a>
          </div>

          {/* Divider */}
          <hr className="my-12 border-[var(--bg-slate)]" />

          {/* Show notes */}
          <div
            className="prose prose-lg max-w-none
              font-[family-name:var(--font-newsreader)]
              prose-headings:font-[family-name:var(--font-outfit)]
              prose-headings:text-[var(--color-midnight)]
              prose-p:text-[var(--color-charcoal)]
              prose-p:leading-relaxed
              prose-a:text-[var(--color-electric-deep)]
              prose-a:no-underline
              hover:prose-a:underline
              prose-strong:text-[var(--color-midnight)]
              prose-li:text-[var(--color-charcoal)]
              prose-ul:list-disc
              prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />

          {/* Divider */}
          <hr className="my-12 border-[var(--bg-slate)]" />

          {/* Social sharing */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-mist)] uppercase tracking-wider">
              Share
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(`https://cleanpower.group/podcast/${episode.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-medium hover:border-[var(--color-charcoal)] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://cleanpower.group/podcast/${episode.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--bg-slate)] text-[var(--color-charcoal)] text-sm font-[family-name:var(--font-outfit)] font-medium hover:border-[var(--color-charcoal)] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <CopyLinkButton url={`https://cleanpower.group/podcast/${episode.slug}`} />
          </div>

          {/* Divider */}
          <hr className="my-12 border-[var(--bg-slate)]" />

          {/* CTA — Book a call */}
          <div className="rounded-2xl bg-[var(--bg-warm)] border border-[var(--color-solar-light)] p-8 lg:p-10 text-center">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)]">
              Book a Free Strategy Call with Tim
            </h2>
            <p className="mt-3 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
              Want to discuss your cleantech business goals? Tim Montague brings
              30+ years of energy industry experience to every conversation.
            </p>
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-lg font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-solar)] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book Your Free Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Previous / Next navigation */}
          <nav
            aria-label="Episode navigation"
            className="mt-12 grid sm:grid-cols-2 gap-4"
          >
            {prev ? (
              <Link
                href={`/podcast/${prev.slug}`}
                className="group flex flex-col p-5 rounded-xl border border-[var(--bg-slate)] hover:border-[var(--color-electric-deep)]/30 hover:shadow-md transition-all duration-300"
              >
                <span className="font-[family-name:var(--font-outfit)] text-xs font-medium text-[var(--color-mist)] uppercase tracking-wider">
                  Previous Episode
                </span>
                <span className="mt-2 font-[family-name:var(--font-outfit)] text-sm font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-electric-deep)] transition-colors duration-200 line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/podcast/${next.slug}`}
                className="group flex flex-col p-5 rounded-xl border border-[var(--bg-slate)] hover:border-[var(--color-electric-deep)]/30 hover:shadow-md transition-all duration-300 text-right"
              >
                <span className="font-[family-name:var(--font-outfit)] text-xs font-medium text-[var(--color-mist)] uppercase tracking-wider">
                  Next Episode
                </span>
                <span className="mt-2 font-[family-name:var(--font-outfit)] text-sm font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-electric-deep)] transition-colors duration-200 line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </article>
    </>
  );
}

