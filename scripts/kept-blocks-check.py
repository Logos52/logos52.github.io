#!/usr/bin/env python3
"""Prove a wiki page kept the blocks regeneration must not touch.

A kept block is the tail of the page from the first of these headings through
the end of the file, byte for byte (decoded text, final newlines stripped):

  ## Sources
  ## Related pages
  ## Related
  ## Links
  ## Links into the knowledge base
  ## See also

The H1 must match the skeleton. Frontmatter keys other than `updated`,
`written-by`, `prose-model`, `method`, and `description` must match too.
The frontmatter must parse as YAML.

The skeleton is commit 6e20c69 ("Outline pivot: strip every wiki page to its
kept blocks"), which lives on `outline-regen-2026-09-24`, not on main.
Override with --base or KEPT_BLOCKS_BASE.

The four stamp keys (`updated`, `written-by`, `method`, `description`) are
required only when the working file is not the skeleton blob.

When `<repo>/scripts/outline-kept-check.py` exists, every page that differs
from the skeleton is handed to that script (`--base REF`). The rules below
run only when that file is absent, or when --no-delegate is set.

usage:
  python3 scripts/kept-blocks-check.py [--repo DIR] [--base REF] [--no-delegate] [PAGE ...]
  no pages = every wiki/**/*.md

Exit 0 when every page passes. Exit 1 otherwise. Never reads raw/private/.
"""
import os, re, sys, subprocess, argparse

KEPT = ("sources", "related pages", "related", "links", "links into the knowledge base", "see also")
FREE = {"updated", "written-by", "prose-model", "method", "description"}
STAMP = ("updated", "written-by", "method", "description")

ap = argparse.ArgumentParser(description="Check wiki pages kept their skeleton blocks.")
ap.add_argument("--repo", default=".")
ap.add_argument("--base", default=os.environ.get("KEPT_BLOCKS_BASE", "6e20c69"))
ap.add_argument("--no-delegate", action="store_true")
ap.add_argument("pages", nargs="*")
args = ap.parse_args()

repo = os.path.abspath(args.repo)

def refuse(path):
    norm = path.replace("\\", "/").lstrip("./")
    if norm == "raw/private" or norm.startswith("raw/private/") or "/raw/private/" in "/" + norm:
        sys.exit("kept-blocks: refusing to read raw/private")

def git(args_list, check=True):
    proc = subprocess.run(["git", "-C", repo, *args_list], capture_output=True, text=True)
    if check and proc.returncode != 0:
        sys.stderr.write(proc.stderr)
        sys.exit(proc.returncode or 1)
    return proc

base_ok = git(["rev-parse", "--verify", "--quiet", args.base + "^{commit}"], check=False)
if base_ok.returncode != 0:
    sys.exit(
        "kept-blocks: base %r is not a commit in %s. "
        "The skeleton commit 6e20c69 is on outline-regen-2026-09-24. "
        "Fetch that branch, or pass --base." % (args.base, repo)
    )
base = args.base

def wiki_pages():
    root = os.path.join(repo, "wiki")
    if not os.path.isdir(root):
        sys.exit("kept-blocks: no wiki/ directory in %s" % repo)
    out = []
    for dirpath, dirnames, filenames in os.walk(root, followlinks=False):
        dirnames[:] = [d for d in dirnames if d != "private" and not d.startswith(".")]
        for fn in filenames:
            if fn.endswith(".md"):
                out.append(os.path.join(dirpath, fn))
    out.sort()
    return out

if args.pages:
    pages = []
    for p in args.pages:
        refuse(p)
        full = p if os.path.isabs(p) else os.path.join(repo, p)
        if not os.path.isfile(full):
            sys.exit("kept-blocks: not a file: %s" % p)
        pages.append(os.path.abspath(full))
else:
    pages = wiki_pages()

def rel_of(path):
    rel = os.path.relpath(path, repo).replace("\\", "/")
    refuse(rel)
    if rel.startswith("../") or not rel.startswith("wiki/"):
        sys.exit("kept-blocks: page is outside wiki/: %s" % rel)
    return rel

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
            cur = mk.group(1)
            keys[cur] = mk.group(2).strip()
        elif cur and (l.startswith("  ") or l.startswith("\t")):
            keys[cur] += "\n" + l
    return fm, h1, tail, keys

def problems_for(old, new):
    ofm, oh1, otail, okeys = split(old)
    nfm, nh1, ntail, nkeys = split(new)
    problems = []
    if oh1 != nh1:
        problems.append("H1 changed: %r -> %r" % (oh1, nh1))
    if otail != ntail:
        problems.append("kept blocks changed (region from first kept heading to end differs)")
    for k, v in okeys.items():
        if k in FREE:
            continue
        if nkeys.get(k) != v:
            problems.append("frontmatter key changed or lost: %s" % k)
    for k in nkeys:
        if k not in okeys and k not in FREE:
            problems.append("frontmatter key added: %s" % k)
    for k in STAMP:
        if not nkeys.get(k):
            problems.append("frontmatter key missing or empty: %s" % k)
    try:
        import yaml
        yaml.safe_load(nfm)
    except ImportError:
        pass
    except Exception as e:
        problems.append("frontmatter YAML invalid: %s" % e)
    return problems

outline = os.path.join(repo, "scripts", "outline-kept-check.py")
delegate = os.path.isfile(outline) and not args.no_delegate
checker = "scripts/outline-kept-check.py" if delegate else "in-process rules (scripts/outline-kept-check.py is not in this checkout)"

failed = []
checked = 0
unchanged = 0

for path in pages:
    rel = rel_of(path)
    have = git(["rev-parse", "--verify", "--quiet", "%s:%s" % (base, rel)], check=False)
    if have.returncode != 0:
        failed.append((rel, ["no skeleton at %s" % base]))
        continue
    skeleton_blob = have.stdout.strip()
    hashed = git(["hash-object", "--path", rel, rel], check=False)
    if hashed.returncode != 0:
        failed.append((rel, ["could not hash working tree file", hashed.stderr.strip()]))
        continue
    if hashed.stdout.strip() == skeleton_blob:
        unchanged += 1
        continue
    checked += 1
    if delegate:
        proc = subprocess.run(
            [sys.executable, outline, rel, "--base", base],
            cwd=repo,
            capture_output=True,
            text=True,
        )
        if proc.returncode != 0:
            detail = (proc.stdout + proc.stderr).strip() or "outline-kept-check.py exited %s" % proc.returncode
            failed.append((rel, [detail]))
    else:
        try:
            old = git(["show", "%s:%s" % (base, rel)]).stdout
            new = open(path, encoding="utf-8").read()
        except UnicodeError as e:
            failed.append((rel, ["could not read page: %s" % e]))
            continue
        found = problems_for(old, new)
        if found:
            failed.append((rel, found))

if failed:
    print("FAIL: %d of %d wiki pages" % (len(failed), len(pages)))
    print("checker: %s" % checker)
    print("base: %s" % base)
    for rel, probs in failed:
        print(rel)
        for p in probs:
            for line in p.splitlines():
                print(" -", line)
    sys.exit(1)

print(
    "PASS: %d pages checked against %s (%s), %d unchanged from the skeleton"
    % (checked, base, checker, unchanged)
)
