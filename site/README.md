# SPEF site (Layer 2)

Astro static site for the publishable SPEF framework.

## Architecture

- **Content source of truth** = repo-root `../public/` (the Layer-2 content). Nothing is duplicated here; the site reads it via the `docs` content collection (`src/content.config.ts`, glob loader with `base: '../public'`).
- **Astro's reserved static dir** is `site/public/` — separate from the Layer-2 source despite the shared name. The diagram and card assets are copied into it at dev/build time by `scripts/sync-static.mjs` (so they stay single-sourced in `../public/`).
- **Math**: `$...$` / `$$...$$` render via remark-math + KaTeX (`astro.config.mjs`).

Never copy personal ledger data or real parameters into this tree (see `../LAYERING.md`).

## Run

```bash
cd site
npm install
npm run dev      # predev syncs diagram.html + card/ into site/public
```

Build: `npm run build` → output in `dist/`.

## Routes

- `/` — hero + doc index (`src/pages/index.astro`)
- `/docs/<id>/` — rendered framework markdown (`src/pages/docs/[...id].astro`)
- `/diagram` — three-line argument map, embedded in site chrome (`src/pages/diagram.astro`)
- `/diagram.html` — the raw self-contained diagram (static asset, synced)

Set the real deploy URL in `astro.config.mjs` (`site:`) before production build.
