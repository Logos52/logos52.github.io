#!/usr/bin/env python3
"""gen-late-stage-feminism-diagrams.py — figures for wiki/Worldviews & the Political Order/Late Stage Feminism.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-late-stage-feminism-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "late-stage-feminism-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10):
    out = [MARKER]; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, color, size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def fig_the_road():
    out = [cap(20, 14, "the abortion argument, in the order it was made, and where it goes")]
    out += chain([["not yet a person", "only cells"], ["the hard cases", "assault"], ["bodily autonomy", "stress, harm,", "dependence"], ["birth changes", "nothing on", "that list"], ["autonomy,", "full stop"]], 26, PURPLE, w=116, gap=20)
    out.append(txt(20, 112, "Each argument replaced the one before it once it failed. The last one carries past birth, because a born child is on the same list.", 10.5, .78))
    return svg("the_road", 124, "The abortion argument moved from not yet a person, to the hard cases, to bodily autonomy, and bodily autonomy does not stop at birth", "\n".join(out))

def fig_redirected():
    out = [MARKER, cap(20, 14, "the instincts stay, and get redirected")]
    out.append(box(20, 26, 200, 52, ["a husband, a patriarchy"], TEAL)); out.append(arrow(224, 52, 296, 52)); out.append(box(300, 26, 220, 52, ["a boss, a bureaucracy"], PURPLE))
    out.append(box(20, 92, 200, 52, ["children"], TEAL)); out.append(arrow(224, 118, 296, 118)); out.append(box(300, 92, 220, 52, ["pets, social causes,", "migrant and minority groups"], PURPLE))
    out.append(txt(536, 52, "the instinct toward authority", 10.5, .78)); out.append(txt(536, 118, "the instinct toward maternity", 10.5, .78))
    out.append(txt(20, 172, "Thousands of years of adaptation do not erase, so each instinct finds a substitute object.", 10.5, .78))
    return svg("redirected", 184, "The instincts toward authority and maternity are redirected: from husband to boss and bureaucracy, from children to pets, causes, and migrant groups", "\n".join(out))

def fig_payments():
    out = [cap(20, 14, "money given by supporters, United States, 2026")]
    rows = [("a mother who murdered her three children", 1000000, PURPLE, .9, "More than $1 million"), ("a man who murdered a white teenager", 500000, PURPLE, .6, "More than half a million dollars"), ("a woman burned over 93% saving six children from a fire", 42000, TEAL, .9, "$42,000")]
    body, y = hbars(rows, 300, 560, 26, gap=30, bar=16, vmax=1000000, fmt=lambda v: "$1,000,000+" if v == 1000000 else ("$500,000+" if v == 500000 else "$42,000"), label_w=280)
    out.append(body)
    out.append(txt(20, y + 24, "The platform's rule against raising money for someone charged with a crime kept the killer of the teenager off it.", 10.5, .78))
    out.append(txt(20, y + 40, "The rule was waived for the mother.", 10.5, .78))
    return svg("payments", y + 52, "Supporters gave more than $1 million to a mother who murdered her three children and $42,000 to a woman burned saving six children", "\n".join(out))

def fig_three_arguments():
    out = [cap(20, 14, "three arguments for abortion, in order, and what each fails on")]
    out += chain([["not yet a person"], ["the hard cases"], ["bodily autonomy"]], 26, PURPLE, w=180, gap=54, h=44)
    out.append(txt(20, 92, "fails on late-term abortion,", 10, .7)); out.append(txt(20, 106, "which the same side supports", 10, .7))
    out.append(txt(254, 92, "rare, and never supported", 10, .7)); out.append(txt(254, 106, "abortion until birth", 10, .7))
    out.append(txt(488, 92, "concedes the child dies,", 10, .7)); out.append(txt(488, 106, "and carries past birth", 10, .7))
    return svg("three_arguments", 118, "Three arguments for abortion in order: not yet a person, the hard cases, bodily autonomy", "\n".join(out))

def fig_abortion_reasons():
    out = [cap(20, 14, "share of abortions by reason, as given, about")]
    rows = [("rape, incest, or a fetus that cannot survive", 3.5, TEAL, .9, "About 3 to 4%"), ("financial reasons", 6.5, TEAL, .6, "About 6 to 7%"), ("elective, chosen for convenience", 92, PURPLE, .9, "About 92%")]
    body, y = hbars(rows, 300, 640, 26, gap=30, bar=16, vmax=100, fmt=lambda v: {3.5: "3 to 4%", 6.5: "6 to 7%", 92: "92%"}[v], label_w=280)
    out.append(body)
    out.append(txt(20, y + 24, "The hard cases the second argument leaned on are the smallest slice. The man giving the shares calls himself pro-abortion.", 10.5, .78))
    return svg("abortion_reasons", y + 36, "About 3 to 4% of abortions are for rape, incest, or a fetus that cannot survive, 6 to 7% financial, and about 92% elective", "\n".join(out))

def fig_autonomy_step():
    out = [MARKER, cap(20, 14, "the list the autonomy argument rests on, before and after birth")]
    out.append(box(20, 26, 250, 96, ["in the womb", "stress · impairment · harm", "depends on you"], TEAL, 10.5))
    out.append(arrow(274, 74, 336, 74)); out.append(txt(305, 66, "birth", 10, .7, anchor="middle"))
    out.append(box(340, 26, 250, 96, ["after birth", "stress · impairment · harm", "depends on you"], PURPLE, 10.5))
    out.append(txt(20, 148, "Nothing on the list changes at birth, so bodily autonomy becomes autonomy, full stop.", 10.5, .78))
    return svg("autonomy_step", 160, "The list the autonomy argument rests on, stress, impairment, harm, and dependence, is the same before and after birth", "\n".join(out))

def fig_stability_chain():
    out = [cap(20, 14, "why every lasting society settled into the same order, on the first account")]
    out += chain([["every lasting", "society became", "patriarchal"], ["so it is the", "most stable", "arrangement"], ["stable regardless", "of circumstance:", "biology"], ["thousands of", "years of", "adaptation"], ["feminism rejects it:", "its opponent", "is biology"]], 26, INDIGO, w=116, gap=20, h=62)
    out.append(txt(20, 116, "The plainer version runs through violence. Law comes from violence and men hold the monopoly on it,", 10.5, .78))
    out.append(txt(20, 132, "so any matriarchy lives under a patriarch's protection.", 10.5, .78))
    return svg("stability_chain", 144, "Every lasting society became patriarchal because it is the most stable arrangement, which rests on biology, so feminism's opponent is biology", "\n".join(out))

def fig_inversion():
    out = [MARKER, cap(20, 14, "three predispositions and their inversions")]
    rows = [("demure and modest", "loud and obnoxious"), ("submits to authority", "unruly"), ("the child's fiercest protector", "the child's greatest threat")]
    for i, (a, b) in enumerate(rows):
        y = 26 + i * 58
        out.append(box(20, y, 260, 44, [a], TEAL)); out.append(arrow(284, y + 22, 356, y + 22)); out.append(box(360, y, 300, 44, [b], PURPLE))
    out.append(txt(20, 218, "Offered a choice, women would not come, an early thinker of the movement said. They would have to be forced.", 10.5, .78))
    return svg("inversion", 230, "Three predispositions and their inversions: modest to loud, submitting to unruly, protector to threat", "\n".join(out))

def fig_two_readings():
    out = [cap(20, 14, "two readings of the same support")]
    out.append(box(20, 26, 305, 120, ["the road", "an argument followed to its end:", "not yet a person, the hard cases,", "bodily autonomy, then autonomy", "past birth"], PURPLE, 10.5))
    out.append(box(355, 26, 305, 120, ["the loyalty", "women defend women, whatever the act;", "the goal is power without", "accountability, and the argument", "only made the defense sayable"], INDIGO, 10.5))
    out.append(txt(20, 172, "The road says why the defense could be spoken. The loyalty says who spoke it. Both end at a war with biology the movement loses.", 10.5, .78))
    return svg("two_readings", 184, "Two readings of the support: the argument followed to its end, and own-group loyalty that the argument only made sayable", "\n".join(out))

FIGS = [fig_the_road, fig_redirected, fig_payments, fig_three_arguments, fig_abortion_reasons, fig_autonomy_step, fig_stability_chain, fig_inversion, fig_two_readings]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
