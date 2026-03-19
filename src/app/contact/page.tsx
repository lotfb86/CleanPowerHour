import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Clean Power Consulting Group. Book a strategy call, send a message, or connect on social media.",
  openGraph: {
    title: "Contact | Clean Power Consulting Group",
    description:
      "Get in touch with Clean Power Consulting Group. Book a strategy call or send a message.",
  },
};

const contactInfo = [
  {
    label: "Phone",
    value: "+1 (217) 722-0429",
    href: "tel:+12177220429",
    iconPath: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: "tim@cleanpowerhour.com",
    href: "mailto:tim@cleanpowerhour.com",
    iconPath: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Address",
    value: "Chicago, IL Metro Area",
    href: null,
    iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cleanpowerhour", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { label: "YouTube", href: "https://www.youtube.com/@cleanpowerhour", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "X (Twitter)", href: "https://twitter.com/tgmontague", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--bg-dark)] py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/unsplash/green-landscape.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you&rsquo;re interested in consulting, sponsorship, or just want to say hello &mdash; we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--color-midnight)] mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-cool)] text-[var(--color-electric-deep)] shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-mist)] uppercase tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] hover:text-[var(--color-solar-deep)] transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book a Call */}
              <div className="bg-[var(--bg-warm)] rounded-2xl p-8">
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-3">
                  Prefer to Talk Live?
                </h3>
                <p className="font-[family-name:var(--font-newsreader)] text-base text-[var(--color-slate)] mb-6">
                  Book a free strategy call directly on Tim&rsquo;s calendar. No obligation, no pitch &mdash; just a conversation about your goals.
                </p>
                <a
                  href="https://calendly.com/tim-montague/coaching_consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-solar-deep)] text-white text-sm font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
                >
                  Book a Call on Calendly
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${social.label}`}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-slate)] text-[var(--color-charcoal)] hover:bg-[var(--color-solar-deep)] hover:text-white transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl overflow-hidden border border-[var(--bg-slate)] h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380511.4587003754!2d-88.0124580768032!3d41.83339746498754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clean Power Consulting Group location — Chicago metro area"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
