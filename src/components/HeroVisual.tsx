"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { heroLabels } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";
import { siteConfig } from "@/lib/utils";

export function HeroVisual() {
  const { prefersReducedMotion, fadeIn, transition } = useMotionPrefs();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 18 });
  const springY = useSpring(y, { stiffness: 80, damping: 18 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      const offsetX = (event.clientX / window.innerWidth - 0.5) * 18;
      const offsetY = (event.clientY / window.innerHeight - 0.5) * 14;
      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [prefersReducedMotion, x, y]);

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={transition(0.12)}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.12),transparent_50%)] blur-2xl" />

      <motion.div
        style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[var(--color-surface)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      >
        <div className="pointer-events-none absolute inset-8 rounded-full border border-white/8" />
        <div className="pointer-events-none absolute inset-16 rounded-full border border-[rgba(167,139,250,0.18)]" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-[#121218]">
          <Image
            src={siteConfig.profileImage}
            alt="Portrait of Reandy Setiawan"
            fill
            className="object-cover object-[center_12%]"
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 88vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/70 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute left-5 top-8 hidden sm:block">
          <span className="chip border-[rgba(167,139,250,0.28)] bg-[rgba(14,14,19,0.82)] text-[var(--color-foreground)] backdrop-blur">
            {heroLabels[0]}
          </span>
        </div>
        <div className="pointer-events-none absolute right-4 top-16 hidden sm:block">
          <span className="chip border-[rgba(56,189,248,0.28)] bg-[rgba(14,14,19,0.82)] text-[var(--color-foreground)] backdrop-blur">
            {heroLabels[1]}
          </span>
        </div>
        <div className="pointer-events-none absolute bottom-24 left-4 hidden sm:block">
          <span className="chip border-white/12 bg-[rgba(14,14,19,0.82)] text-[var(--color-foreground)] backdrop-blur">
            {heroLabels[2]}
          </span>
        </div>
        <div className="pointer-events-none absolute bottom-10 right-6 hidden sm:block">
          <span className="chip border-[rgba(167,139,250,0.28)] bg-[rgba(14,14,19,0.82)] text-[var(--color-foreground)] backdrop-blur">
            {heroLabels[3]}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
