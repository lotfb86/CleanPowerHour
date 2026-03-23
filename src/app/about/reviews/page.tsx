import type { Metadata } from "next";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what listeners and clients say about the Clean Power Hour podcast and Clean Power Consulting Group. 27 five-star reviews.",
  openGraph: {
    title: "Reviews | Clean Power Consulting Group",
    description:
      "27 five-star reviews from Clean Power Hour listeners and consulting clients.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clean Power Consulting Group",
    url: "https://cleanpower.group",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "5",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.date,
      reviewBody: r.quote,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            What People Are Saying
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {reviews.length} five-star reviews from Clean Power Hour listeners and consulting clients.
          </p>
          {/* Stars */}
          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-7 h-7 text-[var(--color-solar)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="break-inside-avoid bg-white border border-[var(--bg-slate)] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-solar)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-midnight)] italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-charcoal)]">
                    {review.author}
                  </p>
                  <time
                    dateTime={review.date}
                    className="font-[family-name:var(--font-outfit)] text-xs text-[var(--color-mist)]"
                  >
                    {formatDate(review.date)}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
            Join Our Community
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
            Ready to experience the value that our listeners and clients rave about? Start with a free strategy call.
          </p>
          <a
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
          >
            Book a Free Strategy Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
