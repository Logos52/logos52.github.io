# kb-synthesis Board Setup Guide

## 1. Create the Board

```bash
hermes kanban create kb-synthesis
```

## 2. Enable Kanban Tools

Add the `kanban` toolset to your orchestrator profile in `~/.hermes/config.yaml` or via the CLI.

## 3. Load the Orchestrator

Use the prompt in `prompt.md` as the system prompt or persistent goal for your main synthesis orchestrator.

## 4. Seed Initial Tasks

Create 8–10 tasks manually in the Intake column with existing L4/L3 material.

## 5. Test One Cycle

Run the orchestrator and instruct it to advance one task through to L2 Ready.

## Current Status
Board design, orchestrator prompt, and skill updates are complete. Ready for manual setup.