---
title: "Let code keep the score in an AI tutor"
type: technique
status: seed
created: 2026-11-11
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
description: "In an AI tutor, let the model teach and judge single answers while plain code decides what counts as learnt, from unaided first tries across separate sessions, and never let the model mark something as known."
tags:
  - ai
  - learning
  - spaced-repetition
wedge_reviewed: false
---

# Let code keep the score in an AI tutor

> Not yet reviewed by Wedge.

A chat model that both teaches and grades can flatter the learner and forget their mistakes, so several small tutor projects split the work. The model teaches, writes the material and judges single answers. Plain code decides what to practise and what counts as learnt, and outside tools check what they can. Mastery then comes only from evidence the code logged. That means unaided first tries spread over separate sessions and days, a second judge besides the tutor model for the highest levels, and a refusal to draw conclusions from too few answers. The model may record a miss but may never mark something as known. Mistakes become patterns tied to the word that triggered them and come back as retests on a schedule. A further check replays the log to see whether the review schedule's predictions match what the learner actually remembered. All four designs come from small, new open-source projects, and the numbers in them are their authors' own choices.

<figure>
<svg viewBox="0 0 520 194" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-split-t">
<title id="tu-split-t">The model teaches, writes the material and judges single answers.</title>
<rect x="0.5" y="0.5" width="519" height="193" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="96" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">The model</text><text x="96" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">teaches</text><text x="96" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">judges single answers</text>
<rect x="184" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Plain code</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">decides what</text><text x="260" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">to practise</text><text x="260" y="110" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">and what counts</text><text x="260" y="130" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">as learnt</text>
<rect x="348" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="424" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">outside tools</text><text x="424" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">check what they can</text>
<text x="260" y="176" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">The model may record a miss but may never mark something as known.</text>
</svg>
</figure>

## Split the jobs between model and code

One German tutor engine puts the rule in its tagline, that the model teaches, code keeps score and tools verify. Choosing the next exercise and logging every session is the engine's job, which leaves the tutor no room to flatter the learner or lose track of their errors. When the optional add-ons are installed, grammar and spelling go to a local checking tool and noun genders go to a dictionary, so a mark never rests on the model recalling der, die or das.

A vocabulary coach for spoken English draws the line the same way. Code picks the words, sets the test times and rules on what is learnt. The model writes the words and judges how well the learner used each one. Its authors give the reason as keeping scheduling and mastery testable and consistent. Speech goes through a dedicated recogniser, never the model, because a model can quietly fix a learner's errors or hear the word it expected. Every action goes into a log, and the learner's record is rebuilt by replaying that log.

## Count only evidence the code can trust

The German engine sets out its mastery rule in numbers. A learner reaches a level once 5 or more of the 8 most recent answers in that context come from 2 or more sessions, with 80% or more correct on the first try. The log keeps answers given after a hint, guesses with no explanation and answers the tutor itself doubted, yet none of them adds to the score. Free use of a structure counts only when nothing in the session primed it. It also needs a judge besides the tutor model, such as the grammar checker or a human. The top level also needs that unprimed use to happen again at least 7 days after the first. A word's meaning counts as known only when the learner shows it unprimed on 2 separate days after their latest miss. The tutor model can record a miss or a use, yet it can never record a meaning as known, because understanding a text does not prove each word in it.

The vocabulary coach uses a ladder of evidence. Recalling a word with a hint reaches level 2 of 5, recalling it unaided reaches level 3, using it in a sentence reaches level 4 and using it unprompted reaches level 5. Mastery needs level 4 on two different days, one use at level 5, and a correct answer a week or more after the learner first met the word. The coach never shows or says the target word before the third hint, since showing it turns recall into recognition.

<figure>
<svg viewBox="0 0 520 240" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-ladder-t">
<title id="tu-ladder-t">Recalling a word with a hint reaches level 2 of 5, recalling it unaided reaches level 3, using it in a sentence reaches level 4 and using it unprompted reaches level 5.</title>
<rect x="0.5" y="0.5" width="519" height="239" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="130" width="112" height="90" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="76" y="156" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 2</text>
<text x="76" y="178" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">Recalling a word</text>
<text x="76" y="195" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">with a hint</text>
<rect x="142" y="100" width="112" height="120" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="198" y="126" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 3</text>
<text x="198" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">recalling it</text>
<text x="198" y="165" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">unaided</text>
<rect x="264" y="70" width="112" height="150" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="320" y="96" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 4</text>
<text x="320" y="118" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">using it in</text>
<text x="320" y="135" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">a sentence</text>
<rect x="386" y="40" width="112" height="180" rx="16" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="442" y="66" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 5</text>
<text x="442" y="88" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">using it</text>
<text x="442" y="105" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">unprompted</text>
</svg>
</figure>

An exam-prep coaching skill takes the same caution further. It reports mastery as a count of evidence on four levels and never as a probability, and with fewer than 5 samples it reports only that the evidence is not enough. It grades a multi-step practice card by its weakest step.

## Turn mistakes into patterns with retests

Logging an error only helps if it comes back. The German engine files each error together with its trigger, the word that called for the rule, such as weil pushing the verb to the end of the clause. The same structure and trigger make one pattern, which returns as a fresh retest in the next session, then 4 days later and again 10 days on. A pass on the third retest closes the pattern, and another error resets it. The exam coach files every mistake under one of five causes, which are concept, calculation, expression, choice of method and misreading the question. A script also rejects a worked explanation that is missing any of its required parts.

<figure>
<svg viewBox="0 0 520 206" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-retest-t">
<title id="tu-retest-t">The same structure and trigger make one pattern, which returns as a fresh retest in the next session, then 4 days later and again 10 days on.</title>
<rect x="0.5" y="0.5" width="519" height="205" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<path d="M60,70 L405,70" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/>
<circle cx="60" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="60" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">one pattern</text>
<circle cx="175" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="175" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the next session</text>
<circle cx="290" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="290" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">4 days later</text>
<circle cx="405" cy="70" r="5" style="fill:var(--qp-accent)"/>
<text x="405" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">10 days on</text>
<text x="175" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<text x="290" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<text x="405" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<rect x="205" y="112" width="295" height="40" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="352.5" y="137" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">A pass on the third retest closes the pattern</text>
<path d="M405,102 L405,100" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="405,109 400.0,100.0 410.0,100.0" style="fill:var(--qp-mut)"/>
<path d="M110,180 L60,180 L60,80" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25;stroke-dasharray:4 4"/>
<polygon points="60,77 55,86 65,86" style="fill:var(--qp-mut)"/>
<text x="118" y="184" style="fill:var(--qp-mut);font-size:12px">another error resets it</text>
</svg>
</figure>

## Check the schedule against real recall

A review scheduler predicts how likely a learner is to remember an item, and that prediction can be wrong in either direction. One fork of an open-source tutor replays the learner's evidence log through the scheduler and compares each predicted chance of recall with what the learner actually did. If the model is too optimistic, intervals get too long, and if it is too pessimistic, the learner wastes reviews. With fewer than 20 paired events the audit reports numbers but draws no conclusion, and it also reports the retention target that would deliver what the current target promises.

These designs come with limits their authors state. In the German engine's code, every threshold carries a mark saying it is a judgment call. The vocabulary coach's judge agreed with all 30 of its clear-cut test sentences, a result that shows the judge runs but says nothing about how it handles subtle mistakes. Its review schedule comes from a model fitted to flashcard self-grades, so mapping spoken evidence onto it remains a hypothesis. The exam coach's check covers the structure of an explanation and says nothing about its teaching quality.

## Open questions

How should a tutor decide when an answer counts as unaided?

What should a second judge look for that the tutor model misses?

How many sessions of evidence does a learner need before a mastery level means something?

## Sources

- Yasirdora, [Redefluss](https://github.com/Yasirdora/Redefluss), GitHub, created 6 November 2026, README sections "How it teaches", "Rules the code enforces" and "Not built yet". Paraphrased, with the tagline quoted in part.
- FarazO7, [vocab-coach](https://github.com/FarazO7/vocab-coach), GitHub, 27 October 2026, README sections "How it works", "Decisions and why" and "Known limitations". Paraphrased.
- geyadawang-boop, [study-coach](https://github.com/geyadawang-boop/study-coach), GitHub, 7 November 2026, README sections on explanations and follow-ups, on grading, memory and review, and on known limits. Read in Chinese and paraphrased.
- llinok111, [retentionproof](https://github.com/llinok111/retentionproof), fork of HKUDS/DeepTutor, GitHub, 29 October 2026, CALIBRATION.md. Read in Chinese and paraphrased.

## Related pages

- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]
- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]
- [[wiki/Learning Craft/Rules of Effective Memorization|Rules of Effective Memorization]]
- [[wiki/Tsumugu/Tsumugu|Tsumugu]]
