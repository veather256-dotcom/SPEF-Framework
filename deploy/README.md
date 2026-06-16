# Deploy — spef.veathered.top (Alibaba Cloud + Caddy)

Self-hosted static deploy. Build locally, ship `dist/` to the server, let Caddy serve it.
Nothing here exposes Layer 1: the build only bundles `public/` content; `private/` and
`CLAUDE.md` never enter `dist/`. Keep the git repo private as the second guard.

Live at **https://spef.veathered.top** (Alibaba Cloud, IP `47.103.206.158`, web root `/var/www/spef`).

## Quick deploy (one command)

`deploy/deploy.ps1` automates build → upload → swap. From any PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File D:\SPEF_Framework\deploy\deploy.ps1
```

It builds `site/`, uploads `dist/` to a fresh `/tmp/spef-dist-<timestamp>` on the
server, then atomically-ish swaps it into `/var/www/spef`. Caddy is not touched.
Server address and web root are configurable at the top of the script.

Tip: set up SSH key auth so it runs without password prompts (paste your public key
into the server's `~/.ssh/authorized_keys`). Without a key you'll be prompted twice
(once for `scp`, once for the swap `ssh`).

The manual steps below are what the script automates — use them for first-time setup
(web root + Caddy) or if you prefer to run each step by hand.

## 1. Build (local, Windows)

```powershell
cd D:\SPEF_Framework\site
npm run build        # prebuild syncs diagram.html + card/ into the output
```

Output lands in `site\dist\` — a complete static site (HTML, `_astro/` assets,
`diagram.html`, `card/`). Sanity-check locally:

```powershell
npm run preview      # serves dist at http://localhost:4321
```

## 2. Server: create the web root (once)

SSH into the Alibaba Cloud box:

```bash
sudo mkdir -p /var/www/spef
sudo chown -R "$USER":"$USER" /var/www/spef
```

## 3. Upload `dist/` → `/var/www/spef`

Replace `USER@HOST` with your server login (and key/port as needed).

Option A — scp (ships with Windows OpenSSH):

```powershell
scp -r D:\SPEF_Framework\site\dist\* USER@HOST:/var/www/spef/
```

Option B — rsync (from WSL or Git Bash; deletes stale files, faster re-deploys):

```bash
rsync -avz --delete site/dist/ USER@HOST:/var/www/spef/
```

## 4. Caddy (once)

Copy `deploy/Caddyfile` to the server as `/etc/caddy/Caddyfile`
(or `import` it from your existing one), then reload:

```bash
sudo systemctl reload caddy
```

Caddy issues HTTPS automatically once `spef.veathered.top` resolves to this server
and ports 80 + 443 are reachable.

## 5. Re-deploy on every change

Just run `deploy/deploy.ps1` (see "Quick deploy" above). No Caddy reload needed for
content changes — only when you edit the Caddyfile itself.

---

## Troubleshooting (things we hit)

- **`caddy reload` fails with `open /var/log/caddy/spef.access.log: permission denied`**
  — the log file exists but is owned by `root`, not `caddy`. Fix:
  `sudo chown caddy:caddy /var/log/caddy/spef.access.log` then reload. (`ProtectSystem=full`
  does *not* restrict `/var/log`, so it's ownership, not sandboxing.)
- **An extra `dist/` folder shows up under `/var/www/spef`** — `scp -r dist …:/tmp/spef-dist`
  was run twice, nesting a copy. `deploy.ps1` avoids this by uploading to a fresh
  timestamped temp dir each run.
- **scp errors `Could not resolve hostname <ip>`** — drop the angle brackets; they were
  only placeholders (`root@47.103.206.158`, not `root@<47.103.206.158>`).
- **`X-Frame-Options`** for this site is `SAMEORIGIN`, not `DENY` — `/diagram` embeds the
  same-origin `diagram.html` in an iframe, which `DENY` would blank out.

### Optional: build on the server instead

If you'd rather not upload, clone the **private** repo on the server and build there:

```bash
git clone <private-repo-url> spef && cd spef/site
npm ci
npm run build
# point Caddy root at .../spef/site/dist, or copy dist into /var/www/spef
```

Requires Node 20+ on the server.
