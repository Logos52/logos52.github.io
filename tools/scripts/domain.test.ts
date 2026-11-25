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

test('an explicit six-domain value wins over the folder', () => {
  assert.equal(resolveDomain(agentsPage, 'learning'), 'learning');
  assert.equal(resolveDomain(agentsPage, 'language'), 'language');
});

test('an unknown explicit value falls through to the folder', () => {
  assert.equal(resolveDomain(agentsPage, 'ai'), 'agentic');
  assert.equal(resolveDomain(agentsPage, 'world'), 'agentic');
  assert.equal(resolveDomain(agentsPage, 'not-a-domain'), 'agentic');
  assert.equal(resolveDomain(agentsPage, ''), 'agentic');
  assert.equal(resolveDomain(agentsPage, 3), 'agentic');
});

test('the unslugified folder path resolves after space normalization', () => {
  assert.equal(resolveDomain('wiki/Working with Agents/example'), 'agentic');
});

test('other folder fallbacks stay on the six-domain map', () => {
  assert.equal(resolveDomain(slugifyFilePath('wiki/Systems/example.md')), 'agentic');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Language/example.md')), 'language');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Money/example.md')), 'gen');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Decision Making/example.md')), 'mind');
  assert.equal(resolveDomain('notes/example'), 'gen');
});
