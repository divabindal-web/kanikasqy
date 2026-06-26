import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

// Change this to the preferred inbox.
const CONTACT_EMAIL = "info@kanikaguptashori.com";

const channels = [
  { label: "Email", value: "Write a note", href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", value: "in/kanikaguptashori", href: "https://www.linkedin.com/in/kanikaguptashori/" },
  { label: "Instagram", value: "@kanika_gupta_shori", href: "https://www.instagram.com/kanika_gupta_shori/" },
  { label: "Facebook", value: "kanika.shori", href: "https://www.facebook.com/kanika.shori" },
  { label: "YouTube", value: "Channel", href: "https://www.youtube.com/channel/UCtvscMBw983oIwtcdw62NYg" },
];

export default function Connect() {
  return (
    <section id="connect" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="04">Connect</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
                Let&rsquo;s talk.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-sm font-sans text-lg leading-relaxed text-ink-soft">
                For speaking, press, partnerships, or a note from a fellow
                founder. The door is open.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 font-sans text-sm tracking-wide text-parchment transition-all duration-300 hover:bg-gold"
              >
                Write to me
                <span aria-hidden>&rarr;</span>
              </a>
            </Reveal>
          </div>

          {/* Contact index */}
          <Reveal delay={0.1}>
            <ul className="border-t border-champagne/50">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-baseline justify-between border-b border-champagne/50 py-5 transition-colors duration-300 hover:bg-cream/50"
                  >
                    <span className="font-sans text-xs uppercase tracking-label text-gold">
                      {c.label}
                    </span>
                    <span className="flex items-center gap-3 font-serif text-lg text-ink">
                      {c.value}
                      <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
