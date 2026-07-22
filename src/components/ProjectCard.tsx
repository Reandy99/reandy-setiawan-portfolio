"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { fadeUp, transition } = useMotionPrefs();
  const href = project.cardUrl ?? project.videoUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.cardUrl || project.videoUrl);
  const caseStudyHref = `/work/${project.slug}`;

  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={transition(index * 0.04)}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[18px] border border-white/9 bg-[var(--color-surface)] transition hover:border-white/16">
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="block"
          aria-label={
            isExternal
              ? `Open ${project.title} externally`
              : `Open ${project.title} case study`
          }
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#121218]">
            <Image
              src={getProjectThumbnailSrc(project)}
              alt={`${project.title} project thumbnail`}
              fill
              quality={90}
              className={cn(
                "transition duration-500 group-hover:scale-[1.03]",
                project.thumbnailFit === "contain"
                  ? "object-contain p-3"
                  : "object-cover",
              )}
              style={
                project.thumbnailPosition
                  ? { objectPosition: project.thumbnailPosition }
                  : undefined
              }
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            />
            <span
              aria-hidden
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xs text-white backdrop-blur transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </div>
        </a>

        <div className="flex flex-1 flex-col space-y-2.5 p-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {project.category.join(" · ")}
          </p>
          <h3 className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-6 text-[var(--color-foreground)] md:text-lg md:leading-7 md:min-h-[3.5rem]">
            <Link href={caseStudyHref} className="transition hover:opacity-80">
              {project.title}
            </Link>
          </h3>
          <p className="line-clamp-2 min-h-[3rem] flex-1 text-sm leading-6 text-[var(--color-muted)]">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-1">
            <Link href={caseStudyHref} className="text-link text-xs">
              View case study
            </Link>
            {project.videoUrl ? (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-xs"
              >
                Watch video
              </a>
            ) : null}
            {project.cardUrl ? (
              <a
                href={project.cardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-xs"
              >
                {project.cardUrl.includes("linkedin.com")
                  ? "View on LinkedIn"
                  : "Visit portfolio"}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
