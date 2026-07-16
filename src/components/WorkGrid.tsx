"use client";

import { useMemo, useState } from "react";

import type { Project } from "@/data/projects";
import { workFilters, type WorkFilter } from "@/data/skills";

import { ProjectCard } from "./ProjectCard";

type WorkGridProps = {
  projects: Project[];
};

function matchesFilter(project: Project, filter: WorkFilter) {
  if (filter === "All") {
    return true;
  }

  return project.category.includes(filter);
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [projects, activeFilter],
  );

  return (
    <div className="space-y-8">
      <div
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Project filters"
      >
        {workFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded-xl border px-4 py-2 text-xs font-medium transition sm:shrink ${
              activeFilter === filter
                ? "border-transparent bg-[var(--color-foreground)] text-white"
                : "border-black/10 bg-white/70 text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
