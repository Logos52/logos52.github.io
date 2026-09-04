#!/usr/bin/env python3
"""gen-gender-war-diagrams.py — figures for wiki/Worldviews & the Political Order/The Gen Z Gender War - The Split.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-gender-war-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "gender-war-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def fig_vote_2024():
    out = [cap(20, 14, "margin among voters under 30, 2024, in points")]
    X0, XC, X1 = 190, 415, 640   # 0 at XC; left = Democrat lead, right = Republican lead
    scale = (X1 - XC) / 40
    for t in (-40, -20, 0, 20, 40):
        x = XC + t * scale; out.append(line(x, 22, x, 150, FAINT)); out.append(txt(x, 164, ("D +%d" % -t) if t < 0 else ("R +%d" % t if t else "0"), 10, .6, anchor="middle"))
    rows = [("young women, national", -24, TEAL, "Young women under 30 backed the Democrat by 24 points"), ("young men, national", 16, INDIGO, "Young men under 30 backed the Republican by 16 points"),
            ("young women, North Carolina", -33, TEAL, "North Carolina: young women, Democrat by 33"), ("young men, North Carolina", 23, INDIGO, "North Carolina: young men, Republican by 23"), ("young men in 2020", -8, INDIGO, "In 2020 young men backed the Democrat by 8")]
    for i, (lab, v, col, title) in enumerate(rows):
        y = 28 + i * 24; x = XC + min(v, 0) * scale; w = abs(v) * scale
        out.append(txt(X0 - 8, y + 11, lab, 10.5, .78, anchor="end")); out.append(rect(x, y, w, 14, col, .9 if "2020" not in lab else .4, title=title))
        out.append(txt((XC + v * scale) + (6 if v > 0 else -6), y + 11, "%+d" % v if v > 0 else "%d" % v, 10.5, .9, anchor="start" if v > 0 else "end"))
    out.append(line(XC, 22, XC, 150, "rgba(130,130,130,.8)", 1.2))
    out.append(txt(20, 190, "The gap between young women and young men was 40 points nationally. Young men swung 24 points in one election.", 10.5, .78))
    out.append(swatch(20, 214, TEAL, "young women")); out.append(swatch(130, 214, INDIGO, "young men")); out.append(swatch(230, 214, INDIGO, "young men in 2020", .4))
    return svg("vote_2024", 226, "Margins among voters under 30 in 2024: women toward the Democrat, men toward the Republican", "\n".join(out))

def fig_europe_young():
    out = [cap(20, 14, "the young gender gap in politics, in points")]
    body, _ = hbars([("30 countries, 2000", 6, PURPLE, .4, "Across 30 countries in 2000 the gap was 6 points"), ("30 countries, 2025", 30, PURPLE, .9, "Across 30 countries in 2025 the gap is 30 points"), ("Germany, under 30", 30, PURPLE, .9, "Germany: 30 points"), ("Britain, under 30", 25, PURPLE, .9, "Britain: 25 points")], 170, 400, 24, vmax=40, fmt=lambda v: "%d points" % v)
    out.append(body)
    out.append(cap(430, 14, "the vote for the new right, under 25"))
    body, _ = hbars([("German men, AfD, 2025", 25, INDIGO, .9, "One in four German men aged 18 to 24 voted AfD in 2025"), ("British men, Reform, 2024", 12, INDIGO, .9, "12% of British men under 24 voted Reform in 2024"), ("British women, Reform, 2024", 6, TEAL, .9, "6% of British women under 24 voted Reform in 2024")], 560, 640, 24, vmax=30, fmt=lambda v: "%d%%" % v)
    out.append(body)
    return svg("europe_young", 156, "The young gender gap across 30 countries, Germany, and Britain, and young men's vote for AfD and Reform", "\n".join(out))

def fig_two_timelines():
    out = [MARKER, cap(20, 14, "the women's side, four waves")]
    xs = [20, 180, 340, 500]
    for x, lines in zip(xs, (["1848 to 1920", "the vote, property,", "citizenship"], ["1963 on", "a book on unhappy wives,", "equal pay, Title IX"], ["1990s", "race, sex, and class", "overlap"], ["2012 on, online", "2017: one tweet,", "12 million engagements"])):
        out.append(box(x, 22, 150, 58, lines, TEAL, 10))
        if x != xs[-1]: out.append(arrow(x + 150, 51, x + 160, 51))
    out.append(cap(20, 112, "the men's side"))
    for x, lines in zip(xs, (["1993", "a book on male", "disadvantage"], ["2008 and 2012", "two forums; one reached", "300,000 members"], ["the manosphere", "rights activists, men who", "swore off women, incels"], ["2020s", "a kickboxer with", "13.6 billion views"])):
        out.append(box(x, 120, 150, 58, lines, INDIGO, 10))
        if x != xs[-1]: out.append(arrow(x + 150, 149, x + 160, 149))
    return svg("two_timelines", 190, "Four waves on the women's side and the growth of the manosphere on the men's side", "\n".join(out))

def fig_influencer_reach():
    out = [cap(20, 14, "young men with a positive view of the kickboxer")]
    body, _ = hbars([("Britain, men 16 to 29", 20, INDIGO, .9, "One in five British men 16 to 29"), ("Australia, teenage boys, 2023", 28, INDIGO, .9, "28% of Australian teenage boys looked up to him"), ("United States, Gen Z men", 13, INDIGO, .9, "13% of American Gen Z men")], 200, 400, 24, vmax=50, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(430, 14, "the psychology professor")); body, _ = hbars([("Britain, Gen Z men", 42, INDIGO, .6, "42% of British Gen Z men view him positively")], 540, 620, 24, vmax=50, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 110, "The kickboxer had 13.6 billion TikTok views by 2022. The professor's 2018 book sold over 5 million copies.", 10.5, .78))
    return svg("influencer_reach", 122, "Share of young men with a positive view of the two best-known male influencers, by country", "\n".join(out))

def fig_college_share():
    out = [cap(20, 14, "who is in american college, out of every 100 students")]
    X0, X1 = 130, 400
    for i, (lab, m, w) in enumerate((("1970", 58, 42), ("2015", 40, 60))):
        y = 26 + i * 30; wm = (X1 - X0) * m / 100 - 2; ww = (X1 - X0) * w / 100
        out.append(txt(X0 - 8, y + 14, lab, 10.5, .78, anchor="end")); out.append(rect(X0, y, wm, 20, INDIGO, .9, title="%s: %d men" % (lab, m))); out.append(rect(X0 + wm + 2, y, ww - 2, 20, TEAL, .9, title="%s: %d women" % (lab, w)))
        out.append(txt(X0 + 8, y + 14, "%d men" % m, 10.5, .95)); out.append(txt(X1 - 6, y + 14, "%d women" % w, 10.5, .95, anchor="end"))
    out.append(cap(430, 14, "bachelor's degrees")); body, _ = hbars([("women", 100, TEAL, .9, "For every 100 women who earn a bachelor's degree"), ("men", 74, INDIGO, .9, "74 men earn one")], 480, 620, 26, vmax=100, fmt=lambda v: str(v))
    out.append(body)
    out.append(cap(20, 108, "finish a four-year degree on time")); body, _ = hbars([("women", 54, TEAL, .9, "54% of women finish on time"), ("men", 43, INDIGO, .9, "43% of men")], 130, 400, 118, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(430, 108, "ages 25 to 34 with a bachelor's")); body, _ = hbars([("women", 47, TEAL, .9, "47% of women aged 25 to 34"), ("men", 37, INDIGO, .9, "37% of men")], 480, 620, 118, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(swatch(20, 190, INDIGO, "men")); out.append(swatch(80, 190, TEAL, "women"))
    return svg("college_share", 200, "The college population flipped from 58% men in 1970 to 60% women by 2015, and women lead on degrees and on finishing", "\n".join(out))

def fig_boys_and_trades():
    out = [MARKER, cap(20, 14, "what falls harder on boys")]
    out.append(box(20, 22, 200, 56, ["verbal and executive skills", "12 to 18 months later than girls"], INDIGO))
    out.append(box(240, 22, 200, 56, ["ADHD diagnosed at", "twice the rate of girls"], INDIGO))
    out.append(box(460, 22, 200, 56, ["zero-tolerance discipline,", "less movement, sitting still"], INDIGO))
    out.append(cap(20, 110, "the other road"))
    body, _ = hbars([("electrician, plumber, HVAC technician, a year", 80, PURPLE, .9, "$50,000 to $80,000 a year without tuition debt")], 300, 560, 118, vmax=80, fmt=lambda v: "$50,000 to $80,000")
    out.append(body)
    out.append(txt(20, 160, "Vocational enrolment at community colleges is up nearly 20% since 2020.", 10.5, .78)); out.append(txt(20, 176, "42% of Gen Z adults were in or heading for blue-collar work in 2025.", 10.5, .78))
    return svg("boys_and_trades", 188, "Three things that fall harder on boys at school, and the pay of the trades many men choose instead", "\n".join(out))

def fig_app_asymmetry():
    out = [cap(40, 14, "of 100 male profiles, a woman engages with"), waffle(40, 24, 14, TEAL, "Women engage positively with about 14% of male profiles"), txt(40, 160, "about 14", 22, .9, weight=700)]
    out.append(cap(370, 14, "of 100 female profiles, a man engages with")); out.append(waffle(370, 24, 46, INDIGO, "Men engage positively with about 46% of female profiles")); out.append(txt(370, 160, "about 46", 22, .9, weight=700))
    out.append(txt(40, 186, "Tinder's paying users: 10.9 million at the 2021 peak, 9.2 million by late 2025.", 10.5, .78)); out.append(txt(40, 202, "79% of college students open an app less than once a month.", 10.5, .78))
    return svg("app_asymmetry", 214, "Women engage with about 14 of 100 male profiles and men with about 46 of 100 female profiles", "\n".join(out))

def fig_never_asked():
    out = [cap(20, 14, "share of men who did not date as teenagers")]
    body, _ = hbars([("Gen Z men", 44, INDIGO, .9, "44% of Gen Z men did not date as teenagers"), ("boomer men at the same age", 20, INDIGO, .4, "20% of boomer men")], 220, 620, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(20, 86, "gen z men who have never asked someone out in person")); body, _ = hbars([("Gen Z men", 44, INDIGO, .9, "44% have never asked someone out face to face")], 220, 620, 96, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 140, "Approval of the Republican president: 43% of Gen Z men, 24% of Gen Z women. A majority of Gen Z women list political fit in their top three.", 10.5, .78))
    return svg("never_asked", 152, "44% of Gen Z men did not date as teenagers against 20% of boomers, and 44% have never asked in person", "\n".join(out))

def fig_two_exits():
    out = [MARKER, cap(20, 14, "the women's exit")]
    out.append(box(20, 22, 300, 70, ["4B, South Korea, about 2015", "no dating men, no sex with men,", "no marriage, no childbirth"], TEAL))
    out.append(box(340, 22, 320, 70, ["United States, November 2024", "record searches within hours;", "one tweet, 17 million views that night"], TEAL))
    out.append(cap(20, 122, "the men's exits"))
    out.append(box(20, 130, 300, 70, ["men going their own way, from 2001", "no relationships, to avoid the risk", "of marriage and divorce; forum banned 2021"], INDIGO))
    out.append(box(340, 130, 320, 70, ["passport bros", "relocating to Thailand, Colombia,", "the Philippines, or Brazil for a partner"], INDIGO))
    return svg("two_exits", 212, "The women's exit, 4B, and the two men's exits, going their own way and relocating abroad", "\n".join(out))

def fig_obey():
    out = [cap(20, 14, "agree that a wife should obey her husband, 29 countries, 2025")]
    body, _ = hbars([("Gen Z men", 33, INDIGO, .9, "33% of Gen Z men"), ("Gen Z women", 18, TEAL, .9, "18% of Gen Z women"), ("boomer men", 13, INDIGO, .4, "13% of boomer men")], 150, 620, 24, vmax=50, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 112, "Young men sit well to the right of their grandfathers on this. The video ties it to men who cannot fill the breadwinner role idealising it more.", 10.5, .78))
    return svg("obey", 124, "33% of Gen Z men say a wife should obey her husband, against 18% of Gen Z women and 13% of boomer men", "\n".join(out))

def fig_marriage_fall():
    out = [slope(20, 14, 200, 110, "marriages per 1,000 americans", 10.6, 6.2, "1970", "2024", PURPLE, unit=""),
           slope(250, 14, 200, 110, "median age at first marriage, men", 23.2, 30.2, "1970", "2024", INDIGO, unit="", vmax=34)]
    out.append(cap(480, 14, "will ever marry")); body, _ = hbars([("boomers", 90, PURPLE, .4, "87% to 92% of boomers"), ("Gen Z", 57, PURPLE, .9, "56% to 58% of Gen Z, projected")], 540, 590, 30, vmax=100, fmt=lambda v: "56 to 58%" if v == 57 else "87 to 92%")
    out.append(body)
    out.append(txt(20, 160, "Single-person households reached 38.5 million in 2024, 29% of all households.", 10.5, .78))
    return svg("marriage_fall", 172, "Marriages per thousand fell from 10.6 to 6.2, first marriage moved past 30 for men, and barely half of Gen Z is expected to marry", "\n".join(out))

def fig_gen_z_money():
    out = [cap(20, 14, "average personal debt at the same age")]
    body, _ = hbars([("Gen Z", 94, PURPLE, .9, "Gen Z: about $94,000"), ("millennials", 59, PURPLE, .6, "millennials: about $59,000"), ("Gen X", 53, PURPLE, .4, "Gen X: about $53,000")], 130, 400, 24, vmax=100, fmt=lambda v: "$%d,000" % v)
    out.append(body)
    out.append(cap(430, 14, "the barrier to marriage")); body, _ = hbars([("housing costs", 55, PURPLE, .9, "55% name housing costs"), ("student debt", 64, PURPLE, .9, "64% name student debt")], 520, 640, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 110, "41% of Gen Z run out of money before the month ends. 22% call themselves financially stable. 7.6% hold a mortgage.", 10.5, .78))
    return svg("gen_z_money", 122, "Gen Z carries about $94,000 of debt each against $59,000 for millennials, and names housing and student debt as the barriers to marriage", "\n".join(out))

def fig_wage_gap():
    out = [cap(20, 14, "what women earn per dollar men earn")]
    body, _ = hbars([("all full-time workers", 85, TEAL, .9, "85 cents across all full-time workers"), ("workers aged 25 to 35", 95, TEAL, .9, "95 cents at ages 25 to 35"), ("same title, hours, experience, industry, education", 99, TEAL, .9, "about 99 cents in truly equivalent roles")], 330, 620, 24, vmax=100, fmt=lambda v: "%d cents" % v)
    out.append(body); out.append(line(620, 22, 620, 100, "rgba(130,130,130,.8)", 1.2)); out.append(txt(620, 114, "$1", 10, .6, anchor="middle"))
    return svg("wage_gap", 126, "The pay gap narrows from 85 cents to 99 cents as the comparison tightens", "\n".join(out))

def fig_breadwinner_divorce():
    out = [cap(20, 14, "divorces per 1,000 married couples, by who earns more")]
    body, _ = hbars([("she earns more", 31, TEAL, .9, "31 per 1,000 where the woman earns more"), ("he earns more", 11, INDIGO, .9, "11 per 1,000 where the man earns more"), ("she is the only earner", 54, TEAL, .9, "54 per 1,000 where the woman is the sole earner"), ("he is the only earner", 20, INDIGO, .9, "20 per 1,000 where the man is the sole earner")], 190, 620, 24, vmax=60, fmt=lambda v: str(v))
    out.append(body)
    out.append(txt(20, 138, "Female-breadwinner households are 16% of households and 42% of divorces. 45% of mothers were their family's main earner in 2023.", 10.5, .78))
    return svg("breadwinner_divorce", 150, "Divorce rates by which spouse earns more, per thousand couples", "\n".join(out))

def fig_feed_escalation():
    out = [slope(20, 14, 220, 110, "a test feed for a teenage boy", 13, 56, "day 1", "day 7", INDIGO, vmax=70)]
    out.append(cap(300, 14, "how fast, how much"))
    out.append(box(300, 24, 170, 50, ["about 15 minutes", "of ordinary browsing to reach", "manosphere content"], INDIGO, 10)); out.append(box(490, 24, 170, 50, ["61.5% of YouTube Shorts", "recommendations met the", "researchers' toxic bar"], INDIGO, 10))
    out.append(txt(300, 100, "The path starts with loneliness, lifting weights, and feeling overlooked.", 10.5, .78)); out.append(txt(300, 116, "Women's feeds got empowerment, body image, and men as threats.", 10.5, .78)); out.append(txt(300, 132, "Neither feed matched real people.", 10.5, .78))
    return svg("feed_escalation", 160, "A test feed for a teenage boy went from 13% to 56% misogynistic content in seven days", "\n".join(out))

def fig_distress_by_sex():
    out = [cap(20, 14, "persistent sadness, high school, 2023")]
    body, _ = hbars([("girls", 53, TEAL, .9, "53% of girls"), ("boys", 28, INDIGO, .9, "28% of boys")], 80, 300, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(340, 14, "suicides per 100,000")); body, _ = hbars([("men", 22.7, INDIGO, .9, "22.7 men per 100,000"), ("women", 5.9, TEAL, .9, "5.9 women per 100,000")], 400, 620, 24, vmax=25, fmt=lambda v: "%g" % v)
    out.append(body)
    out.append(cap(20, 86, "lonely, under 35")); body, _ = hbars([("men", 25, INDIGO, .9, "25% of men under 35"), ("women", 18, TEAL, .9, "18% of women under 35")], 80, 300, 96, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(slope(340, 86, 280, 70, "weekly hours with friends, young adults", 12.8, 5.1, "2012", "2024", PURPLE, unit="", vmax=15))
    return svg("distress_by_sex", 180, "Girls report more sadness, men die by suicide at nearly four times the rate, and time with friends has more than halved", "\n".join(out))

def fig_religion_shift():
    out = [slope(20, 14, 280, 110, "religiously unaffiliated, women 18 to 24", 29, 40, "2013", "2024", TEAL, vmax=50),
           slope(360, 14, 280, 110, "religiously unaffiliated, men 18 to 24", 35, 36, "2013", "2024", INDIGO, vmax=50)]
    out.append(txt(20, 160, "47% of Gen Z has attended no service in six months. 45% call themselves Christian, against 55% of millennials.", 10.5, .78))
    return svg("religion_shift", 172, "Young women left religion, from 29% to 40% unaffiliated, while young men barely moved", "\n".join(out))

def fig_three_futures():
    out = [MARKER, cap(20, 14, "three paths the video draws")]
    out.append(box(20, 24, 200, 120, ["the current path", "men under 38% of students by 2030,", "first marriage past 32 and 30,", "over 30% never marry,", "births toward Korea's 0.72"], INDIGO, 10))
    out.append(box(240, 24, 200, 120, ["convergence", "boys start school a year later,", "men into health, teaching, care,", "platform rules in Europe,", "both drifts moderate"], PURPLE, 10))
    out.append(box(460, 24, 200, 120, ["fragmentation", "parallel lives, little contact,", "AI companions, fewer births,", "a worker-to-retiree ratio", "that breaks the pension"], TEAL, 10))
    out.append(txt(20, 172, "Gen Z wants marriage at higher rates than millennials did at the same age. 55% name housing and 64% name student debt as the barrier.", 10.5, .78))
    return svg("three_futures", 184, "The three paths the video draws: the current path, convergence, and fragmentation", "\n".join(out))

FIGS = [fig_vote_2024, fig_europe_young, fig_two_timelines, fig_influencer_reach, fig_college_share, fig_boys_and_trades, fig_app_asymmetry, fig_never_asked, fig_two_exits, fig_obey, fig_marriage_fall, fig_gen_z_money, fig_wage_gap, fig_breadwinner_divorce, fig_feed_escalation, fig_distress_by_sex, fig_religion_shift, fig_three_futures]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
