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
    blurb: 'How to take in new material, how to remember it, and how to plan study.',
    icon: 'ti-school',
    color: 'var(--d-learning)',
  },
  {
    title: 'Chinese Characters, Condensed',
    slug: 'wiki/Language/Chinese/Chinese Characters, Condensed',
    blurb: 'How to learn Chinese characters. The parts of a character give clues to its sound and to its meaning.',
    icon: 'ti-language',
    color: 'var(--d-language)',
  },
  {
    title: 'Agentic Engineering, Condensed',
    slug: 'wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed',
    blurb: 'How to build software with AI agents. Rules that stay true are kept apart from tips that go out of date.',
    icon: 'ti-robot',
    color: 'var(--d-agentic)',
  },
  {
    title: 'Money, Condensed',
    slug: 'wiki/Money/Money, Condensed',
    blurb: 'Doing well with money depends more on habits than on intelligence.',
    icon: 'ti-wallet',
    color: 'var(--d-gen)',
  },
  {
    title: 'Minimalism, Condensed',
    slug: 'wiki/Minimalism/Minimalism, Condensed',
    blurb: 'Every object you own uses up some of your attention.',
    icon: 'ti-box',
    color: 'var(--d-focus)',
  },
  {
    title: 'Design, Condensed',
    slug: 'wiki/Design/Design, Condensed',
    blurb: 'If people struggle to use something, the design is bad.',
    icon: 'ti-palette',
    color: 'var(--d-gen)',
  },
  {
    title: 'Story Craft, Condensed',
    slug: 'wiki/Story Craft/Story Craft, Condensed',
    blurb: 'How to write stories for language learners, using only words the reader already knows.',
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
    slug: 'wiki/Syntheses/Are You Learning, or Just Using Techniques',
    blurb: 'How learning works. A study technique is useful only if it makes you process the material in your mind.',
    icon: 'ti-network',
    color: 'var(--d-learning)',
  },
  {
    title: 'Agentic Engineering',
    slug: 'wiki/Systems/AI & Agentic Systems/Agentic Engineering',
    blurb: 'AI agents write much of the code. The developer is still responsible for that code.',
    icon: 'ti-robot',
    color: 'var(--d-agentic)',
  },
  {
    title: 'Language Learning',
    slug: 'wiki/Language/Refold Language Learning System',
    blurb: 'How to learn a language by listening and reading a lot.',
    icon: 'ti-language',
    color: 'var(--d-language)',
  },
  {
    title: 'Chinese Characters',
    slug: 'wiki/Language/Chinese/How Chinese Characters Work',
    blurb: 'How Chinese characters are built. Each character is made of smaller parts, and each part has a different function.',
    icon: 'ti-letter-case',
    color: 'var(--d-language)',
  },
  {
    title: 'Attention & Self-Management',
    slug: 'wiki/Self Management/Flow State',
    blurb: 'Focus, and a person\'s own attention. Flow is being fully absorbed in a task.',
    icon: 'ti-target',
    color: 'var(--d-focus)',
  },
  {
    title: 'Minimalism',
    slug: 'wiki/Minimalism/Minimalism as Systems Design',
    blurb: 'Owning fewer things. A possession costs attention, space, and upkeep.',
    icon: 'ti-box',
    color: 'var(--d-focus)',
  },
  {
    title: 'Red Team / Critical Thinking',
    slug: 'wiki/Red Team/Red Teaming',
    blurb: 'How to attack your own plan before you carry it out.',
    icon: 'ti-shield',
    color: 'var(--d-mind)',
  },
  {
    title: 'Front-End Web Design',
    slug: 'wiki/Design/Front-End Web Design',
    blurb: 'Design rules for web pages. The screen has to show people what they can click.',
    icon: 'ti-layout',
    color: 'var(--d-gen)',
  },
  {
    title: 'Story Craft',
    slug: 'wiki/Story Craft/Story Craft',
    blurb: 'How to build characters who stay believable across a long story.',
    icon: 'ti-book',
    color: 'var(--d-mind)',
  },
  {
    title: 'Worldviews & the Political Order',
    slug: 'wiki/Worldviews & the Political Order/Worldviews & the Political Order',
    blurb: 'Contested public arguments, each checked for what follows from it.',
    icon: 'ti-scale',
    color: 'var(--d-mind)',
  },
];
