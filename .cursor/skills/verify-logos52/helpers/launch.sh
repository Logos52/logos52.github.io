#!/usr/bin/env bash
# Start the local Astro wiki for verification on port 4321.
# Owns only the process it starts. Refuses a foreign occupant of the port.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "${SCRIPT_DIR}/common.sh"

require_node_22
require_install

load_run
if [[ -n "${VERIFY_PID:-}" ]] && pid_alive "${VERIFY_PID}" && port_owned_by_run; then
  if [[ "$(http_ok /)" == "200" ]]; then
    echo "launch: already running pid=${VERIFY_PID} ${BASE_URL}/ (ours)"
    echo "EVIDENCE_DIR=${EVIDENCE_DIR}"
    exit 0
  fi
fi

foreign="$(listening_pids)"
if [[ -n "${foreign}" ]]; then
  echo "launch: port ${PORT} is already bound by pid(s): ${foreign}" >&2
  echo "launch: refusing to drive or kill an instance this run did not start." >&2
  echo "launch: free ${PORT} yourself, then re-run. Do not pkill by name." >&2
  exit 2
fi

cd "${REPO_ROOT}"
: > "${LOG_FILE}"

# New process group so cleanup can kill npm + astro + node children we started.
set -m
npm run dev -- --host "${BIND_HOST}" --port "${PORT}" >>"${LOG_FILE}" 2>&1 &
VERIFY_PID=$!
VERIFY_PGID="$(ps -o pgid= -p "${VERIFY_PID}" | tr -d ' ')"
set +m

cat > "${STATE_FILE}" <<EOF
VERIFY_PID=${VERIFY_PID}
VERIFY_PGID=${VERIFY_PGID}
VERIFY_PORT=${PORT}
VERIFY_STARTED=$(date -u +%Y-%m-%dT%H:%M:%SZ)
VERIFY_CMD="npm run dev -- --host ${BIND_HOST} --port ${PORT}"
VERIFY_LOG=${LOG_FILE}
VERIFY_REPO=${REPO_ROOT}
EOF

echo "launch: started pid=${VERIFY_PID} pgid=${VERIFY_PGID} log=${LOG_FILE}"
echo "launch: waiting for ${BASE_URL}/ (first boot runs predev; missing dist/pagefind triggers a full build)"

ready=0
for ((i = 1; i <= 360; i++)); do
  if ! pid_alive "${VERIFY_PID}"; then
    echo "launch: process ${VERIFY_PID} exited before ready. Last log:" >&2
    tail -n 80 "${LOG_FILE}" >&2 || true
    rm -f "${STATE_FILE}"
    exit 1
  fi
  code="$(http_ok / || true)"
  if [[ "${code}" == "200" ]] && page_has_marker / 'hero__title'; then
    ready=1
    break
  fi
  sleep 2
done

if [[ "${ready}" != "1" ]]; then
  echo "launch: timed out waiting for ${BASE_URL}/ to serve .hero__title" >&2
  tail -n 80 "${LOG_FILE}" >&2 || true
  echo "launch: leaving the process up so you can inspect; run helpers/cleanup.sh" >&2
  exit 1
fi

echo "launch: ready ${BASE_URL}/"
echo "EVIDENCE_DIR=${EVIDENCE_DIR}"
echo "STATE_FILE=${STATE_FILE}"
exit 0
