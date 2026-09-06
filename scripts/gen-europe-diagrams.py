#!/usr/bin/env python3
"""gen-europe-diagrams.py — figures for wiki/Worldviews & the Political Order/Europe - The Slow Agony.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-europe-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "europe-diagrams"); os.makedirs(d.OUT, exist_ok=True)
EU, US = TEAL, INDIGO

def bars(name, caption, rows, note, vmax, fmt, label_w=250, x0=None, x1=640, label=None):
    x0 = x0 or (20 + label_w)
    out = [cap(20, 14, caption)]
    body, y = hbars(rows, x0, x1, 26, gap=28, bar=15, vmax=vmax, fmt=fmt, label_w=label_w)
    out.append(body); out.append(txt(20, y + 22, note, 10.5, .78))
    return svg(name, y + 34, label or caption, "\n".join(out))

def fig_four_choices():
    out = [MARKER, cap(20, 14, "the four choices, as the account frames them")]
    pairs = [("leisure", "output"), ("precaution", "speed"), ("fragmentation", "unity"), ("dependency", "independence")]
    for i, (a, b) in enumerate(pairs):
        y = 26 + i * 46
        out.append(box(20, y, 260, 34, ["Europe chose " + a], EU)); out.append(txt(330, y + 21, "over", 10, .6, anchor="middle")); out.append(box(380, y, 280, 34, ["America chose " + b], US))
    out.append(txt(20, 222, "Neither path was wrong in the abstract. One stops working when the world changes.", 10.5, .78))
    return svg("four_choices", 234, "The four choices: Europe took leisure, precaution, fragmentation, and dependency; America took output, speed, unity, and independence", "\n".join(out))

def fig_gap_timeline():
    out = [cap(20, 14, "economy size, trillions of dollars")]
    body, y = hbars([("European Union, 2008", 16.4, EU, .9, "16.4 trillion"), ("United States, 2008", 14.8, US, .9, "14.8 trillion"), ("European Union, 2025", 19.5, EU, .9, "19.5 trillion"), ("United States, 2025", 29, US, .9, "29 trillion")], 220, 640, 26, gap=28, bar=15, vmax=30, fmt=lambda v: str(v), label_w=200)
    out.append(body); out.append(txt(20, y + 22, "A lead of 1.6 trillion in 2008 became a gap of 10 trillion, larger than Japan, Germany, and the United Kingdom together.", 10.5, .78))
    return svg("gap_timeline", y + 34, "European Union against United States economy size: 16.4 against 14.8 trillion dollars in 2008, 19.5 against 29 in 2025", "\n".join(out))

def fig_gap_2030():
    return bars("gap_2030", "projected economy size in 2030, trillions of dollars", [("United States", 40, US, .9, "40 trillion"), ("European Union", 25, EU, .9, "25 trillion")], "The gap of 10 trillion in 2024 becomes 15 trillion by 2030 on the late-2025 projection.", 40, lambda v: str(v), label_w=160)

def fig_euro_conditions():
    out = [MARKER, cap(20, 14, "what a shared currency needs, and what the eurozone had at launch")]
    rows = [("economies that move together", "German and Greek labor markets had almost nothing in common"), ("workers who can move between regions", "a Portuguese welder could not move to Finland"), ("a treasury that moves money between regions", "no European tax authority existed")]
    for i, (a, b) in enumerate(rows):
        y = 26 + i * 52
        out.append(box(20, y, 280, 40, [a], US)); out.append(arrow(304, y + 20, 336, y + 20)); out.append(box(340, y, 320, 40, [b], EU, 10))
    out.append(txt(20, 194, "The warning was that the euro as designed would amplify shocks rather than absorb them.", 10.5, .78))
    return svg("euro_conditions", 206, "The three conditions a shared currency needs, none of which the eurozone met at launch", "\n".join(out))

def fig_crisis_response():
    out = [MARKER, cap(20, 14, "the answer to 2008, on each side")]
    out.append(box(20, 26, 305, 96, ["United States", "475 billion for banks in 3 weeks,", "bond buying, 831 billion stimulus,", "a deficit of 10% of the economy"], US, 10.5))
    out.append(box(355, 26, 305, 96, ["Europe", "cut spending, raise taxes,", "shrink deficits, and a central bank", "raising rates in 2011"], EU, 10.5))
    out.append(txt(20, 148, "America finished its recovery by 2012. Italy's economy in 2026 has still not returned to its level before the crisis.", 10.5, .78))
    return svg("crisis_response", 160, "The answer to 2008: America spent and printed, Europe cut and raised rates", "\n".join(out))

def fig_south_after():
    return bars("south_after", "the south after the crisis, percent", [("Greek economy, 2010 to 2014", 26, EU, .9, "shrank 26%"), ("youth unemployment, Greece, peak", 59.5, EU, .7, "59.5%"), ("youth unemployment, Spain, peak", 56.4, EU, .7, "56.4%")], "Italian real wages are lower than in 1990, the only G7 country where workers earn less than their parents did.", 60, lambda v: str(v) + "%", label_w=250)

def fig_gas_output():
    return bars("gas_output", "American natural gas production, trillion cubic feet a year", [("2005", 18, US, .6, "18 trillion cubic feet"), ("2024", 38, US, .9, "nearly 38 trillion cubic feet")], "By 2018 the largest oil producer, by 2023 the largest gas exporter, and $2.21 per million BTUs in 2024.", 40, lambda v: str(v), label_w=100)

def fig_gas_dependence():
    return bars("gas_dependence", "Germany's dependence on Russia, 2021", [("natural gas", 55, EU, .9, "55%"), ("hard coal", 50, EU, .7, "50%"), ("oil", 35, EU, .5, "35%")], "10 European Union countries took more than half their imported gas from Russia. The invasion of 24 February 2022 ended the supply.", 60, lambda v: str(v) + "%", label_w=140)

def fig_factory_closures():
    return bars("factory_closures", "jobs cut, announced 2023 to 2024", [("Volkswagen, German plants, by 2030", 35000, EU, .9, "35,000"), ("Bosch", 22000, EU, .7, "22,000"), ("ThyssenKrupp", 11000, EU, .5, "11,000")], "BASF shut 11 plants at Ludwigshafen and moved its next 10 billion dollar complex to China. Europe lost half its aluminum smelting.", 40000, lambda v: "{:,}".format(v), label_w=260)

def fig_venture_gap():
    return bars("venture_gap", "venture capital invested in 2024, billions of dollars", [("United States", 250, US, .9, "250 billion"), ("Europe", 45, EU, .9, "45 billion")], "American pension funds put almost 2% of assets into venture capital. European ones put 0.01%.", 260, lambda v: str(v), label_w=140)

def fig_market_cap():
    return bars("market_cap", "market value, trillions of dollars, 2026", [("seven largest American technology companies", 18, US, .9, "over 18 trillion"), ("European Union, whole economy for a year", 19, EU, .9, "19 trillion"), ("Nvidia alone", 4.5, US, .6, "4.5 trillion"), ("ASML, Europe's largest technology company", 0.566, EU, .6, "0.566 trillion")], "No European Union company worth over 100 billion euros has been founded from scratch in 50 years.", 20, lambda v: str(v), label_w=300)

def fig_one_market():
    out = [MARKER, cap(20, 14, "reaching a continent of customers")]
    out.append(box(20, 26, 305, 84, ["an American software company", "335 million consumers,", "one legal framework, day one"], US, 10.5))
    out.append(box(355, 26, 305, 84, ["a company founded in Berlin", "27 governments, 24 languages,", "27 legal systems"], EU, 10.5))
    out.append(txt(20, 136, "Internal barriers in the single market equal a 45% tariff on goods and a 110% tariff on services. 57% of relocating founders chose America.", 10.5, .78))
    return svg("one_market", 148, "One market of 335 million against 27 legal systems", "\n".join(out))

def fig_endowments():
    return bars("endowments", "university endowments, billions of dollars", [("Harvard", 53, US, .9, "53"), ("Yale", 41, US, .8, "41"), ("Stanford", 37, US, .7, "37"), ("Princeton", 34, US, .6, "34"), ("Oxford, about, in pounds", 8, EU, .9, "8"), ("Cambridge, about, in pounds", 8, EU, .9, "8")], "The National Institutes of Health spend 47 billion dollars a year. The European Research Council has 2.3 billion euros.", 55, lambda v: str(v), label_w=200)

def fig_who_came():
    out = [MARKER, cap(20, 14, "who came, on the account")]
    out.append(box(20, 26, 305, 96, ["America", "1,177,000 international students in 2024,", "55% of unicorns with an immigrant founder,", "engineers on work visas at 200,000 dollars"], US, 10))
    out.append(box(355, 26, 305, 96, ["Europe", "1.3 million asylum applications in 2015,", "890,000 in Germany, 78% of unemployed", "immigrants with no vocational qualification"], EU, 10))
    out.append(txt(20, 148, "America took the skilled immigrants and Europe absorbed the humanitarian caseload, and the politics followed from Britain to Austria.", 10.5, .78))
    return svg("who_came", 160, "Who came: skilled students and founders to America, asylum seekers to Europe", "\n".join(out))

def fig_fertility():
    return bars("fertility", "births per woman, 2024", [("replacement", 2.1, GRAY, .5, "2.1"), ("United States", 1.68, US, .9, "1.68"), ("European Union", 1.34, EU, .9, "1.34"), ("Italy", 1.18, EU, .7, "1.18"), ("Malta", 1.01, EU, .7, "1.01"), ("Spain", 1.0, EU, .7, "1.0")], "Every member state is below replacement. Italy is on track to lose 12 million people by 2070.", 2.2, lambda v: str(v), label_w=140)

def fig_workforce_fall():
    return bars("workforce_fall", "European Union working-age population, aged 20 to 64, millions", [("2025", 262, EU, .9, "262 million"), ("2100, projected", 198, EU, .5, "198 million")], "A loss of 64 million workers. In Italy the retiree-to-worker ratio could reach 90%.", 280, lambda v: str(v), label_w=140)

def fig_hours():
    return bars("hours", "hours worked a year", [("United States", 1811, US, .9, "1,811"), ("France", 1490, EU, .7, "1,490"), ("Germany", 1341, EU, .9, "1,341")], "A German works about 470 fewer hours than an American, roughly 10 weeks a year, and takes the difference as vacation.", 1900, lambda v: "{:,}".format(v), label_w=140)

def fig_returns():
    return bars("returns", "stock market return since 2000, percent", [("S&P 500, with dividends", 500, US, .9, "about 500%"), ("Euro Stoxx 50, price", 0, EU, .9, "about 0%")], "58% of American households own stocks, about 20% of German ones, and closer to 15% of Italian ones.", 520, lambda v: str(v) + "%", label_w=200)

def fig_ai_investment():
    return bars("ai_investment", "private investment in artificial intelligence, 2024, billions of dollars", [("United States", 109, US, .9, "109 billion"), ("European Union", 10, EU, .9, "under 10 billion")], "The American Stargate project committed 500 billion dollars over 4 years, 400 billion of it secured by October 2025.", 120, lambda v: str(v), label_w=140)

FIGS = [fig_four_choices, fig_gap_timeline, fig_gap_2030, fig_euro_conditions, fig_crisis_response, fig_south_after, fig_gas_output, fig_gas_dependence, fig_factory_closures, fig_venture_gap, fig_market_cap, fig_one_market, fig_endowments, fig_who_came, fig_fertility, fig_workforce_fall, fig_hours, fig_returns, fig_ai_investment]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
