# Reandy Setiawan Portfolio

Personal portfolio for Reandy Setiawan: creative production, photography, video, and AI workflow case studies.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Update content

- Site identity, links, navigation, and portfolio ecosystem: `src/content/site.ts`
- Case studies and route helpers: `src/content/projects/index.ts`
- Homepage profile content: `src/data/experience.ts`
- Project filters: `src/data/skills.ts`
- Images and downloadable CV: `public/`

Keep existing project slugs stable because each is a public case-study URL under `/work/[slug]`. Add or replace assets before changing the matching project data, and run all quality checks before deployment.

## Internal previews

Routes under `/preview/` are internal design experiments. They are excluded from search indexing and must remain separated from the public portfolio flow.
