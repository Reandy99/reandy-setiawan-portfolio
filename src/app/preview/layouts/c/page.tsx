import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/lib/utils";

export default function LayoutCPreviewPage() {
  const projects = featuredProjects.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#eef0f3]">
      <header className="flex items-center justify-between border-b border-black/6 bg-white px-5 py-4 md:px-8">
        <div>
          <p className="text-sm font-semibold text-[var(--color-foreground)]">
            {siteConfig.name}
          </p>
          <p className="text-xs text-[var(--color-muted)]">{siteConfig.role}</p>
        </div>
        <a href={siteConfig.cvPath} download className="button-primary">
          Download CV
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Layout C Preview
        </p>
        <h1 className="mt-3 max-w-2xl text-2xl font-semibold text-[var(--color-foreground)] md:text-3xl">
          Portfolio-first. Recruiter sees work in 10 seconds.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          {siteConfig.heroSubhead}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-[18px] border bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="aspect-[4/3] bg-[#e7e5e0]" />
              <div className="space-y-1 p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {project.category.join(" · ")}
                </p>
                <h2 className="text-base font-semibold">{project.title}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[18px] border bg-white p-5" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-sm text-[var(--color-muted)]">
            Resume + contact collapsed below — fast scan, minimal storytelling.
          </p>
        </div>

        <Link
          href="/preview/layouts"
          className="mt-8 inline-block text-xs text-[var(--color-muted)] underline underline-offset-2"
        >
          ← Kembali ke perbandingan layout
        </Link>
      </section>
    </div>
  );
}
