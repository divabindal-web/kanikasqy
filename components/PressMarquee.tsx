import { press } from "@/lib/content";

export default function PressMarquee() {
  return (
    <section className="border-y border-champagne/50 bg-parchment py-9">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-7 text-center font-sans text-xs uppercase tracking-label text-ink-soft">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {press.map((p) => (
            <span
              key={p.name}
              className="font-serif text-xl text-ink/70 transition-colors duration-300 hover:text-ink"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
