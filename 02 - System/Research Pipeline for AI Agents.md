---
title: "Research Pipeline for AI Agents"
type: system
status: active
created: 2026-08-15
updated: 2026-08-15
tags:
  - system
  - research
  - agentic-engineering
  - pipeline
---

# Research Pipeline for AI Agents

How an agent researches something in this vault and turns that research into a deliverable. Eight stages, each handing the next one a file. The rule underneath all of them: **evidence becomes an artifact before it becomes prose**, because an artifact can be checked by something cheaper than a person reading the finished thing.

This applies to any research-then-write job here — a wiki page, a brief, a decision document, a bake-off, a position statement. It was built during the 2026-08 wiki regeneration, which is where the numbers and the failures below come from, but nothing in the stages is specific to that job. The wiki-specific contracts that instantiate it are listed in §7.

**Read §3 before starting and §4 before proposing an improvement.** §4 is a list of things that looked like improvements and were not.

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

### S3 — Shape

Decide the structure from the evidence before writing sentences. Which parts exist, in what order, where the whole is stated, where it returns.

Produces: a shape plan naming the opening whole, the sequence of parts, and the constraints the opening inherits.

Deciding shape separately removes an entire class of failure, because a structural fault found in finished prose costs a full rewrite and a structural fault found in a shape plan costs a line.

### S4 — Draft

One continuous pass, written from the bank and the shape plan. **Never open the thing being replaced, and never open a previous draft.** Carried-over phrasing is the most common way a regeneration turns out to be a retouch, and the discipline that prevents it is not seeing the old text at all.

Produces: the draft, and a **droplog** beside it recording what was in the bank and did not make the draft, and why. The droplog is what makes the next stage possible — without it, nobody can tell a deliberate cut from an accidental loss.

### S5 — Mechanical check

A script judges only what a script can judge. Two categories, and the distinction is load-bearing:

- **Verdicts** — pass or fail. Links preserved and annotated, quotes grepped verbatim against their source, claim coverage against the bank, structural limits, required sections present.
- **Worklist** — candidates for a human to look at. Cadence, register, seams. **An empty worklist is not a pass.**

Anything about quality belongs in the second category or nowhere. See §3.6.

### S6 — Judgment

A person reads it. This is the scarce resource, and every stage above exists to make it cheap to spend rather than to replace it.

Work arrives as **several fully-written options side by side**, never as one candidate. One candidate at a time is a funnel, and serial rejection is the most expensive way to find a preference that a parallel pick finds in one round.

### S7 — Record the ruling

An accept archives what it replaced. A **strike is filed verbatim** — the exact rejected text plus the reviewer's own words, unparaphrased — into a specimen corpus that later runs read before drafting.

The specimen corpus is what makes the pipeline improve rather than repeat. Paraphrasing a strike destroys it: the reviewer's wording is the evidence, and a summary of it is already an interpretation.

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

Wave one is one item. Later waves read the specimen corpus first. Widen as the corpus thickens: 1, then 2, then 5, then 20. **A fault appearing twice in one wave means the wave was too wide.**

Parallel fan-out is correct for *gathering* — independent searches that do not need to learn from each other — and wrong for anything corrective.

### 3.2 Generate from the write-act, never from the ban list

Eighteen openings were struck under accumulating prohibitions, each ban obeyed exactly and each next output failing somewhere new. Four were accepted in a single pass once the positive write-act was stated instead.

**Obedience is the tell: a correction that produces a compliant failure has not reached the generator.** Full record in `wiki/Systems/AI & Agentic Systems/The Prohibition Loop.md`.

### 3.3 Never answer a strike with a detector

A regex, a mandatory checklist section, or an overlap threshold is the same top-down move that already failed, one level up. **A rule is wrong when the rejected output would pass it.**

The response to a strike is to name the single generator in one sentence and regenerate from the evidence with the prior draft dead.

### 3.4 Regeneration is an option, not the default

**Editing in place is the normal repair.** Full regeneration is an escalation with a real cost, and defaulting to it was found to hold work back more than it helped. A fault gets a fix; it does not automatically get a rewrite.

**Internal documents are exempt entirely.** Instruments — this file, contracts, PRDs, decision notes, agent instructions, workbench drafts, repo docs — are edited in place and are not bound by the generation laws at all (Writing Standards, scope note). Treating a spec like prose that must come again whole is pure waste.

Regeneration earns its cost in one situation: a diagnosis says the **structure** is wrong, so no edit to any line can reach the fault.

| Diagnosis | Scope | Plan |
|---|---|---|
| Structure — the opening does not name the whole, the piece ends inside a part, the shape fights the material | whole piece | re-derived |
| Prose inside a sound structure — cadence, an appended formulation, a passage that does not flow, a wrong claim | edit in place, or that passage only | inherited |

**Three failed attempts halts the run** and goes to the reviewer with all three drafts and all three diagnoses: the same fault three times means a law is missing, three different faults mean the failure is upstream in the bank or the scoping.

### 3.5 If you did regenerate, a surviving fragment means you did not

Scoped to the escalation in §3.4 and to nothing else. Favourite sentences carry themselves across rewrites, so when full regeneration was the chosen route and a phrase came through untouched, what happened was a retouch. This is a check on a regeneration, never a reason to start one.

### 3.6 No flag graduates to a verdict without validation

Run any proposed threshold against the accepted set and the rejected set first. Keep it only if accepted output passes and rejected output fails. Two thresholds failed this test on one day: a cadence detector that scored the accepted exemplars highest of anything it measured, and a repetition check that failed the piece the reviewer ranked best.

### 3.7 One job per ask

A request either fills a shape or places material already written — never both. Asking for a finished passage that is simultaneously structured and worded is where exact wording quietly disappears into paraphrase.

---

## 4. Honest ledger

**Carried the work.**

- Evidence as an artifact before prose. The claim ledger and its verdicts are what let a deliverable be argued about rather than felt about.
- The ownership line in the bank — owned, half-owned, not-owned — which routes the entrance more reliably than any judgment made while drafting.
- Deciding shape separately from sentences.
- Drafting blind to the thing being replaced.
- Sequential waves for anything corrective.
- The write-act stated positively, and re-derived rather than extended when corrections accumulated.
- The specimen corpus with the reviewer's words verbatim.
- The droplog, which is the only thing that distinguishes a deliberate cut from a loss.

**Was wasted motion.**

- Detectors minted from strikes: a specimen regex, a mandatory inventory section, a token-overlap threshold, a ban on one phrasing.
- Pasting the write-act into a contract as more prose to satisfy. A stance changes what the writer is doing or it does nothing.
- Self-administered quality tests. An agent's own register check passed every line it was applied to, including the struck ones.
- Thresholds shipped without §3.6 validation.
- Parallel fan-out for corrective work.
- Escalating the wording of an instruction rather than changing the artifact it asks for.
- **Regeneration as the default repair.** Ruled 2026-08-15: it cost more than it returned. Fix in place; escalate only on a structural diagnosis (§3.4).
- Applying prose laws to instruments. Contracts, specs, and working docs get edited, not re-derived.

**The load-bearing limitation.** No script can see register. Every struck line in the worst run passed the checker — word limits, banned phrases, structure, all green. Any future stage claiming to catch a quality fault mechanically has to clear §3.6, and it will still not replace S6.

---

## 5. Where the evidence lives

- `wiki/Systems/AI & Agentic Systems/The Prohibition Loop.md` — why corrections are answered with regeneration rather than with rules.
- `wiki/Research/Opener Generator Research Bank.md` — the full record of the day that produced §3.2, every strike verbatim.
- `02 - System/Rejected Specimens.md` — the standing specimen corpus.
- `02 - System/The Generator.md` — the write-act itself.
- `02 - System/Writing Standards.md` — the numbered laws prose is bound by.
- `01 - Workbench/regen-2026-08/ATTEMPT-CATALOG-grok-opener-generator.md` — dead ends, with the rule that a retry changing only the ban list is a violation wearing a new date.

---

## 6. Adapting this to a new job

Keep S1, S5, S6, and S7 intact — evidence, mechanical check, judgment, recorded ruling. Those four are the pipeline.

S0 and S3 change shape with the deliverable: a decision document scopes to a verdict and a set of options, a bake-off scopes to a comparison and its criteria, a brief scopes to one source's argument. S2 only exists where there is a corpus that could have been under-read. S4's blindness rule applies wherever something is being replaced, and drops away for net-new work.

Every law in §3 transfers unchanged.

---

## 7. The wiki instantiation

The concrete contracts that run these stages for wiki pages:

| Stage | Contract |
|---|---|
| S0 | `scripts/regen-route.py`, and the worklist it produces |
| S1 | `02 - System/Bank Handoff for Grok.md` |
| S3 | `01 - Workbench/regen-2026-08/GROK-SKELETON-CONTRACT.md` |
| S4 | `02 - System/Wiki Regeneration Handoff.md` · `01 - Workbench/regen-2026-08/GROK-WRITE-CONTRACT.md` |
| S5 | `scripts/regen-check.py` |
| S6 | `wiki/Writing Craft/Opening Doors.md` · `wiki/Writing Craft/Opening Moves Catalog.md` |
| S7 | `scripts/regen-promote.py` · `02 - System/Rejected Specimens.md` |

`01 - Workbench/regen-2026-08/` is the dated working lane. It is gitignored and not durable; nothing that needs to survive belongs there.
