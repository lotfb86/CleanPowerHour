import episodesData from "@/data/episodes.json";

export interface Episode {
  title: string;
  episodeNumber: string | null;
  season: string | null;
  pubDate: string;
  description: string;
  summary: string;
  audioUrl: string;
  artworkUrl: string;
  duration: string;
  guid: string;
  link: string;
  slug: string;
}

export interface PodcastMeta {
  title: string;
  description: string;
  artworkUrl: string;
  link: string;
  language: string;
  author: string;
  categories: string[];
}

/**
 * Return all episodes from the bundled JSON data.
 * Episodes are already sorted newest-first in the JSON file.
 */
export function getAllEpisodes(): Episode[] {
  return episodesData.episodes as Episode[];
}

/**
 * Return podcast-level metadata.
 */
export function getPodcastMeta(): PodcastMeta {
  return episodesData.podcast as PodcastMeta;
}

/**
 * Lookup a single episode by its slug.
 */
export function getEpisodeBySlug(slug: string): Episode | undefined {
  return getAllEpisodes().find((ep) => ep.slug === slug);
}

/**
 * Given an episode, return its index in the full list (0 = newest).
 */
export function getEpisodeIndex(slug: string): number {
  return getAllEpisodes().findIndex((ep) => ep.slug === slug);
}

/**
 * Return the previous and next episodes relative to the given slug.
 * "Previous" = older (higher index), "Next" = newer (lower index).
 */
export function getAdjacentEpisodes(slug: string): {
  prev: Episode | null;
  next: Episode | null;
} {
  const episodes = getAllEpisodes();
  const idx = episodes.findIndex((ep) => ep.slug === slug);
  return {
    prev: idx < episodes.length - 1 ? episodes[idx + 1] : null,
    next: idx > 0 ? episodes[idx - 1] : null,
  };
}

/**
 * Extract the Buzzsprout episode ID from an audio URL.
 * Pattern: /episodes/{ID}-slug.mp3
 */
export function extractBuzzsproutId(audioUrl: string): string | null {
  const match = audioUrl.match(/\/episodes\/(\d+)-/);
  return match ? match[1] : null;
}

/**
 * Format duration from seconds string to human-readable.
 * Returns "H:MM:SS" if >= 1 hour, otherwise "MM:SS".
 */
export function formatDuration(durationSeconds: string): string {
  const total = parseInt(durationSeconds, 10);
  if (isNaN(total) || total <= 0) return "0:00";

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Format an RSS pubDate string (e.g. "Thu, 19 Mar 2026 05:00:00 -0400")
 * into a human-readable date like "March 19, 2026".
 */
export function formatDate(pubDate: string): string {
  const date = new Date(pubDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Strip HTML tags from a string for use in meta descriptions, etc.
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Truncate text to a given length, adding ellipsis if needed.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}
