import type { Metadata } from "next";

import { ScrollWorldExperience } from "@/components/ScrollWorldExperience";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Scroll World",
  description: `Scroll through the creative world of ${siteConfig.name} — production, craft, and AI workflows.`,
};

export default function ScrollWorldPage() {
  return <ScrollWorldExperience />;
}
