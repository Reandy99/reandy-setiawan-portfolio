import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionEPage() {
  return (
    <BackgroundDemoShell
      option="E"
      title="Floating photo frames"
      description="Ghost portfolio frames + soft bokeh orbs + film corners — photography-studio feel with clear shapes."
      motionVariant="e"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background/d" className="text-[#a4a4b0] hover:text-white">
          ← Prev: D
        </Link>
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          All options
        </Link>
        <Link href="/preview/background/f" className="text-[#a78bfa] hover:text-white">
          Next: F →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
