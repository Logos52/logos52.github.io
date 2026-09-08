#!/usr/bin/env python3
"""gen-shoot-training-i-diagrams.py — figures for wiki/Dimensions/Deep Processing/Shoot - Training I.md.
Everything drawn is something the page says. usage: python3 scripts/gen-shoot-training-i-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "shoot-training-i-diagrams"); os.makedirs(d.OUT, exist_ok=True)
ST = TEAL

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10, colors=None):
    out = []; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, (colors[i] if colors else color), size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_the_answer():
    out = [MARKER, cap(20, 14, "what happens to each thing the material offers")]
    out.append(box(20, 26, 150, 62, ["a passage,", "a diagram,", "a fact"], None, 10)); out.append(icon("book", 26, 30, 14))
    out.append(arrow(174, 57, 206, 57))
    out.append(box(210, 26, 190, 62, ["three questions in the head", "what is it, why is it important,", "how does it relate"], ST, 9.5)); out.append(icon("question", 216, 30, 14, "#2f9e8f"))
    out.append(arrow(404, 57, 436, 57))
    out.append(box(440, 26, 220, 62, ["onto the map as a link", "to what is already there,", "or marked and left"], ST, 10)); out.append(icon("map", 446, 30, 14, "#2f9e8f"))
    out.append(txt(20, 112, "An answer counts when it is logical, so it can be rebuilt, and interconnected, so the brain keeps it. Nothing is copied.", 10.5, .78))
    return svg("the_answer", 124, "Each thing the material offers passes through three questions and lands on the map as a link, or is marked and left", "\n".join(out))

def fig_replaces():
    out = [MARKER, cap(20, 14, "what shoot replaces, and what keeps running")]
    out.append(box(20, 26, 200, 50, ["traffic light, green light:", "answering the questions"], None, 10)); out.append(arrow(224, 51, 256, 51)); out.append(box(260, 26, 140, 50, ["Shoot"], ST, 12))
    out.append(box(20, 88, 200, 50, ["collect and process notes"], None, 10)); out.append(arrow(224, 113, 256, 113)); out.append(box(260, 88, 140, 50, ["the map"], ST, 12))
    out.append(panel(418, 6, 254, 152, "still running underneath", ST, 11))
    out.append(box(430, 34, 230, 32, ["Aim, as it was"], ST, 10))
    out.append(box(430, 74, 230, 32, ["maintaining focus and BEDS-M, into habits"], None, 9.5))
    out.append(box(430, 114, 230, 32, ["scheduling and retrieval, second nature"], None, 9.5))
    out.append(txt(20, 166, "The drill is gone from here. Aim and Shoot run alone.", 10.5, .78))
    return svg("replaces", 178, "Shoot replaces the green light and the old notes; Aim, focus, BEDS-M, scheduling, and retrieval keep running", "\n".join(out))

def fig_the_session():
    out = [MARKER, cap(20, 14, "a good session, watched from across a desk")]
    out += chain([["read a", "stretch"], ["stop, flip", "back"], ["write a", "few lines"], ["join them to", "the map"], ["find the next", "question"], ["back into", "the material"]], 26, ST, w=96, gap=14, h=56, size=9.5)
    out.append(txt(20, 108, "Back and forth, not front to back. It looks chaotic from outside. Reading in the book's order is the real chaos.", 10.5, .78))
    return svg("the_session", 120, "A session runs back and forth between the map and the material, never front to back", "\n".join(out))

def fig_the_rules():
    out = [cap(20, 14, "the seven note rules, added one at a time")]
    rows = [("Visual", "fewer words, doodles and shorthand carry it"), ("Processed", "nothing on the page that skipped the three questions"), ("Relational", "relationships, not items"), ("Freehand", "a pen on an infinite canvas, not a keyboard"), ("Reflective", "your order, the one Aim chose"), ("Efficient", "after a block: did you keep it, can you use it")]
    y = 26
    for i, (r, m) in enumerate(rows):
        out.append(box(20, y, 120, 28, [r], ST, 10.5)); out.append(box(150, y, 510, 28, [m], None, 10)); y += 34
    out.append(txt(20, y + 12, "Forgetting more than 30% of what was written means an earlier rule failed. Cornell notes are the overhyped version of collect and process.", 10.5, .78))
    return svg("the_rules", y + 24, "The six letters of the note rules and what each one blocks", "\n".join(out))

def fig_feelings():
    out = [MARKER, cap(20, 14, "how it feels, and what each feeling means")]
    rows = [("effort, confusion, struggle", "the brain working; difficulty tracks learning", ST), ("no certainty for a long while", "the honest version; early certainty is the illusion", ST), ("drowsy", "the alarm; the processing has stopped", None), ("easy", "the alarm; not applied to the standard", None)]
    y = 26
    for f, m, c in rows:
        out.append(box(20, y, 250, 30, [f], c, 10)); out.append(arrow(274, y + 15, 306, y + 15)); out.append(box(310, y, 350, 30, [m], c, 10)); y += 36
    return svg("feelings", y + 6, "Effort and withheld certainty are expected; drowsiness and ease are the alarms", "\n".join(out))

def fig_when():
    out = [MARKER, cap(20, 14, "when the shoot goes")]
    out += chain([["before the class:", "the basic concepts", "and relationships"], ["during the class:", "short lines, map growing,", "question marks left"], ["after the class:", "finish the shoot,", "tidy the map"]], 26, ST, w=190, gap=30, h=62, size=9.5)
    out.append(txt(20, 108, "Monday to Friday around each class. Skin takes the map at the end of the week.", 10.5, .78))
    return svg("when", 120, "Shoot runs before, during, and after each class; Skin takes the map at the end of the week", "\n".join(out))

def fig_the_bar():
    out = [cap(20, 14, "the bar at the end of the stage")]
    out.append(box(20, 26, 640, 44, ["Shoot: Aim and Shoot connect accurately and seamlessly, with high chunking", "and accurate relationships between chunks, at moderately low effort"], ST, 10.5))
    out.append(txt(20, 92, "the checkpoint looks at three things", 9.5, .6, weight=700, ls=".08em"))
    out.append(box(20, 100, 205, 46, ["Kolb's cycle: consistent,", "observed not theoretical"], None, 9.5)); out.append(box(238, 100, 205, 46, ["the fundamentals still running:", "retrieval never dropped"], None, 9.5)); out.append(box(456, 100, 204, 46, ["the aim-and-shoot maps:", "graded on the next page"], ST, 9.5))
    out.append(txt(20, 172, "About 80% competence with everything so far. People slack on the first two.", 10.5, .78))
    return svg("the_bar", 184, "The one-sentence bar for Shoot and the three things the checkpoint reads", "\n".join(out))

FIGS = [fig_the_answer, fig_replaces, fig_the_session, fig_the_rules, fig_feelings, fig_when, fig_the_bar]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
