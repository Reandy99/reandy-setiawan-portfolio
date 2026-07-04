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
    <div className="space-y-5">
      <div
        className="flex flex-wrap gap-2"
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
            className={`rounded-md border px-3 py-2 text-[11px] font-medium transition ${
              activeFilter === filter
                ? "border-black/12 bg-[var(--color-foreground)] text-white"
                : "border-black/8 bg-white text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
