"use client";

import { motion } from "framer-motion";

import { useMotionPrefs } from "@/lib/motion";
import { siteConfig } from "@/lib/utils";

export function ContactCTA() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="contact" className="section-shell">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={transition()}
        className="overflow-hidden rounded-[28px] border border-white/9 bg-[linear-gradient(145deg,rgba(139,92,246,0.16),rgba(14,14,19,0.96)_42%,rgba(56,189,248,0.08))] p-6 sm:p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="eyebrow">Contact</p>
            <h2 className="display-title">
              Let&apos;s build work that looks good and works better.
            </h2>
            <p className="text-sm leading-7 text-[var(--color-muted)] md:text-[15px]">
              For hiring inquiries, creative collaborations, visual production, or
              AI-assisted content workflows.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${siteConfig.email}`} className="button-primary">
                Email Reandy
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <dl className="grid gap-4 rounded-[20px] border border-white/9 bg-black/20 p-5 text-sm backdrop-blur">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-[var(--color-foreground)] transition hover:opacity-75"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-foreground)] transition hover:opacity-75"
                >
                  linkedin.com/in/reandysetiawan
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Instagram
              </dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-foreground)] transition hover:opacity-75"
                >
                  @reandy.setiawan
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Location
              </dt>
              <dd className="mt-1 text-[var(--color-foreground)]">
                {siteConfig.location}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Availability
              </dt>
              <dd className="mt-1 text-[var(--color-foreground)]">
                {siteConfig.availability}
              </dd>
            </div>
            <div className="pt-1">
              <a href={siteConfig.cvPath} download className="text-link">
                Download CV
              </a>
            </div>
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
