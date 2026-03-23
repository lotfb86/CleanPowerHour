"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Solar Consulting", href: "/services/solar-consulting" },
      { label: "Career Coaching", href: "/services/career-coaching" },
      { label: "Executive Coaching", href: "/services/executive-coaching" },
      { label: "CLEAN Power Method", href: "/services/clean-power-method" },
      { label: "Cleantech Mastermind", href: "/services/mastermind" },
      { label: "AI Consulting", href: "/services/ai-consulting" },
      { label: "C&I Strategy", href: "/services/ci-strategy" },
    ],
  },
  { label: "Podcast", href: "/podcast" },
  { label: "Training", href: "/training" },
  { label: "Blog", href: "/blog" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--bg-slate)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/cph-logo-wix-full.jpeg"
              alt="Clean Power Consulting Group"
              width={52}
              height={52}
              className="rounded-full"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] leading-tight block">
                Clean Power
              </span>
              <span className="font-[family-name:var(--font-outfit)] text-xs font-medium text-[var(--color-mist)] uppercase tracking-wider">
                Consulting Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-[family-name:var(--font-outfit)] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)] transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-[var(--bg-slate)] py-2 animate-in fade-in slide-in-from-top-1 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)] hover:bg-[var(--bg-warm)] transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-[family-name:var(--font-outfit)] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="https://calendly.com/tim-montague/coaching_consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-solar-deep)] text-white text-sm font-[family-name:var(--font-outfit)] font-semibold rounded-lg hover:bg-[var(--color-solar)] transition-colors duration-200 shadow-sm"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--bg-slate)] bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-4 space-y-1" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-[family-name:var(--font-outfit)] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)] hover:bg-[var(--bg-warm)] rounded-lg transition-colors duration-150"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-slate)] hover:text-[var(--color-solar-deep)] hover:bg-[var(--bg-warm)] rounded-lg transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="https://calendly.com/tim-montague/coaching_consulting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-semibold rounded-lg"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
