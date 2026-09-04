#!/usr/bin/env python3
"""gen-britain-diagrams.py — figures for wiki/Worldviews & the Political Order/Britain - Poorer Than Mississippi.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-britain-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "britain-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def fig_guess_vs_rank():
    X0, X1 = 60, 620
    def px(r): return X0 + (X1 - X0) * (r - 1) / 50
    out = [cap(20, 14, "if britain were an american state, its rank on income per person")]
    out.append(line(X0, 60, X1, 60, GRID, 1.5))
    for r, lab in ((1, "1st, richest"), (10, "10th"), (25, "25th"), (40, "40th"), (51, "51st, last")):
        out.append(line(px(r), 54, px(r), 66, GRID)); out.append(txt(px(r), 82, lab, 10, .6, anchor="middle"))
    out.append('<circle cx="%.1f" cy="60" r="7" fill="%s"/>' % (px(7), PURPLE)); out.append(txt(px(7), 40, "the average guess: 7th", 10.5, .9, anchor="middle"))
    out.append('<circle cx="%.1f" cy="60" r="7" fill="%s"/>' % (px(51), INDIGO)); out.append(txt(px(51) - 10, 40, "the answer: 51st", 10.5, .9, anchor="end"))
    out.append(txt(20, 112, "3,000 voters were asked in April 2026. Britain sits behind Alabama, West Virginia, Arkansas, and Mississippi.", 10.5, .78))
    return svg("guess_vs_rank", 124, "Britons guessed their country would rank seventh among American states on income per person; it ranks last", "\n".join(out))

def fig_postwar_growth():
    out = [cap(20, 14, "growth a year, the decades after the war")]
    body, _ = hbars([("Japan, 1960s", 10, PURPLE, .9, "10% a year"), ("West Germany, 1950s", 8, PURPLE, .9, "8% a year"), ("Britain", 2.5, INDIGO, .9, "2.5% a year")], 190, 560, 24, vmax=11, fmt=lambda v: "%g%%" % v)
    out.append(body)
    out.append(txt(20, 112, "By 1970 the richest large economy in Europe of 1945 was fourteenth in the world on income per person.", 10.5, .78))
    return svg("postwar_growth", 124, "Post-war growth: Japan 10% a year, West Germany 8%, Britain 2.5%", "\n".join(out))

def fig_seventies_to_thatcher():
    out = [MARKER, cap(20, 14, "the decade that broke, then the turn")]
    steps = [("1974", "coal strike,", "three-day week"), ("1976", "$3.9 billion IMF loan,", "inflation 25%"), ("1978 to 1979", "rubbish, unburied dead,", "crisis, what crisis"), ("1979 to 1990", "privatisation, top rate", "83% to 40%, Big Bang 1986")]
    for i, lines in enumerate(steps):
        x = 20 + i * 165
        out.append(box(x, 24, 150, 64, list(lines), PURPLE if i < 3 else INDIGO, 10))
        if i < 3: out.append(arrow(x + 150, 56, x + 165, 56))
    out.append(txt(20, 116, "The coal, steel, and shipbuilding towns never recovered from the turn, and the country split into two Britains.", 10.5, .78))
    return svg("seventies_to_thatcher", 128, "From the three-day week of 1974 to the privatisations and tax cuts of the 1980s", "\n".join(out))

def fig_productivity():
    out = [cap(20, 14, "growth in output per hour, a year, 2008 to 2024")]
    body, _ = hbars([("United States", 1.9, PURPLE, .9, "1.9% a year"), ("Britain", 0.6, INDIGO, .9, "0.6% a year, worst in the G7 after Italy")], 130, 400, 24, vmax=2.2, fmt=lambda v: "%g%%" % v)
    out.append(body)
    out.append(cap(430, 14, "investment, share of output, 2024")); body, _ = hbars([("Britain", 18.9, INDIGO, .9, "18.9%, the lowest in the G7")], 490, 640, 24, vmax=25, fmt=lambda v: "%g%%" % v)
    out.append(body)
    out.append(txt(20, 96, "Between 2019 and 2024 British productivity fell 0.5%, the second worst five years since the series began.", 10.5, .78))
    return svg("productivity", 108, "British output per hour grew 0.6% a year against 1.9% in America, on the lowest investment in the G7", "\n".join(out))

def fig_sold_abroad():
    out = [MARKER, cap(20, 14, "what britain invented and did not keep")]
    out.append(box(20, 24, 200, 70, ["the chip designer", "sold to Japan for £24.3 billion, 2016;", "listed in New York, 2023"], INDIGO, 10))
    out.append(box(240, 24, 200, 70, ["the AI lab", "sold to an American", "search company, 2014"], INDIGO, 10))
    out.append(box(460, 24, 200, 70, ["the battery plant", "£3.8 billion promised;", "sold for £8.6 million, 2023"], INDIGO, 10))
    out.append(txt(20, 122, "Whatever a British university invents is sold to an American buyer within about five years.", 10.5, .78))
    return svg("sold_abroad", 134, "Three British inventions that ended up owned abroad or sold for scrap", "\n".join(out))

def fig_tax_burden():
    out = [slope(20, 14, 200, 100, "taxpayers on the 40% rate", 15, 24, "2021", "2030", INDIGO, vmax=30)]
    out.append(cap(250, 14, "effective marginal rate")); body, _ = hbars([("£100,000 to £125,140", 62, INDIGO, .9, "62%, as the tax-free allowance is withdrawn"), ("£400,000", 45, INDIGO, .5, "Lower than the band below it")], 400, 620, 24, vmax=70, fmt=lambda v: "%d%%" % v if v == 62 else "lower")
    out.append(body)
    out.append(txt(250, 90, "Total tax reaches 37.7% of output by 2027. The £12,570 allowance is frozen to 2031,", 10.5, .78)); out.append(txt(250, 106, "which raises £55.5 billion a year by 2030 without a vote.", 10.5, .78))
    return svg("tax_burden", 150, "More taxpayers pushed into the 40% rate, and a 62% marginal rate on the income band a country most wants to keep", "\n".join(out))

def fig_exodus():
    out = [cap(20, 14, "who left in one year")]
    body, _ = hbars([("millionaires, 2025", 16500, PURPLE, .9, "16,500 millionaires, taking $91.8 billion"), ("citizens, all, 2024", 252000, INDIGO, .9, "252,000 citizens, three-quarters under 35")], 190, 560, 24, vmax=260000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(cap(20, 90, "a junior doctor's pay for the same work")); body, _ = hbars([("Britain", 37000, INDIGO, .9, "About £37,000"), ("Perth, Australia", 80000, PURPLE, .9, "About £80,000, shorter shifts")], 190, 560, 100, vmax=85000, fmt=lambda v: "£{:,}".format(v))
    out.append(body)
    out.append(txt(20, 162, "British-trained doctors were the largest overseas source for the whole Australian health system in 2024.", 10.5, .78))
    return svg("exodus", 174, "Millionaires and young citizens leaving, and a junior doctor's pay in Britain against Perth", "\n".join(out))

def fig_closures():
    out = [cap(20, 14, "green steel projects under construction")]
    body, _ = hbars([("Germany", 8, PURPLE, .9, "8"), ("France", 3, PURPLE, .9, "3"), ("Spain", 2, PURPLE, .9, "2"), ("Britain", 0, INDIGO, .9, "0")], 110, 300, 24, gap=22, vmax=9, fmt=lambda v: str(v))
    out.append(body)
    out.append(MARKER); out.append(box(340, 24, 320, 100, ["2024: the last blast furnace in Wales closes", "2025: Scotland's last refinery shuts, 400 jobs", "2025: the largest company on the exchange", "cancels a £450 million plant at home", "and commits $50 billion to America"], INDIGO, 10))
    out.append(txt(20, 150, "Industrial electricity: 26.63 pence a kilowatt-hour in 2026, about four times the American price.", 10.5, .78))
    return svg("closures", 162, "Britain has no green steel projects and closed its last blast furnace and refinery as electricity costs four times America's", "\n".join(out))

def fig_housing_ratio():
    out = [cap(20, 14, "house price as a multiple of salary")]
    body, _ = hbars([("long-run average, 20th century", 3.9, PURPLE, .5, "3.9 times earnings"), ("Britain, 2025", 7.6, PURPLE, .9, "7.6 times"), ("Kensington and Chelsea", 25.2, PURPLE, .9, "25.2 times")], 250, 560, 24, vmax=27, fmt=lambda v: "%g times" % v)
    out.append(body)
    out.append(slope(20, 110, 280, 90, "home ownership, ages 25 to 34", 55, 31, "1990", "2023", INDIGO, vmax=70))
    out.append(slope(340, 110, 280, 90, "home ownership, all", 71, 63, "2003", "2024", INDIGO, vmax=80))
    return svg("housing_ratio", 222, "House prices at 7.6 times salary against a long-run 3.9, and home ownership among the young down from 55% to 31%", "\n".join(out))

def fig_planning():
    out = [MARKER, cap(20, 14, "permission, not land")]
    out.append(box(20, 24, 150, 84, ["8.7% of Britain", "is built on;", "12.6% of England", "is green belt"], INDIGO, 10))
    out.append(box(190, 24, 150, 84, ["£100 million tunnel", "for bats on a railway,", "8,276 approvals"], INDIGO, 10))
    out.append(box(360, 24, 150, 84, ["449 flats refused", "because one block", "was five storeys"], INDIGO, 10))
    out.append(box(530, 24, 130, 84, ["a nuclear plant", "delayed for terns,", "a theme park", "killed by spiders"], INDIGO, 10))
    out.append(cap(20, 138, "texas builds")); out.append(box(20, 146, 310, 56, ["Austin: 120,000 homes in nine years,", "rents down 16% to 22% from the peak"], PURPLE, 10)); out.append(box(350, 146, 310, 56, ["Dallas and Fort Worth, 2024: 71,788 permits,", "about what all of Britain builds"], PURPLE, 10))
    return svg("planning", 214, "Britain has the land and withholds the permission; Texas builds and its rents fall", "\n".join(out))

def fig_social_housing():
    out = [cap(20, 14, "stayed in the same home over ten years")]
    body, _ = hbars([("social tenants", 45, INDIGO, .9, "45%"), ("private renters", 15, PURPLE, .9, "15%")], 130, 320, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(360, 14, "waiting outside")); body, _ = hbars([("households on waiting lists", 1340000, INDIGO, .9, "1.34 million households"), ("children in temporary accommodation", 165000, INDIGO, .9, "165,000 children")], 570, 600, 24, vmax=1400000, fmt=lambda v: "1.34 million" if v > 1000000 else "165,000")
    out.append(body)
    out.append(txt(20, 96, "6% of social homes came free in a year, 2.7% in London. 78% of new tenancies are for life.", 10.5, .78)); out.append(txt(20, 112, "Three London boroughs have waits over a hundred years.", 10.5, .78))
    return svg("social_housing", 124, "Social tenants stay three times as long as private renters while 1.34 million households wait", "\n".join(out))

def fig_welfare_trap():
    out = [MARKER, cap(20, 14, "a single parent with two children in council housing")]
    out.append(box(20, 24, 200, 60, ["a £20,000 job"], PURPLE, 11)); out.append(arrow(220, 54, 260, 54))
    out.append(box(262, 24, 200, 60, ["a £30,000 job"], PURPLE, 11)); out.append(arrow(462, 54, 502, 54))
    out.append(box(504, 24, 156, 60, ["keeps under £2,000", "of the extra £10,000"], INDIGO, 10))
    out.append(txt(20, 112, "Withdrawn housing benefit, withdrawn credits, withdrawn childcare help, and higher tax take more than 80% in the worst cases.", 10.5, .78))
    out.append(txt(20, 128, "About 2.8 million people are on long-term sickness benefits, and the state pays more in working-age welfare than it collects in income tax.", 10.5, .78))
    return svg("welfare_trap", 140, "A single parent who takes a £10,000 raise can keep under £2,000 of it", "\n".join(out))

def fig_debt_interest():
    out = [slope(20, 14, 220, 100, "interest on the debt, £ billion a year", 111, 137, "2026", "2030", INDIGO, unit="", vmax=150)]
    out.append(cap(270, 14, "among 36 advanced economies, britain ranks")); out.append(box(270, 24, 390, 70, ["5th highest deficit", "3rd highest borrowing costs", "6th highest debt"], INDIGO, 10.5))
    out.append(txt(20, 150, "Debt is 93% of output, about £2.9 trillion, or £102,000 for every household. The fiscal watchdog calls the position increasingly vulnerable.", 10.5, .78))
    return svg("debt_interest", 162, "Interest on Britain's debt rising from £111 billion to £137 billion a year, and its rank among 36 economies", "\n".join(out))

def fig_nhs():
    out = [slope(20, 14, 200, 100, "median wait, weeks", 7.8, 13.6, "2019", "2025", INDIGO, unit="", vmax=16)]
    out.append(cap(250, 14, "the health service, 2025")); out.append(box(250, 24, 410, 84, ["7.25 million on the waiting list, one adult in nine", "colon cancer five-year survival 60%, second lowest of 18", "productivity 5% to 11% below 2019 with 47% more doctors", "junior doctors' pay 21% below 2008 in real terms"], INDIGO, 10))
    out.append(txt(20, 150, "Life expectancy stopped rising around 2011, before the pandemic. About £20 billion a year is lost to duplication and administration.", 10.5, .78))
    return svg("nhs", 162, "Waits nearly doubled since 2019, and survival, productivity, and pay all lag", "\n".join(out))

def fig_immigration():
    out = [cap(20, 14, "net immigration, a year")]
    body, _ = hbars([("year to March 2023", 944000, INDIGO, .9, "944,000, about the population of Glasgow"), ("year to June 2025", 204000, INDIGO, .5, "204,000 after visa rules tightened")], 190, 560, 24, vmax=1000000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(cap(20, 90, "care-worker visas")); body, _ = hbars([("2023", 145823, PURPLE, .9, "145,823"), ("2024", 27174, PURPLE, .9, "27,174, down 81% after dependants were barred")], 190, 560, 100, vmax=160000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(txt(20, 162, "2021 to 2024: 2.55 million net arrivals, 3.8% of the population. About 89% of the decade's rise in England's housing shortfall.", 10.5, .78))
    return svg("immigration", 174, "Net immigration of 944,000 in one year, then a two-thirds fall as visas tightened", "\n".join(out))

def fig_what_people_want():
    out = [cap(20, 14, "britons who support, april 2026")]
    body, _ = hbars([("more economic growth", 87, PURPLE, .9, "87%"), ("cheaper energy", 77, PURPLE, .9, "77%"), ("lower taxes on workers", 72, PURPLE, .9, "72%"), ("easier planning rules", 59, PURPLE, .9, "59%"), ("higher taxes and spending", 36, INDIGO, .9, "36%, the lowest since 2013")], 210, 560, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 162, "Chancellor's net approval: minus 51. Prime minister's: minus 48.", 10.5, .78)); out.append(txt(20, 178, "The insurgent party leads at 24%, Conservatives 19%, Liberal Democrats 13%.", 10.5, .78))
    return svg("what_people_want", 190, "The public asks for growth, cheap energy, lower taxes, and easier planning, and support for higher taxes is at a twelve-year low", "\n".join(out))

def fig_forecast():
    out = [slope(20, 14, 200, 100, "debt, share of output", 93, 275, "2026", "2070s", INDIGO, vmax=340),
           slope(250, 14, 200, 100, "total output, $ trillion", 4, 6.8, "mid-2020s", "2040", PURPLE, unit="", vmax=8)]
    out.append(cap(480, 14, "rank on income per person")); out.append(box(480, 24, 180, 60, ["19th now,", "low 20s by 2040"], INDIGO, 10.5))
    out.append(txt(20, 150, "Fifth largest economy on paper, sliding on the ground. 9% of Britons think the country is wealthy enough and 70% expect it to get worse.", 10.5, .78))
    return svg("forecast", 162, "Debt heading for 275% of output while total output grows and income per person slides in rank", "\n".join(out))

FIGS = [fig_guess_vs_rank, fig_postwar_growth, fig_seventies_to_thatcher, fig_productivity, fig_sold_abroad, fig_tax_burden, fig_exodus, fig_closures, fig_housing_ratio, fig_planning, fig_social_housing, fig_welfare_trap, fig_debt_interest, fig_nhs, fig_immigration, fig_what_people_want, fig_forecast]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
