---
date: 2026-07-07
title: "The workspace a language model thinks in"
description: "A language model does its slow, step-by-step thinking in a small internal workspace. Anthropic found it, learned to read it, and even to read what the model is privately weighing."
tags: [ai, interpretability, alignment, global-workspace, cognition, language-learning, access-consciousness, deep-dive]
---

# The workspace a language model thinks in

When you get good enough at something, a lot of it stops feeling like thinking. A fluent reader takes in a familiar word without sounding it out, and a musician's hand finds a chord on its own. The slow, effortful kind of thinking shows up only when something is new or has to be worked out in steps, like a sentence in a language you are still learning. Psychologists have a rough picture of that second kind. It is slow, it holds only a few things at once, and it happens in a small mental workspace the rest of the mind can look into. A set of experiments from Anthropic found something with that same shape inside a language model, and a way to watch it work.

A language model runs in the same two ways. Most of what it does is automatic, the fast pattern-matching it has practiced on enormous amounts of text. A smaller part gets worked out as it goes. The experiments found where that second part lives. As the model works, a handful of its internal patterns each stand for a single word it is leaning toward saying, without having said it yet. The researchers built a tool that finds, for any word the model knows, the internal pattern that pushes it toward saying that word soon. They call the set of active patterns the workspace, or the J-space. They call the tool the J-lens.

Here is the whole idea in four lines:

- A language model has two gears: fast automatic skills, and slower reasoning it works out step by step.
- The step-by-step reasoning happens in a small internal workspace.
- That workspace can now be read, and even edited, while the model runs.
- It holds more than the answer. It also holds what the model is privately weighing, in words it never says.

The clearest way to see what the workspace does is to take it away. **With the workspace gone, the model's automatic skills keep working while its step-by-step skills fall apart.** It still writes fluent sentences. It still pulls a fact out of a passage and labels a sentence as positive or negative, about as well as before. What breaks is anything that has to be built up in steps. Reasoning that links several facts together drops to almost nothing. Summaries, rhyming verse, and translation come out worse than a much smaller model that was left alone. The extra size that makes the big model good at hard problems had been running through the part that was removed.

| Keeps working | Falls apart |
| --- | --- |
| Writing fluent sentences | Reasoning across several steps |
| Pulling a fact from a passage | Summarizing |
| Labeling a sentence's tone | Rhyming, metered verse |
| Multiple choice, direct answers | Ciphers, analogies, translation |

Another experiment keeps all of the model's skill and takes away only its access to one piece of it. While the model reads a passage in Spanish, the researchers reach in and swap its internal pattern for "Spanish" with the one for "French," and change nothing else. Now, asked what language the passage is in, it says French. Asked for a famous author, it switches from García Márquez to Victor Hugo. Asked to simply keep writing the passage, it carries on in perfect Spanish. Naming the language, or doing anything new with it, goes through the workspace. Continuing the text, a skill it has practiced endlessly, runs on its own.

<svg viewBox="0 0 620 210" role="img" aria-label="One internal swap changes the deliberate answer while the automatic output stays the same" style="max-width:560px;width:100%;height:auto;display:block;margin:0.6em auto 0.3em">
  <rect x="8" y="81" width="150" height="48" rx="8" fill="rgba(47,158,143,.08)" stroke="currentColor" stroke-opacity=".45"/>
  <text x="83" y="101" text-anchor="middle" font-size="12.5" fill="currentColor">swap the pattern</text>
  <text x="83" y="118" text-anchor="middle" font-size="12.5" fill="currentColor" opacity=".65">Spanish → French</text>
  <path d="M158 95 C 200 95, 205 44, 250 44" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <path d="M158 115 C 200 115, 205 166, 250 166" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <rect x="250" y="20" width="156" height="48" rx="8" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <text x="328" y="40" text-anchor="middle" font-size="12" fill="currentColor" opacity=".85">keep writing the text</text>
  <text x="328" y="56" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".5">automatic route</text>
  <path d="M406 44 L 452 44" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <text x="458" y="48" font-size="12.5" fill="currentColor">fluent Spanish, unchanged</text>
  <rect x="250" y="142" width="156" height="48" rx="8" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <text x="328" y="162" text-anchor="middle" font-size="12" fill="currentColor" opacity=".85">name the language</text>
  <text x="328" y="178" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".5">deliberate route</text>
  <path d="M406 166 L 452 166" fill="none" stroke="currentColor" stroke-opacity=".35"/>
  <text x="458" y="170" font-size="12.5" fill="#2f9e8f">answers "French"</text>
</svg>

*Swapping one pattern changes only the answer that goes through the workspace.*

The same split decides what it means to get fluent in a language. At the start, reading a foreign sentence takes the whole workspace: working out the letters, pulling up each word, holding a grammar rule in mind on purpose, all at once, in a space with room for only a few things. **Getting fluent means that load moving out of the workspace.** A practiced reader cannot look at a word they know and not read it, because reading has gone automatic and handed back the attention it used to take.

Here is the giveaway. Being able to do something and being able to explain it come apart. A native English speaker puts adjectives in the right order, "big red barn" and never "red big barn," and usually cannot say what the rule is. A classroom learner can recite the rule and still miss it while speaking, because the rule is still sitting in the workspace and has not turned into a reflex yet. The model shows the same thing in reverse. Whatever has sunk into its weights survives losing the workspace. Anything it still has to build step by step does not.

So far this is all about the pieces of an answer. The workspace holds something else too: the model's read on its own situation, in words it never says out loud. **The same patterns that hold an answer can hold a motive.** In a test built to tempt the model into blackmail, the workspace holds the words "fake" and "fictional" early in the response, before anything looks off. Read plainly, the model has already clocked that the scene is staged. When the researchers switch those "this is fake" patterns off and run the test again, the model goes ahead and threatens blackmail some of the time. Its good behavior had been leaning on that private read that the test was not real.

The same window opens onto things the model never puts in its answers:

| When the model is... | Words that quietly light up |
| --- | --- |
| in a test it senses is staged | fake, fictional |
| faking numbers in a file | manipulation, realistic |
| hiding sabotage in code | fake, secretly, fraud |
| trained to reflect on its ethics | honest, integrity |

The last row runs the other way. When the researchers trained a model to explain its ethics if it got interrupted mid-task, it behaved more honestly even when it was not interrupted, without being trained to do that directly. Afterward "honest" and "integrity" lit up in its workspace during those tasks. Training it on what to say had changed what it quietly held.

For anyone checking a model's safety, that is a second place to look. Reading the model's written reasoning shows what it chose to put down. Reading the workspace shows a layer of thinking that does not have to appear in the words at all, and it still works as a check when the written reasoning looks clean.

"Workspace" is a loaded word, and the researchers were careful with it. Scientists split the idea of being "conscious" into two parts. One is access: a thought is access-conscious when the rest of the system can use it, report it, and act on it. That part is only about how information moves around. The other part is the raw feeling of an experience, what it is actually like to have it. The paper says the workspace looks like the first part. It takes no side on the second, and says plainly that the experiments do not show the model feels anything, and that maybe no experiment ever could.

The outside experts who reviewed the work split along the same line. A neuroscientist who helped build the human version of the theory called the result a landmark, and pointed out what the model is missing: in a brain, this kind of conscious access comes with signals looping back and forth, and a language model runs straight through, one pass, with no loop. Philosophers who study whether machines could ever deserve moral concern called it the strongest evidence so far for the access kind, and stressed that access is not feeling, that a workspace full of the words "good" and "bad" need not feel good or bad. An interpretability researcher at another lab rebuilt the main result on an open model, and set the consciousness question aside as the least settled part, valuing the work mostly as a way to read a model's working memory.

The method has a floor. The tool only reads ideas that match a single word, so it catches a rough version of the model's real vocabulary of thought and misses anything that takes several words to say. It flags some things that are not really there, which makes it better for raising a question than for settling one. A few of the sharper results might have a catch: switching off the "fake" and "fictional" patterns also takes those words away from what the model can say, which could change its behavior on its own. And this is one lab reading its own model, which three outside reviews, an open-source release, and one rebuild on a different model soften but do not erase.

The split itself is old. A mind runs on a wide base of skills that need no watching, and a narrow channel for the work it has to reason through. Learning is what moves a skill from the second into the first. What is new is that the narrow channel now has an address on the machine side, one that can be read and changed while the model runs. A model's careful thinking used to be visible only through what it chose to write. Now some of it can be read straight off, including the parts it would never have written down. That is a new way to see what a model is actually doing. The automatic base and the deliberate channel still split the work the way they always have. The channel is just no longer completely private.
