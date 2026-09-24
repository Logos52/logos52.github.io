---
title: "Research Pipeline for AI Agents"
type: system
status: active
created: 2026-08-15
updated: 2026-09-20
tags:
  - system
  - research
  - agentic-engineering
  - pipeline
---

# Research Pipeline for AI Agents

How an agent researches something in this vault and turns that research into a deliverable. The rule underneath all of it: **evidence becomes an artifact before it becomes prose**, because an artifact can be checked by something cheaper than a person reading the finished thing.

This applies to any research-then-write job here — a wiki page, a brief, a decision document, a bake-off, a position statement. It was built during the 2026-08 wiki regeneration, which is where the numbers and the failures below come from.

Cut on 2026-09-20 on the owner's word. The research stages are as they were. The writing stages, the specimen corpus and the August regeneration contracts came out, because his rulings of 2026-09-18 and 2026-09-20 replaced them. The file as it was is in git history.

---

## 1. The stages

### S0 — Scope

Decide what kind of thing is being made and what shape the deliverable takes, before any searching. Genre decides structure; structure decides what evidence is needed; searching without that produces a pile that has to be re-sorted later.

Produces: the assignment — deliverable type, its shape, and the depth tier the research runs at.

**Depth tiers.** *Heavy*: several distinct outside searches, full ledger of every claim, number, and example. *Light*: full ledger, private corpus first, outside verification only on load-bearing claims. *None*: ledger, links, and terminology only, verified lightly.

Setting the tier at S0 is what stops a light job from consuming a heavy job's budget. Most jobs are light.

### S1 — Evidence bank

The load-bearing stage. **Search the private corpus first, then outside.** Every claim the deliverable will rest on is enumerated and given a verdict (§2). Nothing is carried forward on the strength of sounding right.

Produces a bank file containing:

- The **claim ledger** — every claim, numbered, with its verdict and the evidence behind it.
- **Reachable citations.** A source a stranger cannot open is not a citation.
- **Gaps**, capped at six, and only where the gap changes what a reader would do.
- **Terminology**, each term defined so a stranger can enter it, never by whose system it belongs to.
- **The subject in plain words** — what this thing is, with no house vocabulary, no mechanism, no taxonomy.
- **Ownership**: does the reader already own the term, half-own it, or not own it. This one line routes more downstream decisions than anything else in the bank.

The bank produces evidence and does not draft prose. An agent that starts writing sample sentences inside a bank has begun deciding the deliverable in the stage that was supposed to supply it.

### S2 — Coverage check

Before anything is blamed on the writing, check what the bank actually saw. The trigger case: a bank built from a 290-word clipping when the same source existed in full at roughly eight times the length. The deliverable came out generic, and the cause was upstream — with almost no corpus in the bank, outside literature supplied the frame.

**A deliverable that reads generic is usually a bank with thin source coverage.** Fix the bank, then rewrite.

Produces: a supplement to the bank, and a re-run of whatever depended on it.

### S3 — Write

The deliverable is written from the bank, with the text being replaced closed. Carried-over phrasing is the most common way a regeneration turns out to be a retouch. How a page is written, its layout, and the one style rule are in `02 - System/Writing Standards.md` and in each model's own instruction set. No step waits on the owner.

### S4 — Mechanical check

A script judges only what a script can judge. Two categories, and the distinction is load-bearing:

- **Verdicts** — pass or fail. Links preserved, quotes grepped verbatim against their source, every number and name traced to the bank.
- **Worklist** — candidates to look at. **An empty worklist is not a pass.**

Anything about quality belongs in the second category or nowhere. See §3.2.

### S5 — The owner reads it

This is the scarce resource, and every stage above exists to make it cheap to spend. Where the work is a creative direction, it arrives as several fully-written options side by side, never as one candidate.

An accept archives what it replaced. A struck text is regenerated from the bank. No rule or record line is added unless he says "make this a rule" (ruled 2026-09-18).

---

## 2. Verdict codes

The most portable thing in this file. Every claim in a bank carries one:

| Code | Meaning |
|---|---|
| **S** | Supported — a citation a stranger can reach |
| **C** | Contradicted by the evidence |
| **P/C** | Mixed |
| **P** | Unsupported but plausible |
| **D** | Unsupported and doubtful |

**Vault-only material never earns an S**, however true it is. Internal knowledge is real and usable, and it is not external verification; collapsing the two is how a house claim ends up presented as a finding.

**Never present unverified as verified.** A P is not a weaker S — it is a different kind of thing, and the deliverable is allowed to use it as long as it does not dress it up.

---

## 3. The laws

### 3.1 Waves, not parallel fan-out

Corrections have to reach the next unit of work. Six items run sequentially in one context produced one correction total, with the rest accepted untouched. Eight run in parallel in fresh contexts produced the same two faults eight times, because no item could learn from any other.

Wave one is one item. Widen only after the owner has read a finished item: 1, then 2, then 5, then 20. **A fault appearing twice in one wave means the wave was too wide.**

Parallel fan-out is correct for *gathering* — independent searches that do not need to learn from each other — and wrong for anything corrective.

### 3.2 No flag graduates to a verdict without validation

Run any proposed threshold against the accepted set and the rejected set first. Keep it only if accepted output passes and rejected output fails. Two thresholds failed this test on one day: a cadence detector that scored the accepted exemplars highest of anything it measured, and a repetition check that failed the piece the reviewer ranked best.

No script can see register. Every struck line in the worst run passed the checker.

### 3.3 One job per ask

A request either fills a shape or places material already written — never both. Asking for a finished passage that is simultaneously structured and worded is where exact wording quietly disappears into paraphrase.

### 3.4 Never answer a strike with a detector

A regex, a mandatory checklist section, or an overlap threshold written after a strike is a ban list one level up. Eighteen openings were struck under accumulating bans on 2026-08-13, each ban obeyed exactly and each next output failing somewhere new. **A rule is wrong when the rejected output would pass it.** Full record in `wiki/Systems/AI & Agentic Systems/The Prohibition Loop.md`.

### 3.5 Instruments are edited in place

This file, contracts, PRDs, decision notes, agent instructions, workbench drafts and repo docs are edited in place. Only prose written for a reader is regenerated.

---

## 4. Where the evidence lives

- `wiki/Systems/AI & Agentic Systems/The Prohibition Loop.md` — why a strike is answered with a regeneration and not with a rule.
- `wiki/Research/Opener Generator Research Bank.md` — the full record of 2026-08-13, every strike verbatim.
- `wiki/Research/Context Problem Research Bank.md` — outside research on writing that assumes knowledge the reader lacks. Attempt catalog: `wiki/Research/ATTEMPT-CATALOG-context-problem.md`.
- `01 - Workbench/WRITING-PIPELINE-CATALOG.md` — every writing method tried here, working and dead.
