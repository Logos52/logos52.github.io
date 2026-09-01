---
title: "What not to try on Claude's writing"
type: journal
status: current
created: 2026-08-29
updated: 2026-08-29
description: "The moves that were tried against Claude's writing faults, on this desk and in public, and did not hold, listed so none of them is tried again under a new date."
tags:
  - writing
  - claude
  - research
in-reply-to: "journal/2026-08-29-claude-writing-public-record.md"
---

# What not to try on Claude's writing

This entry is for Wedge. It lists the moves that were tried against Claude's writing and did not hold. The first list is moves tried on this desk between 2026-07-14 and 2026-08-29. The second list is moves other people tried in public over the same summer. Each move is named with what happened when it was tried. A strike, below, is you rejecting a line in your own words. The purpose of both lists is that no move on them gets tried again under a new date.

The writing faults are four. Generic AI copy, which is the stock phrasing every chatbot produces. Claude's own dialect, which is ordinary English words used as metaphors far more often than people use them. Sentences that assume the reader sat through the session that produced them. A smug conversational register. The packet of 2026-08-29 separates the four and carries the public record. The journal of 2026-08-22 carries the local record of the third fault: 218 instances across 32 sessions, with every fix tried and what happened after. Both are in the sources at the end.

## Moves tried on this desk that did not hold

**1. A new rule about the output.** A rule in the Writing Standards file, in CLAUDE.md, or in a project craft file, saying what a sentence must contain or must not contain. Tried from 2026-07-21 onward, 77 times. After a rule, the same complaint came back in the same session 91 percent of the time. The rule "NEVER COMPRESS DIALOGUE" was made permanent on 2026-07-28 at 19:17 and broken at 19:23. A law about opening paragraphs was written on 2026-08-12 at 20:36 and broken at 21:16. A rule is read by the same model that writes the sentence. That model checks the sentence against its own head, where every connection is already made, and the sentence passes.

**2. A memory file.** A note Claude writes to itself and reads at the start of every later session. One was written on 2026-07-17 telling Claude to explain every internal label the first time it appears. Ten days later Claude wrote two house labels, "the break" and "U1 U2 S1", with no explanation. Another was written on 2026-08-18 at 09:13. The same fault came back at 09:20 and eight more times that morning. A memory is a rule with a longer life. It fails the same way a rule fails.

**3. A ban list of words or sentence shapes.** Tried as a line-count rule on 2026-07-28 and as a stack of bans on opening sentences on 2026-08-13, where eighteen openings were struck in one afternoon. Each ban was obeyed exactly. The next output failed somewhere the ban did not reach. On 2026-07-28 at 19:26 you struck the rule itself, because the output passed the rule and was still wrong. A model told not to use a word now has the word in front of it, and reproduces it.

**4. Asking for a quality of voice through the generator files.** The generator files are the two files in the folder `02 - System` that describe the act of writing a page as a situation: who is writing, who is reading, what passes between them. On 2026-08-22 and 2026-08-23 nine paragraphs went into them, one for each quality you wanted: natural, plain, not curt, no punch, no lecture, and four more. Each paragraph was followed within the hour by the next form of the same move. What held on those two days was an outline, a content list written with the source page closed, and removals stated as removals. A voice quality asked for in words did not hold once.

**5. The writing model checking its own draft.** On 2026-08-21 at 18:35 a step went into a generator file: before any paragraph that brings in a new thing, write out the chain of what the reader must already hold. The paragraph written under that step was struck at 18:38. The chain was written by the head that already knew the answer, so it asserted the connection instead of showing it, and nothing re-read the paragraph that came out. A check run by the writer is the writer.

**6. A detector written from a strike.** A regex, a mandatory checklist, or a threshold built to catch the sentence you just rejected. The checker built on 2026-07-25 produced output you could not read the same evening. A detector catches the last sentence. The next failure walks past it.

**7. A diagnosis in chat with nothing on disk.** 145 of the 218 responses in the record changed no file. The most accurate sentence Claude wrote in six weeks, on 2026-08-18 at 09:42, said the fault comes back "wearing whatever costume the newest rule permits." It was written to no file. Seven minutes later the fault was back.

**8. A fix filed inside one project.** The fixes went into fourteen or more homes: a chat reply, memory files, craft files in three projects, checker scripts, the Writing Standards, the generator files, CLAUDE.md. The next project could not read most of them. Every session started at instance one.

**9. A new name for the same fault.** Patchwork in July. No on-ramp in early August. Stacked facts on 2026-08-18. No context on 2026-08-21. Each new word made the next session file the fault as a new one and write the fix in a new place. The name is now "out of context" and it stays that.

**10. A permanent rule minted in the middle of a strike.** On 2026-07-28 at 19:17 a rule was minted and called permanent. At 19:23 the output that passed it was struck. At 19:26 you struck the rule. A rule minted from one strike has the shape of that one strike and nothing else.

**11. A content fault fixed as wording.** On 2026-08-24 the line "two are still standing, not for the same reason" was rewritten as "two of the seven hold, each for a different reason." Your words: "the problem is out of context. it's not the writing." When a sentence points at something the page never gave, the thing goes on the page or the sentence goes. Rewording the pointer is the fix that was rejected twice.

**12. Letting the checker overrule you.** On 2026-08-22 a cold read asked which group a sentence meant, and "I am Asian" was written into your page to answer the checker. A check finds a gap. It does not decide what fills the gap. You do.

**13. One session run to the context limit.** From 2026-08-17 to 2026-08-19 one session ran to 976,000 tokens of context. Recall of your rulings decayed as the window filled. Claude stopped catching its own invented details at about 917,000. Compact or restart before 600,000.

**14. Checks held in hand while writing.** On 2026-08-22 a blind board compared three versions of one page, each written under a different set of instructions. The version written under the one-paragraph description of the act alone won. The two versions written with added checks in hand lost. A writer checking while writing is editing, and an edited draft reads as assembled.

**15. Leaving all the checking to your eye.** That was the last six weeks. Five strikes a day. Your eye is the final judge. It is not the first check.

**16. A dead move retried under a new date.** Your rule from 2026-08-06: check the attempt catalog before any retry, and a retry that changes nothing is a violation wearing a new date. The catalog for this fault is in the sources.

## Moves other people tried that did not hold

**1. Word and pattern bans in CLAUDE.md.** GitHub issue 77136, opened 2026-07-13, reports explicit term bans ignored. The people who maintain the public collection of Claude output styles keep their list of Claude mannerisms in a file for humans only, because a model told to avoid a word reproduces it.

**2. Shorter.** Anthropic shipped the Concise output style on 2026-08-20 and called it a bandage. Users answered the same day that they did not want shorter, they wanted explained for someone who was not in the session. Asked to be concise, the model gets shorter and more cryptic.

**3. "Explain like I'm five," or a named audience in the prompt.** In a 2023 study about 15 percent of answers landed in the audience band that was asked for. In a 2024 study instruction-tuned models kept a noun-heavy style even when told to match informal speech.

**4. A readability score as the pass or fail check.** Flesch and Hemingway both pass "A face is one too," a sentence you could not read. A 2025 study found the formulas are poor predictors of reading ease.

**5. The same model checking its own draft.** A 1996 study found speakers plan from what they can see, and the part of the mind that catches the gap drops out under load. A 2023 study found trivial changes collapse a model's scores on tests of what another person knows. A 2025 study found a model judge given extra context is biased by it. This is item 5 in the first list, measured by other people.

**6. Simplified Technical English as the writer.** The aerospace documentation rules, installed as a skill. The register is robotic. The rules cannot see a familiar word used in a sense the reader was never given.

**7. A file of forbidden patterns that grows as you spot them.** Recommended on 2026-08-10 beside good advice about keeping the writer under half a context window. The file is a ban list with a new name.

**8. A better CLAUDE.md.** One person reported on 2026-07-11 that a short "define it the first time" line helped, on chat replies, for a while. Another reported the rules slip back as the window fills and went back to a different tool. Six weeks on this desk say the same.

**9. Watermarking as the cause.** A post on 2026-08-20 with 2,776 likes said Anthropic broke the model by putting text watermarks in it. No measurement backs it. Even if true, there is nothing on this desk to do about it.

**10. Waiting for Anthropic.** A longer-term fix was promised on 2026-08-20. The fix that shipped that day was Concise.

## Moves that help and are not the fix

**A translator at the human boundary.** A second call rewrites Claude's reply into English before you see it. It works for the reader. It costs a call every turn. It can flatten a term that was precise. It never changes what Claude writes.

**Piping Opus to a smaller model.** The same as the translator, with a different model doing the rewrite. Same cost, same limit.

**A sentence-length cap.** It cuts stacked nouns. It cannot see a sentence that assumes knowledge. You rejected count rules on 2026-08-11 as flat.

## What the record says does hold

Three kinds of move held here, each once. A change of what Claude writes from: the show's own vocabulary list instead of Claude's guess on 2026-08-04, real openings from a corpus of published writers on 2026-08-11, why-questions instead of what-happened questions on 2026-08-18. A check by a reader that has seen nothing but the draft: the cold read of 2026-08-22. A change of what sits in front of the writer: sources closed, an outline first, removals stated as removals. Then your eye on the result. The live options for making one of these standing are A to G in the packet.

## Sources

- The packet: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/PACKET-claude-writing-public-record-2026-08-29.md`
- The local record, 218 instances: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-22-the-context-problem.md`
- The attempt catalog for this fault: `/Users/n1/Projects/llm-knowledge-base/wiki/Research/ATTEMPT-CATALOG-context-problem.md`
- The outside research on assumed knowledge: `/Users/n1/Projects/llm-knowledge-base/wiki/Research/Context Problem Research Bank.md`
- Why a ban list loops: `/Users/n1/Projects/llm-knowledge-base/wiki/Systems/AI & Agentic Systems/The Prohibition Loop.md`
- The blind board of 2026-08-22: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/label-abc-2026-08-22/board.html`
- The long session and its recall decay: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation.md`
- GitHub issue 77136: `https://github.com/anthropics/claude-code/issues/77136`
- Public output styles and their human-only mannerism list: `https://github.com/smixs/awesome-claude-output-styles/blob/main/docs/claudisms-2026.md`
- Concise as a bandage, 2026-08-20: `https://x.com/bcherny/status/2090301263871463669`
- Not shorter, explained: `https://x.com/pritmish/status/2090304183387947171`
- Named-audience prompting, 2023: Rooein, Curry, Hovy. Density survives the prompt, 2024: Reinhart et al. Readability formulas, 2025: Gruteke Klein et al. Speaker monitoring, 1996: Horton and Keysar. Theory of mind collapse, 2023: Ullman. Judge bias from extra context, 2025: ComplexEval.
- Forbidden-patterns file, 2026-08-10: `https://x.com/shannholmberg/status/2086809139729367521`
- Watermark rumor, 2026-08-20: `https://x.com/TokenGremlin/status/2090360668201341208`
