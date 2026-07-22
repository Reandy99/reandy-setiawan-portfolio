"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import type { Project } from "@/data/projects";
import { workFilters, type WorkFilter } from "@/data/skills";
import { useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SelectedWorkProps = {
  projects: Project[];
};

function matchesFilter(project: Project, filter: WorkFilter) {
  if (filter === "All") {
    return true;
  }

  return project.category.includes(filter);
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");
  const { prefersReducedMotion } = useMotionPrefs();

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [projects, activeFilter],
  );

  return (
    <section id="selected-work" className="section-shell space-y-8">
      <SectionHeader
        eyebrow="Selected Work"
        title="Selected Work"
        description="A focused selection across corporate video, photography, campaigns, and AI-assisted creative workflows."
      />

      <div
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Project filters"
      >
        {workFilters.map((filter) => {
          const selected = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 py-2 text-[11px] font-medium transition sm:shrink",
                selected
                  ? "border-[rgba(167,139,250,0.45)] bg-[rgba(139,92,246,0.18)] text-[var(--color-foreground)]"
                  : "border-white/9 bg-transparent text-[var(--color-muted)] hover:border-white/16 hover:text-[var(--color-foreground)]",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.p
              key="empty"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-[18px] border border-white/9 bg-[var(--color-surface)] px-5 py-8 text-sm text-[var(--color-muted)]"
            >
              No projects in this category yet.
            </motion.p>
          ) : (
            <motion.div
              key={activeFilter}
              layout
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
