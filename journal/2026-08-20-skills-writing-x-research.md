---
title: "X research: skills, AI writing, intros, knowledge bases"
type: journal
status: current
created: 2026-08-20
updated: 2026-08-20
tags:
  - grok
  - skills
  - writing
  - research
---

# X research: skills, AI writing, intros, knowledge bases

People on X treat a skill as a small workflow you write once, not a giant prompt with a fancy name. They use AI for research, outlines, and edits more than for first sentences. Almost nobody has a good “intro paragraph” skill. The second-brain setups look like a simpler version of this vault. On Grok, the matching tools are a thin skill that actually loads, plus the rules that stay on — not another test list.

What follows is six lanes from X, then what that means for Grok on this machine.

## 1. How to use a skill

The same advice shows up over and over, mostly from Claude users. Grok’s own docs say the same thing in fewer words.

One skill, one job. The description is the switch that turns it on. Keep `SKILL.md` short. Put examples, templates, and long notes in other files the skill can open when it needs them. ([@monami_ai01](https://x.com/monami_ai01/status/2089986646448234831), 19 Aug; same pattern in Anthropic’s skill format.)

How you run it: say the task in normal language and hope the description matches, or type `/name`. Grok does both. From `/Users/n1/.grok/docs/user-guide/08-skills.md`: it reads `description` and `when-to-use`, then loads the body. Set `disable-model-invocation: true` if you only want the slash command.

How many to keep: start with official plus three to five of your own. People who live in this say a working set of about 8–12. Add one when you hit a job the current set cannot do. ([@sdhilip](https://x.com/sdhilip/status/2072334422414876957): “My setup used to be 3 skills. Now it's 7. Each one earned its spot.”)

Safety: treat a skill like code. Read `SKILL.md` and any scripts before you install a stranger’s pack. Community folders of “26 free skills” are marketing. Official Anthropic examples and the open Agent Skills spec are the clean starting point.

Grok-specific: skills live in `~/.grok/skills/` (every project) or `<repo>/.grok/skills/` (this repo). Grok also reads Claude and Cursor skill folders. `/create-skill` walks you through a new one. `grok inspect` lists what it can see.

## 2. How people use AI for writing

The people who write for a living do not let the model write the draft.

[@beginnersblog1](https://x.com/beginnersblog1/status/2024827464443371806): research and outline with AI, talk through a stuck paragraph, ask it to mark weak sentences. Never first drafts, never the angle, never the voice.

Common mechanics, none of them new:

- Paste your own writing and say “match this.”
- Say what not to do. Constraints beat adjectives.
- One example beats a paragraph of description.
- Ask for several versions, pick one.
- Have it critique its own draft.
- Write the opening yourself. ([@butzpeteza](https://x.com/butzpeteza/status/2088596603573563592): “Write your own opening line first. Always. Flag any sentence you wouldn't say to a client's face.”)

The other camp is prompt-seller content: ten techniques, banned phrases, “humanizer” tools. Useful only as a reminder that AI prose has a fingerprint people can see.

## 3. Intro paragraphs specifically

Thin lane. Almost no one on X is talking about report intros. They are talking about hooks.

Ad and newsletter people give the model a list of hook types and ask for eight openings. ([@copywritingai_](https://x.com/copywritingai_/status/2090098212690600293); [@sharyph_](https://x.com/sharyph_/status/2088932531198640415) “Hook” skill.) That is a different job from the first paragraph of a research note.

The line that matches what we spent the morning on is still [@butzpeteza](https://x.com/butzpeteza/status/2088596603573563592): you write the first line. You feed the model your phrases. You read it out loud. You rebuild anything you would not say.

Nobody is publishing a skill that says “answer the question in one paragraph, put the parts in the body.” That is our gap, not a popular product.

## 4. Skills for writing

Yes, people do this. The ones that get shared are voice and format, not craft of a paragraph.

- [@petergyang](https://x.com/petergyang/status/2011460826943934527): a skill that applies his style, bans slop constructions, and can fire doc templates.
- [@rubenhassid](https://x.com/rubenhassid/status/2086316545945350646): `/How-I-write` — voice, banned words, writing samples. “Files for facts. Skills for everything else.”
- [@sharyph_](https://x.com/sharyph_/status/2088932531198640415): five creator skills — orchestrator, newsletter, repurpose, hook, CTA. “Don't build 14 Skills in a weekend.”
- Viral-post skills that bundle 20 high-performing examples. Lead-magnet, not a method.

What they are *not* doing: putting the whole writing-standards file inside a skill and hoping the model obeys it. The ones that work are small, with examples.

## 5. Skills people actually name as daily

There is no honest public ranking. Marketplace “1.8 million installs” ([@CynthiaOzumba](https://x.com/CynthiaOzumba/status/2089777985905733826) on Find Skills) is a storefront number. What people *name* as changing their week:

Coding, from Anthropic’s own catalog of internal skills ([@JoshKale](https://x.com/JoshKale/status/2033960196918415667), 321k views): library/API reference, product verification, data fetching, business process, scaffolding, code review, CI, runbooks, infra. Most teams only use two or three of those.

Daily names on X: `/grill-me` (questions before work), `/write-a-prd`, `/tdd`, Superpowers (spec then plan then tests), `frontend-design`, `simplify`, `gstack`, `skill-creator`, `/how-to`, `/about-me`.

The pattern: the keepers force a pause (grill, TDD, spec) or encode something you would otherwise retype (voice, API quirks, a design direction).

## 6. LLM knowledge bases and how writing is structured

This is the Karpathy “LLM wiki” shape, repeated all summer.

Three folders: `raw/` (dump, don’t organize), `wiki/` (the agent compiles), `outputs/` (answers). One constitution file (`CLAUDE.md` / `AGENTS.md`) that says how notes are shaped. One note per fact, short, a title you can say out loud. A rulings file the agent reads before it drafts, so a correction happens once. ([@coreyganim](https://x.com/coreyganim/status/2040842449384276268), 594k views; [@EXM7777](https://x.com/EXM7777/status/2089821662967636059); [@leopardracer](https://x.com/leopardracer/status/2070460130085191920).)

Obsidian shipped `obsidian-skills` so Claude Code / Codex / OpenCode can read and write the vault. ([@simplifyinAI](https://x.com/simplifyinAI/status/2085148569062023525).)

Your vault is already past that starter kit. You have research banks, a regen pipeline, Opening Doors, Intro QA, and a rulings-like journal. What those posts add is not a new folder tree. It is the loop: correction becomes a dated line the next run has to read. That is the piece we still drop — we wrote “writing normally” today after the damage.

## What this means for Grok, here

You do not need a pack of 26 downloaded skills.

You already have, on this machine:

- Always on: repo `AGENTS.md`, `~/.grok` rules, Writing Standards.
- On demand: skills (slash or auto), plan mode, subagents, workflows, memory, hooks, plugins, MCP. List them with `grok inspect`.
- Build a new one with `/create-skill`.

The X consensus that matches this morning: one thin skill for a job you keep repeating, description loud enough that it actually loads, examples in a side file, facts in the vault. For intros, the skill would be the write-act in `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-report-intro-paragraph.md` — not another battery.

A `/How-I-write` skill with your voice and the “would I say this” test is what people like Hassid and Yang actually run. A 40-rule writing-standards skill is what people install and then ignore.

## Sources

- https://x.com/monami_ai01/status/2089986646448234831
- https://x.com/sdhilip/status/2072334422414876957
- https://x.com/JoshKale/status/2033960196918415667
- https://x.com/polydao/status/2044533933115629787
- https://x.com/beginnersblog1/status/2024827464443371806
- https://x.com/butzpeteza/status/2088596603573563592
- https://x.com/petergyang/status/2011460826943934527
- https://x.com/rubenhassid/status/2086316545945350646
- https://x.com/sharyph_/status/2088932531198640415
- https://x.com/coreyganim/status/2040842449384276268
- https://x.com/EXM7777/status/2089821662967636059
- `/Users/n1/.grok/docs/user-guide/08-skills.md`
