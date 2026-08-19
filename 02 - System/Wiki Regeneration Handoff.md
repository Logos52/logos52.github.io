---
title: "Wiki Regeneration Handoff"
type: system
status: developing
created: 2026-08-13
updated: 2026-08-13
tags:
  - system
  - writing
  - llm-wiki
---

# Wiki Regeneration Handoff

The wiki is being regenerated page by page. **Opus does research, preparation, checking and
bookkeeping. Fable does the writing.** This page is the whole contract; nothing needed to run it
lives in a chat log.

Why the split: across 2026-08-13, Opus-written openings were struck repeatedly and the openings
Wedge accepts are all Fable's. The measurements are in §4 and they are the load-bearing part of this
document.

---

## 1. Division of labour

**Opus delivers, per page:**

| Artifact | Path | Contents |
|---|---|---|
| Research bank | `01 - Workbench/regen-2026-08/banks/<Page>-bank.md` | claim ledger, verification verdicts, reachable citations, gaps, house-term definitions, exact wikilink targets with contribution clauses, and the subject stated in plain words |
| Assigned move | in the brief | routed by `scripts/regen-route.py` from the palette |
| Genre | in the brief | one of concept, technique, system-model, operational, hub-index, synthesis, reference-catalog, book-note, personal |

**Fable writes the page.** One continuous pass, from the bank.

**Opus then checks, boards, and files.** `scripts/regen-check.py` runs the mechanical layer; Wedge
rules; `scripts/regen-promote.py` archives and promotes on accept, or files a specimen on reject.

---

## 2. What Fable reads, and what it must not

**Read, in this order:**

1. The page's research bank. It contains everything; nothing else is available.
2. `02 - System/Rejected Specimens.md` — every line Wedge has struck, with his reason. Append-only.
3. `wiki/Writing Craft/Opening Moves Catalog.md` — the entry for the assigned move **and its
   verified specimen**. Where a gloss and its specimen disagree, the specimen wins.
4. `02 - System/Writing Standards.md` — §4 Openings and the genre sheet in §13. Not the whole file.

**Never open the original page. Never open a previous draft.** Reading prior prose turns writing
into revision: one agent measured this on itself and produced 153 shared 12-word runs after reading
the earlier draft, then 1 after regenerating from the ledger alone. The bank agent reads the
original so the writer does not have to.

**Do not hold the mechanical rules while writing.** Opener word limits, link preservation, shared
n-grams, term counts, frontmatter — all of these are computed afterward by
`scripts/regen-check.py`. A rule a script enforces is noise to a writer, and prose degrades under
rules held during composition.

---

## 3. What the page owes

1. Every claim from the bank, carried or dropped on the record in the drop log with a reason.
2. Every wikilink reproduced with its exact target, each gaining a clause on what that page
   contributes.
3. No sentence surviving from the original — which is automatic if the original is never opened.
4. House terms keeping their names, each with a definition a stranger can enter, at the point it
   first does work. No paid course cited, linked, named, or implied.
5. Frontmatter preserved; a Sources section carrying the bank's reachable citations.
6. Length serving the material. A page the census scored clean does not grow past 1.5×.

---

## 4. The opening — write to the exemplars, not to the rules

**Read the four accepted openings below and write one that could sit among them. That instruction
outranks every rule in this section.**

The rules exist because they were derived from these openings, not the other way round. On
2026-08-13 the reverse was tried for a full day: an opening was struck, a rule was minted from
reasoning about why, the writer obeyed the rule exactly, and the result was struck again. Four
times. Each rule was read from disk and verified by quote, so the failure was never that the rule
went unread — the rule was wrong. "Names the whole" produced dictionary definitions. "Carries the
operating claim" produced a claim about the repair rather than the subject.

A rule below that conflicts with an accepted opening is wrong, and the opening wins.

Measured from the five pages Wedge accepted on 2026-08-12, all Fable's, against five Opus
regenerations he struck on 2026-08-13.

| | Sentences | Words | Statistics |
|---|---|---|---|
| **Accepted** | **2–3** | **22–63** | ~0 |
| Struck | 3–6 | 66–178 | 0–1 |

**L-A. The opening paragraph states the claim, discharges it in one or two sentences, and stops.**
Evidence, causes, worked lists and numbers all belong in sections. The struck Procrastination
opening ran 178 words and closed on a heritability figure — three times the longest opening ever
accepted here.

Accepted openings, whole:

```text
Bots watch; the desk changes things. Every rule on this page is that sentence applied to a
situation that keeps coming up.

The research here splits into a standing half and a session half. Four always-on cloud agents
hold the standing half — watching, fetching, filing. Execution stays with the local agents on
the Mac, and judgment — what a finding means, what becomes a page, what ships — stays at the desk.

A language model's default voice is trained self-regard. It learned to write from an internet
where prose survived by selling, so display is the register it falls back to — and selfhood, one
person's judgment left visible, is the one thing an average of everyone can't contain. Working
close to the self with a model is a running rejection of its default voice.

Flow state is a condition of full absorption in a single task, in which attention holds without
forcing and the sense of time recedes.
```

**L-B. The lead is the whole, not the sharpest part.** Sentence one answers *what is this*, never
*how does it work*, *how does it split*, or *why does it matter*. Mechanisms, taxonomies, causal
chains and component counts are parts. Struck for opening on a part:

```text
Language study time splits three ways, and each session picks one of the three by how much of
its content already lands.            — a taxonomy and its routing rule
Interiority runs on one causal chain: a past event, the false belief it installed…
                                      — a model, in a word the reader does not own
```

**L-C. The opening must be a sentence only this page could write.** Ask whether the reader could
have written it. If yes, it delivered nothing.

- Reader does **not** own the term → the definition is the payload, in this vault's specific
  version. Accepted: *"Whole-part-whole is a test of understanding, taken by teaching a subject out
  loud from memory with every source closed."*
- Reader **owns** the term (procrastination, decision making, minimalism) → a definition delivers
  nothing; carry the page's operating claim instead.
- Half-owned → either works, and the definition must do more than usual.

**L-D. A trailing clause extends what the thing IS or is LIKE; it never starts the how.** Accepted:
*"…in which attention holds without forcing and the sense of time recedes."* Struck on the same
page: *"…the condition where the work holds attention and none of it goes to keeping it there"* —
the qualifier turned into mechanism.

**L-E. One proposition, in words the reader already owns.** No colon-list, no *and each*, no
*because*, no term the reader must be taught. Under 45 words, one subordinate clause, no wikilink.

Full law text and the complete specimen corpus: `02 - System/Writing Standards.md` §4, L20a through
L20c, and §15.

---

## 5. Waves, not parallel fan-out

Corrections must reach the next page.

On 2026-08-12, six pages ran sequentially in one context: one strike total, and the remaining pages
were accepted untouched. On 2026-08-13, eight ran in parallel in fresh contexts: the same two faults
appeared eight times, because no page could learn from any other.

- Wave one is one page. Its correction lands in `02 - System/Rejected Specimens.md`, and in the
  standard if it is a law.
- Later waves read the specimen corpus before drafting.
- Widen only as the corpus thickens: 1, then 2, then 5, then 20.
- **A fault appearing twice in one wave means the wave was too wide.**

---

## 6. Failure handling

Scope the regeneration to the layer that failed. Never edit a line in place.

| Diagnosis | Scope | Shape plan |
|---|---|---|
| Opening does not name the whole; page ends inside a part; shape fights the material | whole page | re-derived |
| Cadence, appended formulation, abstract subjects, a passage that does not flow, a wrong claim | **that passage only** | **inherited** |

A regenerated passage re-stitches: its first sentence picks up a thread from the sentence before,
and the sentence after still receives what it hands forward.

Three failed attempts on one page halts the run and goes to Wedge with all three drafts and all
three diagnoses. Same fault three times means the standard is missing a law; three different faults
mean the failure is upstream in the bank or the routing.

---

## 7. Commands

```bash
cd /Users/n1/Projects/llm-knowledge-base

# route every page to a legal opening move
python3 scripts/regen-route.py --census <census-dir>

# check one regenerated draft
python3 scripts/regen-check.py \
  --original "wiki/<Section>/<Page>.md" \
  --draft "01 - Workbench/regen-2026-08/wiki/<Section>/<Page>.md" \
  --bank "01 - Workbench/regen-2026-08/banks/<Page>-bank.md" \
  --droplog "01 - Workbench/regen-2026-08/wiki/<Section>/<Page>-droplog.md" \
  [--census-clean]

# on Wedge's ruling
python3 scripts/regen-promote.py --accept "wiki/<Section>/<Page>.md"
python3 scripts/regen-promote.py --reject "wiki/<Section>/<Page>.md" \
  --why "<reason>" --quote "<the exact struck line>"
python3 scripts/regen-promote.py --status
```

`--accept` archives the original to `_archive/wiki-pre-regen-2026-08/` and moves the draft into
`wiki/`. It refuses to run on a page the checker fails. `--reject` resets the accept streak and
appends the struck line to the specimen corpus. Five consecutive accepts flips the program to
unattended; any rejection re-arms per-page review.

---

## 8. What the checker verifies, and what it cannot

**Verdicts** — links preserved, link annotation, shared n-grams against the original, opener word
and clause limits, one term in the opening, claim coverage, proof-of-read quotes grepped verbatim,
frontmatter and Sources, growth discipline on clean pages.

**Worklist only, never verdicts** — cadence density, the Two Egos first-person worklist, paragraph
seams. Flags are candidates; an empty worklist is not a pass.

**No flag graduates to a verdict without a validated basis.** Run any proposed threshold against the
accepted exemplars and the rejected specimens first; keep it only if accepted output passes and
rejected output fails. Two thresholds failed this test on 2026-08-13: a cadence detector that scored
the accepted exemplars highest of anything measured, and an n-gram check that failed the page Wedge
ranked best because it repeated a list of technique names. Both are recorded in the script.

**Not checkable at all** — whether the prose is good. That is Wedge's eye, and everything above
exists to make his eye cheap to spend rather than to replace it.

---

## 9. Current state

- **Built and tested:** the three scripts, the specimen corpus with nine entries, the checklist, the
  standard rewritten to 148 numbered laws, the router (331 pages, 62 rescued from a banned move),
  the archive and promote loop, the accept streak.
- **Drafted, awaiting Wedge:** five pages in `01 - Workbench/regen-2026-08/` from wave one, five
  from wave two. All pass mechanically. Wave two's openings were struck on 2026-08-13 except WPW and
  Red Teaming.
- **Not built:** cohort batching; the Glossary entering the queue (it defines the Bear Hunter System
  as "the user's main encoding system", which fails L20a-i for a stranger); the condensed-page
  workshop strip; thin-page group treatment per `01 - Workbench/thin-pages-triage.md`; the six
  shadow-duplicate merges; status graduation to `mature`.
- **Corpus:** 331 pages, 415,044 words. 107 carry sources. 86 use private course vocabulary — house
  terms stay, defined for a stranger, pointing at no course anyone must buy.
