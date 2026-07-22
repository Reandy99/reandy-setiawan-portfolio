import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionFPage() {
  return (
    <BackgroundDemoShell
      option="F"
      title="Constellation + monogram"
      description="Connected nodes, drawing lines, and a large RS watermark — workflow identity with graphic structure."
      motionVariant="f"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background/e" className="text-[#a4a4b0] hover:text-white">
          ← Prev: E
        </Link>
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          All options
        </Link>
        <Link href="/preview/background/d" className="text-[#a78bfa] hover:text-white">
          Back to D →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
