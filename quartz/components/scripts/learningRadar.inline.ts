const RADIUS = 100

function axisAngle(i: number): number {
  return ((-90 + i * 72) * Math.PI) / 180
}

function point(i: number, v: number): [number, number] {
  const r = (RADIUS * v) / 4
  return [Math.cos(axisAngle(i)) * r, Math.sin(axisAngle(i)) * r]
}

function updateRadar() {
  const sliders = Array.from(document.querySelectorAll<HTMLInputElement>(".lr-slider"))
  if (sliders.length === 0) return
  const pts: [number, number][] = []
  for (const s of sliders) {
    const i = parseInt(s.dataset.dim ?? "0", 10)
    const v = parseInt(s.value, 10)
    pts[i] = point(i, v)
    const valEl = document.querySelector(`.lr-val[data-val="${i}"]`)
    if (valEl) valEl.textContent = String(v)
    const dot = document.getElementById(`lr-dot-${i}`)
    if (dot) {
      dot.setAttribute("cx", String(pts[i][0]))
      dot.setAttribute("cy", String(pts[i][1]))
    }
  }
  const poly = document.getElementById("lr-poly")
  if (poly) poly.setAttribute("points", pts.map((p) => p.join(",")).join(" "))
}

document.addEventListener("nav", () => {
  const sliders = Array.from(document.querySelectorAll<HTMLInputElement>(".lr-slider"))
  if (sliders.length === 0) return
  for (const s of sliders) {
    s.addEventListener("input", updateRadar)
  }
  updateRadar()
})
