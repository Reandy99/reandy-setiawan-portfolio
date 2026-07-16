"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const href = project.cardUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.cardUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.6, 0, 0.4, 1] }}
      className="group"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="block space-y-4"
      >
        <div
          className={cn(
            "relative aspect-[4/3] overflow-hidden",
            project.thumbnailFit === "contain"
              ? "bg-[#eef1f5]"
              : "bg-[var(--color-surface-alt)]",
          )}
        >
          <Image
            src={getProjectThumbnailSrc(project)}
            alt={`${project.title} project thumbnail`}
            fill
            className={cn(
              "transition duration-700 group-hover:scale-[1.03]",
              project.thumbnailFit === "contain"
                ? "object-contain p-1"
                : "object-cover",
            )}
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="flex items-start justify-between gap-3 border-t border-black/15 pt-4">
          <div className="space-y-1.5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {project.category.join(" · ")}
            </p>
            <h3 className="text-base font-semibold text-[var(--color-foreground)]">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              {project.summary}
            </p>
          </div>
          <span className="text-sm text-[var(--color-muted)]">↗</span>
        </div>
      </Link>
    </motion.article>
  );
}
