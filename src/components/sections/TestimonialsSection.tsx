const testimonials = [
  {
    quote:
      "Next to the sun, the CPH is the best thing in the solar system",
    author: "Chris Covelli",
  },
  {
    quote: "Best Clean/Green Energy Podcast PERIOD",
    author: "Louis S.",
  },
  {
    quote:
      "Where Clean Energy Gets Real -- and Sometimes Nerdy",
    author: "Dominick Squicciarini",
  },
  {
    quote: "A MUST listen if you're in the solar space",
    author: "Anonymous",
  },
  {
    quote: "Technical & insightful",
    author: "Aubrey Swift",
  },
  {
    quote: "Inspiring content with a pragmatic lens",
    author: "Philip Krain",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[var(--color-solar)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative bg-[var(--bg-dark)] py-24 lg:py-32 overflow-hidden">
      {/* Subtle decorative gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, var(--color-solar) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest">
            Reviews
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            What the Industry Says
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[var(--color-solar)]" aria-hidden="true" />
        </div>

        {/* Testimonials grid — staggered for visual interest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`relative p-7 rounded-2xl border border-white/[0.06] bg-[var(--bg-dark-alt)] hover:border-[var(--color-solar)]/20 transition-colors duration-300 ${
                idx === 0 ? "lg:row-span-1" : ""
              } ${idx === 1 ? "sm:translate-y-4" : ""} ${idx === 4 ? "sm:translate-y-4" : ""}`}
            >
              <StarRating />

              <blockquote className="mt-4 font-[family-name:var(--font-newsreader)] text-lg italic text-white/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-3">
                {/* Avatar placeholder — initial */}
                <div className="w-9 h-9 rounded-full bg-[var(--color-solar-deep)]/20 border border-[var(--color-solar-deep)]/30 flex items-center justify-center">
                  <span className="text-sm font-[family-name:var(--font-outfit)] font-bold text-[var(--color-solar)]">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-white/70">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
