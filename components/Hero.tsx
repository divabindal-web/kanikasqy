"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  const line = (text: string, delay: number, italic = false) => (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${italic ? "italic text-gold" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            Co-Founder &amp; Chief Operating Officer · Square Yards
          </motion.p>

          <h1 className="font-serif text-[3.25rem] leading-[1.02] text-ink sm:text-7xl lg:text-[5.25rem]">
            {line("Kanika", 0.15)}
            {line("Gupta", 0.27)}
            {line("Shori", 0.39, true)}
          </h1>

          <motion.span
            className="mt-7 block h-px origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            style={{ maxWidth: "13rem" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-7 max-w-md font-sans text-lg leading-relaxed text-ink-soft"
          >
            Reshaping real estate through technology, transparency, and
            women-led leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#connect"
              className="rounded-full bg-ink px-8 py-3.5 font-sans text-sm tracking-wide text-parchment transition-all duration-300 hover:bg-gold"
            >
              Connect
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-ink/30 px-8 py-3.5 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Read her story
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          style={{ y }}
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-[2px] border border-champagne/60" />
            <span className="absolute -right-3 -top-3 -z-10 h-24 w-24 border-r border-t border-gold/50" />
            <span className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 border-b border-l border-gold/50" />
            <Image
              src="/images/hero-portrait.jpg"
              alt="Portrait of Kanika Gupta Shori"
              fill
              priority
              sizes="(max-width: 768px) 85vw, 440px"
              className="rounded-[2px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
