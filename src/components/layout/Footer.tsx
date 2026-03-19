import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Solar Consulting", href: "/services/solar-consulting" },
    { label: "Career Coaching", href: "/services/career-coaching" },
    { label: "Executive Coaching", href: "/services/executive-coaching" },
    { label: "CLEAN Power Method", href: "/services/clean-power-method" },
    { label: "Cleantech Mastermind", href: "/services/mastermind" },
    { label: "AI Consulting", href: "/services/ai-consulting" },
  ],
  podcast: [
    { label: "All Episodes", href: "/podcast" },
    { label: "Sponsors", href: "/podcast/sponsors" },
    { label: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/clean-power-hour/id1582667621", external: true },
    { label: "Spotify", href: "https://open.spotify.com/show/4QpRZoiYIV72ZNz7hTYX0W", external: true },
    { label: "YouTube", href: "https://www.youtube.com/@cleanpowerhour", external: true },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/about/reviews" },
    { label: "Media Kit", href: "/about/media-kit" },
    { label: "Blog", href: "/blog" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Training", href: "/training" },
    { label: "Wired for Sun (Book)", href: "/book" },
    { label: "Shop", href: "/shop" },
    { label: "Tools", href: "/tools" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cleanpowerhour", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { label: "YouTube", href: "https://www.youtube.com/@cleanpowerhour", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "Twitter", href: "https://twitter.com/tgmontague", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white" role="contentinfo">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Cleantech Business?
          </h2>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Book a free strategy call with Tim Montague. 30+ years of experience, 150+ MW of solar developed, and 400+ podcast episodes of industry insight.
          </p>
          <Link
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-lg font-[family-name:var(--font-outfit)] font-semibold rounded-xl hover:bg-[var(--color-solar)] transition-colors duration-200 shadow-lg"
          >
            Book Your Free Strategy Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Links Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-solar)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Podcast
            </h3>
            <ul className="space-y-3">
              {footerLinks.podcast.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-white/70 hover:text-[var(--color-solar)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-solar)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-solar)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + Info */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/cph-logo-wix-full.jpeg"
                alt="Clean Power Consulting Group"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm text-white/50">
                  &copy; {new Date().getFullYear()} Clean Power Consulting Group. All rights reserved.
                </p>
                <p className="text-xs text-white/30 mt-1">
                  Speeding the clean energy transition.
                </p>
              </div>
            </div>

            {/* WSI Badge */}
            <Image
              src="/images/wsi-badge.png"
              alt="WSI Certified AI Consultancy"
              width={200}
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.label}`}
                  className="text-white/50 hover:text-[var(--color-solar)] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/fulfillment" className="hover:text-white/50 transition-colors">Fulfillment Policy</Link>
            <span>·</span>
            <span>+1 (217) 722-0429</span>
            <span>·</span>
            <a href="mailto:tim@cleanpowerhour.com" className="hover:text-white/50 transition-colors">tim@cleanpowerhour.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
