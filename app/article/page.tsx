import type { Metadata } from "next";
import CollectionList from "@/components/CollectionList";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles | Kanika Gupta Shori",
  description: "Essays and reflections by Kanika Gupta Shori.",
};

export default function ArticlesIndex() {
  return (
    <CollectionList
      eyebrow="Writing & Reflections"
      title="Articles"
      basePath="article"
      entries={articles}
    />
  );
}
