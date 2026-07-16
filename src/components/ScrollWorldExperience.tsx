"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import { siteConfig } from "@/lib/utils";

declare global {
  interface Window {
    mountScrollWorld?: (
      container: HTMLElement,
      config: Record<string, unknown>,
    ) => void;
  }
}

const scrollWorldConfig = {
  brand: { name: siteConfig.name, href: "/" },
  hint: "scroll to fly through",
  diveScroll: 1.4,
  connScroll: 0.85,
  crossfade: 0.1,
  nav: true,
  atmosphere: true,
  sections: [
    {
      id: "studio",
      label: "Studio",
      still: "/scroll-world/stills/studio.jpg",
      clip: "/scroll-world/vid/studio.mp4",
      accent: "#abb7aa",
      scroll: 1.6,
      linger: 0.4,
      eyebrow: "Creative Producer",
      title: "It starts on set.",
      body: "A decade of photography, video, and campaign craft — grounded in real production.",
      tags: ["Photo", "Video", "Campaign"],
    },
    {
      id: "shoot",
      label: "Shoot",
      still: "/scroll-world/stills/shoot.jpg",
      clip: "/scroll-world/vid/shoot.mp4",
      accent: "#33423a",
      scroll: 1.5,
      linger: 0.35,
      eyebrow: "Production",
      title: "Capture with intent.",
      body: "Corporate profiles, events, and brand moments filmed with calm, clear storytelling.",
      tags: ["Direction", "Cinematography"],
    },
    {
      id: "edit",
      label: "Edit",
      still: "/scroll-world/stills/edit.jpg",
      clip: "/scroll-world/vid/edit.mp4",
      accent: "#899388",
      scroll: 1.4,
      linger: 0.3,
      eyebrow: "Post",
      title: "Shape the story.",
      body: "Editing, color, and delivery pipelines that keep visual quality consistent.",
      tags: ["Premiere", "Color", "Delivery"],
    },
    {
      id: "systems",
      label: "Systems",
      still: "/scroll-world/stills/systems.jpg",
      clip: "/scroll-world/vid/systems.mp4",
      accent: "#33423a",
      scroll: 1.55,
      linger: 0.45,
      eyebrow: "AI Workflow Builder",
      title: "One shoot. Weeks of content.",
      body: "AI-assisted workflows that turn raw production into structured, reusable assets.",
      tags: ["n8n", "Automation", "AI"],
    },
    {
      id: "finale",
      label: "Work",
      still: "/scroll-world/stills/finale.jpg",
      clip: "/scroll-world/vid/finale.mp4",
      accent: "#abb7aa",
      scroll: 1.7,
      linger: 0.5,
      eyebrow: "Let's collaborate",
      title: "Build something sharp together.",
      body: "Open to creative marketing, content operations, and visual production roles.",
      tags: ["Remote", "APAC"],
      cta: {
        primary: { label: "Email Me", href: `mailto:${siteConfig.email}` },
        secondary: { label: "View portfolio", href: "/#work" },
      },
    },
  ],
  connectors: [
    "/scroll-world/vid/conn1.mp4",
    "/scroll-world/vid/conn2.mp4",
    "/scroll-world/vid/conn3.mp4",
    "/scroll-world/vid/conn4.mp4",
  ],
};

export function ScrollWorldExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    let cancelled = false;

    const mount = () => {
      if (cancelled || !rootRef.current || !window.mountScrollWorld) return;
      rootRef.current.replaceChildren();
      window.mountScrollWorld(rootRef.current, scrollWorldConfig);
    };

    if (window.mountScrollWorld) {
      mount();
      return () => {
        cancelled = true;
        container.replaceChildren();
      };
    }

    const script = document.createElement("script");
    script.src = "/vendor/scrub-engine.js";
    script.async = true;
    script.onload = mount;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      id="scroll-world"
      className="sw-root min-h-screen"
      style={
        {
          ["--sw-bg" as string]: "#e3e3df",
          ["--sw-ink" as string]: "#33423a",
          ["--sw-ink-soft" as string]: "#000000bf",
          ["--sw-accent" as string]: "#33423a",
          ["--sw-font-display" as string]:
            "var(--font-bebas), Bebas Neue, sans-serif",
          ["--sw-font-body" as string]: "var(--font-manrope), Manrope, sans-serif",
        } as CSSProperties
      }
    />
  );
}
