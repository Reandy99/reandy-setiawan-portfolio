"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedText } from "@/components/AnimatedText";
import { siteConfig } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[min(100svh,920px)] overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.55 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.55, ease }}
        className="absolute inset-0"
      >
        <Image
          src={siteConfig.heroBackgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-[center_42%]"
          sizes="100vw"
          aria-hidden
        />
        {/* Soft veil for type readability — keep atmosphere visible */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#eef1f4_0%,rgba(238,241,244,0.9)_26%,rgba(238,241,244,0.42)_50%,rgba(238,241,244,0.12)_68%,transparent_82%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#eef1f4_0%,rgba(238,241,244,0.4)_16%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_40%,rgba(18,22,28,0.18),transparent_70%)]" />
      </motion.div>

      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[rgba(47,93,111,0.12)] blur-3xl md:h-80 md:w-80" />
      <div className="pointer-events-none absolute bottom-10 right-[-4rem] h-72 w-72 rounded-full bg-[rgba(213,230,236,0.35)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <div className="max-w-3xl space-y-7 md:space-y-8">
          <AnimatedText
            text={siteConfig.name}
            as="p"
            mode="chars"
            delay={0.08}
            className="display-title text-[clamp(3rem,9.5vw,6.4rem)] text-[var(--color-foreground)]"
          />

          <AnimatedText
            text={siteConfig.heroHeadline}
            as="h1"
            mode="words"
            delay={0.42}
            className="headline-title max-w-2xl text-[clamp(1.35rem,3.2vw,2.05rem)] text-[var(--color-foreground)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease, delay: 0.78 }}
            className="max-w-md text-base leading-7 text-[var(--color-muted)] sm:text-[1.08rem] sm:leading-8"
          >
            {siteConfig.heroSubhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.96 }}
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
