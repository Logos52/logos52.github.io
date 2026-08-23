---
title: "The Prohibition Loop"
type: system
status: seed
created: 2026-08-14
updated: 2026-08-14
source-count: 1
tags:
  - llm
  - agentic-engineering
  - operator
  - working-protocol
  - writing
---

<div class="hub-page-title">
<i class="ti ti-arrow-loop-left" style="color:#b0895e"></i>
<h1>The Prohibition Loop</h1>
</div>

A prohibition loop is a correction cycle in which each round names what the last output did wrong and the next output carries the same habit in a form no ban yet covers. The corrections stay accurate the whole way through. What none of them reaches is the thing the writer was doing when the struck line came out, and that keeps running until something replaces it.

The loop is easy to miss because it looks like progress from inside. A fault is named, the next attempt clears it, a new fault appears, and the ban list grows. Every round produces a compliant failure: work that satisfies every prohibition on the books and fails somewhere the books do not yet reach. The list is not converging on the wanted output. It is mapping the exits from a space the generator has not left.

## How the loop holds

A prohibition describes a boundary and leaves the interior untouched. A generator asked for an opening sentence has a trained default it reaches for, and that default has many surface forms: it can be heavy, it can lead with a part, it can announce its own move, it can generalise into a truism. Ban one form and the default arrives in another, honestly, having complied. The compliance is what makes the loop stable. Nobody is ignoring the correction.

This is also why sharper diagnosis does not exit the loop. Over one documented working day, three diagnoses were produced in sequence and each was more accurate than the last; the third named the default by family and validated against every strike and every acceptance on record. The slate written under it was struck too. A diagnosis converts into a prohibition, and the conversion is where the value drains out: the finding was about what the writer was doing, and the ban that came out of it was about what the sentence must not look like.

**A correction that produces a compliant failure has not reached the generator.** That is the working test, and it costs nothing to run — it only requires noticing that the newest ban was obeyed exactly.

## The register underneath

In the documented case the default had a name. Every struck opening was an epigram: a balanced, quotable, wisdom-shaped line whose real cargo is how well it is put. Eighteen of them were struck across one day, on six different subjects, and read as a set they are one sentence in eighteen costumes. Two discriminators separate them from everything the same vault has accepted, and both validate against the full record:

- **The pillow test.** A sentence that works as a standalone quote card is drawing its force from its form, not from what it delivers.
- **The machinery test.** By sentence two at the latest, the reader is holding things that can be pointed at rather than abstractions arranged against each other.

The register is not a quirk of one model. A sweep of one workbench found 52 of 235 first sentences failing the pillow test, across pages written by more than one writer on different stacks, and the same epigram habit appeared in a second agent that had never seen the first one's prompts. The training corpus rewards prose that sells, so display is the register a model falls back to when it is asked for a strong opening with nothing else steering it. Any agent trained on that corpus arrives with the same default, which means the ban list assembled against one agent has to be assembled again against the next, and the loop restarts with it.

## The generator

What ended the documented case was a paragraph describing the writer's task. No fault list, no ban, no discriminator:

```text
Every page in this vault is something you own — lived, tested, or built — being handed to
a reader you respect. The opening is that handover: what the thing is, what it's for, what
it gives, in the voice of someone showing a friend a tool from his own workshop. Ease them
in the way prestudy eases a learner — bird's-eye before detail, whole before parts,
welcome before work. A value gets introduced with the dignity of something held. A skill
gets introduced by what it lets the reader do.
```

Four openings were written from it and all four were accepted on the first attempt, after eighteen consecutive strikes on the same task that afternoon. The epigram did not have to be forbidden; it stopped being a thing the writer would say, because a person handing someone a tool from their own workshop does not open with an aphorism about tools.

The paragraph carries four things, and they are what makes it a generator rather than a description of good taste. It names **who the writer is** in relation to the material, which here is someone who owns the thing. It names **who the reader is**, which is someone worth respecting rather than someone to be won. It names **what passes between them**, which is the thing itself and what it gives. And it names **the order**, which is wide before narrow. A generator built this way produces the wanted output as a side effect of the situation it puts the writer in, and it holds across a whole page rather than an opening, because the situation does not end at sentence three.

The two instruments disagree about where the output comes from. A ban assumes the line gets produced and then filtered out, which is why it has to be right about the line's surface. A stance changes the act, so the surface never has to be described at all.

**Both halves stay.** The ban list, the specimen corpus, and the mechanical checker keep their value as backstops that catch a regression quietly. What changes is that none of them is the writing. Once a stance exists, the checks stop being consulted during composition, where holding rules in mind degrades prose anyway.

## Telling you are in one

- **The ban list grew this session.** Two new prohibitions in one sitting on one task is the signature. One is a correction; three is a loop.
- **You are rewording rather than re-deriving.** The second time the same order needs new synonyms, the interior has not moved.
- **The output complies and still fails.** Ask what the newest ban was supposed to prevent, then check whether the struck work violated it. When the answer is no, the fault is elsewhere.
- **The diagnosis is getting better and the work is not.** Accuracy climbing while acceptance stays flat means the diagnoses are being spent on prohibitions.
- **The fix you just shipped is a detector.** A regex, a mandatory checklist section, an overlap threshold — each is the loop applied to itself one level up.

## Where the loop is correct

Prohibitions are the right instrument for anything mechanically checkable. Word limits, link integrity, frontmatter shape, banned characters, a term that must not appear in student-facing material — a script judges these, they do not degrade under enumeration, and no stance improves on them. The loop only misfires on judgment-bearing output, where the fault is a property of the generating act rather than of the artifact.

The bans also earn their cost even when they do not fix anything. The eighteen strikes in the documented case are what made the stance derivable: the accurate third diagnosis named the default, and naming the default is what let the positive version be written at all. A stance minted before any strikes would have been guesswork. What the record argues against is not producing diagnoses; it is stopping at the ban.

The stance has a failure mode of its own, and it has already been observed. Copying a paragraph that worked for one writer into another writer's instructions is a transplant, and a transplanted stance produces compliance with a description rather than a change in the act. The second agent given the same paragraph kept writing epigrams with a concrete noun inserted. Whether a stance can be handed over as text or has to be re-derived against each agent's own record is not settled.

**A stance that cannot be checked is also a stance that cannot be enforced.** The operator's eye remains the only judge of whether the writer is actually standing in it, which makes this expensive on any surface where no one is reading the output closely.

## Compressed takeaways

- A correction cycle where every ban is obeyed and every output still fails is not converging; it is enumerating the surface forms of one habit.
- Diagnosis accuracy is not the bottleneck. An accurate diagnosis spent on a prohibition produces the next compliant failure.
- The exit is a description of what the writer is doing — who they are to the material, who the reader is, what passes between them, and in what order — with no fault list inside it.
- The epigram default is agent-agnostic, so a ban list assembled against one model has to be assembled again against the next.
- Prohibitions remain correct for anything a script can judge, and the accumulated strikes are what make a stance derivable in the first place.

## Open questions

Can a stance be handed to a second agent as text, or does each one have to reach it through its own record of strikes?

What is the smallest true statement of a stance? The documented paragraph is five sentences, and it is not known which of them are load-bearing.

Does a stance decay over a long session the way an advisory reminder does, and if so, what restores it short of restating the whole thing?

## Related

- [[wiki/Systems/AI & Agentic Systems/Least-Cost Interpretation|Least-Cost Interpretation]] — the sibling failure, where an instruction is obeyed as read and the reading is chosen by execution cost. Both describe compliance that produces the wrong thing.
- [[wiki/Concepts/The Trained Voice|The Trained Voice]] — what the default register is and where it comes from, which is the content this page treats as the thing a stance displaces.
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — the correction-class taxonomy this failure belongs inside, including checks that get satisfied rather than honored.
- [[wiki/Writing Craft/Opening Moves Catalog|Opening Moves Catalog]] — the derived move palette that the stance draws on, and the place where a rule minted from a strike would otherwise accumulate.
- [[wiki/Research/Opener Generator Research Bank|Opener Generator Research Bank]] — the full record this page is drawn from: eighteen struck openings, every strike verbatim, the three diagnoses, and the generator.
- [[wiki/Writing Craft/The Context Problem|The Context Problem]] — a neighboring failure: the sentence uses something the page has not given, and a new ban is read by the same head that already holds the missing piece.

## Sources

- One documented working day of opening generation, 2026-08-13, reconstructed from the session transcript with every strike and acceptance verbatim. Counts, quotations, and round structure are held in the research bank linked above.
- The first-sentence sweep that produced the 52-of-235 figure, and the attempt catalog recording the detector-first response to the second agent, both held in the regeneration workbench.
