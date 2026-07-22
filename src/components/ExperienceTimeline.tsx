"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { resumeExperience } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";
import { siteConfig } from "@/lib/utils";

export function ExperienceTimeline() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="experience" className="section-shell space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Experience"
          title="Experience Timeline"
          description="A decade of production, marketing support, and AI-assisted creative operations."
        />
        <a href={siteConfig.cvPath} download className="button-primary w-fit">
          Download Full CV
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {resumeExperience.map((item, index) => (
          <motion.article
            key={`${item.period}-${item.company}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={transition(index * 0.04)}
            className="flex h-full flex-col rounded-[20px] border border-white/9 bg-[var(--color-surface)] p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
              {item.period}
            </p>
            <h3 className="mt-3 text-base font-semibold text-[var(--color-foreground)]">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{item.company}</p>
            {item.description ? (
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                {item.description}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
