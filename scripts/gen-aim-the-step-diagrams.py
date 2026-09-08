#!/usr/bin/env python3
"""gen-aim-the-step-diagrams.py — figures for wiki/Dimensions/Deep Processing/Aim - The Step.md.
Everything drawn is something the page says. usage: python3 scripts/gen-aim-the-step-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "aim-the-step-diagrams"); os.makedirs(d.OUT, exist_ok=True)
ST, OLD = TEAL, None   # teal = the step, gray = what it replaces

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10, colors=None):
    out = []; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, (colors[i] if colors else color), size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_the_chain():
    out = [MARKER, cap(20, 14, "what the aim step builds, in order")]
    out += chain([["keywords,", "fast and", "out of order"], ["two questions", "of each: why,", "and how related"], ["relationships,", "several per", "keyword"], ["chunks,", "held loosely"], ["a backbone,", "no details", "on it"]], 26, ST, w=116, gap=20, h=62)
    out.append(txt(20, 116, "Questions before the material, so what is read afterwards has somewhere to land. The chunks are graded a stage later.", 10.5, .78))
    return svg("the_chain", 128, "From keywords to the two questions to relationships, chunks, and a backbone with no details", "\n".join(out))

def fig_replaces():
    out = [MARKER, cap(20, 14, "what aim replaces, and what stays")]
    out.append(box(20, 26, 190, 54, ["traffic light, red light:", "questions before reading"], None, 10)); out.append(arrow(214, 53, 246, 53)); out.append(box(250, 26, 150, 54, ["Aim"], ST, 12))
    out.append(box(20, 92, 190, 54, ["prestudy basics"], None, 10)); out.append(arrow(214, 119, 246, 119)); out.append(box(250, 92, 150, 54, ["Aim"], ST, 12))
    out.append(box(20, 158, 190, 54, ["traffic light, green light:", "answering the questions"], None, 10)); out.append(arrow(214, 185, 246, 185)); out.append(box(250, 158, 150, 54, ["stays until", "Shoot replaces it"], None, 10))
    out.append(cap(430, 14, "the three drills the step rests on"))
    out.append(box(430, 26, 230, 54, ["the traffic light drill:", "inquiry, trained as red and green"], ST, 10))
    out.append(box(430, 92, 230, 54, ["order control:", "learn in your own order"], ST, 10))
    out.append(box(430, 158, 230, 54, ["biggest chunks first:", "3 to 6 chunks in 20 to 30 minutes"], ST, 10))
    out.append(txt(20, 236, "Thirteen skills should be in place before the first Aim. These three are the ones the step is built from.", 10.5, .78))
    return svg("replaces", 248, "Aim replaces the red light and prestudy basics; the green light stays until Shoot; three drills underneath", "\n".join(out))

def fig_the_session():
    out = [cap(20, 14, "keyword collection: minutes for a topic of 15 to 30 concepts")]
    body, y = hbars([("about 80% of the concepts", 25, ST, .9, "25 minutes"), ("all of them", 120, GRAY, .6, "two hours")], 20 + 220, 640, 26, gap=30, bar=16, vmax=130, fmt=lambda v: ("%d min" % v) if v < 60 else "2 h", label_w=220)
    out.append(body)
    out.append(txt(20, y + 22, "The first beats the second. The collection is the easy part and can be handed to a tool. The two questions and the sketch cannot.", 10.5, .78))
    return svg("the_session", y + 34, "About 80 percent of the concepts in 25 minutes beats all of them in two hours", "\n".join(out))

def fig_feelings():
    out = [MARKER, cap(20, 14, "how it feels, and what each feeling means")]
    rows = [("chaotic, back and forth", "integrative thinking, building the network"), ("confusing, mid-answer", "deep processing"), ("overwhelmed by structures", "prioritising and evaluating"), ("insecure, skipping details", "schemas forming in the brain's own order"), ("slow, one keyword at a time", "consolidation; the slowness fades"), ("easy", "the alarm: questions copied from headings")]
    y = 26
    for i, (f, m) in enumerate(rows):
        c = None if i == 5 else ST
        out.append(box(20, y, 250, 30, [f], c, 10)); out.append(arrow(274, y + 15, 306, y + 15)); out.append(box(310, y, 350, 30, [m], c, 10)); y += 36
    return svg("feelings", y + 6, "Each expected feeling maps to a process the pass is meant to run; ease is the alarm", "\n".join(out))

def fig_when():
    out = [MARKER, cap(20, 14, "when the aim goes, three orders")]
    out += chain([["Sunday:", "Aim the week's", "material"], ["class:", "arrive primed,", "the class counts"], ["after:", "finish the Aim,", "then Shoot"]], 26, ST, w=190, gap=30, h=58)
    out.append(txt(20, 100, "The planned order. Ten minutes before a class buys a superficial Aim, the largest chunks only, and it still pays.", 10.5, .78))
    out += chain([["class with", "no prestudy"], ["class notes become", "one more resource"], ["Aim after,", "the messiest order"]], 116, None, w=190, gap=30, h=58)
    out.append(txt(20, 190, "The fallback. It works, and it is not the order to plan for.", 10.5, .78))
    return svg("when", 202, "Aim before the class is the plan; Aim after the class with the notes as a resource is the fallback", "\n".join(out))

def fig_the_bar():
    out = [cap(20, 14, "the bar at the end of the stage")]
    out.append(box(20, 26, 640, 44, ["Aim: a concept list turns into high-quality questions that identify", "chunks, sub-chunks, and the relationships between them, consistently"], ST, 10.5))
    out.append(txt(20, 92, "still running underneath", 9.5, .6, weight=700, ls=".08em"))
    out.append(box(20, 100, 150, 46, ["focus set up", "in any environment"], None, 9.5)); out.append(box(184, 100, 150, 46, ["green light answers", "the Aim questions"], None, 9.5)); out.append(box(348, 100, 150, 46, ["retrieval near", "unconscious competence"], None, 9.5)); out.append(box(512, 100, 148, 46, ["non-linear notes", "getting comfortable"], None, 9.5))
    out.append(txt(20, 172, "The chunks themselves are graded one stage later, when Shoot maps are read. That is the standard, on the next page.", 10.5, .78))
    return svg("the_bar", 184, "The one-sentence bar for Aim, with the four skills that must keep running underneath", "\n".join(out))

FIGS = [fig_the_chain, fig_replaces, fig_the_session, fig_feelings, fig_when, fig_the_bar]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
