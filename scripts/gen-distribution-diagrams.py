#!/usr/bin/env python3
"""gen-distribution-diagrams.py — draws every figure on wiki/Concepts/Probability Distributions.md.

Each plot is computed from the actual density or mass function, so the shapes are the real
ones rather than sketches. The two timeline figures come from a run of the layered message
model that page describes, with the random seed fixed so the picture is reproducible.

usage:
    python3 scripts/gen-distribution-diagrams.py
    python3 scripts/gen-distribution-diagrams.py --inject "wiki/Concepts/Probability Distributions.md"

Files are written to assets/distribution-diagrams/. The page marks each slot as
<!-- diagram:NAME --> ... <!-- /diagram --> and --inject replaces what sits between the
two markers, so a change here reaches the page without hand-editing any SVG.
"""
import math, os, random, sys

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "assets", "distribution-diagrams")
os.makedirs(OUT, exist_ok=True)

W, H = 680, 200
X0, X1 = 52, 656
Y0, Y1 = 20, 158          # plot band
AXIS = Y1
LAB = 176                  # x tick label baseline
CAP = 194                  # caption baseline

GRID = "rgba(130,130,130,.35)"
FAINT = "rgba(130,130,130,.18)"

TEAL, INDIGO, GOLD, PURPLE, TAN = "#2f9e8f", "#5b6cb0", "#c69234", "#8156a6", "#b0895e"
RGB = {TEAL: "47,158,143", INDIGO: "91,108,176", GOLD: "198,146,52",
       PURPLE: "129,86,166", TAN: "176,137,94"}

# ---------- distribution math ----------
def lchoose(n, k):
    return math.lgamma(n + 1) - math.lgamma(k + 1) - math.lgamma(n - k + 1)

def binom_pmf(k, n, p):
    if k < 0 or k > n: return 0.0
    return math.exp(lchoose(n, k) + k * math.log(p) + (n - k) * math.log1p(-p))

def pois_pmf(k, lam):
    return math.exp(-lam + k * math.log(lam) - math.lgamma(k + 1))

def nbinom_pmf(k, r, p):
    return math.exp(math.lgamma(k + r) - math.lgamma(r) - math.lgamma(k + 1)
                    + r * math.log(p) + k * math.log1p(-p))

def geom_pmf(k, p):          # k = 1,2,3,... trials until first success
    return p * (1 - p) ** (k - 1)

def norm_pdf(x, mu=0.0, sd=1.0):
    return math.exp(-0.5 * ((x - mu) / sd) ** 2) / (sd * math.sqrt(2 * math.pi))

def lognorm_pdf(x, mu=0.0, sd=1.0):
    if x <= 0: return 0.0
    return math.exp(-0.5 * ((math.log(x) - mu) / sd) ** 2) / (x * sd * math.sqrt(2 * math.pi))

def expon_pdf(x, lam=1.0):
    return lam * math.exp(-lam * x) if x >= 0 else 0.0

def gamma_pdf(x, k, theta=1.0):
    if x <= 0: return 0.0
    return math.exp((k - 1) * math.log(x) - x / theta - math.lgamma(k) - k * math.log(theta))

def beta_pdf(x, a, b):
    if x <= 0 or x >= 1: return 0.0
    lb = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
    return math.exp((a - 1) * math.log(x) + (b - 1) * math.log1p(-x) - lb)

def weibull_pdf(x, k, lam=1.0):
    if x < 0: return 0.0
    if x == 0: return k / lam if k == 1 else (0.0 if k > 1 else 1e9)
    return (k / lam) * (x / lam) ** (k - 1) * math.exp(-(x / lam) ** k)

def pareto_pdf(x, a, xm=1.0):
    return a * xm ** a / x ** (a + 1) if x >= xm else 0.0

def t_pdf(x, nu):
    return (math.exp(math.lgamma((nu + 1) / 2) - math.lgamma(nu / 2))
            / math.sqrt(nu * math.pi)) * (1 + x * x / nu) ** (-(nu + 1) / 2)

def vonmises_pdf(theta, mu, kappa):   # unnormalised is fine, we rescale anyway
    return math.exp(kappa * math.cos(theta - mu))

# ---------- drawing ----------
def frame(xlabels=None, ylab=None):
    s = [f'<line x1="{X0}" y1="{AXIS}" x2="{X1}" y2="{AXIS}" stroke="{GRID}"/>']
    if xlabels:
        for x, t in xlabels:
            s.append(f'<line x1="{x:.1f}" y1="{AXIS}" x2="{x:.1f}" y2="{AXIS+4}" stroke="{GRID}"/>')
            s.append(f'<text x="{x:.1f}" y="{LAB}" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">{t}</text>')
    if ylab:
        s.append(f'<text x="4" y="{Y0-4}" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">{ylab}</text>')
    return s

def caption(text, x=X0, anchor="start", y=CAP):
    return f'<text x="{x}" y="{y}" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="{anchor}">{text}</text>'

def legend(items, x=None, y=None, anchor=None):
    """Horizontal legend row under the caption. items: list of (color, label)."""
    out, cx = [], X0
    yy = 214
    for c, lab in items:
        out.append(f'<rect x="{cx:.1f}" y="{yy-8}" width="9" height="9" rx="2" fill="rgba({RGB[c]},.30)" stroke="{c}" stroke-opacity=".85"/>')
        out.append(f'<text x="{cx+14:.1f}" y="{yy}" font-size="10.5" fill="currentColor" opacity=".68">{lab}</text>')
        cx += 14 + len(lab) * 5.9 + 22
    return out


def wrap(body, label, height=None):
    h = height or 226
    return (f'<svg viewBox="0 0 {W} {h}" width="{W}" xmlns="http://www.w3.org/2000/svg" '
            f'role="img" aria-label="{label}" style="max-width:100%;height:auto">\n  '
            + "\n  ".join(body) + "\n</svg>\n")

def bars(vals, color, kmax=None, gap=.28, opacity=.30):
    """vals: list of (index_position_0..1, height_0..1)."""
    n = len(vals)
    span = (X1 - X0) / n
    bw = span * (1 - gap)
    out = []
    for i, hgt in enumerate(vals):
        x = X0 + i * span + (span - bw) / 2
        hh = max(0.0, hgt) * (AXIS - Y0)
        if hh < 0.4:
            continue
        out.append(f'<rect x="{x:.1f}" y="{AXIS-hh:.1f}" width="{bw:.1f}" height="{hh:.1f}" rx="1.5" '
                   f'fill="rgba({RGB[color]},{opacity})" stroke="{color}" stroke-opacity=".75" stroke-width="1"/>')
    return out, span

def bar_ticks(n, labels_every=1, fmt=str, span=None):
    span = span or (X1 - X0) / n
    out = []
    for i in range(n):
        if i % labels_every: continue
        out.append((X0 + i * span + span / 2, fmt(i)))
    return out

def steps(vals, top, color, fill=True, width=1.7, dash=None, opacity=.13):
    """Stepped outline over a discrete pmf. vals: list of probabilities."""
    n = len(vals)
    span = (X1 - X0) / n
    pts = [f"{X0:.1f},{AXIS:.1f}"]
    for i, v in enumerate(vals):
        y = AXIS - min(v / top, 1.0) * (AXIS - Y0)
        x0 = X0 + i * span
        pts.append(f"{x0:.1f},{y:.1f}")
        pts.append(f"{x0+span:.1f},{y:.1f}")
    pts.append(f"{X1:.1f},{AXIS:.1f}")
    d = "M" + " L".join(pts)
    out = []
    if fill:
        out.append(f'<path d="{d} Z" fill="rgba({RGB[color]},{opacity})" stroke="none"/>')
    da = f' stroke-dasharray="{dash}"' if dash else ""
    out.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}"{da} stroke-linejoin="round"/>')
    return out, span


def curve(f, xmin, xmax, color, fill=True, npts=110, ymax=None, dash=None, width=1.8, opacity=.13):
    ys = []
    for i in range(npts + 1):
        x = xmin + (xmax - xmin) * i / npts
        ys.append(f(x))
    top = ymax if ymax else max(ys)
    pts = []
    for i, y in enumerate(ys):
        px = X0 + (X1 - X0) * i / npts
        py = AXIS - min(y / top, 1.0) * (AXIS - Y0)
        pts.append(f"{px:.1f},{py:.1f}")
    d = "M" + " L".join(pts)
    out = []
    if fill:
        out.append(f'<path d="{d} L{X1:.1f},{AXIS} L{X0:.1f},{AXIS} Z" fill="rgba({RGB[color]},{opacity})" stroke="none"/>')
    da = f' stroke-dasharray="{dash}"' if dash else ""
    out.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}"{da} stroke-linejoin="round"/>')
    return out, top

def xticks(xmin, xmax, ticks, fmt=lambda v: f"{v:g}"):
    return [(X0 + (X1 - X0) * (t - xmin) / (xmax - xmin), fmt(t)) for t in ticks]

def write(name, svg):
    with open(os.path.join(OUT, name + ".svg"), "w") as fh:
        fh.write(svg)

# ================= plots =================

# 1. Bernoulli
def d_bernoulli():
    p = 0.3
    n = 2
    span = (X1 - X0) / n
    b = []
    for i, hgt in enumerate([1 - p, p]):
        bw = span * .40
        x = X0 + i * span + (span - bw) / 2
        hh = hgt * (AXIS - Y0)
        b.append(f'<rect x="{x:.1f}" y="{AXIS-hh:.1f}" width="{bw:.1f}" height="{hh:.1f}" rx="2" '
                 f'fill="rgba({RGB[INDIGO]},.30)" stroke="{INDIGO}" stroke-opacity=".8"/>')
        b.append(f'<text x="{x+bw/2:.1f}" y="{AXIS-hh-8:.1f}" font-size="12" fill="currentColor" opacity=".7" text-anchor="middle">{hgt:.1f}</text>')
    body = frame([(X0 + i * span + span / 2, l) for i, l in enumerate(["0  ·  no", "1  ·  yes"])], "chance")
    body += b
    body.append(caption("One flip with a 30 percent chance of yes. Two outcomes, two heights, and the heights add to 1."))
    return wrap(body, "Bernoulli distribution with p equals 0.3")

# 2. Binomial
def d_binomial():
    n = 20
    top = 0.24
    body = []
    for p, col, dash, fill in [(0.15, TAN, "5 4", False), (0.5, INDIGO, None, True)]:
        vals = [binom_pmf(k, n, p) for k in range(n + 1)]
        st, span = steps(vals, top, col, fill=fill, dash=dash)
        body += st
    span = (X1 - X0) / (n + 1)
    body = frame([(X0 + k * span + span / 2, str(k)) for k in range(0, n + 1, 2)], "chance") + body
    body += legend([(TAN, "p = 0.15"), (INDIGO, "p = 0.5")])
    body.append(caption("Twenty flips. The step over 6 is the chance of getting exactly six yeses out of the twenty."))
    return wrap(body, "Binomial distribution over twenty trials at two success rates")

# 3. Poisson
def d_poisson():
    kmax = 22
    top = 0.40
    body = []
    for lam, col, dash, fill in [(1.0, TAN, "5 4", False), (4.0, TEAL, None, True), (10.0, PURPLE, "2 3", False)]:
        vals = [pois_pmf(k, lam) for k in range(kmax + 1)]
        st, span = steps(vals, top, col, fill=fill, dash=dash)
        body += st
    span = (X1 - X0) / (kmax + 1)
    body = frame([(X0 + k * span + span / 2, str(k)) for k in range(0, kmax + 1, 2)], "chance") + body
    body += legend([(TAN, "average 1 per hour"), (TEAL, "average 4 per hour"), (PURPLE, "average 10 per hour")])
    body.append(caption("How many arrivals land in one hour at three long-run averages. The spread widens as the average rises."))
    return wrap(body, "Poisson distribution at three rates")

# 4. Negative binomial vs Poisson, same mean
def d_nbinom():
    kmax = 26
    mean = 6.0
    r = 1.5
    p = r / (r + mean)
    top = 0.20
    body = []
    st, span = steps([pois_pmf(k, mean) for k in range(kmax + 1)], top, TEAL, fill=False, dash="5 4", width=1.5)
    body += st
    st2, _ = steps([nbinom_pmf(k, r, p) for k in range(kmax + 1)], top, GOLD, fill=True)
    body += st2
    body = frame([(X0 + k * span + span / 2, str(k)) for k in range(0, kmax + 1, 2)], "chance") + body
    body += legend([(TEAL, "Poisson, average 6"), (GOLD, "negative binomial, average 6")])
    body.append(caption("Both average six messages a day. The gold shape has far more silent days and far more twenty-message days."))
    return wrap(body, "Negative binomial compared with Poisson at the same average")

# 5. Geometric
def d_geometric():
    kmax = 24
    p = .25
    vals = [geom_pmf(k, p) for k in range(1, kmax + 1)]
    st, span = steps(vals, .27, TEAL)
    body = frame([(X0 + i * span + span / 2, str(i + 1)) for i in range(0, kmax, 2)], "chance") + st
    body.append(caption("Tries until the first yes, when each try has a 25 percent chance. The first try is the most likely place to succeed."))
    return wrap(body, "Geometric distribution with p equals 0.25")

# 6. Uniform
def d_uniform():
    body = frame(xticks(0, 1, [0, .25, .5, .75, 1]), "density")
    c, _ = curve(lambda x: 1.0 if 0.02 < x < .98 else 0.0, 0, 1, PURPLE, ymax=1.25)
    body += c
    body.append(caption("Every value between the two ends is equally likely, and nothing outside them ever happens."))
    return wrap(body, "Uniform distribution between zero and one")

# 7. Normal, with sigma bands
def d_normal():
    xmin, xmax = -4, 4
    body = frame(xticks(xmin, xmax, [-3, -2, -1, 0, 1, 2, 3], lambda v: f"{v:+g}\u03c3".replace("+0\u03c3", "mean")), "density")
    top = norm_pdf(0)
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    for lo, hi, op in [(-1, 1, .16), (-2, -1, .09), (1, 2, .09), (-3, -2, .05), (2, 3, .05)]:
        pts = []
        n = 40
        for i in range(n + 1):
            x = lo + (hi - lo) * i / n
            pts.append(f"{px(x):.1f},{AXIS - norm_pdf(x)/top*(AXIS-Y0):.1f}")
        body.append(f'<path d="M{px(lo):.1f},{AXIS} L' + " L".join(pts) + f' L{px(hi):.1f},{AXIS} Z" fill="rgba({RGB[INDIGO]},{op})"/>')
    c, _ = curve(norm_pdf, xmin, xmax, INDIGO, fill=False, ymax=top)
    body += c
    body.append(f'<text x="{X0+4}" y="{Y0+18}" font-size="10.5" fill="currentColor" opacity=".6">68 in 100 land inside one \u03c3 of the mean</text>')
    body.append(f'<text x="{X0+4}" y="{Y0+34}" font-size="10.5" fill="currentColor" opacity=".48">95 in 100 land inside two</text>')
    body.append(caption("Add up many small independent nudges and the total lands here, even and symmetric, with ends that thin out fast."))
    return wrap(body, "Normal distribution with standard deviation bands")

# 8. Log-normal vs normal
def d_lognormal():
    xmin, xmax = 0, 8
    body = frame(xticks(xmin, xmax, [0, 1, 2, 3, 4, 5, 6, 7, 8]), "density")
    top = 0.62
    c1, _ = curve(lambda x: lognorm_pdf(x, 0.0, 0.75), xmin, xmax, GOLD, ymax=top)
    c2, _ = curve(lambda x: norm_pdf(x, 1.33, 1.06), xmin, xmax, INDIGO, fill=False, ymax=top, dash="5 4", width=1.4)
    body += c1 + c2
    body += legend([(GOLD, "log-normal"), (INDIGO, "normal, same average")])
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    body.append(f'<line x1="{px(1):.1f}" y1="{AXIS}" x2="{px(1):.1f}" y2="{Y0+46}" stroke="{GOLD}" stroke-opacity=".5" stroke-dasharray="3 3"/>')
    body.append(f'<text x="{px(1)+6:.1f}" y="{Y0+44}" font-size="10.5" fill="currentColor" opacity=".62">half of all values sit left of here</text>')
    body.append(f'<text x="{px(4.7):.1f}" y="{AXIS-18}" font-size="10.5" fill="currentColor" opacity=".55">and the tail runs on</text>')
    body.append(caption("Multiply many small factors instead of adding them and you get this: a floor at zero, a peak on the left, a long right tail."))
    return wrap(body, "Log-normal distribution against a normal with the same average")

# 9. Exponential
def d_exponential():
    xmin, xmax = 0, 5
    body = frame(xticks(xmin, xmax, [0, 1, 2, 3, 4, 5], lambda v: (f"{v:g}\u00d7 average" if v == 1 else (f"{v:g}\u00d7" if v else "0"))), "density")
    c, top = curve(lambda x: expon_pdf(x, 1.0), xmin, xmax, TEAL)
    body += c
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    body.append(f'<line x1="{px(0.693):.1f}" y1="{AXIS}" x2="{px(0.693):.1f}" y2="{Y0+56}" stroke="{TEAL}" stroke-opacity=".55" stroke-dasharray="3 3"/>')
    body.append(f'<text x="{px(0.693)+8:.1f}" y="{Y0+54}" font-size="10.5" fill="currentColor" opacity=".62">half of all gaps are shorter than this</text>')
    body.append(caption("The gap between one arrival and the next when arrivals are Poisson. Short gaps are the common case."))
    return wrap(body, "Exponential distribution of waiting times")

# 10. Gamma
def d_gamma():
    xmin, xmax = 0, 14
    body = frame(xticks(xmin, xmax, [0, 2, 4, 6, 8, 10, 12, 14]), "density")
    top = 0.40
    for k, col, dash in [(2, TEAL, None), (3, TAN, "5 4"), (5, PURPLE, "2 3")]:
        c, _ = curve(lambda x, k=k: gamma_pdf(x, k, 1.0), xmin, xmax, col, fill=(k == 2), ymax=top, opacity=.12, dash=dash)
        body += c
    body += legend([(TEAL, "wait for the 2nd arrival"), (TAN, "wait for the 3rd"), (PURPLE, "wait for the 5th")])
    body.append(caption("Waiting for several arrivals instead of one. Each extra arrival pushes the peak right and evens the shape out."))
    return wrap(body, "Gamma distribution for waiting on the first, second and fifth arrival")

# 11. Beta
def d_beta():
    sets = [((1, 1), INDIGO, "5 4"), ((2, 6), GOLD, None), ((6, 6), TEAL, None), ((9, 3), PURPLE, "2 3")]
    top = max(max(beta_pdf(i / 400.0, a, b) for i in range(1, 400)) for (a, b), _, _ in sets) * 1.06
    body = frame(xticks(0, 1, [0, .25, .5, .75, 1], lambda v: f"{v:g}"), "density")
    for (a, b), col, dash in sets:
        c, _ = curve(lambda x, a=a, b=b: beta_pdf(x, a, b), 0.001, 0.999, col, fill=False, ymax=top, dash=dash)
        body += c
    body += legend([(INDIGO, "1 and 1"), (GOLD, "2 and 6"), (TEAL, "6 and 6"), (PURPLE, "9 and 3")])
    body.append(caption("A belief about an unknown chance. The two numbers count yeses and noes, both starting at 1, and more of either narrows the shape."))
    return wrap(body, "Beta distribution at four parameter settings")

# 12. Power law vs exponential tail, on a log height axis
def d_powerlaw():
    xmin, xmax = 1, 12
    ylo, yhi = 1e-4, 2.0
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    def py(v):
        v = max(v, ylo / 2)
        return AXIS - (math.log(v) - math.log(ylo)) / (math.log(yhi) - math.log(ylo)) * (AXIS - Y0)
    body = frame(xticks(xmin, xmax, [1, 2, 4, 6, 8, 10, 12]), "how often, each line ten times the one below")
    for v, lab in [(1.0, "1"), (0.1, "1/10"), (0.01, "1/100"), (0.001, "1/1000"), (0.0001, "1/10000")]:
        body.append(f'<line x1="{X0}" y1="{py(v):.1f}" x2="{X1}" y2="{py(v):.1f}" stroke="rgba(130,130,130,.16)"/>')
        body.append(f'<text x="{X0-4}" y="{py(v)+3.5:.1f}" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">{lab}</text>')
    for f, col, dash, width in [(lambda x: pareto_pdf(x, 1.6, 1.0), TAN, None, 1.9),
                                (lambda x: expon_pdf(x - 1, 1.6), INDIGO, "5 4", 1.5)]:
        pts = []
        for i in range(161):
            x = xmin + (xmax - xmin) * i / 160
            y = py(f(x))
            if y > AXIS: break
            pts.append(f"{px(x):.1f},{y:.1f}")
        da = f' stroke-dasharray="{dash}"' if dash else ""
        body.append(f'<path d="M' + " L".join(pts) + f'" fill="none" stroke="{col}" stroke-width="{width}"{da}/>')
    body += legend([(TAN, "power law"), (INDIGO, "exponential")])
    body.append(f'<text x="{px(6.4):.1f}" y="{AXIS-14:.1f}" font-size="10.5" fill="currentColor" opacity=".58">the dashed line has already left the bottom of the chart</text>')
    body.append(caption("Each grey line is a tenth of the one above it. The dashed tail is gone by 7. The solid one is still there at 12."))
    return wrap(body, "Power law tail against an exponential tail on a log height axis")

# 13. Weibull hazard shapes
def d_weibull():
    xmin, xmax = 0, 3
    body = frame(xticks(xmin, xmax, [0, .5, 1, 1.5, 2, 2.5, 3]), "density")
    top = 1.60
    for k, col, dash in [(0.7, GOLD, "5 4"), (1.0, INDIGO, None), (2.5, TEAL, "2 3")]:
        c, _ = curve(lambda x, k=k: weibull_pdf(max(x, 0.06), k, 1.0), xmin, xmax, col, fill=(k == 1.0), ymax=top, opacity=.10, dash=dash)
        body += c
    body += legend([(GOLD, "k = 0.7, danger falls with age"), (INDIGO, "k = 1, danger flat"), (TEAL, "k = 2.5, danger rises with age")])
    body.append(caption("Time until something fails, with one dial for whether surviving this long makes the next moment safer or more dangerous."))
    return wrap(body, "Weibull distribution at three shape settings")

# 14. t vs normal tails
def d_student_t():
    xmin, xmax = -5, 5
    body = frame(xticks(xmin, xmax, [-4, -3, -2, -1, 0, 1, 2, 3, 4]), "density")
    top = norm_pdf(0)
    c1, _ = curve(norm_pdf, xmin, xmax, INDIGO, ymax=top, opacity=.10)
    c2, _ = curve(lambda x: t_pdf(x, 3), xmin, xmax, GOLD, fill=False, ymax=top, width=1.8)
    body += c1 + c2
    body += legend([(INDIGO, "normal"), (GOLD, "t, 3 degrees of freedom")])
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    body.append(f'<circle cx="{px(3.5):.1f}" cy="{AXIS-7:.1f}" r="15" fill="none" stroke="{GOLD}" stroke-opacity=".45" stroke-dasharray="3 3"/>')
    body.append(f'<text x="{px(3.5)-22:.1f}" y="{AXIS-32:.1f}" font-size="10.5" fill="currentColor" opacity=".6" text-anchor="middle">far-out values stay possible</text>')
    body.append(caption("Same middle, thicker ends. A small sample produces these ends, so its extreme readings are less surprising than they look."))
    return wrap(body, "Student t distribution against the normal")

# 15. Time of day rate curve
def d_circadian():
    xmin, xmax = 0, 24
    def rate(h):
        return (0.06
                + 0.55 * math.exp(-0.5 * ((h - 12.3) / 2.6) ** 2)
                + 1.00 * math.exp(-0.5 * ((h - 21.0) / 2.2) ** 2)
                + 0.30 * math.exp(-0.5 * ((h - 8.2) / 1.3) ** 2))
    def px(x): return X0 + (X1 - X0) * (x - xmin) / (xmax - xmin)
    body = frame(xticks(xmin, xmax, [0, 3, 6, 9, 12, 15, 18, 21, 24], lambda v: f"{int(v):02d}"), "messages sent per hour")
    body.append(f'<rect x="{px(0):.1f}" y="{Y0}" width="{px(6.5)-px(0):.1f}" height="{AXIS-Y0}" fill="rgba(130,130,130,.08)"/>')
    body.append(f'<text x="{px(3.2):.1f}" y="{Y0+16}" font-size="10.5" fill="currentColor" opacity=".5" text-anchor="middle">asleep</text>')
    c, top = curve(rate, xmin, xmax, TEAL)
    body += c
    for h, lab in [(8.2, "commute"), (12.3, "lunch"), (21.0, "evening")]:
        body.append(f'<text x="{px(h):.1f}" y="{AXIS - rate(h)/top*(AXIS-Y0) - 9:.1f}" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="middle">{lab}</text>')
    body.append(caption("One person's sending rate across a day. A bot that sends at a flat rate through the night is caught by this shape alone."))
    return wrap(body, "Message rate across the hours of a day")

# 16. Zipf over contacts
def d_zipf():
    n = 20
    vals = [1.0 / (i + 1) ** 1.1 for i in range(n)]
    tot = sum(vals)
    vals = [v / tot for v in vals]
    top = vals[0] * 1.30
    b, sp = bars([v / top for v in vals], PURPLE)
    body = frame([(X0 + i * sp + sp / 2, str(i + 1)) for i in range(0, n, 1)], "share of all messages sent") + b
    share = sum(vals[:3]) * 100
    body.append(f'<text x="{X0+2.6*sp:.1f}" y="{Y0+16}" font-size="10.5" fill="currentColor" opacity=".62">the top three contacts take {share:.0f} percent of everything sent</text>')
    body.append(caption("Contacts ranked by how much gets written to them. Rank 1 takes about twice rank 2 and about three times rank 3."))
    return wrap(body, "Ranked share of message volume by contact")

write("bernoulli", d_bernoulli())
write("binomial", d_binomial())
write("poisson", d_poisson())
write("nbinom", d_nbinom())
write("geometric", d_geometric())
write("uniform", d_uniform())
write("normal", d_normal())
write("lognormal", d_lognormal())
write("exponential", d_exponential())
write("gamma", d_gamma())
write("beta", d_beta())
write("powerlaw", d_powerlaw())
write("weibull", d_weibull())
write("student_t", d_student_t())
write("circadian", d_circadian())
write("zipf", d_zipf())
print("wrote", len(os.listdir(OUT)), "svg files")


# ==================== concept maps and the message simulation ====================

TEAL, INDIGO, GOLD, PURPLE, TAN = "#2f9e8f", "#5b6cb0", "#c69234", "#8156a6", "#b0895e"
RGB = {TEAL: "47,158,143", INDIGO: "91,108,176", GOLD: "198,146,52",
       PURPLE: "129,86,166", TAN: "176,137,94"}
GREY = "rgba(130,130,130,.35)"

def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def box(x, y, w, h, label, color, sub=None, fs=11, tip=None, weight="600"):
    o = []
    if tip: o.append(f'<g style="cursor:help"><title>{esc(tip)}</title>')
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" '
             f'fill="rgba({RGB[color]},.08)" stroke="{color}" stroke-opacity=".55"/>')
    ty = y + h / 2 + (0 if not sub else -4)
    o.append(f'<text x="{x+w/2}" y="{ty+4}" font-size="{fs}" font-weight="{weight}" fill="currentColor" text-anchor="middle">{esc(label)}</text>')
    if sub:
        o.append(f'<text x="{x+w/2}" y="{ty+18}" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">{esc(sub)}</text>')
    if tip: o.append('</g>')
    return o

MARKER = "ar"


def arrow(x1, y1, x2, y2, color="rgba(130,130,130,.5)", label=None, dash=None, curve=0):
    da = f' stroke-dasharray="{dash}"' if dash else ""
    if curve:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2 + curve
        d = f"M{x1},{y1} Q{mx},{my} {x2},{y2}"
    else:
        d = f"M{x1},{y1} L{x2},{y2}"
    o = [f'<path d="{d}" fill="none" stroke="{color}" stroke-width="1.2"{da} marker-end="url(#{MARKER})"/>']
    if label:
        lx, ly = (x1 + x2) / 2, (y1 + y2) / 2 + (curve * .55) - 5
        o.append(f'<text x="{lx}" y="{ly}" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">{esc(label)}</text>')
    return o

def svg(body, w, h, label):
    defs = (f'<defs><marker id="{MARKER}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" '
            'orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>')
    return (f'<svg viewBox="0 0 {w} {h}" width="{w}" xmlns="http://www.w3.org/2000/svg" role="img" '
            f'aria-label="{label}" style="max-width:100%;height:auto">\n  {defs}\n  ' + "\n  ".join(body) + "\n</svg>\n")

def write(name, s):
    open(os.path.join(OUT, name + ".svg"), "w").write(s)

# ---------------- 1. the chooser ----------------
def chooser():
    W = 680
    groups = [
        ("A count of how many", TEAL, [
            ("one yes-or-no try", "Bernoulli", "One trial with a fixed chance of yes."),
            ("a fixed number of tries", "Binomial", "Count of yeses out of n independent tries at the same chance."),
            ("a window of time, steady rate", "Poisson", "Count of events in a window when events do not affect each other."),
            ("a window of time, clumpy", "Negative binomial", "Poisson counts whose rate itself varies. More zeros and more big days."),
            ("tries until the first yes", "Geometric", "Number of tries up to and including the first success."),
        ]),
        ("A length of waiting", GOLD, [
            ("until the next event", "Exponential", "Gap between Poisson events. Memoryless: waiting longer buys nothing."),
            ("until the k-th event", "Gamma", "Sum of k exponential gaps."),
            ("until a thing gives out", "Weibull", "Failure time where the danger rises or falls with age."),
        ]),
        ("A measured amount", INDIGO, [
            ("many small effects added", "Normal", "Sums of many independent small contributions."),
            ("many small factors multiplied", "Log-normal", "Products of many independent small factors. Positive, right-skewed."),
            ("a few giants carry the total", "Power law", "Pareto. The largest few items dominate the sum."),
            ("an average from a small sample", "Student's t", "Normal shape with thicker ends, from estimating the spread on few points."),
        ]),
        ("A choice or a share", PURPLE, [
            ("one of several named options", "Categorical", "Pick one label out of k, each with its own chance."),
            ("a proportion you are unsure about", "Beta", "A distribution over a probability between 0 and 1."),
            ("anywhere in a range, no preference", "Uniform", "Every value in the range equally likely."),
        ]),
    ]
    RH, GAP = 27, 16
    y = 34
    body = []
    body.append(f'<text x="12" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">WHAT THE NUMBER IS</text>')
    body.append(f'<text x="212" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">WHAT MAKES IT</text>')
    body.append(f'<text x="500" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">THE SHAPE</text>')
    for gname, col, leaves in groups:
        gh = len(leaves) * RH - 5
        body += box(12, y, 186, gh, gname, col, fs=11)
        for i, (cond, dist, tip) in enumerate(leaves):
            ly = y + i * RH
            body.append(f'<line x1="198" y1="{ly+11}" x2="210" y2="{ly+11}" stroke="{GREY}"/>')
            body.append(f'<text x="214" y="{ly+15}" font-size="10.5" fill="currentColor" opacity=".78">{esc(cond)}</text>')
            body.append(f'<line x1="492" y1="{ly+11}" x2="500" y2="{ly+11}" stroke="{GREY}"/>')
            body.append(f'<rect x="502" y="{ly+1}" width="166" height="21" rx="4" fill="rgba({RGB[col]},.10)" stroke="{col}" stroke-opacity=".5"/>')
            body.append(f'<g style="cursor:help"><title>{esc(tip)}</title>'
                        f'<text x="585" y="{ly+15.5}" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">{esc(dist)}</text></g>')
        y += gh + GAP
    return svg(body, W, y + 4, "Chooser from what the number is to which distribution fits")

# ---------------- 2. family map ----------------
def family():
    W, H = 680, 380
    b = []
    def n(x, y, w, h, lab, col, tip, sub=None):
        return box(x, y, w, h, lab, col, sub=sub, tip=tip)
    b += n(24, 20, 126, 40, "Bernoulli", TEAL, "One yes-or-no trial. Every other counting shape is built from repeats of this.", "one yes-or-no try")
    b += n(24, 104, 126, 40, "Binomial", TEAL, "Count of yeses in n fixed tries.", "count over n tries")
    b += n(24, 188, 126, 40, "Beta", PURPLE, "A distribution over the chance p itself. Update it with yeses and noes.", "the chance itself")
    b += n(24, 288, 126, 40, "Geometric", TEAL, "Tries until the first yes.", "tries to first yes")
    b += n(272, 104, 136, 40, "Poisson", TEAL, "Count of events in a window at a steady rate.", "count in a window")
    b += n(272, 20, 136, 40, "Normal", INDIGO, "Sums of many small independent effects.", "sums of many effects")
    b += n(272, 188, 136, 40, "Negative binomial", TEAL, "Poisson whose rate is itself random. Clumpier counts.", "clumpy counts")
    b += n(272, 288, 136, 40, "Exponential", GOLD, "Gap between Poisson events.", "gap to the next event")
    b += n(516, 20, 140, 40, "Log-normal", GOLD, "Exponential of a normal. Products of many small factors.", "products of factors")
    b += n(516, 104, 140, 40, "Student's t", INDIGO, "Normal with the spread estimated from few points.", "small-sample normal")
    b += n(516, 288, 140, 40, "Gamma", GOLD, "Sum of k exponential gaps.", "wait for the k-th")
    b += arrow(150, 40, 272, 40, label="add up many", curve=-16)
    b += arrow(87, 60, 87, 104, label=None)
    b += arrow(150, 124, 272, 124, label="n large, p small")
    b += arrow(87, 188, 87, 148, label=None)
    b.append('<text x="96" y="172" font-size="9.5" fill="currentColor" opacity=".6">the chance p, drawn</text>')
    b += arrow(150, 308, 272, 308, label="continuous cousin")
    b += arrow(340, 144, 340, 188, label=None)
    b += arrow(408, 40, 516, 40, label="exponentiate", curve=-14)
    b += arrow(408, 124, 516, 124, label="estimate the spread")
    b += arrow(408, 308, 516, 308, label="add k of them")
    b.append('<text x="340" y="170" font-size="9.5" fill="currentColor" opacity=".55" text-anchor="middle">rate itself varies</text>')
    b.append('<text x="24" y="360" font-size="10" fill="currentColor" opacity=".55">Hover any box for what it is. Follow an arrow to see what one change to the story does to the shape.</text>')
    return svg(b, W, H, "How the distributions turn into each other")

# ---------------- 3. bot layer stack ----------------
random.seed(7)

def circ_rate(h):
    return (0.05 + 0.55 * math.exp(-0.5 * ((h - 12.3) / 2.6) ** 2)
            + 1.00 * math.exp(-0.5 * ((h - 21.0) / 2.2) ** 2)
            + 0.30 * math.exp(-0.5 * ((h - 8.2) / 1.3) ** 2))

def sample_layered():
    """Sessions arrive as a Poisson process whose rate follows the day. Inside a
    session, gaps are log-normal and the burst length is heavy-tailed."""
    peak = max(circ_rate(m / 60.0) for m in range(0, 24 * 60))
    peak_sessions = 1.15                      # sessions per hour at the day's busiest point
    starts, t = [], 0.0
    while True:
        t += random.expovariate(peak_sessions)
        if t >= 24: break
        if random.random() < circ_rate(t) / peak:
            starts.append(t)
    msgs = []
    for st in starts:
        k = 1 + int(random.expovariate(1 / 4.2))
        t = st
        for _ in range(min(k, 20)):
            if t >= 24: break
            msgs.append(t)
            t += math.exp(random.gauss(math.log(0.75 / 60.0), 0.8))   # minutes, held in hours
    return sorted(msgs), starts


def bot_timelines():
    W, H = 680, 288
    X0, X1 = 52, 660
    def px(h): return X0 + (X1 - X0) * h / 24.0
    b = []
    msgs, starts = sample_layered()
    flat = sorted(random.uniform(0, 24) for _ in range(len(msgs)))
    b.append(f'<rect x="{px(0):.1f}" y="60" width="{px(6.5)-px(0):.1f}" height="86" fill="rgba(130,130,130,.07)"/>')
    peak = max(circ_rate(i * 24 / 240) for i in range(241))
    pts = [f"{px(i*24/240):.1f},{54 - circ_rate(i*24/240)/peak*30:.1f}" for i in range(241)]
    b.append(f'<path d="M{X0},54 L' + " L".join(pts) + f' L{X1},54 Z" fill="rgba({RGB[TEAL]},.10)" stroke="{TEAL}" stroke-opacity=".45" stroke-width="1.2"/>')
    b.append('<text x="52" y="16" font-size="9.5" font-weight="700" letter-spacing=".08em" fill="currentColor" opacity=".45">HOW LIKELY A CONVERSATION IS TO START, HOUR BY HOUR</text>')
    for lab, series, col, base in [("a flat rate all day", flat, TAN, 100), ("the day rate, then bursts, then gaps", msgs, TEAL, 146)]:
        b.append(f'<line x1="{X0}" y1="{base}" x2="{X1}" y2="{base}" stroke="{GREY}"/>')
        b.append(f'<text x="{X0}" y="{base-24}" font-size="10.5" font-weight="600" fill="currentColor" opacity=".75">{esc(lab)}</text>')
        b.append(f'<text x="{X1}" y="{base-24}" font-size="10" fill="currentColor" opacity=".5" text-anchor="end">{len(series)} messages</text>')
        for m in series:
            b.append(f'<line x1="{px(m):.1f}" y1="{base-17}" x2="{px(m):.1f}" y2="{base}" stroke="{col}" stroke-opacity=".75" stroke-width="1.3"/>')
    for h in range(0, 25, 3):
        b.append(f'<line x1="{px(h):.1f}" y1="146" x2="{px(h):.1f}" y2="150" stroke="{GREY}"/>')
        b.append(f'<text x="{px(h):.1f}" y="163" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">{h:02d}</text>')
    # zoom on the longest burst
    best, bestn = starts[0], 0
    for st in starts:
        n = sum(1 for m in msgs if st <= m < st + 8 / 60.0)
        if n > bestn: best, bestn = st, n
    z0, z1 = best - 1 / 60.0, best + 11 / 60.0
    def zx(h): return X0 + (X1 - X0) * (h - z0) / (z1 - z0)
    b.append(f'<line x1="{px(z0):.1f}" y1="146" x2="{X0}" y2="196" stroke="{GREY}" stroke-dasharray="3 3"/>')
    b.append(f'<line x1="{px(z1):.1f}" y1="146" x2="{X1}" y2="196" stroke="{GREY}" stroke-dasharray="3 3"/>')
    b.append(f'<text x="{X0}" y="192" font-size="10.5" font-weight="600" fill="currentColor" opacity=".75">twelve minutes of that second row, opened up</text>')
    b.append(f'<line x1="{X0}" y1="238" x2="{X1}" y2="238" stroke="{GREY}"/>')
    for m in msgs:
        if z0 <= m <= z1:
            b.append(f'<line x1="{zx(m):.1f}" y1="212" x2="{zx(m):.1f}" y2="238" stroke="{TEAL}" stroke-opacity=".8" stroke-width="1.6"/>')
    for mm in range(0, 13, 2):
        h = z0 + mm / 60.0
        if h > z1: break
        b.append(f'<line x1="{zx(h):.1f}" y1="238" x2="{zx(h):.1f}" y2="242" stroke="{GREY}"/>')
        b.append(f'<text x="{zx(h):.1f}" y="255" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">+{mm} min</text>')
    b.append(f'<text x="{X0}" y="278" font-size="10.5" fill="currentColor" opacity=".62">Same count on both day rows. The flat sender writes at 04:00, and its gaps never gather into a conversation.</text>')
    return svg(b, W, H, "A day of messages from a flat-rate sender against a layered model, with one burst opened up")

# ---------------- 4. reply delay, log axis ----------------
def reply_delay():
    W, H = 680, 226
    X0, X1, Y0, AXIS = 52, 656, 22, 158
    b = []
    # log seconds from 1s to 24h
    lo, hi = math.log(2), math.log(86400)
    def px(sec): return X0 + (X1 - X0) * (math.log(sec) - lo) / (hi - lo)
    def dens(u):        # u = log seconds
        a = math.exp(-0.5 * ((u - math.log(25)) / 0.95) ** 2)      # in-conversation replies
        c = math.exp(-0.5 * ((u - math.log(9000)) / 1.25) ** 2)    # replies after the thread went quiet
        return 0.78 * a + 0.34 * c
    pts = []
    N = 200
    top = max(dens(lo + (hi - lo) * i / N) for i in range(N + 1))
    for i in range(N + 1):
        u = lo + (hi - lo) * i / N
        pts.append(f"{X0 + (X1-X0)*i/N:.1f},{AXIS - dens(u)/top*(AXIS-Y0):.1f}")
    d = "M" + " L".join(pts)
    b.append(f'<path d="{d} L{X1},{AXIS} L{X0},{AXIS} Z" fill="rgba({RGB[GOLD]},.13)"/>')
    b.append(f'<path d="{d}" fill="none" stroke="{GOLD}" stroke-width="1.8"/>')
    b.append(f'<line x1="{X0}" y1="{AXIS}" x2="{X1}" y2="{AXIS}" stroke="{GREY}"/>')
    for sec, lab in [(2, "2s"), (10, "10s"), (60, "1 min"), (600, "10 min"), (3600, "1 hr"), (21600, "6 hr"), (86400, "1 day")]:
        b.append(f'<line x1="{px(sec):.1f}" y1="{AXIS}" x2="{px(sec):.1f}" y2="{AXIS+4}" stroke="{GREY}"/>')
        b.append(f'<text x="{px(sec):.1f}" y="{AXIS+17}" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">{lab}</text>')
    b.append(f'<text x="4" y="{Y0-6}" font-size="9" fill="currentColor" opacity=".45" letter-spacing=".06em">density</text>')
    b.append(f'<text x="{px(4):.1f}" y="{Y0+34}" font-size="10.5" fill="currentColor" opacity=".65" text-anchor="start">thread is live</text>')
    b.append(f'<text x="{px(9000):.1f}" y="{AXIS-58}" font-size="10.5" fill="currentColor" opacity=".65" text-anchor="middle">thread went quiet, answered later</text>')
    b.append(f'<text x="{X0}" y="194" font-size="10.5" fill="currentColor" opacity=".62">Reply delay on a log scale. Two humps, not one, so a single log-normal draw misses the slow half.</text>')
    return svg(b, W, H, "Reply delay on a log time axis showing two humps")

for _name, _fn in [("chooser", chooser), ("family", family), ("bot_timelines", bot_timelines), ("reply_delay", reply_delay)]:
    MARKER = "ar-" + _name.replace("_", "-")
    write(_name, _fn())
print("ok")


# ==================== injection into the page ====================
def inject(path):
    src = open(path).read()
    seen = []

    def repl(mo):
        name = mo.group(1)
        f = os.path.join(OUT, name + ".svg")
        if not os.path.exists(f):
            raise SystemExit("no diagram named " + name)
        seen.append(name)
        return "<!-- diagram:%s -->\n%s\n<!-- /diagram -->" % (name, open(f).read().rstrip())

    import re
    out = re.sub(r"<!-- diagram:([a-z_]+) -->.*?<!-- /diagram -->", repl, src, flags=re.S)
    open(path, "w").write(out)
    print("injected %d diagrams into %s" % (len(seen), path))


if "--inject" in sys.argv:
    inject(sys.argv[sys.argv.index("--inject") + 1])
