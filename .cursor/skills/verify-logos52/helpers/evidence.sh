#!/usr/bin/env bash
# Print and create the named evidence directory. Cleanup must not delete this.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "${SCRIPT_DIR}/common.sh"

mkdir -p "${EVIDENCE_DIR}"
echo "${EVIDENCE_DIR}"
