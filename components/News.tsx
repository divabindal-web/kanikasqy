import Link from "next/link";
import { news } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function News() {
  const featured = news.slice(0, 5);

  return (
    <section id="news" className="scroll-mt-24 bg-cream/40 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">In the News</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 font-serif text-3xl text-ink sm:text-4xl">
            Press &amp; commentary
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-champagne/50 border-y border-champagne/50">
          {featured.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={i * 0.05}>
              <Link
                href={`/news/${n.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-6 transition-colors duration-300 hover:bg-parchment/60"
              >
                <span className="font-serif text-sm text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-ink">
                    {n.title}
                  </h3>
                  <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft">
                    {n.excerpt}
                  </p>
                </div>
                <span className="hidden self-center font-sans text-gold transition-transform duration-300 group-hover:translate-x-1 sm:inline">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-10">
            <Link
              href="/news"
              className="link-underline font-sans text-sm text-ink"
            >
              All news &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
