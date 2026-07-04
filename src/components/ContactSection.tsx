"use client";

import { FormEvent, useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

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
        <h2 className="font-serif text-[1.85rem] text-[var(--color-foreground)] md:text-[2.2rem]">
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
              <dd className="mt-1 text-[var(--color-foreground)]">
                {siteConfig.email}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                LinkedIn
              </dt>
              <dd className="mt-1 text-[var(--color-foreground)]">
                linkedin.com/in/reandysetiawan
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Instagram
              </dt>
              <dd className="mt-1 text-[var(--color-foreground)]">
                @reandy.setiawan
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

        <article className="surface-card">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md border border-black/8 bg-white px-3 py-2.5 text-sm text-[var(--color-foreground)] outline-none transition focus:border-black/16"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-black/8 bg-white px-3 py-2.5 text-sm text-[var(--color-foreground)] outline-none transition focus:border-black/16"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-[var(--color-muted)]">
              <span>Your Message</span>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-md border border-black/8 bg-white px-3 py-2.5 text-sm text-[var(--color-foreground)] outline-none transition focus:border-black/16"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="button-primary">
                Send Message
              </button>
              {submitted ? (
                <p className="text-sm text-[var(--color-muted)]">
                  Form UI ready. Connect the handler to your preferred backend or email service.
                </p>
              ) : null}
            </div>
          </form>
        </article>
      </div>
    </motion.section>
  );
}
