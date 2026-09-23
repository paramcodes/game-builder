<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Memory — game-builder

- Package manager is `bun`. Use `bun`, `bunx`, `bun run`, `bun install`. Do not use npm/yarn/pnpm.
- Commit after every iteration: check `git status`, `git diff`, `git log --oneline -5`, update `.gitignore` first, then commit. No push/PR without explicit ask.
- Keep `AGENTS.md` updated whenever a durable convention emerges. Put user-facing changes in `CHANGES.md`.
- Skills-first: before any task, check local skills, then global skills, then search the internet if needed. Load the matching skill before acting.
- Dump learnings in `specs/` as numbered files (`00-filename.md`, `01-filename.md`, …). One concept per file.
