---
type: index
cssclasses:
  - mgk-home
---
# mg-kolbs

**Canonical home** for the personal MG & Kolbs system (lowercase path on purpose).  
The June-2026 dual tree `MG & Kolbs/` was a template relocate that never finished retiring this folder — archived 2026-07-09 at `_archive/MG-Kolbs-template-2026-06-01/` (scripts + example Kolbs notes folded back here). Command Center still queries `path("mg-kolbs")`.

```datacorejsx
return function DimensionsRadar() {
  const dims = dc.useQuery('@page and path("mg-kolbs/Dimensions") and exists(level)');
  const MAX = 4, R = 100;
  const ordered = [...dims].sort((a, b) => (Number(a.value("order")) || 0) - (Number(b.value("order")) || 0));
  const n = ordered.length || 5;
  const angle = i => (-90 + i * (360 / n)) * Math.PI / 180;
  const pt = (i, v) => [Math.cos(angle(i)) * R * (v / MAX), Math.sin(angle(i)) * R * (v / MAX)];
  const ring = v => ordered.map((_, i) => pt(i, v).join(",")).join(" ");
  const cur = ordered.map((d, i) => pt(i, Number(d.value("level")) || 0).join(",")).join(" ");
  const tgt = ordered.map((d, i) => pt(i, Number(d.value("target")) || MAX).join(",")).join(" ");
  const name = d => (d.$name || "").replace(/\.md$/, "");

  return (
    <div class="cc-card">
      <svg viewBox="-140 -132 280 264" style={{ width: "100%", maxWidth: "440px", height: "auto", display: "block", margin: "0 auto" }}>
        {[1, 2, 3, 4].map(v => (
          <polygon points={ring(v)} fill="none" stroke="var(--background-modifier-border)" stroke-width="1" />
        ))}
        {ordered.map((_, i) => {
          const [x, y] = pt(i, MAX);
          return <line x1="0" y1="0" x2={x} y2={y} stroke="var(--background-modifier-border)" stroke-width="1" />;
        })}
        <polygon points={tgt} fill="none" stroke="var(--text-accent)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.55" />
        <polygon points={cur} fill="var(--text-accent)" fill-opacity="0.18" stroke="var(--text-accent)" stroke-width="2" />
        {ordered.map((d, i) => {
          const [x, y] = pt(i, Number(d.value("level")) || 0);
          return <circle cx={x} cy={y} r="3.5" fill={String(d.value("color") || "var(--text-accent)")} />;
        })}
        {ordered.map((d, i) => {
          const [x, y] = pt(i, MAX);
          const lx = x * 1.18, ly = y * 1.18;
          const anchor = Math.abs(lx) < 6 ? "middle" : (lx > 0 ? "start" : "end");
          return <text x={lx} y={ly + 3} text-anchor={anchor} fill="var(--text-muted)" style={{ fontSize: "9px" }}>{name(d)}</text>;
        })}
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", justifyContent: "center", marginTop: "10px" }}>
        {ordered.map(d => (
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85em" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: String(d.value("color") || "var(--text-accent)") }}></span>
            <a class="internal-link" href={d.$path} data-href={d.$path}>{name(d)}</a>
            <span style={{ opacity: 0.7 }}>{String(d.value("level") || 0)}/{String(d.value("target") || 4)}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
```

> Solid = current level, dashed = target. Raise via [[Kolbs]] cycling and the [[30 Day Plan]]. Full detail: [[Skills Radar]].

> [!note]- Databases
> ☑️ [[Tasks]]
> 📈 [[Kolbs]]
> 🔗 [[Skills]]
> 📊 [[Goal Tracking]]
> 🎯 [[Goals]]

![[tasks.base]]

![[kolbs.base]]

![[skills.base]]

![[goals.base]]

---

**Anchored goals.** How to dissect a goal and evaluate skill levels lives inside each Goal note (see [[Goals/Learning Systems]] for a worked example). Quick reference:

<details>
<summary>How to Dissect</summary>

What do you need to be good at to achieve this goal?

- Be as specific as possible.
- Focus on processes, not outcomes. Processes lead to outcomes and are controllable. Outcomes are symptoms of the process and we cannot directly control it.

**Topics to address**
- Mental Health
- Focus and concentration
- Time management and procrastination
- Study skills and efficiency
- Retention and time spent studying

</details>

<details>
<summary>How to Evaluate</summary>

1. Recheck the target level (what is needed for 10/10) and stage of learning (CI, CC, UC)
2. Current rating /10
3. Justify this rating as objectively as possible. **Why do you think you have improved?**
4. Find the 1% gains for next week

</details>

---

**Back to main site** → [[Index]]
