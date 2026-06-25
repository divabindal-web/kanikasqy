"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/awards", label: "Awards" },
  { href: "/article", label: "Articles" },
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

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-9">
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
            className="fixed inset-0 z-40 bg-parchment md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-8">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
