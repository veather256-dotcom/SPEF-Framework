import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Single source of truth = repo-root `public/` (Layer 2), NOT site/public.
// `base` is resolved relative to the Astro project root (site/).
const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: '../public' }),
  // The framework markdown carries no frontmatter; keep the schema permissive.
  schema: z
    .object({
      title: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { docs };
