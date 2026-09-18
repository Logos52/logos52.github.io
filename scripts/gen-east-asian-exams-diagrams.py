#!/usr/bin/env python3
"""gen-east-asian-exams-diagrams.py — figures for
wiki/Worldviews & the Political Order/East Asian Exams - The Arms Race.md.
Every number drawn is a number the page states.
usage: python3 scripts/gen-east-asian-exams-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "east-asian-exams-diagrams")
os.makedirs(d.OUT, exist_ok=True)
FAM, ST = TEAL, PURPLE   # teal = families, purple = the exam and the state

def chain(steps, y, color, w=118, h=64, x0=20, gap=22, size=10):
    out = [MARKER]; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, color, size))
        if i < len(steps) - 1:
            out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def bars(name, caption, rows, note, vmax, fmt, label_w=250, label=None):
    out = [cap(20, 14, caption)]
    body, y = hbars(rows, 20 + label_w, 640, 26, gap=28, bar=15, vmax=vmax, fmt=fmt, label_w=label_w)
    out.append(body); out.append(txt(20, y + 22, note, 10.5, .78))
    return svg(name, y + 34, label or caption, "\n".join(out))

def fig_the_race():
    out = [MARKER, cap(20, 14, "why the spending keeps rising")]
    out += chain([["one family buys", "more tutoring"],
                  ["its child moves up", "the ranking"],
                  ["other children", "move down"],
                  ["those families buy", "more tutoring"]], 28, FAM, w=140, gap=26, h=64)[1:]
    out.append(path("M 660 60 C 672 96, 672 108, 640 112 L 40 112 C 22 112, 22 100, 22 96", "currentColor", 1.4, .55))
    out.append(txt(340, 128, "the ranking is unchanged and every family is paying more", 10.5, .7, anchor="middle"))
    out.append(txt(20, 150, "A family that stops moves its child down the ranking while the others keep paying, so no family stops alone.", 10.5, .78))
    return svg("the_race", 162, "One family buys more tutoring, its child moves up and other children move down, those families buy more tutoring, and the ranking ends unchanged", "\n".join(out))

def fig_cost():
    return bars("cost", "cost of raising a child to 18, as a multiple of output per person",
                [("South Korea", 7.8, ST, .9, "7.8 times"), ("United States", 4.1, GRAY, .6, "4.1 times")],
                "About a third of the Korean figure goes to private cram schools. The Korean total is about $275,000.",
                8.5, lambda v: "%g times" % v, label_w=150)

def fig_births():
    return bars("births", "children per woman",
                [("replacement level", 2.1, GRAY, .5, "2.1, the level that holds a population steady"),
                 ("China", 1.0, ST, .55, "about 1.0"),
                 ("Singapore", 0.87, ST, .6, "0.87"),
                 ("South Korea, 2025", 0.80, ST, .7, "0.80"),
                 ("South Korea, 2024", 0.75, ST, .8, "0.75"),
                 ("South Korea, 2023", 0.72, ST, .9, "0.72"),
                 ("Taiwan", 0.695, ST, .9, "0.695")],
                "The 2025 rise came from delayed weddings and a large group of women in their early thirties, and is expected to fade after about 2028.",
                2.2, lambda v: "%g" % v, label_w=150)

def fig_bans():
    out = [MARKER, cap(20, 14, "what governments tried, and what happened")]
    out += chain([["China, under Mao", "abolished the exam", "for 11 years", "→ back in 1977"],
                  ["Korea, 1980", "banned private", "tutoring", "→ struck down, 2000"],
                  ["Seoul, 2009", "10 p.m. curfew", "on cram schools", "→ lessons on buses"],
                  ["China, 2021", "banned for-profit", "tutoring", "→ 70% to 80% still attend"],
                  ["Korea, 2023", "removed the killer", "questions", "→ families spent more"]], 26, ST, w=116, gap=20, h=86)[1:]
    out.append(txt(20, 136, "In 1979, 6% of Korean students attended cram schools. By 2008, 75% did.", 10.5, .78))
    return svg("bans", 148, "Five attempts to stop the race, each followed by the tutoring returning or growing", "\n".join(out))

def fig_graduates():
    out = [MARKER, cap(20, 14, "what the race turns out")]
    out += chain([["China, 1999", "university places", "up 47% in one year"],
                  ["2025", "12.22 million", "graduates"],
                  ["August 2025", "18.9% out of work,", "ages 16 to 24"],
                  ["at least 70,000", "delivery drivers", "hold a master's"],
                  ["2026", "98 applicants per", "civil service post"]], 26, ST, w=116, gap=20, h=70)[1:]
    out.append(txt(20, 120, "Training more people for top positions than there are top positions has a name, elite overproduction.", 10.5, .78))
    return svg("graduates", 132, "China's 1999 enrollment rise, 12.22 million graduates in 2025, 18.9% youth unemployment, 70,000 delivery drivers with master's degrees, and 98 applicants per civil service post", "\n".join(out))

FIGS = [fig_the_race, fig_cost, fig_births, fig_bans, fig_graduates]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv:
        d.inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
