// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// SPEF static site. Content source of truth is the repo-root `public/`
// (Layer 2), read via the content collection in `src/content.config.ts`.
// Astro's own reserved static dir is `site/public/` — no collision.
//
// Astro 6.4+ pluggable Markdown pipeline: plugins go on `markdown.processor`
// (unified) rather than the deprecated top-level `markdown.remarkPlugins` etc.
export default defineConfig({
  site: 'https://spef.veathered.top',
  markdown: {
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
