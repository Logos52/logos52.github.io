---
type: source-index
created: 2026-05-02
updated: 2026-05-06
---

# Source Index

This index lets `raw/` and `Clippings/` remain dump directories while still giving the LLM a manifest of what exists and what has been compiled.

## Public Raw Sources

| Source | Type | Status | Main Topics | Compile Targets |
| --- | --- | --- | --- | --- |
| [[raw/Watch This For 18 Minutes, and You’ll Outlearn 99.9% Of People|Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People]] | YouTube transcript | partially compiled | metacognition, passive vs active learning, radar building | [[wiki/Concepts/Metacognition|Metacognition]], [[wiki/Techniques/Building the Radar|Building the Radar]], [[wiki/Concepts/Active vs Passive Learning|Active vs Passive Learning]] |
| [[raw/How to Think So Clearly People Assume You’re A Genius|How to Think So Clearly People Assume You're A Genius]] | YouTube transcript | partially compiled | cognitive overload, working memory, dependency mapping, confidence intervals | [[wiki/Concepts/Cognitive Load as Signal|Cognitive Load as Signal]], [[wiki/Techniques/Thinking on Paper|Thinking on Paper]] |
| [[raw/How to Use Neuroscience To Learn Skills Like The Top 1%|How to Use Neuroscience To Learn Skills Like The Top 1%]] | YouTube transcript | partially compiled | unlearning, habits, reward recalibration, pattern interrupts | [[wiki/Concepts/Unlearning Learning Habits|Unlearning Learning Habits]], [[wiki/Concepts/Metacognition|Metacognition]] |
| [[raw/How to Learn Anything Faster Using Modern Research|How to Learn Anything Faster Using Modern Research]] | YouTube transcript | partially compiled | deep processing, conditional knowledge, feedback, intuition | [[wiki/Dimensions/Deep Processing|Deep Processing]], [[wiki/Concepts/Metacognition|Metacognition]] |
| [[raw/If You Have A Bad Memory, I’ll Help You Fix It In 28 Minutes|If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes]] | YouTube transcript | partially compiled | memory handling, working memory, cognitive offload, retrieval | [[wiki/Concepts/Memory Handling|Memory Handling]], [[wiki/Techniques/Thinking on Paper|Thinking on Paper]] |
| [[raw/Learn to Learn in 4hrs 54mins - Full Course|Learn to Learn in 4hrs 54mins - Full Course]] | YouTube transcript | partially compiled | retrieval, encoding, mind mapping, skill acquisition | [[wiki/Concepts/Metacognition|Metacognition]], [[wiki/Dimensions/Deep Processing|Deep Processing]], [[wiki/Dimensions/Retrieval|Retrieval]], [[wiki/Concepts/Memory Handling|Memory Handling]] |
| [[raw/Private Workshop - How to Learn Anything Faster|Private Workshop - How to Learn Anything Faster]] | YouTube transcript | queued | processing, blind mapping, workshop walkthrough | likely [[wiki/Dimensions/Deep Processing|Deep Processing]], [[wiki/Techniques/Thinking on Paper|Thinking on Paper]] |
| [[raw/How to Force Yourself To Achieve Your Goals (when you don’t feel like it)|How to Force Yourself To Achieve Your Goals]] | YouTube transcript | partially compiled | motivation, thought-action diffusion, focus zones | [[wiki/Concepts/Metacognition|Metacognition]], [[wiki/Concepts/Unlearning Learning Habits|Unlearning Learning Habits]] |
| [[raw/【ルームツアー】ミニマリストしぶの新居が完成しました。|Minimalist room tour]] | YouTube transcript | queued | minimalism, environment design | outside current metacognition scope |
| [[raw/sources/Language Isn't Math|Language Isn't Math]] | YouTube transcript | compiled | language acquisition, grammar mindset, phrase-level naturalness, input-first learning | [[wiki/Language/Language Isn't Math|Language Isn't Math]], [[wiki/Language/Refold Grammar Primers|Refold Grammar Primers]] |
| [[raw/sources/A Motorcycle for the Mind|A Motorcycle for the Mind]] | article/transcript | compiled | AI leverage, learning, agency, AI anxiety, entrepreneurship | [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]], [[wiki/Concepts/Agentic Engineering|Agentic Engineering]], [[wiki/Concepts/Vibe Coding|Vibe Coding]] |
| [[raw/sources/A Return to Code|A Return to Code]] | article/transcript | compiled | vibe coding, personal software, one-shot apps, coding agents | [[wiki/Concepts/A Return to Code|A Return to Code]], [[wiki/Concepts/Vibe Coding|Vibe Coding]], [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] |
| [[raw/sources/‘Nothing Ever Happens’ Is Over|Nothing Ever Happens Is Over]] | article/transcript | compiled | AI-era change, startups, risk, agency, sense-making | [[wiki/Concepts/Nothing Ever Happens Is Over|Nothing Ever Happens Is Over]], [[wiki/Techniques/Marginal Gains|Marginal Gains]], [[wiki/Dimensions/Self-Regulation|Self-Regulation]] |

## Book Sources

| Source | Type | Status | Main Topics | Compile Targets |
| --- | --- | --- | --- | --- |
| Gad Saad, *The Parasitic Mind* | book | compiled | epistemic hygiene, free speech, reason, idea pathogens, courage | [[wiki/Books/The Parasitic Mind|The Parasitic Mind]], [[wiki/Dimensions/Mindset|Mindset]], [[wiki/Dimensions/Deep Processing|Deep Processing]] |
| Eric Jorgenson, *The Book of Elon* | book | compiled | purpose, first principles, engineering, company-building, urgency, civilizational optimism | [[wiki/Books/The Book of Elon|The Book of Elon]], [[wiki/Concepts/Agentic Engineering|Agentic Engineering]], [[wiki/Techniques/Marginal Gains|Marginal Gains]] |

## Clippings Inbox

| Source | Type | Status | Main Topics | Compile Targets |
| --- | --- | --- | --- | --- |
| [[Clippings/llm-wiki|llm-wiki]] | GitHub Gist clipping | compiled into schema | LLM wiki architecture, raw/wiki/schema layers, ingest/query/lint, index/log | [[AGENTS]], [[index]], [[log]], [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]] |
| [[Clippings/How I use LLMs|How I use LLMs]] | YouTube transcript | partially compiled | LLM usage, context windows, tool use, search, thinking models, coding agents | [[wiki/Concepts/LLM Tool Use|LLM Tool Use]], [[wiki/Concepts/Thinking Models|Thinking Models]], [[wiki/Concepts/Vibe Coding|Vibe Coding]], [[wiki/Techniques/Context Engineering|Context Engineering]] |
| [[Clippings/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]] | YouTube transcript | partially compiled | vibe coding, agentic engineering, Software 3.0, agent-native infrastructure, understanding bottleneck | [[wiki/Concepts/Agentic Engineering|Agentic Engineering]], [[wiki/Concepts/Software 3.0|Software 3.0]], [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]], [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] |
| [[Clippings/Post by @naval on X|Post by @naval on X]] | X thread clipping | queued | leverage, specific knowledge, compounding, permissionless media/code | outside current metacognition scope unless linked to knowledge systems |

## Notes

- A flat `raw/` directory is acceptable at this scale.
- `Clippings/` is also acceptable as a Web Clipper inbox.
- Do not force source files into subfolders unless the volume becomes hard to navigate.
- The important invariant is that every source appears in this index with a status and compile target.
