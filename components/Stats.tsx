import { stats } from "@/lib/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-champagne/50 bg-cream/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="relative px-4 text-center md:text-left"
            >
              {i !== 0 && (
                <span className="absolute left-0 top-1 hidden h-12 w-px bg-champagne/60 md:block" />
              )}
              <div className="font-serif text-4xl text-ink sm:text-5xl">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-sans text-xs uppercase tracking-label text-ink-soft">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
