"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";

export function SkillGroups() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="skills" className="section-shell space-y-8">
      <SectionHeader
        eyebrow="Skills and Tools"
        title="Tools that support craft and operations."
        description="Grouped by production, AI automation, and collaboration — without turning the section into a badge wall."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={transition(index * 0.05)}
            className="rounded-[22px] border border-white/9 bg-[var(--color-surface)] p-5"
          >
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="chip text-[var(--color-foreground)]">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
