#!/usr/bin/env python3
"""gen-socialism-diagrams.py — figures for wiki/Worldviews & the Political Order/Socialism - The Calculation Problem.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-socialism-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "socialism-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def fig_definitions():
    out = [cap(20, 14, "how americans define socialism, 2018")]
    body, _ = hbars([("government ownership of production", 17, PURPLE, .9, "17% gave the textbook definition"), ("equality", 23, PURPLE, .9, "23% said equality"), ("free healthcare, college, benefits, the Nordics", 60, PURPLE, .4, "The rest named benefits or the Nordic countries")], 300, 620, 24, vmax=100, fmt=lambda v: "%d%%" % v if v != 60 else "the rest")
    out.append(body)
    out.append(cap(20, 108, "millennials, 2014")); body, _ = hbars([("like socialism", 42, PURPLE, .9, "42% liked socialism"), ("can define it", 16, PURPLE, .9, "16% could define it"), ("want a free market", 64, PURPLE, .9, "64% wanted a free-market economy")], 300, 620, 118, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    return svg("definitions", 200, "Few Americans define socialism as state ownership, and the same millennials liked socialism and wanted a free market", "\n".join(out))

def fig_nordic_facts():
    out = [MARKER, cap(20, 14, "the nordic countries people point to")]
    out.append(box(20, 24, 200, 64, ["all five in the top 15", "of the economic-freedom index;", "Denmark above the United States"], PURPLE, 10))
    out.append(box(240, 24, 200, 64, ["Sweden: school vouchers since 1992,", "wealth tax abolished 2007;", "Norway: estate tax abolished 2014"], PURPLE, 10))
    out.append(box(460, 24, 200, 64, ["a 25% sales tax on everyone,", "top income brackets starting", "at middle-class incomes"], PURPLE, 10))
    out.append(txt(20, 116, "The welfare state is the second floor. The privately owned market is the foundation.", 10.5, .78))
    return svg("nordic_facts", 128, "Three facts about the Nordic countries that make them market economies with a welfare state on top", "\n".join(out))

def fig_price_signal():
    out = [MARKER, cap(20, 14, "in a market")]
    out.append(box(20, 24, 180, 56, ["copper runs short"], PURPLE, 10.5)); out.append(arrow(200, 52, 240, 52))
    out.append(box(242, 24, 180, 56, ["the price of copper rises"], PURPLE, 10.5)); out.append(arrow(422, 52, 462, 52))
    out.append(box(464, 24, 196, 56, ["every copper user on earth", "gets the signal and adjusts"], PURPLE, 10.5))
    out.append(cap(20, 112, "under state ownership"))
    out.append(box(20, 120, 300, 56, ["no private buyers or sellers", "of factories, farms, or mines"], INDIGO, 10.5)); out.append(arrow(320, 148, 360, 148))
    out.append(box(362, 120, 298, 56, ["no prices for them,", "so the planners have nothing to calculate with"], INDIGO, 10.5))
    return svg("price_signal", 190, "A price carries a shortage to every user at once; without private buyers and sellers there is no price", "\n".join(out))

def fig_price_counts():
    out = [cap(20, 14, "prices set or needed in a year")]
    body, _ = hbars([("Soviet price bureau, 1985", 200000, INDIGO, .9, "About 200,000 prices reviewed a year"), ("a working modern economy", 20000000, PURPLE, .9, "About 20 million prices, updated continuously")], 230, 620, 24, vmax=20000000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(txt(20, 86, "The gap was filled by shortages, black markets, and waiting lists.", 10.5, .78)); out.append(txt(20, 102, "By 1991 the deficit was 34% of output and trade among the republics had fallen 83%.", 10.5, .78))
    return svg("price_counts", 114, "The Soviet price bureau set about 200,000 prices a year against the 20 million a working economy needs", "\n".join(out))

def fig_death_toll():
    out = [cap(20, 14, "deaths under socialist regimes, millions, as the video counts them")]
    body, _ = hbars([("Soviet Union, total", 20, INDIGO, .9, "About 15 to 20 million"), ("China, famine of 1958 to 1962", 45, INDIGO, .9, "36 to 45 million"), ("Cambodia, 1975 to 1979", 1.87, INDIGO, .9, "About 1.87 million of 7.89 million, one in four"), ("North Korea, famine of the 1990s", 1, INDIGO, .9, "600,000 to a million"), ("Ukraine famine, 1932 to 1933", 5, INDIGO, .9, "Three to five million")], 250, 620, 24, vmax=50, fmt=lambda v: {20: "15 to 20", 45: "36 to 45", 1.87: "1.87", 1: "0.6 to 1", 5: "3 to 5"}[v])
    out.append(body)
    out.append(txt(20, 162, "The video's total for the century: 65 to 100 million.", 10.5, .78))
    return svg("death_toll", 174, "Deaths under the Soviet, Chinese, Cambodian, and North Korean regimes in millions", "\n".join(out))

def fig_two_koreas_two_germanys():
    out = [cap(20, 14, "output per head, the koreas")]
    body, _ = hbars([("South Korea", 35000, PURPLE, .9, "About $35,000"), ("North Korea", 640, INDIGO, .9, "About $640")], 130, 330, 24, vmax=35000, fmt=lambda v: "${:,}".format(v))
    out.append(body)
    out.append(cap(370, 14, "output per head, the germanys, 1989")); body, _ = hbars([("West Germany", 28000, PURPLE, .9, "About $28,000"), ("East Germany", 12000, INDIGO, .9, "About $12,000")], 470, 640, 24, vmax=35000, fmt=lambda v: "${:,}".format(v))
    out.append(body)
    out.append(txt(20, 96, "East Germany's population fell from 18.4 million to 16.4 million as people fled west. At least 140 died at the wall built to keep them in.", 10.5, .78))
    return svg("two_koreas_two_germanys", 108, "One culture split in two, twice: output per head in the two Koreas and the two Germanys", "\n".join(out))

def fig_venezuela():
    X0, X1, Y0, Y1 = 60, 400, 24, 150
    pts = [(1999, 4000), (2013, 14200), (2019, 1800)]
    def px(y): return X0 + (X1 - X0) * (y - 1999) / 20
    def py(v): return Y1 - (Y1 - Y0) * v / 16000
    out = [cap(X0, 14, "venezuela, output per head")]
    out.append(line(X0, Y1, X1, Y1, GRID))
    out.append(path("M" + " L".join("%.1f,%.1f" % (px(y), py(v)) for y, v in pts), PURPLE, 2))
    for y, v in pts:
        out.append('<circle cx="%.1f" cy="%.1f" r="5" fill="%s"/>' % (px(y), py(v), PURPLE))
        out.append(txt(px(y), py(v) - 10, "${:,}".format(v), 10.5, .9, anchor="middle")); out.append(txt(px(y), Y1 + 14, str(y), 10, .6, anchor="middle"))
    out.append(txt(430, 40, "303 billion barrels of oil, the most on earth", 10.5, .78)); out.append(txt(430, 60, "an 87% fall in output per head, 2013 to 2019", 10.5, .78))
    out.append(txt(430, 80, "inflation in 2018: 130,000% by the central bank,", 10.5, .78)); out.append(txt(430, 96, "nearly a million percent by the IMF", 10.5, .78))
    out.append(txt(430, 116, "24 pounds lost per person in a year", 10.5, .78)); out.append(txt(430, 136, "7.4 million people gone by 2024, one in four", 10.5, .78))
    return svg("venezuela", 176, "Venezuela's output per head rose from $4,000 to $14,200 and fell to $1,800", "\n".join(out))

def fig_poverty_fall():
    out = [slope(20, 14, 220, 110, "china in extreme poverty", 88, 3, "1978", "2020", PURPLE, vmax=100),
           slope(260, 14, 200, 110, "the world in extreme poverty", 38, 10, "1990", "2024", PURPLE, vmax=100)]
    out.append(cap(490, 14, "output per head by freedom")); body, _ = hbars([("freest quarter", 120000, PURPLE, .9, "About $120,000"), ("least free quarter", 10600, INDIGO, .9, "About $10,600")], 560, 610, 30, gap=28, vmax=120000, fmt=lambda v: "${:,}".format(v))
    out.append(body.replace('>freest quarter<', '>freest<').replace('>least free quarter<', '>least free<'))
    out.append(txt(20, 160, "About 800 million Chinese and 270 million Indians left poverty after markets were allowed.", 10.5, .78)); out.append(txt(20, 176, "Since 1800: life expectancy 38 to 73.2 years, literacy 12% to 87%.", 10.5, .78))
    return svg("poverty_fall", 188, "Extreme poverty fell from 88% to under 3% in China and from 38% to about 10% worldwide as markets spread", "\n".join(out))

def fig_not_real_cycle():
    out = [MARKER, cap(20, 14, "the cycle the video describes")]
    steps = [("a regime rises", "and is praised", "as the future"), ("famine, purge,", "or flight", "follows"), ("the admirers", "go quiet", ""), ("a new generation", "finds a new regime,", "the real thing this time")]
    for i, lines in enumerate(steps):
        x = 20 + i * 165
        out.append(box(x, 24, 150, 64, [l for l in lines if l], PURPLE, 10))
        if i < 3: out.append(arrow(x + 150, 56, x + 165, 56))
    out.append(txt(20, 116, "Asked what the real version looks like, the answer is Denmark, Sweden, or Norway.", 10.5, .78)); out.append(txt(20, 132, "Asked why every attempt failed, the answer is corruption, sanctions, or bad luck.", 10.5, .78))
    return svg("not_real_cycle", 144, "The four-step cycle behind the reply that it was not real socialism", "\n".join(out))

def fig_distortions():
    out = [slope(20, 14, 200, 100, "american income gini", .397, .49, "1967", "2023", PURPLE, unit="", vmax=.6),
           slope(250, 14, 200, 100, "top 1% share of national income", 8, 20, "late 1970s", "2010s", PURPLE, vmax=25)]
    out.append(cap(480, 14, "where the price is bent")); out.append(box(480, 24, 180, 84, ["housing: zoning blocks building", "healthcare: half government,", "half tax-subsidised insurance", "2008: capture and cheap money"], INDIGO, 9.5))
    out.append(txt(20, 150, "Healthcare spending reached 18% of output. A privately marketed painkiller helped kill over 800,000 people between 1999 and 2022.", 10.5, .78))
    return svg("distortions", 162, "American inequality rose after 1980, and the video places each distortion where government shapes the market", "\n".join(out))

def fig_gender_gap_countries():
    out = [cap(20, 14, "how far young women sit left of young men, in points")]
    body, _ = hbars([("United States", 30, TEAL, .9, "About 30 points"), ("Germany", 30, TEAL, .9, "About 30 points"), ("Britain", 25, TEAL, .9, "About 25 points"), ("South Korea", 40, TEAL, .9, "About 40 points")], 130, 400, 24, vmax=50, fmt=lambda v: "%d" % v)
    out.append(body)
    out.append(cap(430, 14, "korea 2022, voters in their twenties")); body, _ = hbars([("men, conservative", 59, INDIGO, .9, "59% of men in their twenties"), ("women, liberal", 62, TEAL, .9, "59% to 66% of women in their twenties")], 540, 640, 24, vmax=100, fmt=lambda v: "59%" if v == 59 else "59 to 66%")
    out.append(body)
    out.append(txt(20, 138, "The American gap opened in six years, from near zero in 2017.", 10.5, .78))
    return svg("gender_gap_countries", 150, "The political gap between young women and young men in four countries, and Korea's 2022 vote", "\n".join(out))

def fig_faculty_ratio():
    out = [cap(20, 14, "democrats per republican, 51 elite colleges, 2018")]
    body, _ = hbars([("all departments", 12.7, PURPLE, .9, "12.7 to one"), ("history", 33, PURPLE, .9, "About 33 to one"), ("sociology", 44, PURPLE, .9, "About 44 to one"), ("communications", 108, PURPLE, .9, "108 to one"), ("anthropology", 133, PURPLE, .9, "133 to one")], 150, 400, 24, vmax=140, fmt=lambda v: "%g to 1" % v)
    out.append(body)
    out.append(cap(430, 14, "harvard arts and sciences faculty")); body, _ = hbars([("liberal", 82, PURPLE, .9, "82% liberal or very liberal"), ("conservative", 1, PURPLE, .9, "1% conservative")], 520, 640, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(430, 100, "The public: 37% conservative,", 10.5, .78)); out.append(txt(430, 116, "37% moderate, 26% liberal.", 10.5, .78))
    out.append(txt(20, 164, "Women earn about 60% of bachelor's degrees, up from about 40% in 1970, concentrated in the humanities and social sciences.", 10.5, .78))
    return svg("faculty_ratio", 176, "Democrats per Republican on elite college faculties, and the Harvard faculty against the public", "\n".join(out))

def fig_platform_geography():
    out = [MARKER, cap(20, 14, "who is where")]
    out.append(box(20, 24, 300, 70, ["teen girls", "Instagram, TikTok, Snapchat", "slide-deck activists with 2 to 3.5 million followers each"], TEAL, 10))
    out.append(box(360, 24, 300, 70, ["teen boys", "YouTube, Discord, Twitch, Reddit", "the counterweights pull the other way"], INDIGO, 10))
    out.append(txt(20, 122, "A socialist streamer with three million followers drew over 300,000 live viewers on election night 2024.", 10.5, .78)); out.append(txt(20, 138, "Two information economies run in parallel, sorted by platform.", 10.5, .78))
    return svg("platform_geography", 150, "Girls and boys use different platforms, and each platform carries a different politics", "\n".join(out))

def fig_material_squeeze():
    out = [cap(20, 14, "2019 to 2024")]
    body, _ = hbars([("median home price", 48, PURPLE, .9, "Up 48%"), ("median household income", 22, PURPLE, .5, "Up 22%")], 190, 400, 24, vmax=60, fmt=lambda v: "+%d%%" % v)
    out.append(body)
    out.append(cap(430, 14, "student debt, $1.7 trillion")); body, _ = hbars([("held by women", 929, TEAL, .9, "$929 billion, about two-thirds"), ("held by men", 771, INDIGO, .9, "About $771 billion")], 520, 640, 24, vmax=1000, fmt=lambda v: "$%d bn" % v)
    out.append(body)
    out.append(txt(20, 96, "Price-to-income ratio 5.0, the worst on record. 3% of home buyers are Gen Z. Childcare averages $13,128 a child a year.", 10.5, .78))
    return svg("material_squeeze", 108, "Home prices rose twice as fast as incomes, and women hold two-thirds of student debt", "\n".join(out))

def fig_pay_gap():
    out = [cap(20, 14, "what women earn per dollar men earn")]
    body, _ = hbars([("all full-time workers, raw average", 83, TEAL, .9, "83 cents, the headline figure"), ("young childless workers, same hours, job, industry", 96.5, TEAL, .9, "94 to 99 cents")], 340, 560, 24, vmax=100, fmt=lambda v: "83 cents" if v == 83 else "94 to 99 cents")
    out.append(body); out.append(line(560, 22, 560, 76, "rgba(130,130,130,.8)", 1.2)); out.append(txt(560, 90, "$1", 10, .6, anchor="middle"))
    out.append(txt(20, 112, "Most of the remaining gap opens at the birth of the first child. The 83-cent figure is taught at 16 and the 99-cent figure is not.", 10.5, .78))
    return svg("pay_gap", 124, "The pay gap is 83 cents as a raw average and 94 to 99 cents for young childless workers in the same jobs", "\n".join(out))

def fig_what_they_want():
    out = [cap(20, 14, "young americans, 2025")]
    body, _ = hbars([("country headed the right way", 13, PURPLE, .9, "13%"), ("negative word for the Democrats", 58, PURPLE, .9, "58%"), ("negative word for the Republicans", 56, PURPLE, .9, "56%"), ("negative word for both", 40, PURPLE, .9, "40%")], 250, 620, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(20, 130, "labels, young americans, 2025")); body, _ = hbars([("support socialism", 21, PURPLE, .9, "21%, down from earlier highs"), ("support democratic socialism", 29, PURPLE, .9, "29%"), ("call themselves capitalist", 19, PURPLE, .9, "19%")], 250, 620, 140, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 228, "Americans as a whole favoured capitalism over socialism 54% to 39% in 2025.", 10.5, .78))
    return svg("what_they_want", 240, "Young Americans distrust both parties, and support for every label is low", "\n".join(out))

def fig_debt_arithmetic():
    out = [slope(20, 14, 200, 100, "debt as a share of output", 120, 156, "2026", "2055", PURPLE, vmax=170),
           slope(250, 14, 200, 100, "net interest, trillions a year", 1, 2.1, "2025", "2036", PURPLE, unit="", vmax=2.5)]
    out.append(cap(480, 14, "2033, by law")); out.append(box(480, 24, 180, 84, ["Social Security trust fund", "runs out: benefits cut 23%", "Medicare hospital fund", "runs out: benefits cut 11%"], INDIGO, 9.5))
    out.append(txt(20, 150, "By 2050 about 22% of Americans are over 65. Interest already costs more than the military.", 10.5, .78))
    return svg("debt_arithmetic", 162, "Debt heads from 120% to 156% of output, interest doubles, and the trust funds run out in 2033", "\n".join(out))

def fig_demands_vs_billionaires():
    out = [cap(20, 14, "what is asked for, trillions over a decade")]
    body, _ = hbars([("universal healthcare", 35, PURPLE, .9, "$30 to $40 trillion"), ("a green programme, its own advocates' estimate", 90, PURPLE, .9, "About $90 trillion"), ("cancel student debt", 1.7, PURPLE, .9, "$1.7 trillion once")], 320, 620, 24, vmax=95, fmt=lambda v: {35: "$30 to $40 tn", 90: "$90 tn", 1.7: "$1.7 tn"}[v])
    out.append(body)
    out.append(cap(20, 108, "what is on offer")); body, _ = hbars([("every billionaire taxed at 100%, once", 5, INDIGO, .9, "About $5 trillion, one time, about 18 months of deficit")], 320, 620, 118, vmax=95, fmt=lambda v: "$5 tn, about 18 months of deficit")
    out.append(body)
    out.append(txt(20, 162, "The honest ways to pay are a broad sales tax like Denmark's 25%, or cuts to the programmes the same voters want expanded.", 10.5, .78))
    return svg("demands_vs_billionaires", 174, "The programmes asked for against what seizing every billionaire's wealth would raise once", "\n".join(out))

def fig_who_decides():
    out = [MARKER, cap(20, 14, "who decides")]
    out.append(box(20, 24, 310, 96, ["a market", "millions decide on their own knowledge,", "coordinated by prices;", "mistakes are small, local, and corrected"], PURPLE, 10))
    out.append(box(350, 24, 310, 96, ["a plan", "a small group sets one policy for everyone;", "mistakes are large and stay,", "because admitting them undermines the planners"], INDIGO, 10))
    out.append(txt(20, 148, "The Nordic model is what social democrats settle for after they win. It is not what socialists promise.", 10.5, .78))
    return svg("who_decides", 160, "Who decides under a market and under a plan, and what happens to each one's mistakes", "\n".join(out))

FIGS = [fig_definitions, fig_nordic_facts, fig_price_signal, fig_price_counts, fig_death_toll, fig_two_koreas_two_germanys, fig_venezuela, fig_poverty_fall, fig_not_real_cycle, fig_distortions, fig_gender_gap_countries, fig_faculty_ratio, fig_platform_geography, fig_material_squeeze, fig_pay_gap, fig_what_they_want, fig_debt_arithmetic, fig_demands_vs_billionaires, fig_who_decides]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
