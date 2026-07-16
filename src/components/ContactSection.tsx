"use client";

import { AnimatedText } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" className="nv-section !pb-8">
      <div className="nv-container space-y-12">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${siteConfig.email}`} className="pill-solid !px-6 !py-3 !text-sm">
                {siteConfig.email}
              </a>
              <span className="pill">Socials</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/25 text-xs font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
              >
                in
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/25 text-xs font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
              >
                ig
              </a>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              For hiring inquiries, collaborations, or portfolio reviews —
              reach out directly.
            </p>
          </div>
        </Reveal>

        <div className="h-px w-full bg-black/15" />

        <div>
          <h2 className="sr-only">Contact {siteConfig.name}</h2>
          <div className="flex flex-col gap-0 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="reAndy"
              as="p"
              mode="chars"
              animateOnView
              className="display-mega text-[clamp(4.5rem,16vw,12rem)] text-[var(--color-foreground)]"
            />
            <AnimatedText
              text="sEtiawan"
              as="p"
              mode="chars"
              animateOnView
              delay={0.12}
              className="display-mega text-[clamp(4.5rem,16vw,12rem)] text-[var(--color-foreground)] md:text-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
