"use client";

import { useState } from "react";

import { AnimatedText } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";
import { trackRecord } from "@/data/track-record";
import { cn } from "@/lib/utils";

export function TrackRecordSection() {
  const [active, setActive] = useState(0);
  const item = trackRecord[active];

  return (
    <section id="work" className="bg-black text-[var(--color-accent-soft)]">
      <div className="nv-container nv-section">
        <div className="mb-10 flex flex-wrap gap-2">
          {trackRecord.map((entry, index) => (
            <button
              key={entry.company}
              type="button"
              data-active={active === index}
              className="pill-dark"
              onClick={() => setActive(index)}
            >
              {entry.company}
            </button>
          ))}
        </div>

        <div className="grid min-h-[55vh] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <AnimatedText
            key={item.title}
            text={item.title}
            as="h2"
            mode="words"
            className="display-title max-w-3xl text-[clamp(3rem,8vw,6.5rem)] text-[var(--color-accent-soft)]"
          />

          <div className="space-y-10">
            <Reveal key={`${item.company}-bullets`}>
              <ul className="space-y-3 border-l border-[var(--color-accent-soft)]/40 pl-5 text-sm leading-7 text-[#e3e3df] md:text-base md:leading-8">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} key={`${item.company}-name`}>
              <p className="display-title text-[clamp(2.8rem,9vw,7rem)] italic text-[#e3e3df]">
                {item.company}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-accent-soft)]/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
            {item.period}
          </p>
          <div className="flex gap-2">
            {trackRecord.map((entry, index) => (
              <button
                key={entry.title}
                type="button"
                aria-label={`Show ${entry.company}`}
                className={cn(
                  "h-1.5 w-10 rounded-full transition",
                  active === index
                    ? "bg-[var(--color-accent-soft)]"
                    : "bg-[var(--color-accent-soft)]/25",
                )}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
            {item.company}
          </p>
        </div>
      </div>
    </section>
  );
}
