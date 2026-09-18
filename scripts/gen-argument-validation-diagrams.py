#!/usr/bin/env python3
"""gen-argument-validation-diagrams.py — the one figure on wiki/Argument Validation/Argument Validation.md.
usage: python3 scripts/gen-argument-validation-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "argument-validation-diagrams")
os.makedirs(d.OUT, exist_ok=True)

def fig_valid_sound():
    out = [cap(20, 14, "valid, sound, and what validating checks")]
    # column headers
    out.append(txt(285, 40, "the conclusion follows", 10.5, .8, anchor="middle", weight=600))
    out.append(txt(285, 53, "from the facts", 10.5, .8, anchor="middle", weight=600))
    out.append(txt(535, 40, "the conclusion does", 10.5, .8, anchor="middle", weight=600))
    out.append(txt(535, 53, "not follow", 10.5, .8, anchor="middle", weight=600))
    # row headers
    out.append(txt(150, 96, "the facts are true", 10.5, .8, anchor="end", weight=600))
    out.append(txt(150, 170, "a fact is false", 10.5, .8, anchor="end", weight=600))
    # cells
    out.append(box(165, 64, 240, 60, ["sound", "valid, and the facts hold"], GREEN, 10.5))
    out.append(box(415, 64, 240, 60, ["not valid", "the conclusion is not supported"], None, 10.5))
    out.append(box(165, 138, 240, 60, ["valid, not sound", "follows from a false fact"], YELLOW, 10.5))
    out.append(box(415, 138, 240, 60, ["not valid", "the conclusion is not supported"], None, 10.5))
    out.append(txt(20, 226, "Validating an argument means finding out which box it is in. Valid is the left column. Sound is the top left box only.", 10.5, .78))
    return svg("valid_sound", 238, "Valid means the conclusion follows from the facts; sound means valid with true facts; validating means finding out which box an argument is in", "\n".join(out))

FIGS = [fig_valid_sound]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figure to", d.OUT)
    if "--inject" in sys.argv: d.inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
