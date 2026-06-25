import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const pursuits = [
  {
    k: "Explorer",
    v: "Six continents, 40+ countries — an avid traveller with a sucker’s weakness for adventure.",
  },
  {
    k: "Diver",
    v: "PADI-certified — cage-dived with sharks in the Pacific, explored shipwrecks in the Java Sea, and seen the corals of the Great Barrier Reef and Red Sea.",
  },
  {
    k: "Dancer",
    v: "Trained in Kathak, Salsa, Tango and Zumba.",
  },
  {
    k: "Mother & mentor",
    v: "A mother of two and an early angel investor, championing women empowerment and child welfare.",
  },
];

export default function BeyondWork() {
  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="05">Beyond Work</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-serif text-3xl leading-snug text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              A life lived widely &mdash; from boardrooms to ocean floors.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-champagne/50 border-y border-champagne/50">
              {pursuits.map((p) => (
                <div
                  key={p.k}
                  className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <dt className="font-sans text-xs uppercase tracking-label text-gold">
                    {p.k}
                  </dt>
                  <dd className="font-serif text-lg leading-relaxed text-ink">
                    {p.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
