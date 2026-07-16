"use client";

import { AnimatedText } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";
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
    <section id="contact" className="nv-section !pb-10">
      <div className="mx-auto max-w-[1400px] space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {title}
          </p>
          <AnimatedText
            text={subtitle}
            as="h2"
            mode="words"
            animateOnView
            className="display-title max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)] text-[var(--color-accent)]"
          />
        </div>

        <Reveal>
          <div className="flex flex-col gap-4 border-y border-black/15 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${siteConfig.email}`} className="pill-solid">
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pill"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="pill"
              >
                Instagram
              </a>
              <a href={siteConfig.cvPath} download className="pill">
                Download CV
              </a>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              For hiring inquiries, collaborations, or portfolio reviews —
              reach out directly.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-2 md:grid-cols-2 md:items-end">
          <AnimatedText
            text="Reandy"
            as="p"
            mode="chars"
            animateOnView
            className="display-mega text-[clamp(3.5rem,12vw,8rem)] text-[var(--color-accent)]"
          />
          <AnimatedText
            text="Setiawan"
            as="p"
            mode="chars"
            animateOnView
            delay={0.1}
            className="display-mega text-[clamp(3.5rem,12vw,8rem)] text-[var(--color-accent)] md:text-right"
          />
        </div>
      </div>
    </section>
  );
}
