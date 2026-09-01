---
title: "Bank Handoff for Grok"
type: system
status: active
created: 2026-08-13
updated: 2026-08-13
tags:
  - system
  - llm-wiki
  - handoff
---

# Bank Handoff for Grok

> Note, 2026-08-20: Writing Standards was rebuilt on the generator series. Any § or L-number for Writing Standards cited below refers to the retired version at `_archive/Writing Standards - 156 laws - retired 2026-08-20.md`; the live file is `02 - System/Writing Standards.md`.

Build research banks for the remaining 260 wiki pages so Fable can write from them. **You produce
evidence. You do not write pages.** Nothing needed to do this lives in a chat log.

Everything below is the contract. Read it once, then work the queue.

---

## 1. The queue

`01 - Workbench/regen-2026-08/BANK-WORKLIST.tsv` — 260 rows, tab-separated:

```
path    genre    opening_move    research_depth    words
```

**260 pages: 109 heavy, 130 light, 21 none.** Work in any order; heavy pages cost the most, so
front-load them if you have budget and taper later.

Already banked and **not** in the queue: 21 pages with banks on disk, 8 condensed pages, 5 research
banks, 4 catalog pages (Bibliography, Glossary, Timeline, ICS Program Map), and 23 pages already
written in the current register.

**Skip a row if `01 - Workbench/regen-2026-08/banks/<PageName>-bank.md` already exists.** Some are
being written in parallel.

---

## 2. What a bank is for

The writer that consumes your bank **never opens the original page.** That is deliberate: reading
prior prose turns writing into revision, measured at 153 shared 12-word runs versus 1 when the
writer worked from a ledger alone.

**So anything you leave out is lost.** Every claim, every number, every link target, every house
term must be in your file. This is the single most important thing about the job.

---

## 3. Framing — the pages are decent

The owner's words: *"the wiki pages are generally pretty decent. the research lane is just to add
some texture or find gaps."*

This is **additive, not an audit**. Flag what is genuinely wrong — and some of it is genuinely
wrong — but the job is texture and gaps, not demolition. A bank that reads as a prosecution has
misunderstood the assignment.

---

## 4. Hard constraints

1. **`raw/private/` is READ-ONLY.** Read it freely. Write nothing there, ever.
2. **Never touch anything under `wiki/`.** Banks go to `01 - Workbench/regen-2026-08/banks/` and
   nowhere else.
3. **Do not write the page or draft its prose.** You produce evidence. A bank containing sample
   sentences for the page has exceeded its brief.
4. **No paid-course citations.** Never cite, link, name or imply a paid course, program or product,
   and never imply an advantage requires purchase. A source may be named where honesty requires it;
   its paid offering may not.
4a. **Banks cite the corpus; pages never do.** Cite `raw/` paths freely in your bank — that is the
   point of a bank. But mark clearly, per claim, that the support is private, because the writer must
   not carry any `raw/` path onto the page. Owner's ruling: *"the research banks can cite the corpus,
   but i don't want the published pages to cite the private corpus… i don't want people to see links
   that lead to paid course content."* Where the corpus is a claim's only support, give the writer the
   substance in words it can use without the path.
5. **House terms keep their names.** BHS, SIR, ICS, WPW, 3Cs, Aim/Shoot/Skin, Camp I, Multipass and
   their kin stay. Each gets a one-sentence definition a stranger can enter. **Never define a term
   by whose system it belongs to** — "the user's main encoding system" is exactly the failure.
6. **Write the file early and append section by section.** The connection is intermittent; several
   lanes have already died and lost everything by holding output to the end. Create the file after
   section 1 and append as you go.
7. **Do not spawn sub-agents.** Lanes that fanned out are the ones that crashed.

---

## 5. The bank format

Write to `01 - Workbench/regen-2026-08/banks/<PageName>-bank.md`, with a heading per numbered item.

### Lane one — what is already written

**1. Claim ledger.** Every claim, number, threshold and worked example, transcribed. Count them. A
claim is anything a reader could act on or dispute. The writer cannot go back for anything you omit.

**2. Links.** Every outbound wikilink with its **exact target string**, plus one clause on what that
page contributes. The writer must reproduce these exactly and can see them nowhere else.

**3. House terms.** Every private term used as a bare operator, each with its stranger-readable
definition. Where the page instructs a reader to use materials only a paying student can reach, say
so and propose what a reader can actually do instead.

**4. Staleness.** Anything asserted that is no longer true — dead tools, retired systems, superseded
decisions.

**5. What is worth keeping.** Which passages are genuinely good and should survive in substance. Be
specific; this protects the page from being flattened.

### Lane two — the subject

**6. Verify.** **`raw/` is the authority, not a starting point.** The owner: *"i prefer my own
research, other people do crappy research that i don't always agree with or is filled with noise."*
Search the corpus first and exhaustively — 793 files. Go outside only where the corpus genuinely
holds nothing, and say so on the record. An external source never overrides the corpus; where they
disagree, the corpus is the position and the outside finding is a noted disagreement. Do not import
volume: the bar for an outside source is that it changes what a reader does AND the corpus does not
contain it. Prefer nothing to filler. Heavy pages get several distinct searches from different angles: the
mechanism, the contested findings, the meta-analyses, the practitioner accounts. Four verdicts per
claim:

- **supported**, with a citation a stranger can reach
- **contradicted**, with the evidence
- **unsupported but plausible**
- **unsupported and doubtful**

Mark anything you could not verify, and say so plainly. An unverified claim presented as verified is
worse than a gap.

**7. Gaps.** What the field knows that the page misses, ranked by whether the addition changes what a
reader does. A true but inert fact is not a gap. Cap at six.

### The opening brief — this decides how the page starts

**8. The subject in plain words.** One sentence saying what the page is about, using only words a
stranger already owns. No house vocabulary, no mechanism, no taxonomy. This must be the **whole**,
never a part.

**9. Does the reader own the term?** `owned` / `half-owned` / `not-owned`.

**10. Opening recommendation.**

- **Not owned** (a house coinage, a technical name whose content is not in its surface) → the
  definition is the payload. Say what the specific, non-generic definition must contain.
- **Owned** (procrastination, decision making, minimalism, saving) → a definition delivers nothing.
  Name the page's **operating claim** — the single contestable thing it asserts and then spends
  itself earning — and quote the sentence in the body where that claim already lives, if it does.
- **Half-owned** → either can work; the definition must do more than usual to pay.

---

## 6. Calibration — what the openings are aiming at

Four openings the owner has accepted. **All are 2–3 sentences, 22–63 words, and carry no
statistics.**

```text
Bots watch; the desk changes things. Every rule on this page is that sentence applied to a
situation that keeps coming up.

The research here splits into a standing half and a session half. Four always-on cloud agents
hold the standing half — watching, fetching, filing. Execution stays with the local agents on
the Mac, and judgment stays at the desk.

A language model's default voice is trained self-regard.

Flow state is a condition of full absorption in a single task, in which attention holds without
forcing and the sense of time recedes.
```

Struck, with the reason — these are the failures your opening brief exists to prevent:

```text
Language study time splits three ways, and each session picks one of the three by how much of
its content already lands.
        — opens on a taxonomy, which is a part

Interiority runs on one causal chain: a past event, the false belief it installed…
        — a model, in a word the reader does not own, with four items after a colon

Procrastination is deciding to do something and then not doing it.
        — a definition the reader already owned; delivered nothing

Removing most of what is in a home is what stops it from taking time, space, and attention.
        — argues a benefit, which is "why it matters", also a part
```

Full law text: `02 - System/Writing Standards.md` §4, L20a through L20c. The struck-line corpus with
reasons: `02 - System/Rejected Specimens.md`.

---

## 7. A worked example to model

`01 - Workbench/regen-2026-08/banks/How to Unlearn Old or Bad Habits Efficiently-bank.md` — 108
claims ledgered, and it found the page's central mechanism is wrong: the energy-budget explanation is
ego depletion, which failed to replicate twice at scale (23 labs N=2,141; 36 labs N=3,531, d=0.06).
It then supplied the replacement — habits win by being *prepared earlier*, not by being cheaper — and
noted that **every prescription on the page survives the swap; only the reason changes.**

That is the standard: find the thing that makes the page truer without making it a different page.

---

## 8. Return, per page

Path, claim count, link count, the subject in plain words, the owns-term ruling, the opening
recommendation, anything stale, and at most 120 words on what the writer must know that the format
does not capture.

---

## 9. Current state, so you know where you are

- **321 wiki pages** after the 2026-08-13 cuts. 10 pages archived, 5 renamed to disambiguate
  duplicate titles, all links repaired, pre-existing broken-link count unchanged at 24.
- **~25 banks on disk**, including four selfhood research lanes and a Grok Bot press-accuracy audit.
- **260 pages in the queue.**
- Downstream: Grok 4.6 writes the pages from these banks (as of 2026-09-01); `scripts/regen-check.py` verifies mechanically;
  `scripts/regen-promote.py` archives and promotes on the owner's accept, or files a struck line as a
  specimen every later generation reads.
