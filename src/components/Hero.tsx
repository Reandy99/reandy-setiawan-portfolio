"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedText } from "@/components/AnimatedText";
import { siteConfig } from "@/lib/utils";

const ease = [0.6, 0, 0.4, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#1b1b1b]">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-0"
      >
        <Image
          src={siteConfig.heroBackgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
      </motion.div>

      <div className="relative flex min-h-[100svh] flex-col justify-between px-4 pb-6 pt-28 sm:px-6 md:px-8 md:pb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="max-w-xs self-end text-right text-sm leading-6 text-white/85 md:text-base"
        >
          Creative Producer x
          <br />
          AI Workflow Builder
        </motion.p>

        <div className="space-y-5">
          <h1 className="sr-only">{siteConfig.name}</h1>
          <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between md:gap-8">
            <AnimatedText
              text="Reandy"
              as="p"
              mode="chars"
              delay={0.15}
              className="display-mega whitespace-nowrap text-[clamp(4.2rem,13.5vw,10.5rem)] text-[#e3e3df]"
            />
            <AnimatedText
              text="Setiawan"
              as="p"
              mode="chars"
              delay={0.35}
              className="display-mega whitespace-nowrap text-[clamp(4.2rem,13.5vw,10.5rem)] text-[#e3e3df] md:text-right"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.85 }}
            className="flex flex-wrap gap-2"
          >
            <Link href="/#work" className="pill-light">
              View work
            </Link>
            <a href={siteConfig.cvPath} download className="pill-light">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
