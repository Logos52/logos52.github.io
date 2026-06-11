import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
// @ts-ignore
import pentagonScript from "./scripts/pentagon.inline"

/**
 * The five dimensions — a regular five-sided figure (vertices computed at
 * exact 72° spacing, emitted as inline SVG so no stylesheet can distort it).
 * The five dimensions are a closed set: the polygon NEVER gains vertices.
 * Current interests hang off the side as satellites — append to
 * PENTAGON_SATELLITES to add one; the figure stays regular forever.
 *
 * Motion (pentagon.inline.ts): the pentagon drifts as ONE rigid group —
 * translation only, so every edge length and angle is preserved by
 * construction. Satellites drift independently on their tethers.
 * With JS off or reduced motion, everything renders at its base position.
 *
 * Counts: `tag` counts notes carrying the tag; `prefix` counts notes under a path.
 */
type PentagonItem = {
  label: string
  color: string
  slug: string
  tag?: string
  prefix?: string
}

type PentagonSatellite = PentagonItem & { angle: number } // degrees; bearing off the figure

const PENTAGON_ITEMS: PentagonItem[] = [
  // vertex order: top, upper-right, lower-right, lower-left, upper-left
  { label: "Deep Processing", color: "#8dc63f", slug: "wiki/Dimensions/Deep-Processing", tag: "deep-processing" },
  { label: "Retrieval", color: "#f2c94c", slug: "wiki/Dimensions/Retrieval", tag: "retrieval" },
  { label: "Self-Regulation", color: "#f47b20", slug: "wiki/Dimensions/Self-Regulation", tag: "self-regulation" },
  { label: "Self-Management", color: "#2d9cdb", slug: "wiki/Dimensions/Self-Management", tag: "self-management" },
  { label: "Mindset", color: "#3fc1b0", slug: "wiki/Dimensions/Mindset", tag: "mindset" },
]

const PENTAGON_SATELLITES: PentagonSatellite[] = [
  { label: "中文", color: "#ffb000", slug: "wiki/Language/Chinese/How-Chinese-Characters-Work", prefix: "wiki/Language/Chinese/", angle: -54 },
  { label: "Money", color: "#2fa36b", slug: "wiki/Money/Investing-and-Budgeting-Mindsets", prefix: "wiki/Money/", angle: 18 },
]

const PX = 170
const PY = 120
const PR = 82
const SAT_DIST = 1.42 // satellite distance as a multiple of PR
const EDGE_MID = Math.cos(Math.PI / 5) // 0.809… — radius of an edge midpoint

interface Options {
  showList: boolean
  showHeading: boolean
}

export default ((opts?: Partial<Options>) => {
  const showList = opts?.showList ?? true
  const showHeading = opts?.showHeading ?? true

  const DimensionsPentagon: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, displayClass, allFiles } = props
    const here = fileData.slug!

    const tagCounts = new Map<string, number>()
    for (const f of allFiles) {
      for (const t of (f.frontmatter?.tags as string[] | undefined) ?? []) {
        tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)
      }
    }
    const count = (it: PentagonItem): number =>
      it.tag
        ? (tagCounts.get(it.tag) ?? 0)
        : it.prefix
          ? allFiles.filter((f) => (f.slug ?? "").startsWith(it.prefix!)).length
          : 0

    // Regular pentagon: exactly 72° per vertex, one radius, one node size.
    const pts = PENTAGON_ITEMS.map((it, i) => {
      const a = ((-90 + i * 72) * Math.PI) / 180
      return { ...it, x: PX + PR * Math.cos(a), y: PY + PR * Math.sin(a), cos: Math.cos(a), sin: Math.sin(a) }
    })
    const outline = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")
    const labelPos = (p: { x: number; y: number; cos: number; sin: number }) =>
      p.cos > 0.35
        ? { anchor: "start", lx: p.x + 11, ly: p.y + 4 }
        : p.cos < -0.35
          ? { anchor: "end", lx: p.x - 11, ly: p.y + 4 }
          : { anchor: "middle", lx: p.x, ly: p.sin < 0 ? p.y - 13 : p.y + 23 }

    const sats = PENTAGON_SATELLITES.map((s) => {
      const a = (s.angle * Math.PI) / 180
      return {
        ...s,
        x: PX + PR * SAT_DIST * Math.cos(a),
        y: PY + PR * SAT_DIST * Math.sin(a),
        ax: PX + PR * EDGE_MID * Math.cos(a),
        ay: PY + PR * EDGE_MID * Math.sin(a),
      }
    })

    return (
      <section class={classNames(displayClass, "atlas-hex", !showList && "atlas-hex--solo")}>
        {showHeading && (
          <h2>
            The five dimensions{" "}
            <a
              class="atlas-hex-hublink"
              href={resolveRelative(here, "wiki/Dimensions/Dimensions-of-Learning" as SimpleSlug)}
            >
              — the model under Learning · open the hub →
            </a>
          </h2>
        )}
        <div class="atlas-hex-row">
          <div class="atlas-hex-card atlas-hex-figure">
            <svg
              viewBox="0 0 340 232"
              role="img"
              aria-label="The five dimensions of learning as a regular five-sided figure; 中文 and Money drift alongside as satellites"
            >
              {sats.map((s, i) => (
                <line
                  id={`atlas-tether-${i}`}
                  class="atlas-hex-tether"
                  data-ax={s.ax.toFixed(1)}
                  data-ay={s.ay.toFixed(1)}
                  x1={s.ax.toFixed(1)}
                  y1={s.ay.toFixed(1)}
                  x2={s.x.toFixed(1)}
                  y2={s.y.toFixed(1)}
                  stroke="var(--lightgray)"
                  stroke-width="1"
                  stroke-dasharray="3 4"
                />
              ))}
              <g class="atlas-pentagon-rigid">
                <polygon points={outline} fill="none" stroke="var(--lightgray)" stroke-width="1" />
                {pts.map((p) => (
                  <line
                    x1={p.x.toFixed(1)}
                    y1={p.y.toFixed(1)}
                    x2={PX}
                    y2={PY}
                    stroke="var(--highlight)"
                    stroke-width="1"
                  />
                ))}
                {pts.map((p) => {
                  const l = labelPos(p)
                  return (
                    <a href={resolveRelative(here, p.slug as SimpleSlug)}>
                      <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="6" fill={p.color} />
                      <text
                        x={l.lx.toFixed(1)}
                        y={l.ly.toFixed(1)}
                        text-anchor={l.anchor}
                        font-size="10"
                        fill="var(--darkgray)"
                        style="font-family: var(--codeFont); letter-spacing: 0.04em"
                      >
                        {p.label}
                      </text>
                    </a>
                  )
                })}
              </g>
              {sats.map((s, i) => (
                <a href={resolveRelative(here, s.slug as SimpleSlug)}>
                  <g
                    class="atlas-sat"
                    data-bx={s.x.toFixed(1)}
                    data-by={s.y.toFixed(1)}
                    data-tether={`atlas-tether-${i}`}
                  >
                    <circle cx={s.x.toFixed(1)} cy={s.y.toFixed(1)} r="5" fill={s.color} />
                    <text
                      x={(s.x + 10).toFixed(1)}
                      y={(s.y + 4).toFixed(1)}
                      text-anchor="start"
                      font-size="10"
                      fill="var(--darkgray)"
                      style="font-family: var(--codeFont); letter-spacing: 0.04em"
                    >
                      {s.label}
                    </text>
                  </g>
                </a>
              ))}
            </svg>
          </div>
          {showList && (
            <div class="atlas-hex-card atlas-hex-list">
              {PENTAGON_ITEMS.map((it) => (
                <a class="atlas-hex-item" href={resolveRelative(here, it.slug as SimpleSlug)}>
                  <span class="atlas-hex-dot" style={`background: ${it.color}`}></span>
                  <span class="atlas-hex-label">{it.label}</span>
                  <span class="atlas-hex-count">{count(it)} notes</span>
                </a>
              ))}
              <div class="atlas-hex-orbit-head">in orbit</div>
              {PENTAGON_SATELLITES.map((it) => (
                <a class="atlas-hex-item" href={resolveRelative(here, it.slug as SimpleSlug)}>
                  <span class="atlas-hex-dot" style={`background: ${it.color}`}></span>
                  <span class="atlas-hex-label">{it.label}</span>
                  <span class="atlas-hex-count">{count(it)} notes</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  DimensionsPentagon.afterDOMLoaded = pentagonScript
  return DimensionsPentagon
}) satisfies QuartzComponentConstructor
