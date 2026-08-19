#!/usr/bin/env python3
"""
intro_qa.py — mechanical layer of 02 - System/Intro QA.md.

Fail-closed string checks for a first paragraph. Flags here are verdicts.
Judgment tests (who-cares, transition, stacking, pillow, selfhood) are not
this script.

Usage:
    python3 scripts/intro_qa.py FILE.md
    python3 scripts/intro_qa.py --text "the paragraph"

Exit 0 = no mechanical fails. Exit 1 = at least one FAIL.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

OWNER_QUOTES = (
    "never white enough to be considered white",
    "not asian enough to be asian",
    "a people is a set of values",
    "america has givers and takers",
)

INTENSIFIERS = re.compile(
    r"\b(100\s*%|one hundred percent|fully|completely|entirely)\b",
    re.I,
)
HUNDRED_AMERICAN = re.compile(r"\b100\s*%\s*american\b", re.I)
LIFE_ON_LINE = re.compile(
    r"willing to put my life on the line|put (?:my|his|her) life on the line",
    re.I,
)
# Owner 2026-08-19: TRADOC-green is a caveat (the 82nd was not that), not a motif.
TRADOC_GREEN = re.compile(
    r"one colou?r,?\s+green|in that green|\bgreen at TRADOC\b|everyone was (?:one colou?r,?\s+)?green",
    re.I,
)
# Owner 2026-08-19: true, performative on the page — same family as life-on-the-line.
NOT_WHO_I_WAS = re.compile(
    r"not who (?:i|he|she) was",
    re.I,
)
STANCE_FRAME = re.compile(
    r"\bI (?:hold|believe|treat it as|consider myself|consider that)\b",
    re.I,
)
RATHER_THAN = re.compile(r"\brather than\b", re.I)
NOT_BUT = re.compile(r"\bnot\s+[^,.;:]{1,40}\s+but\s+", re.I)
SMOOTHED_PAIR = re.compile(
    r"not\s+white enough to (?:be|count as) white.{0,80}not\s+asian enough to (?:be|count as) asian"
    r"|not\s+asian enough to (?:be|count as) asian.{0,80}not\s+white enough to (?:be|count as) white",
    re.I | re.S,
)
MONEY = re.compile(
    r"\b(salary|income|paycheck|wage|\$\d|net worth|millionaire)\b",
    re.I,
)


def body_of(text: str) -> str:
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) > 2:
            text = parts[2]
    text = re.split(r"^##+\s+", text, maxsplit=1, flags=re.M)[-1] if False else text
    return text.strip()


def first_paragraph(text: str) -> str:
    t = body_of(text)
    t = re.sub(r"^#+\s.*$", "", t, flags=re.M).strip()
    for b in re.split(r"\n\s*\n", t):
        b = b.strip()
        if b and not b.startswith("!") and not b.startswith("<"):
            return b
    return t


def masked(paragraph: str) -> str:
    """Blank owner-quote spans so his own wording does not trip antithesis."""
    out = paragraph
    lower = paragraph.lower()
    for q in OWNER_QUOTES:
        start = 0
        while True:
            i = lower.find(q, start)
            if i < 0:
                break
            out = out[:i] + (" " * len(q)) + out[i + len(q) :]
            start = i + len(q)
    out = re.sub(r"[“\"][^”\"]+[”\"]", lambda m: " " * len(m.group(0)), out)
    return out


def check(paragraph: str) -> list[str]:
    fails: list[str] = []
    raw = paragraph
    m = masked(paragraph)

    if HUNDRED_AMERICAN.search(raw):
        fails.append("ruled-off: '100% American'")
    if LIFE_ON_LINE.search(raw):
        fails.append("ruled-off: life-on-the-line")
    if TRADOC_GREEN.search(raw):
        fails.append("ruled-off: TRADOC-green motif")
    if NOT_WHO_I_WAS.search(raw):
        fails.append("ruled-off: performative 'not who I was'")
    if INTENSIFIERS.search(m):
        span = INTENSIFIERS.search(m)
        fails.append(f"intensifier: {span.group(0)!r}")
    if STANCE_FRAME.search(raw):
        fails.append(f"stance frame: {STANCE_FRAME.search(raw).group(0)!r}")
    if RATHER_THAN.search(m):
        fails.append("antithesis: 'rather than'")
    if NOT_BUT.search(m):
        fails.append(f"antithesis: {NOT_BUT.search(m).group(0)!r}")
    if SMOOTHED_PAIR.search(raw):
        fails.append("asymmetry: white/Asian pair was smoothed into a match")
    if MONEY.search(raw):
        fails.append(f"ruled-off money: {MONEY.search(raw).group(0)!r}")
    return fails


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("path", nargs="?", help="markdown file; first prose paragraph is checked")
    p.add_argument("--text", help="check this paragraph directly")
    p.add_argument("--json", action="store_true")
    args = p.parse_args()
    if args.text:
        para = args.text.strip()
    elif args.path:
        para = first_paragraph(Path(args.path).read_text(encoding="utf-8"))
    else:
        print("usage: intro_qa.py FILE.md | --text PARAGRAPH", file=sys.stderr)
        return 2
    fails = check(para)
    if args.json:
        import json

        print(json.dumps({"pass": not fails, "fails": fails, "paragraph": para}, ensure_ascii=False))
    else:
        if fails:
            print("FAIL")
            for f in fails:
                print(f"  - {f}")
        else:
            print("PASS")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
