# Accountability & Mentors

## Public View (Website)

This is a static example of how Accountability and Mentorship are tracked.

### Accountability Board

| Person | Role | Frequency | Last Check-in | Notes |
|--------|------|-----------|---------------|-------|
| Person 1 | Accountability Partner | Weekly | 2025-05-10 |  |
| Person 2 | Mentor | Bi-weekly | 2025-05-01 |  |
| Person 3 | Peer | Monthly | 2025-04-15 |  |
| Person 4 | Coach | As needed | 2025-05-12 |  |

### Potential Mentors

| Name | Area of Expertise | Status | Next Action | Notes |
|------|-------------------|--------|-------------|-------|
| Insert Name | Leadership / Systems | Not contacted | Send intro message |  |
| Insert Name | Learning & Productivity | In conversation | Schedule call |  |

## Live View (Obsidian)

```dataview
TABLE 
  role AS Role,
  frequency AS Frequency,
  last-checkin AS "Last Check-in",
  notes AS Notes
FROM "mg-kolbs/Accountability & Mentors" AND !#template
SORT frequency ASC
```

**How to use in Obsidian:**
- Maintain your Accountability Board and Potential Mentors lists in this page or as a small database.
- Use properties for easy tracking and filtering.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]