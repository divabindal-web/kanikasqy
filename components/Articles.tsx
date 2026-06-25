import Link from "next/link";
import { articles } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Articles() {
  const featured = articles.slice(0, 4);

  return (
    <section id="articles" className="scroll-mt-24 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="04">Writing &amp; Reflections</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 max-w-2xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
            In her own words &mdash; on leadership, family, travel and change.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {featured.map((a, i) => (
            <Reveal as="article" key={a.slug} delay={(i % 2) * 0.08}>
              <Link href={`/article/${a.slug}`} className="group block">
                <span className="hairline mb-6 block" />
                <h3 className="font-serif text-2xl leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
                  {a.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-label text-gold">
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
          <div className="mt-12">
            <Link
              href="/article"
              className="link-underline font-sans text-sm text-ink"
            >
              All articles &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
