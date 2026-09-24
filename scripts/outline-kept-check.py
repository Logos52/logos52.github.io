#!/usr/bin/env python3
"""outline-kept-check.py: verify a regenerated page kept its blocks and frontmatter.

Compares PAGE against a skeleton (the stripped page as it stood before regeneration):
either --skeleton FILE or --base GITREF (uses `git show REF:PAGE`).
Checks: the region from the first kept heading to the end is byte-identical; every
frontmatter key other than updated / written-by / prose-model / method / description is
unchanged; the H1 is unchanged; the frontmatter parses. Prints OK or the differences.
"""
import re, sys, subprocess, argparse

KEPT = ("sources", "related pages", "related", "links", "links into the knowledge base", "see also")
FREE = {"updated", "written-by", "prose-model", "method", "description"}

ap = argparse.ArgumentParser()
ap.add_argument("page"); ap.add_argument("--skeleton"); ap.add_argument("--base")
a = ap.parse_args()
if a.skeleton:
    old = open(a.skeleton, encoding="utf-8").read()
elif a.base:
    old = subprocess.run(["git", "show", f"{a.base}:{a.page}"], capture_output=True, text=True, check=True).stdout
else:
    sys.exit("give --skeleton or --base")
new = open(a.page, encoding="utf-8").read()

def split(txt):
    m = re.match(r"^---\n(.*?)\n---\n", txt, re.S)
    fm = m.group(1) if m else ""
    rest = txt[m.end():] if m else txt
    lines = rest.split("\n")
    h1 = next((l for l in lines if l.startswith("# ")), "")
    kept = next((i for i, l in enumerate(lines) if l.startswith("## ") and l[3:].strip().lower() in KEPT), None)
    tail = "\n".join(lines[kept:]).rstrip("\n") if kept is not None else ""
    keys = {}
    cur = None
    for l in fm.split("\n"):
        mk = re.match(r"^([A-Za-z0-9_-]+):(.*)$", l)
        if mk:
            cur = mk.group(1); keys[cur] = mk.group(2).strip()
        elif cur and (l.startswith("  ") or l.startswith("\t")):
            keys[cur] += "\n" + l
    return fm, h1, tail, keys

ofm, oh1, otail, okeys = split(old)
nfm, nh1, ntail, nkeys = split(new)
problems = []
if oh1 != nh1: problems.append(f"H1 changed: {oh1!r} -> {nh1!r}")
if otail != ntail: problems.append("kept blocks changed (region from first kept heading to end differs)")
for k, v in okeys.items():
    if k in FREE: continue
    if nkeys.get(k) != v: problems.append(f"frontmatter key changed or lost: {k}")
for k in nkeys:
    if k not in okeys and k not in FREE: problems.append(f"frontmatter key added: {k}")
for k in ("updated", "written-by", "method", "description"):
    if not nkeys.get(k): problems.append(f"frontmatter key missing or empty: {k}")
try:
    import yaml; yaml.safe_load(nfm)
except ImportError: pass
except Exception as e: problems.append(f"frontmatter YAML invalid: {e}")
if problems:
    print("PROBLEMS"); [print(" -", p) for p in problems]; sys.exit(1)
print("OK")
