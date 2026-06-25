"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.25">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);
const Waves = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.25">
    <path d="M2 7c2 0 2 1.5 4 1.5S10 7 12 7s2 1.5 4 1.5S20 7 22 7" />
    <path d="M2 12c2 0 2 1.5 4 1.5S10 12 12 12s2 1.5 4 1.5S20 12 22 12" />
    <path d="M2 17c2 0 2 1.5 4 1.5S10 17 12 17s2 1.5 4 1.5S20 17 22 17" />
  </svg>
);
const Music = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.25">
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);
const Heart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.25">
    <path d="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-7.3a5 5 0 0 0 0-7.1z" />
  </svg>
);

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={`group relative overflow-hidden rounded-[4px] border border-champagne/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_22px_50px_-28px_rgba(176,141,87,0.55)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-parchment">
      {children}
    </span>
  );
}

export default function BeyondWork() {
  return (
    <section className="bg-cream/40 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">Beyond Work</SectionLabel>
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl leading-snug text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              A life lived widely &mdash; from boardrooms to ocean floors.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-soft">
              Beyond Square Yards, Kanika moves through the world with the same
              curiosity she brings to building it.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
          {/* Feature stat card */}
          <Card className="bg-ink text-parchment md:row-span-2" delay={0}>
            <div className="flex h-full flex-col justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/50 text-champagne">
                <Globe />
              </span>
              <div className="mt-10">
                <p className="font-sans text-xs uppercase tracking-label text-champagne">
                  Explorer
                </p>
                <p className="mt-4 font-serif text-6xl leading-none text-parchment">
                  40<span className="text-champagne">+</span>
                </p>
                <p className="mt-2 font-serif text-xl text-parchment/90">
                  countries · six continents
                </p>
                <p className="mt-5 font-sans text-sm leading-relaxed text-parchment/70">
                  An avid traveller with a sucker&rsquo;s weakness for adventure.
                </p>
              </div>
            </div>
          </Card>

          {/* Diver - wide */}
          <Card className="bg-parchment md:col-span-2" delay={0.08}>
            <div className="flex items-start gap-5">
              <IconBadge>
                <Waves />
              </IconBadge>
              <div>
                <p className="font-sans text-xs uppercase tracking-label text-gold">
                  Diver
                </p>
                <p className="mt-3 font-serif text-xl leading-relaxed text-ink">
                  PADI-certified &mdash; cage-dived with sharks in the Pacific,
                  explored Java Sea shipwrecks, and seen the corals of the Great
                  Barrier Reef and Red Sea.
                </p>
              </div>
            </div>
          </Card>

          {/* Dancer */}
          <Card className="bg-parchment" delay={0.16}>
            <IconBadge>
              <Music />
            </IconBadge>
            <p className="mt-5 font-sans text-xs uppercase tracking-label text-gold">
              Dancer
            </p>
            <p className="mt-3 font-serif text-xl leading-relaxed text-ink">
              Trained across Kathak, Salsa, Tango and Zumba.
            </p>
          </Card>

          {/* Mother & mentor */}
          <Card className="bg-parchment" delay={0.24}>
            <IconBadge>
              <Heart />
            </IconBadge>
            <p className="mt-5 font-sans text-xs uppercase tracking-label text-gold">
              Mother &amp; mentor
            </p>
            <p className="mt-3 font-serif text-xl leading-relaxed text-ink">
              A mother of two and early angel investor, championing women
              empowerment and child welfare.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
