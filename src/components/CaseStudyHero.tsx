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
    <section className="section-shell pb-8 pt-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#work"
            className="text-[11px] text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            ← Back to Work
          </Link>
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="button-secondary">
              Next Project
            </Link>
          ) : null}
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Case Study
          </p>
          <h1 className="font-serif text-4xl text-[var(--color-foreground)] md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.category.map((item) => (
              <span
                key={item}
                className="rounded-md border border-black/8 bg-white px-3 py-1 text-[10px] text-[var(--color-muted)]"
              >
                {item}
              </span>
            ))}
            <span className="rounded-md border border-black/8 bg-white px-3 py-1 text-[10px] text-[var(--color-muted)]">
              {project.year}
            </span>
          </div>
        </div>

        <div className="surface-card overflow-hidden p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-[#ebeae6]">
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
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/85 text-xs font-medium text-[var(--color-foreground)] shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                  Play
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
