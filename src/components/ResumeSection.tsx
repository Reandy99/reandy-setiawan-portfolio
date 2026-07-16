import {
  certifications,
  education,
  resumeExperience,
  resumeSkills,
} from "@/data/experience";

export function ResumeSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Experience
          </p>
          <h3 className="display-title text-3xl text-[var(--color-accent)]">
            Professional background
          </h3>
        </div>
        <div className="divide-y divide-black/15 border-y border-black/15">
          {resumeExperience.map((item) => (
            <article
              key={`${item.period}-${item.company}`}
              className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.period}
              </p>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-[var(--color-foreground)]">
                  {item.company}
                </h4>
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
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Skills
          </p>
          <h3 className="display-title text-3xl text-[var(--color-accent)]">
            Core capabilities
          </h3>
          <ul className="space-y-2 text-sm leading-6 text-[var(--color-muted)]">
            {resumeSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-t border-black/15 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Certifications
          </p>
          <h3 className="display-title text-3xl text-[var(--color-accent)]">
            Training
          </h3>
          {certifications.map((item) => (
            <article key={`${item.title}-${item.date}`} className="space-y-1">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.date}
              </p>
              <h4 className="text-base font-semibold text-[var(--color-foreground)]">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--color-muted)]">{item.issuer}</p>
            </article>
          ))}
        </section>

        <section className="space-y-4 border-t border-black/15 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Education
          </p>
          <h3 className="display-title text-3xl text-[var(--color-accent)]">
            Academic
          </h3>
          {education.map((item) => (
            <article key={item.school} className="space-y-1">
              <h4 className="text-base font-semibold text-[var(--color-foreground)]">
                {item.school}
              </h4>
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
