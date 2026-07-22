"use client";

import { useReducedMotion, type Transition, type Variants } from "framer-motion";

const easeEditorial: Transition["ease"] = [0.22, 1, 0.36, 1];

export function useMotionPrefs() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
      };

  const fadeUpSoft: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: easeEditorial },
        },
      };

  const fadeIn: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.35, ease: easeEditorial },
        },
      };

  const slideLeft: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { opacity: 0, x: -8 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: easeEditorial },
        },
      };

  const staggerContainer: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: 0.04 },
        },
      };

  const heroStaggerContainer: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
      };

  const heroHeadlineContainer: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      };

  const heroEyebrow: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 10, letterSpacing: "0.32em" },
        visible: {
          opacity: 1,
          y: 0,
          letterSpacing: "0.24em",
          transition: { duration: 0.5, ease: easeEditorial },
        },
      };

  const heroLine: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: easeEditorial },
        },
      };

  const heroMuted: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeEditorial },
        },
      };

  const heroCta: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeEditorial },
        },
      };

  const sectionContainer: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: {}, visible: {} };

  const sectionEyebrow: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
    : {
        hidden: { opacity: 0, x: -8 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: easeEditorial },
        },
      };

  const sectionTitle: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeEditorial, delay: 0.08 },
        },
      };

  const sectionDescription: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.35, ease: easeEditorial, delay: 0.16 },
        },
      };

  const workflowStagger: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: 0.05 },
        },
      };

  const workflowStaggerMobile: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: 0.04 },
        },
      };

  const workflowNode: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: easeEditorial },
        },
      };

  const transition = (delay = 0): Transition =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.45, ease: easeEditorial, delay };

  return {
    prefersReducedMotion,
    fadeUp,
    fadeUpSoft,
    fadeIn,
    slideLeft,
    staggerContainer,
    heroStaggerContainer,
    heroHeadlineContainer,
    heroEyebrow,
    heroLine,
    heroMuted,
    heroCta,
    sectionContainer,
    sectionEyebrow,
    sectionTitle,
    sectionDescription,
    workflowStagger,
    workflowStaggerMobile,
    workflowNode,
    transition,
  };
}
