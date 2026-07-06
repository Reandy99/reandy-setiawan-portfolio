import { ContactSection } from "@/components/ContactSection";
import {
  EditorialCapabilityList,
  EditorialProjectStack,
  EditorialStatStrip,
} from "@/components/EditorialSections";
import { ResumeSection } from "@/components/ResumeSection";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutCopy, capabilityCards, stats, toolTags } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { WorkGrid } from "@/components/WorkGrid";
import { projects } from "@/data/projects";
import { externalPortfolios, siteConfig } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 4);
  const visibleProjects = projects.filter((project) => !project.hidden);
  const heroLinks = [
    { href: "/#selected-work", label: "Curated Work" },
    { href: "/#work", label: "All Work" },
    { href: "/#resume", label: "Resume" },
  ] as const;

  return (
    <>
      <section className="section-shell pt-8 sm:pt-10 md:pt-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.08fr_0.92fr] md:gap-8 lg:gap-10">
          <div className="flex max-w-2xl flex-col gap-6 sm:gap-7">
            <div className="space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-[11px] sm:tracking-[0.28em]">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-[var(--color-muted)] sm:text-sm">
                  {siteConfig.heroMeta}
                </p>
              </div>
              <h1 className="text-balance font-serif text-[2rem] leading-[1.06] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl md:text-[2.85rem] lg:text-[3.15rem]">
                {siteConfig.heroHeadline}
              </h1>
              <div className="space-y-3 text-sm leading-6 text-[var(--color-muted)] sm:leading-7 md:text-[15px]">
                <p>{siteConfig.heroSubhead}</p>
                <p className="text-[var(--color-foreground)]">{siteConfig.openFor}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Link href="/#selected-work" className="button-primary">
                  View Selected Work
                </Link>
                <a href={siteConfig.cvPath} download className="button-secondary">
                  Download CV
                </a>
              </div>

              <nav
                aria-label="Quick links"
                className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--color-muted)] sm:text-[13px]"
              >
                <span className="font-medium uppercase tracking-[0.16em]">
                  Explore
                </span>
                {heroLinks.map((item, index) => (
                  <span key={item.href} className="inline-flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">·</span> : null}
                    <Link
                      href={item.href}
                      className="font-medium text-[var(--color-foreground)] underline decoration-black/10 underline-offset-4 transition hover:decoration-black/30"
                    >
                      {item.label}
                    </Link>
                  </span>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:sticky md:top-24">
            <div
              className="overflow-hidden rounded-[22px] border bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="relative aspect-[5/6] overflow-hidden bg-[#ecebe7] sm:aspect-[4/5]">
                <Image
                  src={siteConfig.profileImage}
                  alt="Portrait of Reandy Setiawan"
                  fill
                  className="object-cover object-[center_12%]"
                  sizes="(min-width: 768px) 32vw, 88vw"
                  priority
                />
              </div>
              <div
                className="grid grid-cols-2 divide-x border-t text-sm"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="space-y-1 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Based In
                  </p>
                  <p className="font-medium text-[var(--color-foreground)]">
                    {siteConfig.location}
                  </p>
                </div>
                <div className="space-y-1 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Availability
                  </p>
                  <p className="font-medium text-[var(--color-foreground)]">
                    {siteConfig.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <EditorialStatStrip items={stats} compact />
        </div>

        <div className="mt-5 space-y-3 md:mt-6 md:space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Other Portfolios
            </p>
            <h2 className="text-balance font-serif text-[1.55rem] text-[var(--color-foreground)] sm:text-[1.85rem] md:text-[2.2rem]">
              More of my work across corporate and photography websites.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {externalPortfolios.map((portfolio) => (
              <a
                key={portfolio.href}
                href={portfolio.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[22px] border bg-white transition hover:border-black/12"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ecebe7]">
                  <Image
                    src={portfolio.image}
                    alt={`${portfolio.title} website cover`}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
                <div className="space-y-3 p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        External Portfolio
                      </p>
                      <h3 className="text-lg font-semibold text-[var(--color-foreground)] md:text-xl">
                        {portfolio.title}
                      </h3>
                    </div>
                    <span className="text-sm text-[var(--color-muted)] transition group-hover:text-[var(--color-foreground)]">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">
                    {portfolio.description}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{portfolio.href}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="section-shell space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Selected Work"
              title="A tighter portfolio selection for quick review."
              description="This section stays curated and compact so the first scan already shows range, clarity, and visual consistency."
            />
            <Link href="/#work" className="button-secondary">
              View All Work
            </Link>
          </div>
          <EditorialProjectStack projects={selectedProjects} />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article
            className="rounded-[22px] border bg-white p-5 sm:p-6 md:p-7"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="space-y-4">
              <SectionHeader
                eyebrow="About"
                title="A recruiter-friendly read on strategy, craft, and reliability."
                description={aboutCopy}
              />
              <div className="flex flex-wrap gap-2 pt-3">
                {toolTags.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-black/8 bg-[#f6f5f2] px-3 py-2 text-sm text-[var(--color-foreground)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="border-t border-black/6 pt-4 text-sm leading-7 text-[var(--color-muted)]">
                I work best with teams that need visual quality, calm execution,
                and content systems that can scale without becoming noisy.
              </p>
            </div>
          </article>
          <EditorialCapabilityList items={capabilityCards} />
        </div>
      </section>

      <section id="work" className="section-shell space-y-6">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader
            eyebrow="Work"
            title="A structured archive across video, photography, campaign, and workflow projects."
            description="The archive stays filterable and easy to scan, with a denser panel treatment that is closer to the reference UI language."
          />
          <p className="hidden max-w-xl text-sm leading-7 text-[var(--color-muted)] lg:block lg:justify-self-end lg:text-right">
            The layout is still long-scroll, but the cards, spacing, and panel framing
            are tighter so the browsing behavior feels closer to the provided desktop reference.
          </p>
        </div>
        <div
          className="rounded-[22px] border bg-[var(--color-surface-alt)] p-4 md:p-5"
          style={{ borderColor: "var(--color-border)" }}
        >
          <WorkGrid projects={visibleProjects} />
        </div>
      </section>

      <section id="resume" className="section-shell space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="Background shown with the same calm tone."
            description="This section keeps the resume clear and compact so it feels integrated, not bolted on."
          />
          <a href={siteConfig.cvPath} download className="button-primary">
            Download Full CV
          </a>
        </div>
        <ResumeSection />
      </section>

      <ContactSection
        title="Contact"
        subtitle="A simple close for teams who value craft, calm, and clear execution."
      />
    </>
  );
}
