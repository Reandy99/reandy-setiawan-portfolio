# Structure v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the personal portfolio safer, lighter, and easier to update while preserving its design and public URLs.

**Architecture:** Move content into domain-focused modules and retain a single project index for routes and components. Add repeatable validation for content integrity, fix image-quality configuration, then remove only audited duplicate assets.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-02-structure-v1-design.md`

## Global Constraints

- Keep all public URLs and `/work/[slug]` case-study behavior unchanged.
- Preserve visual design and copy unless an implementation correction requires a factual clarification.
- Do not remove an asset until reference scanning proves it is unused or superseded.
- Do not add runtime dependencies.

## Review Focus

- A hidden project must never become a generated route or sitemap entry.
- Every visible project must have a unique slug and complete route data.
- Existing category filters must retain their labels and return projects.
- Image requests at quality 90 must no longer produce a Next.js warning.
- Preview routes must stay excluded from indexing.

### Task 1: Establish content validation

**Files:**
- Modify: `package.json`, `package-lock.json`
- Create: `vitest.config.ts`, `src/content/projects/index.test.ts`

**Interfaces:**
- Produces: `npm run test` validates the canonical project collection.

- [ ] Add Vitest as a development-only test runner.
- [ ] Write a failing test that imports the canonical project list and expects unique visible slugs plus non-empty title, summary, thumbnail, and category.
- [ ] Run the focused test and confirm it fails before the canonical module exists.
- [ ] Add the canonical module and run the focused test to confirm it passes.

### Task 2: Split content by domain

**Files:**
- Create: `src/content/site.ts`, `src/content/profile.ts`, `src/content/projects/types.ts`, `src/content/projects/index.ts`
- Modify: `src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`, `src/lib/utils.ts`, affected components and routes.

**Interfaces:**
- Consumes: content validation from Task 1.
- Produces: a canonical project index, focused site/profile modules, and compatibility exports where needed.

- [ ] Write failing tests for project lookup, featured collection, and next-project wrapping.
- [ ] Move project helpers into the canonical index and make tests pass.
- [ ] Move configuration and profile content into focused modules while keeping UI output unchanged.
- [ ] Run the full test, lint, and typecheck commands.

### Task 3: Fix production safety and media configuration

**Files:**
- Modify: `next.config.ts`, `package.json`, `package-lock.json`
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: canonical project index from Task 2.
- Produces: image-quality configuration that matches component requests and stable sitemap metadata.

- [ ] Write a failing config test proving quality 90 is allowed.
- [ ] Update Next image configuration and make the test pass.
- [ ] Apply the audited non-vulnerable dependency update.
- [ ] Replace build-time sitemap timestamps with content-derived values.
- [ ] Run audit, test, lint, typecheck, and build.

### Task 4: Remove audited duplicate assets and document the workflow

**Files:**
- Delete: only duplicate, unreferenced legacy files confirmed by reference scan.
- Create: `README.md`
- Modify: `src/content/site.ts` if the canonical CV path changes.

**Interfaces:**
- Consumes: reference scan and content modules from Tasks 1–3.
- Produces: smaller repository and an accurate maintenance guide.

- [ ] Write a failing asset-inventory test that rejects duplicate configured CV paths.
- [ ] Keep one canonical CV path and make the test pass.
- [ ] Remove only byte-identical legacy project images and duplicate profile/CV copies with no remaining references.
- [ ] Add setup, test, content-update, and deployment instructions to README.
- [ ] Run final tests, lint, typecheck, build, and browser smoke tests.
