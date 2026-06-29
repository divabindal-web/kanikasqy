"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/awards", label: "Awards" },
  { href: "/article", label: "Articles" },
];

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8h4.5v15H.24V8zm7.5 0h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V23h-4.5V8z" />
  </svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.6 2.1 15.6 2 14.5 2 11.9 2 10 3.6 10 6.4v2.1H7.5V12H10v10h3.5V12h2.6l.4-3.5H14z" />
  </svg>
);
const YouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.45 12 20.45 12 20.45s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kanikaguptashori/", Icon: LinkedIn },
  { label: "Instagram", href: "https://www.instagram.com/kanika_gupta_shori/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/kanika.shori", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCtvscMBw983oIwtcdw62NYg", Icon: YouTube },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const overHero = isHome && !scrolled && !open;
  const textColor = overHero ? "text-parchment" : "text-ink";
  const dividerColor = overHero ? "border-parchment/30" : "border-champagne/70";
  const barClass = overHero
    ? "bg-transparent border-transparent"
    : "bg-parchment/95 backdrop-blur-md border-champagne/60";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${barClass}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`font-serif text-lg tracking-wide transition-colors duration-500 ${textColor}`}
          onClick={() => setOpen(false)}
        >
          Kanika Gupta&nbsp;<span className="italic text-gold">Shori</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline font-sans text-xs uppercase tracking-[0.18em] transition-colors duration-500 hover:text-gold ${textColor}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`flex items-center gap-4 border-l pl-6 ${dividerColor}`}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                <s.Icon />
              </a>
            ))}
          </div>

          <Link
            href="/#connect"
            className={`rounded-full border px-6 py-2.5 font-sans text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:border-gold hover:bg-gold hover:text-parchment ${
              overHero ? "border-parchment/70 text-parchment" : "border-ink text-ink"
            }`}
          >
            Connect
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              overHero ? "bg-parchment" : "bg-ink"
            } ${open ? "translate-y-[6px] rotate-45 bg-ink" : ""}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              overHero ? "bg-parchment" : "bg-ink"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              overHero ? "bg-parchment" : "bg-ink"
            } ${open ? "-translate-y-[6px] -rotate-45 bg-ink" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-parchment md:hidden"
          >
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {[...links, { href: "/#connect", label: "Connect" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-7 pb-14">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-ink transition-colors duration-300 hover:text-gold"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
