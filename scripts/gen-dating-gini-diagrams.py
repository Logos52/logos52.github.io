#!/usr/bin/env python3
"""gen-dating-gini-diagrams.py — draws every figure on wiki/Concepts/Dating Apps - The Gini Coefficient.md.

Every number drawn here is a number the page states. The Lorenz curves are computed from a
one-parameter curve that has exactly the stated Gini, so the shapes are real for that Gini
rather than sketches. The survivorship figure computes the Gini of a ten-man toy list before
and after the men with zero likes leave.

usage:
    python3 scripts/gen-dating-gini-diagrams.py
    python3 scripts/gen-dating-gini-diagrams.py --inject "wiki/Concepts/Dating Apps - The Gini Coefficient.md"

Files are written to assets/dating-gini-diagrams/. The page marks each slot as
<!-- diagram:NAME --> ... <!-- /diagram --> and --inject replaces what sits between the markers.

Colour: teal = women, indigo = men, purple = a company, a product, or a place, gray = context.
The teal/indigo pair and each single-series chart were run through the dataviz palette
validator in light and dark mode (2026-09-05). Text always wears currentColor.
"""
import math, os, re, sys

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "assets", "dating-gini-diagrams")
os.makedirs(OUT, exist_ok=True)

TEAL, INDIGO, PURPLE = "#2f9e8f", "#5b6cb0", "#8156a6"
RGB = {TEAL: "47,158,143", INDIGO: "91,108,176", PURPLE: "129,86,166"}
GRAY = "rgba(130,130,130,.55)"
GRID = "rgba(130,130,130,.35)"
FAINT = "rgba(130,130,130,.18)"
W = 680

# ---------- primitives ----------
def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def txt(x, y, s, size=10.5, op=.78, anchor="start", weight=None, ls=None):
    extra = ""
    if weight: extra += ' font-weight="%s"' % weight
    if ls: extra += ' letter-spacing="%s"' % ls
    return '<text x="%s" y="%s" font-size="%s" fill="currentColor" opacity="%s" text-anchor="%s"%s>%s</text>' % (
        x, y, size, op, anchor, extra, esc(s))

def cap(x, y, s):            # small-caps section label
    return txt(x, y, s.upper(), 9.5, .45, weight=700, ls=".09em")

def rect(x, y, w, h, color, op=1.0, rx=3, title=None):
    fill = color if color.startswith("rgba") else "rgba(%s,%s)" % (RGB[color], op)
    r = '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%s" fill="%s"/>' % (x, y, max(w, 0), max(h, 0), rx, fill)
    if title:
        return '<g><title>%s</title>%s</g>' % (esc(title), r)
    return r

def line(x1, y1, x2, y2, color=GRID, w=1, extra=""):
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="%s"%s/>' % (x1, y1, x2, y2, color, w, extra)

def path(d, color, w=2, op=1.0, fill="none"):
    return '<path d="%s" fill="%s" stroke="%s" stroke-width="%s" stroke-opacity="%s" stroke-linejoin="round" stroke-linecap="round"/>' % (d, fill, color, w, op)

def swatch(x, y, color, label, op=1.0):
    return rect(x, y - 8, 10, 10, color, op, rx=2) + txt(x + 15, y, label, 10.5, .78)

def svg(name, h, label, body):
    s = ('<svg viewBox="0 0 %d %d" width="%d" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="%s" '
         'style="max-width:100%%;height:auto">\n<title>%s</title>\n%s\n</svg>\n') % (W, h, W, esc(label), esc(label), body)
    open(os.path.join(OUT, name + ".svg"), "w").write(s)
    return s

def gini(xs):
    xs = sorted(xs); n = len(xs); s = sum(xs)
    if s == 0: return 0.0
    return (2 * sum((i + 1) * x for i, x in enumerate(xs))) / (n * s) - (n + 1) / n

def hbars(rows, x0, x1, y0, gap=26, bar=14, vmax=None, fmt=lambda v: str(v), label_w=150):
    """rows: list of (label, value, color, opacity, title). Returns (body, y_end)."""
    vmax = vmax or max(r[1] for r in rows)
    out = []
    for i, (lab, v, col, op, title) in enumerate(rows):
        y = y0 + i * gap
        w = (x1 - x0) * v / vmax
        out.append(txt(x0 - 8, y + bar - 3, lab, 10.5, .78, anchor="end"))
        out.append(rect(x0, y, w, bar, col, op, title=title))
        out.append(txt(x0 + w + 6, y + bar - 3, fmt(v), 10.5, .9))
    return "\n".join(out), y0 + len(rows) * gap

def waffle(x0, y0, filled, color, title, cell=9, gap=3, cols=10):
    out = []
    for i in range(100):
        r, c = divmod(i, cols)
        x = x0 + c * (cell + gap); y = y0 + (9 - r) * (cell + gap)   # fill from the bottom up
        on = i < filled
        out.append('<rect x="%d" y="%d" width="%d" height="%d" rx="2" fill="%s"/>' % (
            x, y, cell, cell, ("rgba(%s,.95)" % RGB[color]) if on else FAINT))
    return '<g><title>%s</title>%s</g>' % (esc(title), "".join(out))

def box(x, y, w, h, text_lines, color=None, size=10.5):
    fill = ("rgba(%s,.10)" % RGB[color]) if color else FAINT
    stroke = color if color else GRID
    out = ['<rect x="%d" y="%d" width="%d" height="%d" rx="6" fill="%s" stroke="%s" stroke-opacity=".55"/>' % (x, y, w, h, fill, stroke)]
    n = len(text_lines); lh = size + 4
    ty = y + h / 2 - (n - 1) * lh / 2 + size / 3
    for i, t in enumerate(text_lines):
        out.append(txt(x + w / 2, ty + i * lh, t, size, .85, anchor="middle"))
    return "\n".join(out)

def arrow(x1, y1, x2, y2):
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="rgba(130,130,130,.6)" stroke-width="1.2" marker-end="url(#ar)"/>' % (x1, y1, x2, y2)

MARKER = ('<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" '
          'orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>')

# ---------- figures ----------
def fig_gini_lorenz():
    X0, X1, Y0, Y1 = 60, 400, 24, 300
    def px(x): return X0 + (X1 - X0) * x
    def py(y): return Y1 - (Y1 - Y0) * y
    out = [cap(X0, 14, "share of the likes, counted from the man with the fewest up")]
    for t in (0, .25, .5, .75, 1):
        out.append(line(px(t), Y0, px(t), Y1, FAINT)); out.append(line(X0, py(t), X1, py(t), FAINT))
        out.append(txt(px(t), Y1 + 16, "%d%%" % (t * 100), 10, .6, anchor="middle"))
        out.append(txt(X0 - 6, py(t) + 4, "%d%%" % (t * 100), 10, .6, anchor="end"))
    out.append(txt((X0 + X1) / 2, Y1 + 34, "share of the men, poorest in likes on the left", 10.5, .78, anchor="middle"))
    out.append('<text x="18" y="%d" font-size="10.5" fill="currentColor" opacity=".78" transform="rotate(-90 18 %d)" text-anchor="middle">share of all likes</text>' % ((Y0 + Y1) / 2, (Y0 + Y1) / 2))
    out.append(line(px(0), py(0), px(1), py(1), GRAY, 1.5))
    def curve(G, color, op, w):
        k = (1 + G) / (1 - G)
        pts = [(px(i / 100), py((i / 100) ** k)) for i in range(101)]
        return path("M" + " L".join("%.1f,%.1f" % p for p in pts), color, w, op)
    # shaded gap between equal share and the men's Hinge curve
    k = (1 + .542) / (1 - .542)
    up = " L".join("%.1f,%.1f" % (px(i / 100), py(i / 100)) for i in range(101))
    down = " L".join("%.1f,%.1f" % (px(i / 100), py((i / 100) ** k)) for i in range(100, -1, -1))
    out.append('<path d="M%s L%s Z" fill="rgba(%s,.10)" stroke="none"/>' % (up, down, RGB[INDIGO]))
    out.append(curve(.376, TEAL, 1, 2)); out.append(curve(.542, INDIGO, 1, 2)); out.append(curve(.58, INDIGO, .45, 2))
    lx = 430
    out.append(cap(lx, 40, "the lines"))
    out.append(line(lx, 56, lx + 22, 56, GRAY, 1.5)); out.append(txt(lx + 28, 60, "everyone gets the same: Gini 0", 10.5))
    out.append(line(lx, 80, lx + 22, 80, TEAL, 2)); out.append(txt(lx + 28, 84, "women on Hinge, likes from men: 0.376", 10.5))
    out.append(line(lx, 104, lx + 22, 104, INDIGO, 2)); out.append(txt(lx + 28, 108, "men on Hinge, likes from women: 0.542", 10.5))
    out.append(line(lx, 128, lx + 22, 128, INDIGO, 2, ' stroke-opacity=".45"')); out.append(txt(lx + 28, 132, "men on Tinder: 0.58", 10.5))
    out.append(rect(lx, 146, 22, 12, INDIGO, .10, rx=2)); out.append(txt(lx + 28, 156, "the shaded gap is the Gini:", 10.5))
    out.append(txt(lx + 28, 172, "the bigger the gap, the more", 10.5)); out.append(txt(lx + 28, 188, "the likes sit with a few men", 10.5))
    out.append(txt(lx, 220, "Read the indigo line at 50% of men:", 10.5, .6)); out.append(txt(lx, 236, "the poorer half holds about 10% of the likes.", 10.5, .6))
    out.append(txt(lx, 262, "Each line is the curve that has exactly", 10.5, .6)); out.append(txt(lx, 278, "that Gini; the page's real split is in", 10.5, .6)); out.append(txt(lx, 294, "the next figure.", 10.5, .6))
    return svg("gini_lorenz", 345, "Curves of the share of likes against the share of men for Gini 0, 0.376, 0.542, and 0.58", "\n".join(out))

def fig_gini_scale():
    rows = [("Denmark, income", .28, "gray", 1, "Denmark's income Gini: about 0.28"),
            ("women on Hinge, likes from men", .376, TEAL, .9, "Women on Hinge: 0.376"),
            ("United States, income", .41, "gray", 1, "United States income Gini: about 0.41"),
            ("men on Hinge, likes from women", .542, INDIGO, .9, "Men on Hinge: 0.542"),
            ("men on Tinder, likes from women", .58, INDIGO, .9, "Men on Tinder: 0.58"),
            ("South Africa, income", .63, "gray", 1, "South Africa's income Gini: about 0.63")]
    rows = [(l, v, (GRAY if c == "gray" else c), o, t) for l, v, c, o, t in rows]
    X0, X1 = 230, 640
    out = [cap(X0, 14, "gini, 0 = everyone the same, 1 = one person has everything")]
    for t in (0, .25, .5, .75, 1):
        x = X0 + (X1 - X0) * t
        out.append(line(x, 22, x, 190, FAINT)); out.append(txt(x, 204, "%.2f" % t, 10, .6, anchor="middle"))
    body, y = hbars(rows, X0, X1, 28, vmax=1, fmt=lambda v: "%.3f" % v if v not in (.28, .41, .63, .58) else "%.2f" % v)
    out.append(body)
    out.append(swatch(230, 232, TEAL, "women on an app")); out.append(swatch(370, 232, INDIGO, "men on an app")); out.append(rect(500, 224, 10, 10, GRAY, rx=2) + txt(515, 232, "a country's income", 10.5, .78))
    return svg("gini_scale", 246, "Gini values of three countries' incomes and of likes received on Hinge and Tinder", "\n".join(out))

def fig_likes_split():
    X0, X1 = 150, 640
    def stacked(y, label, segs, title_prefix):
        out = [txt(X0 - 8, y + 15, label, 10.5, .78, anchor="end")]
        x = X0
        for name, v, op in segs:
            w = (X1 - X0) * v / 100 - 2
            out.append(rect(x, y, w, 22, INDIGO, op, rx=3, title="%s: %s, %d%%" % (title_prefix, name, v)))
            if w > 44: out.append(txt(x + w / 2, y + 15, "%d%%" % v, 10.5, .95, anchor="middle"))
            x += (X1 - X0) * v / 100
        return "\n".join(out)
    out = [cap(X0, 14, "the men, by how many likes they get")]
    out.append(stacked(22, "100 men", [("top 1% of men", 1, .95), ("next 14%", 14, .7), ("next 35%", 35, .45), ("bottom half", 50, .2)], "men"))
    out.append(cap(X0, 70, "the likes women send"))
    out.append(stacked(78, "100 likes", [("to the top 1% of men", 16, .95), ("to the next 14%", 34, .7), ("to the next 35%", 50, .45), ("to the bottom half", 0, .2)], "likes"))
    out.append(txt(X0, 124, "The top 1% of men, one bar so thin it is a sliver on the top row, takes 16 of every 100 likes.", 10.5, .78))
    out.append(txt(X0, 140, "The top 15% together take 50. The bottom half of men gets almost nothing, so it has no bar on the second row.", 10.5, .78))
    out.append(swatch(X0, 166, INDIGO, "top 1%", .95)); out.append(swatch(X0 + 80, 166, INDIGO, "next 14%", .7)); out.append(swatch(X0 + 170, 166, INDIGO, "next 35%", .45)); out.append(swatch(X0 + 260, 166, INDIGO, "bottom half", .2))
    return svg("likes_split", 180, "One hundred men against the one hundred likes women send them: the top 15% of men take half", "\n".join(out))

def fig_swipe_rates():
    out = [cap(40, 14, "of 100 men a woman is shown, she likes"), waffle(40, 24, 5, TEAL, "A woman likes fewer than 5 of every 100 men she is shown")]
    out.append(txt(40, 160, "fewer than 5", 22, .9, weight=700)); out.append(txt(40, 178, "the other 95 get a left swipe", 10.5, .6))
    out.append(cap(370, 14, "of 100 women a man is shown, he likes")); out.append(waffle(370, 24, 62, INDIGO, "A man likes 62 of every 100 women he is shown"))
    out.append(txt(370, 160, "62", 22, .9, weight=700)); out.append(txt(370, 178, "the other 38 get a left swipe", 10.5, .6))
    return svg("swipe_rates", 190, "Two grids of one hundred: a woman likes under 5 of 100 men, a man likes 62 of 100 women", "\n".join(out))

def fig_swipe_volume():
    out = [cap(20, 14, "right swipes over a whole time on Tinder")]
    body, _ = hbars([("men", 15609, INDIGO, .9, "Average man: 15,609 right swipes"), ("women", 2283, TEAL, .9, "Average woman: 2,283 right swipes")],
                    80, 320, 24, fmt=lambda v: "{:,}".format(v))
    out.append(body)
    out.append(cap(370, 14, "matches a month on Tinder"))
    body, _ = hbars([("men", 33, INDIGO, .9, "Average man: 33 matches a month"), ("women", 81, TEAL, .9, "Average woman: 81 matches a month")],
                    430, 640, 24, fmt=lambda v: str(v))
    out.append(body)
    out.append(txt(20, 96, "The man swipes right seven times as often and ends up with less than half the matches.", 10.5, .78))
    out.append(swatch(20, 118, INDIGO, "men")); out.append(swatch(90, 118, TEAL, "women"))
    return svg("swipe_volume", 130, "Right swipes and matches per month for the average man and the average woman on Tinder", "\n".join(out))

def fig_ratio():
    rows = [("Tinder", 78, 22), ("Hinge", 65, 35), ("Bumble", 62.5, 37.5), ("some European markets", 90, 10)]
    X0, X1 = 190, 640
    out = [cap(X0, 14, "who is on the app, out of every 100 users")]
    for i, (lab, m, w) in enumerate(rows):
        y = 24 + i * 30
        wm = (X1 - X0) * m / 100 - 2; ww = (X1 - X0) * w / 100
        out.append(txt(X0 - 8, y + 14, lab, 10.5, .78, anchor="end"))
        out.append(rect(X0, y, wm, 20, INDIGO, .9, title="%s: %s men in 100" % (lab, m)))
        out.append(rect(X0 + wm + 2, y, ww - 2, 20, TEAL, .9, title="%s: %s women in 100" % (lab, w)))
        out.append(txt(X0 + 8, y + 14, "%s men" % (("%g" % m)), 10.5, .95))
        out.append(txt(X1 - 6, y + 14, "%s women" % (("%g" % w)), 10.5, .95, anchor="end") if w >= 20 else txt(X0 + wm + 2 + (ww - 2) / 2, y + 14, "%g" % w, 10.5, .95, anchor="middle"))
    out.append(txt(X0, 154, "Across the big apps for men and women, about two men for every woman.", 10.5, .78))
    out.append(swatch(X0, 178, INDIGO, "men")); out.append(swatch(X0 + 70, 178, TEAL, "women"))
    return svg("ratio", 190, "Men and women out of every hundred users on Tinder, Hinge, Bumble, and some European markets", "\n".join(out))

def fig_two_problems():
    out = [MARKER]
    out.append(box(20, 30, 250, 70, ["half as many women as men", "every man's average is halved", "before anyone swipes"], TEAL))
    out.append(box(20, 130, 250, 70, ["the likes women send", "land on a few men", "this is what the 0.542 measures"], INDIGO))
    out.append(arrow(270, 65, 380, 108)); out.append(arrow(270, 165, 380, 122))
    out.append(box(385, 80, 270, 70, ["0.87% chance of a match", "per right swipe for the average man", "fewer than 1 in 100"], PURPLE, 11))
    out.append(txt(20, 228, "The Gini describes only the second box. Fix the first box alone and the average man's matches double while the Gini stays where it is.", 10.5, .78))
    return svg("two_problems", 240, "Two separate problems, the shortage of women and the concentration of likes, combine into a 0.87% match chance per swipe", "\n".join(out))

def fig_ratings_vs_messages():
    out = [cap(20, 14, "how women rated men, 2009")]
    body, _ = hbars([("below average", 80, TEAL, .9, "Women rated 80% of men below average"), ("average or above", 20, TEAL, .5, "20% of men rated average or above")], 130, 300, 24, gap=28, fmt=lambda v: "%d%%" % v)
    out.append(body)
    out.append(txt(20, 96, "Half of any group sits below its own middle,", 10.5, .6)); out.append(txt(20, 110, "so 80% cannot be true of the group.", 10.5, .6))
    def bell(x0, x1, y0, y1, color, mu=0, sd=1, op=1):
        pts = []
        for i in range(101):
            z = -3 + 6 * i / 100
            pts.append((x0 + (x1 - x0) * i / 100, y1 - (y1 - y0) * math.exp(-0.5 * ((z - mu) / sd) ** 2)))
        return path("M" + " L".join("%.1f,%.1f" % p for p in pts), color, 2, op)
    out.append(cap(340, 14, "who those women actually messaged"))
    out.append(line(340, 80, 640, 80, GRID)); out.append(bell(340, 640, 30, 80, TEAL))
    out.append(txt(340, 94, "rated low", 10, .6)); out.append(txt(640, 94, "rated high", 10, .6, anchor="end"))
    out.append(txt(340, 112, "close to a bell curve: messages went to a far wider range of men", 10.5, .78))
    out.append(txt(340, 126, "than the ratings did (shape as the video describes it, no counts given)", 10.5, .6))
    out.append(cap(340, 156, "how men rated women, 2009")); out.append(line(340, 216, 640, 216, GRID)); out.append(bell(340, 640, 166, 216, INDIGO))
    out.append(txt(340, 230, "rated low", 10, .6)); out.append(txt(640, 230, "rated high", 10, .6, anchor="end"))
    out.append(txt(340, 248, "a near-perfect bell curve: a few low, a few high, most in the middle", 10.5, .78))
    out.append(swatch(20, 248, TEAL, "women rating or messaging men")); out.append(swatch(20, 268, INDIGO, "men rating women"))
    return svg("ratings_vs_messages", 280, "Women rated 80% of men below average but messaged a bell-curve range of them; men rated women on a bell curve", "\n".join(out))

def fig_swipe_collapse():
    out = [MARKER, cap(20, 14, "the 2009 dating site: two separate acts")]
    out.append(box(20, 24, 180, 56, ["she rates him", "1 to 5"], TEAL)); out.append(arrow(200, 52, 240, 52))
    out.append(box(242, 24, 200, 56, ["she decides on her own", "whether to write to him"], TEAL)); out.append(arrow(442, 52, 482, 52))
    out.append(box(484, 24, 170, 56, ["a message,", "to a wide range of men"], TEAL))
    out.append(cap(20, 118, "a swipe app: one motion does both"))
    out.append(box(20, 128, 300, 56, ["swipe left = a low rating", "no message is possible"], INDIGO))
    out.append(box(340, 128, 314, 56, ["swipe right = a high rating", "and the only way to write to him"], INDIGO))
    out.append(txt(20, 212, "The wide messaging from the top row has no way to happen on the bottom row, because a woman can only write to a man she already", 10.5, .78))
    out.append(txt(20, 228, "rated highly. Part of the 0.542 is that missing path.", 10.5, .78))
    return svg("swipe_collapse", 240, "On the 2009 site rating and messaging were separate acts; on a swipe app the right swipe is both", "\n".join(out))

def fig_height_filter():
    out = [cap(40, 14, "100 american men"), waffle(40, 24, 15, INDIGO, "About 14.5 of every 100 American men are six feet or taller")]
    out.append(txt(180, 60, "about 14.5 in 100 are six feet or taller", 10.5, .78)); out.append(txt(180, 78, "(15 squares filled)", 10.5, .6))
    out.append(txt(180, 108, "About 60% of women on Bumble set six feet as their minimum,", 10.5, .78))
    out.append(txt(180, 124, "so for those women the other 85 men are gone before any rating happens.", 10.5, .78))
    out.append(txt(180, 148, "Tinder began selling a height filter to paying users in 2025.", 10.5, .6))
    return svg("height_filter", 160, "Of one hundred American men about fifteen are six feet or taller, the floor 60% of women on Bumble set", "\n".join(out))

def fig_paying_users():
    out = [cap(20, 14, "tinder's paying users, millions")]
    body, _ = hbars([("late 2023", 10.4, PURPLE, .9, "Late 2023: 10.4 million paying users"), ("late 2025", 8.77, PURPLE, .9, "Late 2025: 8.77 million paying users")], 90, 320, 24, fmt=lambda v: "%g million" % v)
    out.append(body)
    out.append(txt(20, 96, "Revenue stayed flat across those two years because the people who stayed were charged more.", 10.5, .78))
    out.append(cap(380, 14, "tinder's prices a month"))
    body, _ = hbars([("Plus", 25, PURPLE, .5, "Tinder Plus: about $25 a month"), ("Platinum", 50, PURPLE, .7, "Tinder Platinum: $25 to $50 a month"), ("Select", 499, PURPLE, .9, "Tinder Select: $499 a month, by invitation, under 1% of users")],
                    440, 620, 24, gap=24, fmt=lambda v: "$%d" % v if v != 50 else "$25 to $50")
    out.append(body)
    out.append(txt(380, 110, "Select is by invitation, for under 1% of users. It lets the buyer", 10.5, .6)); out.append(txt(380, 124, "message without a match and sit at the top of every queue.", 10.5, .6))
    return svg("paying_users", 136, "Tinder's paying users fell from 10.4 million to 8.77 million; its top tier costs $499 a month", "\n".join(out))

def fig_dates_per_year():
    X0, X1 = 150, 620
    vmax = 40
    out = [cap(X0, 14, "dates a year for a paying user")]
    groups = [("Tinder", 13.2, 32), ("Bumble", 4.8, 26.8)]
    for t in (0, 10, 20, 30, 40):
        x = X0 + (X1 - X0) * t / vmax
        out.append(line(x, 22, x, 130, FAINT)); out.append(txt(x, 144, str(t), 10, .6, anchor="middle"))
    for i, (app, m, w) in enumerate(groups):
        y = 30 + i * 52
        out.append(txt(X0 - 8, y + 20, app, 10.5, .78, anchor="end"))
        wm = (X1 - X0) * m / vmax; ww = (X1 - X0) * w / vmax
        out.append(rect(X0, y, wm, 16, INDIGO, .9, title="%s, paying men: %g dates a year" % (app, m))); out.append(txt(X0 + wm + 6, y + 12, "%g" % m, 10.5, .9))
        out.append(rect(X0, y + 20, ww, 16, TEAL, .9, title="%s, paying women: %g dates a year" % (app, w))); out.append(txt(X0 + ww + 6, y + 32, "%g" % w, 10.5, .9))
    out.append(txt(X0, 170, "Across the big apps a man pays about five times more per date than a woman does.", 10.5, .78))
    out.append(swatch(X0, 194, INDIGO, "paying men")); out.append(swatch(X0 + 110, 194, TEAL, "paying women"))
    return svg("dates_per_year", 206, "Dates a year for paying men and paying women on Tinder and on Bumble", "\n".join(out))

def fig_share_price():
    out = [cap(20, 14, "bumble share price")]
    body, _ = hbars([("Feb 2021, the peak", 84.80, PURPLE, .9, "February 2021: $84.80, the day after the listing"), ("Feb 2026", 2.61, PURPLE, .9, "February 2026: $2.61")], 150, 300, 24, gap=28, fmt=lambda v: "$%.2f" % v)
    out.append(body); out.append(txt(20, 96, "a fall of 96.9%", 14, .9, weight=700))
    out.append(cap(370, 14, "match group market value"))
    body, _ = hbars([("2021", 45, PURPLE, .9, "2021: about $45 billion"), ("late 2025", 10, PURPLE, .9, "Late 2025: about $10 billion")], 450, 590, 24, gap=28, fmt=lambda v: "$%d billion" % v)
    out.append(body); out.append(txt(370, 96, "a fall of about 78%", 14, .9, weight=700))
    return svg("share_price", 110, "Bumble's share price fell from $84.80 to $2.61 and Match Group's market value from about $45 billion to about $10 billion", "\n".join(out))

def fig_decline_slopes():
    def slope(x0, y0, w, h, title, a, b, la, lb, color, unit="%"):
        out = [cap(x0, y0, title)]
        top, bot = y0 + 16, y0 + h
        vmax = max(a, b) * 1.15
        ya = bot - (bot - top) * a / vmax; yb = bot - (bot - top) * b / vmax
        out.append(line(x0, bot, x0 + w, bot, GRID))
        out.append(path("M%.1f,%.1f L%.1f,%.1f" % (x0 + 20, ya, x0 + w - 20, yb), color, 2))
        for x, y, v in ((x0 + 20, ya, a), (x0 + w - 20, yb, b)):
            out.append('<circle cx="%.1f" cy="%.1f" r="5" fill="%s" stroke="rgba(130,130,130,0)"/>' % (x, y, color))
            out.append(txt(x, y - 10, "%g%s" % (v, unit), 10.5, .9, anchor="middle"))
        out.append(txt(x0 + 20, bot + 14, la, 10, .6, anchor="middle")); out.append(txt(x0 + w - 20, bot + 14, lb, 10, .6, anchor="middle"))
        return "\n".join(out)
    out = [slope(20, 14, 190, 110, "matches that became a date", 4.8, 2.1, "2020", "2025", PURPLE),
           slope(245, 14, 190, 110, "users who were satisfied", 44, 22, "2019", "2025", PURPLE),
           slope(470, 14, 190, 110, "young men on the apps", 100, 78, "2023", "2025", INDIGO, unit="")]
    out.append(txt(470, 160, "shown as 100 falling to 78, the low end", 10, .6)); out.append(txt(470, 174, "of the 15% to 22% fall the video gives", 10, .6))
    out.append(txt(20, 160, "All three fell by about half or more over the window shown.", 10.5, .78))
    return svg("decline_slopes", 186, "Three falls: matches becoming dates, satisfied users, and young men on the apps", "\n".join(out))

def fig_minutes_per_day():
    X0, X1 = 150, 620
    out = [cap(X0, 14, "minutes a day for the average user")]
    for t in (0, 30, 60, 90, 120):
        x = X0 + (X1 - X0) * t / 120
        out.append(line(x, 22, x, 84, FAINT)); out.append(txt(x, 98, str(t), 10, .6, anchor="middle"))
    y = 30
    out.append(txt(X0 - 8, y + 12, "Character AI", 10.5, .78, anchor="end"))
    x92 = X0 + (X1 - X0) * 92 / 120; x120 = X1
    out.append(rect(X0, y, x92 - X0, 16, PURPLE, .9, title="Character AI: 92 to 120 minutes a day"))
    out.append(rect(x92, y, x120 - x92, 16, PURPLE, .35, title="the range runs from 92 up to 120 minutes"))
    out.append(txt(x92 + 4, y + 12, "92 to 120", 10.5, .95))
    y = 58
    out.append(txt(X0 - 8, y + 12, "TikTok", 10.5, .78, anchor="end"))
    w = (X1 - X0) * 56 / 120
    out.append(rect(X0, y, w, 16, PURPLE, .9, title="TikTok: about 56 minutes a day")); out.append(txt(X0 + w + 6, y + 12, "about 56", 10.5, .9))
    out.append(txt(X0, 124, "One companion app, Replika, passed 40 million users by 2025. The category earned about $82 million in the", 10.5, .78))
    out.append(txt(X0, 140, "first half of 2025 and is growing 64% a year.", 10.5, .78))
    return svg("minutes_per_day", 152, "Minutes a day on Character AI, 92 to 120, against about 56 on TikTok", "\n".join(out))

def fig_single_under_30():
    out = [cap(40, 14, "americans under 30 who were single, 2022")]
    body, _ = hbars([("men under 30", 63, INDIGO, .9, "63% of men under 30 were single"), ("women under 30", 34, TEAL, .9, "34% of women under 30 were single")], 160, 620, 24, gap=28, vmax=100, fmt=lambda v: "%d%%" % v)
    out.append(body)
    for t in (0, 25, 50, 75, 100):
        x = 160 + 460 * t / 100
        out.append(line(x, 22, x, 78, FAINT)); out.append(txt(x, 92, "%d%%" % t, 10, .6, anchor="middle"))
    out.append(txt(40, 118, "Either young women are pairing with older men, or a small set of young men each hold several", 10.5, .78))
    out.append(txt(40, 134, "uncommitted partners while the rest hold none.", 10.5, .78))
    return svg("single_under_30", 146, "63% of American men under 30 were single against 34% of women under 30", "\n".join(out))

def fig_fertility():
    X0, X1 = 150, 620
    vmax = 2.6
    rows = [("United States", 1.6), ("Tokyo", .96), ("South Korea, 2023", .72), ("Seoul", .55)]
    out = [cap(X0, 14, "births per woman")]
    for t in (0, .5, 1, 1.5, 2):
        x = X0 + (X1 - X0) * t / vmax
        out.append(line(x, 22, x, 134, FAINT)); out.append(txt(x, 148, "%g" % t, 10, .6, anchor="middle"))
    for i, (lab, v) in enumerate(rows):
        y = 28 + i * 26; w = (X1 - X0) * v / vmax
        out.append(txt(X0 - 8, y + 11, lab, 10.5, .78, anchor="end"))
        out.append(rect(X0, y, w, 14, PURPLE, .9, title="%s: %g births per woman" % (lab, v))); out.append(txt(X0 + w + 6, y + 11, "%g" % v, 10.5, .9))
    xr = X0 + (X1 - X0) * 2.1 / vmax
    out.append(line(xr, 22, xr, 134, "rgba(130,130,130,.8)", 1.5)); out.append(txt(xr, 166, "2.1 births per woman holds a population steady", 10.5, .78, anchor="middle"))
    return svg("fertility", 178, "Births per woman in the United States, Tokyo, South Korea, and Seoul against the 2.1 that holds a population steady", "\n".join(out))

def fig_computed_over():
    out = [MARKER, cap(20, 14, "what each gini is worked out over")]
    out.append(box(20, 24, 300, 64, ["a Gini of likes", "the profiles on one app, at one moment"], INDIGO))
    out.append(box(360, 24, 300, 64, ["a country's income Gini", "every household, across a whole year"], GRAY.replace("rgba(130,130,130,.55)", "") or None))
    out.append(cap(20, 124, "two different sets of people, each rated by the other"))
    out.append(box(20, 134, 200, 56, ["men", "send likes to women"], INDIGO)); out.append(arrow(220, 162, 300, 162))
    out.append(box(302, 134, 358, 56, ["spread across the women: 0.376", "this says men spread their likes widely"], TEAL))
    out.append(box(20, 206, 200, 56, ["women", "send likes to men"], TEAL)); out.append(arrow(220, 234, 300, 234))
    out.append(box(302, 206, 358, 56, ["spread across the men: 0.542", "this says women concentrate theirs"], INDIGO))
    out.append(txt(20, 288, "The eighth-of-149 ranking says where 0.542 falls on a list built for national incomes. The two app figures never trade with each other.", 10.5, .78))
    return svg("computed_over", 300, "A Gini of likes covers one app at one moment; the women's 0.376 and the men's 0.542 are two populations rated by each other", "\n".join(out))

def fig_survivorship():
    before = [0, 0, 0, 0, 0, 1, 2, 3, 6, 12]
    after = [x for x in before if x > 0]
    gb, ga = gini(before), gini(after)
    def panel(x0, title, likes, g, n_label):
        out = [cap(x0, 14, title)]
        base = 120
        for i, v in enumerate(likes):
            x = x0 + i * 28; h = 80 * v / 12
            out.append(rect(x, base - h, 20, h, INDIGO, .9 if v else .25, title="man %d: %d likes" % (i + 1, v)) if v else rect(x, base - 3, 20, 3, INDIGO, .35, rx=1, title="man %d: 0 likes" % (i + 1)))
            out.append(txt(x + 10, base + 14, str(v), 10, .6, anchor="middle"))
        out.append(line(x0, base, x0 + len(likes) * 28 - 8, base, GRID))
        out.append(txt(x0, 152, "Gini %.2f" % g, 14, .9, weight=700)); out.append(txt(x0, 168, n_label, 10.5, .6))
        return "\n".join(out)
    out = [panel(20, "ten men, likes each got", before, gb, "ten men, five of them with nothing"),
           panel(360, "the five with nothing quit", after, ga, "the same likes, five men")]
    out.append(txt(20, 196, "Nobody got one more like, and the number fell from %.2f to %.2f. A lower Gini in a later report needs this check first." % (gb, ga), 10.5, .78))
    return svg("survivorship", 208, "A toy list of ten men shows the Gini falling from %.2f to %.2f when the five men with zero likes leave" % (gb, ga), "\n".join(out))

def fig_phoenix_vs_average():
    out = [cap(40, 14, "matches from 14,000 right swipes")]
    body, _ = hbars([("the man in Phoenix", 41, INDIGO, .9, "The man in Phoenix: 41 matches from 14,000 right swipes"), ("an average man at 0.87%", 122, INDIGO, .5, "An average man at 0.87% per swipe: about 122 matches")], 190, 620, 24, gap=28, vmax=140, fmt=lambda v: str(v) if v == 41 else "about 120")
    out.append(body)
    out.append(txt(40, 96, "The average is already under one match per hundred swipes. He sits below it.", 10.5, .78))
    return svg("phoenix_vs_average", 108, "The man in Phoenix got 41 matches from 14,000 swipes; an average man at 0.87% would get about 120", "\n".join(out))

FIGS = [fig_gini_lorenz, fig_gini_scale, fig_likes_split, fig_swipe_rates, fig_swipe_volume, fig_ratio, fig_two_problems,
        fig_ratings_vs_messages, fig_swipe_collapse, fig_height_filter, fig_paying_users, fig_dates_per_year, fig_share_price,
        fig_decline_slopes, fig_minutes_per_day, fig_single_under_30, fig_fertility, fig_computed_over, fig_survivorship, fig_phoenix_vs_average]

def inject(page):
    src = open(page).read(); seen = []
    def repl(mo):
        name = mo.group(1); f = os.path.join(OUT, name + ".svg")
        if not os.path.exists(f): raise SystemExit("no diagram named " + name)
        seen.append(name)
        return "<!-- diagram:%s -->\n%s\n<!-- /diagram -->" % (name, open(f).read().rstrip())
    out = re.sub(r"<!-- diagram:([a-z0-9_]+) -->.*?<!-- /diagram -->", repl, src, flags=re.S)
    open(page, "w").write(out); print("injected:", ", ".join(seen))

if __name__ == "__main__":
    for f in FIGS: f()
    print("wrote", len(FIGS), "figures to", OUT)
    if "--inject" in sys.argv: inject(sys.argv[sys.argv.index("--inject") + 1])
