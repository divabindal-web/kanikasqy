import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EntryDetail from "@/components/EntryDetail";
import { awards, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return awards.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = getEntry("awards", params.slug);
  if (!entry) return { title: "Award — Kanika Gupta Shori" };
  return { title: `${entry.title} — Kanika Gupta Shori`, description: entry.excerpt };
}

export default function AwardPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("awards", params.slug);
  if (!entry) notFound();
  return (
    <EntryDetail
      eyebrow="Recognition"
      entry={entry}
      backHref="/awards"
      backLabel="All awards"
    />
  );
}
