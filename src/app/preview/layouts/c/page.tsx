import type { Metadata } from "next";
import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LayoutCPreviewPage() {
  const projects = featuredProjects.slice(0, 4);

  return (
    <div className="section-shell space-y-6">
      <p className="eyebrow">Internal Preview C</p>
      <h1 className="display-title">Portfolio-first preview</h1>
      <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
        {siteConfig.heroSubhead}
      </p>
      <ul className="space-y-2 text-sm text-[var(--color-muted)]">
        {projects.map((project) => (
          <li key={project.slug}>{project.title}</li>
        ))}
      </ul>
      <Link href="/preview/layouts" className="text-link text-xs">
        ← Back to layout previews
      </Link>
    </div>
  );
}
