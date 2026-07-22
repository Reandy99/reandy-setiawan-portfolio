import Link from "next/link";

const options = [
  {
    id: "d",
    name: "D — Cinematic light streaks",
    href: "/preview/background/d",
    recommendation: "New · Graphic elements",
    description:
      "Diagonal light cuts, floating dust particles, and film-gate corner marks.",
  },
  {
    id: "e",
    name: "E — Floating photo frames",
    href: "/preview/background/e",
    recommendation: "New · Graphic elements",
    description:
      "Ghost portfolio frames, soft bokeh orbs, and studio corner brackets.",
  },
  {
    id: "f",
    name: "F — Constellation + monogram",
    href: "/preview/background/f",
    recommendation: "New · Graphic elements",
    description:
      "Connected workflow nodes, animated lines, and a large RS watermark.",
  },
  {
    id: "a",
    name: "A — Soft atmospheric washes",
    href: "/preview/background/a",
    recommendation: "Earlier · Atmosphere only",
    description: "Drifting violet/cyan light fields + grain.",
  },
  {
    id: "b",
    name: "B — Film grid / hairline mesh",
    href: "/preview/background/b",
    recommendation: "Earlier · Atmosphere only",
    description: "Slow-scrolling grid over the dark base.",
  },
  {
    id: "c",
    name: "C — Section banding",
    href: "/preview/background/c",
    recommendation: "Earlier · Atmosphere only",
    description: "Depth bands with breathing vignette.",
  },
] as const;

export default function BackgroundPreviewIndexPage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-[#f4f1ea]">
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        <div className="space-y-3">
          <Link href="/" className="text-sm text-[#a4a4b0] underline-offset-4 hover:text-[#f4f1ea]">
            ← Back to site
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a4a4b0]">
            Background Preview · Visual Elements
          </p>
          <h1 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
            Backgrounds with graphic elements
          </h1>
          <p className="max-w-xl text-sm leading-7 text-[#a4a4b0]">
            Start with D / E / F — these have clear visual shapes, not just soft glow.
          </p>
        </div>

        <ul className="space-y-4">
          {options.map((option) => (
            <li key={option.id}>
              <Link
                href={option.href}
                className="block rounded-[20px] border border-white/10 bg-[#0e0e13] p-5 transition hover:border-white/18"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#a78bfa]">
                  {option.recommendation}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{option.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#a4a4b0]">
                  {option.description}
                </p>
                <p className="mt-4 text-xs text-[#f4f1ea]">Open preview →</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
