/**
 * spine.ts — the 6 spine hubs that anchor the constellation.
 * Raw vault path + display label, copied from the original quartz.layout.ts `notesOverviewGraph.flagLabels`.
 */
import { slugifyFilePath } from './slug';

export const SPINE_HUBS_RAW: [string, string][] = [
  ['wiki/Syntheses/Learning, Condensed', 'Learning, Condensed'],
  ['wiki/Systems/AI & Agentic Systems/Claude Fable', 'Claude Fable'],
  ['wiki/Dimensions/Self-Regulation', 'Self Regulation'],
  ['wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment', 'Higher-Order Generativity'],
  ['wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed', 'Agentic Engineering, Condensed'],
  ['wiki/Money/Money, Condensed', 'Money, Condensed'],
];

/** Slugified hub id (matches graph.json node slugs) → display label. */
export const SPINE_HUBS: Map<string, string> = new Map(
  SPINE_HUBS_RAW.map(([path, label]) => [slugifyFilePath(path), label]),
);
