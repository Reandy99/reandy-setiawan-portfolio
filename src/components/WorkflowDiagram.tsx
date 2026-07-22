"use client";

import { motion } from "framer-motion";

import { workflowCopy, workflowNodes } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";

export function WorkflowDiagram() {
  const {
    prefersReducedMotion,
    fadeUp,
    transition,
    workflowStagger,
    workflowStaggerMobile,
    workflowNode,
  } = useMotionPrefs();

  const motionInitial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="workflow" className="section-shell">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={transition()}
        className="overflow-hidden rounded-[28px] border border-white/9 bg-[linear-gradient(160deg,rgba(21,21,28,0.96),rgba(14,14,19,0.98))] p-6 sm:p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow text-[var(--color-workflow)]">Featured Workflow</p>
            <h2 className="display-title max-w-xl">
              From one production day to a complete content system.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)] md:text-[15px]">
              {workflowCopy}
            </p>
          </div>

          <div className="relative">
            <motion.div
              variants={workflowStaggerMobile}
              initial={motionInitial}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col gap-3 md:hidden"
            >
              {workflowNodes.map((node, index) => (
                <motion.div
                  key={node}
                  variants={workflowNode}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[rgba(56,189,248,0.35)] bg-[rgba(56,189,248,0.1)] text-xs font-semibold text-[var(--color-workflow)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-[var(--color-foreground)]">
                    {node}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                variants={workflowStagger}
                initial={motionInitial}
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative flex flex-wrap items-center justify-center gap-x-2 gap-y-4"
              >
                <div className="pointer-events-none absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(56,189,248,0.35)] to-transparent" />
                {workflowNodes.map((node, index) => (
                  <motion.div
                    key={node}
                    variants={workflowNode}
                    className="relative z-10 flex items-center gap-2"
                  >
                    <div className="rounded-full border border-[rgba(56,189,248,0.28)] bg-[rgba(7,7,10,0.9)] px-4 py-2.5 text-sm font-medium text-[var(--color-foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      {node}
                    </div>
                    {index < workflowNodes.length - 1 ? (
                      <span
                        aria-hidden
                        className="text-[var(--color-workflow)]/70"
                      >
                        →
                      </span>
                    ) : null}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
