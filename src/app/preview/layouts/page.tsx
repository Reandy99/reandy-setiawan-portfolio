import Link from "next/link";

const layouts = [
  {
    id: "a",
    name: "Layout A — Editorial Calm",
    tag: "Current site",
    description:
      "Long-scroll editorial, cream background, white cards. Profesional & recruiter-friendly.",
    href: "/",
    previewHref: "/",
    accent: "bg-[#f5f4f0]",
    wireframe: (
      <div className="flex h-full flex-col gap-2 p-3">
        <div className="h-5 rounded bg-black/8" />
        <div className="grid flex-1 grid-cols-2 gap-2">
          <div className="space-y-2">
            <div className="h-8 w-4/5 rounded bg-black/10" />
            <div className="h-3 w-full rounded bg-black/6" />
            <div className="h-3 w-5/6 rounded bg-black/6" />
            <div className="mt-2 h-6 w-24 rounded-md bg-[#171717]" />
            <div className="grid grid-cols-2 gap-1.5 pt-2">
              <div className="h-10 rounded-lg bg-white" />
              <div className="h-10 rounded-lg bg-white" />
            </div>
          </div>
          <div className="rounded-xl bg-white" />
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-8 rounded-lg bg-white" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-14 rounded-lg bg-white" />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "b",
    name: "Layout B — Studio Immersive",
    tag: "Lusion-inspired",
    description:
      "Full-screen hero, cinematic contrast, horizontal work strip. Bold & memorable.",
    href: "/preview/layouts#b",
    previewHref: "/preview/layouts/b",
    accent: "bg-[#12141a]",
    wireframe: (
      <div className="flex h-full flex-col bg-[#12141a] p-3 text-white">
        <div className="flex items-center justify-between">
          <div className="h-4 w-10 rounded bg-white/15" />
          <div className="h-4 w-16 rounded bg-white/10" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <div className="h-3 w-20 rounded bg-white/20" />
          <div className="h-10 w-4/5 rounded bg-white/25" />
          <div className="h-3 w-3/5 rounded bg-white/12" />
          <div className="mt-2 h-6 w-20 rounded-full bg-[#ff6d5a]" />
        </div>
        <div className="flex gap-2 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-16 min-w-[38%] rounded-lg bg-white/10" />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "c",
    name: "Layout C — Recruiter Fast-Scan",
    tag: "Work-first",
    description:
      "Portfolio langsung di atas fold. Grid besar, copy minimal, CTA CV menonjol.",
    href: "/preview/layouts#c",
    previewHref: "/preview/layouts/c",
    accent: "bg-[#eef0f3]",
    wireframe: (
      <div className="flex h-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 rounded bg-black/8" />
          <div className="h-6 w-20 rounded-md bg-[#171717]" />
        </div>
        <div className="h-3 w-2/3 rounded bg-black/6" />
        <div className="grid flex-1 grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-xl bg-white">
              <div className="m-2 aspect-[4/3] rounded-lg bg-black/8" />
              <div className="mx-2 mb-2 h-2 w-3/4 rounded bg-black/8" />
            </div>
          ))}
        </div>
        <div className="h-10 rounded-lg bg-white" />
      </div>
    ),
  },
] as const;

export default function LayoutPreviewPage() {
  return (
    <div className="min-h-screen bg-[#eceae4] px-4 py-10 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <Link
            href="/"
            className="text-xs text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
          >
            ← Back to site
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Layout Preview
          </p>
          <h1 className="font-serif text-3xl text-[var(--color-foreground)] md:text-4xl">
            3 opsi layout — lihat & bandingkan
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            <strong className="font-medium text-[var(--color-foreground)]">
              Layout A
            </strong>{" "}
            adalah website kamu sekarang di{" "}
            <Link href="/" className="underline underline-offset-2">
              localhost:3000
            </Link>
            . Layout B & C di bawah ini wireframe preview — belum diimplementasi
            penuh.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {layouts.map((layout) => (
            <article
              key={layout.id}
              id={layout.id}
              className="overflow-hidden rounded-[22px] border bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className={`aspect-[4/5] border-b ${layout.accent}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                {layout.wireframe}
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {layout.tag}
                  </p>
                  {layout.id === "a" ? (
                    <span className="rounded-full bg-[#171717] px-2 py-1 text-[10px] font-semibold text-white">
                      LIVE
                    </span>
                  ) : null}
                </div>
                <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {layout.name}
                </h2>
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  {layout.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {layout.id === "a" ? (
                    <Link href={layout.previewHref} className="button-primary">
                      Lihat live
                    </Link>
                  ) : (
                    <Link href={layout.previewHref} className="button-secondary">
                      Lihat mockup
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
