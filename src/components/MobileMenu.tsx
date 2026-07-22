"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { cn, navigation } from "@/lib/utils";

type MobileMenuProps = {
  id: string;
  activeSection: string;
  onClose: () => void;
};

export function MobileMenu({ id, activeSection, onClose }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.button
        type="button"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        className="fixed inset-0 top-14 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
        aria-label="Close menu"
        onClick={onClose}
      />
      <motion.div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 24 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
        className="absolute right-0 top-full z-50 h-[calc(100dvh-3.5rem)] w-full max-w-sm border-l border-white/8 bg-[rgba(7,7,10,0.97)] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
      >
        <nav className="flex h-full flex-col px-5 py-6" aria-label="Mobile">
          <div className="flex flex-1 flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-3.5 text-base font-medium transition",
                  activeSection === item.sectionId
                    ? "bg-white/6 text-[var(--color-foreground)]"
                    : "text-[var(--color-muted)] hover:bg-white/4 hover:text-[var(--color-foreground)]",
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/8 pt-5">
            <Link href="/#contact" className="button-primary w-full" onClick={onClose}>
              Let&apos;s Connect
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
