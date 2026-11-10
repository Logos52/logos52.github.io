#!/usr/bin/env bash
# setup-site.sh
#
# One-time setup for the Astro site in this repo. Run from anywhere:
#
#     bash tools/scripts/setup-site.sh
#
# Re-running is safe. The script installs from package-lock.json and does not
# edit package.json, tsconfig, or vault notes.
#
# How the site actually builds (package.json, README.md, AGENTS.md,
# .github/workflows/deploy.yml):
#   npm ci          install (deploy.yml and .cursor/environment.json)
#   npm run build   prebuild, then astro build; output is ./dist
#   npm run dev     local server at http://localhost:4321
#   npm run preview preview the production build
#   npm run verify  frontmatter lint, source audit, build, publish guard, tests

set -euo pipefail

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
cd "$REPO_ROOT"

echo "==> Repo root: $REPO_ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node is not installed. Install Node 22+ first." >&2
  exit 1
fi

NODE_MAJOR=$(node --version | sed -E 's/v([0-9]+)\..*/\1/')
if [ "$NODE_MAJOR" -lt 22 ]; then
  echo "ERROR: Node $NODE_MAJOR detected. This Astro site needs Node 22+ (package.json engines; deploy.yml uses Node 22)." >&2
  exit 1
fi

echo "==> Node $(node --version)"

if [ ! -f package-lock.json ]; then
  echo "ERROR: package-lock.json is missing. npm ci needs the lockfile." >&2
  exit 1
fi

if [ ! -f package.json ]; then
  echo "ERROR: package.json is missing. Refusing to invent one." >&2
  exit 1
fi

echo "==> Installing dependencies with npm ci (same install as deploy.yml)"
npm ci

echo
echo "Setup complete."
echo
echo "Next steps:"
echo "  Dev server:        npm run dev      (http://localhost:4321)"
echo "  Production build:  npm run build    (writes ./dist)"
echo "  Preview the build: npm run preview"
echo "  PR checks:         npm run verify"
