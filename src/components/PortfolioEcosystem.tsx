"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { useMotionPrefs } from "@/lib/motion";
import { cn, externalPortfolios } from "@/lib/utils";

const accentStyles = {
  violet: {
    frame: "from-[rgba(139,92,246,0.28)] via-transparent to-transparent",
    chip: "border-[rgba(167,139,250,0.35)] text-[var(--color-accent-soft)]",
  },
  warm: {
    frame: "from-[rgba(244,241,234,0.18)] via-transparent to-transparent",
    chip: "border-white/16 text-[var(--color-foreground)]",
  },
  blue: {
    frame: "from-[rgba(56,189,248,0.24)] via-transparent to-transparent",
    chip: "border-[rgba(56,189,248,0.35)] text-[var(--color-workflow)]",
  },
  workflow: {
    frame: "from-[rgba(56,189,248,0.28)] via-transparent to-transparent",
    chip: "border-[rgba(56,189,248,0.35)] text-[var(--color-workflow)]",
  },
} as const;

const ecosystemProjects = projects.filter((project) => project.ecosystemOnly);

export function PortfolioEcosystem() {
  const { fadeUp, transition } = useMotionPrefs();
  let index = 0;

  return (
    <section id="ecosystem" className="section-shell space-y-8">
      <SectionHeader
        eyebrow="Portfolio Ecosystem"
        title="Portfolio Ecosystem"
        description="Production brands, photography platforms, and AI-assisted workflow systems."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {externalPortfolios.map((portfolio) => {
          const accent = accentStyles[portfolio.accent];
          const cardIndex = index++;

          return (
            <motion.a
              key={portfolio.href}
              href={portfolio.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={transition(cardIndex * 0.05)}
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/9 bg-[var(--color-surface)] transition hover:border-white/16"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#121218]">
                <div
                  className={cn(
                    "absolute inset-0 z-10 bg-gradient-to-br opacity-90",
                    accent.frame,
                  )}
                />
                <Image
                  src={portfolio.image}
                  alt={`${portfolio.title} website cover`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <p className={cn("chip", accent.chip)}>Visit Portfolio</p>
                    <h3 className="text-lg font-semibold leading-6 text-[var(--color-foreground)]">
                      {portfolio.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="text-sm text-[var(--color-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-foreground)]"
                  >
                    ↗
                  </span>
                </div>
                <p className="line-clamp-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {portfolio.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {portfolio.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          );
        })}

        {ecosystemProjects.map((project) => {
          const accent = accentStyles.workflow;
          const cardIndex = index++;
          const externalHref = project.cardUrl ?? project.proofLinks?.[0]?.href;

          return (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={transition(cardIndex * 0.05)}
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/9 bg-[var(--color-surface)] transition hover:border-white/16"
            >
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Open ${project.title} proof`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#121218]">
                  <div
                    className={cn(
                      "absolute inset-0 z-10 bg-gradient-to-br opacity-90",
                      accent.frame,
                    )}
                  />
                  <Image
                    src={getProjectThumbnailSrc(project)}
                    alt={`${project.title} workflow preview`}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col space-y-3 p-4">
                <div className="space-y-2">
                  <p className={cn("chip", accent.chip)}>AI Workflow</p>
                  <h3 className="text-lg font-semibold leading-6 text-[var(--color-foreground)]">
                    {project.title}
                  </h3>
                </div>
                <p className="line-clamp-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {project.summary}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {["Content repurposing", "n8n", "Workflow automation"].map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href={`/work/${project.slug}`} className="text-link text-xs">
                    View case study
                  </Link>
                  {externalHref ? (
                    <a
                      href={externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link text-xs"
                    >
                      View proof
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
