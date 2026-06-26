"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.25">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);
const Waves = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.25">
    <path d="M2 7c2 0 2 1.5 4 1.5S10 7 12 7s2 1.5 4 1.5S20 7 22 7" />
    <path d="M2 12c2 0 2 1.5 4 1.5S10 12 12 12s2 1.5 4 1.5S20 12 22 12" />
    <path d="M2 17c2 0 2 1.5 4 1.5S10 17 12 17s2 1.5 4 1.5S20 17 22 17" />
  </svg>
);
const Music = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.25">
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);
const Heart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.25">
    <path d="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-7.3a5 5 0 0 0 0-7.1z" />
  </svg>
);

const facets = [
  {
    label: "Explorer",
    title: "40+ countries, six continents",
    text: "An avid traveller with a sucker's weakness for adventure.",
    Icon: Globe,
  },
  {
    label: "Diver",
    title: "PADI-certified",
    text: "Cage-dived with sharks in the Pacific, explored Java Sea shipwrecks, and seen the corals of the Great Barrier Reef and Red Sea.",
    Icon: Waves,
  },
  {
    label: "Dancer",
    title: "Kathak to Tango",
    text: "Trained across Kathak, Salsa, Tango and Zumba.",
    Icon: Music,
  },
  {
    label: "Mother & mentor",
    title: "Angel investor",
    text: "A mother of two championing women empowerment and child welfare.",
    Icon: Heart,
  },
];

export default function BeyondWork() {
  return (
    <section className="bg-cream/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">Beyond Work</SectionLabel>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl leading-snug text-ink sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
              A life lived widely, from boardrooms to ocean floors.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ink-soft">
              Beyond Square Yards, Kanika moves through the world with the same
              curiosity she brings to building it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
          {/* Photo */}
          <Reveal>
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-[4px]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Kanika Gupta Shori"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top [filter:saturate(0.82)_contrast(1.03)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-sans text-xs uppercase tracking-label text-champagne">
                  Off the clock
                </p>
                <p className="mt-2 font-serif text-2xl leading-snug text-parchment">
                  Curiosity, in every direction.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Facets */}
          <Reveal delay={0.1}>
            <ul className="flex h-full flex-col justify-between border-y border-champagne/50">
              {facets.map((f) => (
                <li
                  key={f.label}
                  className="flex items-start gap-5 border-b border-champagne/40 py-6 last:border-b-0"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <f.Icon />
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-label text-gold">
                      {f.label}
                    </p>
                    <p className="mt-1.5 font-serif text-xl leading-snug text-ink">
                      {f.title}
                    </p>
                    <p className="mt-1.5 max-w-md font-sans text-sm leading-relaxed text-ink-soft">
                      {f.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
