---
title: "Intro QA"
type: system
status: developing
created: 2026-08-19
updated: 2026-08-19
tags:
  - system
  - writing
  - qa
---

# Intro QA

The gate for a first paragraph on a personal or political page. Five judgment tests. A script for strings. The owner's eye is still the quality gate; CLEAN is only the mechanical half.

Cut 2026-08-19 from a nineteen-test battery that produced a prohibition loop: each new name was obeyed, the habit left through a door that was not named yet. Journal: [[journal/2026-08-19-intro-qa-cut|Intro QA cut]].

The writer never holds this file. The critic does. The generator is a stance, not this list.

**What this file cannot fix.** A writer producing an artifact for these tests will perform. Reciting the owner's best lines (`not who I was`, `a people is a set of values`) is recitation, not speech. The interview register is ordinary: what happened, in the order he said it when no critic was in the room. If the assignment is a nutgraf of who he is, the output will be performative no matter how small the battery.

---

## Script first

`python3 scripts/intro_qa.py <file-or-paragraph>`

Fail-closed, no model. Ruled-off strings, intensifiers, stance-verb frames, antithesis constructions (except an owner quote already on the record), the smoothed white/Asian pair, the TRADOC-green motif, and "not who I was." A script miss that later reaches the eye is a missing pattern, not a new judgment test.

Green is a caveat in the material — true of TRADOC, not of the 82nd — not an image. Writers grab it because it is the only visual noun in the kit. That is not a reason to keep using it.

Exit 1 is FAIL. Do not send a failing paragraph to the critic.

---

## Five judgment tests

**1. Who-cares.** Reading only this sentence, could a stranger reasonably answer "who cares?" Self-classification, announcements of the author's views, empty ramps, and truisms fail. The first paragraph answers why the reader should care about the *subject*, not who the author is.

**2. Transition.** Does each sentence connect to the one before without the reader building a bridge? Referent failures ("the categories," "the other answer") and hanging ellipsis ("I am not now") are this test. If they must reconstruct an implied question, it fails.

**3. Stacking.** The paragraph has one job. A brick of biography, five claims in six sentences, or a list of true facts with no reasoning is a fail even when each sentence is locally true. "Reasoning is what I like more than facts." A clause that exists only to fire the next sentence is stacking's joke form.

**4. Pillow.** A sentence that would work as a standalone quote card is drawing force from form. An epigram may appear only as a conclusion after premises that earned it. Antithesis, cadence, and mirrored pairs are costumes of this test, not tests of their own.

**5. Selfhood.** Does the line change what a reader sees of the subject, or only what they think of the author? Brag, self-classification, "I hold," criterion leak, signposts, and answering a charge nobody made are this test. Personal pages only. A true line can still fail: "willing to put my life on the line" and "not who I was" are his, and they are performative on the page. The script catches those strings. The test is the family.

Density hint, not a kill: one or two thoughts per sentence. An overloaded sentence already fails transition.

---

## Killed as named tests

On-ramp — fights who-cares; ease-in is the write-act, not a filter. Referent, ellipsis — folded into transition. Delete, setup-and-payoff, specific-beats-generic — folded into stacking, pillow, or who-cares. Stance verbs, criterion leak, signposts, defensive disowning — folded into selfhood or who-cares. Antithesis, cadence, metaphor — folded into pillow.

A killed test returns only if the same surface happens twice on work that already passed these five.

---

## Cycle

Generator → paragraph → script → critic (these five) → replace the generator with one stance paragraph, never a ban, never an append. Stop when the critic returns CLEAN, or at ten rounds. CLEAN before round 5 is re-diagnosed by a fresh critic.

The owner reads the paragraph. A script-clean, critic-clean intro can still be struck.
