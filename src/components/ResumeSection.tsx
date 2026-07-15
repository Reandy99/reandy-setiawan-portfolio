import {
  certifications,
  education,
  resumeExperience,
  resumeSkills,
} from "@/data/experience";

export function ResumeSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Experience
          </p>
          <h2 className="display-title text-2xl text-[var(--color-foreground)] sm:text-3xl">
            Professional background
          </h2>
        </div>
        <div className="space-y-0 divide-y divide-black/8 border-y border-black/8">
          {resumeExperience.map((item) => (
            <article
              key={`${item.period}-${item.company}`}
              className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.period}
              </p>
              <div className="space-y-1">
                <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                  {item.company}
                </h3>
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <section className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Skills
            </p>
            <h2 className="display-title text-2xl text-[var(--color-foreground)]">
              Core capabilities
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
            {resumeSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-t border-black/8 pt-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Certifications
            </p>
            <h2 className="display-title text-2xl text-[var(--color-foreground)]">
              Professional training
            </h2>
          </div>
          {certifications.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="space-y-1 border-t border-black/6 pt-4 first:border-t-0 first:pt-0"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.date}
              </p>
              <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                {item.issuer}
              </p>
            </article>
          ))}
        </section>

        <section className="space-y-4 border-t border-black/8 pt-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Education
            </p>
            <h2 className="display-title text-2xl text-[var(--color-foreground)]">
              Academic background
            </h2>
          </div>
          {education.map((item) => (
            <article key={item.school} className="space-y-1">
              <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                {item.school}
              </h3>
              <p className="whitespace-pre-line text-sm leading-6 text-[var(--color-muted)]">
                {item.field}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
