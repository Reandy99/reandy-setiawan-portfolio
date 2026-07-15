import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/AnimatedText";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ResumeSection } from "@/components/ResumeSection";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";
import { aboutCopy, capabilityCards, stats, toolTags } from "@/data/experience";
import { featuredProjects, projects } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { externalPortfolios, siteConfig } from "@/lib/utils";

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 4);
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <>
      <Hero />

      <section className="section-shell !pt-10 !pb-8 md:!pt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-black/8 py-8 md:grid-cols-4 md:py-10">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06} y={20} blur>
              <div className="space-y-1">
                <p className="display-title text-3xl text-[var(--color-foreground)] md:text-[2.75rem]">
                  {item.value}
                </p>
                <p className="text-sm text-[var(--color-muted)]">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="selected-work" className="section-shell !pt-8">
        <div className="space-y-10 md:space-y-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow="Selected Work"
                title="A focused set of projects that show craft and systems thinking."
                description="Quick scan of range across production, campaigns, and AI-assisted workflows."
              />
              <Reveal delay={0.15} y={16} className="shrink-0 self-start md:self-auto">
                <Link href="/#work" className="button-secondary">
                  View All Work
                </Link>
              </Reveal>
            </div>

          <div className="space-y-0 divide-y divide-black/8 border-y border-black/8">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article className="group grid gap-5 py-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10 md:py-9">
                  <Link
                    href={`/work/${project.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--color-surface-alt)]"
                  >
                    <Image
                      src={getProjectThumbnailSrc(project)}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 40vw, 100vw"
                    />
                  </Link>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {String(index + 1).padStart(2, "0")} · {project.category.join(" · ")}
                    </p>
                    <h3 className="headline-title text-2xl text-[var(--color-foreground)] md:text-[2rem]">
                      <Link
                        href={`/work/${project.slug}`}
                        className="transition hover:opacity-70"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-[15px]">
                      {project.summary}
                    </p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex text-sm font-medium text-[var(--color-foreground)] underline decoration-black/15 underline-offset-4 transition hover:decoration-black/40"
                    >
                      Open case study
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="About"
              title="Strategy, craft, and reliable delivery."
              description={aboutCopy}
            />
            <Reveal delay={0.15} blur>
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                {siteConfig.openFor}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-3 gap-y-2 pt-1 text-sm text-[var(--color-muted)]">
                {toolTags.slice(0, 8).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {capabilityCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="space-y-3 border-t border-black/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="headline-title text-lg text-[var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell !pt-4">
        <div className="mb-8 space-y-3">
          <Reveal y={12}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Other Portfolios
            </p>
          </Reveal>
          <AnimatedText
            text="More work across brands and platforms."
            as="h2"
            mode="words"
            animateOnView
            className="display-title text-balance text-[clamp(1.85rem,4vw,2.75rem)] text-[var(--color-foreground)]"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {externalPortfolios.map((portfolio, index) => (
            <Reveal key={portfolio.href} delay={index * 0.06}>
              <a
                href={portfolio.href}
                target="_blank"
                rel="noreferrer"
                className="group block space-y-4"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[var(--color-surface-alt)]">
                  <Image
                    src={portfolio.image}
                    alt={`${portfolio.title} website cover`}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                      {portfolio.title}
                    </h3>
                    <span className="text-[var(--color-muted)] transition group-hover:text-[var(--color-foreground)]">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">
                    {portfolio.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell">
        <div className="mb-8 max-w-2xl">
          <SectionHeader
            eyebrow="Work Archive"
            title="Projects across video, photography, campaigns, and workflows."
            description="Filter by type and open any project for the full case study."
          />
        </div>
        <WorkGrid projects={visibleProjects} />
      </section>

      <section id="resume" className="section-shell">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="Background in a calm, readable layout."
            description="Experience, skills, and education — ready for a quick review."
          />
          <Reveal delay={0.12} y={14} className="shrink-0 self-start">
            <a href={siteConfig.cvPath} download className="button-primary">
              Download Full CV
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <ResumeSection />
        </Reveal>
      </section>

      <ContactSection
        title="Contact"
        subtitle="Open for creative marketing, content operations, and visual production roles."
      />
    </>
  );
}
