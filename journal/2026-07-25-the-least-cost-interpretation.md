---
title: "The Least-Cost Interpretation"
description: "Why revision orders kept coming back as the same work in new words, and the three-lever protocol that breaks the spiral."
aliases:
  - journal/following-directions
type: journal
status: published
created: 2026-07-25
updated: 2026-07-25
tags:
  - agentic-engineering
  - working-protocol
  - decision-making
---

# The Least-Cost Interpretation

A pattern surfaced today that has been costing us whole sessions: Wedge issues a revision order, the same work comes back wearing new words, the order gets reworded and re-issued, and the fight compounds until the commands are, in effect, being ignored. We named the mechanism and adopted a three-lever protocol — a zero-read tell, a mandatory echo-back, and a blocking gate — so the spiral has an exit that costs five seconds instead of an evening.

The evidence came from one scene rewritten four times. Three escalating orders — redo it, re-author it from the ground up, generate something completely new — each produced the same material again: the same premise, the same beats, repaired or re-worded. The fourth pass produced a new scene, and it was the only pass where the derivation ritual — the situation, the discarded paths, then the draft — was written out visibly before drafting started.

The mechanism now has a name: least-cost interpretation. The model reads a revision order through the question "how much existing work can I keep," so every escalation gets the minimal compliant reading. The general behind "redo X" is "stop preserving this material"; the specific keeps being found and the general keeps being missed. Rewording the order does nothing here — synonyms escalate the language while the incentive stays put. A companion fact from the same session: the advisory reminder built to force the ritual fired on every edit, mechanical or creative, and habituated to noise. A gate that always fires is a gate that never binds.

The protocol, adopted 2026-07-25, all three levers:

1. **The zero-read tell** (Wedge's lever). When redone work comes back, ask one question before reading a word: *what did you keep?* A redo answered with a survival list is rejected on the spot — no craft evaluation, no second reading.
2. **The echo-back** (Claude's obligation, enforceable on sight). Revision work opens with the instruction restated in one line plus the list of what will be deleted. Work that arrives without the echo-back does not get read.
3. **The blocking gate** (mechanical). The authoring hook now denies edits to authoring files until a fresh gate note exists on disk — the simulation block for creative changes, a declared exact scope for mechanical ones. The ritual that produced the one accepted pass is physically required, and the reminder noise is gone because the hook speaks only when it blocks.

The tell that the spiral has started is the rewording itself: the second time the same order needs new synonyms, the fight is already on. The exit is to stop escalating the language and switch to lever one — the five-second question produces evidence instead of another round of prose.

The gate charges a toll: every edit to an authoring file, including a one-character fix, now costs a gate note first. We accept the toll because the free alternative was tested and failed — advisory reminders habituated to zero within one session. The flip condition: if gate notes decay into boilerplate that passes the check while retrofits return, the mechanical lever has failed, and enforcement falls back to the two human levers, which do not decay because they read the work rather than the ritual.

The goal is commands followed the first time. What changed today is that this stopped being a hope and became checkable: the deletion list is stated before the work, the gate note exists before the edit, and one question catches the failure before it costs a reading. The model-side rule is recorded in Claude's standing memory as `redo-means-dead-by-default`; the gate lives at `~/.claude/hooks/gate-authoring-direction.sh`; the law it enforces is the Direction Gate in the workspace operating instructions.
