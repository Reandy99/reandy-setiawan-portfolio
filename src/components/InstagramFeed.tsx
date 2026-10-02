"use client";

import { createElement, useEffect } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/content/site";

const beholdScriptId = "behold-widget-script";

export function InstagramFeed() {
  useEffect(() => {
    if (document.getElementById(beholdScriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = beholdScriptId;
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.append(script);
  }, []);

  return (
    <section id="instagram" className="section-shell space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Latest Frames"
          title="From Instagram"
          description="A live selection of the latest moments, photographs, and work in progress."
        />
        <a
          className="text-link shrink-0"
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Follow @reandysetiawan <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="min-h-[240px] rounded-[24px] border border-white/9 bg-[var(--color-surface)] p-3 sm:p-4">
        {createElement("behold-widget", {
          "feed-id": siteConfig.instagramFeedId,
          className: "block min-h-[200px] w-full",
        })}
      </div>
    </section>
  );
}
