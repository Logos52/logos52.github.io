---
title: "Calendar system — direction"
type: design-note
status: tabled
created: 2026-05-27
updated: 2026-05-27
tags:
  - command-center
  - calendar
  - ics
  - design
---

# Calendar system — direction

## Decision

- **Calendar app: Apple Calendar (iCloud).** Aligned with "clean simple" preference, native macOS, syncs Mac/iPhone/iPad via iCloud, matches the Apple Notes aesthetic affinity. Google's extra features (Meet, smart suggestions, richer write-back API) aren't needed for the use case being built.
- **Approach: ICS-grounded calendar *system*, not just an event store.** The calendar app is the data layer; the system lives in the dashboard + the practices.

## ICS principles to apply

Pulled from `raw/private/ICS/` (Scheduling, Attention Management, OFF-rest timing) and `wiki/Syntheses/ICS System`.

1. **Priorities first, schedule second.** Set daily priorities the night before; top 2 get scheduled first.
2. **Specific 30-minute blocks** with breaks and gaps. Avoid vague open-ended sessions.
3. **Overestimate task duration by 25–50%.** Build in slack so the schedule survives reality.
4. **15-minute buffer between blocks.** Transition cost is real.
5. **One hour unscheduled emergency time per day.**
6. **End-of-day reflection + next-day priority setting** as a scheduled block itself.
7. **OFF-rest timing**: rest ≈ 1/3 of focus time; rest *before* you crash, not after.
8. **Process over outcomes**: the calendar exists to engineer the process that produces outcomes, not to track outcomes directly.
9. **Attention management (advanced)**: minimize decisional delays; pre-decide as much as possible.

## System sketch

Two surfaces, one underlying data:

**Apple Calendar (data layer)**

- Multiple calendars for separation: e.g., `Priorities`, `Blocks`, `Buffer / Rest`, `Reflection`, `Appointments` (external commitments).
- Color-coded per calendar.
- Subscribed via iCal feed URL stored in a gitignored config (`~/Documents/Calendar/feed-url.txt` or a JSON mapping).

**Obsidian dashboard (control surface)**

- **Today** view: top 2 priorities + time blocks for the day + next 3 buffer/rest checkpoints.
- **Upcoming** view: next 7 days at a glance.
- **End-of-day reflection** prompt with a link to the daily reflection note.
- Datacore JSX fetches each iCal feed, parses `.ics`, renders.

## Open questions

- **Calendar layering**: how many separate Apple calendars to create? Recommend starting with three (Priorities, Blocks, Appointments). Buffer/Rest can be inline event color initially, then split out if needed.
- **Privacy**: iCloud iCal feed URLs are "private but shareable." Store gitignored. Only subscribe the ones relevant to dashboard surfacing.
- **Write-back from dashboard**: deferred. Read-only sync for now; events authored in Apple Calendar (Mac/iPhone) flow into the dashboard.
- **Daily ritual placement**: end-of-day reflection — own note in `journal/`, or a daily note? Decide when wiring.

## Status

**Tabled.** Picked up after higher-level dashboard OS work is settled.

## Next move when picked up

1. Confirm calendar layer set (start with three: Priorities, Blocks, Appointments).
2. Create the calendars in Apple Calendar.
3. Enable Public Calendar on the ones the dashboard should read; collect iCal feed URLs.
4. Store URLs in a gitignored config under `~/Documents/Calendar/`.
5. Build Datacore "Today" + "Upcoming" sections on Home; full week/month view as a calendar drill-down note.
