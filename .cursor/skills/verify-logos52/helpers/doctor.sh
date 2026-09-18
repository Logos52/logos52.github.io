#!/usr/bin/env bash
# Cheap read-only check that THIS run's Astro instance is worth driving.
# Default is process/port/Node/HTTP only. Pass --ci to run the existing
# npm run verify sequence (heavy; same checks as PR CI). Do not invent another stack.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "${SCRIPT_DIR}/common.sh"

CI=0
if [[ "${1:-}" == "--ci" ]]; then
  CI=1
fi

fail=0
ok() { echo "doctor: OK  $*"; }
bad() { echo "doctor: FAIL $*"; fail=1; }

if require_node_22; then
  ok "Node $(node -v) (>= 22)"
else
  bad "Node < 22 or missing"
fi

if [[ -d "${REPO_ROOT}/node_modules" ]]; then
  ok "node_modules present"
else
  bad "node_modules missing (run npm ci)"
fi

load_run
if [[ -z "${VERIFY_PID:-}" ]]; then
  bad "no run state at ${STATE_FILE} — this skill did not launch an instance"
elif ! pid_alive "${VERIFY_PID}"; then
  bad "recorded pid ${VERIFY_PID} is not alive"
else
  ok "recorded pid ${VERIFY_PID} is alive"
fi

bound="$(listening_pids)"
if [[ -z "${bound}" ]]; then
  bad "nothing listening on ${PORT}"
elif port_owned_by_run; then
  ok "port ${PORT} is owned by this run (pids: ${bound})"
else
  bad "port ${PORT} is bound by pid(s) ${bound} that this run did not start — do not drive it"
fi

code="$(http_ok / || true)"
if [[ "${code}" == "200" ]] && page_has_marker / 'hero__title'; then
  ok "${BASE_URL}/ → 200 and .hero__title present"
else
  bad "${BASE_URL}/ → ${code:-down} (need 200 + .hero__title)"
fi

# Cheap extra: Notes index the user actually clicks (Chrome nav /notes → /notes/).
notes_code="$(http_ok /notes/ || true)"
if [[ "${notes_code}" == "200" ]]; then
  ok "${BASE_URL}/notes/ → 200"
else
  bad "${BASE_URL}/notes/ → ${notes_code:-down}"
fi

echo "doctor: EVIDENCE_DIR=${EVIDENCE_DIR}"
echo "doctor: production https://logos52.github.io is not the instance under test"

if [[ "${CI}" == "1" ]]; then
  echo "doctor: --ci requested; running the repo's existing CI sequence (heavy)"
  cd "${REPO_ROOT}"
  if node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts.verify ? 0 : 1)'; then
    npm run verify
  else
    echo "doctor: npm run verify is absent; calling the same scripts main already has"
    npm run lint:fm && npm run guard:source && npm run build && npm run guard && npm test
  fi
fi

if [[ "${fail}" != "0" ]]; then
  echo "doctor: this instance is not worth driving"
  exit 1
fi
echo "doctor: instance is worth driving"
exit 0
