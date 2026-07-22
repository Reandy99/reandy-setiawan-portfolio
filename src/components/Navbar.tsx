"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

import { MobileMenu } from "@/components/MobileMenu";
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
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMenuOpen(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = navigation.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (sectionId: string) => {
    if (pathname !== "/") {
      return false;
    }

    return activeSection === sectionId;
  };

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-white/8 bg-[rgba(7,7,10,0.78)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="flex h-14 items-center justify-between gap-3 md:h-[4rem]">
          <Link href="/#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-surface)] text-[11px] font-semibold tracking-[0.08em] text-[var(--color-foreground)]">
              RS
            </span>
            <span className="truncate text-sm font-medium tracking-[0.01em] text-[var(--color-foreground)]">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 text-[11px] text-[var(--color-muted)] lg:flex"
            aria-label="Primary"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-transparent pb-1 transition-colors hover:text-[var(--color-foreground)]",
                  isActive(item.sectionId) &&
                    "border-[var(--color-accent-soft)] text-[var(--color-foreground)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href="/#contact"
              className="button-primary hidden whitespace-nowrap sm:inline-flex"
            >
              Let&apos;s Connect
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-surface)] text-[var(--color-foreground)] transition hover:border-white/20 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
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
          <MobileMenu
            id={menuId}
            activeSection={activeSection}
            onClose={() => {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
          />
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
