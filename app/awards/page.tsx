import type { Metadata } from "next";
import CollectionList from "@/components/CollectionList";
import { awards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Awards | Kanika Gupta Shori",
  description: "Awards and honours received by Kanika Gupta Shori and Square Yards.",
};

export default function AwardsIndex() {
  return (
    <CollectionList
      eyebrow="Recognition"
      title="Awards & Honours"
      basePath="awards"
      entries={awards}
    />
  );
}
