"use client";

import { motion } from "framer-motion";

import { stats } from "@/data/experience";

export function StatsRow() {
  return (
    <section className="section-shell pt-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="surface-card space-y-2"
          >
            <p className="text-3xl font-semibold text-[var(--color-foreground)]">
              {stat.value}
            </p>
            <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
