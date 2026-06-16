// Copies generated static assets from the Layer-2 source (repo-root `public/`)
// into Astro's reserved static dir (site/public/), keeping a single source of
// truth. Runs automatically before `dev` and `build` (see package.json).
import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(here, '..'); // site/
const srcPublic = resolve(siteRoot, '..', 'public'); // repo-root public/ (SSOT)
const destPublic = resolve(siteRoot, 'public'); // site/public/ (Astro reserved)

await mkdir(destPublic, { recursive: true });
// Best-effort clean so re-runs self-heal a stale mirror.
await rm(resolve(destPublic, 'diagram.html'), { force: true }).catch(() => {});
await rm(resolve(destPublic, 'card'), { recursive: true, force: true }).catch(() => {});
await cp(resolve(srcPublic, 'SPEF_diagram.html'), resolve(destPublic, 'diagram.html'), { force: true });
await cp(resolve(srcPublic, 'card'), resolve(destPublic, 'card'), { recursive: true, force: true });

console.log('[sync-static] diagram.html + card/ copied into site/public/');
