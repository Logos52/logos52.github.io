# Workflow Design

**Current Level:** 3/10  
**Final Level:** 7/10  
**Competency:** CI (Consciously Incompetent)

### Final Level Metrics

- At least three agent workflows documented and running reliably end-to-end
- Each workflow has a defined trigger, a clear sequence of steps, and a specified output
- Can identify the failure points in an existing workflow and redesign around them
- Repeated manual actions have been audited and the automatable ones are automated

### What This Skill Is

Workflow Design is the ability to structure multi-step agent processes so they run reliably — not just once, but repeatedly, without significant manual intervention at each step. A workflow is more than a prompt: it has a trigger, a sequence, handoffs, and a defined output shape.

At CI, the gap is conceptual and structural. Individual agent calls work, but they are not yet linked into reliable sequences. There is no consistent method for designing a workflow before building it, or for diagnosing why a workflow broke.

### How to Develop This Skill

- Before building, write the workflow out in plain steps: trigger → step 1 → step 2 → output
- Start with single-agent workflows before multi-agent ones
- After each workflow run, note where a human had to intervene — that is the design gap
- Convert one repeated manual action into a documented, testable process each month
- Use Kolbs to reflect on each workflow attempt and extract the next design improvement

### Notes

- 

**Related Goal**  
[[Agentic Engineering]]

**Related Kolbs Entries**  
(none yet)

**Back to Skills** → [[Skills]]
