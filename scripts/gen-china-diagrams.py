#!/usr/bin/env python3
"""gen-china-diagrams.py — figures for wiki/Worldviews & the Political Order/China - The Temple and the Monks.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-china-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "china-diagrams"); os.makedirs(d.OUT, exist_ok=True)
ST, PP = PURPLE, TEAL   # purple = the state, teal = the people

def chain(steps, y, color, w=118, h=58, x0=20, gap=22, size=10):
    out = [MARKER]; x = x0
    for i, lines in enumerate(steps):
        out.append(box(x, y, w, h, lines, color, size))
        if i < len(steps) - 1: out.append(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2))
        x += w + gap
    return out

def bars(name, caption, rows, note, vmax, fmt, label_w=250, label=None):
    out = [cap(20, 14, caption)]
    body, y = hbars(rows, 20 + label_w, 640, 26, gap=28, bar=15, vmax=vmax, fmt=fmt, label_w=label_w)
    out.append(body); out.append(txt(20, y + 22, note, 10.5, .78))
    return svg(name, y + 34, label or caption, "\n".join(out))

def fig_the_flow():
    out = [MARKER, cap(20, 14, "where the wealth goes: the temple is rich and the monks are poor")]
    out.append(box(20, 26, 200, 100, ["the people", "no land, deposits in", "state banks, the lowest", "household share on record"], PP, 10))
    out.append(arrow(224, 60, 296, 60)); out.append(txt(260, 50, "wealth", 10, .7, anchor="middle"))
    out.append(box(300, 26, 200, 100, ["the state", "all land, 99.5% of", "bank assets, energy,", "big industry"], ST, 10))
    out.append(arrow(504, 60, 576, 60)); out.append(txt(540, 50, "spent on", 10, .7, anchor="middle"))
    out.append(box(580, 26, 80, 100, ["trains,", "towers,", "the army,", "Taiwan"], ST, 9.5))
    out.append(txt(20, 152, "To let people consume more, the state would have to keep less, and a state that keeps less can do less. That is why it will not happen.", 10.5, .78))
    return svg("the_flow", 164, "Wealth flows from the people to the state and is spent on trains, towers, and the army; the household share stays the lowest on record", "\n".join(out))

def fig_how_they_won():
    out = [cap(20, 14, "how a party of one in twelve thousand took the country")]
    out += chain([["Moscow's money", "and advisers", "from 1921"], ["the myth", "from Missouri,", "1936"], ["1 million Soviet", "troops hand over", "Manchuria, 1945"], ["America stops", "the central", "government, 1946"], ["barrier troops,", "human waves,", "starved cities"]], 26, ST, w=116, gap=20, h=62)
    out.append(txt(20, 116, "Helped by Moscow and protected by Washington at the moment it was nearest extinction, then a war of attrition nobody could fight.", 10.5, .78))
    return svg("how_they_won", 128, "How the communists won: Soviet money, the underdog myth, a Soviet army in Manchuria, American restraint on the central government, and a war of attrition", "\n".join(out))

def fig_quota_counts():
    out = [cap(20, 14, "what counts toward the 5% quota")]
    out += chain([["dig a hole"], ["fill it with", "concrete"], ["build a house", "on top"], ["destroy it,", "build a bigger", "empty one"]], 26, ST, w=140, gap=28, h=58)
    out.append(txt(20, 112, "Each step is GDP. The measure counts what comes out, not what went in, and whether or not anyone buys it.", 10.5, .78))
    return svg("quota_counts", 124, "What counts toward the growth quota: a hole, the concrete, the house, and the bigger empty house that replaces it", "\n".join(out))

def fig_debt_share():
    return bars("debt_share", "debt as a share of GDP, as the account gives it", [("before", 280, ST, .6, "280%"), ("now, lower figure", 300, ST, .8, "300%"), ("now, upper figure", 320, ST, .9, "320%")], "Infrastructure is overbuilt, real estate went down, and exports are the engine that is left.", 340, lambda v: str(v) + "%", label_w=160)

def fig_who_pays():
    out = [MARKER, cap(20, 14, "who pays for the bullet trains")]
    out.append(box(20, 26, 300, 84, ["ordinary people", "ride the slow trains,", "keep their savings in state banks"], PP, 10.5))
    out.append(arrow(324, 68, 356, 68))
    out.append(box(360, 26, 300, 84, ["the high-speed network", "900 billion US dollars in debt,", "empty across a continent"], ST, 10.5))
    out.append(txt(20, 136, "Some lines between nearby cities do well. The rest will never make money, and the deposits fund them.", 10.5, .78))
    return svg("who_pays", 148, "The bullet trains are 900 billion dollars in debt and funded by the savings of the people who ride the slow trains", "\n".join(out))

def fig_mismatch():
    out = [MARKER, cap(20, 14, "what communism produces, on the account")]
    out.append(box(20, 26, 305, 84, ["the common belief", "communism means", "underproduction, not enough"], GRAY.replace("rgba(130,130,130,.55)", "") or None, 10.5) if False else box(20, 26, 305, 84, ["the common belief", "communism means", "underproduction, not enough"], None, 10.5))
    out.append(box(355, 26, 305, 84, ["what happens", "too much of this and too little of that:", "a mountain of size 42 shoes, no size 38"], ST, 10.5))
    out.append(txt(20, 136, "Overproduction was about a fifth of GDP at the Asian crisis of 1996 and 1997. At the height of the famine, grain sat uncollected on the roads.", 10.5, .78))
    return svg("mismatch", 148, "Communism produces too much of this and too little of that, not too little overall", "\n".join(out))

def fig_subsidy_chain():
    out = [cap(20, 14, "why the goods go on the boat")]
    out += chain([["a quota to hit", "locally"], ["free land, tax", "subsidy, energy", "below cost"], ["every county", "builds the same", "factories"], ["everyone sells", "below cost"], ["nobody at home", "can buy, so", "export"]], 26, ST, w=116, gap=20, h=62)
    out.append(txt(20, 116, "The trade surplus of about 1.1 trillion dollars exists because the household share of the economy is too small to buy the output.", 10.5, .78))
    return svg("subsidy_chain", 128, "From a local quota through subsidy and overbuilding to selling below cost abroad", "\n".join(out))

def fig_one_in():
    return bars("one_in", "communists as a share of the population, about 1936 to 1940, one in every", [("Portugal, under a fascist dictator", 280, GRAY, .6, "one in 280"), ("Finland, party banned", 700, GRAY, .6, "one in 700"), ("China, Comintern count, 1940", 1700, ST, .9, "one in 1,700"), ("United States", 1700, GRAY, .5, "one in 1,700"), ("China, party membership, 1936", 12500, ST, .9, "one in 12,500")], "About 40,000 members in a country of half a billion. One of the least communist-inclined countries on earth.", 13000, lambda v: "{:,}".format(v), label_w=250)

def fig_the_toll():
    return bars("the_toll", "deaths, millions, as the account gives them", [("the Taiping wars, both sides, 1850s to 1860s", 70, ST, .7, "70 million or more"), ("the Great Leap, 1958 to 1962, minimum", 45, ST, .9, "at least 45 million"), ("the Great Leap, some Chinese historians", 50, ST, .5, "50 million"), ("Sichuan alone, upper figure", 12, ST, .6, "9 to 12 million"), ("one prefecture of 8 million", 2.4, PP, .9, "2.4 million")], "Food was the weapon: no work points, no ration, and the pregnant, the sick, the old, and the undesirable were cut off.", 75, lambda v: str(v), label_w=280)

def fig_purge_order():
    out = [cap(20, 14, "the order of the purges, so that one man could sleep")]
    out += chain([["1959: the party", "members who", "raised the famine"], ["1962 to 1966:", "the countryside"], ["1966 to 1968:", "the people", "purge the party"], ["1968 to 1971:", "the army purges", "the people"], ["1971: the", "army itself"]], 26, ST, w=116, gap=20, h=62)
    out.append(txt(20, 116, "By 1974 there was no threat left. In Beijing today a military commission of seven lost five to purges, and the sixth has not been seen.", 10.5, .78))
    return svg("purge_order", 128, "The order of the purges from 1959 to 1971", "\n".join(out))

FIGS = [fig_the_flow, fig_how_they_won, fig_quota_counts, fig_debt_share, fig_who_pays, fig_mismatch, fig_subsidy_chain, fig_one_in, fig_the_toll, fig_purge_order]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
