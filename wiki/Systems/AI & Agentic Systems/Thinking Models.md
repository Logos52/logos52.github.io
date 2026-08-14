---
title: "Thinking Models"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 5
tags:
  - llm
  - reasoning
  - models
---

# Thinking Models

A thinking model is a language model, or a mode of one, that spends extra computation on the way to an answer. That extra time helps on hard checkable work — math, code, diagnosis — and wastes time on recall and chat.

## When to spend it

The operator rule is stay on the fast model until the problem is hard or the first answer needs a second look. A fast model, or non-thinking mode, is the low-latency generation with no extra reasoning budget. A verifiable task is one whose wrong answers are cheap to catch — a test, a compiler, a known quantity.

The class is most effective on difficult problems in math and code. It also earns its keep on ambiguous technical diagnosis and on high-value decisions where waiting is acceptable. Multi-step reasoning is in the same neighbourhood, with a bound: some multi-step work is just recall chained, and extra compute does not help recall.

One worked case, de-prefixed. A gradient-check failed on a pack/unpack mismatch. A fast pass missed it. An extended-reasoning pass found it after about a minute. That is the shape: a fault a person can check, hidden in a step a fast pass skips.

They do not help, and they cost latency, on simple recall, travel advice, and low-stakes chat. Waiting a minute for a model to think about destinations is the tell. Avoid four things: simple recall; basic ideation; low-stakes chat; any task where extra latency adds no value.

| Spend it | Do not |
|---|---|
| Difficult math and logic | Simple recall |
| Difficult code, including a hidden bug | Basic ideation |
| Ambiguous technical diagnosis | Low-stakes chat |
| High-value decisions when a minute is cheap | Travel advice, and anything else where waiting adds nothing |

## Why extra time helps

The extra compute is not a personality. It is test-time compute, trained with reinforcement learning on problems that have a right answer. That is why extra time helps at all: the labs built rewards on math and code, so more tokens at answer-time move those scores. Where they did not build rewards, the same dial does little.

That is the jaggedness. Thinking models peak on verifiable domains and stay rough everywhere else. They are not a general intelligence dial. They are a dial on the verifiable slice. A non-thinking frontier model can still beat a thinking one on a given bug. When the wait does not change a checkable answer, the task was not in the slice.

## The same spend, two dials

Fast-default and think-when-hard is the same logic applied twice. One dial is reasoning depth. The other is which model you ask. Spend intelligence where verification is expensive. Economize it where checks are cheap. That sentence is what makes the two halves of this page one page. The operator routing that budget sits inside is [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]].

## Where verification is expensive

One choice-layer claim: judgment is worth buying at the top of the market when the decision sits in front of capital, code, or a public message. That is not the definition of the class. It is a rule about when the class, or the strongest model, is worth the wait.

The reason is not taste. The moment you can no longer tell which of two answers is right, the cheaper model is no longer a bargain — a miss on consequential work is often invisible. That is why trading intelligence for price fails in the seats where a person cannot check.

The other half of the same rule: cheaper and open models earn their place on high-volume work a test can catch — support, browser automation — where a wrong answer is cheap to see. One production gateway reports that frontier intelligence at the right cost and latency still wins most of its traffic. That is one gateway's mix, dated, not a census of the industry.

Which model to spend where, by facet, is [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]. The Naval/Rauch tension — always-smartest against cheap-where-caught — lives on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## What is actually known

More thinking tokens are not always better. Overthinking can hurt on easy items. Chain-of-thought traces are not a faithful transcript of the computation; that claim is owned by [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]], not restated here. Tools are a different axis from thinking — [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]. Shaping the window is not the same as extra compute — [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]. An interpretability view of extended reasoning sits on [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]]; this page does not become that paper.

The case against the class as a max-the-dial: extra compute is a dial on the verifiable slice; a non-thinking frontier model can still win a given bug; overthinking can hurt; traces are not a window onto the work; a 2025 vendor picture that treated the class as one lab's product line is already false. The price is latency — a minute is the source's own unit — and the hosted meter on reasoning tokens. Quit if you are waiting a minute on travel advice or recall. Quit if a second thinking pass does not change the answer on a checkable item. Quit if the class is being used as a personality upgrade on taste-bound work.

On the next hard debug or proof, the extended-reasoning pass either finds a fault the fast pass missed, or it does not. If it does not twice in a row, the task was not in the verifiable slice.

Extra time is a dial on the verifiable slice, not a personality and not a general upgrade. Stay fast until the work is hard, or until the first answer is not enough.

## Related

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — Naval vs Rauch: spend intelligence where verification is expensive.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — which model to spend where, by facet.
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]] — tools are a different axis from thinking.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — window-shaping is not the same as extra compute.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the hub this routing rule sits under.
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] — interpretability view of extended reasoning; this page is not that paper.
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] — the operator routing this page's budget sits inside, and the owner of the unfaithful-trace claim.

## Open Questions

- Which tasks in this wiki deserve a thinking model?
- Should lint passes use a thinking model by default?

## Sources

- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw), ~23:07–30:28. Fast-default / think-when-hard, the travel-advice tell, the gradient-check case.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — Naval's always-smartest and Rauch's cheap-where-caught.
- Daya Guo et al., [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948), arXiv:2501.12948, 2025.
- OpenAI, [o1 System Card](https://openai.com/index/openai-o1-system-card/), December 2024.
- Charlie Snell et al., [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314), arXiv:2408.03314, 2024.
