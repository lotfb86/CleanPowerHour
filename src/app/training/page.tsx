import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar & Clean Energy Training",
  description:
    "NABCEP certification prep, solar PV fundamentals, energy storage, and utility-scale design courses through HeatSpring. Recommended by Tim Montague.",
  openGraph: {
    title: "Solar & Clean Energy Training | Clean Power Consulting Group",
    description:
      "NABCEP certification prep, solar PV fundamentals, energy storage, and utility-scale design courses through HeatSpring.",
  },
};

const courses = [
  {
    title: "NABCEP PV Installation Professional Prep",
    description: "Comprehensive preparation for the NABCEP PV Installation Professional certification exam. Covers system design, installation, commissioning, and maintenance.",
    url: "https://www.heatspring.com/courses/nabcep-pv-installation-professional-exam-prep?aff_id=ne1aha",
    tag: "NABCEP Prep",
  },
  {
    title: "NABCEP PV Associate Practice Exam",
    description: "Practice exam to prepare for the NABCEP PV Associate certification. Test your knowledge and identify areas for improvement before the real exam.",
    url: "https://www.heatspring.com/courses/nabcep-pv-associate-practice-exam?aff_id=ne1aha",
    tag: "NABCEP Prep",
  },
  {
    title: "Fundamentals: Solar PV",
    description: "A foundational course covering solar photovoltaic technology, system components, design principles, and the economics of solar energy.",
    url: "https://www.heatspring.com/courses/fundamentals-of-solar-pv?aff_id=ne1aha",
    tag: "Fundamentals",
  },
  {
    title: "58-Hour NABCEP Advanced PV + Energy Storage",
    description: "An intensive 58-hour advanced training covering both PV and energy storage systems. Ideal for professionals seeking advanced NABCEP credentials.",
    url: "https://www.heatspring.com/courses/58-hour-nabcep-advanced-pv-energy-storage?aff_id=ne1aha",
    tag: "Advanced",
  },
  {
    title: "NABCEP PV Design Specialist Prep",
    description: "Targeted preparation for the NABCEP PV Design Specialist certification. Focuses on system design, code compliance, and performance modeling.",
    url: "https://www.heatspring.com/courses/nabcep-pv-design-specialist-exam-prep?aff_id=ne1aha",
    tag: "NABCEP Prep",
  },
  {
    title: "Megawatt Design",
    description: "Learn to design large-scale solar PV systems. Covers utility-scale layout, electrical design, interconnection, and financial modeling.",
    url: "https://www.heatspring.com/courses/megawatt-design?aff_id=ne1aha",
    tag: "Utility Scale",
  },
  {
    title: "Utility Scale Solar Construction",
    description: "A practical course on utility-scale solar construction, covering site preparation, module installation, electrical work, and commissioning.",
    url: "https://www.heatspring.com/courses/utility-scale-solar-construction?aff_id=ne1aha",
    tag: "Utility Scale",
  },
  {
    title: "18-Hour Solar PV Boot Camp",
    description: "An accelerated 18-hour boot camp covering the essentials of solar PV design and installation. Perfect for career changers and new entrants.",
    url: "https://www.heatspring.com/courses/18-hour-solar-pv-boot-camp?aff_id=ne1aha",
    tag: "Boot Camp",
  },
  {
    title: "30-Hour Advanced Energy Storage Training",
    description: "Deep dive into battery energy storage systems (BESS), covering technology, design, integration, safety, and market applications.",
    url: "https://www.heatspring.com/courses/30-hour-advanced-energy-storage-training?aff_id=ne1aha",
    tag: "Energy Storage",
  },
];

const tagColors: Record<string, string> = {
  "NABCEP Prep": "bg-[var(--bg-cool)] text-[var(--color-electric-deep)]",
  "Fundamentals": "bg-[var(--color-solar-light)]/30 text-[var(--color-solar-deep)]",
  "Advanced": "bg-purple-50 text-purple-700",
  "Utility Scale": "bg-emerald-50 text-emerald-700",
  "Boot Camp": "bg-orange-50 text-orange-700",
  "Energy Storage": "bg-cyan-50 text-cyan-700",
};

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-solar)] uppercase tracking-widest mb-4">
            Education
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Solar &amp; Clean Energy Training
          </h1>
          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We&rsquo;ve partnered with <strong className="text-white">HeatSpring</strong>{" "}to bring you the best online training courses in the solar and clean energy industry. Whether you&rsquo;re preparing for NABCEP certification or looking to specialize, these courses will accelerate your career.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-[var(--bg-white)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course) => (
              <a
                key={course.title}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-8 rounded-2xl border border-[var(--bg-slate)] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-[family-name:var(--font-outfit)] font-semibold ${tagColors[course.tag] ?? "bg-gray-50 text-gray-700"}`}>
                  {course.tag}
                </span>

                <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--color-midnight)] group-hover:text-[var(--color-solar-deep)] transition-colors duration-200 leading-snug">
                  {course.title}
                </h2>

                <p className="mt-3 font-[family-name:var(--font-newsreader)] text-sm text-[var(--color-slate)] leading-relaxed flex-1">
                  {course.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-electric-deep)] group-hover:text-[var(--color-solar-deep)] transition-colors duration-200">
                  View Course
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-[var(--color-midnight)]">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-xl mx-auto">
            Tim has guided hundreds of professionals through their cleantech education journey. Book a call to get personalized course recommendations.
          </p>
          <a
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
          >
            Ask Tim for Guidance
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
