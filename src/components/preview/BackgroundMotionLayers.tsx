"use client";

import { motion, useReducedMotion } from "framer-motion";

export type MotionVariant = "a" | "b" | "c" | "d" | "e" | "f";

type BackgroundMotionLayersProps = {
  variant: MotionVariant;
};

function SoftGlow() {
  return (
    <>
      <div className="absolute -left-[10%] -top-[20%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute -right-[10%] bottom-[-10%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,transparent_70%)] blur-3xl" />
    </>
  );
}

function FilmCorners() {
  const corner =
    "absolute h-10 w-10 border-[rgba(244,241,234,0.22)] sm:h-14 sm:w-14";
  return (
    <>
      <div className={`${corner} left-4 top-4 border-l border-t sm:left-8 sm:top-8`} />
      <div className={`${corner} right-4 top-4 border-r border-t sm:right-8 sm:top-8`} />
      <div className={`${corner} bottom-4 left-4 border-b border-l sm:bottom-8 sm:left-8`} />
      <div className={`${corner} bottom-4 right-4 border-b border-r sm:bottom-8 sm:right-8`} />
    </>
  );
}

export function BackgroundMotionLayers({ variant }: BackgroundMotionLayersProps) {
  const prefersReducedMotion = useReducedMotion();
  const staticMode = Boolean(prefersReducedMotion);

  if (variant === "d") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <SoftGlow />
        <FilmCorners />

        {/* Diagonal cinematic light streaks */}
        {[
          { top: "12%", left: "-10%", rotate: -18, delay: 0, width: "70%" },
          { top: "38%", left: "20%", rotate: -18, delay: 1.4, width: "55%" },
          { top: "62%", left: "-5%", rotate: -18, delay: 2.8, width: "75%" },
          { top: "78%", left: "30%", rotate: -18, delay: 0.7, width: "45%" },
        ].map((streak, index) => (
          <motion.div
            key={index}
            className="absolute h-px origin-left bg-gradient-to-r from-transparent via-[rgba(244,241,234,0.35)] to-transparent"
            style={{
              top: streak.top,
              left: streak.left,
              width: streak.width,
              rotate: streak.rotate,
            }}
            animate={
              staticMode
                ? { opacity: 0.35 }
                : { opacity: [0.08, 0.55, 0.12], x: [0, 40, 0] }
            }
            transition={{
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: streak.delay,
            }}
          />
        ))}

        {/* Floating dust / light particles */}
        {[
          { x: "14%", y: "22%", size: 3 },
          { x: "28%", y: "68%", size: 2 },
          { x: "48%", y: "18%", size: 2.5 },
          { x: "62%", y: "44%", size: 2 },
          { x: "74%", y: "72%", size: 3 },
          { x: "86%", y: "30%", size: 2 },
          { x: "18%", y: "48%", size: 2 },
          { x: "55%", y: "82%", size: 2.5 },
          { x: "40%", y: "36%", size: 2 },
          { x: "80%", y: "58%", size: 3 },
        ].map((dot, index) => (
          <motion.span
            key={`dust-${index}`}
            className="absolute rounded-full bg-[rgba(244,241,234,0.55)]"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
            }}
            animate={
              staticMode
                ? { opacity: 0.35 }
                : {
                    y: [0, -18, 10, 0],
                    opacity: [0.15, 0.7, 0.25, 0.15],
                  }
            }
            transition={{
              duration: 6 + (index % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
          />
        ))}

        <div className="bg-preview-grain absolute inset-0 opacity-[0.05]" />
      </div>
    );
  }

  if (variant === "e") {
    const frames: Array<{
      top: string;
      left?: string;
      right?: string;
      w: number;
      h: number;
      rot: number;
    }> = [
      { top: "8%", left: "6%", w: 140, h: 90, rot: -8 },
      { top: "18%", right: "7%", w: 120, h: 160, rot: 6 },
      { top: "58%", left: "4%", w: 160, h: 100, rot: 4 },
      { top: "62%", right: "8%", w: 130, h: 86, rot: -5 },
      { top: "38%", left: "42%", w: 100, h: 130, rot: -3 },
    ];

    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <SoftGlow />
        <FilmCorners />

        {frames.map((frame, index) => (
          <motion.div
            key={index}
            className="absolute rounded-[14px] border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            style={{
              top: frame.top,
              ...(frame.left ? { left: frame.left } : { right: frame.right }),
              width: frame.w,
              height: frame.h,
              rotate: frame.rot,
            }}
            animate={
              staticMode
                ? { opacity: 0.45, y: 0 }
                : {
                    y: [0, index % 2 === 0 ? -14 : 12, 0],
                    opacity: [0.28, 0.55, 0.28],
                  }
            }
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            <div className="absolute inset-2 rounded-[10px] border border-white/8" />
            <div className="absolute inset-x-3 bottom-3 h-1.5 rounded-full bg-white/10" />
            <div className="absolute left-3 top-3 h-1.5 w-8 rounded-full bg-white/12" />
          </motion.div>
        ))}

        {/* Soft bokeh circles */}
        {[
          { x: "22%", y: "30%", s: 48 },
          { x: "70%", y: "24%", s: 64 },
          { x: "58%", y: "70%", s: 40 },
          { x: "30%", y: "78%", s: 56 },
        ].map((orb, index) => (
          <motion.div
            key={`bokeh-${index}`}
            className="absolute rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(167,139,250,0.18)_0%,transparent_70%)]"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.s,
              height: orb.s,
            }}
            animate={
              staticMode
                ? { opacity: 0.35, scale: 1 }
                : { opacity: [0.2, 0.55, 0.2], scale: [1, 1.15, 1] }
            }
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.6,
            }}
          />
        ))}

        <div className="bg-preview-grain absolute inset-0 opacity-[0.05]" />
      </div>
    );
  }

  if (variant === "f") {
    const nodes = [
      { x: "12%", y: "28%" },
      { x: "28%", y: "18%" },
      { x: "46%", y: "32%" },
      { x: "62%", y: "20%" },
      { x: "78%", y: "34%" },
      { x: "22%", y: "62%" },
      { x: "42%", y: "70%" },
      { x: "68%", y: "64%" },
      { x: "84%", y: "72%" },
    ];

    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <SoftGlow />
        <FilmCorners />

        {/* Large monogram watermark */}
        <motion.div
          className="absolute right-[-4%] top-[18%] select-none font-serif text-[28vw] leading-none tracking-[-0.06em] text-white/[0.035]"
          animate={staticMode ? { opacity: 1 } : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          RS
        </motion.div>

        {/* Constellation lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M12 28 L28 18 L46 32 L62 20 L78 34"
            fill="none"
            stroke="rgba(167,139,250,0.28)"
            strokeWidth="0.15"
            initial={false}
            animate={
              staticMode
                ? { pathLength: 1, opacity: 0.5 }
                : { pathLength: [0.2, 1, 0.35], opacity: [0.25, 0.65, 0.3] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M22 62 L42 70 L68 64 L84 72"
            fill="none"
            stroke="rgba(56,189,248,0.24)"
            strokeWidth="0.15"
            animate={
              staticMode
                ? { pathLength: 1, opacity: 0.45 }
                : { pathLength: [0.15, 1, 0.3], opacity: [0.2, 0.55, 0.25] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.path
            d="M28 18 L22 62 M46 32 L42 70 M78 34 L68 64"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.12"
            animate={
              staticMode
                ? { opacity: 0.35 }
                : { opacity: [0.12, 0.4, 0.15] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {nodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
            <motion.span
              className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(244,241,234,0.75)] shadow-[0_0_12px_rgba(167,139,250,0.45)]"
              animate={
                staticMode
                  ? { scale: 1, opacity: 0.7 }
                  : { scale: [1, 1.45, 1], opacity: [0.45, 1, 0.45] }
              }
              transition={{
                duration: 3.2 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            />
          </motion.div>
        ))}

        <div className="bg-preview-grain absolute inset-0 opacity-[0.05]" />
      </div>
    );
  }

  // Legacy A/B/C kept for comparison
  if (variant === "a") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -left-[20%] -top-[30%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.32)_0%,transparent_68%)] blur-3xl"
          animate={
            staticMode
              ? { opacity: 0.6 }
              : {
                  x: [0, 60, -20, 0],
                  y: [0, 40, 80, 0],
                  scale: [1, 1.12, 0.96, 1],
                  opacity: [0.55, 0.85, 0.65, 0.55],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-[15%] top-[10%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,transparent_68%)] blur-3xl"
          animate={
            staticMode
              ? { opacity: 0.5 }
              : {
                  x: [0, -50, 30, 0],
                  y: [0, 70, 20, 0],
                  scale: [1, 0.92, 1.15, 1],
                  opacity: [0.4, 0.7, 0.5, 0.4],
                }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="bg-preview-grain absolute inset-0 opacity-[0.05]" />
      </div>
    );
  }

  if (variant === "b") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[15%] -top-[20%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[-15%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.09)_0%,transparent_68%)] blur-3xl" />
        <motion.div
          className="absolute inset-[-48px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:48px_48px]"
          animate={staticMode ? { x: 0, y: 0 } : { x: [0, 48], y: [0, 48] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.28)] to-transparent"
          animate={
            staticMode
              ? { opacity: 0.2 }
              : { opacity: [0.1, 0.45, 0.1], scaleX: [0.85, 1.05, 0.85] }
          }
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[16%] top-[20%] h-28 w-28 rounded-full border border-[rgba(56,189,248,0.22)]"
          animate={
            staticMode
              ? { opacity: 0.2, scale: 1 }
              : { scale: [1, 1.4, 1], opacity: [0.3, 0.04, 0.3] }
          }
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[24%] right-[18%] h-20 w-20 rounded-full border border-[rgba(139,92,246,0.24)]"
          animate={
            staticMode
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
        <div className="bg-preview-grain absolute inset-0 opacity-[0.04]" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#07070a_0px,#07070a_420px,#0b0b10_420px,#0b0b10_840px)]" />
      <div className="bg-preview-grain absolute inset-0 opacity-[0.045]" />
    </div>
  );
}
