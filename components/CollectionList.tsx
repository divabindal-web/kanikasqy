import Link from "next/link";
import type { Entry } from "@/lib/content";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";

type CollectionListProps = {
  eyebrow: string;
  title: string;
  basePath: "news" | "awards" | "article";
  entries: Entry[];
};

export default function CollectionList({
  eyebrow,
  title,
  basePath,
  entries,
}: CollectionListProps) {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
              {title}
            </h1>
            <span className="hairline mt-8 block" />
          </Reveal>

          <ul className="mt-4 divide-y divide-champagne/50">
            {entries.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 6) * 0.04}>
                <Link
                  href={`/${basePath}/${e.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-7 transition-colors duration-300 hover:bg-cream/50"
                >
                  <span className="font-serif text-sm text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                      {e.title}
                    </h2>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                      {e.excerpt}
                    </p>
                  </div>
                  <span className="hidden self-center text-gold transition-transform duration-300 group-hover:translate-x-1 sm:inline">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16 mb-24">
            <Link href="/" className="link-underline font-sans text-sm text-ink">
              &larr; Back home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
