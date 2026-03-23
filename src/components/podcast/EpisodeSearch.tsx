"use client";

import { useState, useMemo } from "react";
import type { Episode } from "@/lib/episodes";
import { EpisodeCard } from "./EpisodeCard";

const EPISODES_PER_PAGE = 24;

interface EpisodeSearchProps {
  episodes: Episode[];
}

export function EpisodeSearch({ episodes }: EpisodeSearchProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!query.trim()) return episodes;
    const q = query.toLowerCase();
    return episodes.filter(
      (ep) =>
        ep.title.toLowerCase().includes(q) ||
        (ep.summary && ep.summary.toLowerCase().includes(q)) ||
        (ep.description && ep.description.toLowerCase().includes(q))
    );
  }, [episodes, query]);

  const totalPages = Math.ceil(filtered.length / EPISODES_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * EPISODES_PER_PAGE,
    page * EPISODES_PER_PAGE
  );

  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div>
      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-12">
        <label htmlFor="episode-search" className="sr-only">
          Search episodes
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-mist)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            id="episode-search"
            type="search"
            placeholder="Search 400+ episodes by topic, guest, or keyword..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-outfit)] text-base placeholder:text-[var(--color-mist)] focus:outline-none focus:border-[var(--color-electric-deep)] focus:ring-2 focus:ring-[var(--color-electric-deep)]/20 transition-all duration-200 shadow-sm"
          />
        </div>
        {query && (
          <p className="mt-3 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)] text-center">
            {filtered.length} episode{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {/* Episode grid */}
      {paginated.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((ep) => (
            <EpisodeCard key={ep.guid} episode={ep} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="font-[family-name:var(--font-outfit)] text-lg text-[var(--color-mist)]">
            No episodes found for &ldquo;{query}&rdquo;
          </p>
          <button
            onClick={() => handleSearch("")}
            className="mt-4 px-6 py-2 rounded-lg bg-[var(--color-electric-deep)] text-white font-[family-name:var(--font-outfit)] font-semibold text-sm hover:bg-[var(--color-electric)] transition-colors duration-200"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Episode pagination"
          className="mt-12 flex items-center justify-center gap-2"
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border border-[var(--bg-slate)] text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] hover:border-[var(--color-electric-deep)] hover:text-[var(--color-electric-deep)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {generatePageNumbers(page, totalPages).map((p, i) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-2 text-[var(--color-mist)]"
                >
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p as number)}
                  className={`w-10 h-10 rounded-lg text-sm font-[family-name:var(--font-outfit)] font-semibold transition-colors duration-200 ${
                    page === p
                      ? "bg-[var(--color-electric-deep)] text-white"
                      : "text-[var(--color-charcoal)] hover:bg-[var(--bg-slate)]"
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg border border-[var(--bg-slate)] text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-charcoal)] hover:border-[var(--color-electric-deep)] hover:text-[var(--color-electric-deep)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}

/**
 * Generate a compact set of page numbers with ellipsis.
 */
function generatePageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);
  return pages;
}
