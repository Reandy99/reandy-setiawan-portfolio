# Structure v1 Design

## Goal

Make the portfolio safer and easier to maintain without redesigning its visual language or changing public URLs.

## Constraints

- Keep all existing public routes, including `/work/[slug]`.
- Preserve the dark editorial interface and existing factual content unless an item is explicitly corrected.
- Do not delete an asset until its references have been checked.
- Keep preview routes available and non-indexable; only consolidate their implementation boundaries.
- Avoid new runtime dependencies. A test-only dependency is allowed only if it enables repeatable content validation.

## Design

The current content layer is split by business domain: site configuration, profile content, project types, project collections, and project lookup helpers. Components retain their public imports through small compatibility exports while the home page and case-study route move to the new modules.

Project data will be grouped into `src/content/projects/` by portfolio domain and reassembled through one canonical index. Validation tests will protect unique slugs, required case-study fields, and public project routes. `siteConfig` and navigation will move to `src/content/site.ts`; profile copy will move to `src/content/profile.ts`.

The image configuration will explicitly permit the quality used by project imagery. Next.js will be updated only within the non-vulnerable version selected by its audited lockfile resolution. Asset removal is limited to byte-identical, unreferenced duplicates and will retain one canonical CV and one canonical high-resolution original only when it remains referenced.

## Verification

- Content validation test suite.
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Browser smoke tests for `/`, one `/work/[slug]` page, `robots.txt`, and `sitemap.xml`.
