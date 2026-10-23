/**
 * Behaviour of resolveDomain, including the Working with Agents folder rule.
 * The folder is the fallback for slugs domains.json does not list. The 14
 * published pages in that folder are unlisted, so this fallback is what
 * colors them.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveDomain } from '../../src/lib/domain.ts';
import { slugifyFilePath } from '../../src/lib/slug.ts';

const agentsPage = slugifyFilePath(
  "wiki/Working with Agents/Give an agent a task without micromanaging it.md",
);
const agentsApostrophe = slugifyFilePath(
  "wiki/Working with Agents/Make a codebase agents can't easily mess up.md",
);

test('a Working with Agents slug resolves to agentic', () => {
  assert.equal(agentsPage, 'wiki/Working-with-Agents/Give-an-agent-a-task-without-micromanaging-it');
  assert.equal(resolveDomain(agentsPage), 'agentic');
  assert.equal(resolveDomain(agentsApostrophe), 'agentic');
});

test('an explicit domain wins over the Working with Agents folder', () => {
  assert.equal(resolveDomain(agentsPage, 'language'), 'language');
  assert.equal(resolveDomain(agentsPage, 'gen'), 'gen');
});

test('a non-domain explicit value falls through to the folder', () => {
  assert.equal(resolveDomain(agentsPage, 'not-a-domain'), 'agentic');
  assert.equal(resolveDomain(agentsPage, ''), 'agentic');
  assert.equal(resolveDomain(agentsPage, 3), 'agentic');
});

test('the unslugified folder path does not match the slug prefix', () => {
  assert.equal(resolveDomain('wiki/Working with Agents/example'), 'gen');
});

test('other folder fallbacks stay in place', () => {
  assert.equal(resolveDomain(slugifyFilePath('wiki/Systems/example.md')), 'agentic');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Language/example.md')), 'language');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Money/example.md')), 'gen');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Decision Making/example.md')), 'mind');
  assert.equal(resolveDomain('notes/example'), 'gen');
});
