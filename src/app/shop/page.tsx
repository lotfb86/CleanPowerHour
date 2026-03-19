import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Power Hour Shop",
  description:
    "Clean Power Hour merchandise. T-shirts, hats, mugs, and more. Show your support for the clean energy transition.",
  openGraph: {
    title: "Shop | Clean Power Consulting Group",
    description: "Clean Power Hour merchandise. Show your support for the clean energy transition.",
  },
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Merch
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Clean Power Hour Shop
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Rep the clean energy transition with official Clean Power Hour merchandise. Every purchase supports independent cleantech journalism.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="bg-[var(--bg-warm)] rounded-2xl p-12 lg:p-16">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--color-solar-deep)]/10 text-[var(--color-solar-deep)] mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>

            <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-4">
              Visit Our Online Store
            </h2>
            <p className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto mb-8">
              Browse t-shirts, hats, mugs, stickers, and more on our MerchyMe store. New designs are added regularly, so check back often.
            </p>

            <a
              href="https://cleanpowerhour.merchyme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
            >
              Shop Now on MerchyMe
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16">
            <p className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-mist)] mb-4">
              Looking for consulting services instead?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] transition-colors duration-200"
            >
              Explore Our Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
