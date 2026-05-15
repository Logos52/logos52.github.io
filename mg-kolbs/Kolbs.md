# Kolbs

## Public View (Website)

This is a static example of how Kolbs entries can look.

### Example Entry: SIR 1

**Marginal Gains:** SIR  
**Experiments:** Improving retrieval consistency

#### Experience
**What experience do you want to reflect on?**  
First full SIR session using the new tracking system.

**What would a marginal gain look like?**  
Completing all 3 retrieval cycles without getting distracted.

#### Reflection
**Q1. List and describe the sequence of events, in chronological order**  
1. Set timer for 25 minutes  
2. Did first retrieval pass on the material  
3. Took a short break  
4. Did second and third passes

**Q2. How did you feel about the experience?**  
Felt focused during the first two cycles, started drifting in the third.

**Q3. Which aspects felt especially difficult? Which felt like they went well?**  
Difficult: Maintaining focus in the third cycle.  
Went well: The structure of doing multiple passes.

**Q4. How did you respond to challenges and difficulties during this process?**  
I noticed my mind wandering and brought attention back using the 5-4-3-2-1 technique.

**Q5. What were the triggers to you feeling the way you did?**  
Fatigue + phone notifications in the background.

**Q6. Why do you think you acted the way you did during this experience?**  
I was trying to push through tiredness instead of taking a proper break.

#### Abstraction
**What habits, beliefs, and tendencies can you identify from your reflection that explains why you acted the way you did?**  
I tend to push through fatigue instead of respecting my energy limits.

**Do you act or respond in similar ways in other parts of your life?**  
Yes, especially with late-night work sessions.

#### Experimentation
**List some potential solutions and actions to experiment on.**  
- Take a proper 10–15 min break between cycles  
- Turn on Do Not Disturb during SIR sessions  
- Track energy level before starting

### And you’re done!

---

## Live View (Obsidian)

```dataview
TABLE 
  marginal-gains AS "Marginal Gains",
  experiments AS Experiments,
  date AS Date
FROM "MG & Kolbs/Kolbs"
SORT date DESC
```

**How to use in Obsidian:**
- Create new notes inside the `MG & Kolbs/Kolbs` folder using the template above.
- Add the properties `marginal-gains`, `experiments`, and `date` in the frontmatter.
- The query will automatically pull and display your Kolbs entries.

---

**Back to MG & Kolbs Hub** → [[MG & Kolbs]]