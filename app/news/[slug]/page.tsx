import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EntryDetail from "@/components/EntryDetail";
import { news, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = getEntry("news", params.slug);
  if (!entry) return { title: "News | Kanika Gupta Shori" };
  return { title: `${entry.title} | Kanika Gupta Shori`, description: entry.excerpt };
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("news", params.slug);
  if (!entry) notFound();
  return (
    <EntryDetail
      eyebrow="In the News"
      entry={entry}
      backHref="/news"
      backLabel="All news"
    />
  );
}
