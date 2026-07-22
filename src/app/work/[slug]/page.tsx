import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHero } from "@/components/CaseStudyHero";
import { SectionHeader } from "@/components/SectionHeader";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { siteConfig } from "@/lib/utils";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => !project.hidden)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.hidden) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.baseUrl}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [
        {
          url: getProjectThumbnailSrc(project),
          alt: `${project.title} project thumbnail`,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.hidden) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <>
      <CaseStudyHero project={project} nextProject={nextProject} />

      <section className="section-shell space-y-6 pt-0">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="surface-card space-y-4">
            <SectionHeader
              eyebrow="Project Overview"
              title="The assignment and delivery scope."
            />
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              {project.overview}
            </p>
            <div className="space-y-3 text-sm text-[var(--color-muted)]">
              {project.role ? (
                <p>
                  <span className="font-semibold text-[var(--color-foreground)]">
                    Role:
                  </span>{" "}
                  {project.role}
                </p>
              ) : null}
              <p>
                <span className="font-semibold text-[var(--color-foreground)]">
                  Deliverables:
                </span>{" "}
                {project.deliverables.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-[var(--color-foreground)]">
                  Tools:
                </span>{" "}
                {project.tools.join(", ")}
              </p>
              {project.proofLinks?.length ? (
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-[var(--color-foreground)]">
                      External Proof:
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.proofLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>

          <article className="surface-card space-y-4">
            <SectionHeader eyebrow="Overview" title="What this project had to achieve." />
            <ul className="space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-soft)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <article key={metric.label} className="surface-card space-y-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {metric.label}
              </p>
              <p className="text-base font-semibold text-[var(--color-foreground)]">
                {metric.value}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
