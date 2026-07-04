"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn, navigation, siteConfig } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-black/6 bg-[rgba(245,244,240,0.92)] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white text-[11px] font-semibold text-[var(--color-foreground)]">
              RS
            </span>
            <span className="text-xs font-medium tracking-[0.02em] text-[var(--color-foreground)] md:text-sm">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex items-center justify-between gap-4 md:flex-1 md:justify-end">
            <nav
              className="flex flex-wrap gap-4 text-[11px] text-[var(--color-muted)] md:justify-center md:gap-5"
              aria-label="Primary"
            >
              {navigation.map((item) => {
                const isActive =
                  item.href === "/" || item.href.startsWith("/#")
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-transparent pb-1 transition-colors hover:text-[var(--color-foreground)]",
                      isActive && "border-[var(--color-foreground)] text-[var(--color-foreground)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/#contact" className="button-primary whitespace-nowrap">
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
