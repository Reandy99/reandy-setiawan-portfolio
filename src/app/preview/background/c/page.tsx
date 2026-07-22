import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionCPage() {
  return (
    <BackgroundDemoShell
      option="C"
      title="Section banding"
      description="Continuously drifting depth bands with breathing vignette and a soft light bloom."
      motionVariant="c"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background/b" className="text-[#a4a4b0] hover:text-white">
          ← Prev: B
        </Link>
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          All options
        </Link>
        <Link href="/preview/background/a" className="text-[#a78bfa] hover:text-white">
          Back to A →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
