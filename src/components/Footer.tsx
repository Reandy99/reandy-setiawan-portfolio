import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white text-[11px] font-semibold text-[var(--color-foreground)]">
            RS
          </span>
          <p className="text-xs text-[var(--color-muted)]">
            © 2026 Reandy Setiawan. All rights reserved.
          </p>
        </div>

        <Link
          href="/"
          className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
        >
          Top ↑
        </Link>
      </div>
    </footer>
  );
}
