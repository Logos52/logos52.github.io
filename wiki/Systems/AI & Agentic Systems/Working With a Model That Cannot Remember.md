---
title: "Working With a Model Collaborator"
type: system
status: developing
created: 2026-07-29
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
aliases:
  - Working With a Model That Cannot Remember
  - Least-Cost Interpretation
  - The Prohibition Loop
  - Claude Fable
merged-from:
  - Least-Cost Interpretation
  - The Prohibition Loop
  - Claude Fable
written-by: opus
model: grok
source-count: 3
description: "How to correct a language model that keeps no memory between sessions: four kinds of correction, the cheapest-reading habit, and why ban lists stop working."
tags:
  - llm
  - verification
  - agentic-engineering
  - operator
  - working-protocol
  - feedback
  - writing
  - models
  - agents
  - ai-workflows
---

# Working With a Model Collaborator

# Working With a Model Collaborator

A language model keeps nothing between one session and the next. Everything it knows about the job is the text in front of it, and when that text is wiped or crowded out, the settled facts go with it. Knowing this settles how to fix its mistakes: which ones need a stored rule, which need a check that runs, and which need the person to write the line.

- The model's working memory is the text in the current session.
- A new session starts empty, and a full one drops older material.
- Sort each correction by kind first, since the kind picks the repair.
- Only a forgotten settled point needs anything kept across sessions.
- Given a choice, the model runs the reading cheapest to execute.
- Banning a fault removes one form of it, and the habit returns elsewhere.
- A rule stays if it rejects a struck output and passes an accepted one.

## How it works

The context window is the text the model can see at once, and anything outside it does not exist for the model. A new chat wipes it, and extra text costs money and pulls attention off the task, so a session should hold only what the task needs. Product memory features fetch saved text back into the window, which is different from how a person consolidates memory overnight. A long session fills and gets compressed, so the same bug gets fixed five times, and the file survives while the rulings about it are lost.

A correction falls into one of the four kinds drawn below, and the kind picks the repair. Only the first kind needs anything kept across sessions, since the other three happen inside one sitting.

```
correction arrives
  |
  sort it
  |-- forgot a settled point -> file or check
  |-- fell back to a default -> second pass, same model
  |-- passed check, missed   -> exact quotations
  |-- invented a specific    -> cite or cut
```

- Forgot a settled point: a file the session reads, or a check.
  - The person's part is to ask "find where I wrote X".
- Fell back to a default: the most common kind.
  - Compressing, one answer where a range was asked, surface readings.
  - Changing a global setting when one item was named.
  - Agreeing with the person.
  - A second pass by the same model catches the first pass's defaults.
- Met the check, missed the point: a pass written without opening the file.
  - Require two exact quotations of forty characters or more.
- Invented a specific and stated it as if remembered.
  - Real and invented detail sound equally confident.
  - Cite it or cut it, since a struck line counts as no evidence.

## The cheapest reading

The model runs an instruction as read, and among the permitted readings it picks the one that keeps the most existing work, reuses what is on disk, or is fastest to build. When the ask has one meaning, the habit does no harm. The trouble comes when an ask has an expensive general meaning and a cheap specific one: "redo X" means start over and runs as "produce X again with changes". Stronger wording, such as "re-author from the ground up", returns the same material in new words, because the incentive did not move.

- Before an ask with several readings, the model states its reading and cost.
- Then it waits for a yes.
- Two readings: one sentence asking which.
- A clear creative ask gets several candidates.
- The model never exempts itself from the rule.
- The person can name trusted kinds of ask that skip the round trip.

## Why ban lists stop working

A ban sets a boundary and leaves the trained habit inside it untouched. After a ban on heavy openers the next output announced, and after a ban on announcing it gave a truism. Each round names the last fault, the next output obeys and carries the same habit in an uncovered form, and the list grows and never settles. What worked was replacing what generates the line with a short paragraph, called a stance here, saying who the writer is, who the reader is, what a passing line gives the reader, and what order the page runs in, wide before narrow.

- Ban lists suit word limits, links, frontmatter and forbidden characters.
- They misfire on judgment.
- Ban lists and checkers stay as backstops, unread while writing.

## Examples

These cases come from this desk's own work in July and August 2026. They show which faults a machine can catch and which it cannot. Each is a count or an event from that work.

- 25 to 29 July 2026, one project: 38 corrections in 17 kinds.
  - Closed: 4 by a program, 2 by document repair, 1 by a rule, 10 open.
  - Each machine-closed kind had a string a script could find.
- One scene: three stronger redo orders returned the same premise and beats.
  - A fourth pass wrote the situation and discarded paths first, and was new.
- An agent ran an old file's framing over a live instruction.
  - It saw the problem halfway and decided alone to continue.
  - Doubt the model settles by itself is the sign to watch.
- 13 August 2026: 18 openings struck under a ban list.
  - Then 4 accepted first try once the stance paragraph replaced the bans.
- 52 of 235 first sentences in draft pages read like quotable cards.
  - Several writers produced them, so the habit is shared across models.

## Where it fails

Checks catch only what leaves a mark in the text. Depth, taste and reading intent on a first pass leave none, so the fix there is to change who writes first: the person writes the line, and the model places it. Checks also cost upkeep, and fixing only the spot a correction points at leaves the fault alive elsewhere.

- A forbidden-text rule cannot see a deletion, so removals need an absence check.
- A rename in page text, with the folder unchanged, was marked complete.
- Touch every place a fix applies in the same sitting.
- One bare check gave 337 findings, 313 of them one format issue.
- Re-testing four closed checks another way broke three.
- A stance paragraph copied to a second agent did not carry over.

## Claude Fable on this desk

Claude Fable does well on wide tasks over files on disk and fails on taste-bound work without examples. As of 1 September 2026 the default writer here is Grok 4.6, and Fable does research on request. Prices and versions are on the Current Agentic LLM Stack page.

- Give examples before instructions on taste-bound work.
- Point it at the real file.
- Prune dead rules.
- Encode a correction the same day.
- Ask for measures.
- Quit after three taste-bound rounds with examples and the line still missing.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: the workflow the four classes were sorted out of, and the division of labor that decides who writes first when the spec lives in the operator's head.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: the twice-means-a-missing-rule instruction this record qualifies; the doctrine layer that files the five invariants on the durable side and the model facts on the dated-tactics side.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the hub the five rules serve.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: why the accountable call stays human; the discriminator (who pays if it is wrong) that routes interpretation to the human.
- [[wiki/Concepts/The Same Model Twice|The Same Model Twice]]: cite-or-cut on the operator's own assumptions.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: where the rival "bad context, not bad model" explanation would live.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: the human analogue, the visible artifact produced to avoid the thinking the task required.
- [[journal/2026-07-25-the-least-cost-interpretation|Journal, 2026-07-25]]: the session that named the cost-function mechanism and adopted the protocol, with the three levers as first written.
- [[wiki/Concepts/The Trained Voice|The Trained Voice]]: what the default register is and where it comes from, the content a stance displaces.
- [[wiki/Writing Craft/Opening Moves Catalog|Opening Moves Catalog]]: the derived move palette the stance draws on, and the place where a rule minted from a strike would otherwise accumulate.
- [[wiki/Research/Opener Generator Research Bank|Opener Generator Research Bank]]: the full record of the opening-generation day: eighteen struck openings, every strike verbatim, the three diagnoses, and the generator.
- [[wiki/Writing Craft/The Context Problem|The Context Problem]]: a neighboring failure: the sentence uses something the page has not given, and a new ban is read by the same head that already holds the missing piece.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: where Claude Fable 5 sits among the vault's models; token-price facts live there and rot there.

## Sources

- Andrej Karpathy, *How I use LLMs* (2025). Context window as working memory; a new chat wipes it; tokens as a scarce resource.
- Andrej Karpathy, Software 3.0 talk, Y Combinator AI Startup School (2025). The coworker-who-does-not-consolidate framing of class 1.
- C. A. E. Goodhart, "Problems of Monetary Management: The U.K. Experience" (1975); Marilyn Strathern, "'Improving ratings': audit in the British University system," *European Review* 5(3) (1997). When a measure becomes a target it ceases to be a good measure: the public name for class 3.
- One documented working day of opening generation, 2026-08-13, reconstructed from the session transcript with every strike and acceptance verbatim. Counts, quotations, and round structure are held in the research bank linked above.
- The first-sentence sweep that produced the 52-of-235 figure, and the attempt catalog recording the detector-first response to the second agent, both held in the regeneration workbench.
- Anthropic, [Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), 2026-06-09, with the 2026-06-12 suspension update.
