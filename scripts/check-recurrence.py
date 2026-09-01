#!/usr/bin/env python3
"""QA gate: recurrence-minus fragment.

This instance named as the last instance of the same noun, minus something.
Specimens 2026-09-01: "the head before it had"; "the last head still had";
"cannot see the notes the last run used."

Not a write-act. Run after a draft, or over a folder.

usage:
    python3 scripts/check-recurrence.py FILE.md
    python3 scripts/check-recurrence.py wiki/
    python3 scripts/holdings.py --selftest
"""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import holdings


def sentences(text):
    sents = []
    for p in holdings.body_paragraphs(text):
        sents.extend(re.split(r"(?<=[.!?])\s+", p))
    return sents


def scan_file(path):
    text = Path(path).read_text(encoding="utf-8", errors="replace")
    rows = []
    for s in sentences(text):
        s = s.strip()
        if len(s) < 20:
            continue
        span = holdings.recurrence_absence(s)
        if span:
            rows.append((span, s))
    return rows


def main():
    if len(sys.argv) < 2:
        print(__doc__.strip(), file=sys.stderr)
        sys.exit(2)
    target = Path(sys.argv[1])
    files = [target] if target.is_file() else sorted(target.rglob("*.md"))
    n = 0
    for f in files:
        if any(p in f.parts for p in ("node_modules", "_archive")):
            continue
        for span, sent in scan_file(f):
            n += 1
            print(f"{f}")
            print(f"  SPAN  {span}")
            print(f"  SENT  {sent}")
            print()
    print(f"{n} hits in {len(files)} files", file=sys.stderr)


if __name__ == "__main__":
    main()
