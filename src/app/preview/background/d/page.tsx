import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionDPage() {
  return (
    <BackgroundDemoShell
      option="D"
      title="Cinematic light streaks"
      description="Diagonal light cuts, floating dust particles, and film-gate corner marks — visible graphic elements, not just glow."
      motionVariant="d"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          ← All options
        </Link>
        <Link href="/preview/background/e" className="text-[#a78bfa] hover:text-white">
          Next: E →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
