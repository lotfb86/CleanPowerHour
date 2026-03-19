import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Clean Power Consulting Group`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-outfit)] font-medium text-white/60 hover:text-[var(--color-solar)] transition-colors duration-200 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            {service.title}
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Long Description */}
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-6">
                  Overview
                </h2>
                <p className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-6">
                  What You Get
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--color-success)] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[var(--bg-warm)] rounded-2xl p-8 lg:p-10">
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-3">
                  Ready to Get Started?
                </h2>
                <p className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-slate)] mb-6">
                  Schedule a call with Tim to discuss how this service can help your business grow.
                </p>
                <a
                  href={service.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
                >
                  Book Your Call
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sidebar — Other Services */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] mb-6">
                  Other Services
                </h3>
                <nav className="space-y-3" aria-label="Other services">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group block p-4 rounded-xl border border-[var(--bg-slate)] hover:border-[var(--color-solar-deep)]/30 hover:shadow-md transition-all duration-200"
                    >
                      <p className="font-[family-name:var(--font-outfit)] text-sm font-bold text-[var(--color-midnight)] group-hover:text-[var(--color-solar-deep)] transition-colors duration-200">
                        {s.shortTitle}
                      </p>
                      <p className="font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-mist)] mt-1 line-clamp-2">
                        {s.description}
                      </p>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
