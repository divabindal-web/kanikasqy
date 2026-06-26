import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="01">About</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs md:sticky md:top-28">
              <div className="absolute -inset-3 -z-10 rounded-[2px] border border-champagne/60" />
              <Image
                src="/images/about-portrait.jpg"
                alt="Kanika Gupta Shori"
                fill
                sizes="(max-width: 768px) 70vw, 320px"
                className="rounded-[2px] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-editorial">
              <h2 className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
                A Wharton alumna building India&rsquo;s largest real estate
                marketplace.
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink-soft">
                <p>
                  Kanika Gupta Shori is the Co-Founder &amp; COO of Square Yards,
                  India&rsquo;s largest real estate marketplace, an
                  Online-to-Offline (O2O) transaction platform that simplifies
                  home buying with end-to-end solutions for homebuyers. Square
                  Yards has become India&rsquo;s largest distributor of
                  &ldquo;new homes,&rdquo; with 2,700+ employees across 10
                  countries and 40 cities, facilitating roughly USD $1 billion in
                  gross transactions annually and around USD $30 million in
                  annualized revenue, making it one of the few Indian startups
                  operating at EBITDA break-even.
                </p>
                <p>
                  She is a Wharton Business School alumna, a CFA Level 2
                  candidate, and holds a Bachelor&rsquo;s in Economics from Delhi
                  University. With over 11 years of experience, she worked across
                  asset management and entertainment before founding Square
                  Yards. A mother of two, she began as an angel investor in
                  startups while raising her children.
                </p>
                <p>
                  Kanika is associated with social causes around women
                  empowerment and child welfare, and has won accolades including
                  &ldquo;Young Achiever&rdquo; and &ldquo;Woman Icon.&rdquo; A
                  trained dancer in Salsa, Tango, Zumba and Kathak, she is also an
                  avid traveller across six continents and 40+ countries, an
                  adventure-sports enthusiast and a PADI-certified scuba diver
                  , having cage-dived with sharks in the Pacific, explored
                  shipwrecks in the Java Sea, dived caves of the Indian Ocean, and
                  seen the corals of the Great Barrier Reef and Red Sea.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
