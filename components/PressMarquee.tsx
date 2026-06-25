"use client";

import { press } from "@/lib/content";

export default function PressMarquee() {
  const items = [...press, ...press];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center font-sans text-xs uppercase tracking-label text-ink-soft">
          As featured in
        </p>
      </div>

      <div className="group relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-parchment to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-parchment to-transparent" />

        <div className="flex w-max animate-marquee items-stretch gap-16 group-hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex max-w-xs shrink-0 items-center gap-5"
            >
              <span className="font-serif text-2xl text-ink">{p.name}</span>
              <span className="hidden max-w-[14rem] font-sans text-sm leading-snug text-ink-soft sm:block">
                {p.note}
              </span>
              <span className="h-8 w-px bg-champagne/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
