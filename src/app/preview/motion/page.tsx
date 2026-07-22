"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import {
  previewCurrentBlock,
  previewHeroCta,
  previewHeroEyebrow,
  previewHeroLine,
  previewHeroMuted,
  previewSectionContainer,
  previewSectionDescription,
  previewSectionEyebrow,
  previewSectionTitle,
  previewSoftFade,
  previewSoftFadeContainer,
  previewStaggerContainer,
} from "@/lib/motion-preview";
import { siteConfig } from "@/lib/utils";

function ReplayButton({ onReplay }: { onReplay: () => void }) {
  return (
    <button type="button" onClick={onReplay} className="button-secondary text-[10px]">
      Replay
    </button>
  );
}

function PreviewPanel({
  title,
  tag,
  replayKey,
  onReplay,
  children,
}: {
  title: string;
  tag: string;
  replayKey: number;
  onReplay: () => void;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-white/9 bg-[var(--color-surface)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
            {tag}
          </p>
          <h2 className="text-sm font-semibold text-[var(--color-foreground)]">{title}</h2>
        </div>
        <ReplayButton onReplay={onReplay} />
      </div>
      <div key={replayKey} className="min-h-[280px] p-5 sm:min-h-[320px]">
        {children}
      </div>
    </article>
  );
}

function HeroCopyBlocks() {
  return (
    <>
      <p className="eyebrow text-[var(--color-accent-soft)]">{siteConfig.heroMeta}</p>
      <h3 className="font-serif text-2xl leading-tight tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl">
        Creative Producer &amp;
        <br />
        AI Workflow Builder
      </h3>
      <p className="text-sm leading-6 text-[var(--color-muted)]">{siteConfig.heroSubhead}</p>
      <p className="text-sm text-[var(--color-foreground)]">{siteConfig.openFor}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        <span className="button-primary pointer-events-none text-[10px]">View Selected Work</span>
        <span className="button-secondary pointer-events-none text-[10px]">Download CV</span>
      </div>
    </>
  );
}

export default function MotionPreviewPage() {
  const prefersReducedMotion = useReducedMotion();
  const [replayKeys, setReplayKeys] = useState({ a: 0, b: 0, c: 0, d: 0 });

  const replay = (panel: keyof typeof replayKeys) => {
    setReplayKeys((keys) => ({ ...keys, [panel]: keys[panel] + 1 }));
  };

  const motionInitial = prefersReducedMotion ? "visible" : "hidden";
  const motionAnimate = "visible";

  return (
    <div className="section-shell space-y-8">
      <div className="space-y-3">
        <Link href="/" className="text-link text-xs">
          ← Back to site
        </Link>
        <p className="eyebrow">Motion Preview</p>
        <h1 className="display-title">Typography motion comparison</h1>
        <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          Compare hero text motion before applying to the homepage. Use Replay on each
          panel to replay the sequence.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <PreviewPanel
          title="Current — single block fadeUp"
          tag="Panel A"
          replayKey={replayKeys.a}
          onReplay={() => replay("a")}
        >
          <motion.div
            variants={previewCurrentBlock}
            initial={motionInitial}
            animate={motionAnimate}
            className="space-y-4"
          >
            <HeroCopyBlocks />
          </motion.div>
        </PreviewPanel>

        <PreviewPanel
          title="Editorial stagger (recommended)"
          tag="Panel B"
          replayKey={replayKeys.b}
          onReplay={() => replay("b")}
        >
          <motion.div
            variants={previewStaggerContainer}
            initial={motionInitial}
            animate={motionAnimate}
            className="space-y-4"
          >
            <motion.p
              variants={previewHeroEyebrow}
              className="eyebrow text-[var(--color-accent-soft)]"
            >
              {siteConfig.heroMeta}
            </motion.p>
            <motion.h3
              variants={previewStaggerContainer}
              className="font-serif text-2xl leading-tight tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl"
            >
              <motion.span variants={previewHeroLine} className="block">
                Creative Producer &amp;
              </motion.span>
              <motion.span variants={previewHeroLine} className="block">
                AI Workflow Builder
              </motion.span>
            </motion.h3>
            <motion.p
              variants={previewHeroMuted}
              className="text-sm leading-6 text-[var(--color-muted)]"
            >
              {siteConfig.heroSubhead}
            </motion.p>
            <motion.p
              variants={previewHeroMuted}
              className="text-sm text-[var(--color-foreground)]"
            >
              {siteConfig.openFor}
            </motion.p>
            <motion.div variants={previewHeroCta} className="flex flex-wrap gap-2 pt-1">
              <span className="button-primary pointer-events-none text-[10px]">
                View Selected Work
              </span>
              <span className="button-secondary pointer-events-none text-[10px]">
                Download CV
              </span>
            </motion.div>
          </motion.div>
        </PreviewPanel>

        <PreviewPanel
          title="Soft fade — opacity only"
          tag="Panel C"
          replayKey={replayKeys.c}
          onReplay={() => replay("c")}
        >
          <motion.div
            variants={previewSoftFadeContainer}
            initial={motionInitial}
            animate={motionAnimate}
            className="space-y-4"
          >
            <motion.p
              variants={previewSoftFade}
              className="eyebrow text-[var(--color-accent-soft)]"
            >
              {siteConfig.heroMeta}
            </motion.p>
            <motion.h3
              variants={previewSoftFade}
              className="font-serif text-2xl leading-tight tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl"
            >
              Creative Producer &amp;
              <br />
              AI Workflow Builder
            </motion.h3>
            <motion.p variants={previewSoftFade} className="text-sm leading-6 text-[var(--color-muted)]">
              {siteConfig.heroSubhead}
            </motion.p>
            <motion.p variants={previewSoftFade} className="text-sm text-[var(--color-foreground)]">
              {siteConfig.openFor}
            </motion.p>
            <motion.div variants={previewSoftFade} className="flex flex-wrap gap-2 pt-1">
              <span className="button-primary pointer-events-none text-[10px]">
                View Selected Work
              </span>
              <span className="button-secondary pointer-events-none text-[10px]">
                Download CV
              </span>
            </motion.div>
          </motion.div>
        </PreviewPanel>

        <PreviewPanel
          title="Section header pattern"
          tag="Panel D"
          replayKey={replayKeys.d}
          onReplay={() => replay("d")}
        >
          <motion.div
            variants={previewSectionContainer}
            initial={motionInitial}
            animate={motionAnimate}
            className="space-y-3"
          >
            <motion.p variants={previewSectionEyebrow} className="eyebrow">
              Selected Work
            </motion.p>
            <motion.h3 variants={previewSectionTitle} className="display-title text-2xl">
              Selected Work
            </motion.h3>
            <motion.p
              variants={previewSectionDescription}
              className="text-sm leading-7 text-[var(--color-muted)]"
            >
              A focused selection across corporate video, photography, campaigns, and
              AI-assisted creative workflows.
            </motion.p>
          </motion.div>
        </PreviewPanel>
      </div>

      <p className="text-xs text-[var(--color-muted)]">
        After choosing a panel, tell me which one to apply — e.g. &quot;Pakai Panel B&quot;.
      </p>
    </div>
  );
}
