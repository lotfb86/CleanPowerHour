import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "2026 clean energy events calendar. Find Tim Montague at RE+, Intersolar, NABCEP CE Conference, CleanPower ACP, and other industry conferences.",
  openGraph: {
    title: "Events | Clean Power Consulting Group",
    description:
      "2026 clean energy events calendar. Find Tim Montague at industry conferences across the country.",
  },
};

interface Event {
  name: string;
  location: string;
  month: string;
}

const events: Event[] = [
  { name: "NABCEP CE Conference", location: "Milwaukee, WI", month: "March" },
  { name: "CPH Milwaukee Meetup", location: "Milwaukee, WI", month: "March" },
  { name: "RE+ Southeast", location: "Atlanta, GA", month: "April" },
  { name: "NY Energy Summit", location: "New York, NY", month: "April" },
  { name: "CPS Innovation Day", location: "Dallas, TX", month: "April" },
  { name: "Microgrid Knowledge", location: "Orlando, FL", month: "May" },
  { name: "NY-BEST", location: "Albany, NY", month: "May" },
  { name: "CCSA Community Solar", location: "Washington, DC", month: "May" },
  { name: "CleanPower ACP 2026", location: "Houston, TX", month: "June" },
  { name: "Intersolar NA Midwest", location: "Rosemont, IL", month: "June" },
  { name: "RE+ Mid-Atlantic", location: "Philadelphia, PA", month: "August" },
  { name: "RE+ Midwest", location: "Chicago, IL", month: "September" },
  { name: "Gateway to Solar MNSEIA", location: "Minneapolis, MN", month: "September" },
  { name: "IREC", location: "Bloomington, IL", month: "October" },
  { name: "RE+ Vegas", location: "Las Vegas, NV", month: "November" },
];

const months = [
  "March",
  "April",
  "May",
  "June",
  "August",
  "September",
  "October",
  "November",
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            2026 Calendar
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Events &amp; Conferences
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Find Tim Montague at clean energy conferences across the country. Come say hello, schedule a meeting, or join us at a CPH meetup.
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {months.map((month) => {
              const monthEvents = events.filter((e) => e.month === month);
              if (monthEvents.length === 0) return null;

              return (
                <div key={month}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)]">
                      {month}
                    </h2>
                    <div className="flex-1 h-px bg-[var(--bg-slate)]" aria-hidden="true" />
                  </div>

                  <div className="space-y-4">
                    {monthEvents.map((event) => (
                      <div
                        key={event.name}
                        className="flex items-center gap-4 p-5 rounded-xl border border-[var(--bg-slate)] bg-white hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-cool)] text-[var(--color-electric-deep)] shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-[family-name:var(--font-outfit)] text-base font-bold text-[var(--color-midnight)]">
                            {event.name}
                          </p>
                          <p className="font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-mist)]">
                            {event.location}
                          </p>
                        </div>
                        <span className="shrink-0 px-3 py-1 rounded-full bg-[var(--bg-cool)] text-[var(--color-electric-deep)] text-xs font-[family-name:var(--font-outfit)] font-semibold">
                          {month} 2026
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
            Want to Meet at an Event?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
            Schedule a meeting with Tim at any of these conferences. Whether it&rsquo;s a quick coffee or a full strategy session, we&rsquo;d love to connect.
          </p>
          <a
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
          >
            Schedule a Meeting
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
