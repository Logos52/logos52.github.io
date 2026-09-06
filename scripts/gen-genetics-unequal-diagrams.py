#!/usr/bin/env python3
"""gen-genetics-unequal-diagrams.py — figures for wiki/Worldviews & the Political Order/Genetics and Unequal Societies - The Distance Claim.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-genetics-unequal-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "genetics-unequal-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10):
    out = [MARKER]; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, color, size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_distance_scale():
    out = [cap(20, 14, "fixation index, as the account gives it (0 = identical frequencies)")]
    X0, X1 = 60, 640; vmax = 0.25
    def X(v): return X0 + (X1 - X0) * v / vmax
    out.append(line(X0, 96, X1, 96, GRID, 1.2))
    for t in (0, 0.05, 0.10, 0.15, 0.20, 0.25):
        out.append(line(X(t), 92, X(t), 100, GRID)); out.append(txt(X(t), 114, "%.2f" % t, 10, .6, anchor="middle"))
    out.append(line(X(0.15), 24, X(0.15), 96, "rgba(130,130,130,.8)", 1.2, 'stroke-dasharray="4 3"'))
    out.append(txt(X(0.15) + 6, 36, "0.15: the line between one kind and two", 10, .7))
    pts = [(0.11, "circles vs triangles", TEAL, 54), (0.15, "circles vs squares", PURPLE, 70), (0.17, "dog vs wolf", GRAY, 86), (0.19, "triangles vs squares", INDIGO, 54)]
    for v, lab, col, y in pts:
        out.append('<circle cx="%.1f" cy="%d" r="6" fill="%s" opacity=".9"><title>%s: %s</title></circle>' % (X(v), y, col if col != GRAY else "rgba(130,130,130,.8)", lab, v))
        out.append(txt(X(v), y - 10, "%s %s" % (lab, v), 9.5, .8, anchor="middle"))
    out.append(txt(20, 140, "Two of the three pairs sit at or past the line a domestic dog and a gray wolf cross at about 0.17.", 10.5, .78))
    return svg("distance_scale", 152, "The fixation index for the three pairs: circles and triangles 0.11, circles and squares 0.15, triangles and squares 0.19, against dog and wolf at 0.17", "\n".join(out))

def fig_isolation_span():
    out = [cap(20, 14, "years, as the account gives them")]
    rows = [("the squares' desert isolation", 40000, INDIGO, .9, "almost 40,000 years"), ("dogs as a species, upper figure", 30000, GRAY, .7, "about 30,000 years"), ("dogs as a species, lower figure", 15000, GRAY, .45, "about 15,000 years")]
    body, y = hbars(rows, 260, 640, 26, gap=30, bar=16, vmax=40000, fmt=lambda v: "{:,}".format(v), label_w=240)
    out.append(body)
    out.append(txt(20, y + 24, "Longer than dogs have been dogs, with little mixing, is where the account puts the distance.", 10.5, .78))
    return svg("isolation_span", y + 36, "The squares were isolated for almost 40,000 years; dogs became a species 15,000 to 30,000 years ago", "\n".join(out))

def fig_the_chain():
    out = [cap(20, 14, "the three links the claim runs on")]
    out += chain([["gene frequencies", "differ", "(the index)"], ["nervous-system", "genes among the", "most different", "(2011)"], ["intelligence,", "personality,", "temperament", "(asserted)"], ["the kind of", "society a", "people builds"]], 26, PURPLE, w=140, gap=28, h=66)
    out.append(txt(20, 118, "The first link is a standard tool. The second is one unnamed comparison. The third is a sentence. Everything after rests on the last two.", 10.5, .78))
    return svg("the_chain", 130, "The claim's chain: gene frequencies, nervous-system genes, intelligence and temperament, the kind of society built", "\n".join(out))

def fig_three_societies():
    out = [MARKER, cap(20, 14, "the societies each shape built, on the account")]
    out.append(box(20, 26, 200, 70, ["circles", "individualistic,", "decentralized"], TEAL))
    out.append(box(240, 26, 200, 70, ["triangles", "collectivist,", "centralized"], INDIGO))
    out.append(box(460, 26, 200, 70, ["squares", "no comparable", "civilization"], PURPLE))
    out.append(txt(20, 124, "Each people, the account says, built the society its own neurology runs best in, so no one system fits all three.", 10.5, .78))
    return svg("three_societies", 136, "The societies each shape built: circles decentralized, triangles centralized, squares none comparable", "\n".join(out))

def fig_child_distance():
    out = [MARKER, cap(20, 14, "where a child of two shapes sits, on the account's plot")]
    # a number line of distance from the circle parent
    X0, X1 = 60, 620
    out.append(line(X0, 70, X1, 70, GRID, 1.2)); out.append(txt(X0, 92, "close to the circle parent", 10, .6)); out.append(txt(X1, 92, "far", 10, .6, anchor="end"))
    pts = [(80, "the circle parent", TEAL), (230, "a random circle from another country", TEAL), (400, "the circle-triangle child", PURPLE), (560, "the triangle parent", INDIGO)]
    for x, lab, col in pts:
        out.append('<circle cx="%d" cy="70" r="7" fill="%s" opacity=".9"><title>%s</title></circle>' % (x, col, lab))
        out.append(txt(x, 52 if x != 230 else 40, lab, 9.5, .8, anchor="middle"))
    out.append(txt(20, 124, "The child sits farther from each parent than a stranger of the parent's own kind, so neither parent is fitted to the child's best environment.", 10.5, .78))
    out.append(txt(20, 140, "Between circles and triangles an intermediate group already exists. Between squares and either other shape there is none.", 10.5, .78))
    return svg("child_distance", 152, "A circle-triangle child sits farther from the circle parent than a random circle from another country", "\n".join(out))

def fig_the_verdict():
    out = [cap(20, 14, "the account's closing verdict")]
    out.append(box(20, 26, 305, 96, ["circles tried mixed societies", "results pleased nobody:", "not circles, not squares,", "not square-circles"], TEAL, 10.5))
    out.append(box(355, 26, 305, 96, ["triangles declined to try", "kept their society tuned", "to themselves; called callous,", "hard to argue with, on the results"], INDIGO, 10.5))
    out.append(txt(20, 148, "The one indicator the account names for how squares fare is how far circles run the administration.", 10.5, .78))
    return svg("the_verdict", 160, "The account's verdict: mixed societies pleased nobody, and the people who kept their society for themselves chose right", "\n".join(out))

FIGS = [fig_distance_scale, fig_isolation_span, fig_the_chain, fig_three_societies, fig_child_distance, fig_the_verdict]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
