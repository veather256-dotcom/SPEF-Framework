// Copies generated static assets from the Layer-2 source (repo-root `public/`)
// into Astro's reserved static dir (site/public/), keeping a single source of
// truth. Runs automatically before `dev` and `build` (see package.json).
//
// The framework ships in two locales, each a self-contained mirror:
//   public/zh -> served at the root   (/diagram.html, /card/*)
//   public/en -> served under /en/    (/en/diagram.html, /en/card/*)
import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(here, '..'); // site/
const srcPublic = resolve(siteRoot, '..', 'public'); // repo-root public/ (SSOT)
const destPublic = resolve(siteRoot, 'public'); // site/public/ (Astro reserved)

// (srcSubdir, destSubdir) — '' destSubdir means the site root.
const locales = [
  { lang: 'zh', dest: '' },
  { lang: 'en', dest: 'en' },
];

await mkdir(destPublic, { recursive: true });

for (const { lang, dest } of locales) {
  const src = resolve(srcPublic, lang);
  const out = dest ? resolve(destPublic, dest) : destPublic;
  await mkdir(out, { recursive: true });
  // Best-effort clean so re-runs self-heal a stale mirror.
  await rm(resolve(out, 'diagram.html'), { force: true }).catch(() => {});
  await rm(resolve(out, 'card'), { recursive: true, force: true }).catch(() => {});
  await cp(resolve(src, 'SPEF_diagram.html'), resolve(out, 'diagram.html'), { force: true });
  await cp(resolve(src, 'card'), resolve(out, 'card'), { recursive: true, force: true });
}

console.log('[sync-static] zh + en diagram.html + card/ copied into site/public/');
