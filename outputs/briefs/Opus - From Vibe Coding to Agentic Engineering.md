---
type: brief
status: complete
created: 2026-05-09
model: claude-opus-4-7
source: raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering.md
tags:
  - llm
  - agents
  - software-3-0
  - karpathy
---

# From Vibe Coding to Agentic Engineering

Synthesis of Andrej Karpathy's April 2026 conversation with Stephanie Zhan at Sequoia AI Ascent. The talk picks up a year after Karpathy coined "vibe coding," and frames the next phase: a more disciplined practice he calls *agentic engineering*. He argues the floor of what anyone can build has risen sharply, while the ceiling for serious practitioners is rising even faster — and that the human role is moving toward direction, taste, and understanding rather than implementation.

## The December 2025 inflection

Karpathy says the change he felt was not gradual. December 2025 was the moment models stopped needing correction. Chunks came out fine, then more chunks, then he could not remember the last time he had to edit. He calls out that many people are still living in the ChatGPT-as-search-replacement frame from earlier in the year and missed this transition. The agentic coherent workflow — where an LLM holds a project across many turns and edits and tools — is what changed, not raw model intelligence.

The relevant signal is not "what can a model do in one shot." It is "what can a coordinated agent do across many turns inside a real project."

## Software 3.0

Karpathy's now-familiar progression:

- **Software 1.0** — humans write code.
- **Software 2.0** — humans assemble datasets and architectures; weights are the program.
- **Software 3.0** — humans write context; the LLM is the interpreter.

His installer example sharpens it. The OpenClaude installer is no longer a shell script — it is a paragraph of text you paste into your agent. The agent reads its environment, debugs in the loop, and arrives at a working install. The shell script (1.0) was getting unwieldy across platforms; the paste-this-text instruction (3.0) is shorter, stronger, and more general.

Menu Gen goes further. The original app he built (OCR menu items, generate matching pictures, render a new menu) is in his words *spurious* — Gemini plus Nano Banana takes the photo directly and overlays the rendered items into the same image. The app between the user and the model should not exist. The neural network is doing the work; the prompt and the image are the program; the output is the artifact.

The broader claim: Software 3.0 is not just faster software, it makes possible things that *could not exist before*. Personal LLM-maintained knowledge bases are his example. There was no way to write code that compiles a wiki from a pile of unstructured documents — until there was.

## Verifiability and jagged skills

LLM training is now a giant reinforcement learning environment. Verification rewards drive capability. The result is jagged intelligence: deep peaks in verifiable domains (code, math) and surprisingly soft edges elsewhere. Karpathy's example: a state-of-the-art Opus 4.7 will refactor a 100,000-line codebase or find zero-day vulnerabilities, then tell you to walk to a 50-meter-away car wash. Both outputs come from the same model.

The mystery he is trying to solve: why are the edges where they are? He thinks two factors converge — what is naturally verifiable, plus what the labs *chose* to optimize for. The GPT chess jump from 3.5 to 4 was not general capability gains; it was someone at OpenAI deciding to put a large chess corpus into pre-training. You are at the mercy of what the labs include in the mix.

The practical consequence: you have to figure out which "circuits" your application sits inside. Inside the RL distribution: you fly. Outside: you struggle, and you have to consider fine-tuning your own RL environments to fill the gap. This is also the founder opportunity Karpathy hints at — verifiable domains the frontier labs aren't focusing on remain reachable for smaller players.

## Vibe coding vs. agentic engineering

The two are different practices, not different stages.

- **Vibe coding** raises the floor. Anyone can ship something. The quality bar is whatever falls out.
- **Agentic engineering** preserves the quality bar. You move faster, but you don't introduce vulnerabilities, you don't lose ownership, you don't sacrifice maintainability. Coordinating spiky stochastic agents *correctly* is its own discipline.

The 10x engineer multiplier was the previous benchmark for productivity gaps. Karpathy says the multiplier in agentic engineering is significantly larger than 10x for people who are good at it. The implication is that the gap between strong and average practitioners widens, not narrows.

## What a strong agentic engineer looks like

Karpathy's hiring critique is concrete: puzzle-solving interviews are a 1.0-era artifact. The right test is "build a real project, harden it against attack." His example: a Twitter clone for agents, with simulated activity, defended against several red-team agents trying to break in. That setup tests judgment, system-design taste, agent direction, and verification all at once.

The tooling investment matters. Just as professionals previously got the most out of vim or VS Code, they now get the most out of Claude Code, Codex, OpenClaude. Most people have not yet built the personal setup that makes them productive in this environment.

## What humans still own

Three things Karpathy keeps returning to.

**Spec design.** His Menu Gen example: the agent tried to cross-correlate a Stripe email and a Google email to identify the same user. They could be different. No human would do this. Agents do not have the common-sense priors humans take for granted. So the human writes the spec — clear identifiers, clear schemas, clear constraints — and the agent fills in the implementation details.

**Taste and aesthetics.** Karpathy says when he reads agent-generated code closely, "I get a little bit of a heart attack." It works, but it is bloaty, copy-paste-heavy, full of brittle abstractions. He attributes this to aesthetics not being part of the labs' RL signal. He hopes future models will improve, but in the meantime taste remains a human responsibility.

**Understanding.** Karpathy quotes a tweet that stuck with him: *you can outsource your thinking, but you can't outsource your understanding.* The agent does the work; the human directs the work. To direct well, the human still has to understand what is being built and why. This is one reason he is excited about LLM knowledge bases — they are tools to enhance understanding, not replace it.

## The animal-vs-ghost framing

Karpathy frames LLMs as ghosts rather than animals. They are statistical-simulation circuits with RL bolted on top — not biological intelligences shaped by curiosity, fun, or empowerment. The practical use of the metaphor is mostly about mindset: yelling at an LLM doesn't make it work better; treating it like a person leads to wrong predictions about its behavior. He admits the framing is partly philosophizing, but it shapes his expectations.

## Agent-native infrastructure

Karpathy's pet peeve: documentation is still written for humans. Most setup pages tell you what to click, what URL to visit, what menu to navigate. He wants the paste-this-into-your-agent version. His Menu Gen story illustrates the point — the writing of the app was not the slow part; the deploying of it (DNS, settings, services, menus) was. He hopes for infrastructure that lets you give an agent a prompt and get a deployed system back, with no human-clicking glue work.

The future state he predicts: agent representation for people and organizations. "I'll have my agent talk to your agent" — not as a punchline but as a real channel for routine coordination.

## Connection to existing wiki pages

This brief overlaps with several existing concept pages that were originally seeded from this same source:

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] — the discipline.
- [[wiki/Concepts/Vibe Coding|Vibe Coding]] — the floor-raising practice.
- [[wiki/Concepts/Software 3.0|Software 3.0]] — context-as-program.
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] — the infrastructure shift.
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] — the human ceiling.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] — Karpathy's framing of AI tooling.
- [[wiki/Concepts/A Return to Code|A Return to Code]] — vibe coding as direct software creation.

The brief did not surface anything that contradicts those pages. It does pull together several threads (verifiability + jagged skills + lab-distribution effects, taste + spec design + understanding) that the individual pages keep separate. A future synthesis page in `wiki/Syntheses/` could integrate them — *Building With LLM Agents*, or similar — if the user wants the unified view to live in the wiki rather than as a brief.

## Open questions

- Which of the user's current workflows would benefit most from a paste-this-to-your-agent installer pattern? (See *Agent-Native Infrastructure* for candidate places.)
- Which of the user's domains is *verifiable enough* to justify building a private RL environment, given Karpathy's framing of where founder opportunity sits?
- Is there a useful diagnostic for "am I inside the RL circuits or outside" for a given task before committing to it?
- What does the user's personal "agentic engineering setup" look like — and which parts are the highest-leverage to invest in next?

## Sources

- [[raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]] — Sequoia AI Ascent, April 29 2026.
