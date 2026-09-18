#!/usr/bin/env python3
"""bias-sweep.py — the mechanical half of 02 - System/Bias QA.md (owner, 2026-09-18: "for any political pages,
make sure you add a QA to avoid left biases from now on").

A political page is written from the seat of the person making the argument. The lean comes in when a sentence
is written from an observer's seat instead. This script lists the marks of the observer's seat, by line, so the
critic can read those sentences first. It does not judge; a mark can be the source's own word. The read in
Bias QA is the judgment half, and the owner's eye is the gate.

usage: bias-sweep.py PAGE.md [PAGE.md ...]     (no args = every page under wiki/Worldviews & the Political Order/)
Prints one line per hit with the mark that fired. Exit 1 if anything fired."""
import re, sys, glob, os

MARKS = [
 # attribution frames that hand the claim to someone else
 ("attribution", r"\b(is|are|was|were) said to\b|\bon (this|that|the|one|his|her|its) account\b|\baccording to\b|\b(critics|some|others|opponents|supporters) (say|argue|claim|contend|hold|maintain)\b|\bit (is|has been) (claimed|argued|suggested)\b|\breportedly\b|\bpurportedly\b|\bsupposedly\b"),
 # stance verbs that turn a fact into a belief
 ("stance verb", r"\b(held|holds|believed|believes|felt|feels|framed|frames|characteri[sz]ed|characteri[sz]es|portrayed|portrays|contended|contends|asserted|asserts|insisted|insists) that\b|\bin (his|her|their|its) view\b"),
 # hedges
 ("hedge", r"\barguably\b|\bperhaps\b|\bto some (extent|degree)\b|\bmay (have|be|well)\b|\bmight (have|be)\b|\bit could be argued\b|\bin a sense\b|\bsomewhat\b|\brelatively\b|\bfairly\b|\bmore or less\b|\bseem(s|ed)? to\b|\bappear(s|ed)? to\b|\btend(s|ed)? to\b"),
 # balance insertions and concessions
 ("balance", r"\bto be fair\b|\bof course\b|\bthat said\b|\bon the other hand\b|\bhowever,\b|\bnonetheless\b|\bnevertheless\b|\bboth sides\b|\bnuanced?\b|\bit should be noted\b|\bit is worth noting\b|\bin fairness\b|\badmittedly\b|\bgranted,\b"),
 # concession-first openers
 ("concession first", r"^(While|Although|Though|Even though|Despite|Whatever|Granted)\b"),
 # minimisers
 ("minimiser", r"\bordinary\b|\bmerely\b|\bjust\b|\bsimply\b|\bmodest(ly)?\b|\bminor\b|\bslight(ly)?\b|\bsomewhat\b"),
 # distancing punctuation and labels
 ("distancing", r"\bso-called\b|\bself-described\b|\bself-styled\b|\bcontroversial\b|\bproblematic\b|\bdivisive\b|\bpolari[sz]ing\b|\bfar-right\b|\bfar-left\b|\bhard-right\b|\bextremist\b"),
 # softer substitutes for words an argument uses at full strength (pointer only; the source's own word stays)
 ("softer word", r"\binsurgents?\b|\bmilitants?\b|\bfighters\b|\bunrest\b|\bcondemned\b|\bcriticised\b|\bcriticized\b|\bpassed away\b|\bpassed on\b|\bwhat was done to\b|\bmistreat(ed|ment)\b|\bdisadvantaged\b|\bunderserved\b|\bmarginali[sz]ed\b|\bundocumented\b|\bjustice-involved\b|\bunhoused\b|\bsex work(er)?s?\b"),
 # sympathetic glosses of the other side's programme words
 ("gloss", r"\bmake (the )?(races|people|everyone) equal\b|\blevel the playing field\b|\bcorrect(ing)? (past|historic(al)?) (wrongs?|injustices?)\b|\bredress\b|\bfor the greater good\b"),
]
PATS = [(name, re.compile(p, re.I if name != "concession first" else 0)) for name, p in MARKS]

def body(text):
    text = re.sub(r"^---\n.*?\n---\n", "", text, count=1, flags=re.S)
    text = re.sub(r"<!-- diagram:.*?<!-- /diagram -->", "", text, flags=re.S)
    m = re.search(r"^## (Sources|Sources and links|Sources & links|Links)\b.*$", text, flags=re.M)
    return text[:m.start()] if m else text

files = sys.argv[1:] or sorted(glob.glob("wiki/Worldviews & the Political Order/*.md"))
total = 0
for path in files:
    text = open(path, encoding="utf-8").read()
    hits = []
    for i, line in enumerate(body(text).splitlines(), 1):
        if not line.strip() or line.startswith("#"): continue
        for name, pat in PATS:
            m = pat.search(line)
            if m: hits.append((i, name, m.group(0), line.strip()[:140]))
    if hits:
        total += len(hits)
        print("%s  (%d)" % (path, len(hits)))
        for i, name, w, l in hits: print("   %d [%s: %s] %s" % (i, name, w, l))
print("\n%d marks" % total if total else "PASS: no observer marks")
sys.exit(1 if total else 0)
