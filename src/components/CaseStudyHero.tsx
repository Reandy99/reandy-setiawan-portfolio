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
    <section className="nv-section !pb-8 !pt-28">
      <div className="mx-auto max-w-[1400px] space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/#work" className="pill w-fit">
            ← Back to Work
          </Link>
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="pill">
              Next Project
            </Link>
          ) : null}
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Case Study
          </p>
          <h1 className="display-title text-[clamp(2.4rem,7vw,5rem)] text-[var(--color-accent)]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.category.map((item) => (
              <span key={item} className="pill !py-1">
                {item}
              </span>
            ))}
            <span className="pill !py-1">{project.year}</span>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-surface-alt)]">
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
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
            >
              <span className="pill-solid">Play</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
