---
title: "Don't Outsource the Learning"
type: concept
status: developing
created: 2026-05-23
updated: 2026-05-23
source-count: 1
tags:
  - ai-use
  - learning
  - cognitive-offloading
---

# Don't Outsource the Learning

## Core Thesis

The central finding is precise: the tool doesn't determine the outcome — the posture does. Engineers who used AI to ask conceptual questions scored significantly higher on follow-up comprehension than those who copy-pasted generated code from the same model. AI can sharpen understanding rather than erode it, but only when active learning intent drives the interaction.

That intent requires a deliberate workflow — the default is optimised for closing tasks, not building understanding. The friction AI removes was also where comprehension was built. The fix isn't to use AI less; it's to restructure the prompting sequence: form a hypothesis before asking, request explanation before code, and treat generated output the way you'd treat a pull request. Small posture shifts inside the same tools — and they're what separate engineers who grow alongside AI from those who quietly lose ground to it.

The tools won't choose this posture for you. They're optimised for shipping, not for learning. That second metric is self-directed — and the only way to track it is to start asking, at the end of each session, whether you moved.

For a broader workflow that uses AI without handing over schema formation, see [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]].

## Compressed Takeaways

1. **Posture determines outcome, not the tool.** Asking conceptual questions and testing your model produces measurably better comprehension than copy-pasting a fix from the same model.
2. **Ship and learn are separate metrics.** Closing the task does not prove capability improved.
3. **Understanding has to move.** If the bug disappears but the mental model stays unchanged, the session bought speed without growth.
4. **AI defaults optimise for task closure.** The product loop rewards fewer keystrokes and faster fixes — not stronger engineers.
5. **Friction is where the learning lives.** Prediction, explanation, critique, and reconstruction are the parts that build skill. Some struggle should remain.
6. **Delegation is context-dependent.** Boilerplate and throwaway glue can be delegated. Architecture, debugging, unfamiliar systems, and off-median problems require comprehension.
7. **The fix is workflow design.** Form a hypothesis, ask for explanation before code, critique output, re-derive occasionally, ask what concepts were used.

## The Operating Model

The learning loop:

```text
task or bug appears
→ form initial hypothesis
→ ask AI to explain mechanisms, options, tradeoffs
→ compare answer against hypothesis
→ ask AI for code or fix
→ review output like a PR
→ reconstruct the key move
→ task closes, mental model improves
```

The debt loop:

```text
task or bug appears
→ paste into AI
→ accept generated fix
→ symptom disappears
→ no reconstruction happens
→ future debugging and architecture judgment weaken
```

The difference is not whether AI is used — it's whether AI replaces the learning loop or accelerates it.

## Two Metrics

Every session has two outcomes:

1. What shipped?
2. What improved in the operator?

The first is visible. The second is easy to ignore — code can compile, tests can pass, and the issue can close even when nothing was learned. Over a single session, that's fine. Over months, the gap compounds.

> Did I learn anything today, or did I only close issues?

A healthy workflow doesn't require every task to be a lesson. Some work should be delegated cleanly. The risk appears when issue closure becomes the only metric for long enough that calibration quietly erodes.

## The Learning-Preserving Workflow

### 1. Form a Hypothesis First

Before asking for a fix, write two or three sentences on what you think is happening. This makes the AI's answer a test of your model rather than a replacement for it.

> I think the bug is caused by X because Y. Check my hypothesis, explain what I'm missing, then suggest the smallest fix.

### 2. Ask for Explanation Before Code

When the territory is unfamiliar, start with mechanism and tradeoffs — not implementation.

> Explain how this works, what alternatives exist, and what tradeoffs matter. Don't write code yet.

If code arrives first, it anchors the frame before you've built one. The order of operations matters.

### 3. Treat Output Like a Pull Request

Review generated code as if it came from a fast junior engineer. Ask:
- Does this fit the architecture?
- What assumption is it making?
- What failure case is missing?
- What did it change that I didn't ask for?
- Would I merge this if tests passed but the design felt wrong?

Passing tests are useful. They are not a substitute for judgment.

### 4. Re-Derive Periodically

Take a generated function, pattern, or fix and recreate it from scratch without looking. If you can't rebuild the move, you may have shipped code without acquiring the capability.

This doesn't need to happen on every task — just often enough to keep the mental model honest.

### 5. Ask What Concepts Were Used

After a useful generated solution, ask for the underlying concepts.

> What concepts did this solution use, and what would I need to understand to design this myself next time?

One extra prompt turns a finished task into a learning asset.

## Where Delegation Is Fine

Some work is not worth deeply internalising. Good candidates for clean delegation:
- boilerplate
- glue code
- one-off scripts
- familiar syntax lookup
- small formatting transformations
- low-risk repetitive tasks

Delegation is appropriate when the output doesn't affect future judgment much, the domain is already understood, or the cost of learning the detail exceeds the value.

The rule is not "always learn everything." The rule is:

> Keep ownership of the parts that future judgment depends on.

## Where Comprehension Matters

Comprehension becomes load-bearing when:
- something breaks and needs diagnosing
- the generated answer is plausible but wrong
- the architecture has long-term consequences
- a dependency, framework, or security requirement changes
- the problem leaves the median solved-on-GitHub path
- the code becomes part of a system other people depend on
- the work justifies senior judgment

In those cases, prompting around the problem is not enough. You need enough understanding to steer, reject, debug, and migrate.

## What It Should Feel Like

Good AI-assisted learning feels like accelerated apprenticeship.

Useful signs:
- you predict before asking
- the AI answer changes or refines your model
- you can explain the fix afterward
- you know why one approach was chosen over another
- you can reject plausible but wrong output
- the next similar task feels easier
- speed increases without losing comprehension

Warning signs:
- bugs vanish but your model doesn't change
- you can't explain what was merged
- every unfamiliar task starts with paste-and-wait
- the AI frames the problem before you do
- you accept code because tests passed
- you feel faster but less capable without the tool

## Links Into the Knowledge Base

- [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]] — forming a hypothesis and testing it against the model's answer is the experiential cycle running inside an AI-assisted workflow
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]] — the two-metric check is a self-regulation practice; metacognition is the monitoring layer that notices when AI is helping you think vs. helping you avoid thinking
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]] — the posture distinction maps directly here: passive copy-paste vs. active conceptual engagement
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — cognitive debt is the long-run version of offloaded cognitive load; effort not spent now is understanding not built
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|Live Clinic 60: The Right vs Wrong Way to Use AI]] — direct overlap on the posture-over-tool argument
- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]] — practical learning workflow that uses AI for friction removal while keeping schema ownership with the learner

## Open Questions

1. Which parts of your current AI workflow improve judgment, and which only close tasks?
2. Which recurring tasks can be delegated without capability loss? Which are too load-bearing to outsource?
3. Should the wiki include a dedicated page on **AI Posture** — the prompting behaviours that preserve and build mental models during AI-assisted work?
4. How does the "order of operations" finding interact with the Aim phase in Bear Hunter System? Should Aim explicitly precede AI involvement on a new topic?
5. Should every AI-assisted session end with a short "what did I learn?" note — and if so, where does it live?

## Sources

- Source clipping: Don't Outsource the Learning, May 2026.
