import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Clean Power Consulting Group. Please read these terms carefully before using our website or engaging our services.",
  openGraph: {
    title: "Terms of Service | Clean Power Consulting Group",
    description: "Terms of service for Clean Power Consulting Group.",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Terms of Service
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
                Agreement to Terms
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  By accessing or using the Clean Power Consulting Group website (cleanpower.group) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Services Description
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Clean Power Consulting Group provides cleantech business consulting, executive coaching, career coaching, AI consulting, and related professional services. We also produce the Clean Power Hour podcast and educational content.
                </p>
                <p>
                  Our consulting services are advisory in nature. While we provide expert guidance based on extensive industry experience, we do not guarantee specific business outcomes, financial results, or regulatory approvals.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  All content on this website, including text, graphics, logos, images, audio, video, and software, is the property of Clean Power Consulting Group or its content providers and is protected by United States and international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from this website without our prior written consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                User Conduct
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>When using our website and services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or data</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Interfere with the proper operation of our website</li>
                  <li>Impersonate another person or entity</li>
                  <li>Collect personal information of other users without consent</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Consulting Engagements
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Consulting engagements are governed by individual service agreements that will be provided prior to the commencement of services. These agreements will outline scope, fees, timelines, and specific terms applicable to your engagement.
                </p>
                <p>
                  Information shared during consulting engagements is treated as confidential unless otherwise agreed in writing. We will not share your proprietary business information with third parties without your explicit consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Disclaimer of Warranties
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee the accuracy, completeness, or usefulness of any information on our website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Limitation of Liability
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  To the fullest extent permitted by law, Clean Power Consulting Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, even if we have been advised of the possibility of such damages.
                </p>
                <p>
                  Our total liability for any claims arising from or related to our services shall not exceed the fees paid by you for the specific services giving rise to the claim.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Third-Party Links and Services
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Our website may contain links to third-party websites and services, including but not limited to podcast platforms, scheduling tools (Calendly), educational platforms (HeatSpring), and merchandise stores (MerchyMe). We are not responsible for the content, terms, or privacy practices of these third-party services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Governing Law
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Illinois.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Changes to These Terms
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website and services after changes are posted constitutes your acceptance of the modified terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>If you have questions about these Terms of Service, please contact us:</p>
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
