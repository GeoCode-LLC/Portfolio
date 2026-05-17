# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server
- `npm run build` — production build
- `npm run start` — serve the production build

There is no lint, test, or format script configured. TypeScript is `strict` with `noEmit`; the only typecheck happens via `next build`.

## Stack notes

- **Next.js 16 (App Router) + React 19** — server components by default; interactive components use `"use client"`.
- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is **no `tailwind.config.js`** — theme tokens (`--color-ink`, `--color-paper`, `--color-accent`, `--font-display`) are declared inside the `@theme { ... }` block in `app/globals.css` and consumed as CSS variables. Add new design tokens there, not in a config file.
- **Path alias** `@/*` maps to the repo root (`tsconfig.json`), so imports look like `@/components/Header`, `@/lib/projects`.
- **Remote images** (`next.config.mjs`) are whitelisted only for `images.unsplash.com` and `picsum.photos`. Add any new external image host there. Note: components currently use plain `<img>` tags rather than `next/image`.

## Architecture

### Single-page marketing site + dynamic project pages

- `app/page.tsx` is the entire home page — a vertical stack of section components (`Hero`, `Marquee`, `Services`, `Portfolio`, `About`, `Contact`, `Footer`) wrapped by `Preloader` and `Header`. Section anchors (`#home`, `#services`, etc.) are how the nav links work.
- `app/projects/[slug]/page.tsx` is a statically generated detail page. `generateStaticParams` reads from `lib/projects.ts`, so **adding a project requires only editing `lib/projects.ts`** — the route, nav-back behavior, and "next projects" rail all derive from that array.

### Project data model (`lib/projects.ts`)

All portfolio content is a hand-maintained array of `Project` objects. Each project carries bilingual fields inline:

```ts
en: { title, category, summary, description: string[] }
ka: { title, category, summary, description: string[] }
```

The `kind: "web" | "mobile"` field drives two rendering branches in both `Portfolio.tsx` (the card grid/carousel) and `ProjectDetail.tsx`:

- `mobile` → screenshots rendered inside `PhoneFrame` over a radial-gradient backdrop tinted by the project's `accent` color, with an optional `backdrop` SVG behind the card.
- `web` → full-bleed `cover` image with a darken-on-hover treatment.

Mobile-project assets live in `public/projects/<slug>/`; web projects currently use remote `picsum.photos` placeholders.

### i18n is client-side, in-memory

- `lib/i18n.ts` exports a `dict` keyed by `Lang = "en" | "ka"`. Adding a translatable string means updating the `DictShape` type plus both language objects.
- `components/LangProvider.tsx` is a React Context (`useLang()` hook → `{ lang, setLang, t }`). It is mounted in `app/layout.tsx` and persists the choice in `localStorage["lang"]`. The provider is `"use client"`, so any component reading `useLang()` must also be a client component.
- There is no routing-based locale (no `/ka/...` URLs) and no `next-intl`/server translation — switching is purely a client re-render.

### Animation conventions

- `framer-motion` is used throughout. `components/Reveal.tsx` is the standard scroll-triggered fade/translate wrapper (`useInView` with `once: true`) — prefer it over rolling per-section `motion.div` variants.
- The header (`components/Header.tsx`) uses `useScroll` + `useMotionValueEvent` to animate its own blur/padding past 40px of scroll. When adding sections, keep IDs (`home`, `services`, `portfolio`, `about`, `contact`) stable since `Header` builds nav links from them and uses `usePathname()` to produce `/#id` links when off the home route.
