"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedText } from "@/components/AnimatedText";
import { siteConfig } from "@/lib/utils";

const ease = [0.6, 0, 0.4, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      <motion.div
        initial={{ scale: 1.1, opacity: 0.65 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease }}
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
      </motion.div>

      <div className="relative flex min-h-[100svh] flex-col justify-between px-4 pb-5 pt-28 sm:px-6 md:px-8 md:pb-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="max-w-[11rem] self-end text-right text-sm leading-6 text-[#e3e3df] md:text-base"
        >
          Creative Producer x
          <br />
          AI Workflow Builder
        </motion.p>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.7 }}
          >
            <Link href="/scroll-world" className="pill-hero">
              Enter scroll world →
            </Link>
          </motion.div>
          <h1 className="sr-only">{siteConfig.name}</h1>
          <div className="flex flex-col gap-0 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="reAndy"
              as="p"
              mode="chars"
              delay={0.12}
              className="display-mega text-[clamp(5rem,18vw,14rem)] text-[#e3e3df]"
            />
            <AnimatedText
              text="sEtiawan"
              as="p"
              mode="chars"
              delay={0.32}
              className="display-mega text-[clamp(5rem,18vw,14rem)] text-[#e3e3df] md:text-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
