import type { Transition, Variants } from "framer-motion";

export const easeEditorial: Transition["ease"] = [0.22, 1, 0.36, 1];

export const previewCurrentBlock: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeEditorial },
  },
};

export const previewStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const previewHeroEyebrow: Variants = {
  hidden: { opacity: 0, y: 10, letterSpacing: "0.32em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.24em",
    transition: { duration: 0.5, ease: easeEditorial },
  },
};

export const previewHeroLine: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeEditorial },
  },
};

export const previewHeroMuted: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeEditorial },
  },
};

export const previewHeroCta: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeEditorial },
  },
};

export const previewSoftFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeEditorial },
  },
};

export const previewSoftFadeContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const previewSectionEyebrow: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeEditorial },
  },
};

export const previewSectionTitle: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeEditorial, delay: 0.08 },
  },
};

export const previewSectionDescription: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: easeEditorial, delay: 0.16 },
  },
};

export const previewSectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};
