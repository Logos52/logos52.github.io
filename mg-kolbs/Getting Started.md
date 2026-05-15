# Getting Started with MG & Kolbs

## Public View (Website)

This is a static example of how to get started with the MG & Kolbs system.

### Step 1: Set Your Direction
- Create your first **Goal** using the detailed Goal Template.
- Break it down into **Anchored Goals** and **Dissected Processes**.

### Step 2: Track Your Progress
- Use **Goal Tracking** to log weekly evaluations and 1% gains.
- Run regular **Evaluations** to rate your level and find small improvements.

### Step 3: Reflect and Improve
- Use **Kolbs** after significant work or experiments to reflect deeply.
- Log **1% Gains** as you make small, consistent improvements.

### Step 4: Build Your Capabilities
- Track the skills and attributes you're developing in the **Skills** database.
- Run **Experiments** to test what works for you.

### Step 5: Plan and Execute
- Use **30 Day Plans** for short-term focus.
- Manage daily action with **Tasks**.

## Live View (Obsidian)

```dataview
TABLE 
  status AS Status,
  current-level AS "Current Level",
  final-level AS "Final Level"
FROM "mg-kolbs/Goals" AND !#template
SORT file.name ASC
```

**Next Steps in Obsidian:**
1. Duplicate the `MG & Kolbs` folder into your vault.
2. Clean up any "(1)" in database names and relations.
3. Start with one Goal and one 30 Day Plan.
4. Begin using **Kolbs** for reflection after your first week.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]