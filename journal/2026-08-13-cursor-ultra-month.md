---
title: "One month of Cursor Ultra, not a stack change"
description: "SuperGrok Heavy's Cursor offer is one free month of Ultra at $0, no auto-renew. Use it as a harness experiment: Fable 5 in Cursor vs Fable 5 in Cowork on the existing regen A/B/C pages, and Grok 4.6 in Cursor on one bank. Do not put Cursor in the standing stack until the month produces a job this desk cannot already do."
type: journal
status: published
created: 2026-08-13
updated: 2026-08-13
tags:
  - ai
  - cursor
  - grok
  - agents
  - decision-making
  - knowledge-base
---

# One month of Cursor Ultra, not a stack change

Verdict: the SuperGrok Heavy "Cursor subscription" is one free month of Cursor Ultra at $0. It does not repeat, it does not auto-renew into paid Ultra, and it is not a reason to add Cursor to the standing stack. Spend the month measuring two harness questions this desk can already score.

This is not a new coding agent. The stack stays Cowork (Fable) for judgment, Grok Build for execution, Grok Bot for standing duty. Cursor is a 30-day editor that can run the models we already pay for, plus Tab, visual diffs, and Cloud Agents, inside a VS Code fork that is not installed on this Mac yet.

## What the offer actually is

Cursor's own help page, fetched 2026-08-13: qualifying SuperGrok Heavy subscribers who link a Grok account to one individual Cursor account get **one free month of Cursor Ultra created at $0**, which includes Grok Bot access. No Cursor card required. The month is scheduled to end. Staying on Heavy does not mint another month. Already-on-Ultra accounts get nothing extra.

Ultra's published pools: unlimited Tab, Cloud Agents, Bugbot, a generous **Cursor Models** pool (Grok 4.6, Grok 4.5, Composer 2.5), and **$400 of Other Models** (Fable 5, Opus 5, Sol, Terra, Gemini, etc.). Fable 5 in Cursor is $10 / $50 per million tokens and requires Privacy Mode on individual accounts. Grok 4.6 in Cursor is $2 / $6 and lives in the cheap pool.

After the month: pay $200/mo or lose Ultra. That is the price of keeping whatever this month finds.

## Do people actually run Grok Build and Cursor together?

Yes, some do. Most people pick one home. The documented dual-use pattern is **same day, different jobs**, not two agents writing the same files.

Measured cases, not vibes:

- This desk already ran them in parallel on 2026-06-12. Grok Build and Cursor cribbed the same tsumugu characters on separate budgets; `crib_diff.py` caught Cursor quoting 勍's gloss on 敵. Dual-use earned its keep as an independent cross-check, then the roster was cut and restored inside an hour. See [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|the bake-off day]] and [[journal/2026-06-12-grok-workstream-maximum-offload|the roster cut]].
- Morgan Linton, ~two months ago: "I've been really enjoying using Cursor + Grok Build together."
- A 2026 Medium comparison that actually used both: Grok Build for quick starts and big plans, Cursor for daily in-editor work. That is a surface split, not a model split.
- Cursor's own DX lead, Matt Palmer, uses Grok Bot to approve a prompt that launches a **Cursor Cloud Agent**. First-party pairing, already in [[wiki/Research/Grok Bot Practitioner Bank|the Practitioner Bank]].
- xAI ships Grok 4.5 and 4.6 into Cursor and Grok Build on the same day. The products are siblings. The training data flywheel is Cursor's.
- Reddit more often frames SuperGrok vs Cursor as an *or*. That is the cost-optimizer pattern, and it is the majority. Dual-use shows up among people who already paid for both, or who got this promo.

The failure mode of running both at once on one tree: two agents edit the same files and you spend the session merging. The working split is one writer per tree, or one writer and one reviewer.

## What Cursor is, in this stack's language

Cursor is a VS Code fork whose headline surface is **Agent** (Cmd-I): read files, edit, run the terminal, search the web, drive a browser, checkpoint, queue follow-ups. **Plan Mode** (Shift-Tab) is Grok Build's plan-then-build, with a markdown plan you can edit before it writes. **Ask** is read-only. **Tab** is the thing Grok Build cannot do — gray inline completions while *you* type. **Cmd-K** is a selected-block edit. Rules live in `.cursor/rules/*.mdc` or in the `AGENTS.md` this vault already has; Cursor reads `AGENTS.md`.

It is not Cowork. Cowork is a judgment chat with file access. Cursor is an editor you sit inside. The agent is a pane, not the whole window.

It is not Grok Build. Grok Build is a terminal agent with one model family, profiles, and this machine's real toolchain. Cursor is multi-model in a visual diff loop. Same Grok 4.6 in a different harness is a real experiment. Same Fable 5 in Cursor vs Cowork is the more expensive one, and the one the regen program can score this week.

## What this month is for

Two jobs, then stop.

**1. Harness test on the existing A/B/C pages.** Arms A (current page), B (Fable in Cowork), and C (Grok 4.6 in Grok Build) already have drafts in `01 - Workbench/regen-2026-08/abc-test/`. Add arm D: **Claude Fable 5, pinned, in Cursor Agent**, same three pages, same [[01 - Workbench/regen-2026-08/abc-test/SHARED-BRIEF|shared brief]], out to `abc-test/cursor/`. Paste [[01 - Workbench/regen-2026-08/abc-test/RUN-CURSOR-ARM|RUN-CURSOR-ARM]]. If Auto or Grok 4.6 is selected, the comparison measures the model, not the harness, and the month is wasted.

**2. One bank, not a second bank factory.** [[01 - Workbench/regen-2026-08/RUN-RESEARCH-LANE|The research lane]] is agent-agnostic and already forbids fan-out because those lanes crashed. Cursor does not become a parallel bank mill. It runs **one** heavy page that is still in `BANK-WORKLIST.tsv`, model pinned to **Grok 4.6**, contract [[02 - System/Bank Handoff for Grok|Bank Handoff for Grok]], using [[01 - Workbench/regen-2026-08/RUN-CURSOR-BANK-LANE|RUN-CURSOR-BANK-LANE]]. Compare that bank to a Grok Build bank on claim count, missed links, and whether section 6 actually searched `raw/` first. If Cursor's bank is worse or the same, the lane closes.

Steelman of "just add Cursor to the stack now": Ultra is a real IDE, Tab is a daily surface Grok Build will never grow, Cloud Agents plus Grok Bot is the pairing Palmer already runs, and $400 of Fable inside an editor is the cheapest way to see whether Cowork is the thing we like or Fable is. The flip condition is a week where Cursor does a job this desk already runs — long knowledge-work loops, wiki regen, or tsumugu execution — better than Cowork plus Grok Build, on something Wedge can rank blind. Until that week happens, adding a fourth standing agent is the June roster problem again: coordination cost for a cross-check we have not re-earned.

Price of this recommendation: one install, one Privacy Mode toggle, three Fable pages from the Other Models pool, one Grok 4.6 bank from the cheap pool, and Wedge's eye on four arms instead of three. Price of skipping it: a $0 Ultra month expires while we keep asking the same question.

## What would flip this

- Cursor Fable pages beat Cowork Fable on the same three pages, blind. Then the harness is load-bearing and Cowork is no longer the default writer.
- The Cursor bank finds a contradiction or a house-term miss a Grok Build bank of the same page would have dropped. Then Cursor earns a second bank, still not a mill.
- Tab plus visual review is how Wedge actually wants to sit with tsumugu or wnab code for a week. Then Ultra's $200 is a real question on day 25, not a default no.

What would close the experiment: the Cursor arm is a Cowork clone, the bank is thinner, and Tab is unused. Then the month ends and the stack page does not change.

## Not a stack change

[[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] is not updated. [[journal/2026-08-13-grok-4-6-on-the-frontier|This morning's 4.6 briefing]] already said a bench jump is not a stack change. A free month is not one either.

Cursor.app is not on this Mac as of this writing (`/Applications` has no Cursor; `which cursor` is empty). Install is the first physical step.

## Duration note, 2026-08-15

The same help page, re-fetched two days later, now says Ultra "remains active at no charge so long as the SuperGrok Heavy plan is active on renewal." That contradicts the one-month / no-repeat / no-auto-renew reading recorded above. Not silently reconciled. The two assigned jobs still have to run before anyone treats Ultra as a standing seat. Bank: [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]]. Addendum: [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]].

## Sources

- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy) — Cursor help, fetched 2026-08-13. One month Ultra at $0, no repeat, no auto-renew.
- [Models & Pricing](https://cursor.com/docs/models-and-pricing) — Ultra $200 / $400 Other Models; Grok 4.6 in the Cursor Models pool at $2/$6; Fable 5 at $10/$50, Privacy Mode required.
- [Quickstart](https://cursor.com/docs/get-started/quickstart), [Agent](https://cursor.com/docs/agent/overview), [Plan Mode](https://cursor.com/docs/agent/plan-mode), [Rules](https://cursor.com/docs/rules) — product surface used in the teaching note.
- [Morgan Linton](https://www.linkedin.com/posts/morganlinton_ive-been-really-enjoying-using-cursor-activity-7466131172608221185-NwBe) — named dual-use, ~2 months old.
- Matt Palmer, *Intro to Grok Bot* (2026-08-11) — Grok Bot launching Cursor Cloud Agents; already banked.
