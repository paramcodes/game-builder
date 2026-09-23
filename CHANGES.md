# CHANGES.md

Log of user-facing changes per iteration.

## Unreleased
- Added Clerk auth: `proxy.ts` middleware, `ClerkProvider` with shadcn theme in `app/layout.tsx`, `/sign-in` and `/sign-up` routes, sidebar footer auth controls, `@clerk/nextjs` + `@clerk/ui`; lockfile switched to `bun.lock`.
- Auth: email (`email_code`) + Google OAuth sign-up/sign-in confirmed on (Clerk shared dev OAuth keys); Organizations enabled with forced selection — every user must create or join an org, personal accounts off, verified-domains auto-join off (existing orgs are invite-only).
- Routes regrouped without URL changes: auth pages under `app/(auth)/` with their own centered layout; sidebar shell moved to `app/(dashboard)/layout.tsx`; `app/(dashboard)/page.tsx` dashboard home; root `app/layout.tsx` stays slim (fonts + CSS + providers).
- `proxy.ts` is now protected-first: only `/sign-in` and `/sign-up` are public via `isPublicRoute`; everything else (including `/api`) requires auth through `auth.protect()`.
- Replaced `app/page.tsx` demo content with left-sidebar app shell (`SidebarProvider` + `AppSidebar` + `SidebarInset`).
- Added `components/app-sidebar.tsx` (`collapsible="icon"`): Sandbox logo/title header with `SidebarTrigger`, New game entry, Recents dashed `Empty` placeholder, Credits $1.00 footer with org/UserButton placeholder.
- Collapsed rail: logo-only header, New game icon, `MessageSquare` Games popover (mirrors Recents `GamesEmpty`), `Coins` Credits popover ($1.00 dummy); no avatar placeholder yet.
- Collapsed header shows the sidebar toggle instead of the logo; rail buttons centered via `justify-center` (`size="lg"` uses `p-0` in icon mode).
- Set project memory in `AGENTS.md`: bun as package manager, commit-after-every-iteration, skills-first workflow, `CHANGES.md` + `specs/NN-*.md` conventions.
- Renamed package `x` → `game-builder` in `package.json`.
