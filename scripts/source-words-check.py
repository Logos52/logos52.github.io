#!/usr/bin/env python3
"""Sources live only in the Sources section (owner, 2026-09-05: "no sources in anywhere except sources section").

Scans wiki pages and flags any body line, outside the Sources block, that refers to where a fact came from:
the video, the transcript, the captions, the podcast, the episode, the documentary, the lecture, the talk. Words like
source and interview are not flagged, because the learning pages use them for the study material and the method. Research banks and packets are skipped, because a bank is a source record by design.

usage: source-words-check.py [PAGE.md ...]      (no args = every page under wiki/)
Prints one line per hit and a count per page. Exit 1 if anything was flagged."""
import re, sys, os, glob
WORDS = r"\b(the|this|that|its|his|her|one)\s+(video|videos|transcript|transcripts|captions|podcast|podcasts|episode|episodes|documentary|lecture|lectures|talk)\b|\b(video|transcript|podcast|episode|documentary|lecture|talk)'s\b|\bin the (video|transcript|podcast|episode|lecture|talk)\b"
pat = re.compile(WORDS, re.I)
def body_before_sources(text):
    text = re.sub(r"^---\n.*?\n---\n", "", text, count=1, flags=re.S)
    m = re.search(r"^## (Sources and links|Sources|Sources & links|Links)\b.*$", text, flags=re.M)
    if not m: return text
    return text[:m.start()]
def is_bank(text):
    fm = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not fm: return False
    head = fm.group(1)
    return bool(re.search(r"^type:\s*(research|bank|packet|research-bank)\s*$", head, re.M)) or "/Research/" in path
files = sys.argv[1:] or sorted(glob.glob("wiki/**/*.md", recursive=True))
total = 0; pages = 0
for path in files:
    text = open(path, encoding="utf-8").read()
    if is_bank(text): continue
    hits = []
    for i, line in enumerate(body_before_sources(text).splitlines(), 1):
        if line.lstrip().startswith("- [[") and "wiki/Research/" in line: continue
        for m in pat.finditer(line):
            hits.append((i, line.strip()[:150]))
            break
    if hits:
        pages += 1; total += len(hits)
        print("%s  (%d)" % (path, len(hits)))
        for i, l in hits: print("   %d: %s" % (i, l))
print("\n%d hits on %d pages" % (total, pages) if total else "PASS: no source words outside Sources")
sys.exit(1 if total else 0)
