#!/bin/zsh
# One-click: push the vault to GitHub; the deploy.yml Action builds and publishes the site.
set -e
cd "$(dirname "$0")"

# Clear stale locks left by the sandbox mount
rm -f .git/HEAD.lock .git/index.lock 2>/dev/null || true
rm -f .git/objects/*/tmp_obj_* 2>/dev/null || true

echo "→ pushing main to origin..."
git push origin main

echo ""
echo "✓ pushed. Deploy runs automatically:"
echo "  https://github.com/Logos52/logos52.github.io/actions"
echo "  Site: https://logos52.github.io (live once the Action finishes)"
echo ""
echo "Today's commits going out:"
git log origin/main..main --oneline 2>/dev/null || git log -5 --oneline
