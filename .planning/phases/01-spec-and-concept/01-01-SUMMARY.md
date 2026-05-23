---
phase: 01-spec-and-concept
plan: 01
subsystem: planning
tags: [decisions, skill-catalog, spec, next.js, tailwind, agents]

# Dependency graph
requires: []
provides:
  - SPEC-01 approved: show all 4 agents on landing with LIVE / COMING SOON badges
  - SPEC-06 approved: Next.js 15 App Router + Tailwind CSS v4 tech stack
  - SPEC-03 fulfilled: executor-ready skill catalog with 13 skills across 3 phases
affects:
  - 01-02 (design direction — brainstorming must happen before ui-ux-pro-max)
  - 01-03 (copy brief — SPEC-01 agent count determines agent cards section)
  - 02 (Phase 2 scaffold — SPEC-06 tech stack gates TECH-01)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Skill invocation gates: each skill has a Must NOT invoke if condition to prevent re-invocation"
    - "Badge system for agent status: LIVE (accent color) / COMING SOON (muted) on agent cards"

key-files:
  created:
    - .planning/phases/01-spec-and-concept/DECISIONS.md
    - .planning/phases/01-spec-and-concept/SKILL-CATALOG.md
  modified: []

key-decisions:
  - "SPEC-01: Show all 4 agents (LIVE + COMING SOON badges) — live agents convert, proposed agents show vision"
  - "SPEC-06: Next.js 15 App Router + Tailwind CSS v4 — i18n routing, SEO metadata API, Framer Motion, Vercel deploy"

patterns-established:
  - "Decision records: each decision has Decision, Rationale, Impact on downstream phases, Decided date, Status"
  - "Skill catalog: each entry has Trigger, Command, Input required, Output, Must NOT invoke if, Replaces"

requirements-completed: [SPEC-01, SPEC-03, SPEC-06]

# Metrics
duration: 12min
completed: 2026-05-23
---

# Phase 01, Plan 01: Decisions + Skill Catalog Summary

**SPEC-01 (4 agents LIVE/COMING SOON) and SPEC-06 (Next.js 15 + Tailwind v4) locked; 13-skill executor catalog written covering Phase 1 brainstorming-to-humanizer, Phase 2 prototype-to-e2e, Phase 3 seo-geo**

## Performance

- **Duration:** ~12 min
- **Started:** 2026-05-23T00:00:00Z
- **Completed:** 2026-05-23
- **Tasks:** 2 of 2
- **Files modified:** 2

## Accomplishments

- Resolved the two blocking open decisions from STATE.md: 2-vs-4 agents and tech stack choice
- Created DECISIONS.md with structured decision records including downstream impact for LAND-04 and TECH-01
- Created SKILL-CATALOG.md as a standalone executor reference — no external lookup needed to invoke any skill correctly across all 3 phases

## Task Commits

1. **Task 1: Write SPEC-01 and SPEC-06 decisions** — `48c85be` (docs)
2. **Task 2: Finalize SKILL-CATALOG.md** — `da76d92` (docs)

## Files Created/Modified

- `.planning/phases/01-spec-and-concept/DECISIONS.md` — Two approved decision records with rationale, impact, date, and status
- `.planning/phases/01-spec-and-concept/SKILL-CATALOG.md` — 13 skills with Trigger, Command, Input required, Output, Must NOT invoke if

## Decisions Made

- **SPEC-01:** Show all 4 agents on landing. Voice Lead + Lead Scout as LIVE (accent badge), Pre-Call Brief + Follow-Up Radar as COMING SOON (muted badge). Rationale: live agents do conversion work; proposed agents communicate product vision; explicit badges prevent vaporware read for skeptical Italian SMB owners.
- **SPEC-06:** Next.js 15 App Router + Tailwind CSS v4. Chosen over plain HTML/Tailwind because: `/[lang]` segment handles IT/EN routing, metadata API simplifies Phase 3 SEO, Framer Motion integrates natively, Vercel is one-command deploy. TypeScript throughout.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- **01-02 (Design Direction):** SKILL-CATALOG.md documents exact invocation order — brainstorming first (hard gate), then ui-ux-pro-max with `--design-system --persist`. Both require spec.md in context. Ready to execute.
- **01-03 (Copy Brief):** DECISIONS.md SPEC-01 provides agent count and badge system for the Agents section cards. Copy brief can proceed once SPEC-02 is approved.
- **Phase 2 scaffold (TECH-01):** Next.js 15 App Router + Tailwind v4 + Framer Motion — no ambiguity on what to scaffold.
- No blockers for Plan 02.

---
*Phase: 01-spec-and-concept*
*Completed: 2026-05-23*
