#!/usr/bin/env python3
"""gen-levels-of-thinking-diagrams.py — figures for wiki/Concepts/Levels of Thinking - The Step Back.md.
Everything drawn is something the page says. usage: python3 scripts/gen-levels-of-thinking-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "levels-of-thinking-diagrams"); os.makedirs(d.OUT, exist_ok=True)
L, W_ = TEAL, INDIGO   # teal = what the step lets you see, indigo = where it goes wrong or what it costs, gray = the step before

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10, colors=None):
    out = []; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, (colors[i] if colors else color), size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

LEVELS = [("1 survive", "my own needs"), ("2 connect", "other people have minds"), ("3 control", "others see each other too"),
          ("4 belong", "how I look to my own people"), ("5 observe", "how my people look to a stranger"), ("6 the one looking", "who looks decides what is seen"),
          ("7 harmonize", "my view grew over time"), ("8 watch it build", "my mind making its reaction"), ("9 choose the view", "the watching itself")]

def fig_ladder():
    out = [MARKER, cap(20, 14, "nine steps back from your own reaction")]
    for i, (name, what) in enumerate(LEVELS):
        r, c = divmod(i, 3); x = 20 + c * 216; y = 26 + r * 66
        out.append(box(x, y, 200, 54, [name, what], L if i >= 3 else None, 10))
        if c < 2: out.append(arrow(x + 202, y + 27, x + 214, y + 27))
    out.append(txt(20, 240, "Each step is one more step back. The first three are about getting what you want. From four on you can see yourself from outside.", 10.5, .78))
    return svg("ladder", 252, "The nine levels of thinking as nine steps back from your own reaction", "\n".join(out))

def step(name, rows, note, label, colors=None, h=58, w=196, gap=26, size=10):
    out = [MARKER, cap(20, 14, name)]
    out += chain(rows, 26, L, w=w, gap=gap, h=h, size=size, colors=colors)
    out.append(txt(20, 26 + h + 26, note, 10.5, .78))
    return svg(label, 26 + h + 38, name + ": " + note, "\n".join(out))

def fig_survive():
    return step("step one, survive", [["what do I need", "right now"], ["food, sleep,", "a feeling or an urge"], ["no such thing as", "someone else's mind"]], "Everyone still runs this level every day. Needing the bathroom is a level-one process.", "survive", colors=[None, None, W_])
def fig_connect():
    return step("step two, connect", [["other people", "have minds and wants"], ["what I do changes", "what they think of me", "and do for me"], ["maybe the volcano", "wants something too"]], "Thinking about other minds begins here, but only to get what you need from them.", "connect", colors=[L, L, W_])
def fig_control():
    return step("step three, control", [["they see each other", "the way I see them"], ["so there is a web", "of relationships"], ["step back and", "work the situation"]], "Still very common. The thinking about thinking here is for power over the situation.", "control", colors=[L, L, W_])
def fig_belong():
    out = [MARKER, cap(20, 14, "step four, belong: the same reaction, with and without the step back")]
    out += chain([["the phone says", "men are bad"], ["she sees the man", "in her life"], ["he must be bad,", "I felt it was true"], ["break up", "with him"]], 26, None, w=140, gap=26, h=58, colors=[None, None, W_, W_])
    out += chain([["the phone says", "men are bad"], ["she sees the man", "in her life"], ["step back: is that", "the right thing", "to do?"], ["how would I look", "doing this?"]], 104, L, w=140, gap=26, h=58, colors=[None, None, L, L])
    out.append(txt(20, 190, "Seeing yourself the way another person in your culture sees you. That step is where rules, and morality as most people mean it, begin.", 10.5, .78))
    return svg("belong", 202, "Step four, belong: a reaction from a phone acted on at once, and the same reaction with the step back", "\n".join(out))
def fig_observe():
    return step("step five, observe from outside", [["you think A is right,", "they think B is right"], ["if I were a stranger,", "how would our", "rules look?"], ["compare the rule sets;", "see why other places", "are the way they are"]], "Objective observation as a value. Science and global thinking start here.", "observe", colors=[None, L, L], h=62)
def fig_perceiver():
    out = [MARKER, cap(20, 14, "step six, the one looking: what it sees, and where it slips")]
    out += chain([["a different person", "looking gives a", "different picture"], ["so no view is", "fully objective"], ["many views", "are valid"]], 26, L, w=196, gap=26, h=58)
    out += chain([["he broke the rules", "of the place he is in"], ["\"that is how we do it", "where I am from\""], ["\"who are you", "to judge?\""]], 104, None, w=196, gap=26, h=58, colors=[None, None, W_])
    out.append(txt(20, 190, "A high point of moral development, and the level that goes wrong most, because every view being valid slides into nobody being allowed to judge.", 10.5, .78))
    return svg("perceiver", 202, "Step six: who is looking changes what is seen, and the slide into nobody being allowed to judge", "\n".join(out))
def fig_harmonize():
    return step("step seven, harmonize", [["my view did not", "come from nowhere;", "it grew over time"], ["so did everyone", "else's"], ["people and behaviors", "belong where", "they fit"]], "The first level that understands and includes all the earlier ones instead of insisting on its own.", "harmonize", h=62)
def fig_construct():
    out = [MARKER, cap(20, 14, "step eight, watch the mind build itself: a doughnut on a plate")]
    out.append(box(20, 26, 150, 100, ["hunger:", "it looks good"], None, 10))
    out.append(box(186, 26, 150, 100, ["guilt: the box", "I ate once, and", "the shame after"], None, 10))
    out.append(box(352, 26, 150, 100, ["the stomach ache", "I remember"], None, 10))
    out.append(box(518, 26, 142, 100, ["all of it pulling", "on what I want", "to do now"], W_, 10))
    out.append(box(20, 142, 640, 44, ["now that I can see all of that going on in me, do I want to listen to it or not?"], L, 10.5))
    out.append(txt(20, 206, "The same watching applied to a reaction from a phone, or to politics, is what gives the power not to just react.", 10.5, .78))
    return svg("construct", 218, "Step eight: the parts of a reaction seen as they form, and then the choice whether to follow them", "\n".join(out))
def fig_choose():
    return step("step nine, choose where to look from", [["watching myself", "watch"], ["what am I looking at,", "and from where?"], ["a responsibility for", "knowing where", "to look"]], "At eight you watch the show without being it. At nine how you do the looking is the thing that matters.", "choose", h=62)
def fig_why_method():
    out = [MARKER, cap(20, 14, "the why method, one run: embarrassed to show hand-drawn diagrams")]
    out += chain([["why am I", "embarrassed?"], ["some negative", "impact on me"], ["what impact?"], ["people leave, or", "say bad things"]], 26, L, w=140, gap=26, h=58)
    out += chain([["why would that", "be so bad?"], ["I would lose", "opportunities"], ["how do I know?"], ["no evidence;", "it has gone fine"]], 104, L, w=140, gap=26, h=58)
    out.append(txt(20, 190, "Sit with a reaction and ask why it is there, then why that matters, until you reach where it came from.", 10.5, .78))
    out.append(txt(20, 206, "This run ended in: nothing is wrong with the drawings.", 10.5, .78))
    return svg("why_method", 218, "The why method run on one reaction until the source shows", "\n".join(out))

FIGS = [fig_ladder, fig_survive, fig_connect, fig_control, fig_belong, fig_observe, fig_perceiver, fig_harmonize, fig_construct, fig_choose, fig_why_method]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
