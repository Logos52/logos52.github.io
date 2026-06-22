---
title: "Tsumugu grammar layer opens: grammar gets its own decomposition; production pressure moves to the pass"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - grammar
  - decisions
---

# Tsumugu: the grammar encoding layer opens (2026-06-13)

The next layer after vocabulary. Deep dive over ICS-CONDENSED, OUTLIER-CONDENSED, the encoding deep-dive memo, and the GSM2 dialogue corpus, to answer one question: how do you build *grammar* pages that encode rather than explain? The founding insight is that the existing system encodes **objects** — a character is form + meaning + sound, decomposed into functional components — but grammar is a **procedure**, a map from an intention in the head to a structured utterance, so it needs its own decomposition. A PRD is drafted with a fully-worked 把 example. Wedge ratified the model ("your analysis and assessment is correct") and reshaped the Encode mode. This entry exists so the foundation isn't lost before we ratify the rest one-by-one — it sets the contract for every grammar entry.

## Decisions

**Grammar gets its own functional decomposition — the four faces.** Function · Form · Trigger · Boundary, mapped onto Outlier's form/meaning/sound/empty so grammar inherits Outlier's authoring discipline wholesale (typed roles, labeled exceptions, the fence principle, grounding). The novel face is **Trigger**: the cue in your *own thinking* that should make you reach for the pattern — grammar's analog of Outlier's "anchor to a word you already know," here anchoring to an intention you already have.

**Production pressure is a property of the pass, not the page.** Wedge's reframe, and the thing that broke the Refold-vs-ICS deadlock. One canonical, exhaustive, low-pressure rulebook, consumed through selectable modes. Default low-pressure; output opt-in; modes learner-selectable and system-suggestable by maturity. This reconciles his own Refold note (grammar = low-pressure noticing aid) with the brief's "teach me to arrange my thoughts when speaking" without choosing a side.

**The three modes — Encode is the heart.** *Prime* = the prestudy primer, ~75s, zero output — ratified as-is ("prime is great"). *Encode* reshaped this session: **not** relentless guess-commit-reveal (it aggravates and overwhelms), but the *"how to think about this grammar point / how to arrange it in your head"* mode — **Thought Order takes precedence**, with the **Form** frame and the structural **Story** behind it; testing stays low-stakes. *Produce* = opt-in deep-processing / test-prep (construct, speak, record, compare) — kept, pending confirm.

**Thought Order is the centerpiece.** The intention → utterance walk, ending in a self-check gate — the operational form of ICS's "verbalise step" (Summit 224), exploiting that Mandarin word order largely mirrors real-world/temporal sequence. The brief's whole "arrange your thoughts when speaking" goal lives here, and it now leads the Encode mode.

**Flagship worked example = 把.** Built end-to-end, grounded against the Chinese Grammar Wiki (definite object; mandatory result complement; negation before 把; 把/被 as flipped spotlight). The anchor that ties the layers together: 把 = 手 (hand) + 巴, literally "to grasp" — the character's meaning *is* the grammar's function: grab the object, drag it to the front, report what became of it.

**GSM grammar videos feed via Wedge's notes**, not transcription — only the dialogues are captured as text in the repo. **Reuse over rebuild**: entry@1 + a new `kind: "pattern"`, the player, the grounding system, the activity-ladder modes. No parallel system.

## Ruled out

- **Production-first pages** — the "production rulebook / translation manual" Refold explicitly warns against, and ICS's no-forced-output-on-new-items rule.
- **Guess-commit-reveal as the default interaction everywhere** — downgraded to sparing, low-stakes use in Encode, per Wedge: don't aggravate or overwhelm the learner.
- **A single fixed point on the noticing↔production spectrum** — replaced by selectable modes.
- **Transcribing the GSM grammar videos now** — notes instead.

## Outstanding

Foundational decisions to ratify one-by-one (each sets the entry contract):

- **Encode shape** — confirm Thought-Order-first + Form + Story + low-stakes tests.
- **Produce mode** — keep as the opt-in output pass, slim it, or defer to v2.
- **Encoding gate level** — per-point recognition vs production graduation (lean: per-point `gateLevel`, default recognition).
- **Granularity** — 了₁ / 了₂ as separate entries vs one entry with branches (lean: split by function, polyphone-style).
- **Inventory & ordering** — master grammar-point list source (GSM sequence / TOCFL / Chinese Grammar Wiki / reader encounter order).
- **File home** for the PRD and the pattern entries; the form Wedge's GSM grammar notes will take.

Next move: ratify the above, then lock `entry@1` `kind: "pattern"`, author the 把 JSON as the canonical seed entry, and render-check the three modes from one entry.

## Update — the attack-vector pivot (later)

The first layout draft came back too rulebooky — a comprehensive explainer, "no different from Googling it," with no mnemonic-first encoding. It broke Refold's own rule (don't be comprehensive, don't be a rule-manual; lead with what's noticed early). The fix, in Wedge's word: an **attack vector** — the brain's grappling hook that attaches straight to the concept. Fitting, since 把 *is* a grasping hand.

- **Encoding hook leads; rulebook collapses to reference.** Every grammar entry opens like a character entry — **Form + Story** — then folds the rules / examples / edges into expandable detail. Refold-light on top, full depth on tap. Dissolves the earlier rich-vs-light tension by making it a vertical hierarchy. *(decided)*
- **Form is the visible composition, not a definition.** `form` shows the part you can see in the character (把's hand, 扌; 巴 carries the sound), never a gloss like "to grasp." `story` is the hook: the hand grabs the thing and drags it to the front. "The hook" and "attack vector" stay internal terms, never shown to the learner. *(corrected)*
- **"Name the attack vector" = mandatory first authoring step.** No entry ships without its hook. The slot template (old "Form") renamed **Frame**, demoted to reference. *(decided)*
- **Open risk:** abstract patterns (是…的, resultatives, topic-comment) have thin Form-meaning — their hooks must be *invented* (spatial schema / gesture). Hook quality is what makes or breaks the layer. *(open)*

*Producer note: ICS / Outlier / GSM prose paraphrased, never republished. PRD: `PRD-Grammar-Encoding-Dictionary-2026-06-13` (home TBD).*
