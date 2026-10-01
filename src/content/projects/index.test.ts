import { describe, expect, it } from "vitest";

import { projects } from "@/content/projects";

describe("portfolio project content", () => {
  it("keeps every visible case study uniquely addressable and complete", () => {
    const visibleProjects = projects.filter((project) => !project.hidden);
    const slugs = visibleProjects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);

    for (const project of visibleProjects) {
      expect(project.title).not.toHaveLength(0);
      expect(project.summary).not.toHaveLength(0);
      expect(project.thumbnail).not.toHaveLength(0);
      expect(project.category.length).toBeGreaterThan(0);
    }
  });
});
