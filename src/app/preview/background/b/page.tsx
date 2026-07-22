import Link from "next/link";

import { BackgroundDemoShell } from "@/components/preview/BackgroundDemoShell";

export default function BackgroundOptionBPage() {
  return (
    <BackgroundDemoShell
      option="B"
      title="Film grid / hairline mesh"
      description="Slow-scrolling studio grid, scan line pulse, and soft radar rings."
      motionVariant="b"
    >
      <nav className="flex flex-wrap gap-3 text-xs">
        <Link href="/preview/background/a" className="text-[#a4a4b0] hover:text-white">
          ← Prev: A
        </Link>
        <Link href="/preview/background" className="text-[#a4a4b0] hover:text-white">
          All options
        </Link>
        <Link href="/preview/background/c" className="text-[#a78bfa] hover:text-white">
          Next: C →
        </Link>
      </nav>
    </BackgroundDemoShell>
  );
}
