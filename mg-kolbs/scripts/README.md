# Automation scripts

Plain Node scripts — no Obsidian plugins required (works for anyone you share this with). Run from this template's root folder.

## Kolbs cycle (the ☑️ button)
Completes the current Kolbs and creates the next one, linked (previous ↔ next), from `Kolbs/Kolbs Template.md`:

```sh
node scripts/new-kolbs.mjs "Kolbs/SIR 1.md"
```
It prints the new note's path — open it in Obsidian. (Tier 2 idea: have an LLM pre-fill the new cycle's "marginal gains" from the previous reflection.)

## Task complete + break timing (the ✅ button)
Marks a task Complete and computes a break from time taken (`break = 20% of minutes`, min 5; edit `BREAK_RATIO`):

```sh
node scripts/complete-task.mjs "Tasks/Task 1.md" 50
```

## Recurring tasks
The recurring items (weekly eval + goal tracking, Priority 0 check-in, Skills audit) are page-templates under `Tasks/`. Generate one on a schedule with `cron`/`launchd` calling a copy script, or just duplicate the template note. (No Hermes — deterministic by design.)

## Optional: in-app buttons
Since you run Datacore, these scripts can be wired to a `datacorejsx` button (`require('child_process').execFile('node', [scriptPath, notePath])`) so the ☑️/✅ actions are clickable inside Obsidian. Ask and I'll add it.
