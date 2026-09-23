# 03 — Clerk auth setup

- Setup: `bunx -y clerk@latest init` from project root (no `--framework`/`--pm` flags).
  It detects Next.js App Router, installs `@clerk/nextjs`, scaffolds `proxy.ts`,
  wraps `app/layout.tsx` body contents in `ClerkProvider`, creates
  `app/sign-in/[[...sign-in]]/page.tsx` + `app/sign-up/[[...sign-up]]/page.tsx`,
  and writes dev keys to `.env.local`.
- Accountless dev: no Clerk account needed; `init` provisions an unclaimed dev app
  (here: `ins_3JjZpqYOf58Fe2sy8Mt4BSPM17R`). Claim later via `clerk auth login`,
  then `clerk deploy` before production. Never run `auth login` unasked.
- Verify: `bunx -y clerk@latest doctor`. Typecheck `bun run typecheck`.
  `bun run lint` currently fails on a pre-existing `eslint-config-next` vs ESLint 10
  incompatibility (`react/display-name` rule), unrelated to auth changes.
- Next 16: auth middleware lives in `proxy.ts`, NOT `middleware.ts`.
  `ClerkProvider` must sit inside `<body>`, not wrap `<html>`.
- shadcn present (`components.json`): installed `@clerk/ui` via `bun add`,
  applied `appearance={{ theme: shadcn }}` (`import { shadcn } from "@clerk/ui/themes"`),
  added `@import "@clerk/ui/themes/shadcn.css"` to `app/globals.css`.
- Auth controls: `Show when="signed-out"|"signed-in"` + `SignInButton`/`SignUpButton`
  (mode="modal")/`UserButton` from `@clerk/nextjs` in `AppSidebar` footer,
  replacing the org/UserButton TODO placeholder. `Show` is exported for client
  components too; build passes with it inside the `"use client"` sidebar.
- Never read `.env*` files (ignored via `.gitignore`); `.clerk/` dir is also ignored.
- Lockfile: repo now uses `bun.lock` only; `package-lock.json` removed
  (`bun add` migrated it automatically).
