"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const line = (text: string, delay: number, italic = false) => (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${italic ? "italic text-champagne" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-portrait.jpg"
        alt="Kanika Gupta Shori"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-sans text-xs uppercase tracking-[0.22em] text-champagne"
          >
            Co-Founder &amp; Chief Operating Officer · Square Yards
          </motion.p>

          <h1 className="font-serif text-[3.5rem] leading-[1.02] text-parchment sm:text-7xl lg:text-[5.5rem]">
            {line("Kanika", 0.15)}
            {line("Gupta", 0.27)}
            {line("Shori", 0.39, true)}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 max-w-md font-sans text-lg leading-relaxed text-parchment/90"
          >
            Reshaping real estate through technology, transparency, and
            women-led leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#connect"
              className="rounded-full bg-parchment px-8 py-3.5 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:bg-gold hover:text-parchment"
            >
              Connect
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-parchment/60 px-8 py-3.5 font-sans text-sm tracking-wide text-parchment transition-all duration-300 hover:bg-parchment hover:text-ink"
            >
              Read her story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-px bg-gradient-to-b from-champagne to-transparent" />
      </div>
    </section>
  );
}
