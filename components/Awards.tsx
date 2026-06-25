import Link from "next/link";
import { awards } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Awards() {
  const featured = awards.slice(0, 3);

  return (
    <section id="awards" className="scroll-mt-24 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="01">Recognition</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 font-serif text-3xl text-ink sm:text-4xl">
            Awards &amp; honours
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-champagne/50 bg-champagne/40 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.06} className="bg-parchment">
              <Link
                href={`/awards/${a.slug}`}
                className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-cream/70"
              >
                <span className="font-serif text-sm text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                  {a.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-label text-gold">
                  Read
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <Link
              href="/awards"
              className="link-underline font-sans text-sm text-ink"
            >
              All awards &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
