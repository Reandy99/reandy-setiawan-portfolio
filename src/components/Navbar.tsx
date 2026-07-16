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
  const [activeHash, setActiveHash] = useState("#about");
  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/scroll-world")) {
    return null;
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      if (!isHome) return;

      const ids = ["about", "work", "expertises", "resume", "contact"];
      let current = "#about";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          current = `#${id}`;
        }
      }
      setActiveHash(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const onDark =
    isHome &&
    (activeHash === "#work" || activeHash === "#expertises") &&
    scrolled;

  const onHero = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.6, 0, 0.4, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="nv-container flex items-center justify-between gap-3 py-4">
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isHome && activeHash === item.href.replace("/", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={cn(
                  onHero ? "pill-hero" : onDark ? "pill-dark" : "pill",
                  "!py-1.5",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className={cn(
            "display-title text-xl tracking-wide md:hidden",
            onHero || onDark ? "text-[#e3e3df]" : "text-[var(--color-foreground)]",
          )}
        >
          RS
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            data-active={isHome && activeHash === "#contact"}
            className={cn(
              "hidden sm:inline-flex",
              onHero ? "pill-hero" : onDark ? "pill-dark" : "pill-solid",
            )}
          >
            Contact
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
              onHero || onDark
                ? "border-white/30 bg-black/40 text-[#e3e3df]"
                : "border-black/20 bg-[rgba(227,227,223,0.92)] text-[var(--color-foreground)]",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
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
            className="border-b border-black/10 bg-[rgba(227,227,223,0.98)] px-4 py-5 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="pill w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="pill-solid w-full"
                onClick={() => setMenuOpen(false)}
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
