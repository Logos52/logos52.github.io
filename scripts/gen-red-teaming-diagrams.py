#!/usr/bin/env python3
"""gen-red-teaming-diagrams.py — figures for wiki/Red Team/Red Teaming.md.
Everything drawn is something the page says. usage: python3 scripts/gen-red-teaming-diagrams.py [--inject PAGE]

Colour: teal = a step or check the page recommends, pink = a failure or a weakness, purple = the Army's own version,
gray = context."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "red-teaming-diagrams"); os.makedirs(d.OUT, exist_ok=True)
OK = TEAL; BAD = PINK; ARMY = PURPLE

def fig_three_checks():
    out = [MARKER, cap(20, 14, "Three checks on a plan before it is carried out")]
    items = [["What the plan", "assumes without", "saying so"], ["How the plan looks", "to the people", "it will affect"], ["What would have", "to go wrong for", "the plan to fail"]]
    for i, s in enumerate(items):
        x = 20 + i * 226
        out.append(box(x, 34, 196, 70, s, OK, 10.5))
        out.append(arrow(x + 98, 106, 340, 150))
    out.append(box(210, 152, 260, 42, ["A plan checked before it is used"], None, 11))
    return svg("three_checks", 206, "Three checks feed into a plan that is checked before it is used: hidden assumptions, the view of the people affected, and what would make it fail", "\n".join(out))

def fig_meeting_failure():
    steps = [["Same training,", "one leader"], ["Decisions follow what", "the leader seems to want"], ["Unclear parts dropped,", "junior person stays quiet"], ["Plan accepted and", "put into practice"], ["The plan", "fails"]]
    out = [MARKER, cap(20, 14, "How a smooth planning meeting leads to a failed plan")]
    for i, s in enumerate(steps):
        y = 32 + i * 58
        out.append(box(160, y, 360, 44, s, BAD if i == 4 else None, 10.5))
        if i < 4: out.append(arrow(340, y + 46, 340, y + 56))
    out.append(txt(20, 332, "None of the six explanations given for this kind of failure is incompetence.", 10.5, .78))
    return svg("meeting_failure", 344, "A planning meeting with one leader and shared training drops unclear parts and silences the junior person, and the accepted plan fails", "\n".join(out))

def fig_four_principles():
    out = [MARKER, cap(20, 14, "The four things the course teaches, one for each place a plan goes wrong")]
    items = [("The person", "Self-awareness", "and reflection"), ("The group", "Groupthink mitigation", "and decision support"), ("The other side", "Fostering", "cultural empathy"), ("The reasoning", "Applied", "critical thinking")]
    for i, (place, a, b) in enumerate(items):
        x = 20 + i * 166
        out.append(txt(x + 75, 44, place, 10.5, .7, anchor="middle", weight=600))
        out.append(box(x, 54, 150, 58, [a, b], OK, 10))
    out.append(path("M95,114 C95,160 590,160 590,116", "currentColor", 1.4, .7))
    out.append(arrow(590, 128, 590, 116))
    out.append(txt(340, 176, "Applied critical thinking depends on self-awareness. The other three stand on their own.", 10.5, .8, anchor="middle"))
    return svg("four_principles", 188, "Four principles for the person, the group, the other side and the reasoning, with applied critical thinking depending on self-awareness", "\n".join(out))

def fig_challenge_steps():
    steps = ["1. Frame the problem", "2. List every premise", "3. Look from other positions", "4. Come up with many options", "5. Test how it could fail", "6. Narrow down to a few options", "7. Reflect on the process"]
    out = [MARKER, cap(20, 14, "The seven steps, and the Army's four-phase cycle")]
    out.append(panel(20, 30, 300, 292, "This knowledge base's seven steps", tint=OK))
    for i, s in enumerate(steps):
        y = 56 + i * 37
        out.append(box(40, y, 260, 28, [s], OK, 10))
        if i < 6: out.append(arrow(170, y + 29, 170, y + 36))
    out.append(panel(340, 30, 320, 292, "The Army's cycle", tint=ARMY))
    pts = [(500, 80, "Generating ideas"), (600, 176, "Analysis"), (500, 272, "Debate"), (400, 176, "Narrowing down")]
    for x, y, s in pts: out.append(box(x - 62, y - 18, 124, 36, [s], ARMY, 10))
    out.append(arrow(540, 100, 590, 156)); out.append(arrow(590, 196, 540, 252)); out.append(arrow(460, 252, 410, 196)); out.append(arrow(410, 156, 460, 100))
    out.append(txt(500, 180, "repeats until", 10, .7, anchor="middle")); out.append(txt(500, 194, "time runs out", 10, .7, anchor="middle"))
    return svg("challenge_steps", 334, "Seven steps in a line beside the Army's four phases in a repeating cycle", "\n".join(out))

def fig_writing_first():
    out = [MARKER, cap(20, 14, "Why writing alone first produces more ideas than talking")]
    out.append(panel(20, 30, 310, 176, "A group talking together", tint=BAD))
    for i, s in enumerate(["People wait for their turn", "People worry about being judged", "Some leave the work to others"]):
        out.append(box(38, 58 + i * 46, 274, 36, [s], BAD, 10.5))
    out.append(panel(350, 30, 310, 176, "People writing alone, then combining", tint=OK))
    out.append(box(368, 58, 274, 36, ["Each person writes a list"], OK, 10.5))
    out.append(arrow(505, 95, 505, 104))
    out.append(box(368, 106, 274, 36, ["The lists are combined"], OK, 10.5))
    out.append(arrow(505, 143, 505, 152))
    out.append(box(368, 154, 274, 36, ["More ideas than the group"], OK, 10.5))
    return svg("writing_first", 218, "A talking group loses ideas to waiting, fear of judgment and leaving work to others; people who write alone and combine produce more", "\n".join(out))

def fig_war_game():
    out = [MARKER, cap(20, 14, "The most expensive war game in U.S. military history")]
    facts = [["24 July to", "15 August 2002"], ["$250 million"], ["13,000 troops"], ["16 warships sunk,", "including a carrier"]]
    for i, f in enumerate(facts):
        out.append(box(20 + i * 166, 32, 150, 56, f, BAD if i == 3 else None, 10.5))
    out.append(arrow(340, 90, 340, 108))
    out.append(box(150, 110, 380, 56, ["The exercise was stopped, free play was restricted,", "and the ending followed a script"], BAD, 10.5))
    return svg("war_game", 178, "A 2002 war game: 24 July to 15 August, $250 million, 13,000 troops, 16 warships sunk, then stopped and scripted", "\n".join(out))

def fig_evidence():
    out = [MARKER, cap(20, 14, "How much support each part of red teaming has")]
    out.append(box(20, 32, 200, 64, ["Groupthink", "weak support"], BAD, 10.5))
    for i in range(12):
        filled = i < 2
        out.append('<rect x="%d" y="112" width="12" height="12" rx="2" fill="%s" stroke="rgba(130,130,130,.55)" stroke-width="1"/>' % (32 + i * 15, "rgba(217,83,111,.85)" if filled else "none"))
    out.append(txt(20, 142, "predictions held in 2 of 12 tests", 10, .75))
    out.append(box(240, 32, 200, 64, ["Structured disagreement", "better decisions,", "less satisfied groups"], OK, 10))
    out.append(box(460, 32, 200, 64, ["Structured analytic", "techniques", "never tested"], None, 10))
    return svg("evidence", 156, "Groupthink has weak support, 2 of 12 tests; structured disagreement gives better decisions and less satisfied groups; structured analytic techniques were never tested", "\n".join(out))

def fig_where_it_runs():
    rows = [("Bear Hunter System", "a badly framed question at the Aim step"), ("Spaced Interleaved Retrieval", "the feeling of having mastered something"), ("Kolbs Experiential Cycle", "the explanation of why a performance failed"), ("Agentic Engineering", "AI output that looks finished"), ("Language study", "grammar rules that do not match real use")]
    out = [MARKER, cap(20, 14, "Where a person working alone puts the challenge")]
    for i, (a, b) in enumerate(rows):
        y = 32 + i * 46
        out.append(box(20, y, 230, 36, [a], OK, 10.5))
        out.append(arrow(252, y + 18, 290, y + 18))
        out.append(box(292, y, 368, 36, [b], None, 10.5))
    return svg("where_it_runs", 268, "Five places for the challenge: the Aim step, the feeling of mastery, the explanation of failure, finished-looking AI output, and grammar rules", "\n".join(out))

if __name__ == "__main__":
    for f in (fig_three_checks, fig_meeting_failure, fig_four_principles, fig_challenge_steps, fig_writing_first, fig_war_game, fig_evidence, fig_where_it_runs): f()
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
    else: print("wrote", len(os.listdir(d.OUT)), "figures to", d.OUT)
