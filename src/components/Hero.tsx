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
        initial={{ scale: 1.08, opacity: 0.65 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.55, ease }}
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
