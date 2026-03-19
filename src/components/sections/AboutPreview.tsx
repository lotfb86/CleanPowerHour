import Image from "next/image";
import Link from "next/link";

const credentials = [
  "NABCEP PV Technical Sales",
  "WSI Certified AI Consultant",
  "M.S. Environmental Studies",
  "Author, Wired for Sun",
  "150+ MW Developed",
];

export function AboutPreview() {
  return (
    <section className="bg-[var(--bg-warm)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative offset block */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[var(--color-solar-deep)]/10"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/tim-montague.jpg"
                  alt="Tim Montague, President & Founder of Clean Power Consulting Group"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* WSI Badge — floating */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-xl shadow-lg p-3 border border-[var(--bg-slate)]">
                <Image
                  src="/images/wsi-badge.png"
                  alt="WSI Certified AI Business Consultant"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest">
                Meet the Founder
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-midnight)] leading-tight tracking-tight">
                Tim Montague, M.S.
              </h2>
              <p className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-medium text-[var(--color-slate)]">
                President &amp; Founder
              </p>
            </div>

            <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-[var(--color-charcoal)] text-lg leading-relaxed">
              <p>
                A Silicon Valley veteran who pivoted to clean energy over two
                decades ago, Tim has developed 150+ megawatts of commercial
                solar and advised dozens of cleantech companies on growth
                strategy.
              </p>
              <p>
                He is the host of the{" "}
                <span className="font-semibold italic">Clean Power Hour</span>{" "}
                podcast with 400+ episodes and over one million views, author of{" "}
                <span className="font-semibold italic">Wired for Sun</span>,
                and a trusted voice in the clean energy transition.
              </p>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[var(--color-solar-deep)]/10 border border-[var(--color-solar-deep)]/15 text-[var(--color-solar-deep)] text-xs font-[family-name:var(--font-outfit)] font-semibold tracking-wide"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--color-midnight)] text-white font-[family-name:var(--font-outfit)] font-bold text-sm hover:bg-[var(--color-charcoal)] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Meet the Team
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
