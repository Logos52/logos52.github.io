#!/usr/bin/env python3
"""outline-splice.py: put a freshly written body onto a stripped wiki page.

Keeps the frontmatter (with a few keys set), the H1, and everything from the first kept
block heading (## Sources, ## Related pages, ## Related, ## Links, ## Links into the
knowledge base, ## See also) to the end, byte for byte. Replaces only what sits between.

usage: outline-splice.py PAGE BODYFILE --description "one sentence" [--written-by fable] [--date 2026-09-24]
"""
import re, sys, argparse

KEPT = ("sources", "related pages", "related", "links", "links into the knowledge base", "see also")

ap = argparse.ArgumentParser()
ap.add_argument("page"); ap.add_argument("body")
ap.add_argument("--description", required=True)
ap.add_argument("--written-by", default="fable")
ap.add_argument("--date", default="2026-09-24")
ap.add_argument("--method", default="outline-2026-09-24")
a = ap.parse_args()

txt = open(a.page, encoding="utf-8").read()
m = re.match(r"^---\n(.*?)\n---\n", txt, re.S)
if not m:
    sys.exit("no frontmatter")
fm = m.group(1).split("\n")
rest = txt[m.end():]

def setkey(lines, key, value):
    out, done = [], False
    i = 0
    while i < len(lines):
        l = lines[i]
        if re.match(rf"^{re.escape(key)}:", l):
            out.append(f"{key}: {value}"); done = True; i += 1
            # drop continuation lines of a block scalar / list under this key
            while i < len(lines) and (lines[i].startswith("  ") or lines[i].startswith("\t")):
                i += 1
            continue
        out.append(l); i += 1
    if not done:
        # insert before tags: if present, else append
        for j, l in enumerate(out):
            if l.startswith("tags:"):
                out.insert(j, f"{key}: {value}"); break
        else:
            out.append(f"{key}: {value}")
    return out

desc = a.description.strip().replace('"', "'")
fm = setkey(fm, "updated", a.date)
fm = setkey(fm, "written-by", a.written_by)
fm = setkey(fm, "prose-model", a.written_by)
fm = setkey(fm, "method", a.method)
fm = setkey(fm, "description", f'"{desc}"')

lines = rest.split("\n")
h1 = next((i for i, l in enumerate(lines) if l.startswith("# ")), None)
if h1 is None:
    sys.exit("no H1")
kept = next((i for i, l in enumerate(lines) if l.startswith("## ") and l[3:].strip().lower() in KEPT), None)
head = lines[:h1 + 1]
tail = lines[kept:] if kept is not None else []
body = open(a.body, encoding="utf-8").read().strip("\n")
new = "\n".join(head) + "\n\n" + body + "\n" + ("\n" + "\n".join(tail) if tail else "\n")
new = "---\n" + "\n".join(fm) + "\n---\n" + new
if not new.endswith("\n"):
    new += "\n"
open(a.page, "w", encoding="utf-8").write(new)

# validate yaml
try:
    import yaml
    yaml.safe_load("\n".join(fm))
except ImportError:
    pass
except Exception as e:
    sys.exit(f"frontmatter is not valid YAML after splice: {e}")
print("spliced:", a.page)
