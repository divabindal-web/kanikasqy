import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EntryDetail from "@/components/EntryDetail";
import { articles, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = getEntry("article", params.slug);
  if (!entry) return { title: "Article — Kanika Gupta Shori" };
  return { title: `${entry.title} — Kanika Gupta Shori`, description: entry.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const entry = getEntry("article", params.slug);
  if (!entry) notFound();
  return (
    <EntryDetail
      eyebrow="Writing & Reflections"
      entry={entry}
      backHref="/article"
      backLabel="All articles"
    />
  );
}
