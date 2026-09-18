#!/usr/bin/env python3
"""gen-south-africa-diagrams.py — figures for wiki/Worldviews & the Political Order/South Africa is a Warning to the West.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-south-africa-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "south-africa-diagrams"); os.makedirs(d.OUT, exist_ok=True)
SA, OTHER, PRIV = ORANGE, INDIGO, PURPLE

def bars(name, caption, rows, note, vmax, fmt, label_w=250, label=None):
    out = [cap(20, 14, caption)]
    body, y = hbars(rows, 20 + label_w, 600, 26, gap=28, bar=15, vmax=vmax, fmt=fmt, label_w=label_w)
    out.append(body); out.append(txt(20, y + 22, note, 10.5, .78))
    return svg(name, y + 34, label or caption, "\n".join(out))

def fig_rail():
    return bars("rail", "people carried by the commuter railways each day", [("2008", 600000, OTHER, .9, "about 600,000"), ("last year", 14000, SA, .9, "fewer than 14,000")], "Gangs stole the cable and the signalling equipment, and nobody intervened.", 640000, lambda v: ("about " if v > 100000 else "fewer than ") + "{:,}".format(v), label_w=90)

def fig_guards_police():
    return bars("guards_police", "who guards about 62 million South Africans", [("registered private security officers", 2700000, PRIV, .9, "about 2.7 million"), ("police officers", 150000, SA, .9, "fewer than 150,000")], "The private guards outnumber the army and the police combined.", 3000000, lambda v: "about 2.7 million" if v > 1000000 else "fewer than 150,000", label_w=220)

FIGS = [fig_rail, fig_guards_police]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
