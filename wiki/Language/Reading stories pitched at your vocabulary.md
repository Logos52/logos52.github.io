---
title: "Reading stories pitched at your vocabulary"
type: technique
status: seed
created: 2026-11-11
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
description: "AI can write a daily story inside the words a learner knows, but with only 10 to 100 known words the stories fall apart, so builders switch to fixed beginner lists, retell real stories at set levels, or measure each story and rewrite it."
tags:
  - language-learning
  - graded-readers
  - ai
wedge_reviewed: false
---

# Reading stories pitched at your vocabulary

> Not yet reviewed by Wedge.

A language model can write a short daily story that uses only the words a learner knows, adds a few new ones and repeats the ones due for review. The story itself then drives the learner's word schedule. Models stray from the list, so code checks every story and retries the failures. The idea breaks at the very start of learning. With only 10 to 100 known words, one builder found the model could not write anything that read like a story. The builder judged the design not yet useful until a learner knows roughly 1,000 words. The builder's workaround was to have the model write stories from a fixed beginner word list until those words became automatic. Two other projects avoid the problem from different sides. One retells a real story at five fixed levels, each held to its own list of allowed characters and audited, and the other measures each story's reading level and rewrites the ones that miss. Measuring and rewriting raised that second project's on-target stories from 42% to 71%, once the model wrote each page as separate sentences with word counts set.

## A daily story that drives the word schedule

A Mandarin reading tool built this way sends the model three groups of words each day. The first group holds 60 candidate new words, from which the model picks 5 to 10 that fit the story. The words due for review form the second group, and the 300 most frequent words in the pool are always available as glue.

Code then checks the result. Every sentence has to split cleanly into its listed words, and every word has to come from the allowed pool or be tagged as outside it. The story also has to land within 20% of its target length. A failed structure check triggers a retry, up to 15 attempts. New and due words that the model leaves out simply stay due for the next day. Making those two checks soft cut the retries and raised the quality, and the review schedule still worked because skipped words came back. Words the model used from outside the pool go onto a wishlist, which shows which words the list is missing.

<figure>
<svg viewBox="0 0 520 270" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="st-pools-t">
<title id="st-pools-t">A Mandarin reading tool built this way sends the model three groups of words each day.</title>
<rect x="0.5" y="0.5" width="519" height="269" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="152" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="96" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">60 candidate</text><text x="96" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">new words</text><text x="96" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">picks 5 to 10</text>
<rect x="184" y="20" width="152" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">The words due</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">for review</text>
<rect x="348" y="20" width="152" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="424" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">the 300 most</text><text x="424" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">frequent words</text><text x="424" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">as glue</text>
<path d="M96,109 L202.092,136.724" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="210.8,139 200.8,141.6 203.4,131.9" style="fill:var(--qp-mut)"/>
<path d="M260,109 L260,130" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,139 255.0,130.0 265.0,130.0" style="fill:var(--qp-mut)"/>
<path d="M424,109 L317.908,136.724" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="309.2,139 316.6,131.9 319.2,141.6" style="fill:var(--qp-mut)"/>
<rect x="20" y="142" width="440" height="108" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="240" y="172" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">Code then checks the result.</text><text x="240" y="192" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">split cleanly into its listed words</text><text x="240" y="212" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">come from the allowed pool or be tagged as outside it</text><text x="240" y="232" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">within 20% of its target length</text>
<path d="M460,230 L488,230 L488,162 L466,162" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25;stroke-dasharray:4 4"/>
<polygon points="461,162 470,157 470,167" style="fill:var(--qp-mut)"/>
<text x="500" y="196" text-anchor="middle" transform="rotate(90 500 196)" style="fill:var(--qp-mut);font-size:12px">up to 15 attempts</text>
</svg>
</figure>

## Where it breaks at low vocabulary

The trouble starts with how few words a beginner has. With 10 to 100 words introduced, the stories came out as chains of unrelated clauses with no tension and no ending, and sometimes as nonsense. The builder judged this a structural limit that better prompts alone could not fix, because the model could not write a natural 200-character story from 30 words.

The word list made it worse. It came from podcast speech, so it lacked words a story needs, such as 了, 吗, 家, 水, 听 and 打, and even at 300 introduced words the usable vocabulary was much thinner than the count suggested. The pool size also pulls the other way, since a model kept to a list of 60 words reliably, to 300 poorly and to 1,000 badly. A tiny known vocabulary therefore gives bad stories, and a large allowed list gives a model that strays from it.

<figure>
<svg viewBox="0 0 520 138" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="st-poolsize-t">
<title id="st-poolsize-t">The pool size also pulls the other way, since a model kept to a list of 60 words reliably, to 300 poorly and to 1,000 badly.</title>
<rect x="0.5" y="0.5" width="519" height="137" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="36" style="fill:var(--qp-mut);font-size:12px">a model kept to a list of</text>
<rect x="20" y="50" width="152" height="68" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="96" y="80" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">60 words</text><text x="96" y="100" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">reliably</text>
<rect x="184" y="50" width="152" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="80" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">300</text><text x="260" y="100" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">poorly</text>
<rect x="348" y="50" width="152" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="424" y="80" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">1,000</text><text x="424" y="100" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">badly</text>
</svg>
</figure>

For now the builder tells the model to write a story at the first level of the HSK, the standard Chinese proficiency test, and to ignore the project's own list. At that stage the job is to give daily practice on a fixed set of words until they are automatic, and the original design becomes useful once the vocabulary has grown.

## Retell a real story at fixed levels

A Japanese reading project starts from finished stories, so the plot already exists before any rewriting. It takes five ghost stories by Lafcadio Hearn and has a model retell each at all five levels of the JLPT, the Japanese proficiency test. Each level has its own cumulative list of allowed kanji, the Chinese characters used in Japanese, running from 79 kanji at the lowest level to 2,211 at the highest. Any word needing kanji beyond the level appears in the phonetic kana script instead. The project checks every retelling against open word lists for each level and compares it with the original for meaning. At every level the audit found no kanji outside that level's list. The share of kanji in the text rises from 9.0% at the lowest level to 31.2% at the highest, and the average sentence grows from 11.5 to 37.9 characters.

<figure>
<svg viewBox="0 0 520 254" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="st-jlpt-t">
<title id="st-jlpt-t">The share of kanji in the text rises from 9.0% at the lowest level to 31.2% at the highest, and the average sentence grows from 11.5 to 37.9 characters.</title>
<rect x="0.5" y="0.5" width="519" height="253" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="300" y="36" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">at the lowest level</text>
<text x="430" y="36" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">at the highest</text>
<rect x="20" y="52" width="480" height="54" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="38" y="84" style="fill:var(--qp-ink);font-size:12px">allowed kanji</text>
<text x="300" y="86" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">79</text>
<path d="M334,80 L383,80" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="392,80 383.0,85.0 383.0,75.0" style="fill:var(--qp-mut)"/>
<text x="430" y="86" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">2,211</text>
<rect x="20" y="116" width="480" height="54" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="38" y="148" style="fill:var(--qp-ink);font-size:12px">The share of kanji in the text</text>
<text x="300" y="150" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">9.0%</text>
<path d="M334,144 L383,144" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="392,144 383.0,149.0 383.0,139.0" style="fill:var(--qp-mut)"/>
<text x="430" y="150" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">31.2%</text>
<rect x="20" y="180" width="480" height="54" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="38" y="204" style="fill:var(--qp-ink);font-size:12px">the average sentence</text>
<text x="38" y="221" style="fill:var(--qp-mut);font-size:12px">characters</text>
<text x="300" y="214" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">11.5</text>
<path d="M334,208 L383,208" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="392,208 383.0,213.0 383.0,203.0" style="fill:var(--qp-mut)"/>
<text x="430" y="214" text-anchor="middle" style="fill:var(--qp-ink);font-size:17px;font-weight:600">37.9</text>
</svg>
</figure>

## Measure each story and rewrite it

A Spanish storybook project for children measures every story. It scores every story with a Spanish readability index plus a count of words per sentence for each age band, and it rewrites the stories that miss with specific feedback. Across 24 test requests, putting the child's age in the prompt hit the target 42% of the time, keeping the best of three drafts reached 58%, and measuring and rewriting reached 71%.

<figure>
<svg viewBox="0 0 520 224" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="st-rates-t">
<title id="st-rates-t">Across 24 test requests, putting the child's age in the prompt hit the target 42% of the time, keeping the best of three drafts reached 58%, and measuring and rewriting reached 71%.</title>
<rect x="0.5" y="0.5" width="519" height="223" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="38" style="fill:var(--qp-ink);font-size:12px">putting the child's age in the prompt</text>
<rect x="20" y="48" width="168" height="18" rx="4" style="fill:var(--qp-rule2)"/>
<text x="198" y="62" style="fill:var(--qp-ink);font-size:14px;font-weight:600">42%</text>
<text x="20" y="96" style="fill:var(--qp-ink);font-size:12px">keeping the best of three drafts</text>
<rect x="20" y="106" width="232" height="18" rx="4" style="fill:var(--qp-rule2)"/>
<text x="262" y="120" style="fill:var(--qp-ink);font-size:14px;font-weight:600">58%</text>
<text x="20" y="154" style="fill:var(--qp-ink);font-size:12px">measuring and rewriting</text>
<rect x="20" y="164" width="284" height="18" rx="4" style="fill:var(--qp-accent)"/>
<text x="314" y="178" style="fill:var(--qp-ink);font-size:14px;font-weight:600">71%</text>
<text x="20" y="204" style="fill:var(--qp-mut);font-size:12px">Across 24 test requests</text>
</svg>
</figure>

The format of the request mattered most. Writing free prose, the small model kept to 4 or 5 words a sentence at every age, no matter what the prompt asked. Stories for 9 and 10 year olds never landed on target. Requesting every page as three separate sentences, each given its own word count range, finally shifted it. A small model could hit a perfect readability score with clipped text, so the target pairs the index with the sentence-length band. Rewrites sometimes broke one thing while fixing another, so the app saves whichever draft lands nearest the target. The 29% of stories that still miss after three drafts carry a note saying so.

## Open questions

How does a story keep tension when the reader knows only a few hundred words?

What makes a word list good for stories?

How close does a retelling need to stay to the original to keep its pull?

## Sources

- tomaksickname, [ChinAnki](https://github.com/tomaksickname/ChinAnki-), GitHub, 20 October 2026, README sections on the problem, what happened, the HSK 1 workaround, story generation, validation and what the builder learned. Paraphrased.
- adkbbx, [Aoandon](https://github.com/adkbbx/aoandon), GitHub, 29 October 2026, README section "How the levels work". Paraphrased.
- Gaova777, [cuentos-a-mi-medida](https://github.com/Gaova777/cuentos-a-mi-medida), GitHub, 22 October 2026, README sections "What came out", "How it works" and "What didn't work, and what to keep in mind". Paraphrased.

## Related pages

- [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Story Under a Vocabulary Ceiling]]
- [[wiki/Language/Three Pillars of Language Learning|Three Pillars of Language Learning]]
- [[wiki/Tsumugu/Tsumugu|Tsumugu]]
- [[wiki/Learning Craft/Let code keep the score in an AI tutor|Let code keep the score in an AI tutor]]
