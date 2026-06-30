---
date: 2026-06-30
tags: [design, human-ai, ai-durability, naval, taste, judgment, scorecard, agentic-engineering, decision]
---

# Human × AI capability lens + design technique extraction

**Verdict:** Two design books — *Refactoring UI* and *Universal Principles of Design* — were mined into a two-track catalog (machine-executable rules vs. human-judgment calls), and that split was generalized into a durable model, [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: every capability is scored on two *independent* axes (Human, AI), each decomposed into five facets, each item landing in one of four zones — Own, Augment, Delegate, Low-leverage. The facet sets are locked and traced to the vault's own [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs. Judgment]] plus Naval; the ~250-row master scorecard and the per-doc score badge are specced and pending build.

## What shipped

- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]] — 19 sources to push the Norman-only Design notes multi-source.
- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] plus [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track]] (66 executable rules) and [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track]] (35 judgment entries), extracted from *Refactoring UI* (3,690 lines of text) and *Universal Principles of Design* (200 principles, 14,503 lines). Both PDFs and their extracted text are staged in `raw/sources/design/`.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the model below.

## The model

Two independent axes, not a balance bar: a capability can be Human 5 *and* AI 4, which is its own zone (Augment).

- **Human** — Discernment: Taste, Judgment. Origination: Originality, Specific Knowledge, Accountability.
- **AI** — Production: Fluency, Knowledge, Scale. Reliability: Verifiability, Autonomy.
- **Mirror pairs:** Originality↔Fluency (extrapolation vs. interpolation), Specific Knowledge↔Knowledge (private vs. public/average), Judgment+Accountability↔Verifiability (the uncheckable call vs. the checkable spec), Agency↔Autonomy (will vs. execution). Unpaired: **Taste** (human moat with no machine counterpart) and **Scale** (machine advantage with no human counterpart).

## Decision ledger

| Decided | Why | Ruled out |
|---|---|---|
| Human facets: Taste · Judgment · Originality · Specific Knowledge · Accountability | Traced to the Higher-Order note ("what stays human is OOD origination + accountable discernment") and Naval | Perception, Creativity-as-such, Meaning — the vault never held them up as durable edges |
| Keep Accountability over Agency | The one facet categorically impossible for a model; Agency is contested in the sources and already captured elsewhere | — |
| Agency → AI axis as Autonomy, plus the meta-will above the human penta | It was doing double duty; on the AI side it is concrete and gradable | Agency as a sixth human facet |
| AI facets: Fluency · Knowledge · Scale · Verifiability · Autonomy | Durable dimensions of machine capability; mirror the human five plus Scale | — |
| "Order" (low/high) is a derived label, not a penta axis | It is the composite (polygon size / model tier), not a component; an axis would double-count and hide *which* facet makes a model higher-order | Low/High Order as a sixth AI axis |
| Badge: two independent value-colored bars (Human, AI) + Build/Learning relevance; Human expands to the penta on the published site | Honest about independence; degrades to static bars in Obsidian | The diverging Human⇄AI skew bar (falsely treated the axes as a tradeoff) |
| Master scorecard stays flat numeric columns (Human/AI/Build/Learning + Zone) | A penta per row across 250 rows is noise | Per-row radars |
| Graduation: Human-5 standouts (e.g. Wabi-Sabi) get their own page | High-signal only; the rest are rows | One page per principle |

**Flip condition:** if the lens is read as a personal-growth compass rather than a durability map, Agency replaces Accountability in the human five — Accountability is automatic for a solo operator, so initiative is the scarcer edge.

## Price

The lens is a dated snapshot, not a law. AI scores drift upward as models improve, so per-task AI grades are made against the current frontier and carry a `last-audited` date. The Reliability pillar (Verifiability, Autonomy) is closing fastest; the model is load-bearing only while that gap holds. A persistent cheap/fast tier (Scale traded against frontier reasoning) keeps "Order" a moving band, not a category that collapses.

## Open questions

- Are the two axes truly independent, or does rising AI verifiability quietly lower the Human score over time — today's Augment becoming tomorrow's Delegate?
- Does Accountability belong on the human penta, or one level up with Agency as a precondition?
- Build the ~250-row scorecard against the current frontier — on what cadence does it get re-audited before the scores rot?

## Provenance

This Cowork session. Grounded in the two PDFs read directly, the vault's [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs. Judgment]], [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]], and [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]], plus a web check of Naval's current taste / judgment / specific-knowledge framing.
