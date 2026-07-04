"use client";

import { motion } from "framer-motion";

import { capabilityCards } from "@/data/experience";

const markers = ["VP", "MC", "AI", "RX"] as const;

export function CapabilityCards() {
  return (
    <section className="section-shell pt-6">
      <div className="grid gap-4 lg:grid-cols-4">
        {capabilityCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="surface-card flex gap-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-[#f1f0ed] text-xs font-semibold text-[var(--color-foreground)]">
              {markers[index]}
            </span>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                {card.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
