import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const layouts = [
  {
    id: "a",
    name: "Layout A — Editorial Calm",
    tag: "Legacy reference",
    description: "Previous light editorial direction kept for internal comparison only.",
    previewHref: "/",
  },
  {
    id: "b",
    name: "Layout B — Studio Immersive",
    tag: "Legacy mockup",
    description: "Early dark immersive exploration. Not the production site.",
    previewHref: "/preview/layouts/b",
  },
  {
    id: "c",
    name: "Layout C — Recruiter Fast-Scan",
    tag: "Legacy mockup",
    description: "Early work-first exploration. Not the production site.",
    previewHref: "/preview/layouts/c",
  },
] as const;

export default function LayoutPreviewPage() {
  return (
    <div className="section-shell space-y-8">
      <div className="space-y-3">
        <Link href="/" className="text-link text-xs">
          ← Back to site
        </Link>
        <p className="eyebrow">Internal Preview</p>
        <h1 className="display-title">Layout experiments</h1>
        <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          These routes are for internal comparison only and are excluded from indexing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {layouts.map((layout) => (
          <article
            key={layout.id}
            className="rounded-[20px] border border-white/9 bg-[var(--color-surface)] p-5"
          >
            <p className="chip">{layout.tag}</p>
            <h2 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">
              {layout.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {layout.description}
            </p>
            <Link href={layout.previewHref} className="button-secondary mt-5">
              Open
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
