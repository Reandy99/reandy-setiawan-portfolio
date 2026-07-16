"use client";

import { useState } from "react";

import { AnimatedText } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";
import { expertiseRoles } from "@/data/track-record";
import { toolTags } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExpertisesSection() {
  const [active, setActive] = useState(0);
  const role = expertiseRoles[active];
  const marqueeItems = [...toolTags, ...toolTags];

  return (
    <section id="expertises" className="bg-black text-[var(--color-accent-soft)]">
      <div className="nv-container nv-section !pb-0">
        <AnimatedText
          text="youR Content x 10?"
          as="h2"
          mode="words"
          animateOnView
          className="display-title mb-10 max-w-5xl text-[clamp(3rem,9vw,7rem)] text-[var(--color-accent-soft)]"
        />

        <div className="grid gap-0 border-y border-[var(--color-accent-soft)]/20 md:grid-cols-4">
          {expertiseRoles.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "border-b border-[var(--color-accent-soft)]/20 px-4 py-5 text-left text-sm transition md:border-b-0 md:border-r md:last:border-r-0",
                active === index
                  ? "text-[var(--color-accent-soft)]"
                  : "text-[var(--color-accent-soft)]/40 hover:text-[var(--color-accent-soft)]/70",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Reveal key={role.label} className="max-w-2xl py-10">
          <p className="text-sm leading-8 text-[#e3e3df]/85 md:text-base md:leading-9">
            {role.description}
          </p>
        </Reveal>
      </div>

      <div className="marquee border-t border-[var(--color-accent-soft)]/20 py-6">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="display-title whitespace-nowrap text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-accent-soft)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
