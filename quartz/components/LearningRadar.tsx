import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/learningRadar.inline"

const DIMS = [
  { name: "Deep processing", color: "#8dc63f" },
  { name: "Self-regulation", color: "#f47b20" },
  { name: "Self-management", color: "#2d9cdb" },
  { name: "Mindset", color: "#3fc1b0" },
  { name: "Retrieval", color: "#f2c94c" },
]

const INIT = [2, 2, 2, 2, 2]
const R = 100

const angle = (i: number) => ((-90 + i * 72) * Math.PI) / 180
const point = (i: number, v: number): [number, number] => {
  const r = (R * v) / 4
  return [Math.cos(angle(i)) * r, Math.sin(angle(i)) * r]
}
const ring = (v: number) => DIMS.map((_, i) => point(i, v).join(",")).join(" ")

const LearningRadar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const dataPts = DIMS.map((_, i) => point(i, INIT[i]).join(",")).join(" ")

  return (
    <section class={classNames(displayClass, "learning-radar")}>
      <div class="home-panel-head">
        <h2>Learning dimensions</h2>
        <span class="lr-note">illustrative — drag to explore, not real data</span>
      </div>
      <div class="lr-body">
        <svg class="lr-chart" viewBox="-138 -130 276 260" role="img" aria-label="Adjustable learning-dimensions radar (illustrative)">
          {[1, 2, 3, 4].map((v) => (
            <polygon points={ring(v)} class="lr-ring" />
          ))}
          {DIMS.map((_, i) => {
            const [x, y] = point(i, 4)
            return <line x1="0" y1="0" x2={x} y2={y} class="lr-axis" />
          })}
          <polygon id="lr-poly" points={dataPts} class="lr-poly" />
          {DIMS.map((d, i) => {
            const [x, y] = point(i, INIT[i])
            return <circle id={`lr-dot-${i}`} cx={x} cy={y} r="3.5" fill={d.color} />
          })}
          {DIMS.map((d, i) => {
            const [x, y] = point(i, 4)
            const lx = x * 1.17
            const ly = y * 1.17
            const anchor = Math.abs(lx) < 6 ? "middle" : lx > 0 ? "start" : "end"
            return (
              <text x={lx} y={ly + 3} text-anchor={anchor} class="lr-label">
                {d.name}
              </text>
            )
          })}
        </svg>
        <div class="lr-controls">
          {DIMS.map((d, i) => (
            <label class="lr-row">
              <span class="lr-dot" style={`background:${d.color}`}></span>
              <span class="lr-name">{d.name}</span>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={String(INIT[i])}
                data-dim={String(i)}
                class="lr-slider"
                aria-label={d.name}
              />
              <span class="lr-val" data-val={String(i)}>
                {INIT[i]}
              </span>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}

LearningRadar.afterDOMLoaded = script

export default (() => LearningRadar) satisfies QuartzComponentConstructor
