import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fulfillment Policy",
  description:
    "Fulfillment and refund policy for Clean Power Consulting Group consulting services, coaching programs, and digital products.",
  openGraph: {
    title: "Fulfillment Policy | Clean Power Consulting Group",
    description: "Fulfillment and refund policy for consulting services and digital products.",
  },
};

export default function FulfillmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Fulfillment Policy
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
                Overview
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  This Fulfillment Policy outlines the terms and conditions for the delivery of consulting services, coaching programs, digital products, and merchandise offered by Clean Power Consulting Group.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Consulting Services
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  <strong>Scheduling:</strong> Consulting sessions are scheduled via Calendly or mutual agreement. Sessions are typically delivered via video conference (Zoom or Google Meet) or in-person at industry events.
                </p>
                <p>
                  <strong>Cancellation:</strong> Clients may cancel or reschedule a session with at least 24 hours&rsquo; notice at no charge. Cancellations with less than 24 hours&rsquo; notice may be subject to a fee equal to the session cost.
                </p>
                <p>
                  <strong>No-shows:</strong> If a client fails to appear for a scheduled session without prior notice, the session will be considered delivered and no refund will be issued.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Coaching Programs
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  <strong>Enrollment:</strong> Coaching programs (including the Cleantech Executive Mastermind) are offered on a monthly or quarterly basis. Enrollment details, including start dates and session schedules, will be communicated upon registration.
                </p>
                <p>
                  <strong>Commitment:</strong> Some programs may require a minimum commitment period as outlined in the enrollment agreement. Early termination may be subject to the terms specified in the individual agreement.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Digital Products
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Digital products, including ebooks, courses, and downloadable resources, will be delivered electronically via email or a download link upon purchase confirmation. Due to the nature of digital products, all sales of digital products are final and non-refundable.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Merchandise
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Merchandise orders are fulfilled through our partner, MerchyMe. Shipping times, return policies, and other terms are governed by MerchyMe&rsquo;s policies. Please refer to <a href="https://cleanpowerhour.merchyme.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-electric-deep)] hover:text-[var(--color-solar-deep)] underline">cleanpowerhour.merchyme.com</a> for their specific fulfillment and return policies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Refund Policy
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  <strong>Consulting sessions:</strong> Refunds are available for unused sessions that are cancelled with more than 24 hours&rsquo; notice. Partially completed engagements will be prorated based on sessions delivered.
                </p>
                <p>
                  <strong>Coaching programs:</strong> Refund eligibility depends on the specific program terms. Generally, refunds are available within the first 14 days of enrollment if no sessions have been attended.
                </p>
                <p>
                  <strong>Digital products:</strong> All digital product sales are final. If you experience technical issues accessing a digital product, please contact us for assistance.
                </p>
                <p>
                  <strong>Merchandise:</strong> Governed by MerchyMe&rsquo;s return and refund policies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Payment Terms
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Payment is due at the time of booking or enrollment unless otherwise agreed in a written consulting agreement. We accept major credit cards and electronic bank transfers. Invoiced clients are expected to pay within 30 days of the invoice date.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-newsreader)] text-base text-[var(--color-charcoal)] leading-relaxed">
                <p>If you have questions about this fulfillment policy, refunds, or your order, please contact us:</p>
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
