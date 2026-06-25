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

const nameWords = ["Kanika", "Gupta", "Shori"];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
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

          <h1 className="font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {nameWords.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15 + i * 0.12,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.span
            className="mt-6 block h-px origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            style={{ maxWidth: "12rem" }}
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
            className="mt-9 flex items-center gap-6"
          >
            <Link
              href="/#connect"
              className="rounded-full border border-gold bg-gold/0 px-7 py-3 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:bg-gold hover:text-parchment"
            >
              Connect
            </Link>
            <Link
              href="/#about"
              className="link-underline font-sans text-sm text-ink-soft"
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2px] border border-champagne/60" />
            <Image
              src="/images/hero-portrait.jpg"
              alt="Portrait of Kanika Gupta Shori"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 400px"
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
