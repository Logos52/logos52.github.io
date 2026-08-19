#!/usr/bin/env python3
"""
regen-promote.py — the only thing that touches wiki/.

On accept, per page, in one operation:
  1. the original moves to _archive/wiki-pre-regen-2026-08/<same path>
  2. the draft moves from the workbench into wiki/
Refuses to run unless regen-check.py passes, unless --force is given.

Also tracks the accept streak: five consecutive accepts with no rejection flips the
program to unattended. A rejection re-arms per-page review.

    python3 scripts/regen-promote.py --accept "wiki/Self Management/Flow State.md"
    python3 scripts/regen-promote.py --reject "wiki/Concepts/The Two Meanings of Ego.md" --why "bloat"
    python3 scripts/regen-promote.py --status
"""
import argparse, json, os, shutil, subprocess, sys, datetime

ROOT = '/Users/n1/Projects/llm-knowledge-base'
DRAFTS = f'{ROOT}/01 - Workbench/regen-2026-08'
ARCHIVE = f'{ROOT}/_archive/wiki-pre-regen-2026-08'
STATE = f'{DRAFTS}/promote-state.json'
STREAK_TO_UNATTENDED = 5


def load():
    if os.path.exists(STATE):
        return json.load(open(STATE, encoding='utf-8'))
    return {'streak': 0, 'unattended': False, 'accepted': [], 'rejected': [], 'log': []}


def save(s):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump(s, open(STATE, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)


def stamp():
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M')


SPECIMENS = f'{ROOT}/02 - System/Rejected Specimens.md'
SPEC_HEADER = """---
title: "Rejected Specimens"
type: system
status: developing
created: 2026-08-13
updated: 2026-08-13
tags:
  - system
  - writing
  - llm-wiki
---

# Rejected Specimens

The learning loop. Every line struck during review lands here with the reason, and every
generation reads this file before drafting. A rule is wrong if a specimen below passes it.

This file is append-only and machine-written by `scripts/regen-promote.py --reject`. Edit a
reason if it is unclear; never delete an entry, because a deleted strike is a lesson the next
generation will have to learn again.

"""


def add_specimen(page, why, quote):
    """Append a struck line to the corpus every later generation reads. Returns the entry number."""
    if not quote:
        return 0
    if not os.path.exists(SPECIMENS):
        os.makedirs(os.path.dirname(SPECIMENS), exist_ok=True)
        open(SPECIMENS, 'w', encoding='utf-8').write(SPEC_HEADER)
    body = open(SPECIMENS, encoding='utf-8').read()
    n = body.count('\n### ') + 1
    entry = (f"\n### {n}. {os.path.basename(page)[:-3]} — {stamp()}\n\n"
             f"```text\n{quote.strip()}\n```\n\n"
             f"**Struck because:** {why or '(no reason given)'}\n")
    open(SPECIMENS, 'a', encoding='utf-8').write(entry)
    return n


def check(rel):
    base = os.path.basename(rel)[:-3]
    d = os.path.dirname(rel)
    cmd = ['python3', f'{ROOT}/scripts/regen-check.py',
           '--original', f'{ROOT}/{rel}', '--draft', f'{DRAFTS}/{rel}',
           '--bank', f'{DRAFTS}/banks/{base}-bank.md',
           '--droplog', f'{DRAFTS}/{d}/{base}-droplog.md', '--json']
    p = subprocess.run(cmd, capture_output=True, text=True)
    try:
        return json.loads(p.stdout)
    except Exception:
        return {'verdict': 'ERROR', 'failures': -1, 'checks': [], 'stderr': p.stderr[:300]}


def promote(rel, force=False):
    src, dst = f'{DRAFTS}/{rel}', f'{ROOT}/{rel}'
    if not os.path.exists(src):
        return False, f'no draft at {src}'
    if not os.path.exists(dst):
        return False, f'no original at {dst}'

    v = check(rel)
    if v['verdict'] != 'PASS' and not force:
        fails = '; '.join(c['check'] for c in v.get('checks', []) if c['status'] == 'FAIL')
        return False, f'regen-check says {v["verdict"]} ({fails}). Use --force to override.'

    arc = f'{ARCHIVE}/{rel}'
    os.makedirs(os.path.dirname(arc), exist_ok=True)
    shutil.move(dst, arc)          # original out
    shutil.move(src, dst)          # draft in
    return True, f'archived to {arc}'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--accept')
    ap.add_argument('--reject')
    ap.add_argument('--why', default='')
    ap.add_argument('--quote', default='', help='the exact struck line, captured as a specimen for every later generation')
    ap.add_argument('--force', action='store_true')
    ap.add_argument('--status', action='store_true')
    a = ap.parse_args()
    s = load()

    if a.status:
        print(f"accepted: {len(s['accepted'])}   rejected: {len(s['rejected'])}")
        print(f"streak: {s['streak']}/{STREAK_TO_UNATTENDED}   unattended: {s['unattended']}")
        for line in s['log'][-10:]:
            print('  ', line)
        return 0

    if a.reject:
        s['streak'] = 0
        s['unattended'] = False
        s['rejected'].append(a.reject)
        s['log'].append(f'{stamp()}  REJECT  {a.reject}  {a.why}')
        save(s)
        n = add_specimen(a.reject, a.why, a.quote)
        print('rejected. streak reset to 0, per-page review re-armed.')
        if n:
            print(f'specimen {n} appended to the corpus — every later generation reads it.')
        else:
            print('no specimen captured. Pass --quote "the exact line" to teach the next generation.')
        return 0

    if a.accept:
        ok, msg = promote(a.accept, a.force)
        if not ok:
            print(f'NOT PROMOTED: {msg}')
            return 1
        s['accepted'].append(a.accept)
        s['streak'] += 1
        s['log'].append(f'{stamp()}  ACCEPT  {a.accept}  ({msg})')
        if s['streak'] >= STREAK_TO_UNATTENDED and not s['unattended']:
            s['unattended'] = True
            s['log'].append(f'{stamp()}  UNATTENDED MODE ON after {s["streak"]} consecutive accepts')
            print(f'promoted. {msg}')
            print(f'>>> {s["streak"]} consecutive accepts — unattended mode ON')
        else:
            print(f'promoted. {msg}   streak {s["streak"]}/{STREAK_TO_UNATTENDED}')
        save(s)
        return 0

    ap.print_help()
    return 1


if __name__ == '__main__':
    sys.exit(main())
