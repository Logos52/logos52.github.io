/**
 * icons.ts — Tabler icon + domain-color map for entry points (domains, condensed, hubs).
 * Single source so Home, Map, Notes, and domain pages stay in visual lockstep.
 */
import type { Domain } from './types';

export const DOMAIN_ICONS: Record<Domain, string> = {
  learning: 'ti-school',
  agentic: 'ti-robot',
  language: 'ti-language',
  focus: 'ti-target',
  mind: 'ti-brain',
  gen: 'ti-bulb',
};

export type EntryIcon = { icon: string; color: string };

/** Condensed doctrine pages — Notes index. */
export const CONDENSED_ENTRIES: {
  title: string;
  slug: string;
  blurb: string;
  icon: string;
  color: string;
}[] = [
  {
    title: 'Learning, Condensed',
    slug: 'wiki/Syntheses/Learning, Condensed',
    blurb: 'the entire learning corpus, covering encoding, retrieval, regulation, and the routine and mindset around study sessions.',
    icon: 'ti-school',
    color: 'var(--d-learning)',
  },
  {
    title: 'Chinese Characters, Condensed',
    slug: 'wiki/Language/Chinese/Chinese Characters, Condensed',
    blurb: 'the character cluster as doctrine, from basic rules to drills.',
    icon: 'ti-language',
    color: 'var(--d-language)',
  },
  {
    title: 'Agentic Engineering, Condensed',
    slug: 'wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed',
    blurb: 'the agentic corpus split into lasting invariants and dated tactics.',
    icon: 'ti-robot',
    color: 'var(--d-agentic)',
  },
  {
    title: 'Money, Condensed',
    slug: 'wiki/Money/Money, Condensed',
    blurb: 'behaviour matters more than intelligence, you control your savings rate, and enough is a written number.',
    icon: 'ti-wallet',
    color: 'var(--d-gen)',
  },
  {
    title: 'Minimalism, Condensed',
    slug: 'wiki/Minimalism/Minimalism, Condensed',
    blurb: "upkeep attention is the limit, plan how an object leaves before buying, and a room's layout sets defaults.",
    icon: 'ti-box',
    color: 'var(--d-focus)',
  },
  {
    title: 'Design, Condensed',
    slug: 'wiki/Design/Design, Condensed',
    blurb: "Norman's design doctrine, in which difficulty is information about the design, screens rely on signifiers alone, needed knowledge goes in the world, and error signals bad design.",
    icon: 'ti-palette',
    color: 'var(--d-gen)',
  },
  {
    title: 'Story Craft, Condensed',
    slug: 'wiki/Story Craft/Story Craft, Condensed',
    blurb: 'writing an ensemble cast under a vocabulary limit, covering wound and lie, arc types, setup and payoff, and an eleven-check character diagnosis.',
    icon: 'ti-book',
    color: 'var(--d-mind)',
  },
];

/** Cluster hubs — Notes index. */
export const HUB_ENTRIES: {
  title: string;
  slug: string;
  blurb: string;
  icon: string;
  color: string;
}[] = [
  {
    title: 'Learning Systems',
    slug: 'wiki/Syntheses/First Principles of Learning',
    blurb: 'encoding, retrieval, self-regulation, and five dimensions of learning.',
    icon: 'ti-network',
    color: 'var(--d-learning)',
  },
  {
    title: 'Agentic Engineering',
    slug: 'wiki/Systems/AI & Agentic Systems/Agentic Engineering',
    blurb: 'building with agents while preserving judgment, taste, and ownership.',
    icon: 'ti-robot',
    color: 'var(--d-agentic)',
  },
  {
    title: 'Language Learning',
    slug: 'wiki/Language/Refold Language Learning System',
    blurb: 'immersion, attention, comprehension, and practical language workflows.',
    icon: 'ti-language',
    color: 'var(--d-language)',
  },
  {
    title: 'Chinese Characters',
    slug: 'wiki/Language/Chinese/How Chinese Characters Work',
    blurb: 'form, sound, meaning, components, and how the script becomes predictable.',
    icon: 'ti-letter-case',
    color: 'var(--d-language)',
  },
  {
    title: 'Attention & Self-Management',
    slug: 'wiki/Self Management/Focus Management - How to Enter & Recover Inside a Work Block',
    blurb: 'focus, flow, procrastination, recovery, and usable work blocks.',
    icon: 'ti-target',
    color: 'var(--d-focus)',
  },
  {
    title: 'Minimalism',
    slug: 'wiki/Minimalism/Minimalism as Systems Design',
    blurb: 'environment design, ownership cost, and reduction that makes action easier.',
    icon: 'ti-box',
    color: 'var(--d-focus)',
  },
  {
    title: 'Red Team / Critical Thinking',
    slug: 'wiki/Red Team/Red Teaming',
    blurb: 'frame testing, assumptions, decision support, and adversarial thinking.',
    icon: 'ti-shield',
    color: 'var(--d-mind)',
  },
  {
    title: 'Front-End Web Design',
    slug: 'wiki/Design/Front-End Web Design',
    blurb: 'design doctrine applied to web UI, with the tsumugu reader and dictionary as examples.',
    icon: 'ti-layout',
    color: 'var(--d-gen)',
  },
  {
    title: 'Story Craft',
    slug: 'wiki/Story Craft/Story Craft',
    blurb: 'graded-reader ensemble arcs; diagnosing characters who lack depth; the Tsumugu application layer in the product repo.',
    icon: 'ti-book',
    color: 'var(--d-mind)',
  },
];
