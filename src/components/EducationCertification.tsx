"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { certifications, education } from "@/data/experience";
import { useMotionPrefs } from "@/lib/motion";

export function EducationCertification() {
  const { fadeUp, transition } = useMotionPrefs();

  return (
    <section id="education" className="section-shell space-y-8 pt-8 md:pt-10">
      <SectionHeader
        eyebrow="Education & Certification"
        title="Education and professional training."
        description="Formal education plus focused training in AI, automation, and creative operations."
      />

      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={transition()}
        className="rounded-[20px] border border-white/9 bg-[var(--color-surface)] p-5 sm:p-6"
      >
        <p className="eyebrow">Education</p>
        {education.map((item) => (
          <div key={item.school} className="mt-4 space-y-1.5">
            <h3 className="text-base font-semibold text-[var(--color-foreground)]">
              {item.school}
            </h3>
            <p className="whitespace-pre-line text-sm leading-6 text-[var(--color-muted)]">
              {item.field}
            </p>
          </div>
        ))}
      </motion.article>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certifications.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.date}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={transition(index * 0.04)}
            className="flex h-full flex-col overflow-hidden rounded-[18px] border border-white/9 bg-[var(--color-surface)]"
          >
            {"image" in item && item.image ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-[#121218]">
                <Image
                  src={item.image}
                  alt={`${item.title} certificate from ${item.issuer}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent-soft)]">
                {item.date}
              </p>
              <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="text-xs leading-5 text-[var(--color-muted)]">
                {item.issuer}
              </p>
              {"verifyUrl" in item && item.verifyUrl ? (
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-auto pt-2 text-xs"
                >
                  Verify certificate
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
