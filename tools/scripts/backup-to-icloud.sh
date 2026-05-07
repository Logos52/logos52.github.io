#!/usr/bin/env bash
# backup-to-icloud.sh
#
# Mirror the working project to iCloud Drive as a redundant backup.
# Excludes generated/regenerable folders (node_modules, public, build caches,
# and the Quartz framework itself) and the .git directory (GitHub is the
# primary backup for git history).
#
# Run from anywhere:
#     bash /Users/n1/Projects/llm-knowledge-base/tools/scripts/backup-to-icloud.sh
#
# Or, if launchd-scheduled, point it at this script directly.
#
# Re-running is safe — rsync mirrors state (with --delete), so the backup
# always reflects the current project.

set -euo pipefail

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
BACKUP="$HOME/Library/Mobile Documents/com~apple~CloudDocs/llm-knowledge-base-backup"

mkdir -p "$BACKUP"

echo "==> Source: $REPO_ROOT"
echo "==> Backup: $BACKUP"
echo "==> Mirroring (this can take a moment on the first run)..."

rsync -av --delete \
  --exclude 'node_modules/' \
  --exclude 'public/' \
  --exclude '.quartz-cache/' \
  --exclude 'quartz/.quartz-cache/' \
  --exclude 'quartz/' \
  --exclude '.git/' \
  --exclude '.DS_Store' \
  --exclude '.obsidian/workspace.json' \
  --exclude '.obsidian/workspace-mobile.json' \
  --exclude '.obsidian/cache' \
  --exclude '.obsidian/trash/' \
  "$REPO_ROOT/" \
  "$BACKUP/"

# Drop a marker so future-you knows what this folder is for.
cat > "$BACKUP/BACKUP-README.md" <<'EOF'
# LLM Knowledge Base — iCloud Backup

This is a **read-only backup** of `~/Projects/llm-knowledge-base/`, mirrored
here by `tools/scripts/backup-to-icloud.sh`.

Do not edit files here directly — your edits would be overwritten on the
next backup run, and they wouldn't be picked up by Obsidian, Quartz, or git.

The canonical project lives at:

    ~/Projects/llm-knowledge-base/

GitHub holds the full git history (the source of truth for everything
except `raw/private/`, which is gitignored). This iCloud copy is the
secondary backup for `raw/private/` and for general "if my Mac dies"
recovery of source files.

Excluded from this backup (regenerable from `package.json`):
- node_modules/
- public/
- .quartz-cache/
- quartz/   (the Quartz framework — re-vendor with tools/scripts/setup-site.sh)
- .git/     (use GitHub to restore history)
EOF

echo
echo "==> Backup size:"
du -sh "$BACKUP"
echo "==> Done."
