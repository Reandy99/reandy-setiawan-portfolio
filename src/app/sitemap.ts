import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [""].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const projectRoutes = projects
    .filter((project) => !project.hidden)
    .map((project) => ({
      url: `${siteConfig.baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
