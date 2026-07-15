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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title text-balance text-[1.85rem] text-[var(--color-foreground)] sm:text-[2.15rem] md:text-[2.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
