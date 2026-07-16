"use client";

import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      staggerChildren: 0.035,
      delayChildren: delay,
    },
  }),
};

const wordContainerVariants: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      staggerChildren: 0.055,
      delayChildren: delay,
    },
  }),
};

const charVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
    rotate: 4,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "chars" | "words";
  className?: string;
  delay?: number;
  once?: boolean;
  animateOnView?: boolean;
};

export function AnimatedText({
  text,
  as: Tag = "p",
  mode = "words",
  className,
  delay = 0,
  once = true,
  animateOnView = false,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const MotionTag = motion.create(Tag);

  if (mode === "chars") {
    return (
      <MotionTag
        className={cn(className)}
        initial="hidden"
        {...(animateOnView
          ? {
              whileInView: "visible",
              viewport: { once, margin: "-40px" },
            }
          : { animate: "visible" })}
        custom={delay}
        variants={containerVariants}
        aria-label={text}
      >
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0"
          >
            {Array.from(word).map((char, charIndex) => (
              <span key={`${char}-${charIndex}`} className="inline-block overflow-hidden align-bottom">
                <motion.span className="inline-block" variants={charVariants}>
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      {...(animateOnView
        ? {
            whileInView: "visible",
            viewport: { once, margin: "-40px" },
          }
        : { animate: "visible" })}
      custom={delay}
      variants={wordContainerVariants}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden align-bottom last:mr-0">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
