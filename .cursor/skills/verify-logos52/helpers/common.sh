#!/usr/bin/env bash
# Shared paths and predicates for verify-logos52 helpers.
# Source only. Do not execute.

set -euo pipefail

VERIFY_NAME="verify-logos52"
PORT="${VERIFY_PORT:-4321}"
BIND_HOST="${VERIFY_BIND_HOST:-0.0.0.0}"
READY_HOST="${VERIFY_READY_HOST:-127.0.0.1}"
BASE_URL="http://${READY_HOST}:${PORT}"

# Repo root is three levels up from helpers/common.sh → skill → .cursor → repo
HELPERS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(cd "${HELPERS_DIR}/.." && pwd)"
REPO_ROOT="$(cd "${SKILL_DIR}/../../.." && pwd)"

STATE_DIR="${VERIFY_STATE_DIR:-/tmp/verify-logos52}"
STATE_FILE="${STATE_DIR}/run.env"
LOG_FILE="${STATE_DIR}/astro.log"

if [[ -d /opt/cursor/artifacts ]]; then
  EVIDENCE_DIR="${VERIFY_EVIDENCE_DIR:-/opt/cursor/artifacts/verify-logos52}"
else
  EVIDENCE_DIR="${VERIFY_EVIDENCE_DIR:-/tmp/verify-logos52/evidence}"
fi

mkdir -p "${STATE_DIR}" "${EVIDENCE_DIR}"

node_major() {
  node -p "parseInt(process.versions.node, 10)"
}

require_node_22() {
  if ! command -v node >/dev/null 2>&1; then
    echo "doctor: node is not on PATH" >&2
    return 1
  fi
  local major
  major="$(node_major)"
  if (( major < 22 )); then
    echo "doctor: need Node >= 22 (package.json engines); found $(node -v)" >&2
    return 1
  fi
}

require_install() {
  if [[ ! -d "${REPO_ROOT}/node_modules" ]]; then
    echo "launch: ${REPO_ROOT}/node_modules is missing. Run npm ci first (environment install). This skill does not install." >&2
    return 1
  fi
}

load_run() {
  if [[ -f "${STATE_FILE}" ]]; then
    # shellcheck disable=SC1090
    source "${STATE_FILE}"
  fi
}

listening_pids() {
  if command -v lsof >/dev/null 2>&1; then
    lsof -iTCP:"${PORT}" -sTCP:LISTEN -t -n -P 2>/dev/null || true
    return
  fi
  if command -v ss >/dev/null 2>&1; then
    ss -ltnp 2>/dev/null | awk -v p=":${PORT}" '
      $4 ~ p"$" {
        while (match($0, /pid=[0-9]+/)) {
          print substr($0, RSTART+4, RLENGTH-4)
          $0 = substr($0, RSTART+RLENGTH)
        }
      }'
    return
  fi
  return 0
}

pid_alive() {
  local pid="${1:-}"
  [[ -n "${pid}" ]] && kill -0 "${pid}" 2>/dev/null
}

is_in_tree() {
  local needle="$1"
  local root="$2"
  local cur="$needle"
  local i
  for ((i = 0; i < 32; i++)); do
    [[ -z "${cur}" || "${cur}" == "0" || "${cur}" == "1" ]] && return 1
    [[ "${cur}" == "${root}" ]] && return 0
    cur="$(ps -o ppid= -p "${cur}" 2>/dev/null | tr -d ' ')"
  done
  return 1
}

port_owned_by_run() {
  load_run
  if [[ -z "${VERIFY_PID:-}" ]] || ! pid_alive "${VERIFY_PID}"; then
    return 1
  fi
  local pids
  pids="$(listening_pids)"
  if [[ -z "${pids}" ]]; then
    return 1
  fi
  local p
  for p in ${pids}; do
    if [[ "${p}" == "${VERIFY_PID}" ]] || is_in_tree "${p}" "${VERIFY_PID}"; then
      return 0
    fi
    if [[ -n "${VERIFY_PGID:-}" ]]; then
      local pgid
      pgid="$(ps -o pgid= -p "${p}" 2>/dev/null | tr -d ' ')"
      if [[ "${pgid}" == "${VERIFY_PGID}" ]]; then
        return 0
      fi
    fi
  done
  return 1
}

http_ok() {
  local path="${1:-/}"
  # Swallow connect errors while the server is still binding; callers treat non-200 as not ready.
  curl -sS -o /dev/null -w "%{http_code}" --max-time 5 "${BASE_URL}${path}" 2>/dev/null || echo "000"
}

page_has_marker() {
  local path="$1"
  local marker="$2"
  # Read the body before matching. `grep -q` exits at the first hit and
  # SIGPIPEs curl (exit 23). Under pipefail that looks like a missing marker
  # even when the page is fine — doctor then refuses a healthy instance.
  local html
  html="$(curl -sS --max-time 8 "${BASE_URL}${path}" 2>/dev/null || true)"
  [[ -n "${html}" && "${html}" == *"${marker}"* ]]
}
