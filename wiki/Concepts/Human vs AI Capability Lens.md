---
title: "Human vs AI Capability Lens"
type: model
status: seed
created: 2026-06-30
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
source-count: 5
written-by: grok
model: grok
tags:
  - model
  - capability
  - ai
  - human-ai
  - ai-durability
  - taste
  - judgment
  - naval
  - framework
  - scorecard
---

# Human vs AI Capability Lens

The capability lens grades any skill on two separate scores, a Human score and an AI score. Each score is one axis of a plane, and the pair of scores places the skill in one cell of that plane. The lens does not use one bar that balances the two scores against each other. A skill can score high on both, and that both-high cell is work the person does together with an AI model. The part that stays human is origination and the call a person puts their name on. Interpolation, producing the average of what a model has already seen, does not stay human.

The two scores are not a tradeoff. A capability can sit at the top of the Human axis and also be something a model already executes well. Subtracting one score from the other would hide the both-high cell. The value derived from the two scores is which of the plane's four zones the pair lands in. It is not a single number that says which score is higher.

## Core takeaways

- Each skill gets two separate scores, Human and AI. Neither score is subtracted from the other.
- The pair of scores lands in one of four zones: Own, Augment, Delegate, or Low-leverage. Augment is both scores high, and the scores are kept separate to protect that cell.
- The human axis has five facets: Taste, Judgment, Originality, Specific knowledge, and Accountability. Accountability is the one facet a model cannot hold.
- The AI axis has five facets: Fluency, Knowledge, Scale, Verifiability, and Autonomy. Verifiability decides whether an item is Augment or Delegate.
- The known failure is inside Augment. If cheap checking leads the person to stop aiming and judging, the item moves to Delegate and the two scores are no longer independent.
- Score every item again when a new model jumps in ability. Dated model scores and prices are kept on another page, outside the lens.

## The plane and its four zones

Each axis breaks into five facets. Every item, whether a principle, a technique, or a task, lands somewhere on the Human × AI plane. The plane sorts into four zones.

| Zone | Scores | Job |
|---|---|---|
| **Own** | Human high, AI low | You decide. Master these. |
| **Augment** | Both high | The agent does the work. You aim and judge. |
| **Delegate** | AI high, Human low | Hand the item off. |
| **Low-leverage** | Both low | Set aside, or tied to a context that does not apply elsewhere. |

Keeping the two scores separate exists to protect the Augment cell. A single "human minus machine" number would score that cell as zero and discard the work you do with the model.

A move the training set has not seen and cannot reach by averaging stays on the human side. Discernment that a person is accountable for also stays on the human side. Neither is interpolation. Models are strongest at producing and recalling the average of everything, fast and cheaply, in domains where a result can be checked.

The lens is built on the split described in [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]. The verifier role, the debate over intelligence versus agency, and the house line "waste tokens, save time" are explained on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]. Specific knowledge, accountability, and leverage as public terms are explained in [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]].

## The five human facets

The human axis groups under two pillars. Discernment is choosing what is good. Origination is bringing what is good into being and owning it. The five facets sit under those two pillars.

**Taste** is recognizing what is good or great, and what to cut, before a reason is available. Generation has become cheap and produces a large amount of average work. When making a thing costs almost nothing, the scarce act is selecting.

**Judgment** is the accountable call in a messy situation with many constraints and incomplete information, where being wrong is costly and there is no retry. Reliability under genuine novelty is where current models are weakest. The Higher-Order Generativity vs Higher-Order Judgment page defines that split. This facet is the no-retry half of it.

**Originality** is the out-of-distribution move made with intent. That is a move the system has not seen and cannot reach by averaging what it has seen. Models interpolate inside their training data. Whether models have a ceiling is discussed on The AI Industrial Revolution page.

**Specific knowledge** cannot be taught. It grows from curiosity and obsession, and it is a personal mix that resists schooling and automation. It lasts because it is not in the training set.

**Accountability** is taking the risk under your own name. A model cannot hold this facet. It cannot be punished, cannot be rewarded, and cannot be trusted to stand behind a call. For this lens that is a categorical rule: Accountability is the one human facet a model is not a candidate for. Whether the facet belongs on the penta, the set of five human facets, or one level up with Agency is an open question. It is not settled.

Agency is not a sixth human facet. It sits above the five as the will that puts them to use. Its gradable form is on the AI axis, as Autonomy.

## The five AI facets

The AI axis groups under two pillars. Production is raw output. Reliability is whether you can trust the output without supervising it.

**Fluency** is coherent, integrated output. On a large class of synthesis and drafting tasks, model output now reaches the level that most working professionals reach. That level, the "median professional", has not been measured. Treat it as an impression. Do not use it as a benchmark.

**Knowledge** is breadth of recall and pattern-matching across a vast corpus.

**Scale** is speed, parallelism, and near-zero marginal cost. The house line is "waste tokens, save time". It is a working slogan. It is not a finding.

**Verifiability** is how cheaply a result can be checked against a spec, and whether the agent can check itself against a clear success criterion. Models do best where verification is cheap. They do worse on creative work at the edge of what has been done before, where verification is expensive. This is the most useful AI facet in the lens, because it is the boundary that decides Augment versus Delegate.

**Autonomy** is agentic multi-step execution: decompose, plan, use tools, run end to end. This is where Agency becomes gradable. The amount of autonomy will change with each model. The definition of the facet stays the same.

## Where the scores are used

Every standalone design doc in the vault carries a score badge. The badge has two bars, Human and AI, plus Build and Learning as relevance scores. The [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|design scorecard]] is the table this lens grades. [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] is the Agent/Human split that the same scores land on.

Graduation has one rule. An item that scores Human-5 gets its own page. [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]] is the example.

## How the lens fails

The live failure is inside Augment. High verifiability can lead the person to stop doing the aiming and judging. If no one notices, the both-high cell moves to Delegate. The two scores are then no longer independent. If the cell moves that way, the lens is wrong.

Score every item again when a model jumps in ability. The difference between models and people is shrinking fastest on the Reliability pillar. The cheapest models keep improving on Scale. The lowest level of model ability keeps rising. The spread of scores across the plane stays.

When the quality bar moves to things a gate cannot check, such as subtle naturalness, coherence across lessons, and taste, promote the work back up the human axis. For work that depends on reasoning and offers little verification, give more weight to Knowledge and Autonomy on the AI side, rather than to Fluency and Scale.

## What stays out of the lens

Dated model scores, polygon areas, and price ratios are not the lens. They go stale each time a new model is released. Their home is [[wiki/Systems/AI & Agentic Systems/Agent Glossary|What the Model Names Signal]]. The rules about how to grade stay in the lens. The numbers go on that page.

## What the grading is for

The two scores stay independent, and the both-high cell stays real, only as long as the person in Augment keeps doing the aiming and the judging. The lens is used in this order: grade, graduate, pick a zone. When a model jumps, score again. The lens shows what to keep, what to share with the model, and what to hand off. It also shows when the share cell, Augment, is emptying out.

## How to practice this

1. Take one skill or task from your own work. Give it a Human score and an AI score, and do not subtract one from the other. Notice which of the four zones the pair lands in.
2. For an item that scores high on both, name who does the aiming and who does the judging. If the model now does both, notice that the item has moved to Delegate.
3. For each item, notice how cheaply the result can be checked against a spec. Cheap checking moves the item toward Delegate. A check that no gate can run keeps the work on the human axis.
4. When an item scores Human-5, give it its own page. Wabi-Sabi is the example. Notice which of your items reach that score.
5. When a new model jumps in ability, score every item again. Notice which items changed zone, and whether the Augment cell holds fewer items than before.
6. Keep dated model scores, polygon areas, and price ratios out of the grading rules. Notice whether any rule you use depends on a number from one release.

## Related pages

- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|design scorecard]]: the table this lens grades.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: the split this lens is built on.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: verifier role, intelligence versus agency, "waste tokens save time."
- [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]]: specific knowledge, accountability, leverage.
- [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]]: a Human-5 that graduates to its own page.
- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]: the Agent/Human split this lens grades.
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|What the Model Names Signal]]: natural home for the dated snapshot table.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: related skill list for the same year.
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: the offloading line. The artifact arrives either way, the encoding must not be handed over.
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]]: interpretability substrate for the two axes. The lens is not the Global Workspace paper.

## Open questions

Are the axes truly independent, or does high AI verifiability lower Human over time, Augment sliding to Delegate?

Does Accountability belong on the penta, or one level up with Agency?

How fast is the Reliability pillar closing?

## Sources

- Naval Ravikant, *The Almanack of Naval Ravikant* (compiled by Eric Jorgenson). Specific knowledge, accountability, leverage.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]. The split the lens is built on.
- Naval Ravikant and Nivi, industrial-revolution episode (2026). Verifier role; "waste tokens, save time."
- [Wealest](https://www.wealest.com/) summary of Naval on judgment and taste. Secondary, reachable.
- [Office Chai](https://officechai.com/) on design as an AI moat. Secondary, reachable.
