"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { HeroVisual } from "@/components/HeroVisual";
import { MetricItem } from "@/components/MetricItem";
import { stats } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";
import { siteConfig } from "@/lib/utils";

export function Hero() {
  const {
    prefersReducedMotion,
    heroStaggerContainer,
    heroHeadlineContainer,
    heroEyebrow,
    heroLine,
    heroMuted,
    heroCta,
  } = useMotionPrefs();

  const motionInitial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="home" className="section-shell relative overflow-hidden pb-10 pt-8 md:pb-16 md:pt-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <motion.div
          variants={heroStaggerContainer}
          initial={motionInitial}
          animate="visible"
          className="order-1 flex max-w-2xl flex-col gap-5"
        >
          <motion.p
            variants={heroEyebrow}
            className="eyebrow text-[var(--color-accent-soft)]"
          >
            {siteConfig.heroMeta}
          </motion.p>

          <motion.h1
            variants={heroHeadlineContainer}
            className="text-balance font-serif text-[2.15rem] leading-[1.05] tracking-[-0.035em] text-[var(--color-foreground)] sm:text-5xl md:text-[3.2rem] lg:text-[3.55rem]"
          >
            <motion.span variants={heroLine} className="block">
              Creative Producer &amp;
            </motion.span>
            <motion.span variants={heroLine} className="block">
              AI Workflow Builder
            </motion.span>
          </motion.h1>

          <motion.p
            variants={heroMuted}
            className="text-sm leading-7 text-[var(--color-muted)] md:text-[15px]"
          >
            {siteConfig.heroSubhead}
          </motion.p>

          <motion.p
            variants={heroMuted}
            className="text-sm leading-7 text-[var(--color-foreground)] md:text-[15px]"
          >
            {siteConfig.openFor}
          </motion.p>

          <motion.div variants={heroCta} className="flex flex-col gap-4 pt-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#selected-work" className="button-primary">
                View Selected Work
              </Link>
              <a href={siteConfig.cvPath} download className="button-secondary">
                Download CV
              </a>
            </div>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link w-fit"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <div className="order-2">
          <HeroVisual />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4">
        {stats.map((item, index) => (
          <MetricItem
            key={item.label}
            value={item.value}
            label={item.label}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
