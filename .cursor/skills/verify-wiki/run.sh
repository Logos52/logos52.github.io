#!/usr/bin/env bash
# verify-wiki: run the six post-batch checks in order. Stop at the first failure.
# Usage: bash .cursor/skills/verify-wiki/run.sh [checkout]
# The checkout defaults to the repo that contains this skill.
# Does not install dependencies. Does not kill a server on port 4321 that this run did not start.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_REPO="$(cd "${SCRIPT_DIR}/../../.." && pwd)"
TARGET="$(cd "${1:-${SKILL_REPO}}" && pwd)"
PORT="${VERIFY_PORT:-4321}"
CHECK="${SKILL_REPO}/scripts/kept-blocks-check.py"

if [[ -d /opt/cursor/artifacts && -z "${VERIFY_EVIDENCE_DIR:-}" ]]; then
  EVIDENCE="/opt/cursor/artifacts/verify-wiki"
elif [[ -n "${VERIFY_EVIDENCE_DIR:-}" ]]; then
  EVIDENCE="${VERIFY_EVIDENCE_DIR}"
else
  EVIDENCE="/tmp/verify-wiki/evidence"
fi
mkdir -p "${EVIDENCE}"
LOG="${EVIDENCE}/preview.log"

fail() {
  echo ""
  echo "verify-wiki: FAILED at step ${1}"
  echo "${2}"
  echo "Later steps were not run."
  exit 1
}

echo "verify-wiki: target ${TARGET}"
echo "verify-wiki: git $(git -C "${TARGET}" rev-parse --abbrev-ref HEAD) $(git -C "${TARGET}" rev-parse --short HEAD)"
echo "verify-wiki: evidence ${EVIDENCE}"

echo ""
echo "verify-wiki: step 1/6 kept-blocks check"
if [[ ! -f "${CHECK}" ]]; then
  fail 1 "missing ${CHECK}"
fi
if ! python3 -u "${CHECK}" --repo "${TARGET}"; then
  fail 1 "kept-blocks check failed. The page list above is the failure."
fi
echo "verify-wiki: step 1/6 PASS"

echo ""
echo "verify-wiki: step 2/6 npm run lint:fm"
if ! (cd "${TARGET}" && npm run lint:fm); then
  fail 2 "npm run lint:fm failed."
fi
echo "verify-wiki: step 2/6 PASS"

echo ""
echo "verify-wiki: step 3/6 npm run build"
if ! (cd "${TARGET}" && npm run build); then
  fail 3 "npm run build failed."
fi
echo "verify-wiki: step 3/6 PASS"

echo ""
echo "verify-wiki: step 4/6 render one page in a 390px iframe"

listeners=""
if command -v ss >/dev/null 2>&1; then
  listeners="$(ss -ltnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u | tr '\n' ' ')"
elif command -v lsof >/dev/null 2>&1; then
  listeners="$(lsof -nP -iTCP:${PORT} -sTCP:LISTEN -t 2>/dev/null | sort -u | tr '\n' ' ')"
fi
if [[ -n "${listeners// /}" ]]; then
  fail 4 "port ${PORT} is already bound by pid ${listeners}. This run will not kill a server it did not start."
fi

PREVIEW_PID=""
PREVIEW_PGID=""
cleanup() {
  if [[ -n "${PREVIEW_PGID}" ]]; then
    kill -TERM -"${PREVIEW_PGID}" 2>/dev/null || true
    sleep 0.3
    kill -KILL -"${PREVIEW_PGID}" 2>/dev/null || true
  elif [[ -n "${PREVIEW_PID}" ]]; then
    kill -TERM "${PREVIEW_PID}" 2>/dev/null || true
  fi
}
trap cleanup EXIT

: > "${LOG}"
set -m
(cd "${TARGET}" && npm run preview -- --host 127.0.0.1 --port "${PORT}") >>"${LOG}" 2>&1 &
PREVIEW_PID=$!
PREVIEW_PGID="$(ps -o pgid= -p "${PREVIEW_PID}" | tr -d ' ')"
set +m
echo "verify-wiki: preview pid ${PREVIEW_PID} pgid ${PREVIEW_PGID}"

ready=0
for ((i = 1; i <= 60; i++)); do
  if ! kill -0 "${PREVIEW_PID}" 2>/dev/null; then
    echo "preview exited before it was ready. Last log:"
    tail -n 80 "${LOG}" || true
    fail 4 "npm run preview exited before http://127.0.0.1:${PORT}/ returned 200."
  fi
  code="$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${PORT}/" || true)"
  if [[ "${code}" == "200" ]]; then
    ready=1
    break
  fi
  sleep 0.5
done
if [[ "${ready}" != "1" ]]; then
  echo "preview did not become ready. Last log:"
  tail -n 80 "${LOG}" || true
  fail 4 "timed out waiting for http://127.0.0.1:${PORT}/ to return 200."
fi

node "${SCRIPT_DIR}/render-page.mjs" --repo "${TARGET}" --origin "http://127.0.0.1:${PORT}" --out "${EVIDENCE}"
rc=$?
if [[ "${rc}" -ne 0 ]]; then
  step="${rc}"
  if [[ "${step}" != "4" && "${step}" != "5" && "${step}" != "6" ]]; then
    step=4
  fi
  case "${step}" in
    4) what="the page did not render in the 390px iframe" ;;
    5) what="the JS console reported errors" ;;
    6) what="the phone or laptop screenshot was not saved" ;;
  esac
  fail "${step}" "${what}."
fi

echo ""
echo "verify-wiki: all 6 steps passed"
echo "verify-wiki: evidence ${EVIDENCE}"
