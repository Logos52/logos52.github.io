#!/usr/bin/env python3
"""gen-thinking-habits-diagrams.py — figures for wiki/Concepts/Five Thinking Habits - Conclusion First.md.
Everything drawn is something the page says. usage: python3 scripts/gen-thinking-habits-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "thinking-habits-diagrams"); os.makedirs(d.OUT, exist_ok=True)
HB, LS = TEAL, INDIGO   # teal = the habit's form, indigo = the listener, gray = the form without the habit

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10, colors=None):
    out = []; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, (colors[i] if colors else color), size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_judged_by_presentation():
    out = [MARKER, cap(20, 14, "the same thinking, two deliveries, two judgments")]
    out += chain([["a good thought"], ["told as the chain:", "angle, factor, context,", "therefore"], ["the listener drops", "the thread and rates", "the thinking as muddled"]], 26, None, w=196, gap=26, h=62, colors=[HB, None, LS])
    out += chain([["the same thought"], ["told end first:", "the conclusion,", "then the reasons"], ["the listener knows what", "each step is for and", "rates the thinking as clear"]], 104, None, w=196, gap=26, h=62, colors=[HB, HB, LS])
    out.append(txt(20, 190, "The judgment runs on the delivery. The five habits change the delivery, and each one also checks the thought before it is spoken.", 10.5, .78))
    return svg("judged_by_presentation", 202, "The same thought told as a chain is rated muddled and told conclusion first is rated clear", "\n".join(out))

def fig_end_first():
    out = [MARKER, cap(20, 14, "the chain, and the end first")]
    out += chain([["from this", "angle"], ["then this", "factor"], ["in this context", "it gets", "complicated"], ["therefore,", "here is my", "opinion"]], 26, None, w=140, gap=26, h=58)
    out.append(txt(20, 100, "About 5 minutes in, the listener has lost the thread and could not say what the conclusion was.", 10.5, .78))
    out += chain([["this is what", "I think"], ["here is why:", "reason one"], ["reason two"], ["reason three"]], 116, HB, w=140, gap=26, h=58)
    out.append(txt(20, 190, "The conclusion frames the issue, so the listener knows how to hear everything that follows.", 10.5, .78))
    return svg("end_first", 202, "The chain of reasoning loses the listener; the conclusion first frames every reason that follows", "\n".join(out))

def fig_hedged_conclusion():
    out = [MARKER, cap(20, 14, "when the check finds a gap")]
    out += chain([["before speaking:", "what is my", "conclusion?"], ["a gap:", "I know this less well", "than I thought"], ["the conclusion with", "the uncertainty in it:", "I lean this way, unsure", "on a few points"], ["then the reasons", "and what I see", "so far"]], 26, HB, w=146, gap=24, h=70, size=9.5)
    out.append(txt(20, 112, "Still first, still easy to follow. It neither overclaims nor glosses over what needs more thought.", 10.5, .78))
    return svg("hedged_conclusion", 124, "When the pre-speech check finds a gap, the conclusion still goes first but carries the uncertainty", "\n".join(out))

def fig_observations_first():
    out = [MARKER, cap(20, 14, "feedback after a workshop, two ways")]
    out += chain([["the conclusion alone:", "it was not good,", "fix this slide"], ["what the listener", "is left with:", "how do you know?"]], 26, None, w=300, gap=30, h=62, colors=[None, LS])
    out += chain([["what was seen:", "faces going flat, yawning,", "no hands up for questions"], ["then the conclusion:", "because of that,", "here is what could change"], ["what the listener", "is left with:", "I see it too"]], 104, HB, w=196, gap=26, h=62, colors=[HB, HB, LS])
    out.append(txt(20, 190, "The observations go on the table first. The conclusion arrives as something both people can check.", 10.5, .78))
    return svg("observations_first", 202, "Feedback as a bare conclusion leaves doubt; observations first then the conclusion leaves something both can check", "\n".join(out))

def fig_three_reasons():
    out = [cap(20, 14, "why observations first works")]
    out.append(box(20, 26, 200, 84, ["buy-in", "us against the problem,", "not me against you"], HB, 10.5))
    out.append(box(240, 26, 200, 84, ["their own conclusion", "the discussion is about how", "to read what was seen"], HB, 10.5))
    out.append(box(460, 26, 200, 84, ["your own bias", "you have to challenge", "your own assumptions"], HB, 10.5))
    out.append(txt(20, 136, "Shallow thinkers are the confident ones. Keeping what you saw apart from what you concluded is the check on yourself.", 10.5, .78))
    return svg("three_reasons", 148, "Observations first gets buy-in, lets others reach their own conclusion, and checks the giver's own bias", "\n".join(out))

def fig_play_it_back():
    out = [MARKER, cap(20, 14, "the ask, said back or not")]
    out += chain([["the ask"], ["kept silent:", "your own unspoken", "reading"], ["the work", "delivered"], ["this is not", "what I asked for"]], 26, None, w=140, gap=26, h=58, colors=[None, None, None, LS])
    out += chain([["the ask"], ["said back:", "so what you are", "really asking is..."], ["the asker:", "yes, and now there", "is a third part"], ["work that", "matches the ask"]], 104, HB, w=140, gap=26, h=58, colors=[HB, HB, LS, HB])
    out.append(txt(20, 190, "Playing it back buys thinking time, exposes gaps in your reading while they are cheap, and organizes the asker's own thinking.", 10.5, .78))
    return svg("play_it_back", 202, "An ask kept silent comes back as not what was asked; an ask played back finds its parts before the work starts", "\n".join(out))

def fig_antithesis():
    out = [MARKER, cap(20, 14, "hypothesis, antithesis, thesis, and what gets said")]
    out.append(box(20, 26, 200, 62, ["hypothesis", "what you think", "will happen"], None, 10.5))
    out.append(box(240, 26, 200, 62, ["thesis", "where you land", "between the two"], HB, 10.5))
    out.append(box(460, 26, 200, 62, ["antithesis", "the counterargument", "swinging the other way"], None, 10.5))
    out.append(arrow(236, 57, 224, 57)); out.append(arrow(444, 57, 456, 57))
    out.append(box(20, 104, 310, 62, ["said with the decision:", "we should launch 2 months from now"], HB, 10.5))
    out.append(box(350, 104, 310, 62, ["said in the same breath:", "the three conditions that would push it back"], HB, 10.5))
    out.append(txt(20, 190, "The listener hears a decider who has looked past their own position. The decider gets one check on a habit that may not fit this time.", 10.5, .78))
    return svg("antithesis", 202, "The thesis sits between hypothesis and antithesis, and the antithesis gets said with the decision", "\n".join(out))

def fig_compress():
    out = [MARKER, cap(20, 14, "before speaking, compress")]
    out.append(box(20, 26, 300, 110, ["every thought, elaborated:", "the first angle, the second,", "the exception, the history,", "the caveat, the other caveat,", "the thing it reminds you of"], None, 10))
    out.append(arrow(324, 81, 356, 81))
    out.append(box(360, 42, 300, 78, ["the one or two lines that carry", "every important point", "and none of the fluff"], HB, 10.5))
    out.append(txt(20, 162, "Cutting to what is necessary takes the deepest knowledge of the subject. That is why this habit takes years and the others take a week.", 10.5, .78))
    return svg("compress", 174, "Every thought elaborated becomes the one or two lines that carry the important points", "\n".join(out))

FIGS = [fig_judged_by_presentation, fig_end_first, fig_hedged_conclusion, fig_observations_first, fig_three_reasons, fig_play_it_back, fig_antithesis, fig_compress]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
