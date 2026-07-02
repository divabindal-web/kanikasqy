"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-gold"
          >
            Co-Founder &amp; Chief Operating Officer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft"
          >
            Square Yards
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-7 font-serif text-[3rem] font-medium leading-[0.98] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[4.8rem]"
          >
            Kanika
            <br />
            Gupta <span className="italic font-normal text-gold">Shori</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-md font-sans text-lg leading-relaxed text-ink-soft"
          >
            Reshaping real estate through technology, transparency, and
            women-led leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#connect"
              className="rounded-full bg-ink px-8 py-3.5 font-sans text-sm tracking-wide text-parchment transition-colors duration-300 hover:bg-gold"
            >
              Connect
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-ink/25 px-8 py-3.5 font-sans text-sm tracking-wide text-ink transition-all duration-300 hover:border-ink"
            >
              Read her story
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <span
            aria-hidden
            className="absolute -right-3 -top-3 -z-0 h-full w-full rounded-[3px] border border-gold/45"
          />
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3px] shadow-[0_30px_60px_-40px_rgba(40,35,32,0.45)]">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Kanika Gupta Shori"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover object-[70%_center] [filter:saturate(0.9)_contrast(1.03)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
