const stats = [
  { value: "150+", unit: "MW", label: "Solar Developed" },
  { value: "400+", unit: "", label: "Podcast Episodes" },
  { value: "1M+", unit: "", label: "Views & Downloads" },
  { value: "30+", unit: "", label: "Years Experience" },
  { value: "23K+", unit: "", label: "LinkedIn Followers" },
];

export function StatsBar() {
  return (
    <section className="relative bg-[var(--bg-warm)] border-y border-[var(--color-solar-light)]/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-solar-deep)] leading-none tracking-tight">
                {stat.value}
                {stat.unit && (
                  <span className="text-xl sm:text-2xl lg:text-3xl ml-0.5 font-bold">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 font-[family-name:var(--font-outfit)] text-sm font-medium text-[var(--color-slate)] uppercase tracking-wider">
                {stat.label}
              </div>
              {/* Decorative underline */}
              <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-[var(--color-solar-deep)]/20" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
