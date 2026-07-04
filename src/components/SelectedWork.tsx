"use client";

import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function SelectedWork() {
  const selected = featuredProjects.slice(0, 4);

  return (
    <section id="selected-work" className="section-shell space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Selected Work"
          title="A focused selection of portfolio work."
        />
        <Link href="/#work" className="button-secondary">
          Jump to Full Work
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {selected.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
