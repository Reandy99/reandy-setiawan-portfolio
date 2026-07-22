"use client";

import { motion } from "framer-motion";

import { useMotionPrefs } from "@/lib/motion";

type MetricItemProps = {
  value: string;
  label: string;
  index?: number;
};

export function MetricItem({ value, label, index = 0 }: MetricItemProps) {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={transition(index * 0.05)}
      className="rounded-[18px] border border-white/9 bg-[var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5"
    >
      <p className="font-serif text-2xl tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl">
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-5 text-[var(--color-muted)] sm:text-sm">
        {label}
      </p>
    </motion.article>
  );
}
