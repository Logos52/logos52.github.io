#!/usr/bin/env bash
# Tear down only the Astro instance this run launched.
# Evidence at EVIDENCE_DIR survives. Never kill by process name.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "${SCRIPT_DIR}/common.sh"

load_run
if [[ -z "${VERIFY_PID:-}" ]]; then
  echo "cleanup: no run state at ${STATE_FILE}; nothing for this skill to kill"
  echo "cleanup: evidence left at ${EVIDENCE_DIR}"
  exit 0
fi

if pid_alive "${VERIFY_PID}"; then
  echo "cleanup: stopping pid=${VERIFY_PID} pgid=${VERIFY_PGID:-?} (only what launch started)"
  if [[ -n "${VERIFY_PGID:-}" ]]; then
    kill -- "-${VERIFY_PGID}" 2>/dev/null || kill "${VERIFY_PID}" 2>/dev/null || true
  else
    kill "${VERIFY_PID}" 2>/dev/null || true
  fi
  for ((i = 0; i < 20; i++)); do
    if ! pid_alive "${VERIFY_PID}"; then
      break
    fi
    sleep 0.25
  done
  if pid_alive "${VERIFY_PID}"; then
    echo "cleanup: pid still alive; sending SIGKILL to our tree only"
    if [[ -n "${VERIFY_PGID:-}" ]]; then
      kill -9 -- "-${VERIFY_PGID}" 2>/dev/null || kill -9 "${VERIFY_PID}" 2>/dev/null || true
    else
      kill -9 "${VERIFY_PID}" 2>/dev/null || true
    fi
  fi
else
  echo "cleanup: recorded pid ${VERIFY_PID} already gone"
fi

rm -f "${STATE_FILE}"
echo "cleanup: run state removed"
echo "cleanup: evidence still at ${EVIDENCE_DIR}"
if [[ -d "${EVIDENCE_DIR}" ]]; then
  ls -la "${EVIDENCE_DIR}" || true
fi
exit 0
