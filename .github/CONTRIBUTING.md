# Contributing

This repository is an Obsidian vault published as a static Astro site at <https://logos52.github.io>. It is not Jekyll. A push to `main` or a pull request runs `.github/workflows/deploy.yml`. Only `main` deploys.

## Cloud Agents

Cursor Cloud Agents can edit the wiki or site on a branch and open a pull request. A human reviews and merges. Agents do not merge.

`.cursor/environment.json` installs dependencies with `npm ci` (Node 22+, lockfile pinned) and can start the Astro preview on port 4321. After edits, run the same checks as PR CI:

```sh
npm run verify
```

That is frontmatter lint, the source privacy audit, `astro build`, the publish-safety guard, and leak tests. Do not add extra linters for agent convenience.

Wiki operations stay in `AGENTS.md`. Site preview commands stay in `README.md`. Cursor environment docs: [Cloud Agent setup](https://cursor.com/docs/cloud-agent/setup).
