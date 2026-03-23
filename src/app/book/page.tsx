import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wired for Sun — A Solar Strategy Step by Step",
  description:
    "Wired for Sun by Tim Montague is a practical guide for solar professionals and entrepreneurs looking to scale their businesses. Available on Amazon.",
  openGraph: {
    title: "Wired for Sun | Clean Power Consulting Group",
    description:
      "A practical guide for solar professionals and entrepreneurs looking to scale their businesses. By Tim Montague.",
  },
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
                  New Book
                </p>
                <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Wired for Sun
                </h1>
                <p className="mt-2 font-[family-name:var(--font-outfit)] text-xl sm:text-2xl text-white/60 font-medium">
                  A Solar Strategy Step by Step
                </p>
              </div>

              <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 leading-relaxed max-w-xl">
                By <strong className="text-white">Tim Montague</strong> &mdash; cleantech business growth expert, NABCEP certified professional, and host of the Clean Power Hour podcast.
              </p>

              <a
                href="https://www.amazon.com/Wired-Sun-Strategy-Step-Step/dp/B0FKB9M8DM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
              >
                Buy on Amazon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Book visual placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] bg-gradient-to-br from-[var(--color-solar-deep)] to-[var(--color-solar)] rounded-2xl shadow-2xl flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Wired<br />for Sun
                  </p>
                  <div className="mt-4 h-0.5 w-16 bg-white/40 mx-auto" aria-hidden="true" />
                  <p className="mt-4 font-[family-name:var(--font-newsreader)] text-sm text-white/80 italic">
                    A Solar Strategy<br />Step by Step
                  </p>
                  <p className="mt-6 font-[family-name:var(--font-outfit)] text-xs text-white/60 uppercase tracking-widest">
                    Tim Montague
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Book */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)] mb-8">
              Why This Book Matters
            </h2>
            <div className="space-y-6 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
              <p>
                The solar industry is booming, but most solar entrepreneurs are building their businesses through trial and error. <em>Wired for Sun</em> changes that by providing a clear, step-by-step strategy for building a successful solar business.
              </p>
              <p>
                Drawing on 30+ years of experience in technology sales and renewable energy development, Tim Montague distills the lessons that most solar entrepreneurs learn the hard way into an actionable framework that you can start using immediately.
              </p>
              <p>
                Whether you&rsquo;re starting a solar company, scaling an existing operation, or transitioning into clean energy from another industry, this book gives you the roadmap you need to succeed.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {[
                "Proven frameworks for solar business growth",
                "Real-world case studies and examples",
                "Sales and marketing strategies that work",
                "How to build and lead a winning team",
                "Financial modeling and forecasting",
                "Navigating policy and market dynamics",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-success)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
            Get Your Copy Today
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
            Available now on Amazon. Start building your solar business strategy today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.amazon.com/Wired-Sun-Strategy-Step-Step/dp/B0FKB9M8DM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
            >
              Buy on Amazon
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-[var(--color-midnight)]/20 text-[var(--color-midnight)] text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-midnight)]/5 transition-all duration-300"
            >
              Bulk Orders? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
