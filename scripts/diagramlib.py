#!/usr/bin/env python3
"""diagramlib.py — shared SVG primitives for the wiki figure scripts. Theme-aware: text wears currentColor,
fills are rgba. Teal = women, indigo = men, purple = a company, product, or place, gray = context.
A page script sets OUT before drawing: diagramlib.OUT = <assets dir>."""
import math, os, re, sys

OUT = None

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


def vbars(rows, x0, y0, w, h, vmax=None, color=INDIGO, op=.9, gap=6, fmt=lambda v: str(v), label_size=10):
    """rows: (label, value[, color]) ; vertical columns in a band of width w and height h. Returns body."""
    vmax = vmax or max(r[1] for r in rows)
    n = len(rows); bw = (w - gap * (n - 1)) / n
    out = [line(x0, y0 + h, x0 + w, y0 + h, GRID)]
    for i, r in enumerate(rows):
        lab, v = r[0], r[1]; col = r[2] if len(r) > 2 else color
        x = x0 + i * (bw + gap); bh = h * v / vmax
        out.append(rect(x, y0 + h - bh, bw, bh, col, op, title="%s: %s" % (lab, fmt(v))))
        out.append(txt(x + bw / 2, y0 + h - bh - 5, fmt(v), 10.5, .9, anchor="middle"))
        out.append(txt(x + bw / 2, y0 + h + 14, lab, label_size, .6, anchor="middle"))
    return "\n".join(out)

def slope(x0, y0, w, h, title, a, b, la, lb, color, unit="%", vmax=None):
    out = [cap(x0, y0, title)]
    top, bot = y0 + 16, y0 + h
    vmax = vmax or max(a, b) * 1.15
    ya = bot - (bot - top) * a / vmax; yb = bot - (bot - top) * b / vmax
    out.append(line(x0, bot, x0 + w, bot, GRID))
    out.append(path("M%.1f,%.1f L%.1f,%.1f" % (x0 + 20, ya, x0 + w - 20, yb), color, 2))
    for x, y, v in ((x0 + 20, ya, a), (x0 + w - 20, yb, b)):
        out.append('<circle cx="%.1f" cy="%.1f" r="5" fill="%s"/>' % (x, y, color))
        out.append(txt(x, y - 10, "%g%s" % (v, unit), 10.5, .9, anchor="middle"))
    out.append(txt(x0 + 20, bot + 14, la, 10, .6, anchor="middle")); out.append(txt(x0 + w - 20, bot + 14, lb, 10, .6, anchor="middle"))
    return "\n".join(out)

def inject(page, out_dir):
    src = open(page).read(); seen = []
    def repl(mo):
        name = mo.group(1); f = os.path.join(out_dir, name + ".svg")
        if not os.path.exists(f): raise SystemExit("no diagram named " + name)
        seen.append(name)
        return "<!-- diagram:%s -->\n%s\n<!-- /diagram -->" % (name, open(f).read().rstrip())
    out = re.sub(r"<!-- diagram:([a-z0-9_]+) -->.*?<!-- /diagram -->", repl, src, flags=re.S)
    open(page, "w").write(out); print("injected:", ", ".join(seen))
