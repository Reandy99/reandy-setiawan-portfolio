"use client";

import { AnimatedText } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl space-y-4 text-center"
          : "max-w-3xl space-y-4"
      }
    >
      {eyebrow ? (
        <Reveal y={12} delay={0}>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <AnimatedText
        text={title}
        as="h2"
        mode="words"
        animateOnView
        delay={0.05}
        className="display-title text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--color-accent)]"
      />
      {description ? (
        <Reveal y={16} delay={0.12}>
          <p className="max-w-2xl text-[15px] leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
