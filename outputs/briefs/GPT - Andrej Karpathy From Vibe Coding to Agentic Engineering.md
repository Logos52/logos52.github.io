---
title: "GPT - Andrej Karpathy: From Vibe Coding to Agentic Engineering"
type: brief
status: draft
created: 2026-05-10
updated: 2026-05-10
model: GPT-5.5
source: "raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering.md"
source_url: "https://www.youtube.com/watch?v=96jN2OCOfLs"
tags:
  - output
  - agentic-engineering
  - vibe-coding
  - software-3
  - llm-knowledge-systems
---

# GPT - Andrej Karpathy: From Vibe Coding to Agentic Engineering

## Core Thesis

Karpathy's central point is that recent LLMs are not only making existing programming faster. They are changing the unit of work. The programmer is no longer just writing code over structured data; the programmer is directing neural systems over messy information, raw media, local environments, source documents, and tools. This creates a new workflow where the human writes intent, context, constraints, and taste, while agents do more of the execution.

The practical implication is not "stop learning how things work." It is the opposite. The more execution becomes cheap, the more valuable it becomes to know what should be built, what should not exist, where agents are brittle, and when their output is merely plausible instead of correct.

## Compressed Takeaways

1. **Vibe coding raised the floor.** More people can build working software, prototypes, and side projects.
2. **Agentic engineering raises the ceiling.** The stronger discipline is coordinating agents without losing quality, security, taste, or architectural judgment.
3. **Software 3.0 changes the interface.** Prompts, context, specs, and agent-readable instructions become a new layer of programming.
4. **Many apps are transitional artifacts.** Some workflows that used to need OCR, parsing, UI, and glue code can now be handled directly by multimodal neural models.
5. **LLM knowledge bases are a new kind of information processing.** They do not merely search documents; they recompile documents into durable, linked structures.
6. **Verifiability explains uneven capability.** Models improve fastest where outputs can be checked, rewarded, and reinforced.
7. **LLMs are jagged.** They can refactor large codebases and still fail simple common-sense edge cases.
8. **The human bottleneck is understanding.** You can delegate thinking steps, but you still need enough understanding to direct the work.

## From Vibe Coding to Agentic Engineering

Karpathy separates two related but different ideas:

- **Vibe coding**: using models to build software by feel, conversation, and iteration.
- **Agentic engineering**: using agents professionally while preserving the standards of engineering.

The distinction matters because vibe coding can produce working things that are fragile, insecure, bloated, or conceptually wrong. Agentic engineering keeps the speed but adds discipline. The human remains responsible for the spec, system boundaries, identity model, data model, deployment constraints, security posture, and the final taste of the thing.

In Karpathy's framing, agents are closer to powerful interns than autonomous senior engineers. They can generate large amounts of useful work, but they can also make strange local decisions. His example of an agent matching Stripe and Google accounts by email instead of persistent user ID is the kind of failure that looks small until it breaks the product's foundation.

This is why [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] should not mean "let the agent build everything." It should mean:

1. Write the target clearly.
2. Give the agent the right local context.
3. Let it execute bounded chunks.
4. Review the assumptions, interfaces, and edge cases.
5. Iterate until the artifact is coherent, not merely working.

## Software 3.0

Karpathy uses **Software 3.0** to describe LLMs as programmable computers. Software 1.0 was explicit code. Software 2.0 was learned weights. Software 3.0 is context, prompts, examples, documents, images, tools, and instructions being interpreted by a general model.

The installation example captures the shift. In a Software 1.0 mindset, installation is a shell script that must encode every branch and platform variation. In a Software 3.0 mindset, installation can be a block of text handed to an agent. The agent reads the environment, tries commands, notices errors, and adapts.

This is a different way to package work:

- The artifact is not only code.
- The artifact may be an instruction set for an agent.
- The runtime may be the local environment plus a model.
- The "program" may be a prompt, a context bundle, or a procedure written for an agent rather than for a human.

This points toward [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: docs, APIs, CLIs, logs, and deployment surfaces designed so agents can act directly instead of asking the human to click around.

## The Menu Gen Lesson

The Menu Gen example is useful because it shows how quickly old product instincts can become obsolete.

The old version of the product looked like a conventional app:

1. Upload a restaurant menu photo.
2. OCR the text.
3. Extract menu item names.
4. Generate images for each item.
5. Re-render the menu in an app UI.

The Software 3.0 version is much more direct:

1. Give the menu image to a multimodal model.
2. Ask it to overlay representative food images onto the menu itself.
3. Receive a transformed image.

The important lesson is not that every app should be replaced by a prompt. The lesson is that builders should now ask whether the product is solving the real problem or preserving an old pipeline. A large amount of glue code may exist only because the previous generation of tools could not operate directly on messy inputs.

## LLM Knowledge Bases

Karpathy's LLM knowledge base idea fits directly into this site. A personal knowledge base is not just a search index over sources. It is a compiled layer between raw sources and future questions.

The workflow is:

1. Raw sources are collected.
2. An LLM reads them.
3. The LLM writes summaries, concept pages, backlinks, indexes, and syntheses.
4. Future questions operate against the compiled wiki instead of rediscovering the raw material every time.
5. Good answers get filed back into the system.

This is closer to a build process than a chat session. The sources are the inputs. The wiki is the compiled artifact. The human is the editor, curator, and director.

For this repo, the new pattern can be:

1. **Raw**: source transcripts, papers, articles, PDFs, notes.
2. **Output**: GPT-produced briefs, answers, diagrams, drafts, and synthesis artifacts.
3. **Wiki**: stable pages that deserve to become part of the public knowledge base.
4. **Journal**: active questions, current threads, and public thinking logs.
5. **Blog**: polished personal arguments or essays.

This file belongs in the **Output** layer. It is a reusable working synthesis, not yet a canonical wiki page.

## Verifiability and Jagged Intelligence

Karpathy's explanation of model capability is mostly about **verifiability**. Models improve fastest where labs can define rewards, run reinforcement learning, and verify outputs. This is why math, code, and similar domains advance quickly.

The danger is assuming that high ability in one domain transfers smoothly to another. LLM capability is jagged. A model may be strong inside a reinforced circuit and surprisingly weak outside it. This is why the human still needs [[wiki/Red Team/Applied Critical Thinking|Applied Critical Thinking]] when using AI.

The working rule:

- If the output is verifiable, push the model hard.
- If the output is not easily verifiable, keep the model on a shorter leash.
- If the model is outside its trained circuits, expect strange failures.
- If the domain matters, create tests, examples, rubrics, or adversarial checks.

This is also where AI and Red Team practice overlap. The task is not to slow every decision down. The task is to know which assumptions are load-bearing and which errors would be expensive.

## The Human Role

Karpathy's clearest education point is that understanding cannot be outsourced. LLMs can create summaries, code, drafts, options, and plans, but the human still has to know what matters.

The human role shifts toward:

- Framing the problem.
- Choosing the right level of abstraction.
- Maintaining taste.
- Writing specs.
- Reviewing interfaces.
- Detecting brittle assumptions.
- Knowing when an answer is outside the model's reliable range.
- Deciding what should be remembered, published, or discarded.

This links strongly to [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]. A knowledge base is not valuable because it stores everything. It is valuable because it helps the human understand enough to direct future work.

## Agent-Native Workflow

Karpathy's agent-native world is one where tools expose sensors and actuators to agents. The current web and software stack still assumes humans will read docs, click menus, fill out forms, and configure services manually. That is increasingly awkward.

Agent-native systems should provide:

- Copy-pasteable agent instructions.
- CLI-first actions.
- Clear logs and error messages.
- Machine-readable configuration.
- Deterministic checks.
- Explicit permissions.
- Local context files.
- Small, inspectable commands.
- Documentation written for agents and humans.

In this repo, that implies:

- Keep `AGENTS.md` as the operating schema.
- Keep `README.md` as the human-facing map.
- Keep `log.md` as the chronological memory.
- Use `raw/` for source truth.
- Use `outputs/` for intermediate synthesis.
- Promote only stable, useful material into `wiki/`.

## Useful Distinctions

| Distinction | Meaning |
|---|---|
| Vibe coding vs agentic engineering | Vibe coding is generative building by feel. Agentic engineering adds quality control, architecture, and responsibility. |
| Automation vs understanding | Agents can do work, but the human still needs enough understanding to direct and evaluate that work. |
| Search vs compilation | Search retrieves fragments. Compilation builds a durable synthesis that future work can reuse. |
| Prompt vs product | Some workflows no longer need a traditional app layer; others still need durable software, state, permissions, and UX. |
| Verifiable vs non-verifiable work | Models are strongest where outputs can be checked. Human judgment matters more where verification is weak. |
| Agent-readable vs human-only docs | Future docs should let agents act, not merely tell humans what to click. |

## Open Questions

1. Which parts of this knowledge base should stay in `outputs/` rather than becoming canonical wiki pages?
2. What is the minimum quality bar before an output gets promoted into `wiki/`?
3. Should every major raw source produce a `GPT - Source Title` brief before wiki integration?
4. Should the site expose selected outputs publicly, or should outputs remain a local workbench?
5. Which workflows in this repo are still old-pipeline thinking, like the first Menu Gen design?
6. What would an agent-native version of this entire Quartz/Obsidian system look like?
7. Which human judgments should never be delegated: taste, publication, privacy, or source selection?

## Candidate Wiki Updates

This brief suggests possible updates to:

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Vibe Coding|Vibe Coding]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]
- [[wiki/Red Team/Applied Critical Thinking|Applied Critical Thinking]]

Possible new pages:

- **Understanding Bottleneck**: the human limit that remains after execution gets cheap.
- **Output Layer**: the repo workflow where GPT-generated briefs sit between raw sources and stable wiki pages.
- **Agent-Readable Documentation**: how docs, setup instructions, and workflows should change for agents.

