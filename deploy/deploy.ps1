#Requires -Version 5
<#
  One-click deploy for the SPEF static site -> Alibaba Cloud + Caddy.

  Builds the site locally, uploads dist/ to a fresh temp dir on the server,
  then atomically-ish swaps it into the web root. Caddy needs no reload for
  content changes.

  Hardened behaviour:
    * Upload + swap each retry automatically (handles transient SSH throttling
      / dropped connections that we hit with password auth).
    * The swap NEVER leaves the web root empty: it snapshots the current root,
      clears + copies the new build in, verifies index.html, and restores the
      snapshot if anything fails.
    * The swap is idempotent: if a swap actually succeeded but the SSH
      connection dropped before returning, the retry detects the finished
      state and reports success instead of wiping a good deploy.

  Usage (from anywhere):
      powershell -ExecutionPolicy Bypass -File D:\SPEF_Framework\deploy\deploy.ps1

  Passwordless is nicest: set up an SSH key (ssh-keygen + paste your public key
  into the server's ~/.ssh/authorized_keys). Otherwise you'll be prompted for
  the password on each connection.
#>

$ErrorActionPreference = 'Stop'

# ---------------- config ----------------
$ServerUser = 'root'
$ServerHost = '47.103.206.158'
$WebRoot    = '/var/www/spef'
$SiteUrl    = 'https://spef.veathered.top'
$MaxTries   = 3            # attempts per network step (upload, swap)
$RetryDelay = 8            # seconds between retries
$SshOpts    = @('-o', 'ConnectTimeout=20')
# ----------------------------------------

$Target  = "$ServerUser@$ServerHost"
$SiteDir = Resolve-Path (Join-Path $PSScriptRoot '..\site')
$Dist    = Join-Path $SiteDir 'dist'

function Invoke-Retry {
    param(
        [Parameter(Mandatory)][scriptblock]$Action,
        [Parameter(Mandatory)][string]$What
    )
    for ($i = 1; $i -le $MaxTries; $i++) {
        & $Action
        if ($LASTEXITCODE -eq 0) { return }
        if ($i -lt $MaxTries) {
            Write-Host "    $What failed (exit $LASTEXITCODE) - retry $i/$($MaxTries-1) in ${RetryDelay}s ..." -ForegroundColor Yellow
            Start-Sleep -Seconds $RetryDelay
        }
    }
    throw "$What failed after $MaxTries attempts (exit $LASTEXITCODE)."
}

# ---------------- 1. build ----------------
Write-Host "==> Building  ($SiteDir)" -ForegroundColor Cyan
Push-Location $SiteDir
try { npm run build } finally { Pop-Location }

# Note: on Windows, `astro build` can print a benign libuv assertion AND exit
# non-zero AFTER the build finishes. So we verify the artifact instead of
# trusting the exit code.
if (-not (Test-Path (Join-Path $Dist 'index.html'))) {
    throw "Build did not produce dist/index.html - aborting (nothing was touched on the server)."
}

# ---------------- 2. upload ----------------
# Fresh timestamped temp dir PER attempt so a partial upload can't nest dist/.
$script:TmpDir = $null
Write-Host "==> Uploading dist/ -> ${Target}:/tmp/spef-dist-*" -ForegroundColor Cyan
Invoke-Retry -What 'Upload' -Action {
    $script:TmpDir = "/tmp/spef-dist-$(Get-Date -Format 'yyyyMMddHHmmssfff')"
    Push-Location $SiteDir
    try { scp $SshOpts -r dist "${Target}:$script:TmpDir" } finally { Pop-Location }
}
Write-Host "    uploaded to $script:TmpDir" -ForegroundColor DarkGray

# ---------------- 3. swap (safe + idempotent) ----------------
# Space the connections out a touch so back-to-back password auths are less
# likely to trip server-side SSH rate limiting.
Start-Sleep -Seconds 3

$swapTemplate = @'
set -e
TMP="__TMP__"; ROOT="__ROOT__"
# Idempotent: swap already done on an earlier (dropped) attempt?
if [ ! -d "$TMP" ]; then
  if [ -f "$ROOT/index.html" ]; then echo SWAP_OK_ALREADY; exit 0; fi
  echo "ERR: temp dir $TMP missing and web root is empty"; exit 11
fi
[ -f "$TMP/index.html" ] || { echo "ERR: $TMP has no index.html (incomplete upload)"; exit 12; }

# Snapshot the current web root so we can roll back on failure.
BK="/tmp/spef-rootbak-$(date +%s)"
if [ -d "$ROOT" ] && [ -n "$(ls -A "$ROOT" 2>/dev/null)" ]; then
  mkdir -p "$BK" && cp -a "$ROOT/." "$BK/" || { echo "ERR: backup failed"; exit 13; }
fi

mkdir -p "$ROOT"
rm -rf "$ROOT"/*
if ! cp -a "$TMP/." "$ROOT/"; then
  echo "ERR: copy failed - restoring previous site"
  rm -rf "$ROOT"/* 2>/dev/null
  [ -d "$BK" ] && cp -a "$BK/." "$ROOT/"
  exit 14
fi
if [ ! -f "$ROOT/index.html" ]; then
  echo "ERR: post-copy verify failed - restoring previous site"
  rm -rf "$ROOT"/* 2>/dev/null
  [ -d "$BK" ] && cp -a "$BK/." "$ROOT/"
  exit 15
fi

rm -rf "$TMP" "$BK" 2>/dev/null
echo SWAP_OK
'@
$swap = $swapTemplate.Replace('__TMP__', $script:TmpDir).Replace('__ROOT__', $WebRoot) -replace "`r`n", "`n"
# Pass the script base64-encoded so Windows PowerShell's native-arg quoting
# can't mangle the embedded quotes/parens/newlines (it silently strips inner
# double quotes, which breaks unquoted shell tokens like "(incomplete upload)").
# The b64 payload contains only [A-Za-z0-9+/=] — nothing the arg layer touches.
$swapB64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($swap))

Write-Host "==> Swapping into $WebRoot (with snapshot rollback)" -ForegroundColor Cyan
Invoke-Retry -What 'Swap' -Action {
    ssh $SshOpts "$Target" "echo $swapB64 | base64 -d | bash"
}

# ---------------- 4. soft post-deploy check ----------------
try {
    $r = Invoke-WebRequest -UseBasicParsing -TimeoutSec 20 "$SiteUrl/?cb=$(Get-Random)"
    if ($r.StatusCode -eq 200) {
        Write-Host "==> Live check OK (HTTP 200)" -ForegroundColor Green
    } else {
        Write-Host "==> Live check returned HTTP $($r.StatusCode) (edge cache may lag)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "==> Live check skipped/failed: $($_.Exception.Message) (deploy itself succeeded)" -ForegroundColor Yellow
}

Write-Host "==> Done. $SiteUrl" -ForegroundColor Green
