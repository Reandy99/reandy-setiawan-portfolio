"use client";

import { motion } from "framer-motion";

import { aboutClosing, aboutCopy, aboutLabels } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";

export function AboutSection() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="about" className="section-shell">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={transition()}
        className="mx-auto max-w-3xl space-y-5"
      >
        <p className="eyebrow">About</p>
        <div className="flex flex-wrap gap-2">
          {aboutLabels.map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
        </div>
        <h2 className="display-title max-w-xl">
          Strategy, craft, and reliable execution.
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-[15px]">
          {aboutCopy}
        </p>
        <p className="max-w-xl border-l border-[rgba(167,139,250,0.4)] pl-4 text-sm leading-7 text-[var(--color-foreground)] md:text-[15px]">
          {aboutClosing}
        </p>
      </motion.div>
    </section>
  );
}
