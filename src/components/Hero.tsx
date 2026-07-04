"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/utils";

export function Hero() {
  return (
    <section className="section-shell pb-8 pt-10 md:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Hi, I&apos;m Reandy Setiawan
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.025em] text-[var(--color-foreground)] md:text-6xl lg:text-[5rem]">
            Creative Marketing, Photography, Video &amp; AI-Assisted Works
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            I combine 10+ years of hands-on experience in content creation and
            marketing with AI-powered workflows to craft visual stories that
            engage and deliver results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#selected-work" className="button-primary">
              View Selected Work
            </Link>
            <a href={siteConfig.cvPath} download className="button-secondary">
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="surface-card overflow-hidden p-3"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#ecebe7]">
            <Image
              src={siteConfig.profileImage}
              alt="Portrait of Reandy Setiawan"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
