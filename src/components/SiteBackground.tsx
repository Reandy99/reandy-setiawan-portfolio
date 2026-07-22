"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Production background — Option B: Film grid / hairline mesh with motion.
 */
export function SiteBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft atmospheric base */}
      <div className="absolute -left-[15%] -top-[20%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute -right-[10%] bottom-[-15%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.09)_0%,transparent_68%)] blur-3xl" />

      {/* Scrolling hairline grid */}
      <motion.div
        className="absolute inset-[-48px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:48px_48px]"
        animate={
          prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, 48], y: [0, 48] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Horizontal scan pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.28)] to-transparent"
        animate={
          prefersReducedMotion
            ? { opacity: 0.2 }
            : { opacity: [0.1, 0.45, 0.1], scaleX: [0.85, 1.05, 0.85] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft radar rings */}
      <motion.div
        className="absolute left-[16%] top-[20%] h-28 w-28 rounded-full border border-[rgba(56,189,248,0.22)]"
        animate={
          prefersReducedMotion
            ? { opacity: 0.2, scale: 1 }
            : { scale: [1, 1.4, 1], opacity: [0.3, 0.04, 0.3] }
        }
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-[24%] right-[18%] h-20 w-20 rounded-full border border-[rgba(139,92,246,0.24)]"
        animate={
          prefersReducedMotion
            ? { opacity: 0.18, scale: 1 }
            : { scale: [1, 1.55, 1], opacity: [0.28, 0.02, 0.28] }
        }
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.2,
        }}
      />

      {/* Film grain */}
      <div className="site-bg-grain absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
