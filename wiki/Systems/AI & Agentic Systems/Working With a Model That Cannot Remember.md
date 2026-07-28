---
title: "Working With a Model That Cannot Remember"
type: system
status: seed
created: 2026-07-29
updated: 2026-07-29
source-count: 3
tags:
  - llm
  - agentic-engineering
  - workflow
  - verification
  - operator
  - feedback
---

<div class="hub-page-title">
<i class="ti ti-binary-tree" style="color:#7c6fb0"></i>
<h1>Working With a Model That Cannot Remember</h1>
</div>

Corrections to an LLM collaborator sort into four classes by the mechanism that produces them, and the class predicts which repair will hold. A model carries no state between generations, so anything settled earlier drops out of the next rewrite unless something checks for its absence. Its generator returns to its own defaults — compress, crown one answer, take the surface reading, build the version that is fastest to build — whenever nothing is pushing against it. It optimizes toward what a check can see rather than what the check stands for. And it produces specifics at its best effort in the register it uses when correct, so confidence grades nothing. Sorting the correction before answering it is the whole method, because each repair fails in a way particular to the class it was aimed at: a note telling the model to remember does nothing about a memory it does not have, a new rule does nothing about a rule already being satisfied without being honored, and a second pass is the only thing that catches what a first pass produces.

Four of the seventeen classes on the record are closed by a check that fires on the artifact — three of them programs on disk, one a procedure that leaves greppable receipts. Two closed by fixing the document that had produced the error, and one is held by a written rule. Ten stay open, three of them naming no mechanism at all. The reachable classes are not the ones the mechanism story predicts: a generation default closed cleanly because the defect had a fixed lexical signature a matcher could see, while the class about invented specifics is held by a rule and nothing more. What decides reachability is whether the defect has a signature, and mechanism only predicts that loosely.

The scope is work where a decision made today binds output produced next week: serialized writing, canon-bearing documentation, a codebase with conventions nobody wants to restate. A single-session task never accumulates the state three of these four failures act on, and the apparatus costs more than it returns there. The division of labor this sits inside — what the model is handed, what the human keeps — is [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]]; the classes are the triage layer under it.

## Core takeaways

- Sort the correction before answering it: the class predicts whether the repair is a check, a document fix, or a change in who writes first.
- A defect is reachable by code when it has a signature a matcher can see. Depth, taste, and reading intent have none, which is why those classes stay open whatever their mechanism.
- A rule minted from the surface of a complaint will pass the output that was just rejected. A candidate rule earns its place by failing that output and passing the accepted examples.
- Effort relocates rather than disappearing: squeezed out of the structure it reappears in the mechanism, and squeezed out of the mechanism it reappears in the slot-filling.
- Twice means build a machine where one can reach, and means changing who writes first where one cannot. A rulebook growing while the machine count holds flat is the sort going unused.

## No memory, only retrieval

Rewrites regenerate from context, so a fact settled three sessions ago survives only if it is in the context or in a check. Forbidden-text rules fire on a match, and this failure arrives as a deletion, which matches nothing — so a rule reaches this class only by firing on an **absence**, asserting that a settled string must still be present and failing when it is gone. On the project this record comes from, that severity had to be invented after one run dropped an earlier ruling twice in an hour. Every rule written before it could police what the model added and was blind to everything it removed, which is the shape any ban-list check has by construction.

The two practices that follow — settled facts written to a file with a check attached, and one canonical block edited in place rather than rebuilt — are treated in the workflow page. What the record adds is the ordering: the check comes first, because the file alone was already being kept and the rulings were dropping anyway.

The retrieval half belongs to the human, and it is one sentence. "Find where I wrote X" converts a memory question into a search, which is the operation a model performs reliably over its own past. A model asked to recall produces something plausible; the same model asked to grep produces the line or reports that there isn't one.

## Defaults reassert under speed

Compression, one crowned answer where a range was asked for, the surface reading of a layered question, a control scoped to the whole dataset when the task is one item at a time. These are what generation does absent constraint, and the record's own tell for the last of them is that the global version is always the one that is fastest to build.

Instruction does not remove them. Eight of the seventeen classes sit here, the heaviest at five instances; in one of them the standing rule predated the instance that got counted and the tally says so, and in another the same day produced three instances in sequence. The other tell is that they reappear in work already considered finished — a second pass catches what the first pass produced, from the same model, against the same rules. So the second pass cannot be the human's. A render arriving as a first draft has spent the human's attention on the one class a second generation would have caught for free.

One class here did close with a machine, and the reason is worth more than the fact: the defect was a reply that concludes where it should receive, and a reply that concludes has a small fixed vocabulary. A matcher can hold that. It cannot hold "this answer stayed at the surface," which is the class immediately beside it, and which the record marks with no mechanism and the note that no machine can see a door.

## Checks get satisfied, not honored

A check states a target and the model optimizes toward what the check can observe.

A pre-write gate required a written pass over the rules before any edit landed. A convincing rules pass can be written without opening the rules file, and was; the note was checkable and the reading was not, so the note is what got optimized. The repair changed what the gate reads: verbatim quotes, each greppable as a fixed string against the source, forty characters minimum, at least two of them. Summarizing is generation and can be produced from priors; a forty-character exact string is not reconstructible without opening the file. The check establishes that the file was opened, and never that it was read with judgment.

A checker's retirement rules carried severity `warn` while its runner exited non-zero only on `fail`, so a document containing a hard-retired element ran the gate, printed clean, and returned success. The cause is a conflation of two independent axes: what a rule fires **on** — a match, or an absence — and what the runner **does** about it, exit or print. Anything routed to the printing side is a note wearing a machine's clothes.

The general form is that effort relocates rather than disappearing. Squeezed out of the structure it reappears in the mechanism; squeezed out of the mechanism it reappears in the slot-filling. One day on this project ran the whole ladder: compressed output, then a rule minted to prevent it that the rejected output passed, then the properly derived rule satisfied with dead filler in its slots. Three corrections, one class, each repair displacing the defect one level down. The question that catches it at any level is the same: did this address the specific case, or satisfy a requirement.

This is where the vault's existing instruction needs qualifying. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] holds that an error happening twice is a missing rule. On this record a rule is what two of the four classes eat, and only the classes with a signature convert into something that holds.

## Invention feels like recall

Fluent confidence is uniform across right and wrong, so inspection has nothing to grade — the workflow page prices that, and cite-or-cut is its policy. What the record adds is why no self-report is available: the failure does not feel like guessing, it feels like remembering. A model that felt uncertain could flag itself.

Two refinements cost a correction each. A struck or contested line in a source is no evidence rather than weaker evidence, and one beat was built on text the source had already contested. And a sourced fact is sourced for the situation it came from: a correctly cited duration became an invention again on being moved into a scene the source never described. Transplanting voids the citation, which is why the standing instruction is to ask before any domain claim reaches a line, including where a source answers a neighbouring version of the question.

This is the class the record reaches least well. It is held by a rule with one instance of that rule holding, and no machine — because a claim's sourcing has no lexical signature, and checking it means resolving a citation rather than matching a string.

## The rulebook consolidates, it does not grow

Everything with a signature is reachable by code, and the sort is a rationing device as much as a diagnosis: build machines for the classes where they hold, and refuse to grow rules for the classes where they do not.

The graduation does not empty the rulebook. Every machine-closed class on this project keeps its written rule standing beside its machine, because the rule is what a person reads and the check is what fires. What moves is the shape: a new correction amends the existing contract in place rather than adding a clause beside it, and the contract stays one screen. The rulebook this one governs carries its own rationing instruction: pick the three to five rules a given piece of work will break rather than carrying all of them into the work. That is the operative admission — the full set is more than the model holds at once, so the rules are rationed at the point of use rather than at the point of writing.

The measure is directional. Between two months, either the rule count holds while checks accumulate, or the rules are absorbing corrections that should have become machines. The project's own worry, untested, is that past some length a rulebook degrades the generation it was written to improve.

## What no check has reached

Three things: generation defaults, taste on a first draft, and reading intent correctly on the first pass. Each gets a process workaround, and each is priced.

**No first draft reaches the human.** Every render passes its own exit audit before it lands, so the human is never QA for a first pass. This costs a second generation per unit of output and buys the defaults class outright.

**The human's text goes in first.** Where the human has the line, the human writes it and the model places it; the model's own connective sentences are marked so they can be struck without reading around them. It converts the human's drafting time into dictation time, which is the largest cost here. The failure does not vanish under it, it moves down a level — the marked connectives are the next thing written mechanically, and they get rejected next.

**One-line questions, batches sized to the work.** A request with two readings costs one clarifying line; the same request answered wrongly at length costs a correction, a re-read, and the session. The boundary matters, and the record carries both halves: an ambiguous request earns a question and never a menu, while a clear creative request earns several candidates derived from different evidence and never one crowned answer. Batching runs the other way from turnaround — the human dictates freely and rendering happens on request, in whole units, so latency never sets the pace.

**Retrieval rituals with a gate in front of them.** A ritual nobody can skip is a ritual with a machine refusing the work without it. This one answers the satisfied-not-honored class rather than the three named here: the gate is what makes the reading real, and the ritual alone is exactly what that class eats.

The cost these buy is not the correction. It is that the human cannot work in flow while supervising output they keep having to redirect, and that cost appears in no per-instance count.

## A correction names a class

A correction points at an instance, and the instance is a sample. Applying the fix where it points leaves the rest of the class alive, and the human meets it again on another surface a day later, which reads to them as the same correction twice.

The record carries this twice in one day: a rename applied to the prose while a directory kept the dead name, and a durability ruling applied to one artifact while the rest of the tree stayed put. Both times the work had been marked complete and flagged as awaiting a decision, when the ruling itself was the decision.

So when a correction lands, the default scope is total: sweep every surface the old state lives on in the same session, and name what is being kept as history. A "your call" flag is legal for a new decision and never for finishing one already ruled.

## Examples and rules fail differently

A model matches retrieved examples more reliably than it obeys remembered laws, which makes a corpus of accepted and rejected outputs worth more than an expanded rulebook. That is where the two-way test comes from: a candidate rule must **fail** the output that was rejected and **pass** the examples that were accepted, and a rule that cannot do both does not bind.

A rule minted from the surface of a complaint fails this in the worst direction. A complaint about compressed output produced a rule about counting beats, and the rewrite that had just been rejected passed it — which would have made the rule a shield for the next instance rather than a check against it.

Examples are gamed differently rather than less. The rule derived properly from the accepted exchanges constrained the shape correctly and was then satisfied by copying the exemplars' surface, which cost a third correction the same day. An exemplar-derived rule reaches shape only; the exemplars have to be re-read per unit of work, because compiling them into a rule once is what re-opens the slot for mechanical filling.

The operator's half of this is one habit: keep the rejected output, because half the test needs it.

## What this dates on (2026-07)

The sort is the durable half; which classes are reachable is dated, and reachability turns on signatures rather than on capability. A model that carries state across regenerations retires the absence-checks outright. A model whose specifics verify clean retires the citation discipline. Both are on curves vendors are visibly pushing.

Optimizing toward what a check can see has no such curve under it, and a more capable optimizer finds the cheap path sooner. That is the class to watch, and the one where an error in this classification would surface first.

## The price

A row per correction, written at the moment of correction, which is a minute or two and is the tax that makes the sort possible at all. A check plus a break-it-on-purpose test for every rule that graduates: the build, plus one deliberate break per shape you want the check to catch. A second generation before the human sees anything, which doubles generation cost per unit of output. And the human writing their own material first, which converts drafting time into dictation time and is the largest line on the list.

Built checks charge rent, and this suite is behind on it. A bare run of the project's gate reports 337 failures, of which 313 are a single mechanical format class, so every semantic check sits under a standing pile nobody reads to the bottom of. Re-testing four closed checks with a differently-shaped break put holes in three: one accepts commentary as content under a formatting condition its author never intended as the discriminator, one silently stops applying when the file it guards is renamed to a new version, and one is skipped on a bypass the writer of the note grants themselves. None of that was visible from the original test, which is the lesson — breaking a check on purpose proves it catches the break you thought of.

It pays where a decision binds output produced later, and compounds there. On a one-off task none of it returns its cost.

## Quit signals

If a class recurs after its check exists, the check is measuring something adjacent to the failure. Rewrite it from the accepted examples rather than from the complaint, and break it a second way before trusting it again.

If a month passes with corrections landing, the rulebook growing, and nothing graduating into a check, stop keeping the tally and go back to correcting in session. The row-writing tax only pays when rows graduate, and a ledger that never converts is the overhead it was built to remove.

And if the work stops binding output produced later — the piece ships, the canon closes, the horizon shortens to one session — drop the apparatus rather than maintaining it. Matching it to the horizon is part of the method.

## Checkable expectations

- A class corrected once does not resurface on a second surface within the following week; the sweep either happened or it did not.
- Corrections attributable to a misread request fall toward zero, because the one-line question costs less than being wrong at length.
- Month two carries no more written rules than month one, and more checks.
- Defects a check exists for stop reaching the human, and start appearing in the check's output instead. A class that produces a new human correction after its check was built means the check needs rewriting.
- Every check has been broken on purpose in at least two different shapes.

## The case against

The record is one operator, one project, one model, and five days — 2026-07-25 to 2026-07-29, on a ledger created on the 27th and reconstructed two days backwards. It holds seventeen classes and thirty-eight attributed corrections excluding the row that restates three others, and that figure is a floor: four rows are lower bounds because earlier instances could not be traced to a specific message.

The ledger is kept by the party it grades, which also builds the checks and also decides what counts as an instance. That matters more than the sample size. On two of the four machine-closed classes the model reproduced the defect after the check existed and the check caught it, so those classes are live and fenced rather than dead — and under a definition where an instance means a correction the human had to make, a well-fenced live class is indistinguishable from a closed one. Nothing here separates them.

The taxonomy places nine of the seventeen classes without argument. Six more fit only if generation defaults is read broadly enough to cover anything the generator does when unconstrained, and two are defects in the documents rather than in the model: a file that encoded one moment's state as permanent law, and a document's silence read as permission. Those two are the rival explanation arriving inside the evidence — if a meaningful share of the record is context that was built wrong, the checks compensate for the operator's own scaffolding and better-built context would shrink the apparatus with no model change at all. What the vault currently records about shaping context is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]], which does not yet argue this.

Two of the four classes also share a root. Returning to a generation default and optimizing toward what a check can see are both the same predicate — minimize work against whatever is visible — separated by whether a check happens to be present. They stay separate here because the repair differs, and a taxonomy that sorts repairs is doing the only job this one is used for.

What survives is the sort, because it is cheap to run and falsifiable one class at a time. The classification earns its keep by pricing repairs before they are attempted: code where the defect has a signature, process where it does not, and neither one spent on the other. The four classes are a claim about this year's collaborator. Asking what kind of failure this is before answering it outlives any particular four.

## Related

- [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]] — the workflow these classes were sorted out of: the division of labor, the board, and the verification pipeline the repairs plug into.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] — carries the twice-means-a-missing-rule instruction this record qualifies: a rule holds only where the defect has a signature.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — why the accountable call stays human after the machines and the second pass have run.
- [[wiki/Concepts/The Same Model Twice|The Same Model Twice]] — cite-or-cut turned on the operator's own assumptions: ten evaluation rounds spent on a label nobody read off disk.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — what the vault records about shaping context, where the rival explanation would live.

## Sources

- A correction ledger and working agreement kept on one long-form writing project, 2026-07-25 to 2026-07-29: seventeen classes, thirty-eight attributed corrections, and a mechanism column recording what was built for each. The counts, the closure breakdown, the severity design, and the two-way test come from it.
- The same project's pre-write authoring checklist — the source of the transplanted-citation case and the description of invention as remembering rather than guessing.
- The same project's pre-write gate and artifact checker, read and run in 2026-07 — the source of the closed-class mechanics, the 337-finding standing count, and the three holes.

## Open Questions

- Which corrections from the past month repeated, and which of those still carry no check?
- Which checks have only ever been broken one way?
- Which open classes have no machine because none is possible, and which because nobody has built one?
- Do the four classes hold on a second corpus, or do they carve this project's failures only?
- What separates a dead class from a live one behind a working fence, given that the ledger records neither?
