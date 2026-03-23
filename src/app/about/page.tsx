import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tim Montague and John Weaver — the team behind Clean Power Consulting Group. 30+ years in cleantech, NABCEP certified, WSI AI consultant, and host of the Clean Power Hour.",
  openGraph: {
    title: "About | Clean Power Consulting Group",
    description:
      "Meet the team behind Clean Power Consulting Group. 30+ years in cleantech, NABCEP certified, and host of the Clean Power Hour podcast.",
  },
};

const credentials = [
  { label: "NABCEP PV Technical Sales Certified", icon: "certification" },
  { label: "WSI Certified AI Business Consultant", icon: "ai" },
  { label: "M.S. Environmental Policy, Illinois Institute of Technology", icon: "education" },
  { label: "Author, Wired for Sun", icon: "book" },
  { label: "150+ MW Solar Developed", icon: "solar" },
  { label: "$200M+ in Technology Sales", icon: "sales" },
  { label: "400+ Podcast Episodes", icon: "podcast" },
  { label: "1M+ Podcast Downloads", icon: "downloads" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--bg-dark)] py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/unsplash/wind-turbines-sunset.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            About Clean Power Consulting Group
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We help cleantech entrepreneurs and executives grow their businesses through coaching, consulting, and the industry&rsquo;s leading podcast.
          </p>
        </div>
      </section>

      {/* Tim Montague Bio */}

      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--color-solar)]/30 to-[var(--color-electric)]/20" aria-hidden="true" />
                <Image
                  src="/images/team/tim-montague.jpg"
                  alt="Tim Montague — Founder of Clean Power Consulting Group and host of the Clean Power Hour podcast"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover w-full max-w-sm"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
                  Tim Montague
                </h2>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-lg text-[var(--color-solar-deep)] font-medium">
                  Founder &amp; Principal Consultant
                </p>
              </div>

              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Tim Montague is a cleantech business growth expert with over 30 years of experience spanning Silicon Valley tech and renewable energy. He has originated and developed 150+ MW of commercial and industrial solar projects and driven over $200 million in technology sales throughout his career.
                </p>
                <p>
                  As the host of the <em>Clean Power Hour</em> podcast, Tim has published 400+ episodes with more than 1 million downloads, making it one of the most listened-to shows in the clean energy industry. His guests include CEOs, policymakers, engineers, and entrepreneurs shaping the energy transition.
                </p>
                <p>
                  Tim holds an M.S. in Environmental Policy from the Illinois Institute of Technology and is NABCEP PV Technical Sales Certified. He is also a WSI Certified AI Business Consultant, helping cleantech companies integrate artificial intelligence into their operations.
                </p>
                <p>
                  He is the author of <em>Wired for Sun: A Solar Strategy Step by Step</em>, a practical guide for solar professionals and entrepreneurs looking to scale their businesses. Tim lives in the Midwest and speaks regularly at industry conferences including RE+, Intersolar, and NABCEP CE events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* John Weaver Bio */}
      <section className="bg-[var(--bg-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
                  John Weaver
                </h2>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-lg text-[var(--color-solar-deep)] font-medium">
                  Contributor &amp; Solar Journalist
                </p>
              </div>

              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  John Weaver is one of the most prolific solar journalists in the United States. He has covered the solar industry extensively, writing for publications including pv magazine USA, where he served as a senior editor and correspondent.
                </p>
                <p>
                  John brings deep technical knowledge and market analysis to the Clean Power Hour as a regular contributor and co-host. His reporting covers utility-scale solar, distributed generation, energy storage, and the policy landscape shaping America&rsquo;s energy transition.
                </p>
                <p>
                  With a passion for making complex solar topics accessible to a broad audience, John helps Clean Power Consulting Group clients stay informed about market trends, regulatory changes, and emerging opportunities in the cleantech sector.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--color-electric)]/30 to-[var(--color-solar)]/20" aria-hidden="true" />
                <Image
                  src="/images/team/john-weaver.jpg"
                  alt="John Weaver — Solar journalist and contributor to the Clean Power Hour"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar-deep)] uppercase tracking-widest mb-3">
              Credentials
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
              Experience You Can Trust
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[var(--color-solar-deep)] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-start gap-3 p-6 rounded-xl border border-[var(--bg-slate)] bg-white"
              >
                <svg
                  className="w-6 h-6 text-[var(--color-solar-deep)] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-charcoal)]">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>

          {/* WSI Badge */}
          <div className="mt-16 flex justify-center">
            <Image
              src="/images/wsi-badge.png"
              alt="WSI Certified AI Business Consultancy"
              width={280}
              height={70}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-[var(--bg-cool)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-electric-deep)] uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
              What People Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/fYxA8BoyDUg"
                title="Clean Power Hour testimonial video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/8WMI4MvtrUE"
                title="Clean Power Hour short testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
            Let&rsquo;s Work Together
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
            Ready to accelerate your cleantech business? Book a free strategy call with Tim.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
            >
              Book a Free Strategy Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/about/reviews"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-[var(--color-midnight)]/20 text-[var(--color-midnight)] text-base font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-midnight)]/5 transition-all duration-300"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
