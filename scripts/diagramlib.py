#!/usr/bin/env python3
"""diagramlib.py — shared SVG primitives for the wiki figure scripts. Theme-aware: text wears currentColor,
fills are rgba. Teal = women, indigo = men, purple = a company, product, or place, gray = context.
A page script sets OUT before drawing: diagramlib.OUT = <assets dir>.

Style (2026-09-08, after the owner's ruling on the FigTree look): pastel-filled nodes with a thin saturated
border and rounded corners, bold sentence-case titles, dark thin arrows with filled heads, light tinted
panels with a title for grouping, a small flat icon set. Everything stays theme-aware through rgba and
currentColor, so the same file reads in light and dark."""
import math, os, re, sys

OUT = None

TEAL, INDIGO, PURPLE = "#2f9e8f", "#5b6cb0", "#8156a6"
BLUE, GREEN, ORANGE, YELLOW, PINK = "#4f8bea", "#3f9e77", "#e8743b", "#d6a53a", "#d9536f"
RGB = {TEAL: "47,158,143", INDIGO: "91,108,176", PURPLE: "129,86,166",
       BLUE: "79,139,234", GREEN: "63,158,119", ORANGE: "232,116,59", YELLOW: "214,165,58", PINK: "217,83,111"}
GRAY = "rgba(130,130,130,.55)"
GRID = "rgba(130,130,130,.35)"
FAINT = "rgba(130,130,130,.14)"
INK = "currentColor"
W = 680
FONT = "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"

# ---------- primitives ----------
def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def txt(x, y, s, size=10.5, op=.8, anchor="start", weight=None, ls=None):
    extra = ""
    if weight: extra += ' font-weight="%s"' % weight
    if ls: extra += ' letter-spacing="%s"' % ls
    return '<text x="%s" y="%s" font-size="%s" fill="currentColor" opacity="%s" text-anchor="%s"%s>%s</text>' % (
        x, y, size, op, anchor, extra, esc(s))

def cap(x, y, s):            # figure title: bold, sentence case
    s = s.strip(); s = (s[:1].upper() + s[1:]) if s else s
    return txt(x, y + 2, s, 12.5, .92, weight=700)

def rect(x, y, w, h, color, op=1.0, rx=4, title=None, stroke=None):
    fill = color if color.startswith("rgba") else "rgba(%s,%s)" % (RGB[color], op)
    st = ''
    if stroke: st = ' stroke="%s" stroke-width="1"' % stroke
    r = '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%s" fill="%s"%s/>' % (x, y, max(w, 0), max(h, 0), rx, fill, st)
    if title:
        return '<g><title>%s</title>%s</g>' % (esc(title), r)
    return r

def line(x1, y1, x2, y2, color=GRID, w=1, extra=""):
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="%s"%s/>' % (x1, y1, x2, y2, color, w, extra)

def path(d, color, w=2, op=1.0, fill="none"):
    return '<path d="%s" fill="%s" stroke="%s" stroke-width="%s" stroke-opacity="%s" stroke-linejoin="round" stroke-linecap="round"/>' % (d, fill, color, w, op)

def swatch(x, y, color, label, op=1.0):
    return rect(x, y - 8, 10, 10, color, .35, rx=3, stroke="rgba(%s,.9)" % RGB[color]) + txt(x + 15, y, label, 10.5, .8)

def svg(name, h, label, body):
    s = ('<svg viewBox="0 0 %d %d" width="%d" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="%s" '
         'style="max-width:100%%;height:auto" font-family="%s">\n<title>%s</title>\n%s\n</svg>\n') % (W, h, W, esc(label), FONT, esc(label), body)
    open(os.path.join(OUT, name + ".svg"), "w").write(s)
    return s

def gini(xs):
    xs = sorted(xs); n = len(xs); s = sum(xs)
    if s == 0: return 0.0
    return (2 * sum((i + 1) * x for i, x in enumerate(xs))) / (n * s) - (n + 1) / n

# ---------- charts ----------
def _fillstroke(col, op):
    if col.startswith("rgba"): return col, None
    return "rgba(%s,%s)" % (RGB[col], min(.4, .12 + op * .3)), "rgba(%s,.9)" % RGB[col]

def hbars(rows, x0, x1, y0, gap=26, bar=14, vmax=None, fmt=lambda v: str(v), label_w=150):
    """rows: list of (label, value, color, opacity, title). Returns (body, y_end)."""
    vmax = vmax or max(r[1] for r in rows)
    out = []
    for i, (lab, v, col, op, title) in enumerate(rows):
        y = y0 + i * gap
        w = (x1 - x0) * v / vmax
        fill, st = _fillstroke(col, op)
        out.append(txt(x0 - 8, y + bar - 3, lab, 10.5, .8, anchor="end"))
        out.append(rect(x0, y, w, bar, fill, rx=4, title=title, stroke=st))
        out.append(txt(x0 + w + 6, y + bar - 3, fmt(v), 10.5, .92, weight=600))
    return "\n".join(out), y0 + len(rows) * gap

def waffle(x0, y0, filled, color, title, cell=9, gap=3, cols=10):
    out = []
    for i in range(100):
        r, c = divmod(i, cols)
        x = x0 + c * (cell + gap); y = y0 + (9 - r) * (cell + gap)   # fill from the bottom up
        on = i < filled
        out.append('<rect x="%d" y="%d" width="%d" height="%d" rx="2" fill="%s"%s/>' % (
            x, y, cell, cell, ("rgba(%s,.55)" % RGB[color]) if on else FAINT, (' stroke="rgba(%s,.9)" stroke-width=".8"' % RGB[color]) if on else ""))
    return '<g><title>%s</title>%s</g>' % (esc(title), "".join(out))

def vbars(rows, x0, y0, w, h, vmax=None, color=INDIGO, op=.9, gap=6, fmt=lambda v: str(v), label_size=10):
    """rows: (label, value[, color]) ; vertical columns in a band of width w and height h. Returns body."""
    vmax = vmax or max(r[1] for r in rows)
    n = len(rows); bw = (w - gap * (n - 1)) / n
    out = [line(x0, y0 + h, x0 + w, y0 + h, GRID)]
    for i, r in enumerate(rows):
        lab, v = r[0], r[1]; col = r[2] if len(r) > 2 else color
        x = x0 + i * (bw + gap); bh = h * v / vmax
        fill, st = _fillstroke(col, op)
        out.append(rect(x, y0 + h - bh, bw, bh, fill, rx=4, title="%s: %s" % (lab, fmt(v)), stroke=st))
        out.append(txt(x + bw / 2, y0 + h - bh - 5, fmt(v), 10.5, .92, anchor="middle", weight=600))
        out.append(txt(x + bw / 2, y0 + h + 14, lab, label_size, .65, anchor="middle"))
    return "\n".join(out)

def slope(x0, y0, w, h, title, a, b, la, lb, color, unit="%", vmax=None):
    out = [cap(x0, y0, title)]
    top, bot = y0 + 16, y0 + h
    vmax = vmax or max(a, b) * 1.15
    ya = bot - (bot - top) * a / vmax; yb = bot - (bot - top) * b / vmax
    out.append(line(x0, bot, x0 + w, bot, GRID))
    out.append(path("M%.1f,%.1f L%.1f,%.1f" % (x0 + 20, ya, x0 + w - 20, yb), color, 2.2))
    for x, y, v in ((x0 + 20, ya, a), (x0 + w - 20, yb, b)):
        out.append('<circle cx="%.1f" cy="%.1f" r="5.5" fill="rgba(%s,.35)" stroke="%s" stroke-width="1.5"/>' % (x, y, RGB[color], color))
        out.append(txt(x, y - 10, "%g%s" % (v, unit), 10.5, .92, anchor="middle", weight=600))
    out.append(txt(x0 + 20, bot + 14, la, 10, .65, anchor="middle")); out.append(txt(x0 + w - 20, bot + 14, lb, 10, .65, anchor="middle"))
    return "\n".join(out)

# ---------- nodes, panels, arrows ----------
def box(x, y, w, h, text_lines, color=None, size=10.5, dashed=False, bold=False):
    """A node: pastel fill, thin saturated border, rounded corners. color=None gives a neutral grey node."""
    if color and not color.startswith("rgba"):
        fill = "rgba(%s,.16)" % RGB[color]; stroke = "rgba(%s,.9)" % RGB[color]
    elif color:
        fill = color; stroke = GRID
    else:
        fill = "rgba(130,130,130,.12)"; stroke = "rgba(130,130,130,.55)"
    dash = ' stroke-dasharray="5 4"' if dashed else ""
    out = ['<rect x="%d" y="%d" width="%d" height="%d" rx="8" fill="%s" stroke="%s" stroke-width="1.3"%s/>' % (x, y, w, h, fill, stroke, dash)]
    n = len(text_lines); lh = size + 4
    ty = y + h / 2 - (n - 1) * lh / 2 + size / 3
    for i, t in enumerate(text_lines):
        out.append(txt(x + w / 2, ty + i * lh, t, size, .92, anchor="middle", weight=(600 if (bold or (i == 0 and n > 1)) else 500)))
    return "\n".join(out)

def panel(x, y, w, h, title=None, tint=None, size=12):
    """A grouping container: light tint, soft border, bold title at the top. tint is a palette colour or None."""
    fill = ("rgba(%s,.07)" % RGB[tint]) if tint else "rgba(120,130,170,.08)"
    stroke = ("rgba(%s,.45)" % RGB[tint]) if tint else "rgba(120,130,170,.35)"
    out = ['<rect x="%d" y="%d" width="%d" height="%d" rx="14" fill="%s" stroke="%s" stroke-width="1"/>' % (x, y, w, h, fill, stroke)]
    if title: out.append(txt(x + w / 2, y + 18, title, size, .92, anchor="middle", weight=700))
    return "\n".join(out)

def arrow(x1, y1, x2, y2, w=1.6, dashed=False):
    dash = ' stroke-dasharray="5 4"' if dashed else ""
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" stroke-opacity=".75" stroke-width="%s"%s marker-end="url(#ar)"/>' % (x1, y1, x2, y2, w, dash)

def bigarrow(x1, y1, x2, y2):
    """A heavy panel-to-panel arrow."""
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" stroke-opacity=".85" stroke-width="4" marker-end="url(#arbig)"/>' % (x1, y1, x2, y2)

MARKER = ('<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" '
          'orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="currentColor" fill-opacity=".8"/></marker>'
          '<marker id="arbig" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" '
          'orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor" fill-opacity=".85"/></marker></defs>')

# ---------- icons: small flat pictograms drawn in currentColor, 16px grid ----------
def icon(name, x, y, s=16, color=None):
    c = color or "currentColor"; k = s / 16.0
    g = '<g transform="translate(%.1f,%.1f) scale(%.3f)" fill="none" stroke="%s" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9">' % (x, y, k, c)
    d = {
        "doc":      '<path d="M3 1h7l3 3v11H3z"/><path d="M10 1v3h3"/><path d="M5 8h6M5 11h6"/>',
        "db":       '<ellipse cx="8" cy="3.5" rx="5.5" ry="2"/><path d="M2.5 3.5v9c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2v-9"/><path d="M2.5 8c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2"/>',
        "search":   '<circle cx="6.5" cy="6.5" r="4.5"/><path d="M10 10l4.5 4.5"/>',
        "gear":     '<circle cx="8" cy="8" r="2.5"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4"/>',
        "check":    '<circle cx="8" cy="8" r="6.5"/><path d="M5 8.2l2 2 4-4.4"/>',
        "clock":    '<circle cx="8" cy="8" r="6.5"/><path d="M8 4.5V8l2.5 1.5"/>',
        "list":     '<path d="M5 4h9M5 8h9M5 12h9"/><circle cx="2.2" cy="4" r=".9" fill="%s"/><circle cx="2.2" cy="8" r=".9" fill="%s"/><circle cx="2.2" cy="12" r=".9" fill="%s"/>' % (c, c, c),
        "map":      '<circle cx="8" cy="3" r="2"/><circle cx="3" cy="12" r="2"/><circle cx="13" cy="12" r="2"/><path d="M7 4.6L4 10.4M9 4.6l3 5.8M5 12h6"/>',
        "pen":      '<path d="M2 14l1-4 8-8 3 3-8 8z"/><path d="M10 3l3 3"/>',
        "question": '<circle cx="8" cy="8" r="6.5"/><path d="M6 6.2a2 2 0 1 1 3 1.7c-.8.5-1 1-1 1.8"/><circle cx="8" cy="12" r=".7" fill="%s"/>' % c,
        "brain":    '<path d="M6.5 2.5a2.5 2.5 0 0 0-3 2.4 2.3 2.3 0 0 0-1 4 2.4 2.4 0 0 0 1.5 4c.6 1 2 1.3 3 .6V2.9c-.2-.2-.4-.3-.5-.4zM9.5 2.5a2.5 2.5 0 0 1 3 2.4 2.3 2.3 0 0 1 1 4 2.4 2.4 0 0 1-1.5 4c-.6 1-2 1.3-3 .6V2.9c.2-.2.4-.3.5-.4z"/>',
        "book":     '<path d="M2 3h5a2 2 0 0 1 2 2v9a1.5 1.5 0 0 0-1.5-1.5H2z"/><path d="M14 3H9a2 2 0 0 0-2 2v9a1.5 1.5 0 0 1 1.5-1.5H14z"/>',
        "target":   '<circle cx="8" cy="8" r="6.5"/><circle cx="8" cy="8" r="3.5"/><circle cx="8" cy="8" r=".8" fill="%s"/>' % c,
    }.get(name, '<circle cx="8" cy="8" r="6"/>')
    return g + d + "</g>"

def inject(page, out_dir):
    src = open(page).read(); seen = []
    def repl(mo):
        name = mo.group(1); f = os.path.join(out_dir, name + ".svg")
        if not os.path.exists(f): raise SystemExit("no diagram named " + name)
        seen.append(name)
        return "<!-- diagram:%s -->\n%s\n<!-- /diagram -->" % (name, open(f).read().rstrip())
    out = re.sub(r"<!-- diagram:([a-z0-9_]+) -->.*?<!-- /diagram -->", repl, src, flags=re.S)
    open(page, "w").write(out); print("injected:", ", ".join(seen))
