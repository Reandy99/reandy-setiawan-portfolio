"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { aboutCopy, toolTags } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="surface-card space-y-5"
        >
          <SectionHeader eyebrow="About Me" title="Strategy, craft, and calm execution." />
          <p className="text-base leading-8 text-[var(--color-muted)]">
            {aboutCopy}
          </p>
          <Link href="/#resume" className="button-secondary">
            More About Me
          </Link>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="surface-card space-y-5"
        >
          <SectionHeader
            eyebrow="Tools & Expertise"
            title="A compact toolkit for production and workflow."
          />
          <div className="flex flex-wrap gap-2">
            {toolTags.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/8 bg-[#f5f4f1] px-3 py-2 text-sm text-[var(--color-foreground)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
