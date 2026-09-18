#!/usr/bin/env python3
"""gen-agentic-engineering-diagrams.py — figures for wiki/Systems/AI & Agentic Systems/Agentic Engineering.md.
Everything drawn is something the page says. usage: python3 scripts/gen-agentic-engineering-diagrams.py [--inject PAGE]

Colour: teal = work the developer does, gray = work the agent does, green = what agents do well,
pink = what agents do badly or a risk, purple = memory kept within one conversation."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "agentic-engineering-diagrams"); os.makedirs(d.OUT, exist_ok=True)
DEV = TEAL

def vstack(x, y, w, items, h, gap, colors):
    out = []
    for i, lines in enumerate(items):
        out.append(box(x, y + i * (h + gap), w, h, lines, colors[i], 10))
        if i < len(items) - 1:
            out.append(arrow(x + w / 2, y + i * (h + gap) + h + 1, x + w / 2, y + (i + 1) * (h + gap) - 1))
    return out

def fig_vibe_vs_agentic():
    out = [MARKER, cap(20, 14, "Two ways of building software with agents")]
    out.append(panel(20, 30, 310, 262, "Vibe coding"))
    out += vstack(45, 58, 260, [["Describe the result", "in plain language"], ["The agent writes", "the code"], ["Keep the code", "if it runs"], ["Software that will", "be thrown away"]], 42, 16, [None, None, None, None])
    out.append(panel(350, 30, 310, 262, "Agentic engineering", tint=DEV))
    out += vstack(375, 54, 260, [["Write the spec and keep", "the job small"], ["The agent writes", "the code"], ["Tests and builds run,", "and the developer reviews"], ["The developer approves", "and answers for the code"], ["Software that has", "to keep working"]], 36, 11, [DEV, None, DEV, DEV, None])
    return svg("vibe_vs_agentic", 304, "Vibe coding keeps code that runs; agentic engineering adds a spec, checks, review and approval by the developer", "\n".join(out))

def fig_good_bad():
    well = ["API details", "Boilerplate", "Refactors, even a 100,000-line class", "Shell commands and file edits", "First-pass debugging", "Repetitive implementation"]
    bad = ["Taste", "Architecture", "Product judgment", "Security boundaries", "Assumptions nobody wrote down", "Seeing that a local fix breaks the system"]
    out = [MARKER, cap(20, 14, "What agents do well and what they do badly")]
    out.append(panel(20, 30, 310, 236, "Agents do well at", tint=GREEN))
    out.append(panel(350, 30, 310, 236, "Agents do badly at", tint=PINK))
    for i, s in enumerate(well): out.append(box(38, 56 + i * 34, 274, 28, [s], GREEN, 10))
    for i, s in enumerate(bad): out.append(box(368, 56 + i * 34, 274, 28, [s], PINK, 10))
    return svg("good_bad", 278, "Two lists: the jobs agents do well and the jobs agents do badly", "\n".join(out))

def fig_spec_parts():
    parts = ["What is being built", "What must not change", "Which existing patterns to follow", "Which edge cases matter", "How the result will be checked"]
    out = [MARKER, cap(20, 14, "What a spec says before an agent starts")]
    out.append(panel(20, 30, 340, 206, "The spec", tint=DEV))
    for i, s in enumerate(parts): out.append(box(38, 56 + i * 34, 304, 28, [s], DEV, 10))
    out.append(bigarrow(368, 133, 404, 133))
    out.append(box(412, 104, 248, 56, ["A job of about", "3 to 20 steps"], DEV, 10.5))
    out.append(arrow(536, 162, 536, 186))
    out.append(box(412, 188, 248, 40, ["The agent starts"], None, 10.5))
    return svg("spec_parts", 246, "The five things a spec says, leading to a job of about 3 to 20 steps that the agent then starts", "\n".join(out))

def fig_review_passes():
    out = [MARKER, cap(20, 14, "Three review passes of different lengths")]
    for i, (a, b) in enumerate([("A 30-second", "pass"), ("A 3-minute", "pass"), ("A 30-minute", "pass")]):
        x = 20 + i * 226
        out.append(box(x, 32, 188, 60, [a, b], DEV, 11))
        out.append(icon("clock", x + 10, 40, 16))
        if i < 2: out.append(arrow(x + 190, 62, x + 224, 62))
    out.append(txt(20, 118, "Each pass is short enough to run on every result.", 10.5, .78))
    return svg("review_passes", 130, "Review passes of thirty seconds, three minutes and thirty minutes", "\n".join(out))

def fig_trial():
    steps = [["Before the tasks:", "developers expected", "AI tools to speed them up"], ["During the tasks:", "with AI tools allowed,", "they took longer"], ["After the tasks:", "they still believed", "they had been faster"]]
    out = [MARKER, cap(20, 14, "What the randomized trial found")]
    for i, s in enumerate(steps):
        x = 20 + i * 226
        out.append(box(x, 32, 196, 76, s, PINK if i == 1 else None, 10.5))
        if i < 2: out.append(arrow(x + 198, 70, x + 224, 70))
    out.append(txt(20, 134, "Experienced developers, their own repositories, tasks of about two hours.", 10.5, .78))
    return svg("trial", 146, "Developers expected AI tools to speed them up, took longer with them, and still believed they had been faster", "\n".join(out))

def fig_two_layers():
    out = [MARKER, cap(20, 14, "Where an agent's memory comes from")]
    out.append(panel(20, 30, 310, 116, "Across conversations", tint=DEV))
    out.append(box(40, 58, 270, 72, ["A searchable store of facts", "people, projects,", "decisions, policies"], DEV, 10))
    out.append(panel(350, 30, 310, 116, "Within one conversation", tint=PURPLE))
    out.append(box(370, 58, 270, 72, ["The full transcript,", "kept behind the summary", "the model is using"], PURPLE, 10))
    out.append(arrow(175, 148, 290, 186)); out.append(arrow(505, 148, 390, 186))
    out.append(box(230, 188, 220, 50, ["The model", "keeps nothing between calls"], None, 10.5))
    return svg("two_layers", 250, "Two memory layers feed a model that keeps nothing between calls: a store of facts across conversations and the transcript within one conversation", "\n".join(out))

def fig_developer_keeps():
    keep = ["Taste", "Judgment", "Architecture", "Spec", "Understanding", "Verification"]
    agent = ["Processing material", "Drafting", "Searching", "Implementing"]
    out = [MARKER, cap(20, 14, "Who does which part of the work")]
    out.append(panel(20, 30, 390, 176, "Stays with the developer", tint=DEV))
    for i, s in enumerate(keep):
        r, c = divmod(i, 2)
        out.append(box(38 + c * 182, 58 + r * 46, 172, 36, [s], DEV, 10.5))
    out.append(panel(430, 30, 230, 176, "The agent can take over"))
    for i, s in enumerate(agent): out.append(box(448, 56 + i * 36, 194, 28, [s], None, 10))
    return svg("developer_keeps", 218, "Taste, judgment, architecture, spec, understanding and verification stay with the developer; processing, drafting, searching and implementing can go to the agent", "\n".join(out))

def fig_three_risks():
    out = [MARKER, cap(20, 14, "Three things one agent should not hold together")]
    out.append(line(340, 84, 160, 158, GRAY, 1.5)); out.append(line(340, 84, 520, 158, GRAY, 1.5)); out.append(line(260, 184, 420, 184, GRAY, 1.5))
    out.append(box(250, 40, 180, 44, ["Private data"], PINK, 11))
    out.append(box(60, 158, 200, 52, ["Content from outside", "that nobody checked"], PINK, 10.5))
    out.append(box(420, 158, 200, 52, ["A way to send", "information out"], PINK, 10.5))
    out.append(txt(340, 126, "Any two are safe.", 10.5, .85, anchor="middle", weight=600))
    out.append(txt(340, 142, "All three together are not.", 10.5, .85, anchor="middle", weight=600))
    return svg("three_risks", 224, "Private data, unchecked outside content and a way to send information out: any two are safe, all three in one agent are not", "\n".join(out))

if __name__ == "__main__":
    for f in (fig_vibe_vs_agentic, fig_good_bad, fig_spec_parts, fig_review_passes, fig_trial, fig_two_layers, fig_developer_keeps, fig_three_risks): f()
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
    else: print("wrote", len(os.listdir(d.OUT)), "figures to", d.OUT)
