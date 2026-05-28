---
title: "Apple Calendar over Google for the calendar data layer"
type: decision
status: decided
created: 2026-05-27
updated: 2026-05-27
ruled-out:
  - Google Calendar
  - Local-files-only (~/Library/Calendars/)
tags:
  - decisions
  - calendar
  - ics
---

# Apple Calendar over Google for the calendar data layer

Use Apple Calendar (iCloud) as the calendar data layer; the ICS-grounded *system* lives in the Obsidian dashboard + practices, not in the calendar app's UI. Apple aligns with the "clean simple" preference, is native macOS, syncs Mac/iPhone/iPad via iCloud, and matches the Apple Notes aesthetic. Google was ruled out as more featureful but adding dependencies and weaker aesthetic fit. Reading local Apple Calendar files at `~/Library/Calendars/` was ruled out as fragile parsing that breaks on Apple updates.
