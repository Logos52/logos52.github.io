---
title: "Human vs AI Capability Lens"
type: model
status: seed
created: 2026-06-30
updated: 2026-08-14
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

The capability lens grades any skill on two independent scores, Human and AI, not on one balance bar. A thing can be high on both, and that cell is work with the machine, not against it. What stays human is origination and the call you put your name on, not interpolation.

The two scores are not a tradeoff. A capability can sit at the top of the human axis and still be something a model already executes well. Subtracting one score from the other would hide that cell. The derived field is the zone the pair lands in, not a skew.

## The plane

Each axis breaks into five facets. Every item — a principle, a technique, a task — lands somewhere on the Human × AI plane, and the plane sorts into four zones.

| Zone | Scores | Job |
|---|---|---|
| **Own** | Human high, AI low | Your call. Master these. |
| **Augment** | Both high | The agent does the work. You aim and judge. |
| **Delegate** | AI high, Human low | Hand it off. |
| **Low-leverage** | Both low | Parked, or bound to a context that will not travel. |

Augment is the cell independence exists to protect. A single "human minus machine" number would score that cell as a wash and throw away the work you do *with* the model.

What stays on the human side is the part that is not interpolation — a move the training set has not seen and cannot reach by averaging, plus accountable discernment. Models are strongest at producing and recalling the average of everything, fast and cheaply, in domains where a result can be checked. The split this lens consumes is [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]. The verifier role, the intelligence-versus-agency debate, and the house line "waste tokens, save time" live on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]. This page does not recap them. Specific knowledge, accountability, and leverage as public terms sit in [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]].

## Ten facets

The human axis groups under two pillars. **Discernment** is choosing the good. **Origination** is bringing the good into being, and owning it. The five facets sit under those two.

**Taste** is recognizing what is good or great, and what to cut, before a reason is available. Generation has become cheap and fills the room with average work. When making a thing costs almost nothing, the scarce act is selection.

**Judgment** is the accountable call in a messy, multi-constraint situation with incomplete information, where being wrong is costly and there is no retry. Reliability under genuine novelty is where current models are weakest. The sibling page owns the split; this facet is the no-retry half of it.

**Originality** is the out-of-distribution move made *with intent* — a move the system has not seen and cannot reach by averaging what it has seen. Models interpolate inside their training. The ceiling talk belongs on the industrial-revolution page, in one clause here.

**Specific knowledge** is un-teachable, curiosity-grown and obsession-grown: the idiosyncratic blend that resists schooling and automation. It lasts because it is not in the training set.

**Accountability** is taking the risk under your own name. A model cannot occupy this facet. It cannot be punished, cannot be rewarded, and cannot be trusted to stand behind a call. For this lens that is a categorical: the one human facet a model is not a candidate for. Whether the facet belongs on the penta or one level up with Agency is an open question. This page does not resolve it.

Agency is not a sixth human facet. It sits above the five as the will that deploys them. Its gradable form lives on the AI axis as Autonomy.

The AI axis groups under **Production** (raw output) and **Reliability** (whether you can trust it unsupervised).

**Fluency** is coherent, integrated output. On a large class of synthesis and drafting tasks, generativity now clears what most working professionals clear. "Median professional" is unmeasured; treat it as atmosphere, not a benchmark.

**Knowledge** is breadth of recall and pattern-matching across a vast corpus.

**Scale** is speed, parallelism, and near-zero marginal cost. The house line is waste tokens, save time. That is a working slogan, not a finding.

**Verifiability** is how cheaply a result can be checked against a spec, and whether the agent can self-check against a clear success criterion. Models win where verification is cheap. They degrade at the creative frontier, where it is not. This is the most useful AI facet on the page: it is the boundary that decides Augment versus Delegate.

**Autonomy** is agentic multi-step execution — decompose, plan, use tools, run end to end. That is where Agency becomes gradable. The degree will move. The kind will not.

## How it is used, and how it fails

Every standalone design doc in the vault carries a score badge: two bars, Human and AI, plus Build and Learning as relevance. The [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|design scorecard]] is the table this lens grades. [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] is the Agent/Human split the same scores land on. Graduation is simple: a Human-5 — [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]] is the named case — gets its own page.

The live failure is inside Augment. If high verifiability quietly trains the person out of the loop, the both-high cell slides to Delegate and the independence claim is false. That is the question that would break the model. Re-grade when a model jumps. The Reliability pillar is closing fastest; the cheap tier keeps rising on Scale. The floor moves. The spread persists.

When the quality bar moves to what a gate cannot check — subtle naturalness, cross-lesson coherence, taste — promote the work back up the human axis. Reasoning-bound, verification-scarce work should up-weight Knowledge and Autonomy on the AI side, not Fluency and Scale.

Dated model scores, polygon areas, and price ratios are not the lens. They rot on a release. Their home is [[wiki/Systems/AI & Agentic Systems/What the Model Names Signal|What the Model Names Signal]]. The prescriptions about *how to grade* stay here. The numbers do not.

The two scores are still independent, and the both-high cell is still real, only as long as the person in Augment keeps doing the aiming and the judging. Grade, graduate, pick a zone. When a model jumps, score again. The lens is a way to see what to keep, what to share, and what to hand off — and a way to notice the share cell emptying out.

## Related

- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|design scorecard]] — the table this lens grades.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — the split this lens consumes.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — verifier role, intelligence versus agency, "waste tokens save time."
- [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]] — specific knowledge, accountability, leverage.
- [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]] — a Human-5 that graduates to its own page.
- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] — the Agent/Human split this lens grades.
- [[wiki/Systems/AI & Agentic Systems/What the Model Names Signal|What the Model Names Signal]] — natural home for the dated snapshot table.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]] — related skill list for the same year.
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]] — the offloading line: the artifact arrives either way, the encoding must not be handed over.
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] — interpretability substrate for the two axes. This page is not that paper.

## Open Questions

Are the axes truly independent, or does high AI verifiability lower Human over time — Augment sliding to Delegate?

Does Accountability belong on the penta, or one level up with Agency?

How fast is the Reliability pillar closing?

## Sources

- Naval Ravikant, *The Almanack of Naval Ravikant* (compiled by Eric Jorgenson). Specific knowledge, accountability, leverage.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]. The split the lens consumes.
- Naval Ravikant and Nivi, industrial-revolution episode (2026). Verifier role; "waste tokens, save time."
- [Wealest](https://www.wealest.com/) summary of Naval on judgment and taste. Secondary, reachable.
- [Office Chai](https://officechai.com/) on design as an AI moat. Secondary, reachable.
