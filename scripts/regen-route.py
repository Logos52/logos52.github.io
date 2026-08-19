#!/usr/bin/env python3
"""
regen-route.py — assigns an opening move to every page, deterministically.

Replaces the census's pre-palette guesses. Applies the palette ruling of 2026-08-13:
eight legal moves, two fenced to personal pages, four banned outright. A page routed to
a banned move falls through to the first legal alternative for its genre.

    python3 scripts/regen-route.py --census <dir of census tsv> [--json]
"""
import argparse, csv, glob, json, os, re, sys

# palette ruling 2026-08-13
LEGAL = {1: 'copular definition', 2: 'dated checkable fact', 3: 'plain causal fact',
         4: 'attributed folklore', 5: 'opposing position then flat dissent',
         6: 'retell the object intact', 8: 'definitional stack',
         9: 'unhedged absolute, scope repaired next'}
PERSONAL_ONLY = {7: 'the debt', 11: 'own practice, first person'}
BANNED = {10: 'epistemic preamble', 12: 'real question', 13: 'scope fence',
          14: 'occasion plus deliverable'}

# genre -> ordered fallback chain of legal moves
FALLBACK = {
    'concept':           [1, 3, 8, 4],
    'technique':         [1, 3, 8],
    'system-model':      [8, 1, 3],
    'operational':       [3, 9, 1],
    'synthesis':         [8, 3, 1],
    'hub-index':         [1, 3],
    'reference-catalog': [1, 2],
    'book-note':         [6, 4, 1],
    'personal':          [11, 7, 3],
    'condensed':         [9, 3],
}

# genres where a move is illegal even though the move itself is legal
REJECT = {
    5: {'operational', 'reference-catalog', 'hub-index', 'condensed'},
    6: {'operational', 'reference-catalog', 'hub-index'},
    9: {'personal'},
}


def num(m):
    x = re.match(r'(\d+)', m or '')
    return int(x.group(1)) if x else 0


def route(genre, primary, alt):
    """Return (move_no, move_name, why)."""
    chain = [num(primary), num(alt)] + FALLBACK.get(genre, [1, 3])
    for n in chain:
        if not n:
            continue
        if n in BANNED:
            continue
        if n in PERSONAL_ONLY and genre != 'personal':
            continue
        if genre in REJECT.get(n, set()):
            continue
        if n in LEGAL or (n in PERSONAL_ONLY and genre == 'personal'):
            name = LEGAL.get(n) or PERSONAL_ONLY[n]
            why = 'census primary' if n == num(primary) else (
                'census alternate' if n == num(alt) else f'genre fallback for {genre}')
            return n, name, why
    return 1, LEGAL[1], 'universal fallback'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--census', required=True, help='directory holding census-*.tsv')
    ap.add_argument('--json', action='store_true')
    a = ap.parse_args()

    rows = []
    for f in sorted(glob.glob(os.path.join(a.census, 'census-*.tsv'))):
        for r in csv.DictReader(open(f, encoding='utf-8'), delimiter='\t'):
            if r.get('path'):
                rows.append(r)

    out, changed, banned_rescued = [], 0, 0
    for r in rows:
        n, name, why = route(r['genre'], r.get('move'), r.get('moveAlt'))
        if num(r.get('move')) in BANNED:
            banned_rescued += 1
        if n != num(r.get('move')):
            changed += 1
        out.append({'path': r['path'], 'genre': r['genre'], 'move': n, 'moveName': name,
                    'why': why, 'censusSaid': r.get('move'), 'researchNeed': r.get('researchNeed'),
                    'alreadyCurrent': r.get('alreadyCurrent')})

    if a.json:
        print(json.dumps(out, indent=1, ensure_ascii=False))
    else:
        from collections import Counter
        c = Counter(f"{o['move']}:{o['moveName']}" for o in out)
        print(f'{len(out)} pages routed. {changed} changed from the census. '
              f'{banned_rescued} rescued from a banned move.\n')
        for k, v in c.most_common():
            print(f'{v:5d}  {k}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
