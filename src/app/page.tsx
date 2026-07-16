"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/AnimatedText";
import { ContactSection } from "@/components/ContactSection";
import { ExpertisesSection } from "@/components/ExpertisesSection";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ResumeSection } from "@/components/ResumeSection";
import { TrackRecordSection } from "@/components/TrackRecordSection";
import { aboutCopy } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { getProjectThumbnailSrc } from "@/lib/project-media";
import { externalPortfolios, siteConfig } from "@/lib/utils";

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 4);

  return (
    <>
      <Hero />

      <section id="about" className="nv-section">
        <div className="nv-container">
          <AnimatedText
            text="Craft x prodUction"
            as="h2"
            mode="words"
            animateOnView
            className="display-title mb-12 max-w-5xl text-[clamp(3.2rem,10vw,8rem)] text-[var(--color-foreground)]"
          />

          <div className="grid gap-8 md:grid-cols-2 md:gap-20">
            <Reveal blur>
              <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-9">
                {siteConfig.heroSubhead}
              </p>
            </Reveal>
            <Reveal delay={0.08} blur>
              <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-9">
                {aboutCopy}
                <br />
                <br />
                {siteConfig.openFor}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="nv-section !pt-0">
        <div className="nv-container grid gap-12 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div className="space-y-5">
              <AnimatedText
                text="Base"
                as="h2"
                mode="chars"
                animateOnView
                className="display-title text-[clamp(4rem,12vw,9rem)] text-[var(--color-foreground)]"
              />
              <p className="pill w-fit">Jakarta, Indonesia →</p>
              <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                Based in Jakarta with a decade of hands-on production across
                photography, video, and campaign work for schools, brands, and
                corporate clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5">
              <AnimatedText
                text="Reach"
                as="h2"
                mode="chars"
                animateOnView
                className="display-title text-[clamp(4rem,12vw,9rem)] text-[var(--color-foreground)]"
              />
              <p className="pill w-fit">Remote & on the go →</p>
              <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                Work happens everywhere — open to creative marketing, content
                operations, and visual production roles across APAC and remote
                teams.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <TrackRecordSection />

      <section className="nv-section bg-black">
        <div className="nv-container space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="Selected work"
              as="h2"
              mode="words"
              animateOnView
              className="display-title text-[clamp(2.8rem,8vw,5.5rem)] text-[var(--color-accent-soft)]"
            />
            <p className="max-w-md text-sm leading-7 text-[#e3e3df]/65">
              Productions across video, photography, campaigns, and systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block border border-white/10 transition hover:border-[var(--color-accent-soft)]/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <Image
                      src={getProjectThumbnailSrc(project)}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-soft)]/60">
                      {String(index + 1).padStart(2, "0")} · {project.category.join(" · ")}
                    </p>
                    <h3 className="display-title text-3xl text-[var(--color-accent-soft)] md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#e3e3df]/65">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ExpertisesSection />

      <section className="nv-section">
        <div className="nv-container">
          <AnimatedText
            text="More portfolios"
            as="h2"
            mode="words"
            animateOnView
            className="display-title mb-8 text-[clamp(2.6rem,8vw,5rem)] text-[var(--color-foreground)]"
          />
          <div className="grid gap-8 md:grid-cols-3">
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

      <section id="resume" className="nv-section !pt-8">
        <div className="nv-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <AnimatedText
              text="Resume"
              as="h2"
              mode="words"
              animateOnView
              className="display-title text-[clamp(3rem,9vw,6rem)] text-[var(--color-foreground)]"
            />
            <a href={siteConfig.cvPath} download className="pill-solid self-start">
              Download Full CV
            </a>
          </div>
          <ResumeSection />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
