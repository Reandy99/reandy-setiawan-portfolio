"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { cn } from "@/lib/utils";

type StatItem = {
  value: string;
  label: string;
};

type CapabilityItem = {
  title: string;
  description: string;
};

type EditorialStatStripProps = {
  items: readonly StatItem[];
  compact?: boolean;
};

type EditorialCapabilityListProps = {
  items: readonly CapabilityItem[];
  compact?: boolean;
};

type EditorialProjectStackProps = {
  projects: Project[];
  showImages?: boolean;
};

type EditorialCaseStudyCardProps = {
  project: Project;
  accent?: "soft" | "strong";
};

export function EditorialStatStrip({
  items,
  compact = false,
}: EditorialStatStripProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-4", !compact && "md:grid-cols-2 xl:grid-cols-4")}>
      {items.map((item, index) => (
        <motion.article
          key={item.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.32, delay: index * 0.04 }}
          className={cn(
            "rounded-[20px] border bg-white px-4 py-4 sm:rounded-[26px] sm:px-5 sm:py-5",
            compact ? "space-y-1.5" : "space-y-2.5",
          )}
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className={cn(
              "font-semibold text-[var(--color-foreground)]",
              compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl",
            )}
          >
            {item.value}
          </p>
          <p className="text-sm text-[var(--color-muted)]">{item.label}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function EditorialCapabilityList({
  items,
  compact = false,
}: EditorialCapabilityListProps) {
  return (
    <div className={cn("grid gap-4", compact ? "md:grid-cols-2" : "lg:grid-cols-2")}>
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.32, delay: index * 0.04 }}
          className="rounded-[26px] border bg-white px-5 py-5"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="space-y-2.5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
              {item.title}
            </h3>
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              {item.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function EditorialProjectStack({
  projects,
  showImages = false,
}: EditorialProjectStackProps) {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.34, delay: index * 0.04 }}
        >
          <div
            className={cn(
              "group grid gap-4 rounded-[18px] border bg-white p-3.5 transition hover:border-black/12 sm:rounded-[20px] sm:p-4",
              showImages ? "lg:grid-cols-[0.9fr_1.1fr]" : "sm:grid-cols-[0.2fr_1fr]",
            )}
            style={{ borderColor: "var(--color-border)" }}
          >
            {showImages ? (
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#ecebe7]">
                  <Image
                    src={getProjectThumbnailSrc(project)}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
              </Link>
            ) : (
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
            )}
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0 space-y-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {project.category.join(" · ")}
                </p>
                <h3 className="text-base font-semibold text-[var(--color-foreground)] sm:text-lg md:text-xl">
                  <a
                    href={project.videoUrl ?? `/work/${project.slug}`}
                    target={project.videoUrl ? "_blank" : undefined}
                    rel={project.videoUrl ? "noreferrer" : undefined}
                    className="transition hover:opacity-70"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="max-w-2xl text-xs leading-6 text-[var(--color-muted)] md:text-sm">
                  {project.summary}
                </p>
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
                aria-label={`Open ${project.title} case study`}
              >
                ↗
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function EditorialCaseStudyCard({
  project,
  accent = "soft",
}: EditorialCaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.36 }}
      className={cn(
        "grid gap-5 overflow-hidden rounded-[22px] border p-4 lg:grid-cols-[1fr_1fr]",
        accent === "strong" ? "bg-[var(--color-surface-alt)]" : "bg-white",
      )}
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#ecebe7]">
        <Image
          src={getProjectThumbnailSrc(project)}
          alt={`${project.title} case study`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 p-2">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Featured Case Study
          </p>
          <h3 className="text-balance font-serif text-[1.55rem] leading-tight text-[var(--color-foreground)] sm:text-[1.9rem] md:text-[2.25rem]">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            {project.overview}
          </p>
          <ul className="space-y-2 text-xs leading-6 text-[var(--color-muted)] md:text-sm">
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-foreground)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[12px] border bg-white px-3 py-3"
                style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--color-foreground)] md:text-sm">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={`/work/${project.slug}`} className="button-primary">
              Open Full Case Study
            </Link>
            {project.videoUrl ? (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Preview Video
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
