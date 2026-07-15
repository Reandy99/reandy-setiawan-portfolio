import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";

type CaseStudyHeroProps = {
  project: Project;
  nextProject?: Project;
};

export function CaseStudyHero({
  project,
  nextProject,
}: CaseStudyHeroProps) {
  return (
    <section className="section-shell !pb-8 !pt-24">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#work"
            className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            ← Back to Work
          </Link>
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="button-secondary">
              Next Project
            </Link>
          ) : null}
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Case Study
          </p>
          <h1 className="display-title text-balance text-[2.2rem] text-[var(--color-foreground)] sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.category.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-white/80 px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {item}
              </span>
            ))}
            <span className="rounded-full border border-black/8 bg-white/80 px-3 py-1 text-xs text-[var(--color-muted)]">
              {project.year}
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[var(--color-surface-alt)]">
          <Image
            src={getProjectThumbnailSrc(project)}
            alt={`${project.title} case study thumbnail`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {project.videoUrl ? (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/8 transition hover:bg-black/14"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/90 text-xs font-medium text-[var(--color-foreground)]">
                Play
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
