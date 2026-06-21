// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeShiki from '@shikijs/rehype';

// SPEF static site. Content source of truth is the repo-root `public/`
// (Layer 2), read via the content collection in `src/content.config.ts`.
// Astro's own reserved static dir is `site/public/` — no collision.
//
// Astro 6.4+ pluggable Markdown pipeline: plugins go on `markdown.processor`
// (unified) rather than the deprecated top-level `markdown.remarkPlugins` etc.

/**
 * Rehype plugin: appends a `#` anchor link to every h2/h3 that has an id
 * (supplied by rehype-slug). The link is hidden until the heading is hovered.
 */
function rehypeAnchorHeadings() {
  return (/** @type {any} */ tree) => {
    walk(tree);
    function walk(node) {
      if (node.type === 'element' && /^h[2-3]$/.test(node.tagName)) {
        const id = node.properties?.id;
        if (id) {
          node.children.push({
            type: 'element',
            tagName: 'a',
            properties: {
              class: 'heading-anchor',
              href: `#${id}`,
              ariaLabel: '链接到此节',
            },
            children: [{ type: 'text', value: '#' }],
          });
        }
      }
      if (node.children) {
        for (const child of node.children) walk(child);
      }
    }
  };
}

/**
 * Rehype plugin: wraps top-level <table> elements in a scrollable
 * <div class="table-wrap"> so overflow-x gets a scroll-shadow hint.
 */
function rehypeWrapTables() {
  return (/** @type {any} */ tree) => {
    walk(tree);
    function walk(node) {
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.type === 'element' && child.tagName === 'table') {
            node.children[i] = {
              type: 'element',
              tagName: 'div',
              properties: { class: 'table-wrap' },
              children: [child],
            };
          } else {
            walk(child);
          }
        }
      }
    }
  };
}

export default defineConfig({
  site: 'https://spef.veathered.top',
  markdown: {
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        rehypeAnchorHeadings,
        rehypeWrapTables,
        [rehypeShiki, { theme: 'github-dark' }],
      ],
    }),
  },
});