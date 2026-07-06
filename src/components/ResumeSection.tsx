import {
  certifications,
  education,
  resumeExperience,
  resumeSkills,
} from "@/data/experience";

export function ResumeSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="surface-card space-y-5">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Experience
          </p>
          <h2 className="font-serif text-[1.85rem] text-[var(--color-foreground)]">
            Professional background
          </h2>
        </div>
        <div className="space-y-5">
          {resumeExperience.map((item) => (
            <article
              key={`${item.period}-${item.company}`}
              className="grid gap-1.5 border-t border-black/6 pt-4 first:border-t-0 first:pt-0"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.period}
              </p>
              <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                {item.company}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{item.title}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <section className="surface-card space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Skills
            </p>
            <h2 className="font-serif text-[1.85rem] text-[var(--color-foreground)]">
              Core capabilities
            </h2>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-[var(--color-muted)]">
            {resumeSkills.map((skill) => (
              <li
                key={skill}
                className="flex gap-2"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-foreground)]" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Certifications
            </p>
            <h2 className="font-serif text-[1.85rem] text-[var(--color-foreground)]">
              Professional training
            </h2>
          </div>
          {certifications.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="space-y-1.5 border-t border-black/6 pt-4 first:border-t-0 first:pt-0"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {item.date}
              </p>
              <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                {item.issuer}
              </p>
            </article>
          ))}
        </section>

        <section className="surface-card space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Education
            </p>
            <h2 className="font-serif text-[1.85rem] text-[var(--color-foreground)]">
              Academic background
            </h2>
          </div>
          {education.map((item) => (
            <article key={item.school} className="space-y-1.5">
              <h3 className="text-base font-semibold text-[var(--color-foreground)]">
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
