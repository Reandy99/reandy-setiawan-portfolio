import Link from "next/link";

import { siteConfig } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-surface)] text-[11px] font-semibold tracking-[0.08em] text-[var(--color-foreground)]">
            RS
          </span>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[var(--color-foreground)]">
              {siteConfig.name}
            </p>
            <p className="text-xs text-[var(--color-muted)]">{siteConfig.role}</p>
            <p className="text-xs text-[var(--color-muted)]">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Instagram
          </a>
          <Link
            href="/#home"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
