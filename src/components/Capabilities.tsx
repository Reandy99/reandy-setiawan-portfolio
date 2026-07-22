"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { capabilityCards } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";

const lineIcons = [
  <svg key="visual" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="marketing" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <path d="M4 18V8l8-4 8 4v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="ai" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <circle cx="6" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="17" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.2 11.1l7.5-3.2M8.2 12.9l7.5 3.2" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="reliable" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <path d="M5 12.5l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function Capabilities() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="capabilities" className="section-shell space-y-8">
      <SectionHeader
        eyebrow="Capabilities"
        title="What I Bring"
        description="Visual craft, marketing communication, AI-assisted systems, and calm delivery."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {capabilityCards.map((card, index) => (
          <motion.article
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={transition(index * 0.05)}
            className="rounded-[22px] border border-white/9 bg-[var(--color-surface)] p-5 sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3 text-[var(--color-accent-soft)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                {lineIcons[index]}
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
              {card.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-soft)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
