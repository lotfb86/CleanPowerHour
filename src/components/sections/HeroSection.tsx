import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] min-h-[90vh] flex items-center">
      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Gradient glow — top-right amber */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-solar) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Gradient glow — bottom-left blue */}
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-electric) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-solar-deep)]/30 bg-[var(--color-solar-deep)]/10">
              <span className="w-2 h-2 rounded-full bg-[var(--color-solar)] animate-pulse" />
              <span className="text-sm font-[family-name:var(--font-outfit)] font-medium text-[var(--color-solar-light)] tracking-wide">
                Cleantech Growth Partner
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              Grow Your{" "}
              <span className="text-[var(--color-solar)]">Cleantech</span>{" "}
              Business With 30+ Years of Expertise
            </h1>

            <p className="font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-[var(--color-mist)] leading-relaxed max-w-xl">
              Host of the{" "}
              <span className="text-white font-semibold italic">
                Clean Power Hour
              </span>{" "}
              — 400+ episodes, 1M+ views, the industry&rsquo;s leading cleantech
              podcast.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://calendly.com/tim-montague/coaching_consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25 hover:shadow-[var(--color-solar)]/30 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Tim headshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-20 blur-sm"
                style={{
                  background:
                    "conic-gradient(from 180deg, var(--color-solar), var(--color-electric), var(--color-solar))",
                }}
                aria-hidden="true"
              />
              {/* Outer border glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--color-solar)]/40 to-[var(--color-electric)]/30" aria-hidden="true" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-2 ring-white/10">
                <Image
                  src="/images/team/tim-montague.jpg"
                  alt="Tim Montague — Cleantech consultant and host of the Clean Power Hour podcast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-3 -left-4 sm:-left-8 bg-[var(--bg-dark-alt)] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-solar)] text-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white text-xs font-[family-name:var(--font-outfit)] font-bold leading-tight">
                      NABCEP Certified
                    </p>
                    <p className="text-[var(--color-mist)] text-[10px] font-[family-name:var(--font-outfit)]">
                      PV Technical Sales
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating podcast badge */}
              <div className="absolute -top-2 -right-4 sm:-right-8 bg-[var(--bg-dark-alt)] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-electric)]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white text-xs font-[family-name:var(--font-outfit)] font-bold leading-tight">
                      400+ Episodes
                    </p>
                    <p className="text-[var(--color-mist)] text-[10px] font-[family-name:var(--font-outfit)]">
                      Clean Power Hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-dark)] to-transparent" aria-hidden="true" />
    </section>
  );
}
