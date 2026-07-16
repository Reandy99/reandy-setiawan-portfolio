"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  blur?: boolean;
} & Omit<MotionProps, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  blur = false,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        ...(blur ? { filter: "blur(8px)" } : null),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : null),
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
