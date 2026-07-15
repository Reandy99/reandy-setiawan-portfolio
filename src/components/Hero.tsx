"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[min(100svh,920px)] overflow-hidden">
      <motion.div
        initial={{ scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.35, ease }}
        className="absolute inset-0"
      >
        <Image
          src={siteConfig.profileImage}
          alt=""
          fill
          priority
          className="object-cover object-[center_18%]"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6f4] via-[#f4f6f4]/88 to-[#f4f6f4]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6f4] via-transparent to-[#f4f6f4]/35" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <div className="max-w-2xl space-y-7 md:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="display-title text-[clamp(2.6rem,8vw,5.6rem)] text-[var(--color-foreground)]"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="max-w-xl text-balance text-xl font-medium tracking-[-0.03em] text-[var(--color-foreground)] sm:text-2xl md:text-[1.75rem] md:leading-snug"
          >
            {siteConfig.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.26 }}
            className="max-w-md text-base leading-7 text-[var(--color-muted)] sm:text-[1.05rem] sm:leading-8"
          >
            {siteConfig.heroSubhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.36 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/#selected-work" className="button-primary">
              View Selected Work
            </Link>
            <a href={siteConfig.cvPath} download className="button-secondary">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
