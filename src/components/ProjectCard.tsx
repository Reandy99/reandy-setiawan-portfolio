"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const href = project.cardUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.cardUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="surface-card block overflow-hidden p-0 transition hover:border-black/12"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] rounded-b-none bg-[#ecebe7]">
          <Image
            src={getProjectThumbnailSrc(project)}
            alt={`${project.title} project thumbnail`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="flex items-start justify-between gap-3 p-4">
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {project.category.join(" · ")}
            </p>
            <h3 className="text-sm font-semibold leading-5 text-[var(--color-foreground)] md:text-base">
              {project.title}
            </h3>
            <p className="text-[11px] leading-5 text-[var(--color-muted)]">
              {project.summary}
            </p>
          </div>
          <span className="text-sm text-[var(--color-muted)] transition group-hover:text-[var(--color-foreground)]">
            ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
