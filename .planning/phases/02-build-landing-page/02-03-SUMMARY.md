---
phase: 02-build-landing-page
plan: "03"
subsystem: ui
tags: [nextjs, tailwind, typescript, agent-cards, i18n, landing-page]

# Dependency graph
requires:
  - phase: 02-build-landing-page
    plan: "01"
    provides: Next.js 15 scaffold, Tailwind v4 tokens (navy/amber/badge), /[lang] routing
provides:
  - AgentCard reusable primitive with inline LIVE/COMING SOON badges and before/after stats
  - AgentCards section: 2x2 grid of 4 agents with hardcoded IT copy from COPY-BRIEF-IT
  - Differentiator section: navy-900 background, white headline, body copy from COPY-BRIEF-IT
  - Both sections wired into src/app/[lang]/page.tsx
affects: [02-02, 02-04, 02-05, 02-06, 02-07, Wave 3 animation pass]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - AgentCard accepts AgentData type with badge variant driving inline badge styles
    - Badge implemented inline in AgentCard.tsx (not importing Badge.tsx from 02-02) to avoid parallel-plan dependency
    - Hardcoded IT agent data in AgentCards.tsx; Wave 3 will receive locale-aware dict prop
    - reveal class on H2 elements for Wave 3 scroll animation wiring

key-files:
  created:
    - src/components/ui/AgentCard.tsx (AgentCard component + AgentData type)
    - src/components/sections/AgentCards.tsx (Section 4 — 2x2 agent card grid)
    - src/components/sections/Differentiator.tsx (Section 5 — shared memory, navy bg)
  modified:
    - src/app/[lang]/page.tsx (imports + renders AgentCards and Differentiator after Solution)

key-decisions:
  - "Badge inline in AgentCard.tsx: Badge.tsx is 02-02's exclusive file, implementing inline avoids inter-plan dependency at build time"
  - "Hardcoded IT agent data: dictionaries are 02-02's file ownership; Wave 3 wires locale prop"
  - "No decorative icons in cards: per COPY-BRIEF-IT Section 4 note — numbers are the visual content"
  - "page.tsx changes already in HEAD via 02-02 parallel execution — AgentCards/Differentiator import lines were accepted cleanly"

patterns-established:
  - "Parallel plan isolation: each plan owns its file list; shared files (page.tsx) accept additive edits from both plans"
  - "AgentData type drives both badge variant and stat display — single source of truth per card"

requirements-completed: [LAND-04, LAND-05]

# Metrics
duration: 12min
completed: 2026-05-23
---

# Phase 2 Plan 03: Agent Cards + Differentiator Summary

**4-agent card section with LIVE/COMING SOON badges and amber before/after stats, plus navy-900 Differentiator section — both wired into the /[lang] page**

## Performance

- **Duration:** 12 min
- **Started:** 2026-05-23T12:58:42Z
- **Completed:** 2026-05-23T13:10:00Z
- **Tasks:** 2
- **Files modified:** 3 created, 1 modified

## Accomplishments

- AgentCard primitive: white card, inline LIVE badge (green #22C55E + pulsing white dot) and COMING SOON badge (slate-300, static), before/after stats (amber extrabold for after, slate-500 for before), hover translateY(-4px) + navy shadow
- AgentCards section: 2x2 grid (1-col mobile, 2-col md+), 4 agents in order: Voice Lead (LIVE), Lead Scout (LIVE), Pre-Call Brief (COMING SOON), Follow-Up Radar (COMING SOON)
- Differentiator section: navy-900 background, white H2, navy-300 body copy, reveal class for Wave 3
- Both sections wired to page.tsx; build passes with /it and /en SSG-rendered

## Task Commits

Each task was committed atomically:

1. **Task 1: Build AgentCard primitive and AgentCards section** - `5ebf2f3` (feat)
2. **Task 2: Build Differentiator section** - `f2b6313` (feat)

## Files Created/Modified

- `src/components/ui/AgentCard.tsx` — AgentData type + AgentCard component with inline badge logic, before/after stats, hover state
- `src/components/sections/AgentCards.tsx` — Section 4, 2x2 grid, 4 hardcoded IT agents, reveal class on cards
- `src/components/sections/Differentiator.tsx` — Section 5, navy-900 bg, IT headline and body copy, reveal class on H2
- `src/app/[lang]/page.tsx` — AgentCards and Differentiator imports and JSX render after Solution

## Decisions Made

- **Badge inline in AgentCard.tsx:** Badge.tsx is owned by 02-02 running in parallel. Implementing badge styles inline in AgentCard avoids a runtime import failure if 02-02 hasn't yet created Badge.tsx. After 02-02 completes, the badge can optionally be refactored to import from Badge.tsx — no behavior change needed.
- **Hardcoded IT agent data:** it.json/en.json are 02-02's exclusive files per project context. Agent data hardcoded directly in AgentCards.tsx. Wave 3 will add a locale/dict prop to AgentCards to swap language.
- **No decorative icons:** COPY-BRIEF-IT Section 4 is explicit: "Non usare icone decorative nelle card: i numeri sono il contenuto visivo." AgentData.icon field omitted entirely.

## Deviations from Plan

None - plan executed exactly as written (respecting file ownership boundary of parallel plan 02-02 for dictionaries).

## Issues Encountered

- `git add 'src/app/[lang]/page.tsx'` failed with zsh glob expansion on the `[lang]` bracket pattern. Discovered that 02-02 (which ran in parallel and completed first) had already committed the AgentCards/Differentiator import lines into page.tsx via `a8f6084`. The page.tsx modification was effectively already done by the parallel plan.

## User Setup Required

None — no external service configuration required for this plan.

## Next Phase Readiness

- AgentCard and AgentCards are ready for Wave 3 animation: cards have `.reveal` class, hover state is CSS-only (translateY + shadow)
- Differentiator H2 has `.reveal` class for scroll reveal
- Wave 3 plan should add IntersectionObserver logic to trigger `.visible` on `.reveal` elements with 80ms stagger for cards
- Agent data locale-switching: AgentCards.tsx needs a `lang` prop added in Wave 3 to select IT vs EN copy from COPY-BRIEF

---
*Phase: 02-build-landing-page*
*Completed: 2026-05-23*
