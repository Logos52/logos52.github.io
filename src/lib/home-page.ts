import { slugifyFilePath, slugToUrl } from './slug';

const L = (t: string, p: string) => ({ t, href: slugToUrl(slugifyFilePath(p)) });

export const topOfMind = [
  {
    q: 'Arcs give a character a moral core first. Later arcs charge the moral core against something the character loves. Do stories people love work that way?',
    links: [
      L('Tsumugu', 'wiki/Tsumugu/Tsumugu'),
      L('The Moral Core', 'wiki/Story Craft/The Moral Core'),
      L('Arc Types', 'wiki/Story Craft/Arc Types'),
    ],
  },
  {
    q: 'Exercise, clothing, and travel pages, written with my personal taste in mind',
    links: [
      L('Movement as Accretion', 'wiki/Fitness/Movement as Accretion'),
      L('The Personal Uniform', 'wiki/Fashion/The Personal Uniform'),
      L('Warm Countries, Cold Countries', 'wiki/Travel/Warm Countries, Cold Countries'),
      L('Reading as Local', 'wiki/Travel/Reading as Local'),
    ],
  },
  {
    q: 'How do you check a personal belief? These pages follow the logic of a political opinion, and its second-order effects.',
    links: [
      L('Worldviews & the Political Order', 'wiki/Worldviews & the Political Order/Worldviews & the Political Order'),
      L('Validity and Truth', 'wiki/Worldviews & the Political Order/Validity and Truth'),
      L('Positions', 'personal/2026-08-17-positions'),
    ],
  },
];

export const startHere = [
  { intent: 'Learn', icon: 'ti-school', title: 'Does a Study Technique Work?', sub: 'A technique such as notes or a mind map works only if it makes you process the material in your mind.', color: 'var(--i-learn)', slug: 'wiki/Dimensions/Dimensions of Learning' },
  { intent: 'Decode', icon: 'ti-language', title: 'How Chinese Characters Are Built', sub: 'Each character is made of smaller parts, and each part has a different function.', color: 'var(--i-decode)', slug: 'wiki/Language/Chinese/How-Chinese-Characters-Work' },
  { intent: 'Explore', icon: 'ti-affiliate', title: 'Map of the Site', sub: 'Every node is an article on the site, and a line between two nodes shows a relationship.', color: 'var(--i-explore)', href: '/map/' },
];

export const dimensionHubs = [
  { title: 'Deep Processing', icon: 'ti-affiliate', color: 'var(--d-learning)', slug: 'wiki/Dimensions/Deep-Processing', tag: 'deep-processing' },
  { title: 'Retrieval', icon: 'ti-circle-arrow-up', color: 'var(--d-mind)', slug: 'wiki/Dimensions/Retrieval', tag: 'retrieval' },
  { title: 'Self-Regulation', icon: 'ti-steering-wheel', color: 'var(--d-focus)', slug: 'wiki/Dimensions/Self-Regulation', tag: 'self-regulation' },
  { title: 'Self-Management', icon: 'ti-settings', color: 'var(--d-gen)', slug: 'wiki/Dimensions/Self-Management', tag: 'self-management' },
  { title: 'Mindset', icon: 'ti-brain', color: 'var(--d-agentic)', slug: 'wiki/Dimensions/Mindset', tag: 'mindset' },
];

export const lifeHubs = [
  { title: 'Health', icon: 'ti-heartbeat', color: 'var(--d-mind)', slug: 'wiki/Dimensions/Self-Management', countPrefix: 'wiki/Dimensions/Self-Management' },
  { title: 'Money', icon: 'ti-wallet', color: 'var(--d-gen)', slug: 'wiki/Money/Money, Condensed', countPrefix: 'wiki/Money' },
  { title: '中文', icon: 'ti-language', color: 'var(--d-language)', slug: 'wiki/Language/Chinese/How-Chinese-Characters-Work', countPrefix: 'wiki/Language/Chinese' },
  { title: 'Minimalism', icon: 'ti-box', color: 'var(--d-focus)', slug: 'wiki/Minimalism/Minimalism-as-Systems-Design', countPrefix: 'wiki/Minimalism' },
  { title: 'Condensed Notes', icon: 'ti-book-2', color: 'var(--d-learning)', slug: 'wiki/Dimensions/Dimensions of Learning', countPrefix: 'wiki/Syntheses' },
];

export const executionHubs = [
  { title: 'Agentic Engineering', icon: 'ti-robot', color: 'var(--d-agentic)', slug: 'wiki/Systems/AI & Agentic Systems/Agentic-Engineering', countPrefix: 'wiki/Systems/AI & Agentic Systems' },
  { title: 'Learning Systems', icon: 'ti-network', color: 'var(--d-learning)', slug: 'wiki/Dimensions/Dimensions of Learning', countPrefix: 'wiki/Syntheses' },
  { title: 'Focus Management', icon: 'ti-target', color: 'var(--d-focus)', slug: 'wiki/Self-Management/Flow-State', countPrefix: 'wiki/Self Management' },
  { title: 'Decision Making', icon: 'ti-checklist', color: 'var(--d-gen)', slug: 'wiki/Decision-Making/Decision-Making', countPrefix: 'wiki/Decision Making' },
  { title: 'Generativity', icon: 'ti-bulb', color: 'var(--d-mind)', slug: 'wiki/Concepts/Higher-Order-Generativity-vs-Higher-Order-Judgment', countPrefix: 'wiki/Concepts' },
  { title: 'Worldviews', icon: 'ti-scale', color: 'var(--d-mind)', slug: 'wiki/Worldviews & the Political Order/Worldviews & the Political Order', countPrefix: 'wiki/Worldviews & the Political Order' },
];

export const hubColumns = [
  { title: 'Five Dimensions', items: dimensionHubs },
  { title: 'Life Systems', items: lifeHubs },
  { title: 'Knowledge & Execution', items: executionHubs },
];

export const projectUpdates = [
  {
    date: '2026-09-16',
    updates: [
      {
        title: 'Argument Validation',
        blurb:
          'Valid means a conclusion follows from facts an argument states. Sound means the conclusion follows and the facts are true. Each test works on any argument.',
        slug: 'wiki/Argument Validation/Argument Validation',
      },
      {
        title: 'East Asian Exams - The Arms Race',
        blurb:
          "One exam at about age 18 ranks students against each other for university. A student's rank on the exam still sets pay decades later. Tutoring by one family forces tutoring by the rest.",
        slug: 'wiki/Worldviews & the Political Order/East Asian Exams - The Arms Race',
      },
    ],
  },
];
