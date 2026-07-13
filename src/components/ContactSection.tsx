"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/utils";

type ContactSectionProps = {
  title?: string;
  subtitle?: string;
};

export function ContactSection({
  title = "Contact",
  subtitle = "Let's create something impactful together.",
}: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="section-shell"
    >
      <div className="mb-6 max-w-3xl space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {title}
        </p>
        <h2 className="text-balance font-serif text-[1.55rem] text-[var(--color-foreground)] sm:text-[1.85rem] md:text-[2.2rem]">
          {subtitle}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="surface-card space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Get in Touch
            </p>
            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
              Contact details
            </h3>
          </div>

          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-[var(--color-foreground)] transition hover:opacity-70"
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
                  rel="noreferrer"
                  className="break-all text-[var(--color-foreground)] transition hover:opacity-70"
                >
                  linkedin.com/in/reandy-setiawan
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
                  rel="noreferrer"
                  className="break-all text-[var(--color-foreground)] transition hover:opacity-70"
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
          </dl>
        </article>

        <article className="surface-card flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Quick Actions
            </p>
            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
              Reach out directly
            </h3>
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              For hiring inquiries, collaborations, or portfolio reviews — email
              me directly or connect on LinkedIn.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${siteConfig.email}`} className="button-primary">
              Email Me
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn
            </a>
            <a href={siteConfig.cvPath} download className="button-secondary">
              Download CV
            </a>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
