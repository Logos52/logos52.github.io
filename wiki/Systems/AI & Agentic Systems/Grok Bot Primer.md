---
title: "Grok Bot Primer"
type: concept
status: developing
created: 2026-08-25
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
description: "One person's Grok Bot setup, explained from the one fact that shapes it: one shared cloud computer per account. Helpers with one job each, files instead of chatter, an empty middle, and what stays on the Mac."
aliases:
  - Standing Research Agents
  - Grok Bot Fleet Structures
  - Bot Operating Rules
merged-from:
  - Standing Research Agents
  - Grok Bot Fleet Structures
  - Bot Operating Rules
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - workflows
  - research
---

# Grok Bot Primer

Grok Bot comes with a paid subscription to its maker's AI service and gives you a computer in the cloud that keeps running after you close your laptop. On that computer you set up named helpers, and each helper is a small program with a job description, a conversation you talk to it in, and a schedule of tasks that the product calls routines. The people selling it and the people showing it off promise a staff that works while you sleep, where one helper reads your inbox, one renews your subscriptions when a card expires, and one runs your business.

One person's setup on that product runs under a single sentence: the helpers watch, and the owner changes things. Every rule the setup runs under is that sentence applied to a situation that keeps coming up.

## Core takeaways

- One account gets one cloud computer and one weekly allowance of usage. Every helper shares the computer's files, browser, and logins, and every helper spends from the same allowance.
- Each helper has one standing duty, a clock, a file it writes, and a line in its description saying what it never does. A helper with one job has one output, so the week it breaks, the owner sees it.
- Every helper's output is a report. No helper publishes a page, edits a site, or writes to the notes site. A fault on a public site becomes a pull request that the owner approves and merges.
- The helpers pass work to one another through files in a shared folder, never through conversation. Steward backs the folder up to a public repository on weekdays, and the owner pulls a copy to the Mac once a week.
- Anything that needs a login or touches money stays on the Mac, along with all authoring, speech, and decisions. The cloud computer holds only public material and read-only keys minted fresh for one job.
- A single run that finds nothing costs about one hundredth of one percent of the week. Long conversations, routines that fire every fifteen minutes, and helpers talking to helpers are what empty a week. A reading helper whose finds change nothing three runs in a row is retired.

## One account, one cloud computer, one weekly allowance

One fact decides how a person should use Grok Bot, and that fact is easy to miss inside the promise of a staff that works while you sleep. Your account gets one cloud computer, and every helper you make lives on it, so the helpers share its files, its browser, and whatever you have logged into on it. Every login on that computer belongs to every helper. Each helper gets its own screen, but a screen is only a place to work, and a helper on one screen can open a site that another helper logged into on a different screen, which means a password typed for one job is there for every job. Files on that computer outlive any single helper, and deleting a helper does not clear its files or its logins. The subscription also comes with a weekly allowance of usage that every helper on the computer draws from, so what one helper spends is gone for the rest.

Because of that, the question about each helper is what it should be allowed near, rather than what it can do. Take the owner of two public websites, a Chinese dictionary and a graded reader, which is a site of short Chinese stories sorted by level with the same story characters running through them, plus a public notes site, and a habit of reading about how other people work with AI. If that owner turned Grok Bot on tomorrow, what would he set up, what would he refuse, and how would he know the setup was working?

## One helper, one job

Every helper in the owner's setup has one job, and the job is a standing duty rather than a single task. "Single task" in the maker's guides means one standing duty, which is a job description, never one action. An audit helper whose whole duty is "sweep weekly, report" has a complete single task. Each helper has a clock, a file it writes when it runs, and its own chat, where it posts what it wrote in the file, and whatever a helper posts in its chat shows up on the owner's phone as a notification from that helper. Each helper's description ends with a line saying what it never does.

One job per helper is the rule because a helper with one job has one output, and one output is easy to look at. A one-job helper has a readable output, a clean canary, which is a freshness check that a stale run would fail, and a clean line in the weekly report of what each helper cost, so in the week the helper quietly breaks, the file is late or empty and the owner sees it. A helper with four jobs can break in one of them and still look fine. Quiet breakage, where an automation stops working while still looking fine, is how automations in this owner's setups have died before, and a helper with several duties multiplies the places where that can happen unseen. The product's own list of helper types names a catch-all helper as the thing not to create, because it gets less guidance and its saved context is harder to reuse. A first useful request to a helper names five things: the outcome, which sources to read, the constraints, the deliverable, and the review point.

The helpers hold standing duties. Episodic judgment work, meaning fixing, deciding, and writing, happens in sessions on the owner's Mac. An episode that recurs is not, by itself, a reason to create a helper.

## The report is the product

Each helper's output is a report, and a report is all that any helper produces. A helper's job ends at the file it writes or the notification it sends. No helper in this setup changes anything the public sees. None of them publishes a page, accepts a change to a site's code, or writes to the notes site, for three reasons that stack.

The first reason is the owner's standing rule for the notes site: automation reads, and only the owner writes. The notes site is a live public site that carries the name of the person who owns it, so any edit a helper made would be an unreviewed publication under that name.

The second reason is structural. A helper that fixed what it found would be checking its own work. The pattern that has lasted in other people's setups is that the agent proposes and a person merges, and agents left to audit and repair their own material stop working silently while still reporting success.

The third reason is that most findings need a judgment, even when they look like a chore. Merging two near-duplicate pages decides which page dies. Resolving a contradiction between two pages declares which claim is the current position. Only the owner knows those things.

A report can be wrong and cost nothing, and an edit cannot be wrong without costing something.

Only one helper may declare a finding. The helper that checks whether a site answered and the helper that reads a public write-up do not both get to declare the same finding, because two helpers naming the same event is how a quiet disagreement hides. When a finding has to become work, it is handed on as a spec, meaning what is wrong, which file, and how you will know the fix worked, and not as a suggestion the next agent is free to ignore. A fault on a public site becomes a pull-request prompt with the file named.

The same rule governs what a helper prepares. A helper automates preparation before execution, so it drafts, reconciles, and recommends first. The owner's approval stays in front of any send, purchase, delete, publish, or change to a live system. A run that has no new data, or stale data, follows a stated policy rather than a guess.

## The helpers that run now

Watch looks after the public websites. Its clock runs it three mornings a week, on Monday, Wednesday, and Friday. It checks six public addresses, which are the front page of each website, a blog page on one and a browse page on the other, the front page of the notes site, and the build job that publishes the notes site. It expects each to answer. It also reads the week's visitor figures for the two websites and a search engine's report on which of their pages the search engine has indexed, and it writes one file with all of that. Its description ends with the line saying what it never does, which for Watch is publish a new version of a site, change a site's settings, or ask a search engine to index anything. If everything answered, the file says so, the message in Watch's chat is one line, and nothing else happens, so a quiet Monday morning means the sites are up.

Watch is one of the helpers that read the world and report on it. A helper named Field reads a public feed of write-ups in which named people describe the helpers they run, and it looks for the one item in a week that would change a file, a setting, or a routine in this setup. A helper named Recap reads the captions of new episodes of the podcasts the owner follows, meaning the written text of what was said that a show publishes with its video, and writes a summary with timestamps and quotes, because the owner wants what was said without listening to the whole show. Three smaller reading helpers do narrower jobs on the same pattern. One keeps a queue of Chinese articles worth reading for practice. One keeps a calendar of update dates for three online games the owner plays, read from the games' public pages. One audits the notes site once a week for dead links, duplicate pages, and pages without sources, which are the checks the owner used to run by hand. Every reading helper has the same shape as Watch, which is one job, a clock, a file, and a line saying what it never does.

Brief is a different kind of helper, because it does not read the world. It reads what the other helpers wrote, plus a short list of the changelogs for the tools the owner works in every day, which are the AI assistant he writes and codes with on his own laptop, a notes app, and Grok Bot itself, and every weekday morning it sends one notification to the owner's phone of at most five lines, with the most important line first so that the notification makes sense on its own. On a morning when nothing changed, the notification says so in one line.

Steward is the helper that looks after the other helpers, which is one job with two parts. It reports which routines exist, when each last ran, what each wrote, and how much of the week's allowance each has spent, and on weekdays it backs up every helper's files. Steward changes nothing either.

One more part of the setup is not a helper at all. When Watch reports a fault on one of the websites, the owner reads the report and decides whether it is worth fixing. If it is, a separate coding agent, a different program from the assistant on the laptop and one that runs on a machine of its own that its service provides rather than on the shared computer, opens a pull request against the site's code, which is public. A pull request is a proposed change the owner can read in full and accept with one click, and accepting it is called merging. So a helper only ever finds a fault, while the fix is written elsewhere, and the owner approves the fix before it starts and merges it when it is done.

## The empty middle

The helper missing from that setup is the one most people put first, a chief of staff in the middle that holds the logins, takes requests, and hands work to the others. The how-to pages published by the maker of Grok Bot put that helper first: a sales playbook, a product-manager playbook, and a six-seat studio write-up all start with a manager that routes work and holds mail, an ads account, or a store listing. Those pages are field evidence of what the product is sold to do, not a roster this account copies, because the logins those managers need are the logins this setup keeps off the shared computer. This setup has no such helper, because a middle helper has to hold every login to route every job, and on a shared computer every other helper then holds those logins too. A middle helper also spends its day talking to other helpers, and that talking is charged to the week's allowance, so that when another user of the product ran a chatty chief of staff, the chief of staff used up a week in a few hours, and a quieter version the same user then built of the same helper used about fifteen percent of that. So the middle in this setup is the owner with a phone, opening some notifications and ignoring others.

The one part of the chief-of-staff idea that proved itself is Steward. Steward administers and never routes work. It reports on the other helpers and backs up their files, and it hands nothing to anyone.

## Files, not conversation

The helpers never talk to each other in conversation, and everything they pass to one another goes through files. Watch writes the results of its check to a file in a shared folder, Brief reads that file the next morning, and neither helper has a conversation with the other. Files are the rule because a helper's routines run inside its conversation, and a long conversation makes every run inside that conversation cost more, which is why the product's own team says to keep a scheduled job on a fresh helper with a short history. A file also lets the owner open it and see exactly what was passed, which a conversation does not.

The files also carry the helpers' work off the cloud computer. Steward backs up the shared folder to a public code repository on weekdays, leaving out the one folder that holds the helpers' keys, the access codes a helper uses to read a service such as the websites' visitor figures. That repository holds only the helpers' own reports, so the backup is the one thing a helper writes outside the cloud computer, and nothing on the websites or the notes site comes from it. A copy of that repository sits on the owner's own laptop, which is a Mac, so one command on the Mac, a pull, copies the week's reports home without anyone pasting anything. Once a week the owner opens a session with the assistant on the Mac, the one he writes and codes with, reads what is new, and talks through what mattered with the assistant. Anything worth keeping goes one of two ways. If it is knowledge, it becomes a page on the notes site, and if it is a way of doing something, it becomes a skill file for the helper it belongs to, which is a short written method the helper follows when it runs, so that a method Field found this week is something Watch or Recap can run next week.

## A week

On Monday at eight in the morning Watch checks its six addresses and writes its file. On Tuesday at seven Brief reads the file, checks the changelogs, and sends its notification, and on a normal Tuesday that notification is one line saying nothing changed. On a Thursday the assistant the owner writes with ships a new feature, and Brief's first line that morning says so, with a link to the release note. On a Saturday a person the owner follows publishes a guide with a method worth copying, and Field posts one line with the link in its chat, which is its only post that week. On a Wednesday night Recap finds a new episode of one of the shows and writes its summary. Every weekday evening Steward backs up every file. On the other mornings Brief's one line says nothing changed, and Watch's Wednesday and Friday runs find the sites up. On Sunday the owner pulls the copy to the Mac, reads the week with the assistant, and keeps the guide and one paragraph of the podcast summary, so that the guide becomes a skill for Field and the paragraph becomes a line on a page. Every other hour of that week the helpers did nothing, and that is how it should be, because a helper that runs when nothing changed is spending the week's allowance on nothing.

## What stays on the Mac, and the one trust line

Some work never goes near the cloud computer, and the line is drawn by the same fact as before, which is that whatever is on that computer is there for every helper. The cloud side carries only what is already public. The helpers see the published repository of the notes site, which is what any stranger can clone, and the private half of the owner's notes, meaning drafts, raw sources, and finances, is kept out of that repository and out of the helpers' reach. A grocery cart, a mail session, a shopping login, or a spend that does not stop for a person is the usage that line exists to refuse, and other people's write-ups of those setups are field evidence rather than a roster to copy. A helper that sweeps a public feed and files a report is the same shape as Watch and Brief. A helper that shops is the opposite shape.

Anything that needs a login or touches money stays on the Mac. Mail, cards, shopping, and the owner's finance dashboard are never set up on the cloud computer, however many write-ups show a helper renewing subscriptions overnight. All authoring stays on the Mac too, meaning the prose on the notes site, the example sentences in the dictionary, the story characters in the graded reader, and any rewriting of Chinese, because publishing is the owner's act and the helpers only report. Speech is generated on the Mac as well, for a small audio app the owner built for himself to listen to while he exercises, and no helper runs text-to-speech. Decisions about what is good enough to publish, and the settled rules the setup runs under, stay with the owner for the same reason authoring does. The Mac also holds the disk, the credentials, and the build tools, and two local agents run there: Claude Cowork carries synthesis and structure, and Grok Build carries toolchain work. Every act that cannot be undone, meaning a page published, a site deployed, or a write to the notes, passes through the owner.

That split follows the [[wiki/Concepts/Human vs AI Capability Lens|capability lens]] run as an org chart. The standing helpers are its Delegate cell, held as a duty, and session work on the Mac is its Augment cell. The pages of the notes site are the clearest case: agents draft them under the notes site's [[02 - System/Writing Standards|writing standards]], the model's default selling voice is rejected on sight, and the final cut stays with the owner. A page is a position its author holds, whoever typed the first draft.

Two smaller things are handled from the Mac as well. When one of the websites, whose code is public, needs a file that says where the site is going, so that a helper, once one is given that job, can sort the requests and bug reports strangers file against the site into ones that fit and ones that do not, the owner writes that file on the Mac, puts it in the site's public code, and the helper only reads it. And the keys Watch needs, which give read-only access to the visitor figures for the two websites and to that search engine's report on which of their pages the search engine has indexed, are minted on the Mac fresh for that one job, scoped to reading only, and only then placed on the cloud computer. Nothing is ever copied from the keys the Mac itself holds for the same services, because a credential handed to any helper on the shared computer is visible to all of them.

## The fix pipeline

A helper's report arrives as a packet, which is a file of findings for the owner to review, or as a notification on the phone. The owner skims the packet and strikes the items he disagrees with, pastes the survivors into a session with the assistant on the Mac, makes the edits inside that session, and pushes the result. Fixes never route to a second helper. The helpers are off the Mac and public-only by design, and both the working half of the owner's notes and the judgment live on the Mac. A packet's mechanical items do not change the pipeline; they move through it fast and are approved in a batch. A fault on one of the public websites takes the pull-request route: the coding agent writes the change, and the owner approves it before it starts and merges it when it is done.

## The escalation ladder

When the same class of mechanical fix appears three weeks running, the owner automates the class as a script on the Mac that runs behind a human gate, on the publish-guard pattern, in which a script prepares the change and a person approves it before it goes live. The class never becomes a cloud helper with write access to the live site. The report-only rule has a price: batches of trivial fixes cost the owner minutes that a helper could in theory spend instead. That price is the fee for a notes site whose contents stay trustworthy under the owner's name. The owner pays it, or moves the class down the ladder to a gated script.

## What it costs and when to stop

The cost is a weekly allowance of usage that comes with the subscription, and the setup is built to stay inside that allowance. Overage past the allowance can be bought, and in this setup the switch for buying it is off. A single routine run that finds nothing new costs about one hundredth of one percent of the week, so twelve or fifteen runs a week are nothing. Three other things are what empty a week. The first is a long conversation, which makes every routine on it cost more. The second is a routine that fires every fifteen minutes, which is about a hundred runs a day, and a different user reported that two helpers polling that often used fifteen percent of a week in half a day, since a run that reads and writes costs many times a run that finds nothing. The third is helpers talking to helpers, which is how the chatty chief of staff spent a week in hours.

The product's ceiling is fifty helpers and group chats combined, and fifty routines on one helper. Those numbers are not this setup's limit on helpers. The weekly allowance is. If the owner is away long enough that the product asks whether routines should keep running, and nobody answers, those routines pause, and Steward reports the pause.

Other people's record with unattended agents is poor: scheduled briefs measurably drift generic within a few weeks, and unmonitored agents stop working silently while still reporting success. So every helper carries a canary and a standing review date.

Four rules decide when to stop. A week that closes above about forty percent of the allowance means cutting back before adding anything. A reading helper whose finds go three runs in a row without changing what the owner reads or does is retired, and retiring it means the setup is working rather than failing; Watch is the exception, because a quiet Watch means the sites are up, so Watch is judged by whether its rare faults get fixed. A helper the owner never opens is spending the allowance for nothing, so it is paused rather than hidden, because the product lets you hide a helper from the list without stopping its routines. And a new helper is added only when Steward's reports show a gap that no existing helper can cover, and never because a helper sounded like a good idea in a brainstorm.

After the first two weeks, five checks show whether the setup is working. Field posted at least one line the owner opened. Brief or Watch was opened from the phone on three weekdays. No routine ran more than a few times a day. Usage stayed inside the week. Every helper has the line in its description that says what it never does. If the first two of those checks fail, the routines added in those two weeks are retired, apart from Watch's, because a helper whose reports nobody opens is doing no job. The setup as a whole is working when a failed deploy arrives as an alert instead of being found by hand, when the packets collect strikes and survivals every week, and when usage stays inside the included allowance.

## Earlier drawings, superseded

Before the setup above was running, the same fleet was drawn twice, and neither drawing was signed. Both drawings call the owner's seat at the Mac the desk: the place where rulings are made, findings are captured, and pages are put together, and where every act that cannot be undone passes.

The first drawing split the research into a standing half and a session half. Four always-on cloud agents held the standing half, doing the watching, fetching, and filing, while execution stayed with the local agents on the Mac and judgment, meaning what a finding means, what becomes a page, and what ships, stayed at the desk.

<svg viewBox="0 0 720 400" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standing research structure">
  <g font-size="9" fill="currentColor" opacity=".45" font-weight="700" letter-spacing=".08em">
    <text x="72" y="34" text-anchor="middle">SOURCES</text>
    <text x="300" y="34" text-anchor="middle">ONE CLOUD COMPUTER · GROK BOT</text>
    <text x="594" y="34" text-anchor="middle">HOME</text>
  </g>
  <g style="cursor:help"><title>Public inputs only — timelines, feeds, paper servers, sites, public repos</title>
    <rect x="14" y="48" width="116" height="38" rx="6" fill="rgba(130,130,130,.06)" stroke="rgba(130,130,130,.35)"/>
    <text x="72" y="71" font-size="10" fill="currentColor" text-anchor="middle" opacity=".8">X · timelines</text>
    <rect x="14" y="98" width="116" height="38" rx="6" fill="rgba(130,130,130,.06)" stroke="rgba(130,130,130,.35)"/>
    <text x="72" y="121" font-size="10" fill="currentColor" text-anchor="middle" opacity=".8">feeds · papers</text>
    <rect x="14" y="148" width="116" height="38" rx="6" fill="rgba(130,130,130,.06)" stroke="rgba(130,130,130,.35)"/>
    <text x="72" y="171" font-size="10" fill="currentColor" text-anchor="middle" opacity=".8">public sites</text>
    <rect x="14" y="198" width="116" height="38" rx="6" fill="rgba(130,130,130,.06)" stroke="rgba(130,130,130,.35)"/>
    <text x="72" y="221" font-size="10" fill="currentColor" text-anchor="middle" opacity=".8">public repos</text>
  </g>
  <rect x="168" y="44" width="264" height="312" rx="10" fill="rgba(130,130,130,.04)" stroke="rgba(130,130,130,.3)"/>
  <g style="cursor:help"><title>Watch — the estate's standing checks; speaks only on exceptions</title>
    <rect x="186" y="60" width="228" height="56" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
    <text x="300" y="83" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Watch</text>
    <text x="300" y="100" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">sites · deploys · indexation</text>
  </g>
  <g style="cursor:help"><title>Brief — the day's signal from X and the open web, exceptions first</title>
    <rect x="186" y="132" width="228" height="56" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
    <text x="300" y="155" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Brief</text>
    <text x="300" y="172" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">the day's signal, exceptions first</text>
  </g>
  <g style="cursor:help"><title>Intake — standing source sweeps, scored for relevance and novelty, filed into the research banks</title>
    <rect x="186" y="204" width="228" height="56" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
    <text x="300" y="227" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Intake</text>
    <text x="300" y="244" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">sources scored into the banks</text>
  </g>
  <g style="cursor:help"><title>Corpus — the published wiki audited read-only: duplicates, contradictions, dead links</title>
    <rect x="186" y="276" width="228" height="56" rx="6" fill="rgba(129,86,166,.08)" stroke="#8156a6" stroke-opacity=".55"/>
    <text x="300" y="299" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Corpus</text>
    <text x="300" y="316" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">the wiki audited, read-only</text>
  </g>
  <g style="cursor:help"><title>The desk — rulings, capture, synthesis; every irreversible act passes here</title>
    <rect x="480" y="48" width="228" height="72" rx="8" fill="rgba(47,158,143,.12)" stroke="#2f9e8f" stroke-opacity=".7"/>
    <text x="594" y="78" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">The desk</text>
    <text x="594" y="96" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">rulings · capture · synthesis</text>
  </g>
  <g style="cursor:help"><title>Local agents on the Mac — sessions, builds, credentials, the disk</title>
    <rect x="480" y="152" width="228" height="72" rx="8" fill="rgba(130,130,130,.06)" stroke="rgba(130,130,130,.4)"/>
    <text x="594" y="180" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Mac · local agents</text>
    <text x="594" y="198" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Claude Cowork · Grok Build</text>
    <text x="594" y="212" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">execution · builds · credentials</text>
  </g>
  <g style="cursor:help"><title>What ships — pages, decisions, deploys</title>
    <rect x="480" y="284" width="228" height="56" rx="8" fill="rgba(91,108,176,.1)" stroke="#5b6cb0" stroke-opacity=".6"/>
    <text x="594" y="307" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Ships</text>
    <text x="594" y="324" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">wiki pages · decisions · deploys</text>
  </g>
  <g stroke="rgba(130,130,130,.5)" stroke-width="1.2" fill="none">
    <line x1="130" y1="142" x2="168" y2="142"/>
    <line x1="432" y1="140" x2="480" y2="98"/>
    <line x1="594" y1="120" x2="594" y2="152"/>
    <line x1="594" y1="224" x2="594" y2="284"/>
  </g>
  <g fill="rgba(130,130,130,.6)">
    <polygon points="168,142 161,138.5 161,145.5"/>
    <polygon points="480,98 472.6,97.5 476.8,103.3"/>
    <polygon points="594,152 590.5,145 597.5,145"/>
    <polygon points="594,284 590.5,277 597.5,277"/>
  </g>
  <g font-size="8.5" fill="currentColor" opacity=".55">
    <text x="452" y="110" text-anchor="middle" transform="rotate(-41 452 110)">briefs · packets</text>
    <text x="606" y="140" text-anchor="start">sessions</text>
    <text x="606" y="258" text-anchor="start">human gate</text>
  </g>
</svg>

*The cloud agents see only the published repo, exactly what any stranger can clone.*

Four agents held one lane each.

**Watch** held the standing checks on the public sites: the sites answering, deploys finishing green, search indexation moving, links staying alive. It spoke only on exceptions, so a silent day meant the sites were healthy, and it never touched production. It reported, and repair happened at the desk.

**Brief** read X and the open web each morning on the beats the notes site works, which are AI and agentic engineering and learning science, and filed one exception-first brief: what changed, what crossed a threshold, then the roundup.

**Intake** fed the research banks. It swept its standing sources, meaning feeds, paper servers, and the channels worth following, scored each find for relevance and novelty, and filed queue deltas for review. Banks like the [[wiki/Research/Two Egos Research Bank|Two Egos Research Bank]] were gathered by parallel agents inside sessions; Intake was to run the same collection as a standing lane, so the banks would fill between sessions instead of during them.

**Corpus** audited the published notes site itself: near-duplicate pages, claims that contradict across pages, dead wikilinks, pages missing their sources. It filed review packets and never edited, so every change to the notes passed through a human hand.

In that drawing, sessions stayed the place where findings become positions and positions become pages, and the standing lanes were to run through the night so that the review packets were there in the morning. The working test was that deploy failures surface as alerts instead of by hand, the banks gain entries between sessions, and the briefs stay worth the two minutes they ask.

The second drawing took the same lanes to configuration resolution and added a fifth seat. It was called Structure A: five bots, single duties, one bot per duty, no personas, no orchestrator, with the names as working labels. Nothing in it was ruled. Structures were to be added as they were derived, and the one that survived contact with configuration was to become the record.

<svg viewBox="0 0 640 330" width="560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure A: five single-duty bots on one shared computer">
  <rect x="14" y="30" width="380" height="284" rx="10" fill="rgba(130,130,130,.04)" stroke="rgba(130,130,130,.3)"/>
  <text x="204" y="20" font-size="9" fill="currentColor" opacity=".45" text-anchor="middle" font-weight="700" letter-spacing=".08em">ONE SHARED COMPUTER</text>
  <g style="cursor:help"><title>Watch — sites, deploys, indexation, link rot; exception-only</title>
    <rect x="32" y="48" width="164" height="46" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
    <text x="114" y="68" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Watch</text>
    <text x="114" y="84" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">estate monitor</text>
  </g>
  <g style="cursor:help"><title>Brief — weekday morning signal from X and the open web, exceptions first</title>
    <rect x="32" y="118" width="164" height="46" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
    <text x="114" y="138" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Brief</text>
    <text x="114" y="154" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">morning signal</text>
  </g>
  <g style="cursor:help"><title>Intake — daily source sweep scored into review packets; weekly competitor diff</title>
    <rect x="32" y="188" width="164" height="46" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
    <text x="114" y="208" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Intake</text>
    <text x="114" y="224" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">research feeder</text>
  </g>
  <g style="cursor:help"><title>Corpus — weekly audit of the published wiki plus the retired-tool mold check</title>
    <rect x="32" y="258" width="164" height="46" rx="6" fill="rgba(129,86,166,.08)" stroke="#8156a6" stroke-opacity=".55"/>
    <text x="114" y="278" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Corpus</text>
    <text x="114" y="294" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">wiki auditor</text>
  </g>
  <g style="cursor:help"><title>Steward — weekly quota, routine health, rent-earned report; created last</title>
    <rect x="222" y="152" width="154" height="46" rx="6" fill="rgba(130,130,130,.07)" stroke="rgba(130,130,130,.5)"/>
    <text x="299" y="172" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Steward</text>
    <text x="299" y="188" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">quartermaster</text>
  </g>
  <g style="cursor:help"><title>The desk — every packet and push lands with a human; nothing irreversible leaves it</title>
    <rect x="452" y="118" width="168" height="96" rx="8" fill="rgba(47,158,143,.12)" stroke="#2f9e8f" stroke-opacity=".7"/>
    <text x="536" y="160" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">The desk</text>
    <text x="536" y="178" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".65">rulings · capture · config</text>
  </g>
  <g stroke="rgba(130,130,130,.5)" stroke-width="1.2" fill="none">
    <line x1="114" y1="94" x2="114" y2="118"/>
    <line x1="196" y1="141" x2="452" y2="150"/>
    <line x1="196" y1="211" x2="452" y2="182"/>
    <line x1="196" y1="281" x2="452" y2="200"/>
  </g>
  <g fill="rgba(130,130,130,.6)">
    <polygon points="114,118 110.5,111 117.5,111"/>
    <polygon points="452,150 444.8,146.9 445.1,153.9"/>
    <polygon points="452,182 444.7,180.1 445.6,187.1"/>
    <polygon points="452,200 445.2,196.5 444.9,203.5"/>
  </g>
  <g font-size="8.5" fill="currentColor" opacity=".55">
    <text x="122" y="110" text-anchor="start">overnight exceptions</text>
    <text x="324" y="128" text-anchor="middle" transform="rotate(2 324 128)">push · packets</text>
  </g>
</svg>

*Steward holds no lane of its own; it reads the other four bots' run records.*

**Watch, the estate monitor**, where the estate means the public sites. Hourly reachability on the public sites. On every push of code, a deploy check, and on failure the build reproduced on the bot's own box with the offending file named. Daily Search Console diff: canary crawl times, coverage flips, indexed counts moving off zero. Weekly link-rot crawl. Exception-only voice. Needs one fresh read-only Search Console key and nothing else.

**Brief, the morning signal.** Weekdays 07:00: one sweep of X and the open web on the same beats, plus whatever Watch flagged overnight, delivered as a single exception-first push to the phone. What changed comes first, the roundup last, silence where nothing moved. An earlier daily digest had stopped for lack of a platform to run on, and Brief was that digest brought back. Needs only its schedule.

**Intake, the research feeder.** Daily sweep of its standing sources, each find scored for relevance and novelty, filed as one review packet. Weekly, the competitor bank re-run and diffed. The packet is the product; nothing enters the notes except through the desk. Needs chat delivery to start, and a git bridge later if packets should land as files.

**Corpus, the wiki auditor.** Weekly clone of the published repo, then the sweep: near-duplicate pages, contradicting claims, dead wikilinks, sourceless pages, in one packet, never an edit. A standing sub-duty, called the mold check: tracked instruction and config files searched for any return of retired tools, with every new mention flagged with file and line. Needs git confirmed present on the box; the repo is public, so no credential at all.

**Steward, the quartermaster, created last.** Weekly: quota burn against the included allowance, routine health, review dates coming due, and one line per lane on whether its output justifies its share of the allowance. A catalog of setups other people run includes a row that says to look at the whole fleet's spend and kill the wasteful ones; that row is this report. Administration, never orchestration.

**Shared clearance.** All five sit on one computer, so all five hold the same trust level: public material only, scoped read-only keys only, and every output lands as a push to the phone, a chat message, or a review packet. Nothing writes to the notes, nothing touches production.

**Rollout.** Week one, Watch and Brief alone, as the metering week, watching how fast two lanes eat the weekly allowance. Week two, Intake and Corpus if the meter allows. Steward once three lanes run. Before any of it, five minutes of in-product verification: one computer or one per bot, git present or absent, disk quota, the actual weekly allowance, and push reaching the phone.

**The case against A.** Five bots may be two too many for a shared weekly quota; the meter decides, and the structure shrinks in steps, with Steward's duties folding into Watch and Intake's weekly diff into Brief. Single-duty bots also multiply routines to maintain: five bots at even three routines each is fifteen schedules carrying canaries and review dates.

Three more sketches were listed and never derived.

- **B, three generalists.** Ops, Research, Admin. Fewer routines to maintain, muddier accountability per finding; field reports so far favor narrow bots over broad ones.
- **C, two bots plus routines.** One monitor, one reader; the audit becomes a monthly routine instead of a standing bot. Cheapest on quota, slowest to notice drift.
- **D, first-party playbooks.** A chief of staff in the middle, specialists around it, helper-to-helper handoff, mail and ads and store listings on the shared computer. That is what the maker's published how-to pages run. It was a candidate only as a record of what the drawing was not, and the logins those seats need stay off this account. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]].

Structure A was never signed. The setup that runs kept the one-duty helpers, Watch, Brief, and Steward, and the trust line these drawings drew first.

## What a setup like this can grow into

Taken as a whole, Grok Bot on this account is a set of reading helpers with no helper in the middle. Watch, Field, Recap, and the smaller reading helpers look outward and write files. Brief reads the files and sends one notification. Steward watches the reading helpers and backs up the files. The only place everything meets is the owner's phone, and the only thing that changes on the sites is a pull request the owner chose to merge.

Five kinds of work fit a setup like this: watching, repair, keeping, a learning loop, and skills made from what the reading helpers find. Watching and repair are already running, since watching is what the reading helpers do and repair is the pull-request lane. Keeping is the work Steward and the weekly audit of the notes site do now and can grow into, which is backing up files, listing what could be deleted without deleting it, and checking the notes site for dead links and pages without sources. A learning loop is the next reading helper worth adding, and it would be a helper that turns a public paper into a five-minute read or into a script the owner's audio app can speak, together with a rule that Field and Brief compare what they sent against what the owner opened each month and propose changes to the rules they pick lines by. Skills made from what the reading helpers find is the weekly session on the Mac, where a method Field found becomes a file a helper runs. Two more kinds that other people run are kept off the helpers. Making, in the sense of producing content, happens on the Mac, and the only content that reaches a public site by way of any agent is a proposed change the owner reads and merges himself, the way he merges a fix. Advising, in the sense of a helper that questions the owner or plans with him, stays a conversation with the assistant on the Mac, because on the shared computer that job turns into the chief of staff this setup left out.

So, for the person with two public websites, a notes site, and a reading habit, the answer is to set up a few helpers with one job each, refuse anything that needs a login on the shared computer, and judge the whole thing by which notifications you open.

## How to practice this

1. Give each helper one standing duty, a clock, a file to write, and a closing line saying what it never does. Notice that a helper with one output shows its breakage the week it happens, as a late or empty file.
2. Let every helper stop at a report, and route any fix through a pull request you merge yourself. Notice that a wrong report costs nothing, while a wrong edit to a public site costs something.
3. Pass work between helpers through files in a shared folder. Keep each scheduled job on a fresh helper with a short history. Notice that each run stays cheap and that you can open the file and see what was passed.
4. Keep logins, money, authoring, speech, and decisions on the Mac. Mint any key a helper needs fresh, read-only, for that one job. Notice that no helper on the shared computer holds a login or a key that can write.
5. Read the week's usage in Steward's report. Notice a week closing above about forty percent, a routine firing every fifteen minutes, or a long conversation. Cut those before adding anything.
6. After two weeks, count which notifications you opened. Retire a reading helper whose finds went three runs without changing what you read or did. Notice that retiring it means the setup is working.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Grok 4.6 and Grok Bot]]: the product against the model that shares its name and against Grok Build, and the subscription it comes with
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: the maker's how-to pages this setup is choosing against, filed as sketch D and not as a roster; one-finder and finding-as-spec as they showed up in a first-party studio playbook
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: named-runner claims with confidence tags
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: why every lane ends with the owner, and why judgment stays there
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: where the fleet sits among the other agents
- [[wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg|Automation and the Job Iceberg]]
- [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the older manual checks the audit helper now runs on schedule

## Open questions

- After a month, which notifications still get opened, and which helpers does that retire?
- Does a learning-loop helper earn a seat before the second month, or does the weekly session on the Mac cover it?
- Does the weekly session on the Mac keep happening once the novelty is gone, or does the backup repository fill up unread?

## Sources

- [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq): one computer per user, not per Bot; bots are not a security boundary; delete does not clear files or logins; weekly usage. Re-fetched 2026-08-31.
- [Grok Bot documentation](https://docs.x.ai/grok-bot/overview): the shared-computer architecture, routines, and the quota model.
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots): hide does not pause a routine; account cap of fifty bots and group chats combined; a catch-all helper named as the anti-pattern.
- [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations): fifty routines per bot; routines may pause after a long period away; prepare before execute; approval for send, purchase, delete, publish, production change; no-data and stale-data policy.
- [Get started](https://docs.x.ai/grok-bot/get-started): first request names outcome, sources, constraints, deliverable, review point.
- [Grok Bot Guides](https://x.ai/bot/guides): five first-party playbooks captured 2026-08-31; field evidence of a chief of staff and of mail, ads, and store logins this setup refuses; one-finder and finding-as-spec from the 25 August studio playbook; filed as sketch D. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]].
- [Session fences: bots are not a security boundary](https://forum.cursor.com/t/grok-bot-ship-real-session-fences-bots-are-not-a-security-boundary/168476): Cursor forum, 2026-08-16. A bot on one screen opens a site another bot logged into.
- Lauren Kwok, Grok Bot team, 2026-08-23: [long chats make routines expensive; a 15-minute routine is about 100 runs a day; put recurring work on a fresh bot](https://x.com/poteto/status/2091368467060662497)
- Austin Lin: [each routine fire about 0.01% of weekly quota; two polling bots used 15% in half a day](https://x.com/siraustin/status/2090543651508171180)
- Geoffrey Cheng: [a chatty chief of staff burned a week in hours; quieter handoffs used about 15% of that](https://x.com/geoffrey1211/status/2091565230295753099)
- Alpha Batcher: [packages installed on the computer wipe on update; files in the shared folder /workspace stay](https://x.com/alphabatcher/status/2089876344259629339)
- Flavio Copes: [Blog Pulse: one bot, daily file, never publishes](https://flaviocopes.com/grok-bot/), the file-per-run pattern Watch copies
- Kun Chen, 2026-08-23: [a VISION.md per repo so a bot can triage issues; a person merges](https://x.com/kunchenguid/status/2091638832307536357)
- Ryan Staley: [140 bookmarks graded, a third kept, ten skills made](https://grokbot.dev/use-cases/grade-bookmarks-into-skills/)
- [grokbot.dev feed](https://grokbot.dev/api/v1/feed.json): 131 write-ups on 2026-08-24, sorted by purpose for this page. Cards cited: [weekly disk cleanup](https://grokbot.dev/use-cases/weekly-disk-cleanup/), [13,425 prompts extracted from 557 chats](https://grokbot.dev/use-cases/extract-art-prompts/), [a paper as a four-minute animation](https://grokbot.dev/use-cases/math-explainer-video/), [a research desk that grades its own calls](https://grokbot.dev/use-cases/ai-research-desk/)
- Matt Palmer, *Intro to Grok Bot*, 2026-08-11: first-party practitioner essay. Sweep-and-file specimens match Watch and Brief. Grocery and delivery specimens are the usage the public-only line refuses. Bank: [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]].
- On scheduled content drifting generic within weeks: [Things I built with AI that completely fell apart](https://thoughtbymalte.substack.com/p/things-i-built-with-ai-that-completely)
- On unmonitored agents degrading while reporting success: [You can't train an AI agent and then just go away](https://www.saastr.com/you-cant-train-an-ai-agent-and-then-just-go-away-we-did-and-it-fell-off-the-rails), [a taxonomy of silent agent breakage](https://www.telerik.com/blogs/when-status-ok-still-failure-taxonomy-silent-ai-agent-breakage-how-detect)
- Named-runner catalog row on fleet spend: [[wiki/Research/Grok Bot Field Packet 2026-08-15|Grok Bot Field Packet 2026-08-15]]
