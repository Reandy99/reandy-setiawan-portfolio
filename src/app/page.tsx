"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/AnimatedText";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ResumeSection } from "@/components/ResumeSection";
import { aboutCopy, capabilityCards, toolTags } from "@/data/experience";
import { featuredProjects, projects } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { externalPortfolios, siteConfig } from "@/lib/utils";

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 4);
  const visibleProjects = projects.filter((project) => !project.hidden).slice(0, 6);

  return (
    <>
      <Hero />

      <section id="about" className="nv-section">
        <div className="mx-auto max-w-[1400px]">
          <AnimatedText
            text="Craft x Systems"
            as="h2"
            mode="words"
            animateOnView
            className="display-title mb-10 max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] text-[var(--color-accent)]"
          />

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <Reveal blur>
              <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-9">
                {siteConfig.heroSubhead}
              </p>
            </Reveal>
            <Reveal delay={0.08} blur>
              <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-9">
                {aboutCopy} {siteConfig.openFor}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="nv-section !pt-4">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className="space-y-4 border-t border-black/15 pt-6">
              <p className="display-title text-[clamp(3rem,10vw,7rem)] text-[var(--color-accent)]">
                Base
              </p>
              <p className="pill w-fit">Jakarta, Indonesia</p>
              <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                Based in Jakarta with a decade of hands-on production across
                photography, video, and campaign work for schools, brands, and
                corporate clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 border-t border-black/15 pt-6">
              <p className="display-title text-[clamp(3rem,10vw,7rem)] text-[var(--color-accent)]">
                Reach
              </p>
              <p className="pill w-fit">Remote & APAC roles</p>
              <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                Open to creative marketing, content operations, and visual
                production roles — building workflows that turn one shoot into
                weeks of content.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="nv-section bg-[var(--color-accent)] text-[#e3e3df]">
        <div className="mx-auto max-w-[1400px] space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="Track record"
              as="h2"
              mode="words"
              animateOnView
              className="display-title text-[clamp(2.8rem,8vw,5.5rem)] text-[#e3e3df]"
            />
            <p className="max-w-md text-sm leading-7 text-[#e3e3df]/75">
              Selected productions and systems across video, photography,
              campaigns, and AI-assisted workflows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block overflow-hidden border border-white/15 transition hover:border-white/35"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                    <Image
                      src={getProjectThumbnailSrc(project)}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#e3e3df]/55">
                      {String(index + 1).padStart(2, "0")} · {project.category.join(" · ")}
                    </p>
                    <h3 className="display-title text-2xl text-[#e3e3df] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#e3e3df]/7">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 border-t border-white/15 pt-8 md:grid-cols-3">
            {visibleProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="block border border-white/10 p-4 transition hover:border-white/30"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#e3e3df]/5">
                    {project.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#e3e3df]">
                    {project.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="nv-section">
        <div className="mx-auto max-w-[1400px]">
          <AnimatedText
            text="More portfolios"
            as="h2"
            mode="words"
            animateOnView
            className="display-title mb-8 text-[clamp(2.4rem,7vw,4.5rem)] text-[var(--color-accent)]"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {externalPortfolios.map((portfolio, index) => (
              <Reveal key={portfolio.href} delay={index * 0.05}>
                <a
                  href={portfolio.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block space-y-4"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[var(--color-surface-alt)]">
                    <Image
                      src={portfolio.image}
                      alt={`${portfolio.title} website cover`}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 border-t border-black/15 pt-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                        {portfolio.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                        {portfolio.description}
                      </p>
                    </div>
                    <span aria-hidden>↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="expertises" className="nv-section !pt-8">
        <div className="mx-auto max-w-[1400px] space-y-10">
          <AnimatedText
            text="Your content x 10?"
            as="h2"
            mode="words"
            animateOnView
            className="display-title max-w-4xl text-[clamp(2.6rem,8vw,5.5rem)] text-[var(--color-accent)]"
          />

          <div className="flex flex-wrap gap-2">
            {capabilityCards.map((item) => (
              <span key={item.title} className="pill">
                {item.title}
              </span>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg">
                I collaborate with teams that need visual quality, calm execution,
                and content systems that scale without becoming noisy.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-2">
                {toolTags.map((tool) => (
                  <span key={tool} className="pill !border-black/15 !text-[11px]">
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="space-y-3 border-t border-black/15 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
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

      <section id="resume" className="nv-section !pt-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="Resume"
              as="h2"
              mode="words"
              animateOnView
              className="display-title text-[clamp(2.8rem,8vw,5rem)] text-[var(--color-accent)]"
            />
            <a href={siteConfig.cvPath} download className="pill-solid self-start">
              Download Full CV
            </a>
          </div>
          <ResumeSection />
        </div>
      </section>

      <ContactSection
        title="Contact"
        subtitle="Let's build something sharp together."
      />
    </>
  );
}
