"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#about", label: "About me" },
  { href: "/#work", label: "Track record" },
  { href: "/#expertises", label: "Expertises" },
  { href: "/#resume", label: "Resume" },
] as const;

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
  const isHome = pathname === "/";

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
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const lightHero = isHome && !scrolled && !menuOpen;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.6, 0, 0.4, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-8">
        <nav
          className={cn(
            "hidden items-center gap-2 rounded-full border p-1.5 md:flex",
            lightHero
              ? "border-white/25 bg-black/20 backdrop-blur-md"
              : "border-black/15 bg-[rgba(227,227,223,0.85)] backdrop-blur-md",
          )}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(lightHero ? "pill-light !py-1.5 !text-[11px]" : "pill !py-1.5 !text-[11px]")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className={cn(
            "display-title text-lg tracking-wide md:hidden",
            lightHero ? "text-white" : "text-[var(--color-foreground)]",
          )}
        >
          RS
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className={cn(
              "hidden sm:inline-flex",
              lightHero ? "pill-light" : "pill-solid",
            )}
          >
            Contact
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
              lightHero
                ? "border-white/35 bg-black/25 text-white"
                : "border-black/20 bg-[rgba(227,227,223,0.9)] text-[var(--color-foreground)]",
            )}
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

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-b border-black/10 bg-[rgba(227,227,223,0.98)] px-4 py-5 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="pill w-full"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="pill-solid w-full"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
