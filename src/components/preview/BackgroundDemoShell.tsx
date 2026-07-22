import { BackgroundMotionLayers } from "@/components/preview/BackgroundMotionLayers";
import type { MotionVariant } from "@/components/preview/BackgroundMotionLayers";
import { siteConfig } from "@/lib/utils";

type BackgroundDemoShellProps = {
  option: string;
  title: string;
  description: string;
  motionVariant: MotionVariant;
  children: React.ReactNode;
};

export function BackgroundDemoShell({
  option,
  title,
  description,
  motionVariant,
  children,
}: BackgroundDemoShellProps) {
  return (
    <div className="bg-preview-root relative min-h-screen overflow-hidden bg-[#07070a] text-[#f4f1ea]">
      <BackgroundMotionLayers variant={motionVariant} />

      <div className="bg-preview-content relative z-10 mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 md:py-20">
        <header className="space-y-4">
          {children}
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a78bfa]">
            Option {option} · Motion
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#f4f1ea] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-sm leading-7 text-[#a4a4b0]">{description}</p>
          <p className="max-w-xl text-sm leading-7 text-[#f4f1ea]/90">
            {siteConfig.heroSubhead}
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {["Selected Work", "Portfolio Ecosystem", "Capabilities", "Experience"].map(
            (label) => (
              <div
                key={label}
                className="rounded-[18px] border border-white/9 bg-[#0e0e13]/80 p-5 backdrop-blur-[2px]"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#a4a4b0]">
                  Sample card
                </p>
                <h2 className="mt-2 text-lg font-semibold text-[#f4f1ea]">{label}</h2>
                <p className="mt-2 text-sm leading-6 text-[#a4a4b0]">
                  Placeholder content so you can judge how the moving background sits behind
                  cards and type.
                </p>
              </div>
            ),
          )}
        </section>

        <section className="space-y-3 pb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a4a4b0]">
            About
          </p>
          <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#f4f1ea]">
            Strategy, craft, and reliable execution.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#a4a4b0]">
            Watch the background for 5–10 seconds — motion should feel atmospheric, not
            distracting.
          </p>
        </section>
      </div>
    </div>
  );
}
