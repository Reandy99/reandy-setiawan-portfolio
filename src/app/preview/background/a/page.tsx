import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionAPage() {
  return (
    <BackgroundDemoShell
      option="A"
      title="Soft atmospheric washes"
      description="Drifting violet/cyan light fields with film grain — cinematic, slow, and quiet."
      motionVariant="a"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          ← All options
        </Link>
        <Link href="/preview/background/b" className="text-[#a78bfa] hover:text-white">
          Next: B →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
