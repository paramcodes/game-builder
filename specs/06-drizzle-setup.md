# 06 — Drizzle ORM setup (Neon, fresh schema)

- Driver: `drizzle-orm/neon-http` via `@neondatabase/serverless` (serverless-safe HTTP, fits Next App Router).
- Layout: `drizzle.config.ts` (root) + `lib/db/schema.ts` (empty scaffold) + `lib/db/index.ts` (`db` client with `{ schema }` for RQB).
- Config: `dialect: postgresql`, `out: ./drizzle`, `schema: ./lib/db/schema.ts`; credentials prefer `DATABASE_URL_UNPOOLED` (direct, for migrations) fallback `DATABASE_URL` (pooled, app runtime).
- Next quirk: drizzle-kit only reads `.env` by default, so config explicitly loads `.env` then `.env.local` (`override: false`) — verified `db:check` injects 9 vars from `.env.local`.
- Scripts: `db:generate`, `db:migrate`, `db:push`, `db:studio`, `db:check` (all `bun run`).
- Verified: `bun run typecheck` clean, `bun run db:check` → "Everything's fine", `bun run db:generate` → "0 tables, nothing to migrate" (empty scaffold expected). Empty `drizzle/meta/_journal.json` removed to keep tree clean.
- Rule followed: never read `.env*` contents; worked via env-var names + CLI injection counts only.
