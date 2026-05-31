---
type: dashboard
---
# Skills Radar

Your five ICS **learning dimensions** — current level vs. target. Update each dimension note's `level` as you improve. Raise them via [[Kolbs]] cycling and the [[30 Day Plan]] challenges.

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

> Solid line = current level, dashed = target. Improve via [[Kolbs]] · [[30 Day Plan]].

## Skills detail

```datacorejsx
const COLUMNS = [
  { id: "Skill", value: s => (<a class="internal-link" href={s.$path} data-href={s.$path}>{(s.$name || "").replace(/\.md$/, "")}</a>) },
  { id: "Competency", value: s => { const c = String(s.value("competency") || ""); return c.startsWith("CI") ? "CI" : c; } },
  { id: "Current", value: s => (String(s.value("current-level") || "") + "/10") },
  { id: "Target", value: s => (String(s.value("final-level") || "") + "/10") },
];
return function SkillsTable() {
  const skills = dc.useQuery('@page and path("mg-kolbs/Skills") and exists(competency)');
  return <div class="cc-card"><dc.Table columns={COLUMNS} rows={skills} /></div>;
}
```
