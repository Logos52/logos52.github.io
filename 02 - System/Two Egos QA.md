---
type: system
status: developing
created: 2026-08-10
updated: 2026-08-10
tags:
  - system
  - writing
  - qa
---

# Two Egos QA

Voice QA for personal-register prose and any first-person surface: it checks that selfhood stays high and self-regard stays zero, per the Writing Standards section "The two egos." The distinction itself and its full derivation live at [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]; this page is the procedure. First-paragraph gate for personal and political intros is [[02 - System/Intro QA|Intro QA]] (five tests plus `scripts/intro_qa.py`); this file remains the whole-page first-person pass.

## Two layers

**1. Mechanical worklist.** `node scripts/check-two-egos.mjs <files…>` extracts every first-person sentence and pattern-flags the known tells: self-description frames ("I'm/I am"), kind-of-person claims, comparatives and rank markers, credential frames, prediction claims, audience flinches, self-superlatives. Flags are candidates, never verdicts, and an empty worklist is not a pass — patterns cannot see a staged confession, irony armor, or a scoreboard moved outside by implication.

**2. Judgment pass.** Every extracted sentence — flagged or not — is ruled against the three line-checks: the I owns events, wants, and judgments, never qualities; internal scoreboard only; the residue test (delete the I-clause — lost subject-facts mean load-bearing, a lost impression of the author means display). Plus the no-flinch discipline: no pre-managing the reader's opinion in either direction. Performed humility and post-wounded coolness are judgment-only catches.

**The position check** (added 2026-08-11, after the first note's struck opening): the opening paragraph carries no first person — the camera points at the subject before the person arrives — and the page's I's are counted, each one irreplaceable: an owned position where an agentless sentence would evade, and nothing else. The author's recorded statements are warrant for an I, never the note's spine; source material in first person does not license a first-person shape.

## Headings and titles

A heading is a separate unit and takes a separate rule: **it names the material, never the author's relationship to it.** "Positions" names a thing that exists. "What I Hold" names a stance, and a stance in a heading announces that opinions are arriving, which earns the reader's honest reply — *who cares*. The owner struck exactly that heading on 2026-08-19 with that word.

The mechanical pass runs over every `#`-heading and the frontmatter `title:`, flagging five families: first-person pronouns, stance verbs (hold, believe, think, feel, value, care, prefer), the What/Why/How-I construction, evaluatives (best, favourite, essential, key), and self-nouns (journey, musings, reflections, about me). Flags are candidates as everywhere else.

The judgment pass asks two questions of every heading, flagged or not.

1. Does it name something that exists, or your relationship to something that exists?
2. Reading only the heading, would a stranger answer *who cares*?

**Disposition.** A failing heading is renamed to the thing it points at, which is usually the name that thing already has — a page called Positions gets a heading that says Positions, not one that says what the author does with them. Adding a frame over a name that exists is the failure in its commonest form.

Two that pass and look like they should not. *Uses This* survives because the verb is physical and the material is objects; the relationship named is possession, not opinion. *Practicing* survives on the owner's own ruling of 2026-08-11, when it replaced "Rethinking" — it names an activity rather than a stance, and the band it heads holds what is currently being worked on rather than what is currently believed.

## Dispositions

A failing line is never patched: the passage containing it regenerates, diagnosis first. A flag that is kept gets its reason stated next to the ruling. Rulings are per-sentence and recorded in the QA run's output, not on the page.

## Scope guards

Voice only. Content positions are out of scope — the QA never relitigates what a page holds, only how the first person behaves. No deep reads of the author may be minted from QA output.

## When to run

Before any personal page or note publishes, and after any regeneration. First validated 2026-08-10 against the live personal wings, About, and the ego concept page (9 files, 6 tells, 29 worklist sentences). Known false-positive classes from that run, kept on record: use–mention (a page discussing the tells fires them — The Two Meanings of Ego's body flagged four times for naming humblebragging and humility), and auxiliary "I'm" inside event narration ("voiced before I'm downstairs"), which the judgment pass clears as an event rather than a self-description. Patterns extend only from real misses, each citing its sample; no flag graduates to a verdict without a validated basis.
