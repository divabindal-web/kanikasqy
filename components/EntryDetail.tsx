import Link from "next/link";
import type { Entry } from "@/lib/content";
import Nav from "./Nav";
import Footer from "./Footer";

type EntryDetailProps = {
  eyebrow: string;
  entry: Entry;
  backHref: string;
  backLabel: string;
};

export default function EntryDetail({
  eyebrow,
  entry,
  backHref,
  backLabel,
}: EntryDetailProps) {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <article className="mx-auto max-w-editorial px-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {entry.title}
          </h1>
          <span className="hairline mt-8 block" />

          <div className="mt-8 space-y-6 font-sans text-lg leading-relaxed text-ink-soft">
            {entry.body ? (
              entry.body
                .split("\n\n")
                .map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <>
                <p className="text-ink">{entry.excerpt}</p>
                <p className="text-base">
                  The full piece is available on the original site.
                </p>
                <a
                  href={entry.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:bg-gold hover:text-parchment"
                >
                  Read the original &rarr;
                </a>
              </>
            )}
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-champagne/50 pt-8">
            <Link
              href={backHref}
              className="link-underline font-sans text-sm text-ink"
            >
              &larr; {backLabel}
            </Link>
            <Link
              href="/#connect"
              className="link-underline font-sans text-sm text-gold"
            >
              Connect
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
