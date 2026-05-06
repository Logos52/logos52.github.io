#!/usr/bin/env bash
# setup-site.sh
#
# One-time setup that brings the Quartz v4 framework into this repo so the
# site can be built. Run from the repo root:
#
#     bash tools/scripts/setup-site.sh
#
# Re-running is safe; it will skip steps that are already done.

set -euo pipefail

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
cd "$REPO_ROOT"

echo "==> Repo root: $REPO_ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node is not installed. Install Node 20+ first." >&2
  exit 1
fi

NODE_MAJOR=$(node --version | sed -E 's/v([0-9]+)\..*/\1/')
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "ERROR: Node $NODE_MAJOR detected. Quartz needs Node 20+." >&2
  exit 1
fi

echo "==> Node $(node --version)"

if [ ! -d "quartz" ]; then
  echo "==> Cloning Quartz framework into a temp directory"
  TMP=$(mktemp -d)
  trap 'rm -rf "$TMP"' EXIT
  git clone --depth 1 https://github.com/jackyzha0/quartz.git "$TMP/quartz" >/dev/null 2>&1

  echo "==> Copying quartz/ framework into repo"
  cp -R "$TMP/quartz/quartz" ./quartz

  echo "==> Bringing in baseline package.json (preserving your custom configs)"
  # We use Quartz's package.json so we get the right dependency versions,
  # then patch the build/serve scripts to use the repo root as content.
  cp "$TMP/quartz/package.json" ./package.json
  cp "$TMP/quartz/tsconfig.json" ./tsconfig.json
  cp "$TMP/quartz/globals.d.ts" ./globals.d.ts 2>/dev/null || true
  cp "$TMP/quartz/index.d.ts" ./index.d.ts 2>/dev/null || true

  # Patch scripts so build/serve operate on the repo root, not ./content
  node -e '
    const fs = require("fs");
    const p = JSON.parse(fs.readFileSync("./package.json", "utf8"));
    p.name = "llm-knowledge-base-site";
    p.description = "Quartz site for the LLM Knowledge Base wiki";
    p.scripts = p.scripts || {};
    p.scripts.build = "tsx ./quartz/bootstrap-cli.mjs build --directory .";
    p.scripts.serve = "tsx ./quartz/bootstrap-cli.mjs build --serve --directory .";
    fs.writeFileSync("./package.json", JSON.stringify(p, null, 2) + "\n");
  '
else
  echo "==> quartz/ already present, skipping clone"
fi

echo "==> Installing npm dependencies (this can take 1-2 minutes)"
npm install

echo
echo "Setup complete."
echo
echo "Next steps:"
echo "  Preview locally:   npm run serve   (then open http://localhost:8080)"
echo "  Build static site: npm run build   (output goes to ./public)"
