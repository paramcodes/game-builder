# 00 — App sidebar shell

- `app/page.tsx` is a thin server shell: `SidebarProvider > AppSidebar + SidebarInset`. All sidebar markup lives in `components/app-sidebar.tsx` (`"use client"`, `collapsible="icon"`).
- Header uses `next/image` for `/logo.svg` (`size-6`) + `Sandbox` text (hidden when collapsed via `group-data-[collapsible=icon]:hidden`) + `SidebarTrigger` (`ml-auto`).
- Content: `New game` as `SidebarMenuButton size="lg"` with `SquarePen` icon and `tooltip`; `Recents` label with `Empty` + `EmptyDescription` dashed placeholder per shadcn empty-state rule.
- Footer: `Coins size-4` + `Credits` + `$1.00` dummy, plus an empty placeholder `div` marked `TODO: org switcher + UserButton`.
- Verified with `bun run typecheck` (clean) and `bun run build` (clean). `bun run lint` fails repo-wide on `eslint-config-next` + ESLint 10 (`react/display-name` loader error in `app/layout.tsx`), pre-existing and unrelated to this change.
