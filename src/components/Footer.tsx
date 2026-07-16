"use client";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/scroll-world")) {
    return null;
  }

  return (
    <footer>
      <div className="nv-container flex flex-col gap-3 border-t border-black/15 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-[var(--color-muted)]">
          2026 © {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition hover:text-[var(--color-foreground)]"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition hover:text-[var(--color-foreground)]"
          >
            Instagram
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition hover:text-[var(--color-foreground)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
