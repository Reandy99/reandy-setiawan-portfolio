"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn, navigation, siteConfig } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-4" aria-hidden>
      <span
        className={cn(
          "absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition duration-200",
          open ? "top-[6px] rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-current transition duration-200",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition duration-200",
          open ? "top-[6px] -rotate-45" : "top-[12px]",
        )}
      />
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/" || href.startsWith("/#")) {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled || menuOpen
          ? "border-b border-black/6 bg-[rgba(244,246,244,0.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="display-title text-lg tracking-[-0.04em] text-[var(--color-foreground)] sm:text-xl"
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-7 text-sm text-[var(--color-muted)] md:flex"
            aria-label="Primary"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-[var(--color-foreground)]",
                  isActive(item.href) && "text-[var(--color-foreground)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href="/#contact"
              className="button-primary hidden whitespace-nowrap sm:inline-flex !min-h-10 !px-4 !text-xs"
            >
              Let&apos;s Connect
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--color-foreground)] backdrop-blur-md transition hover:border-black/16 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                setMenuOpen((open) => !open);
              }}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-black/15 md:hidden"
              aria-label="Close menu"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="absolute left-0 right-0 top-full z-50 border-b border-black/8 bg-[rgba(244,246,244,0.98)] shadow-[0_18px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden"
            >
              <nav className="mx-auto max-w-6xl px-5 py-5 sm:px-6" aria-label="Mobile">
                <div className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-3 text-sm font-medium transition",
                        isActive(item.href)
                          ? "bg-white text-[var(--color-foreground)]"
                          : "text-[var(--color-muted)] hover:bg-white/70 hover:text-[var(--color-foreground)]",
                      )}
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 border-t border-black/6 pt-4">
                  <Link
                    href="/#contact"
                    className="button-primary w-full"
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Let&apos;s Connect
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
