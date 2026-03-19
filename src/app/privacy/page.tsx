import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Clean Power Consulting Group. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Clean Power Consulting Group",
    description: "Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-white/70">
            Last updated: March 19, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-container space-y-10">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Introduction
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Clean Power Consulting Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website at cleanpower.group or engage our consulting services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p><strong>Personal Information:</strong> When you contact us, book a consultation, or subscribe to our newsletter, we may collect your name, email address, phone number, company name, and job title.</p>
                <p><strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits.</p>
                <p><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.</p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and deliver our consulting services</li>
                  <li>Respond to your inquiries and communications</li>
                  <li>Send you newsletters, marketing materials, and updates (with your consent)</li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or unauthorized activity</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Information Sharing
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep your information confidential. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email marketing platforms (e.g., for newsletter delivery)</li>
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Scheduling tools (e.g., Calendly)</li>
                  <li>Payment processors (for consulting services)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Data Security
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at <a href="mailto:tim@cleanpowerhour.com" className="text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] underline">tim@cleanpowerhour.com</a>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Third-Party Links
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Our website may contain links to third-party websites, including podcast platforms, social media, and partner sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Children&rsquo;s Privacy
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Changes to This Policy
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically for the latest information on our privacy practices.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
                <p>
                  <strong>Clean Power Consulting Group</strong><br />
                  Email: <a href="mailto:tim@cleanpowerhour.com" className="text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] underline">tim@cleanpowerhour.com</a><br />
                  Phone: <a href="tel:+12177220429" className="text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] underline">+1 (217) 722-0429</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
