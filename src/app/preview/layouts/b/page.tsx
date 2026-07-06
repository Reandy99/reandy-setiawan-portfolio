import Link from "next/link";

import { siteConfig } from "@/lib/utils";

export default function LayoutBPreviewPage() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <header className="flex items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-white/60">
          RS
        </Link>
        <Link href="/#contact" className="text-xs text-white/70">
          Contact
        </Link>
      </header>

      <section className="flex min-h-[72vh] flex-col items-center justify-center px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff8f7f]">
          Layout B Preview
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          {siteConfig.heroHeadline}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
          {siteConfig.heroSubhead}
        </p>
        <div className="mt-8 flex gap-3">
          <span className="rounded-full bg-[#ff6d5a] px-5 py-2.5 text-xs font-semibold">
            View Work
          </span>
          <span className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/80">
            Download CV
          </span>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-10 md:px-8">
        <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/45">
          Horizontal work strip
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {["SCHOTT", "MIS Campaign", "Foot Locker", "n8n Workflow"].map((item) => (
            <div
              key={item}
              className="min-w-[72vw] shrink-0 rounded-[20px] border border-white/10 bg-white/5 p-4 md:min-w-[42vw]"
            >
              <div className="aspect-[16/10] rounded-[14px] bg-white/10" />
              <p className="mt-4 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-5 pb-10 md:px-8">
        <Link
          href="/preview/layouts"
          className="text-xs text-white/50 underline underline-offset-2"
        >
          ← Kembali ke perbandingan layout
        </Link>
      </div>
    </div>
  );
}
