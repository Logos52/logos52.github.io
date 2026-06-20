/**
 * spineZoom.ts — pure spine-graph layout + auto-fit math.
 * Copied verbatim from the original Quartz `quartz/util/spineZoom.ts` (the constellation math:
 * the flat horizontal band positions + the zoom-to-best-fit logic). No d3/canvas deps — pure.
 */

export const SPINE_HUB_RADIUS = 9;
export const SPINE_Y_BAND = [-0.15, 0.11, -0.06, 0.15, -0.12, 0.06] as const;
export const SPINE_AUTO_FIT_MARGIN = 14;
export const SPINE_MAX_FIT_SCALE = 1.7;
export const SPINE_HUB_BAND_COUNT = 6;

export type Bounds = { minX: number; maxX: number; minY: number; maxY: number };

export type LabelMeasure = {
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
  anchorX: number;
  anchorY: number;
};

export type HubPlacement = {
  simX: number;
  simY: number;
  label: LabelMeasure;
};

export function domainTargetX(domainIndex: number, count: number, width: number): number {
  const t = count <= 1 ? 0.5 : 0.08 + (domainIndex / (count - 1)) * 0.84;
  return t * width - width / 2;
}

export function unionBounds(a: Bounds, b: Bounds): Bounds {
  return {
    minX: Math.min(a.minX, b.minX),
    maxX: Math.max(a.maxX, b.maxX),
    minY: Math.min(a.minY, b.minY),
    maxY: Math.max(a.maxY, b.maxY),
  };
}

/** Pinned hub nodes only — stable regardless of satellite/node count. */
export function spineHubBandBounds(width: number, height: number, hubCount = SPINE_HUB_BAND_COUNT): Bounds {
  const r = SPINE_HUB_RADIUS;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < hubCount; i++) {
    const px = domainTargetX(i, hubCount, width) + width / 2;
    const py = SPINE_Y_BAND[i % SPINE_Y_BAND.length] * height + height / 2;
    minX = Math.min(minX, px - r);
    maxX = Math.max(maxX, px + r);
    minY = Math.min(minY, py - r);
    maxY = Math.max(maxY, py + r);
  }
  return { minX, maxX, minY, maxY };
}

export function labelScreenBounds(px: number, py: number, label: LabelMeasure, strokePad = 4): Bounds {
  const lw = label.width * label.scaleX;
  const lh = label.height * label.scaleY;
  return {
    minX: px - lw * label.anchorX - strokePad,
    maxX: px + lw * (1 - label.anchorX) + strokePad,
    minY: py - lh * label.anchorY - strokePad,
    maxY: py + lh * (1 - label.anchorY) + strokePad,
  };
}

/** Union hub band with each hub's measured label rect at its settled position. */
export function computeSpineAutoFitBounds(width: number, height: number, hubs: HubPlacement[] = []): Bounds {
  let bounds = spineHubBandBounds(width, height);
  for (const hub of hubs) {
    bounds = unionBounds(bounds, labelScreenBounds(hub.simX + width / 2, hub.simY + height / 2, hub.label));
  }
  return bounds;
}

export function computeSpineFitScale(bounds: Bounds, width: number, height: number, marginExtra = 0): number {
  const margin = SPINE_AUTO_FIT_MARGIN + marginExtra;
  const graphWidth = bounds.maxX - bounds.minX;
  const graphHeight = bounds.maxY - bounds.minY;
  if (graphWidth <= 0 || graphHeight <= 0) return 1;
  return Math.min((width - margin * 2) / graphWidth, (height - margin * 2) / graphHeight, SPINE_MAX_FIT_SCALE);
}
