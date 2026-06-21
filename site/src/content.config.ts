import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Single source of truth = repo-root `public/` (Layer 2), NOT site/public.
// The framework ships in two languages, each a self-contained mirror:
//   public/zh/*.md  -> Chinese (default locale, served at the site root)
//   public/en/*.md  -> English (served under /en/)
// `base` is resolved relative to the Astro project root (site/).
// The framework markdown carries no frontmatter; keep the schema permissive.
const schema = z.object({ title: z.string().optional() }).passthrough();

const docsZh = defineCollection({
  loader: glob({ pattern: '*.md', base: '../public/zh' }),
  schema,
});
const docsEn = defineCollection({
  loader: glob({ pattern: '*.md', base: '../public/en' }),
  schema,
});

export const collections = { docsZh, docsEn };
