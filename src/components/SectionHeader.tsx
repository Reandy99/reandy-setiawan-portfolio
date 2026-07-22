"use client";

import { motion } from "framer-motion";

import { useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const {
    prefersReducedMotion,
    sectionContainer,
    sectionEyebrow,
    sectionTitle,
    sectionDescription,
  } = useMotionPrefs();

  const motionInitial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <motion.div
      variants={sectionContainer}
      initial={motionInitial}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "space-y-3",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
      )}
    >
      {eyebrow ? (
        <motion.p variants={sectionEyebrow} className="eyebrow">
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2 variants={sectionTitle} className="display-title">
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={sectionDescription}
          className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-[15px]"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
