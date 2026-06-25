"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

// Where the contact form delivers. Replace with the preferred inbox,
// or swap the mailto handler for a Formspree/endpoint POST if a backend is added.
const CONTACT_EMAIL = "info@kanikaguptashori.com";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kanikaguptashori/" },
  { label: "Instagram", href: "https://www.instagram.com/kanika_gupta_shori/" },
  { label: "Facebook", href: "https://www.facebook.com/kanika.shori" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCtvscMBw983oIwtcdw62NYg",
  },
];

export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const subject = encodeURIComponent(`Message from ${name || "your website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal>
            <SectionLabel index="06">Connect</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Let&rsquo;s start a conversation.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
              For speaking, press, mentorship or collaboration &mdash; share a
              note and it will reach the right inbox.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-sans text-sm text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <Field label="Name">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-champagne bg-transparent py-3 font-sans text-ink outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-champagne bg-transparent py-3 font-sans text-ink outline-none transition-colors focus:border-gold"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Message">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full resize-none border-b border-champagne bg-transparent py-3 font-sans text-ink outline-none transition-colors focus:border-gold"
                  placeholder="How can we help?"
                />
              </Field>
              <button
                onClick={send}
                disabled={!name || !message}
                className="rounded-full border border-gold px-8 py-3 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:bg-gold hover:text-parchment disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send message
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-sans text-xs uppercase tracking-label text-ink-soft">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
