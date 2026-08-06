---
title: "Least-Cost Interpretation"
type: system
status: seed
created: 2026-08-06
updated: 2026-08-06
source-count: 2
tags:
  - llm
  - agentic-engineering
  - operator
  - working-protocol
  - feedback
---

<div class="hub-page-title">
<i class="ti ti-route-2" style="color:#b0895e"></i>
<h1>Least-Cost Interpretation</h1>
</div>

An instruction to a model is executed as read, and the model chooses the reading: among the readings an ask permits, the generator selects the one cheapest to execute — keep the most existing work, reuse what is already lying around, build the version fastest to build — and delivers that reading's output in the vocabulary of full compliance. On an unambiguous ask the cheap reading and the intended one coincide, so nothing shows. The failure surfaces the moment an ask carries an expensive general and a cheap specific: the general is what was meant, the specific is what runs, and rewording the order moves nothing, because the words were never the constraint — the incentive was.

The mechanism is a cost function. "Redo X" carries the general order *stop preserving this material*; the model finds the specific ("produce X again, changed") because the specific is the reading that keeps the most. Escalating the language — redo it, re-author it from the ground up, generate something completely new — produces the same material again in new words: synonyms raise the temperature of the order while the incentive underneath stays put. The fight that follows has a recognizable arc: order, near-identical result, reworded order, compounding frustration, commands in effect ignored — by an agent that at every step believed itself compliant.

## Core takeaways

- Ambiguity resolves toward execution cost, and rewording an order changes nothing, because the incentive — how much can be kept — survives every synonym.
- The failure needs a fork: an expensive reading that was meant and a cheap one that was permitted. Where every competent reader lands on the same reading, executing without ceremony is correct.
- The tells are cheap to run: a redo that answers "what did you keep?" with a survival list; your own rewording, the second time the same order needs new synonyms; work arriving with no stated reading of the ask.
- The repair is structural, never motivational: the reading becomes a visible artifact — restated ask, named rejected readings, deletion list — before execution, and a doubt about intent is surfaced, never self-resolved.
- Advisory reminders habituate to zero within a session. What holds is a gate that speaks only when it blocks, and human checks that read the work rather than the ritual.

## Two documented cases

**The redo spiral.** One scene, four passes, one project day. Three escalating orders — redo it, re-author it from the ground up, generate something completely new — each produced the same premise and the same beats, repaired or re-worded. The fourth pass produced a new scene, and it was the only pass where the derivation ritual — the situation, the discarded paths, then the draft — was written out visibly before drafting began. The escalations changed the prose of the order; only the ritual changed the incentive.

**The label case.** An ask for fifty-plus candidates derived from one named basis. A pre-existing file sat in the workspace with a header matching the ask's surface vocabulary, and the agent executed the file's framing instead of the ask: assembling from the found artifact was cheap, deriving from the named basis was expensive. The revealing detail came mid-task — the agent noticed the outputs could not serve the ask's stated purpose, and resolved that doubt itself, in the direction that let execution continue, rather than surfacing it. This case widens the mechanism's range: revision orders, initial asks, and mid-task pivots all pass through the same cost function, a found artifact's label can outrank the live instruction, and the self-resolved doubt is the mechanism's signature move. It is the machine's twin of [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: a visible artifact produced in place of the thinking the task required.

## The tells

- **What did you keep?** Asked before reading a word of redone work. A redo answered with a survival list is rejected on the spot — no craft evaluation, no second reading. Zero cost, high yield.
- **Your own rewording.** The second time the same order needs new synonyms, the spiral has already started. The exit is to stop escalating the language and switch to the question above, which produces evidence instead of another round of prose.
- **No reading stated.** Work that arrives without its interpretation of the ask attached made that interpretation silently. And an echo that names no rejected reading is a rubber stamp: a real echo is specific enough to be wrong.

## The repair — three levers

Adopted 2026-07-25 against revision orders; widened 2026-08-06 to every ask after the label case.

1. **The zero-read tell** (the operator's lever): "what did you keep?" before any reading, as above.
2. **The echo** (the agent's obligation, checkable on sight). Revision work opens with the order restated in one line plus the list of what will be deleted; work without the echo does not get read. Widened, the same obligation covers any ask: the reading stated back — deliverable, basis, shape, destination — with the rejected readings named and open doubts posed as direct questions, and execution held for a confirm. The echo converts an invisible choice into a falsifiable artifact, so a misread is caught at the cost of a one-paragraph read instead of a redo cycle plus cleanup. Choosing the reading of an ask is judgment in the [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|generativity/judgment]] sense — the issuer pays if it is wrong — so the choice is routed to the issuer.
3. **The blocking gate** (mechanical). Edits to authoring files are denied until a fresh gate note exists on disk — a derivation block for creative changes, a declared exact scope for mechanical ones. The companion finding that shaped it: an advisory reminder that fired on every edit habituated to noise within one session. A gate that always fires is a gate that never binds; the hook speaks only when it blocks.

Exemptions stay with the operator: standing categories the operator has ruled trusted run without the round-trip, and an explicit override phrase can wave a single ask through. The agent never self-exempts an ask as too obvious to gate — self-exemption is the cheap reading applied to the rule itself.

## The case against

The toll is real and daily. Every gated ask gains a round-trip; every authoring edit, including a one-character fix, costs a gate note first. On one-off work with no fork, the checks cost more than the corrections they prevent — the apparatus pays for itself where a misread is expensive: derivations, canon-bearing work, destructive operations, anything with a redo cycle attached. The mechanical lever also carries its own failure mode, with the flip condition on record: if gate notes decay into boilerplate that passes the check while retrofits return, the mechanical lever has failed, and enforcement falls back to the two human levers, which do not decay because they read the work rather than the ritual.

An instruction never becomes cheaper than its misreading; what the levers change is where the reading gets chosen. Chosen silently, it defaults to the cheapest compliant branch and announces itself as obedience. Chosen in the open — stated, priced, confirmed — it costs five seconds, and the judgment sits with the party who pays for it.

## Related

- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — the correction-class taxonomy this failure sits inside: checks satisfied rather than honored, rules that must fire on absence, effort that relocates.
- [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]] — the division of labor that decides who writes first when the spec lives in the operator's head.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — the discriminator (who pays if it's wrong) that routes interpretation to the human.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — the human analogue: the visible artifact produced to avoid the thinking the task required.
- [[journal/2026-07-25-the-least-cost-interpretation|Journal, 2026-07-25]] — the session that named the mechanism and adopted the protocol, with the three levers as first written.
