import Link from "next/link";

import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-black/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-1">
          <p className="display-title text-lg text-[var(--color-foreground)]">
            {siteConfig.name}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            © 2026 Reandy Setiawan. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Instagram
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            GitHub
          </a>
          <Link
            href="/"
            className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
