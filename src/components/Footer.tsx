import Link from "next/link";

import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-black/15">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-xs text-[var(--color-muted)]">
          2026 © {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Instagram
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            GitHub
          </a>
          <Link
            href="/"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
