import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LayoutBPreviewPage() {
  return (
    <div className="section-shell space-y-6">
      <p className="eyebrow">Internal Preview B</p>
      <h1 className="display-title">{siteConfig.heroHeadline}</h1>
      <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
        {siteConfig.heroSubhead}
      </p>
      <Link href="/preview/layouts" className="text-link text-xs">
        ← Back to layout previews
      </Link>
    </div>
  );
}
