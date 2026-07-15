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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell"
    >
      <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[linear-gradient(145deg,#ffffff_0%,#eef3ef_100%)] px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {title}
            </p>
            <h2 className="display-title max-w-xl text-balance text-3xl text-[var(--color-foreground)] sm:text-4xl md:text-5xl">
              {subtitle}
            </h2>
            <p className="max-w-md text-[15px] leading-7 text-[var(--color-muted)]">
              For hiring inquiries, collaborations, or portfolio reviews — email
              me directly or connect on LinkedIn.
            </p>
          </div>

          <div className="space-y-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-base font-medium text-[var(--color-foreground)] transition hover:opacity-70"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium text-[var(--color-foreground)] transition hover:opacity-70"
                  >
                    linkedin.com/in/reandy-setiawan
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Based in
                </dt>
                <dd className="mt-1 text-base font-medium text-[var(--color-foreground)]">
                  {siteConfig.location}
                </dd>
              </div>
            </dl>

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
          </div>
        </div>
      </div>
    </motion.section>
  );
}
