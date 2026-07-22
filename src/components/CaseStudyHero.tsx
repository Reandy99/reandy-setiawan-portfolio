import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { cn } from "@/lib/utils";

type CaseStudyHeroProps = {
  project: Project;
  nextProject?: Project;
};

export function CaseStudyHero({ project, nextProject }: CaseStudyHeroProps) {
  const isDiagram = project.thumbnailFit === "contain";
  const mediaHref = project.cardUrl ?? project.videoUrl;
  const gallery = project.gallery ?? [];

  const mediaFrame = (
    <div
      className={cn(
        "relative overflow-hidden rounded-[16px] bg-[#121218]",
        isDiagram ? "aspect-[3/2] sm:aspect-[16/10]" : "aspect-[16/9]",
      )}
    >
      <Image
        src={getProjectThumbnailSrc(project)}
        alt={`${project.title} case study thumbnail`}
        fill
        quality={90}
        className={isDiagram ? "object-contain p-3 sm:p-5" : "object-cover"}
        style={
          project.thumbnailPosition
            ? { objectPosition: project.thumbnailPosition }
            : undefined
        }
        sizes={
          isDiagram
            ? "(min-width: 768px) 48rem, 100vw"
            : "(min-width: 1280px) 1120px, 100vw"
        }
        priority
      />
      {project.videoUrl && !project.cardUrl ? (
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover/media:bg-black/35">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[rgba(14,14,19,0.88)] text-xs font-medium text-[var(--color-foreground)] shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur">
            Play
          </span>
        </span>
      ) : null}
      {mediaHref ? (
        <span
          aria-hidden
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xs text-white backdrop-blur"
        >
          ↗
        </span>
      ) : null}
    </div>
  );

  return (
    <section className="section-shell pb-8 pt-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#selected-work"
            className="text-[11px] text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            ← Back to Selected Work
          </Link>
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="button-secondary">
              Next Project
            </Link>
          ) : null}
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Case Study</p>
          <h1 className="text-balance font-serif text-[2rem] leading-tight tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.category.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
            <span className="chip">{project.year}</span>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden rounded-[22px] border border-white/9 bg-[var(--color-surface)] p-3",
            isDiagram && "mx-auto max-w-3xl",
          )}
        >
          {mediaHref ? (
            <a
              href={mediaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/media block"
              aria-label={`Open proof for ${project.title}`}
            >
              {mediaFrame}
            </a>
          ) : (
            mediaFrame
          )}
        </div>

        {gallery.length > 0 ? (
          <div
            className={cn(
              "grid gap-3 sm:grid-cols-2",
              isDiagram && "mx-auto max-w-3xl",
            )}
          >
            {gallery.map((item) => {
              const frame = (
                <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#121218]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={90}
                    className="object-contain p-2 transition duration-500 group-hover/gallery:scale-[1.02] sm:p-3"
                    sizes="(min-width: 768px) 24rem, 100vw"
                  />
                  {item.href ? (
                    <span
                      aria-hidden
                      className="absolute right-2.5 top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[10px] text-white backdrop-blur"
                    >
                      ↗
                    </span>
                  ) : null}
                </div>
              );

              return (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-[18px] border border-white/9 bg-[var(--color-surface)] p-2.5"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/gallery block"
                      aria-label={item.alt}
                    >
                      {frame}
                    </a>
                  ) : (
                    frame
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
