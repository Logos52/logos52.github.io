---
title: "Delete rejected work, don't shelve it"
type: technique
section: "Working with Agents"
status: seed
description: "Agents reuse whatever is still within reach, including work you turned down, so delete rejected branches, notes, copies and dead code instead of marking them as old or keeping them just in case."
created: 2026-11-23
updated: 2026-11-23
effort: ongoing
needs: a repo or workspace you can clean up
cost_note: no
tags:
  - agents
  - context
  - cleanup
wedge_reviewed: false
---

# Delete rejected work, don't shelve it

> Not yet reviewed by Wedge.

Work you have turned down keeps coming back when it stays where an agent can find it. An agent builds its answer from whatever is in its context and copies the patterns it finds there. To an agent, an old branch, a note that marks an idea as deprioritized, a copy kept just in case and a block of dead code all look like material to reuse. Marking that work as deprecated does not stop the reuse, because the label is only more text next to the thing it warns about. The fix is to delete rejected work outright and leave the reason for the rejection in history, where it can still be looked up. A failed attempt gets the same treatment: start it again from a fresh brief instead of patching it. Cleanup also has to run on a schedule, because agents leave dead code and stale workspaces behind on their own.
<figure>
<svg viewBox="0 0 300 394" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="drw-glance-t">
<title id="drw-glance-t">Work you have turned down keeps coming back when it stays where an agent can find it.</title>
<rect x="0.5" y="0.5" width="299" height="393" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Work you have turned down</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">keeps coming back when it</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">stays where an agent can find</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">it.</text>
<line x1="20" y1="128" x2="280" y2="128" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="127" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="156" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Delete it instead of marking it</text>
<text x="20" y="178" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">Marking old work as old does not</text>
<text x="20" y="200" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">take it out of reach</text>
<line x1="20" y1="214" x2="280" y2="214" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="242" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Make cleanup a routine</text>
<text x="20" y="264" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">deletion works best as a scheduled</text>
<text x="20" y="286" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">job</text>
<line x1="20" y1="300" x2="280" y2="300" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="328" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Start over instead of patching</text>
<text x="20" y="350" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the cheapest way to delete it is to</text>
<text x="20" y="372" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">start again</text>
</svg>
</figure>

## Why leftover work comes back

An agent treats the files around a task as examples of how the task should be done. Language models predict the next token, so the material in front of them shapes what they produce, and agents "just love to copy existing patterns". The rule for designing the environment is "agents love to copy what exists and take the shortest path, so make the easy thing the right thing". That makes the codebase "a form of memory to agents" in practice. A mistake nobody turns into a constraint spreads until agents "keep repeating those same mistakes like a virus in your code."

Research on long contexts explains why rejected work is a particularly bad thing to leave around. Context poisoning is the name for an error that enters the context and then gets referenced again and again. Context distraction describes an agent that leans on its history and repeats past actions instead of moving forward. A study of 18 language models tested distractors, which are passages on the same topic that do not quite answer the question. It found that "Even a single distractor reduces performance" compared with the answer alone. A rejected draft is a distractor of exactly this kind, since it covers the right topic but holds the version you turned down.

## Delete it instead of marking it

Marking old work as old does not take it out of reach, which is why deletion is the fix. A comment such as "DEPRECATED: use xyz" is "wishful thinking", because a lint rule actually enforces the change, "and then of course you should actually finish that migration." Comments in general go the same way. The advice to "ban and delete most if not all code comments!" addresses this copying, because a note explaining a temporary workaround spreads as agents copy the workaround along with it. On top of that, "comments go stale very quickly and confuse agents and people".

The same reasoning covers every form of shelved work:

- A branch that holds a rejected design, which an agent can find by searching the repo.
- A note that says an idea is deprioritized, which still describes the idea in full.
- A copy of a file or folder kept just in case, which looks like a second valid version.
- An old plan left in the repo. Plans stored there permanently "go out of date very quickly and become distractions and pollute your context with stale info". A plan belongs in the repo only while a large piece of work is still landing.
- Dead code, which agents leave behind on their own. Weeks of coding through agents showed that agents "don't clean up dead code after themselves".

The reason something was rejected is still worth keeping, but it can live in version control history, review comments and design documents. An agent can search those places when it needs to know why code looks the way it does, which is what the /why skill in [[wiki/Systems/AI & Agentic Systems/pstack|pstack]] does. The explanation survives that way, without the rejected work sitting next to the task.

## Make cleanup a routine

Leftovers pile up without anyone deciding to keep them, so deletion works best as a scheduled job. One product team runs daily agent routines on its apps, and one of them is a dead-code remover. It deletes code that can never run, and for code that only looks unused it adds logging first, then removes the code the next day if the logs show it really is dead. Over a few weeks those routines opened 388 pull requests, and the team merged 180 pull requests after automated and human review. Workspaces need the same care. Separate working copies of a repo "can be rough when they pile up", and the fix is a loop that cleans up stale ones.

Notes given to an agent need clearing too. The analogy is an intern whose desk is covered in 100 notes, where "you have to periodically clear out irrelevant stickies". Context engineering makes the same point in general terms: context is "a finite resource with diminishing marginal returns", so the goal is the smallest set of useful tokens. Old tool results deep in a conversation, for example, can simply be cleared.

Automatic compaction already handles much of this inside a single long chat. With good compaction "you never have to worry about context rot", and context rot has also been disputed for the model version in use. Both points are about the length of one conversation. Compaction does nothing about a rejected branch or a stale note that an agent finds again by reading the repo.

## Start over instead of patching

A failed attempt is rejected work too, and the cheapest way to delete it is to start again. "Accepting the agent's first design." is one of the most common planning mistakes. A better planning method has independent agents sketch competing designs in parallel, each starting from the same grounding brief. When the chosen sketch turns out to be wrong during implementation, "the agent throws it all away and starts over." Visual prototypes in this method are throwaway sketches from the start.

The same principle applies to whole builds: "Don't be afraid to throw away work". Following that advice, a workflow starts four or five agents in parallel on an ambitious project, then uses their output to improve the prompt. For poor results, the advice is to "create a new chat or rollback to a checkpoint".

Long rounds of review on one attempt have a cost of their own. After several rounds of abstract review from agents, a pull request can be "overcooking", because the reviewers have no context about the goals and the authoring agent accepts their feedback without weighing it. A fresh attempt from the original brief avoids carrying those rounds forward.

The habit underneath all of this is to fix the environment instead of repeating instructions. The starting rule is that "every time you intervene and correct your agent, you should think about how to eliminate it entirely." The trap is "micromanaging your agents instead of correcting the environment that shapes its behavior". Deleting rejected work is one of the simplest changes to that environment.

### A prompt to copy

> Look through this repo and its workspace for work we already rejected or replaced: old branches, files marked deprecated or deprioritized, backup copies, unused code and stale working copies. List each item with the reason it looks rejected and what still refers to it. Propose deleting each one, and for anything worth remembering, write one line for the decision log about why it was rejected. Show me the list before you delete anything.

## Open questions

- How does a team decide when a deprioritized idea has become rejected work?
- How long should suspected dead code stay under watch before it is removed?
- What makes an agent prefer a nearby file over its written instructions?
- How should an agent decide which notes in its own memory are stale?

## Related pages

- [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]] covers keeping the code worth copying and deleting existing tech debt.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] explains how architecture, tests and rules differ as fixes.
- [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]] covers running several attempts at once.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] explains how to verify a change before keeping it.

## Sources

- [Lauren](https://x.com/poteto/status/2111133080526495985), X post on trusting agents' work (2026-10-16). Agents copy what exists and take the shortest path. Quoted.
- [Lauren](https://x.com/poteto/status/2109699980248408574), X post on slop (2026-10-12). The codebase as memory, mistakes repeating like a virus. Quoted.
- [Lauren](https://x.com/poteto/status/2110162994869227719), X reply on deprecation comments (2026-10-14), [X post on banning comments](https://x.com/poteto/status/2110149626133438732) (2026-10-13) and [X reply on stale comments](https://x.com/poteto/status/2110214216783401042) (2026-10-14). Deprecation labels as wishful thinking, finishing the migration, deleting comments. Quoted.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Accepting the first design, parallel sketches from the grounding brief, throwing a wrong design away, the /why skill. Quoted and paraphrased.
- [Lauren](https://x.com/poteto/status/2117445316043825393), X post on overcooking a pull request (2026-11-03). Paraphrased, one word quoted.
- [Lauren](https://x.com/poteto/status/2089067865098113024), X post on eliminating corrections (2026-08-16), and [X post on the correction skill](https://x.com/poteto/status/2106542593656111276) (2026-10-04). Quoted and paraphrased.
- [Lauren](https://x.com/poteto/status/2098649173478527037), X reply on compaction (2026-09-12), and [X reply on plans in the codebase](https://x.com/poteto/status/2094502386132017256) (2026-08-31). Quoted.
- [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1080), workshop with Colin Matthews (2026-08-26, auto-captions at 18:00 and [45:29](https://youtu.be/Zc07HI9Ppxk?t=2729)). Next-token prediction and agents copying existing patterns. Paraphrased.
- [Matt](https://x.com/mattyp/status/2030992536307925062), X post on throwing away work (2026-03-09), and [X reply on starting a new chat](https://x.com/mattyp/status/1946964459744067705) (2025-07-20). Quoted.
- [Andrej](https://x.com/karpathy/status/2015883857489522876), X post with notes on coding through agents (2026-01-26). Agents leave dead code behind. Quoted.
- [Boris](https://x.com/bcherny/status/2088014489438621990), X post on agents maintaining apps (2026-08-13), [X reply on stale worktrees](https://x.com/bcherny/status/2087024157196489117) (2026-08-11) and [X reply on context rot](https://x.com/bcherny/status/2063830798374162791) (2026-06-08). Paraphrased and quoted.
- [Drew](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html), "How Long Contexts Fail" (2025-06-22). Context poisoning and context distraction. Paraphrased.
- [Chroma](https://research.trychroma.com/context-rot), "Context Rot: How Increasing Input Tokens Impacts LLM Performance" (technical report, 2025-07-14). Distractors and the 18 models tested. Quoted.
- [Liz](https://simonwillison.net/2025/Dec/30/liz-fong-jones/), quotation collected by Simon Willison (2025-12-30). Clearing out old sticky notes. Quoted.
- [Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), "Effective context engineering for AI agents" (2025-09-29). Context as a finite resource, clearing old tool results. Quoted and paraphrased.
