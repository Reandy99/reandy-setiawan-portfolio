type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl space-y-3 text-center"
          : "max-w-3xl space-y-3"
      }
    >
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[1.85rem] leading-tight text-[var(--color-foreground)] md:text-[2.2rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
