#!/usr/bin/env python3
"""gen-writing-templates-diagrams.py — figures for wiki/Writing Craft/Five Writing Templates.md.
Everything drawn is something the page says. usage: python3 scripts/gen-writing-templates-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "writing-templates-diagrams"); os.makedirs(d.OUT, exist_ok=True)
T, S = TEAL, INDIGO   # teal = the template's slot, indigo = the page shape, gray = plain material

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10, colors=None):
    out = []; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, (colors[i] if colors else color), size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_five_slots():
    out = [MARKER, cap(20, 14, "the page shape, and which template fills each slot")]
    out.append(box(20, 26, 640, 40, ["the description line: compress it first, the page in one or two lines"], T, 10.5))
    out += chain([["opening whole", "start at the end,", "or play the question back"], ["the parts", "observations before", "conclusions"], ["closing whole", "say what would", "change your mind"]], 84, None, w=196, gap=26, h=70, colors=[S, S, S])
    out.append(txt(20, 176, "Whole, part, whole is the shape every page here takes. Four templates fill its three slots and the fifth is the page at its shortest.", 10.5, .78))
    out.append(txt(20, 192, "Two templates also make a page of their own kind: the record page and the condensed page.", 10.5, .78))
    return svg("five_slots", 204, "The page shape whole, part, whole with the template that fills each slot and the description line above it", "\n".join(out))

def fig_answer_template():
    out = [MARKER, cap(20, 14, "start at the end, as a section and as a page")]
    out += chain([["the section's", "first sentence:", "its answer"], ["reason one"], ["reason two"], ["reason three"]], 26, T, w=140, gap=26, h=58)
    out.append(txt(20, 100, "As a section: the answer, then the reasons in the order that supports it.", 10.5, .78))
    out += chain([["sentence one of", "the page:", "the answer"], ["the parts:", "the reasons"], ["the close:", "the answer with the", "reasons now behind it"]], 116, T, w=196, gap=26, h=58)
    out.append(txt(20, 190, "As a page: the same three moves at page size. If sentence one will not come, there is no page yet.", 10.5, .78))
    return svg("answer_template", 202, "Start at the end as a section is answer then reasons, and as a page is sentence one then parts then close", "\n".join(out))

def fig_observation_template():
    out = [MARKER, cap(20, 14, "observations before conclusions, as a section and as a page")]
    out += chain([["what was seen,", "where, and when"], ["what it means,", "marked as", "not settled"]], 26, T, w=300, gap=30, h=58)
    out.append(txt(20, 100, "As a section: a block dropped in at the point where a claim is made.", 10.5, .78))
    out += chain([["what was watched,", "and where"], ["seen first"], ["seen next"], ["the reading,", "not settled"]], 116, None, w=140, gap=26, h=58, colors=[S, T, T, S])
    out.append(txt(20, 190, "As a page: a record. The opening whole says what was watched, the parts are the observations, the close is the reading.", 10.5, .78))
    return svg("observation_template", 202, "Observations before conclusions as a section is seen then meaning, and as a page is a record with the reading at the end", "\n".join(out))

def fig_question_template():
    out = [MARKER, cap(20, 14, "play the question back, as a section and as a page")]
    out += chain([["the question", "as asked"], ["what it is", "really asking"], ["its parts"], ["the answer"]], 26, T, w=140, gap=26, h=58)
    out.append(txt(20, 100, "As a section: the played-back question at the top, before the answer.", 10.5, .78))
    out += chain([["the question", "as asked"], ["part one:", "the page that", "answers it"], ["part two:", "the page that", "answers it"], ["the question,", "answered as", "a whole"]], 116, None, w=140, gap=26, h=58, colors=[T, S, S, T])
    out.append(txt(20, 190, "As a page: the page only unpacks the question and routes each part to the page that answers it.", 10.5, .78))
    return svg("question_template", 202, "Play the question back as a section is the question unpacked before the answer, and as a page routes each part", "\n".join(out))

def fig_change_template():
    out = [MARKER, cap(20, 14, "say what would change your mind, as a section and as a page")]
    out += chain([["the position"], ["the strongest", "counter"], ["the condition", "that would flip it"]], 26, T, w=196, gap=26, h=58)
    out.append(txt(20, 100, "As a section: a block after any conclusion, on any page.", 10.5, .78))
    out += chain([["the position"], ["the strongest", "counter"], ["the conditions", "that would flip it"], ["the check: is this", "case different from", "the ones before?"]], 116, None, w=140, gap=26, h=58, colors=[T, T, T, S])
    out.append(txt(20, 190, "As a page: a position page. It sits in the closing whole, or as the last part before it.", 10.5, .78))
    return svg("change_template", 202, "Say what would change your mind as a section is position, counter, flip condition, and as a page adds the check", "\n".join(out))

def fig_compress_template():
    out = [MARKER, cap(20, 14, "compress it first, as a section and as a page")]
    out.append(box(20, 26, 300, 58, ["the one or two lines", "at the top of the section"], T, 10.5))
    out.append(arrow(324, 55, 356, 55))
    out.append(box(360, 26, 300, 58, ["the section, expanded"], None, 10.5))
    out.append(txt(20, 100, "As a section: the short version first, then the expansion.", 10.5, .78))
    out.append(box(20, 116, 300, 58, ["one paragraph that holds", "the whole subject"], T, 10.5))
    out.append(arrow(324, 145, 356, 145))
    out.append(box(360, 116, 300, 58, ["numbered lines,", "each standing alone"], S, 10.5))
    out.append(txt(20, 190, "As a page: the condensed page. It has no parts, only a list of small wholes, so it stands apart from the page shape.", 10.5, .78))
    return svg("compress_template", 202, "Compress it first as a section is the short version then the expansion, and as a page is the condensed page", "\n".join(out))

FIGS = [fig_five_slots, fig_answer_template, fig_observation_template, fig_question_template, fig_change_template, fig_compress_template]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
