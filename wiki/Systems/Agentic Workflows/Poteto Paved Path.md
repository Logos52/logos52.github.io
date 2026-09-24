---
title: "Poteto Paved Path"
type: concept
status: developing
description: ""
---

## The paved path

High-quality work has to continue when you are not at the computer. While you are away, a helper keeps doing the job. That helper is a program that writes the code for the app, the text the app is built from. It continues one saved way of doing the job. Poteto calls that saved way the paved path.

## how do i trust my agents more?

An agent is that helper. The check on its work answers whether the feature does what you asked. A feature is the part of the app you asked for. The check does not answer whether the change is fast or whether the code is tidy.

Saved instructions teach the helper to work the way the engineers work. pstack is the named example of those instructions.

The app is rebuilt so a small edit in one file leaves the rest intact.

You start by watching one to five chats and correcting them yourself. If you are not there, nothing useful happens. Helpers on the order of a hundred produce broken work if they start before the check, the saved instructions, and the rebuilt app are in place. More helpers help once the saved project and the check are in place. The saved project is the stored work the next helper sees.

## High-quality verification

With a map of the app and a command the helper can run, the helper can check its own work.

The map says what is in the app and how a person reaches each part. The map is kept with the saved instructions, and something keeps the map current. The map existed because a bug report was often a small screenshot and three question marks. A screenshot is a picture of the screen. The helper could open the app and still not know what the report meant.

A command is a line the helper runs. The command runs the real app and saves proof. Proof is a record of what the app did. The examples are `$ drive settings` and `$ capture proof`. The command is kept with the saved instructions, so the helper does not write a new script every session. A script is a short program written for one job.

## whenever you correct your agent

When a way you do not want appears again, add an automatic check before you have finished removing it. The check stops new copies. The helper then removes the copies already saved.

Put the correction at the earliest place on this list that can hold it.

1. The saved project. The saved project is the strongest place, because the next helper repeats what it can see there. Build the project so the mistake cannot be written.
2. An automatic check when the work is built: a linter, the compiler, or the build system. A linter flags a known mistake in the code. A compiler stops when the code is invalid. The build system puts the app together. A repeated mistake becomes a check that fails the build, so nobody has to remember a note.
3. Rules and Bugbot. A rule is an instruction saved for the helper. The helper can forget a rule. The person running the helper can ignore a rule, and can ignore Bugbot.
4. Skills. A skill is a saved procedure for one kind of task, and it has the same limit as a rule.
5. A style guide. A person enforces the style guide in review by reading the change. Someone who is not reading every line will miss the note they meant to leave.

Start from a note you already keep writing, and move it up that list. Rules and skills are still worth having. They are not enough by themselves.

Dune is the example of putting the correction in the saved project. It is the internal framework of the Grok Bot desktop app, and it is not open source. A framework is the shared structure of the app. People outside the group that makes the app cannot read Dune.

The helper repeats the easiest way already in the project, so that way has to be the one you want repeated.

Dune uses five names. Each name has one folder and one job. A folder holds one part of the app.

A feature is one folder of the product's screens.

An entrypoint is one screen a person can open.

A transcript card is the body for one kind of entry. The body is the content of that entry. The feature owns the card.

A client remembers what the screen is showing. Only one part may write what the client remembers.

A host is the behavior that stays on. It runs under a stated agreement, and that agreement is set ahead of time.

A folder sets which imports are allowed. An import is one part of the app using another part. An import that is not allowed fails.

A note in the code is text a person writes there for someone to read. Shipping a change means sending it out as finished. Dune does not allow notes in the code, because the helper treated a note in the code as a reason to ship a short change.

## What you do with a correction

When you correct the helper, put the correction at the earliest place on that list that can hold it. The next helper repeats whatever you leave saved in the project.

## On this account

This desk does not run Dune. Helpers on this desk do not write the wiki. You merge application code yourself. You keep that change.
