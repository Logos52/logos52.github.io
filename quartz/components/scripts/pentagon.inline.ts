/**
 * Drift animation for the five-dimensions figure (DimensionsPentagon).
 *
 * The pentagon moves as ONE rigid group — a single translate transform — so
 * edge lengths and angles are preserved by construction; nothing can deform it.
 * Satellites drift independently around their baked-in base positions; tethers
 * follow both ends. All base coordinates come from build-time data attributes,
 * so this script can never disagree with the rendered geometry.
 *
 * Standalone: no Quartz imports. With reduced motion (or JS off) the figure
 * simply rests at its base position.
 */

const GOLDEN_ANGLE = 2.39996

function animatePentagons() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const figures = document.querySelectorAll<SVGSVGElement>(".atlas-hex-figure svg")
  if (figures.length === 0) return

  type SatState = {
    g: SVGGElement
    tether: SVGLineElement | null
    bx: number
    by: number
    ax: number
    ay: number
    ph: number
  }
  type FigState = { rigid: SVGGElement | null; sats: SatState[]; seed: number }

  const states: FigState[] = []
  for (const svg of figures) {
    const rigid = svg.querySelector<SVGGElement>("g.atlas-pentagon-rigid")
    const sats: SatState[] = []
    svg.querySelectorAll<SVGGElement>("g.atlas-sat").forEach((g, i) => {
      const tether = g.dataset.tether
        ? svg.querySelector<SVGLineElement>(`#${g.dataset.tether}`)
        : null
      sats.push({
        g,
        tether,
        bx: parseFloat(g.dataset.bx ?? "0"),
        by: parseFloat(g.dataset.by ?? "0"),
        ax: parseFloat(tether?.dataset.ax ?? "0"),
        ay: parseFloat(tether?.dataset.ay ?? "0"),
        ph: i * GOLDEN_ANGLE,
      })
    })
    states.push({ rigid, sats, seed: states.length * 977 })
  }

  let raf = 0
  const tick = (now: number) => {
    for (const st of states) {
      const t = now + st.seed
      // Whole-figure drift: small, slow, rigid (translation only).
      const pdx = Math.sin(t * 0.00009) * 3 + Math.sin(t * 0.000041) * 1.5
      const pdy = Math.cos(t * 0.00007) * 3 + Math.sin(t * 0.000029) * 1.5
      st.rigid?.setAttribute("transform", `translate(${pdx.toFixed(2)} ${pdy.toFixed(2)})`)

      for (const s of st.sats) {
        // Satellite drift: independent, slightly livelier than the figure.
        const dx = Math.sin(t * 0.00021 + s.ph) * 5 + Math.sin(t * 0.00013 + s.ph * 0.5) * 2.5
        const dy = Math.cos(t * 0.00017 + s.ph) * 4.5 + Math.sin(t * 0.00011 + s.ph) * 2
        s.g.setAttribute("transform", `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`)
        if (s.tether) {
          s.tether.setAttribute("x1", (s.ax + pdx).toFixed(2))
          s.tether.setAttribute("y1", (s.ay + pdy).toFixed(2))
          s.tether.setAttribute("x2", (s.bx + dx).toFixed(2))
          s.tether.setAttribute("y2", (s.by + dy).toFixed(2))
        }
      }
    }
    raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)
  window.addCleanup(() => cancelAnimationFrame(raf))
}

document.addEventListener("nav", animatePentagons)
