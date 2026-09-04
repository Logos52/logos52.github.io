#!/usr/bin/env python3
"""gen-single-sex-spaces-diagrams.py — figures for wiki/Worldviews & the Political Order/Single-Sex Spaces - The Asymmetry.md.
Every number drawn is a number the page states. usage: python3 scripts/gen-single-sex-spaces-diagrams.py [--inject PAGE]"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import diagramlib as d
from diagramlib import *
d.OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "single-sex-spaces-diagrams"); os.makedirs(d.OUT, exist_ok=True)

def fig_lodge_scale():
    out = [cap(20, 14, "american men in fraternal orders, millions")]
    body, _ = hbars([("1897, all orders", 5.4, INDIGO, .9, "5.4 million men, about one in five adults"), ("1950s, Freemasons alone", 4, INDIGO, .9, "About 4 million Freemasons at the peak"), ("1990, all orders", 6, INDIGO, .9, "Over 6 million members across 568 orders")], 190, 560, 24, vmax=7, fmt=lambda v: "%g million" % v)
    out.append(body)
    out.append(txt(20, 112, "The orders paid rent, funerals, and widows' stipends before Social Security in 1935 and Medicare in 1965.", 10.5, .78))
    return svg("lodge_scale", 124, "Millions of American men in fraternal orders in 1897, the 1950s, and 1990", "\n".join(out))

def fig_friends_collapse():
    out = [slope(20, 14, 280, 110, "men with six or more close friends", 55, 27, "1990", "2021", INDIGO, vmax=65),
           slope(360, 14, 280, 110, "men with no close friends", 3, 15, "1990", "2021", INDIGO, vmax=20)]
    out.append(txt(20, 160, "A 2021 survey repeated the 1990 wording.", 10.5, .78)); out.append(txt(20, 176, "A 2023 survey with different wording found about 9% of men and 8% of women with no close friends.", 10.5, .78))
    return svg("friends_collapse", 188, "Men with six or more close friends fell from 55% to 27%, and men with none rose from 3% to 15%", "\n".join(out))

def fig_court_timeline():
    out = [MARKER, cap(20, 14, "how the men-only club was opened, one ruling at a time")]
    steps = [("1984, 7 to 0", "the Jaycees: too big and", "commercial to choose members"), ("1987, 7 to 0", "Rotary, 900,000 members:", "men-only rule falls"), ("1988", "New York clubs over 400", "members: admit women"), ("1990", "Princeton eating clubs,", "after eleven years"), ("1996, 7 to 1", "last all-male public", "college: admit women")]
    for i, lines in enumerate(steps):
        x = 20 + i * 132
        out.append(box(x, 24, 124, 64, list(lines), INDIGO, 9))
        if i < 4: out.append(arrow(x + 124, 56, x + 132, 56))
    out.append(txt(20, 116, "Then Yale's senior society admitted women in 1992, Augusta National admitted two women in 2012,", 10.5, .78)); out.append(txt(20, 132, "and the Boy Scouts admitted girls in 2018 and 2019.", 10.5, .78))
    return svg("court_timeline", 144, "Five rulings from 1984 to 1996 that opened the men-only club", "\n".join(out))

def fig_scouts_fall():
    out = [cap(20, 14, "boy scouts membership, millions")]
    body, _ = hbars([("1972, the peak", 6, INDIGO, .9, "About 6 million members in 1972"), ("today", 1, INDIGO, .9, "About 1 million members")], 130, 560, 24, vmax=7, fmt=lambda v: "about %d million" % v)
    out.append(body)
    out.append(txt(20, 86, "Girls admitted in 2018 and 2019. The organisation renamed itself in 2024 and left bankruptcy with a $2.46 billion settlement.", 10.5, .78)); out.append(txt(20, 102, "The Girl Scouts stayed girls-only.", 10.5, .78))
    return svg("scouts_fall", 114, "Boy Scouts membership fell from about 6 million in 1972 to about 1 million", "\n".join(out))

def fig_colleges_left():
    out = [cap(20, 14, "single-sex colleges in the united states")]
    body, _ = hbars([("women's colleges, 1960", 250, TEAL, .5, "More than 250 women's colleges in 1960"), ("women's colleges, still women-only", 30, TEAL, .9, "About 30 remain women-only"), ("men's colleges, still men-only, 2026", 3, INDIGO, .9, "Three four-year colleges remain all-male")], 260, 620, 24, vmax=260, fmt=lambda v: ("more than %d" % v) if v == 250 else ("about %d" % v if v == 30 else "3"))
    out.append(body)
    out.append(txt(20, 112, "Title IX exempts institutions that have always been single-sex, which is what keeps the women's colleges legal.", 10.5, .78))
    return svg("colleges_left", 124, "More than 250 women's colleges in 1960, about 30 today, and three men's colleges", "\n".join(out))

def fig_wing_vs_chief():
    out = [cap(20, 14, "two women-only clubs")]
    out.append(box(20, 24, 310, 100, ["the coworking club, 2016 to 2022", "$75 million raised, valued at $200 to $400 million", "12,000 members, 35,000 waiting", "a 2018 complaint ended women-only;", "closed August 2022"], TEAL, 10))
    out.append(box(350, 24, 310, 100, ["the executive club, 2019 on", "$140 million raised, valued at $1.1 billion", "20,000 members, 60,000 waiting", "$5,800 to $8,900 a year;", "no complaint, no male equivalent"], TEAL, 10))
    out.append(txt(20, 150, "The complaint against the first used the same city law that had opened the New York Athletic Club in 1988.", 10.5, .78))
    return svg("wing_vs_chief", 162, "The coworking club that lost its women-only rule and the executive club valued at $1.1 billion that kept it", "\n".join(out))

def fig_gyms():
    out = [cap(20, 14, "the women-only gym chain, locations")]
    body, _ = hbars([("worldwide, 2006 peak", 10000, TEAL, .9, "Over 10,000 locations worldwide in October 2006"), ("United States, 2006", 7848, TEAL, .9, "7,848 in the United States"), ("United States, 2019", 367, TEAL, .9, "About 367 American franchises by 2019")], 180, 560, 24, vmax=11000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(txt(20, 112, "Still legal under state carve-outs in Massachusetts, New York, and Connecticut. No state permits a male-only gym chain.", 10.5, .78))
    return svg("gyms", 124, "The women-only gym chain's locations at its 2006 peak and in 2019", "\n".join(out))

def fig_three_rationales():
    out = [MARKER, cap(20, 14, "why a women-only space stays legal")]
    out.append(box(20, 24, 200, 70, ["privacy", "locker rooms, fitting rooms,", "restrooms, shelters"], TEAL, 10))
    out.append(box(240, 24, 200, 70, ["safety", "women are 70% to 80% of", "intimate-partner violence victims"], TEAL, 10))
    out.append(box(460, 24, 200, 70, ["religion", "Muslim and Orthodox Jewish women", "who cannot exercise in mixed company"], TEAL, 10))
    out.append(cap(20, 124, "what sits outside all three"))
    out.append(box(20, 132, 310, 56, ["a $1.1 billion club for vice presidents", "is not a shelter"], INDIGO, 10)); out.append(box(350, 132, 310, 56, ["a coworking space in the Flatiron", "does not protect religious observance"], INDIGO, 10))
    return svg("three_rationales", 200, "The three reasons a women-only space stays legal, and two spaces that fit none of them", "\n".join(out))

def fig_degrees_and_teachers():
    out = [slope(20, 14, 200, 100, "men's share of bachelor's degrees", 57, 42, "1970", "2021", INDIGO, vmax=70),
           slope(250, 14, 200, 100, "men's share of school teachers", 30, 23, "1988", "2021", INDIGO, vmax=40)]
    out.append(cap(480, 14, "held back in kindergarten")); body, _ = hbars([("girls", 100, TEAL, .9, "For every 100 girls held back"), ("boys", 145, INDIGO, .9, "145 boys are held back")], 520, 640, 30, vmax=150, fmt=lambda v: str(v))
    out.append(body)
    out.append(txt(20, 150, "Men are about 11% of elementary teachers and under 3% in kindergarten. Boys sit about a grade behind girls in reading.", 10.5, .78))
    return svg("degrees_and_teachers", 162, "Men's share of degrees and of teachers fell, and 145 boys are held back in kindergarten for every 100 girls", "\n".join(out))

def fig_labor_force():
    out = [slope(20, 14, 280, 110, "men 25 to 54 working or looking for work", 98, 89, "1954", "2024", INDIGO, vmax=100)]
    out.append(cap(360, 14, "prime-age men outside the labour force")); body, _ = hbars([("1960", 1 / 35 * 100, INDIGO, .5, "One in 35 in 1960"), ("2023", 1 / 9 * 100, INDIGO, .9, "One in nine in 2023, about 6.9 million men")], 420, 620, 24, vmax=12, fmt=lambda v: "1 in 35" if v < 5 else "1 in 9")
    out.append(body)
    out.append(txt(360, 90, "About 6.9 million men in 2023, 81% to 87% of them", 10.5, .78)); out.append(txt(360, 106, "without a bachelor's degree.", 10.5, .78))
    return svg("labor_force", 160, "Prime-age male participation fell from 98% to 89%, and one in nine prime-age men is outside the labour force", "\n".join(out))

def fig_wages_and_overdose():
    out = [slope(20, 14, 200, 100, "median male wage, 1979 dollars", 19.53, 18.03, "1979", "2012", INDIGO, unit="", vmax=22),
           slope(250, 14, 200, 100, "manufacturing jobs, millions", 19.6, 11.5, "1979", "2010", PURPLE, unit="", vmax=22)]
    out.append(cap(480, 14, "overdoses per 100,000, 2024")); body, _ = hbars([("men", 32.2, INDIGO, .9, "32.2 men per 100,000"), ("women", 14.1, TEAL, .9, "14.1 women per 100,000")], 530, 640, 30, vmax=35, fmt=lambda v: "%g" % v)
    out.append(body)
    out.append(txt(20, 150, "The male wage fell 7.6% while productivity rose nearly 70%. Nearly half of prime-age men outside the labour force took pain medication daily.", 10.5, .78))
    return svg("wages_and_overdose", 162, "The median male wage fell, manufacturing jobs fell by 8 million, and men die of overdoses at more than twice the female rate", "\n".join(out))

def fig_single_and_marriage():
    out = [cap(20, 14, "single, ages 18 to 29, 2022")]
    body, _ = hbars([("men", 63, INDIGO, .9, "63% of men 18 to 29 were single"), ("women", 34, TEAL, .9, "34% of women 18 to 29 were single")], 80, 300, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(slope(340, 14, 300, 96, "working-class men under 40 never married", 25, 50, "1980", "2018", INDIGO, vmax=60))
    out.append(cap(20, 96, "single people looking for a relationship or dates")); body, _ = hbars([("men, 2019", 61, INDIGO, .5, "61% of single men in 2019"), ("men, 2022", 50, INDIGO, .9, "50% in 2022"), ("women, 2019", 38, TEAL, .5, "38% of single women in 2019"), ("women, 2022", 35, TEAL, .9, "35% in 2022")], 110, 300, 106, gap=22, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(340, 150, "Median first marriage: 23.2 for men and 20.8 for women in 1970,", 10.5, .78)); out.append(txt(340, 166, "30.5 and 28.6 in 2024.", 10.5, .78))
    return svg("single_and_marriage", 206, "63% of young men are single against 34% of young women, and half of working-class men under 40 have never married", "\n".join(out))

def fig_support_and_suicide():
    out = [cap(20, 14, "spouse is the main emotional support, 2025")]
    body, _ = hbars([("men", 85, INDIGO, .9, "85% of men"), ("women", 72, TEAL, .9, "72% of women")], 80, 300, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(340, 14, "american men, 2023 survey")); body, _ = hbars([("thought of suicide in the past two weeks", 44, INDIGO, .9, "44% of men"), ("aged 18 to 23: nobody really knows me", 65, INDIGO, .9, "65% of men aged 18 to 23")], 560, 640, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 96, "Almost 39,000 American men killed themselves in 2023, one every 14 minutes. Almost 80% of American suicides are male.", 10.5, .78))
    return svg("support_and_suicide", 108, "85% of men rely on a spouse for emotional support, and 44% reported thoughts of suicide in a two-week window", "\n".join(out))

def fig_korea_vote():
    out = [cap(20, 14, "south korea, 2022 presidential vote for the winner")]
    body, _ = hbars([("men 18 to 29", 59, INDIGO, .9, "59% of men aged 18 to 29"), ("women 18 to 29", 34, TEAL, .9, "34% of women aged 18 to 29")], 130, 320, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(cap(360, 14, "united states, 2024, ages 18 to 29")); body, _ = hbars([("men, Republican", 56, INDIGO, .9, "About 56% to 57% of young men"), ("women, Democrat", 60, TEAL, .9, "About 60% of young women")], 480, 640, 24, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 96, "66% of Korean men in their twenties could not accept a feminist as a neighbour or friend in 2021.", 10.5, .78)); out.append(txt(20, 112, "Korea's births per woman: 0.72 to 0.74 in 2024.", 10.5, .78))
    return svg("korea_vote", 124, "Young men and women split 59 to 34 in Korea's 2022 election and about 56 to 60 the other way in America's 2024 election", "\n".join(out))

def fig_two_responses():
    out = [MARKER, cap(20, 14, "two visible male responses")]
    out.append(box(20, 24, 310, 84, ["the manosphere", "podcasts, channels, servers, forums", "that name the grievance head on;", "some of it holds, some distorts, some is false"], INDIGO, 10))
    out.append(box(350, 24, 310, 84, ["the performative male", "a feminist slogan on the tote bag,", "a visible feminist book,", "read as a mating strategy"], INDIGO, 10))
    out.append(txt(20, 134, "The majority of men in the middle are neither, and they stop participating.", 10.5, .78))
    return svg("two_responses", 146, "The two visible male responses, the manosphere and the performative male", "\n".join(out))

def fig_rebuild_scale():
    out = [cap(20, 14, "the rebuilds against the old scale")]
    body, _ = hbars([("Freemasons, 1950s", 4000000, INDIGO, .4, "About 4 million Freemasons"), ("dawn-workout network, 2024", 50000, INDIGO, .9, "Over 50,000 participants at 3,500 sites"), ("men's sheds worldwide, 2026, sheds", 3000, INDIGO, .9, "About 3,000 sheds across 12 countries")], 260, 620, 24, vmax=4000000, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(txt(20, 112, "Sheds: more than 1,200 in Australia and over 450 in Ireland. Regulars score lower on loneliness and depression.", 10.5, .78))
    return svg("rebuild_scale", 124, "The men's sheds and the dawn-workout network against the four million Freemasons of the 1950s", "\n".join(out))

def fig_three_projections():
    out = [MARKER, cap(20, 14, "three paths the video draws")]
    out.append(box(20, 24, 200, 110, ["pessimistic", "suspicion of men's groups stays,", "grievance turns to resentment,", "dating fractures, births fall,", "deaths of despair hold or rise"], INDIGO, 10))
    out.append(box(240, 24, 200, 110, ["optimistic", "boys start school later,", "male teachers, sheds funded,", "tax credit for non-college men,", "loneliness as a health crisis"], PURPLE, 10))
    out.append(box(460, 24, 200, 110, ["realistic", "men's status clubs keep shrinking,", "women's spaces keep protection,", "men's spaces survive as health,", "faith, service, sport, or craft"], TEAL, 10))
    out.append(txt(20, 162, "In 2025 California's governor signed an executive order on boys' and men's mental health and schooling.", 10.5, .78))
    return svg("three_projections", 174, "The pessimistic, optimistic, and realistic paths the video draws", "\n".join(out))

def fig_alone_time():
    out = [slope(20, 14, 200, 100, "minutes a day alone", 285, 333, "2003", "now", PURPLE, unit="", vmax=380),
           slope(250, 14, 200, 100, "minutes a day with friends", 60, 20, "2003", "now", PURPLE, unit="", vmax=70),
           slope(490, 14, 170, 100, "one-person households", 13, 29, "1960", "2022", PURPLE, vmax=35)]
    out.append(txt(20, 150, "Loneliness carries about the mortality risk of 15 cigarettes a day. Its cost is put above $406 billion a year.", 10.5, .78))
    return svg("alone_time", 162, "Minutes alone rose, minutes with friends fell by two-thirds, and single-person households more than doubled", "\n".join(out))

FIGS = [fig_lodge_scale, fig_friends_collapse, fig_court_timeline, fig_scouts_fall, fig_colleges_left, fig_wing_vs_chief, fig_gyms, fig_three_rationales, fig_degrees_and_teachers, fig_labor_force, fig_wages_and_overdose, fig_single_and_marriage, fig_support_and_suicide, fig_korea_vote, fig_two_responses, fig_rebuild_scale, fig_three_projections, fig_alone_time]
if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", d.OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1], d.OUT)
