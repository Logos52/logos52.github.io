#!/usr/bin/env python3
"""
regen-check.py — mechanical verification for a regenerated wiki page.

Every guarantee that can be computed from the files is computed HERE, outside the
generating agent. The agent's self-grade is then responsible only for what a machine
cannot judge: whether the prose reads well.

TWO LAYERS (from 02 - System/Two Egos QA.md, 2026-08-10). Checks marked hard=True are
verdicts: they compute a fact from the files and a failure is a failure. Checks marked
hard=False are a WORKLIST for the judgment pass — flags are candidates, never verdicts,
and an empty worklist is not a pass.

NO FLAG GRADUATES TO A VERDICT WITHOUT A VALIDATED BASIS. Validation means: run the
proposed threshold against the accepted exemplars and the rejected specimens, and keep it
only if accepted output passes and rejected output fails. Recorded failure of this rule:
cadence.density shipped with a threshold of 6.0/1000 on 2026-08-13, then scored the two
accepted exemplars at 13.0 and 14.0 — higher than any regenerated draft. It was demoted to
informational the same hour. Patterns extend only from real misses, each citing its sample.

KNOWN FALSE-POSITIVE CLASSES, kept on record rather than silently tolerated:
  - use-mention: a page discussing a tell fires that tell (The Two Meanings of Ego's body
    flagged four times for naming humblebragging and humility).
  - auxiliary "I'm" inside event narration ("voiced before I'm downstairs") reads as an
    event, not a self-description.
  - shared phrase-runs that are terms of art, proper nouns, or quoted sources.

Usage:
    python3 scripts/regen-check.py --original <path> --draft <path>
                                   [--bank <path>] [--droplog <path>]
                                   [--result <agent-result.json>]
                                   [--json]

Exit 0 = all checks pass. Exit 1 = at least one FAIL.
"""
import argparse, json, os, re, sys

# ---------------------------------------------------------------- thresholds
MAX_SHARED_PASSAGES = 3    # distinct surviving passages allowed (not n-grams — see check 3)
NGRAM_N = 10
MAX_OPENER_WORDS = 45
MAX_OPENER_SUBCLAUSES = 1
MAX_OPENING_TERMS = 1      # L20a
MAX_GROWTH_CLEAN = 1.5     # a page the census scored clean must not exceed this

SUBORDINATORS = r'\b(which|that|because|while|although|though|since|whereas|unless|until|after|before|if|when|so that|even though)\b'


# ---------------------------------------------------------------- utilities
def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()


def strip_frontmatter(t):
    if t.startswith('---'):
        parts = t.split('---', 2)
        if len(parts) > 2:
            return parts[2]
    return t


def body_only(t):
    """Body prose with code fences, tables, the Sources section and link targets removed."""
    t = strip_frontmatter(t)
    t = re.sub(r'```.*?```', ' ', t, flags=re.S)          # code fences
    t = re.sub(r'<svg.*?</svg>', ' ', t, flags=re.S | re.I)  # inline diagrams
    t = re.sub(r'<[^>]+>', ' ', t)                        # any other markup
    t = re.sub(r'^\s*\|.*$', ' ', t, flags=re.M)          # tables
    t = re.split(r'^##+\s*Sources\b', t, flags=re.M)[0]   # sources footer
    # Related/See-also blocks are link text, not prose. Excluded after 2026-08-13: eight of
    # eight shared runs on the page Wedge ranked best came from a Related line plus one
    # enumeration of named techniques — the "terms of art and proper nouns" false-positive
    # class the Two Egos QA already had on record.
    t = re.split(r'^##+\s*(?:Related|See also|Related Pages)\b', t, flags=re.M | re.I)[0]
    # a comma list of four or more named items is an enumeration, not composed prose
    t = re.sub(r'^[^\n.]*?(?:[^,\n]{3,40},\s+){3,}[^,\n]{3,40}[^\n]*$', ' ', t, flags=re.M)
    # Link text and its trailing annotation clause are not composed prose. Dropping the
    # whole line after 2026-08-13: inline link annotations produced 5 of 6 "shared runs"
    # on one A/B/C arm, the third false-positive class of the night.
    t = re.sub(r'^[^\n]*\[\[[^\n]*$', ' ', t, flags=re.M)
    t = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', ' ', t)
    t = re.sub(r'\[\[([^\]]+)\]\]', ' ', t)
    return t


def words(t):
    return re.findall(r"[A-Za-z0-9']+", t.lower())


def ngrams(t, n=NGRAM_N):
    w = words(t)
    return set(tuple(w[i:i + n]) for i in range(max(0, len(w) - n + 1)))


def outbound_links(t):
    return set(m.split('|')[0].strip() for m in re.findall(r'\[\[([^\]]+)\]\]', t))


def first_paragraph(t):
    t = strip_frontmatter(t)
    t = re.sub(r'^>.*$', '', t, flags=re.M)               # callout lines
    t = re.sub(r'^#\s+.*$', '', t, count=1, flags=re.M)   # H1
    for block in (b.strip() for b in t.split('\n\n')):
        if block and not block.startswith(('#', '|', '>', '`')) and len(block) > 60:
            return block
    return ''


def first_sentence(p):
    m = re.split(r'(?<=[.!?])\s+', p.strip())
    return m[0] if m else ''


# ---------------------------------------------------------------- checks
def check(name, ok, detail, hard=True):
    return {'check': name, 'status': 'PASS' if ok else ('FAIL' if hard else 'WARN'), 'detail': detail}


def run_checks(orig_p, draft_p, bank_p=None, droplog_p=None, result=None, census_clean=False):
    orig, draft = read(orig_p), read(draft_p)
    out = []

    # 1. link preservation.
    # Two classes are NOT losses and are excluded after 2026-08-13, when all three
    # failures in one arm of the A/B/C test turned out to be one or the other:
    #   - a self-link (the original links to its own path); dropping it is correct
    #   - a link whose target file does not exist; the original was already broken,
    #     and carrying a dead link forward is not preservation
    self_stem = os.path.splitext(os.path.relpath(os.path.abspath(orig_p), os.path.dirname(
        os.path.dirname(os.path.abspath(__file__)))))[0]
    lo, ld = outbound_links(orig), outbound_links(draft)
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    real_lost, excused = [], []
    for t in sorted(lo - ld):
        tgt = t.strip()
        if tgt == self_stem:
            excused.append(f'{tgt} (self-link)')
        elif tgt.startswith('wiki/') and not os.path.exists(os.path.join(root, tgt + '.md')):
            excused.append(f'{tgt} (target does not exist)')
        else:
            real_lost.append(tgt)
    # A third excused class, added 2026-08-14: a link DROPPED ON THE RECORD. The lane's own
    # law lets a bank order a link dropped with a reason (validated cases: ICS System's
    # Neuroticism target, dropped on the bank's instruction; Bear Hunter System's
    # wiki/Syntheses/ICS System target, dropped under the provenance law). The droplog line
    # must contain the exact target string AND the word "drop" — a silently lost link still fails.
    if droplog_p and os.path.exists(droplog_p):
        _dl = read(droplog_p)
        _still = []
        for t in real_lost:
            if any(t in _line and 'drop' in _line.lower() for _line in _dl.splitlines()):
                excused.append(f'{t} (dropped on the record in the droplog)')
            else:
                _still.append(t)
        real_lost = _still
    detail = f'{len(lo)} original links, {len(real_lost)} lost'
    if real_lost:
        detail += f': {real_lost}'
    if excused:
        detail += f' — {len(excused)} excused: {excused}'
    out.append(check('links.preserved', not real_lost, detail))

    # 2. links annotated
    rel = re.split(r'^##+\s*(Related|See also|Related Pages)\b', draft, flags=re.M | re.I)
    ann_total = ann_ok = 0
    if len(rel) > 2:
        for line in rel[-1].splitlines():
            if '[[' in line:
                ann_total += 1
                after = re.sub(r'^\s*[-*]\s*\[\[[^\]]+\]\]', '', line).strip()
                if len(after) > 12:
                    ann_ok += 1
    out.append(check('links.annotated', ann_total == 0 or ann_ok == ann_total,
                     f'{ann_ok}/{ann_total} links in the Related block carry a clause'))

    # 3. prose regenerated, not edited.
    # Counted in PASSAGES, not n-grams. A sliding window reports one surviving 14-word
    # passage as five overlapping 10-grams, which inflates the count fivefold and makes the
    # threshold meaningless. Fixed 2026-08-13 after 11 n-grams on one A/B/C arm collapsed
    # into two passages, one a three-item list of causes and one a quoted self-talk line.
    ow, dw = words(body_only(orig)), words(body_only(draft))
    oset = ngrams(body_only(orig))
    spans, i = [], 0
    while i <= len(dw) - NGRAM_N:
        if tuple(dw[i:i + NGRAM_N]) in oset:
            j = i + NGRAM_N
            while j < len(dw) and tuple(dw[j - NGRAM_N + 1:j + 1]) in oset:
                j += 1
            spans.append(' '.join(dw[i:j]))
            i = j
        else:
            i += 1
    longest = max((len(s.split()) for s in spans), default=0)
    total = sum(len(s.split()) for s in spans)
    pct = 100.0 * total / max(1, len(dw))
    # HARD FAIL only at a length no list or quoted script in this corpus reaches. Everything
    # below it is a WORKLIST, per the Two Egos QA rule that no flag becomes a verdict without
    # a validated basis. Validation, 2026-08-13: a file against itself yields one 372-word
    # span (fails, correctly); the longest legitimate carryover found in any accepted draft is
    # a 17-word three-item list of causes and a quoted self-talk line (must not fail). No
    # threshold between 18 and 371 separates those two classes by length, because what
    # actually separates them is whether the span is composed prose or an enumeration — which
    # is semantic. So the hard line sits at 40, well clear of every legitimate case, and the
    # judgment pass rules everything under it.
    out.append(check('prose.regenerated', longest < 40,
                     f'{len(spans)} surviving passages, longest {longest} words, {total} words '
                     f'total ({pct:.1f}% of the draft)'
                     + (f' — "{max(spans, key=len)[:70]}…"' if spans else '')
                     + ('  [hard fail: composed prose carried over]' if longest >= 40 else
                        '  [WORKLIST — under the hard line; judgment pass rules]')))

    # 4. opener limits
    p1 = first_paragraph(draft)
    s1 = first_sentence(p1)
    n_words = len(words(s1))
    n_sub = len(re.findall(SUBORDINATORS, s1, flags=re.I))
    has_link = '[[' in s1
    ok = n_words <= MAX_OPENER_WORDS and not has_link
    out.append(check('opener.limits', ok,
                     f'{n_words} words (max {MAX_OPENER_WORDS}), wikilink in sentence one: {has_link}'))
    # Subordinate-clause count DEMOTED to worklist 2026-08-13: the owner-accepted Good Faith
    # opener (a primed value-page intro, picked verbatim) carries two subordinators in sentence
    # one. An accepted exemplar failing a hard check invalidates the threshold as a verdict
    # (this file's own Two Egos QA rule). Words and wikilink stay hard — the exemplar passes both.
    out.append(check('opener.subclauses', n_sub <= MAX_OPENER_SUBCLAUSES,
                     f'{n_sub} subordinate clauses (advisory max {MAX_OPENER_SUBCLAUSES})', hard=False))

    # 5. L20a — opening paragraph is not a glossary
    defs = re.findall(r'\b([A-Z][A-Za-z\- ]{2,40}?)\s+(?:is|means|refers to)\s+(?:a|an|the|study|real|silent)\b', p1)
    bolds = re.findall(r'\*\*([^*]+)\*\*', p1)
    n_terms = len(set(d.strip().lower() for d in defs)) + len(set(b.strip().lower() for b in bolds))
    # DEMOTED to worklist 2026-08-13: on primed multi-sentence intros (ruled in the same day)
    # claim sentences ("The cost is the working part") false-positive as definitions; the
    # owner-accepted Good Faith opener scores 2. Judgment pass rules.
    out.append(check('opening.terms', n_terms <= MAX_OPENING_TERMS,
                     f'{n_terms} terms defined in the opening paragraph (advisory max {MAX_OPENING_TERMS})'
                     + (f': {sorted(set(d.strip() for d in defs))[:4]}' if defs else ''), hard=False))

    # 5b. Stock-generality opener — WORKLIST, never a verdict (Two Egos QA rule).
    # The recurring struck family: a universal quantifier over persons doing a generic thing
    # as the page's first sentence. Validation, 2026-08-13: catches Rejected Specimens #17
    # ("Some people count the cost of every sentence…") and #27 ("Everyone manages how they
    # come across"); passes every accepted opener on file (none opens on a person-quantifier;
    # "Most of being considerate…" quantifies the subject, not persons). Owner's law behind
    # it: a bird's-eye opener still carries the page's own angle — wide and empty is a strike.
    stock = re.match(r'^(Everyone|Everybody|We all|Most people|Many people|Some people|People|Nobody|No one)\b', s1)
    out.append(check('opener.stock_generality', not stock,
                     (f'sentence one opens on a person-quantifier ("{stock.group(1)}…") — the '
                      f'struck platitude shape (specimens 17, 27); check the angle') if stock
                     else 'no person-quantifier opener', hard=False))

    # 5c. Struck epigram family — HARD. Validated 2026-08-14: matches 6 of 8 owner-named
    # strikes; 0 of 8 shipped replacements. The two misses (generic copular "records
    # spoken words"; empty leftover-strokes) are L20a-i, not this family.
    _aph = (
        r'\blost at the handoff\b', r'\blost in the seams\b', r'\bfocus leaks\b',
        r'\bsigned bet\b', r'\bloses its charge\b', r'\bearns a place\b',
        r'\bspends itself\b', r'\bresolve spends\b',
        r'\braise(?:s)? the cost of the competing\b',
    )
    _aph_hit = next((p for p in _aph if re.search(p, s1, flags=re.I)), None)
    out.append(check('opener.aphorism_specimen', _aph_hit is None,
                     (f'sentence one matches a 2026-08-14 struck epigram ({_aph_hit})')
                     if _aph_hit else 'no struck-epigram specimen in sentence one'))

    # 5d. Inventory assembly — HARD when a droplog exists (Grok write path).
    # Validated 2026-08-14: the 8 replacements each contain a countable noun the
    # page's bank already had; the 8 strikes are shapely and empty. Grok will
    # pass its own pillow test; it will not invent an Inventory section that
    # overlaps S1 unless it actually used the list.
    if droplog_p and os.path.exists(droplog_p):
        _dl = read(droplog_p)
        _inv_block = re.search(
            r'^##\s*Inventory\s*\n((?:[-*]\s+.+\n?)+)', _dl, flags=re.M | re.I)
        if not _inv_block:
            out.append(check('opener.inventory', False,
                             'droplog has no ## Inventory list — Grok S1 is assembled '
                             'from that list, not composed as a claim'))
        else:
            _items = [re.sub(r'^[-*]\s+', '', ln).strip()
                      for ln in _inv_block.group(1).splitlines() if ln.strip()]
            _stop = {
                'that', 'this', 'with', 'from', 'into', 'about', 'after', 'before',
                'between', 'without', 'which', 'where', 'their', 'there', 'then',
                'than', 'them', 'they', 'have', 'been', 'were', 'will', 'would',
                'could', 'should', 'each', 'only', 'also', 'into', 'over',
                'under', 'loss', 'charge', 'place', 'insight', 'seam', 'seams',
                'thread', 'handoff', 'bet', 'odds',
            }
            _inv_toks = set()
            for it in _items:
                for tok in re.findall(r"[A-Za-z0-9\u4e00-\u9fff]{4,}", it.lower()):
                    if tok not in _stop:
                        _inv_toks.add(tok)
            _s1_toks = set(re.findall(r"[A-Za-z0-9\u4e00-\u9fff]{4,}", s1.lower()))
            _overlap = _inv_toks & _s1_toks
            _ok = len(_items) >= 3 and bool(_overlap)
            out.append(check(
                'opener.inventory', _ok,
                (f'Inventory {len(_items)} items, S1 overlap {sorted(_overlap)[:4]}'
                 if _ok else
                 f'Inventory {len(_items)} items, no 4+ letter overlap with sentence one '
                 f'(items must be countable CARRY nouns, and S1 must use one)')))

    # 6. claim coverage
    if bank_p and droplog_p and os.path.exists(bank_p) and os.path.exists(droplog_p):
        bank, dl = read(bank_p), read(droplog_p)
        m = re.search(r'(\d+)\s+claims?', bank, flags=re.I)
        ledger_n = int(m.group(1)) if m else len(re.findall(r'^\s*(?:[-*]|\d+\.)\s+', bank, flags=re.M))
        carried = len(re.findall(r'\bcarried\b', dl, flags=re.I))
        dropped = len(re.findall(r'\bdropped\b', dl, flags=re.I))
        covered = carried + dropped
        out.append(check('claims.covered', covered >= ledger_n * 0.9,
                         f'{covered} claims accounted for in the drop log against ~{ledger_n} in the bank',
                         hard=False))
        undropped = len(re.findall(r'^\s*[-*].*\bdropped\b(?!.*\breason\b)', dl, flags=re.I | re.M))
        out.append(check('claims.drops_have_reasons', undropped == 0,
                         f'{undropped} dropped claims with no stated reason', hard=False))

    # 7. proof of read
    if result and result.get('proofOfRead'):
        bad = []
        for q in result['proofOfRead']:
            src, quote = q.get('source', ''), (q.get('quote') or '').strip()
            if not os.path.exists(src):
                bad.append(f'missing file {src}')
                continue
            hay = ' '.join(read(src).split())
            needle = ' '.join(quote.split())
            if len(needle.split()) < 8:
                bad.append(f'quote under 8 words from {os.path.basename(src)}')
            elif needle not in hay:
                bad.append(f'NOT FOUND in {os.path.basename(src)}: "{needle[:60]}…"')
        out.append(check('proof_of_read', not bad,
                         'all quotes verified verbatim' if not bad else '; '.join(bad)))

    # 8. shape plan matches the draft
    if result and result.get('shapePlan'):
        sp = result['shapePlan']
        heads = [h.strip().lower() for h in re.findall(r'^##\s+(.+)$', draft, flags=re.M)]
        planned = [p.get('part', '').strip().lower() for p in sp.get('parts', [])]
        matched = sum(1 for p in planned if any(w in ' '.join(heads) for w in p.split()[:3] if len(w) > 3))
        out.append(check('shape.plan_matches', not planned or matched >= len(planned) * 0.6,
                         f'{matched}/{len(planned)} planned parts traceable to section headings'))
        out.append(check('shape.terms_declared', sp.get('termsInOpening', 99) <= MAX_OPENING_TERMS,
                         f'generator declared {sp.get("termsInOpening")} terms in the opening'))

    # 8b. cadence — the appended formulation, syntactically visible forms
    prose = body_only(draft)
    prose = re.sub(r'^\s*[-*|].*$', ' ', prose, flags=re.M)   # bullets and tables carry their own rules
    sents = [s.strip() for s in re.split(r'(?<=[.!?])\s+', prose) if len(s.split()) > 5]
    hits = []
    for s in sents:
        # semicolon pair: two independent clauses balanced across a semicolon
        if re.search(r'\w;\s+\w', s) and 8 <= len(s.split()) <= 34:
            hits.append(('semicolon-pair', s))
        # mirrored pair: "X ..., and Y ..." with both halves of similar length and shape
        m = re.match(r'^(.{25,110}?),\s+(?:and|while|but)\s+(.{25,110})$', s)
        if m and 0.72 < len(m.group(1)) / max(1, len(m.group(2))) < 1.38:
            hits.append(('mirrored-pair', s))
        # triad: three comma-separated items closing a sentence
        if re.search(r',\s+[^,]{4,40},\s+(?:and\s+)?[^,]{4,40}[.!?]?$', s) and len(s.split()) <= 30:
            hits.append(('triad', s))
        # trailing appositive after the claim has landed
        if re.search(r'[a-z]\s+—\s+[a-z][^—]{10,70}[.!?]$', s):
            hits.append(('em-dash tail', s))
    # INFORMATIONAL ONLY — no threshold. Calibration failed 2026-08-13: the accepted
    # exemplars score HIGHEST (The Trained Voice 13.0, Bot Operating Rules 14.0 per 1000),
    # higher than any regenerated draft. "Bots watch; the desk changes things" is a semicolon
    # pair and is the accepted thesis of its page. The fault this was meant to catch is
    # whether a figure carries content or decorates it, which is semantic. Reported as data
    # so a human or a specimen-calibrated judge can look; never as a verdict.
    per_1000 = len(hits) / max(1, len(words(prose)) / 1000)
    out.append(check('cadence.density', True,
                     f'{len(hits)} figures, {per_1000:.1f}/1000 words — INFORMATIONAL, uncalibrated '
                     f'(accepted exemplars score 13-14)'
                     + (f'; e.g. [{hits[0][0]}] "{hits[0][1][:60]}…"' if hits else ''),
                     hard=False))

    # 8c. voice — the Two Egos worklist (02 - System/Two Egos QA.md, built 2026-08-10)
    # Two layers, per that protocol: this is the MECHANICAL WORKLIST only. Flags are
    # candidates, never verdicts, and an empty worklist is not a pass — patterns cannot see
    # a staged confession, irony armor, or a scoreboard moved outside by implication. The
    # judgment pass rules every extracted sentence, flagged or not.
    egos = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'check-two-egos.mjs')
    if os.path.exists(egos):
        import subprocess
        try:
            r = subprocess.run(['node', egos, draft_p], capture_output=True, text=True, timeout=40)
            m = re.search(r'(\d+) tell\(s\), (\d+) further first-person', r.stdout)
            tells, fp = (int(m.group(1)), int(m.group(2))) if m else (0, 0)
            out.append(check('voice.two_egos_worklist', True,
                             f'{tells} tells, {fp} further first-person sentences — WORKLIST for the '
                             f'judgment pass, not a verdict; an empty worklist is not a pass',
                             hard=False))
        except Exception as e:
            out.append(check('voice.two_egos_worklist', True, f'not run: {e}', hard=False))

    # 8d. seams — where a regenerated passage joins its neighbours (L8a).
    # WORKLIST, not a verdict: cohesion is semantic and a low lexical overlap can be a
    # perfectly good pivot. Reported so the judgment pass knows where to look.
    paras = [p.strip() for p in re.split(r'\n\s*\n', body_only(draft)) if len(p.split()) > 25]
    STOP = set('the a an and or but of to in on for with is are was were it its this that as at by from be been has have had not no so than then which who what when where'.split())
    cold = []
    for i in range(1, len(paras)):
        prev_tail = set(w for w in words(paras[i - 1][-320:]) if w not in STOP and len(w) > 3)
        head = set(w for w in words(' '.join(paras[i].split()[:26])) if w not in STOP and len(w) > 3)
        if prev_tail and not (prev_tail & head):
            cold.append(' '.join(paras[i].split()[:9]))
    out.append(check('seams.threads_picked_up', True,
                     f'{len(cold)}/{max(0, len(paras) - 1)} paragraph joins share no content word with '
                     f'the previous paragraph — WORKLIST'
                     + (f'; first at "{cold[0]}…"' if cold else ''),
                     hard=False))

    # 8e. private-corpus leak — HARD FAIL, no judgment involved.
    # Ruled 2026-08-13: "the research banks can cite the corpus, but i don't want the published
    # pages to cite the private corpus… i don't want people to see links that lead to paid course
    # content." Banks may cite raw/ freely; a page that ships may not. Audit at the time found 44
    # live pages citing raw/, three of them raw/private/ directly.
    leaks = sorted(set(re.findall(r'raw/private[A-Za-z0-9_./ -]*|raw/[A-Za-z0-9_./ -]{2,}', draft)))
    course = sorted(set(re.findall(r'(?i)\biCanStudy\b|\bcheckpoint videos?\b|\bend-of-stage quiz', draft)))
    bad = leaks + course
    out.append(check('privacy.no_corpus_paths', not bad,
                     'no private-corpus paths or course references'
                     if not bad else f'{len(bad)} leak(s): {bad[:4]}'))

    # 9. frontmatter and sources
    has_fm = draft.startswith('---')
    has_src = bool(re.search(r'^##+\s*Sources\b', draft, flags=re.M))
    out.append(check('frontmatter.and_sources', has_fm and has_src,
                     f'frontmatter: {has_fm}, Sources section: {has_src}'))

    # 10. growth discipline
    wb, wa = len(words(body_only(orig))), len(words(body_only(draft)))
    growth = wa / wb if wb else 0
    if census_clean:
        out.append(check('length.discipline', growth <= MAX_GROWTH_CLEAN,
                         f'{wb} -> {wa} words ({growth:.1f}x); a clean page may not exceed {MAX_GROWTH_CLEAN}x'))
    else:
        out.append(check('length.discipline', True, f'{wb} -> {wa} words ({growth:.1f}x)', hard=False))

    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--original', required=True)
    ap.add_argument('--draft', required=True)
    ap.add_argument('--bank')
    ap.add_argument('--droplog')
    ap.add_argument('--result', help='JSON file with the agent result (proofOfRead, shapePlan)')
    ap.add_argument('--census-clean', action='store_true')
    ap.add_argument('--json', action='store_true')
    a = ap.parse_args()

    result = json.load(open(a.result, encoding='utf-8')) if a.result and os.path.exists(a.result) else None
    checks = run_checks(a.original, a.draft, a.bank, a.droplog, result, a.census_clean)
    failed = [c for c in checks if c['status'] == 'FAIL']

    if a.json:
        print(json.dumps({'page': a.draft, 'verdict': 'FAIL' if failed else 'PASS',
                          'failures': len(failed), 'checks': checks}, indent=1))
    else:
        print(f"\n{os.path.basename(a.draft)}")
        for c in checks:
            mark = {'PASS': '  ok  ', 'FAIL': ' FAIL ', 'WARN': ' warn '}[c['status']]
            print(f"  [{mark}] {c['check']:26s} {c['detail']}")
        print(f"  => {'FAIL' if failed else 'PASS'} ({len(failed)} hard failures)")
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
