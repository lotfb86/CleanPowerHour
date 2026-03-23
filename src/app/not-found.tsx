import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[var(--bg-white)] min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center py-24">
        {/* 404 Number */}
        <p className="font-[family-name:var(--font-outfit)] text-8xl sm:text-9xl font-extrabold text-[var(--color-solar-deep)]/20">
          404
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
          Page Not Found
        </h1>

        <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-md mx-auto">
          Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for. It may have been moved, renamed, or may not exist.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
          >
            Go to Homepage
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-[var(--color-midnight)]/20 text-[var(--color-midnight)] text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-midnight)]/5 transition-all duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-[var(--bg-slate)]">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-mist)] uppercase tracking-wider mb-4">
            Popular Pages
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Popular pages">
            {[
              { label: "Services", href: "/services" },
              { label: "Podcast", href: "/podcast" },
              { label: "About", href: "/about" },
              { label: "Training", href: "/training" },
              { label: "Contact", href: "/contact" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-outfit)] text-sm text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
