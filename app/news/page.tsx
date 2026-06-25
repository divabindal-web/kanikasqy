import type { Metadata } from "next";
import CollectionList from "@/components/CollectionList";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News — Kanika Gupta Shori",
  description: "Press features and commentary from Kanika Gupta Shori.",
};

export default function NewsIndex() {
  return (
    <CollectionList
      eyebrow="In the News"
      title="Press & Commentary"
      basePath="news"
      entries={news}
    />
  );
}
