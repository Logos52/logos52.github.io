import test, { describe } from "node:test"
import assert from "node:assert/strict"
import {
  SPINE_HUB_BAND_COUNT,
  boundsFitInViewport,
  computeSpineAutoFitBounds,
  computeSpineFitScale,
  labelScreenBounds,
  spineHubBandBounds,
  type HubPlacement,
  type LabelMeasure,
} from "./spineZoom"

const CANVAS_W = 900
const CANVAS_H = 280

const hubLabel = (textWidth: number): LabelMeasure => ({
  width: textWidth,
  height: 12,
  scaleX: 1,
  scaleY: 1,
  anchorX: 0.5,
  anchorY: 1.2,
})

/** Approximate settled sim coords for hub index 0 and 5 (left/right landmarks). */
function edgeHubs(longLabelWidth: number): HubPlacement[] {
  const band = spineHubBandBounds(CANVAS_W, CANVAS_H)
  const leftPx = band.minX + SPINE_HUB_BAND_COUNT
  const rightPx = band.maxX - SPINE_HUB_BAND_COUNT
  const midY = (band.minY + band.maxY) / 2
  return [
    { simX: leftPx - CANVAS_W / 2, simY: midY - CANVAS_H / 2, label: hubLabel(40) },
    {
      simX: rightPx - CANVAS_W / 2,
      simY: midY - CANVAS_H / 2,
      label: hubLabel(longLabelWidth),
    },
  ]
}

describe("spineHubBandBounds", () => {
  test("does not change when label placements are added separately", () => {
    const a = spineHubBandBounds(CANVAS_W, CANVAS_H)
    const b = spineHubBandBounds(CANVAS_W, CANVAS_H)
    assert.deepEqual(a, b)
    const withLabels = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(200))
    assert.ok(withLabels.minX <= a.minX || withLabels.maxX >= a.maxX)
  })

  test("spans the expected horizontal band for six hubs", () => {
    const b = spineHubBandBounds(CANVAS_W, CANVAS_H)
    assert.ok(b.maxX - b.minX > CANVAS_W * 0.7)
    assert.ok(b.maxY - b.minY < CANVAS_H * 0.4)
  })
})

describe("computeSpineAutoFitBounds", () => {
  test("widens bounds when a hub label is longer", () => {
    const short = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(60))
    const long = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(220))
    assert.ok(long.maxX - long.minX > short.maxX - short.minX)
  })

  test("extra hub placements do not affect bounds when list is empty", () => {
    const empty = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, [])
    assert.deepEqual(empty, spineHubBandBounds(CANVAS_W, CANVAS_H))
  })
})

describe("computeSpineFitScale", () => {
  test("longer labels produce a smaller fit scale (zoom out)", () => {
    const shortBounds = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(60))
    const longBounds = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(220))
    const shortScale = computeSpineFitScale(shortBounds, CANVAS_W, CANVAS_H)
    const longScale = computeSpineFitScale(longBounds, CANVAS_W, CANVAS_H)
    assert.ok(longScale < shortScale)
  })

  test("fitted content fits inside the viewport margin", () => {
    const bounds = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(180))
    const scale = computeSpineFitScale(bounds, CANVAS_W, CANVAS_H)
    assert.ok(boundsFitInViewport(bounds, CANVAS_W, CANVAS_H, scale))
  })

  test("fit scale is stable for the same canvas + labels (deterministic)", () => {
    const bounds = computeSpineAutoFitBounds(CANVAS_W, CANVAS_H, edgeHubs(140))
    const a = computeSpineFitScale(bounds, CANVAS_W, CANVAS_H)
    const b = computeSpineFitScale(bounds, CANVAS_W, CANVAS_H)
    assert.equal(a, b)
  })
})

describe("labelScreenBounds", () => {
  test("anchor places text mostly above the node point", () => {
    const b = labelScreenBounds(100, 100, hubLabel(80))
    assert.ok(b.minY < 100)
    assert.ok(b.maxY <= 100 + 4)
  })
})