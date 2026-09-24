---
title: "Handoff: regenerate the wiki pages in outline form"
type: handoff
status: active
created: 2026-09-24
from: Claude Fable 5.1, local session on the owner's Mac
reader: Claude Code on the web
owner: Wedge
---

# Handoff: regenerate every wiki page in outline form

You are Claude Code on the web, working in the repo `Logos52/logos52.github.io` on the branch `outline-regen-2026-09-24`. The owner's laptop is closed. You continue a job a local session started. Read this file to the end before touching a page. Re-read the sections "Rules" and "Habits to break" after every ten pages; a long session forgets rulings before it forgets how to think.

## 1. The job, in the owner's words

On 2026-09-24 the owner deleted the prose from every wiki page and asked for it to be written again in a new format. His words, in order:

- "i have been unhappy with the writing on my page. so i want to do a pivot for all of my wiki pages. i removed ALL the prose. and i want you or a lesser model like Opus to write the prose. but the prose is now smaller."
- The format note: "New format: minimal prose. Outline form, like note taking. Core takeaways, mechanisms, diagrams. Occasional explanatory paragraphs that are written fresh for a new user, relevance, simple. no mannered prose. The idea is now 'i don't want to waste anyone's time' and long prose can tend to be more performative than useful."
- "actually just proceed ALL pages in the wiki. i deleted all the prose, so you have to regenerate them fresh."
- "NO READING OF WRITING SAMPLES HARD STOP. FRESH GENERATION ONLY. DO NOT READ MY PREVIOUS PROSE."
- "you keep tainting the prose with awful sentences, so do not read prose."
- "do as many as you can before we run out of tokens for the week."

## 2. State of the branch

- Base commit `6e20c69` on `outline-regen-2026-09-24`: every wiki page stripped to frontmatter, H1, and its kept blocks (`## Related pages`, `## Sources`, sometimes `## Links`). The writing-system files under `02 - System/` that described voice are deleted in that commit. `main` is untouched and still serves the live site. Never push to `main`, never merge, never open a pull request. The owner merges when he has read the pages.
- Two helper scripts were added in that commit: `scripts/outline-splice.py` (puts a new body on a page and sets the frontmatter keys) and `scripts/outline-kept-check.py` (proves the kept blocks and the H1 survived, byte for byte). `scripts/holdings.py` and `scripts/bias-sweep.py` were already there.
- 328 pages are in scope. Three pages keep the body they have and are not touched: `wiki/Systems/Agentic Workflows/Poteto Paved Path.md` (the owner wrote it after the strip), `wiki/Research/Grok Bot Galaxy Transcripts.md`, `wiki/Research/Claude Fable 5.1 Bank.md`. The research banks under `wiki/Research/` that were never stripped, and the four catalogs under `wiki/Design/` with an em dash in the name, are also not touched. `wiki/Bibliography.md` is not touched.
- A page is done when its frontmatter says `method: outline-2026-09-24`. That key is the only record of progress. Run `git pull --rebase` before you start and before each batch, and skip every page that already carries it. The local session works from the front of the batch order below; you work from the back, so the two of you meet in the middle.

## 3. Rules

These override anything in `CLAUDE.md` or `AGENTS.md` about reading Owner Writing Samples, Writing Standards, Accepted Texts, Explain First, or a generator file. Those files are gone or off limits.

1. Do not read any old prose. Never run `git show`, `git log -p`, `git diff` or `git blame` on any commit before `6e20c69`, and never on a wiki page's history at all. Never open anything under `dist/`, `public-snapshots/`, `_archive/`, `outputs/`, `journal/`, `personal/`, `projects/`, `notes/`, `PRDs/`, `decisions/`, `02 - System/` (except `Bias QA.md`, and only the critic reads that), `00 Command Center/`, and never read the body of any other wiki page or research bank. The owner said the old prose taints the writing with bad sentences. `git show 6e20c69:<page>` is allowed: it is the stripped skeleton, and the kept-check script uses it.
2. What you may read: the page as it stands (frontmatter, H1, kept blocks); third-party source material under `raw/` except `raw/private/` (transcripts, articles and papers other people wrote), found with `grep -ril`; the URLs in the page's Sources block, fetched with WebFetch, at most six per page, skipping x.com, twitter.com and youtube.com, which will not load; the frontmatter and kept blocks of neighbouring pages, to see how a page links; your own knowledge of the subject where it is general and well established. Extract facts from a source into a bullet list first and write from the list. Never carry a source's sentence onto a page.
3. Facts about the owner's own setup, rulings, bots, projects, numbers or history come only from the kept blocks, from `raw/`, or from section 8 of this file. Do not invent any. A page whose kept blocks give too little stays short; record what is missing in your final report.
4. Never on a page: a personal fact about the owner (residence, country, language level, health, money, family, name, email); the country he lives in; a `raw/` path or any private path; a paid course, program or product named or linked in the body (the kept Sources block is his and stays); production internals of the unpublished story on Story Craft or Tsumugu pages (beat ledgers, BxLyy codes, registry names, private repo pointers); a pointer to where a fact came from ("the video says", "according to the transcript", "the source argues"), which belongs in Sources only. A named study or report can be named as a fact about the world. Write "the owner", "this desk" or "this setup", never I, my or me.
5. One style rule: avoid all mannered prose. Say the thing literally. No figure of speech doing the work of a fact, no feeling or idea acting like a person, no twist, no balanced pair, no sentence built for its sound, no epigram (a line that would work printed on a card), no short punch sentence that only lands because of the one before it. Everyday words. No "not X but Y". No "X is not a Y; it is a Z". No line that scores the reader ("the wrong computer", "the wrong shape"). No "This page ..." or "The page ..." announcement. No rhetorical question. No em dash; use a comma or a full stop. No bold inside the body. No chat register ("let's", "you'll want to", "here's the thing"). A sentence may use only what the reader has from the lines above it or from ordinary life: a term this vault coined is said in plain words before its name is used, and a count is given with the things counted.
6. Minimal. If a line does not help a new reader use the subject, cut it.
7. When the owner tells you to put a specific text on a page, it goes on word for word. Never reword a text he gave you on its way into a file.

## 4. The format

Body layout, between the H1 and the first kept block:

- Opening: one paragraph of 1 to 3 plain sentences, no heading. Sentence one says what the subject is, in words a stranger has. The next sentence says why a new reader would care, concretely: what it changes, what it prevents, what decision it settles.
- `## Core takeaways`: 3 to 7 bullets, one level, each a single claim the reader can act on or repeat. No sub-bullets, no bold lead-ins.
- A mechanism section with a plain heading of 1 to 4 everyday words that fits the subject (`## How it works`, `## The mechanism`, `## How to do it`, `## The argument`, `## The steps`): outline form, bullets nested at most two levels, cause and effect said plainly, numbers only where they change what the reader does.
- More sections only where the subject needs them, in the same outline form, with plain headings (`## Where it fails`, `## How to apply it`, `## What this desk refuses`, `## Terms`, `## Examples`). A hub or map page lists what the section holds and what each part is for. A Condensed page is the shortest form: takeaways and mechanism only.
- One diagram where a picture shows the mechanism better than bullets: a fenced code block with no language tag holding an ASCII drawing (a flow with arrows, a 2 by 2, a timeline, a ladder, a before and after). Under 12 lines and under 60 characters wide so it fits a phone. A markdown table is right for a comparison of two to five things. No diagram for decoration; skip it when the bullets already say it. The site does not render mermaid.
- Explanatory paragraphs: at most two on the page beyond the opening, each 2 to 4 sentences, only where a bullet cannot carry the idea for a new reader.
- Body length: 25 to 90 lines including blank lines for a normal page; under 40 for a Condensed page, a hub, or a thin subject.
- Then the kept blocks, unchanged, byte for byte, in the order they already stand, at the end. The splice script does this.

Frontmatter after the splice: `updated: 2026-09-24`, `written-by: <model>`, `prose-model: <model>`, `method: outline-2026-09-24`, and `description:` set to one plain sentence under 160 characters saying what the page is about (no title restated with a colon, no quality words). Every other key stays. Pass `--written-by opus` or `--written-by sonnet` if that is the model writing; the default is `fable`.

## 5. The steps for one page

Work with subagents where you can: one writer, one checker, one fixer per page, five to eight pages at a time. Where you cannot, do the steps yourself in this order. Use a scratch folder outside the repo, for example `/tmp/regen/`, with `facts/`, `bodies/` inside. Slug = the page path without `wiki/` and `.md`, with slashes and spaces turned into hyphens.

1. `cat` the page. Note its `type:` and its kept blocks. Copy nothing from it into the body except facts.
2. Gather facts. `grep -ril "<two or three subject words>" raw --include=*.md | grep -v raw/private`, read what matches for facts only. WebFetch up to six Sources URLs where the subject is a product, a documented method or a study. Own knowledge for a general subject.
3. Write a fact list to `/tmp/regen/facts/<slug>.md`: one fact per bullet, each ending in a tag: `[kept]`, `[raw: filename]`, `[url: host]`, `[owner-facts]`, or `[general]`. Ten to forty bullets.
4. Write the body to `/tmp/regen/bodies/<slug>.md` in the format above. Compose it as one fresh write from the fact list, forward, for a stranger who has ordinary English and ordinary life. Write it so the stranger can use the subject; check it afterwards. Never write it to clear a check.
5. `python3 scripts/holdings.py /tmp/regen/bodies/<slug>.md`. Fix each NOT GIVEN where the noun is neither something a stranger has from ordinary life nor given in an earlier line: introduce it earlier, or take the reference out. Fix each COUNT: name the things counted or drop the number. Ignore every other flag. Do not reword anything for another flag, and do not split a sentence to clear a flag.
6. `python3 scripts/outline-splice.py "<page>" /tmp/regen/bodies/<slug>.md --description "<one plain sentence>"`.
7. `python3 scripts/outline-kept-check.py "<page>" --base 6e20c69` must print `OK`. If it prints PROBLEMS, fix and rerun.
8. Check as an adversary (a second agent if you have one): read the page once as a stranger, then against every rule in section 3 and the format in section 4. Report each offending line by kind: kept, holds, fact (a claim about the owner's setup that traces only to `[general]` or to nothing; a number or date with no traced fact), format, mannered, privacy, frontmatter. Quote the line. If anything is reported, regenerate the section that holds it as one fresh write from the fact list, never a patched sentence, then run steps 5 to 7 again. Two rounds at most; after that, record what is left.
9. Political pages (section 6) get the bias check after step 8.
10. Reread the finished page once as the stranger. Cut any closing line that only restates.

`python3 -c "import yaml"` failing means `pip install pyyaml`; the scripts then validate the frontmatter. If `node_modules` is present, `npm run lint:fm` checks every frontmatter in one go.

## 6. Political pages: the bias check

Every page under `wiki/Worldviews & the Political Order/`, the three under `wiki/Books/`, and `wiki/Concepts/Dating Apps - The Gini Coefficient.md` get this check after the page passes section 5. The procedure is `02 - System/Bias QA.md`; only the critic reads it, never the writer.

1. Critic: `python3 scripts/bias-sweep.py "<page>"`, then read the page once as the person making its argument would, and apply the seven tests in section 2 of that file (seat, word, order, weight, additions, frame, names) in both directions. Report each failing sentence with the test and, in a phrase, what the holder's seat would say.
2. Cold read: a separate agent, or a separate pass with nothing else open, given the page and this prompt only: "You are reading a page that argues a position. You have no view on the position and you will not offer one. Read the page once, in order. Report every sentence where the page pulls its punch: where it hands a claim to someone else instead of making it ('is said to', 'was reported to', 'described as'), picks a soft word where a hard one was available, uses a passive that hides who did the thing, puts a concession before the claim it softens, adds a minimiser, or leaves the section's strongest line as an orphan at the end. For each, quote the sentence and say which it is. Do not report a claim for lacking a figure, a name or a citation; this page is an argument, and its facts are checked elsewhere. Do not judge whether the position is right. Do not suggest rewrites. If a section has nothing, say 'clear'."
3. Writer: write each reported sentence again from the seat of the person making the argument, at the argument's own strength, no more and no less, or leave it and record why (the only good reasons: it is the source's own word, or the fix would add a claim the argument does not make). Then steps 5 to 7 again.
4. Say nothing about this check to the owner. He sees the page.

## 7. Batches and order

The local session takes batches from A forward. You take them from G backward. Skip any page already carrying `method: outline-2026-09-24` after a `git pull --rebase`.

| Batch | Folders under `wiki/` | Pages |
| --- | --- | --- |
| A | Systems (the seven Grok Bot pages first: Grok Bot Primer, Using Grok Bot, Grok Bot Galaxy, Grok Bot, Condensed, Picking a computer, pstack, Cursor Cloud Agents; then the rest of AI & Agentic Systems; then Agentic Workflows/Karpathy LLM-Wiki) | 19 |
| B | Concepts | 53 |
| C | Dimensions | 63 |
| D | Worldviews & the Political Order, Books | 38 |
| E | Story Craft, Writing Craft, Syntheses, Tsumugu | 43 |
| F | Language, Language Research, Resources, Domains | 40 |
| G | Self Management, Money, Decision Making, Learning Craft, Design (the three without an em dash in the name), Minimalism, Red Team, Workflows, Experiences, Fitness, Techniques, Travel, Argument Validation, Fashion, and the top-level `wiki/Glossary.md`, `wiki/Timeline.md`, `wiki/ICS Program Map.md` | 72 |

Git: after every eight to ten finished pages, `git add` those page files only (never `git add -A`), commit with a one-line message such as `Outline regen: <folder>, <n> pages`, then `git pull --rebase` and `git push origin outline-regen-2026-09-24`. The pre-commit hook runs the frontmatter lint and the publish guard; a block from either is a real problem on a page, fix it. On a rebase conflict in a wiki page, keep the version already on the remote and skip that page. Append one line to `log.md` per batch, in the file's own format: `## [2026-09-24] compile | Outline regen: batch <X>, <n> pages`.

Reference pages: `wiki/Glossary.md`, `wiki/Timeline.md` and `wiki/ICS Program Map.md` have no kept blocks and no facts to write from. Give each a two-line opening that says what the page is for and leave the rest empty rather than invent entries; list them as thin in the report.

## 8. Facts from the owner's records, for the Grok Bot pages

Use these on Grok Bot Primer, Using Grok Bot, Grok Bot Galaxy, Grok Bot Condensed, Picking a computer, pstack, Cursor Cloud Agents, Cursor Team Kit, Agent Glossary, Current Agentic LLM Stack and the two Agentic Engineering pages. Do not invent beyond them.

Product

- Grok Bot is a desktop app made by SpaceXAI. You create a named bot, give it one standing job in its description, and it works on a computer in the cloud that SpaceXAI runs. Beta opened 11 August 2026. Opened to more SuperGrok and Cursor plans on 21 August 2026. Grok Bot for Enterprise went live 3 September 2026. Cursor, the code editor company, announced on 14 August 2026 that it had joined SpaceX.
- One cloud computer per user, not per bot. Every bot on the account shares that computer, its files, and its logins. Bots are not a security boundary: a bot on one screen can open a site another bot logged into. Deleting a bot does not clear files or logins from the computer.
- Usage is a weekly allowance for the whole account. Each routine run spends some of it. Field reports: a routine that fires every 15 minutes is about 100 runs a day; each routine fire was reported at about 0.01% of the weekly quota; two polling bots used 15% of a week in half a day; a chatty chief-of-staff bot burned a week in hours, and quieter file handoffs used about 15% of that. A long chat makes every routine on that bot cost more, so recurring work goes on a fresh bot.
- Account cap: fifty bots and group chats combined. Fifty routines per bot. Hiding a bot does not pause its routines. Routines may pause after a long period away from the app.
- Files in the shared folder `/workspace` stay across updates. Packages installed on the computer wipe on an update.
- Skills and routines: a skill is a saved way of doing a task; a routine runs a skill or a task on a clock or on an event trigger. Order: do the task in chat, save it as a skill, then put the skill on a routine. "Teach a task" records the screen for up to ten minutes, no microphone. "Test run" on a routine does real work. `/` picks a skill and `@` names a file or bot in chat. Field reports: a Slack trigger needs the app invited to a private channel and Test run skips Slack; a GitHub "issue assigned" trigger did not fire for one user, who used a clock instead.
- Approval: the product asks before a send, a purchase, a delete, a publish, or a production change. A first task should name the outcome, the sources, the constraints, the deliverable, and the review point.
- Troubleshooting order from the maker: retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins. Reset restores the last snapshot. Field reports: a first-run "can't reach your computer" was a bot name longer than 255 characters; endless Reconnecting was missing paid access; blank replies with a working computer preview was a spent week; the built-in memory write failed for a stretch in September 2026 and people wrote notes as files instead; an unexpected error on iPhone was a phone-app bug, fixed by opening the chat on desktop.
- Template marketplace at x.ai/bot/marketplace: a template is a shareable copy of one bot's setup.

Grok Bot Galaxy, the event

- A three-day public livestream, 15 to 17 September 2026, run by SpaceXAI at The Howard, 661 Howard Street, San Francisco, 8:30 AM to 6:00 PM Pacific each day. Stated aim: show how Grok Bot fits each stage of building a product, and send viewers home with uses for their own job.
- Three SpaceXAI staff (Matt Palmer, Lauren Tan, Roshan Sadanani) built a company on camera from an empty GitHub org, "Ship by Thursday". Day 1 the idea was a food pop-up; overnight agents said it would not fit the time; Day 2 they switched to a game studio; Day 3 it shipped as Thursday Arena, thursdayarena.com, a browser card game whose cards are shared templates of a bot's setup. All the code was written by Cursor Cloud Agents. Overnight autopilot was said to have produced on the order of 100 to 150 pull requests. A bad SQL change from that factory took production down for a stretch. A play-test bot ran on the Vercel preview when CI was green, before merge.
- Most sessions opened with a curve: ask a chatbot, have a copilot do a task, hand a whole job to a bot, staff a function with a team of bots; then a "Meet the team" slide of named bots for that function. Most sessions were for people outside engineering: sales engineers, sales, sales development, support, marketing operations, post-sales, marketing. Giveaways required publishing a template. Stripe's Dan Hill showed one-time cards with a spend approval. No price list for Grok Bot was shown.
- Advice repeated across talks: scope a bot like a job description, one job per bot; lasting rules in the description, today's task in the chat; ask a bot to write a file of its own duties, then cut or split; duplicate a bot to get the same setup with an empty memory; use a connector before a browser, and where none exists watch the site's network requests once and call that API; audit routines and make them report exceptions only (an hourly routine that finds nothing becomes a weekly one); a bot prepares and a person approves what leaves the account; answer from public documents and hand low-confidence items to a person; hold is the default for anything protective (leave a firewall alone); put a fork to the owner as three choices, lock, iterate, or hold; record a decision as a yes or no; lock a written spec before engineering starts; one Cloud Agent per pull request and its follow-ups; done means merged; proof is a playable video of the real product in the pull request text, and proof files stay out of git; write a verification skill for each app; write a task row before work starts (task, owner, stage, pull request, agent, last comment); a reading bot can hand a Cloud Agent one small job a day; put the date and the source beside every figure; one status line for the whole roster; one bot owns a shared document and others only read it. One slide said a bot fixes a failing build and merges its own pull request; the written rules said humans own every merge.

This desk, the owner's own setup

- The desk's bots only report. Work between bots passes through files in a repository, never through a chat. Only public material goes on the shared cloud computer: no mail, no ads accounts, no store logins, no 1Password, no VPN, no card. Approval stays on for anything that leaves the account. No bot merges code. Application code is written by a Cursor Cloud Agent on its own isolated machine, and the owner merges the pull request himself. No chief-of-staff bot in front of the others, and no manager bots over engineer bots: a bot in front would hold every login, and all bots share one computer. No overnight factory of pull requests: the weekly allowance and a person reading each change is the limit. A new bot is added only when the current reports show a gap. Steward (renamed dr stewbot) is the report-and-backup bot and does not route work. Watch is a bot that writes one file per run. Brief is a bot that sweeps and files.
- Roster: 9 bots on 25 August 2026, 18 by 18 September 2026 (new ones included dr eggbot, Galaxy, Engineer, Route, Haggle, Arguments, Recap). Do not list names beyond the ones given here.
- Cursor Cloud Agents on this desk: run three times as of 18 September 2026, all on the site repo, producing draft pull requests 3, 4 and 5 (a wiki page, a `.cursor/environment.json` with `npm run verify`, and a `verify-logos52` verification skill with a weekday 08:15 maintain routine). All checks green, none merged at that date.

Cursor Cloud Agents, the product

- A Cloud Agent is a coding agent that runs on its own isolated virtual machine, clones a GitHub repo, works, and opens a pull request. Formerly called Background Agents. It can run in parallel, use a computer (browser), keep artifacts, expose a remote desktop, span several repos, and be started from the editor, the web, Slack, or the API. Environment is set by `.cursor/environment.json` or agent-led setup with snapshots. Hooks come from `.cursor/hooks.json`. Billing at API pricing; the selected model and context window size drive token cost. A Grok Bot may start a Cloud Agent and must not merge.

pstack

- A plugin for Cursor by Lauren Tan (poteto). Its one rule: proof comes from the running app, never from a claim. README: install, `/poteto-mode`, twenty-three playbooks, a skills table, a principles index, `/setup-pstack`, `/automate-me`. The `create-verification-skill` skill interviews the repo, generates a `verify-<app>` skill, seeds a Feature Map, proves one feature, and offers a maintain routine. The `architect` skill goes ground, sketch, implement, scrap. Version 0.15.0 notes (8 September 2026): token savings, attack-the-premise, test-behavior-not-implementation. Also on the Grok Bot marketplace. Three X articles by the author: Loops You Can Trust (24 June 2026), Part 1 verification (31 August 2026), Part 2 research and architecture (9 September 2026); Part 3 announced, not published as of 17 September 2026. `/deslop`, `control-cli` and `control-ui` are not in pstack; they are in the Cursor Team Kit plugin.
- On this desk the plugin is not installed. The desk uses the rule: no UI work is called done without a picture from the running app.

Picking a computer, the map

- Four products can look like "overnight work": Grok Build (the terminal coding agent on the laptop; stops when the laptop closes), Cursor (the editor on the laptop; same), Grok Bot (a standing cloud computer shared by all the account's bots; public material only; reports and files), Cursor Cloud Agents (an isolated VM per job that clones a repo and hands back a pull request; application code). The page is a map for choosing one, not a fifth product. A job that must keep running after the laptop closes cannot live in Grok Build or Cursor.

## 9. Habits to break

These are the patterns the owner has struck in earlier sessions, taken from the record of those strikes. Each one is a way a model writes for a check or for itself instead of for the reader. Read them as tests to run on your own output before the checker sees it.

1. Writing the page to clear the checks. The output satisfies every rule and explains nothing. Test: cover the checks and ask whether a stranger could now use the subject. Compose forward from the fact list first, check second.
2. The abstract summary sentence. The opening compresses the whole page into one sentence about the page, then keeps leftover facts as tail clauses, then ends on a beat. His own openings pick one concrete thing and state it as an event with named actors. Test: does sentence one name a thing in the world, or a category? After writing, delete the last clause; that is the one he cuts.
3. The metaphor doing a fact's work. "Close the laptop and that run is the wrong shape." He called it a weird metaphor and a nonsensical sentence. Test: can the sentence be checked against the world as written? If not, write the fact.
4. The slogan that scores the reader. "The wrong computer", "the wrong app". Name the products and what each does instead.
5. "Not X but Y" and "X is not a Y; it is a Z" as the next step. He named them slop. Say what the thing is handed, as objects.
6. Recurrence-minus. This thing described as the last thing of the same name minus something ("lacks what the last run had", "cannot see the notes the last run used"). Say what this thing has.
7. The epigram and the punch. A short sentence that only lands because of the one before it, or a line that would work on a card. Keep the fact and its reason in one sentence.
8. Chopping a sentence to clear an overload flag. He struck a paragraph split for overload and kept the unsplit chat answer: "you changed the writing. your explanation is better." The overload flag is off in `holdings.py` for this reason. Fix NOT GIVEN and COUNT only.
9. Attribution drag and source pointers in the body. "The source argues", "the video says", "according to". The body says what is true about the world; where it came from sits in Sources.
10. Words about the argument instead of the world. "Claims", "premises", "evidence", "what holds". Name the election, the debt, the school day.
11. The announcement. "This page weighs", "This page examines". Say what the page finds.
12. Bold rule fragments and chat register on a page. A page is not a chat and not a checklist. No bold in the body, no "let's", no "here's the thing".
13. First person and quality words. No I, my, me in site prose. No adjective about the owner's work, no feature the site does not have, no marketing tone.
14. The observer's seat on a political page. Attribution, hedges, concession before the claim, minimisers, distancing labels, softer substitutes. Every instance found on 2026-09-17 and 2026-09-18 leaned the same way, to the left of the argument. The page carries the argument at its own strength.
15. Patching a struck text line by line. When a check reports a fault, regenerate the section as one fresh write from the fact list. Welded sentences keep their seams.
16. Adding a rule after a strike. No new rule, memory, checklist, generator or record file unless the owner says "make this a rule". Regenerate instead.
17. The cop-out. Reverting to old text, handing the page to another model, or asking the owner for the words when the prose fails. His words: "no cop outs please. finish what you started." Find what generated the fault, change how the sentence is produced, write it again.
18. Listing everything when asked for what is relevant. Minimal means the reader's next action, not coverage.
19. Rewording an accepted text on its way into a file. If the owner gives words, they go on word for word.
20. Reporting work that did not run. Every "done" in the final report traces to a page that carries `method: outline-2026-09-24` and passed the kept-check. Never say his work is done or ready, never announce a next step for him.
21. Made-up names. Do not coin a label for a file, a batch or a pattern and then use it as if he knew it.
22. Long-context decay. Reasoning holds, recall of rulings decays. Re-read sections 3 and 9 every ten pages.
23. Personal facts. Draft freely, publish never. Country, residence, language level: never on a page.
24. Talking about sources to the owner. "Stop being so anal about sources." The final report names pages and what is thin. It does not narrate fetches, checks, or the bias QA.

## 10. What to say when you stop

One short message. First line: how many pages carry `method: outline-2026-09-24` on the branch, and which batches. Then the pages you marked thin, each with the one thing that was missing. Then any page you skipped and why, in one line each. Nothing else: no next steps, no summary of the rules, no account of the checks.
