# SPEF site (Layer 2)

Astro static site for the publishable SPEF framework.

## Architecture

- **Content source of truth** = repo-root `../public/` (the Layer-2 content). The framework ships in two self-contained locale mirrors: `../public/zh/` (Chinese, the default locale at the root) and `../public/en/` (English, under `/en/`). Nothing is duplicated here; the site reads each via its own content collection — `docsZh` / `docsEn` (`src/content.config.ts`, glob loaders with `base: '../public/zh'` and `'../public/en'`).
- **i18n surface** — locale routing, URL prefixes, and all chrome strings live in `src/lib/i18n.ts`. The home, diagram, and Base layout are locale-parameterized; English pages are emitted by `src/pages/en/[...rest].astro`.
- **Astro's reserved static dir** is `site/public/` — separate from the Layer-2 source despite the shared name. Each locale's diagram and card assets are copied into it at dev/build time by `scripts/sync-static.mjs` (zh → root, en → `/en/`), so they stay single-sourced in `../public/`.
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

Chinese (default locale) at the root, English mirrored under `/en/`:

- `/` · `/en/` — hero + doc index (`src/pages/index.astro`, `src/pages/en/[...rest].astro`)
- `/docs/<id>/` · `/en/docs/<id>/` — rendered framework markdown
- `/diagram` · `/en/diagram` — three-line argument map, embedded in site chrome
- `/diagram.html` · `/en/diagram.html` — the raw self-contained diagram (static asset, synced)

Set the real deploy URL in `astro.config.mjs` (`site:`) before production build.
