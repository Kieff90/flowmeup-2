---
phase: 02-build-landing-page
plan: "02"
subsystem: ui
tags: [nextjs, tailwind, typescript, i18n, components, sections, hero, copy]

# Dependency graph
requires:
  - phase: 02-build-landing-page
    plan: "01"
    provides: Next.js 15 scaffold, Tailwind tokens, getDict i18n infrastructure
provides:
  - Badge UI primitive (live/coming-soon variants per MASTER.md §5)
  - Button UI primitive (primary/secondary/secondary-on-dark)
  - Container UI primitive (max-w-[1200px] centered)
  - Navbar layout component (sticky navy-900, lang switcher placeholder)
  - Footer layout component (navy-950)
  - Hero section with exact IT/EN copy, amber CTA, H1 NOT animated (SPEC-02)
  - Problem section with 2 paragraph narrative, no bullet lists
  - Solution section with WhatsApp/Excel/Calendar icons
  - src/dictionaries/it.json and en.json with sections 1-3 + navbar/footer copy
affects: [02-03, 02-04, 02-05, 02-06, 02-07]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - dict prop pattern: dict passed from page.tsx → section components via Record<string, unknown>
    - Button renders <a> if href prop provided, <button> otherwise
    - .reveal CSS class (static placeholder) on H2 elements — Framer Motion wiring in Wave 3
    - animate-fade-in on Hero CTA with [animation-delay:200ms] via arbitrary Tailwind value

key-files:
  created:
    - src/components/ui/Badge.tsx (live/coming-soon variants)
    - src/components/ui/Button.tsx (primary/secondary/secondary-on-dark, href-aware)
    - src/components/ui/Container.tsx (max-w-[1200px] responsive padding)
    - src/components/layout/Navbar.tsx (sticky, Flowmeup logo, lang switcher, CTA)
    - src/components/layout/Footer.tsx (navy-950, copyright from dict)
    - src/components/sections/Hero.tsx (Section 1: navy bg, H1 no animation, amber CTA fade-in)
    - src/components/sections/Problem.tsx (Section 2: slate-50, 2 paragraphs, no lists)
    - src/components/sections/Solution.tsx (Section 3: slate-100, icons inline)
    - src/dictionaries/it.json (all IT copy sections 1-3 + navbar/footer)
    - src/dictionaries/en.json (all EN copy sections 1-3 + navbar/footer)
  modified:
    - src/app/[lang]/page.tsx (wired Navbar + sections + Footer with dict prop)

key-decisions:
  - "H1 headline NOT animated per SPEC-02 locked decision — value proposition must be immediately visible"
  - "Button uses href-aware rendering: renders <a> if href provided, <button> otherwise — single component handles both"
  - "CTA fade-in uses CSS animation-delay via Tailwind arbitrary [animation-delay:200ms] — no Framer Motion until Wave 3"
  - ".reveal class applied statically as placeholder — Intersection Observer wiring deferred to Wave 3 animate plan"
  - "Solution icons (MessageCircle, FileSpreadsheet, Calendar from lucide-react) included — minimal load cost, already installed"

# Metrics
duration: ~20min
completed: 2026-05-23
---

# Phase 2 Plan 02: Shared UI Primitives + Sections 1–3 Summary

**Badge/Button/Container primitives + IT/EN dictionaries for sections 1-3 + Navbar/Footer shells + Hero/Problem/Solution sections — build passes, /it and /en statically rendered**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-05-23T12:58:34Z
- **Completed:** 2026-05-23T13:18:00Z
- **Tasks:** 2
- **Files created:** 10, modified: 1

## Accomplishments

- Badge component: LIVE (green-500 bg, white pulse dot `animate-live-pulse`) and COMING SOON (slate-300 bg, no animation) variants per MASTER.md §5 spec exactly
- Button component: primary (amber-500 bg, slate-900 text, amber-600 hover, translateY(-1px)), secondary (transparent, navy-900 border/text, inverts on hover), secondary-on-dark (white border/text) — href prop renders `<a>`, otherwise `<button>`
- Container: `max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8` — matches MASTER.md §4 container spec
- it.json: exact copy from COPY-BRIEF-IT.md — accented characters preserved (perché, già, è, etc.), all 5 keys (navbar, hero, problem, solution, footer)
- en.json: exact copy from COPY-BRIEF-EN.md — same structure, 5 keys
- Navbar: sticky top-0 z-50, navy-900 bg, Flowmeup text logo, IT|EN lang switcher (placeholder for Wave 3), secondary-on-dark CTA linking to #contact
- Footer: navy-950 bg, py-8, copyright from `dict.footer.copyright`
- Hero: navy-900 bg, min-h-[480px] mobile / [560px] desktop, H1 NOT animated (SPEC-02 honored), subheadline navy-300, CTA primary amber with `opacity-0 animate-fade-in [animation-delay:200ms]`
- Problem: slate-50 bg, H2 with `.reveal` class placeholder, 2 `<p>` tags (no `<ul>` or `<li>`), 17px body text minimum
- Solution: slate-100 bg, H2 with `.reveal` class, body paragraph, WhatsApp/Excel/Calendar icons from lucide-react at 20px amber
- page.tsx: full layout wired — Navbar → Hero → Problem → Solution → (AgentCards/Differentiator from 02-03) → Footer

## Task Commits

1. **Task 1: Shared UI primitives + dictionary scaffold** — `384cc8b`
2. **Task 2: Navbar, Footer, Hero, Problem, Solution sections** — `a8f6084`

## Files Created/Modified

- `src/components/ui/Badge.tsx` — LIVE and COMING SOON badge variants
- `src/components/ui/Button.tsx` — primary/secondary/secondary-on-dark, href-aware rendering
- `src/components/ui/Container.tsx` — max-w-[1200px] centered container
- `src/components/layout/Navbar.tsx` — sticky navy nav with lang switcher
- `src/components/layout/Footer.tsx` — navy-950 footer
- `src/components/sections/Hero.tsx` — Section 1, H1 no animation, CTA fade-in
- `src/components/sections/Problem.tsx` — Section 2, 2 paragraphs
- `src/components/sections/Solution.tsx` — Section 3, inline icons
- `src/dictionaries/it.json` — IT copy sections 1-3 + nav/footer
- `src/dictionaries/en.json` — EN copy sections 1-3 + nav/footer
- `src/app/[lang]/page.tsx` — wired all sections with dict prop pattern

## Decisions Made

- **H1 not animated:** SPEC-02 locked decision respected — hero headline rendered with no entrance animation. Only the CTA button gets a subtle fade-in (200ms delay, CSS only, no Framer Motion).
- **Button href-aware rendering:** Single `Button` component accepts optional `href` prop. When provided renders semantic `<a>` tag; otherwise renders `<button>` — avoids two separate components.
- **CSS-only animations in Wave 2:** Tailwind keyframes (`fade-in`, `live-pulse`) handle all animations in this plan. Framer Motion scroll-reveal wiring is deferred to the Wave 3 animate plan.
- **`.reveal` as static class:** H2 elements have `.reveal` applied now so Wave 3 can target them with Intersection Observer without modifying section components.

## Deviations from Plan

### Auto-fixed Issues

None — plan executed exactly as written.

### Parallel Plan Integration Note

02-03 ran in parallel and created `AgentCards.tsx` and `Differentiator.tsx`. The project's auto-formatter updated `page.tsx` to import both. Build still passes cleanly with all 6 components wired. This is the intended Wave 2 collaborative outcome, not a conflict.

## User Setup Required

None.

## Next Phase Readiness

- UI primitives (Badge, Button, Container) are ready for 02-04 through 02-07 to import
- Dictionary pattern (`dict.section.key`) established — all Wave 2 plans should extend `it.json` and `en.json` with their section keys
- `.reveal` class on all H2 elements — Wave 3 animate plan can wire Intersection Observer without touching section components
- Hero, Problem, Solution render correctly on both /it and /en with correct locale copy

---
*Phase: 02-build-landing-page*
*Completed: 2026-05-23*
