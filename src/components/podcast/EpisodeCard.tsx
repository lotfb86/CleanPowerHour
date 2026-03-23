import Image from "next/image";
import Link from "next/link";
import type { Episode } from "@/lib/episodes";
import { formatDate, formatDuration } from "@/lib/episodes";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/podcast/${episode.slug}`}
      className="group flex flex-col rounded-xl bg-white border border-[var(--bg-slate)] hover:shadow-lg hover:border-[var(--color-electric-deep)]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Artwork */}
      {episode.artworkUrl && (
        <div className="relative aspect-video overflow-hidden bg-[var(--bg-slate)]">
          <Image
            src={episode.artworkUrl}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Duration badge */}
          {episode.duration && (
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-white text-xs font-[family-name:var(--font-outfit)] font-semibold backdrop-blur-sm">
              {formatDuration(episode.duration)}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Meta */}
        <p className="font-[family-name:var(--font-outfit)] text-xs font-medium text-[var(--color-mist)] uppercase tracking-wider">
          {episode.episodeNumber && (
            <span>Episode {episode.episodeNumber} &middot; </span>
          )}
          {formatDate(episode.pubDate)}
        </p>

        {/* Title */}
        <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-electric-deep)] transition-colors duration-200 line-clamp-2">
          {episode.title}
        </h3>

        {/* Summary */}
        {episode.summary && (
          <p className="mt-2 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-slate)] line-clamp-3 flex-1">
            {episode.summary}
          </p>
        )}

        {/* Listen link */}
        <div className="mt-4 flex items-center gap-2 text-[var(--color-electric-deep)] font-[family-name:var(--font-outfit)] text-sm font-semibold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Listen Now
        </div>
      </div>
    </Link>
  );
}
