---
phase: 01-spec-and-concept
plan: "02"
subsystem: ui
tags: [design-system, tailwind, inter, navy, amber, b2b, italian-smb]

# Dependency graph
requires:
  - phase: 01-spec-and-concept plan 01
    provides: SPEC-01 (4-agent decision), SPEC-06 (Next.js 15 + Tailwind v4 stack), skill catalog
provides:
  - Complete design system document (design-system/MASTER.md, 745 lines)
  - Color palette — deep navy primary + warm amber accent + slate neutrals with full hex values
  - Typography scale — Inter humanist sans-serif, 9-size scale with mobile reductions
  - Spacing system — 8px grid, responsive section padding at 4 breakpoints
  - Component rules — hero, agent cards, LIVE badge, COMING SOON badge, buttons, forms, pricing table
  - Animation guidelines — scroll reveals, card hover, LIVE pulse, prefers-reduced-motion support
  - Copy-pasteable Tailwind config tokens for Phase 2 executor
  - CSS custom properties for semantic tokens
  - Landing section map — background/text/component per all 10 sections
affects:
  - Phase 2 DSGN-01 (design system applied — executor pastes Tailwind config tokens directly)
  - Phase 2 all LAND-01 through LAND-08 (visual language defined)
  - 01-03-PLAN.md (visual tone guides copy voice — direct, professional, no tech jargon)

# Tech tracking
tech-stack:
  added: [Inter (Google Fonts), Heroicons (outline), Lucide icons]
  patterns:
    - Semantic token layer over raw palette (--color-background, --color-surface, etc.)
    - Section background alternation (slate-50 / slate-100 / navy) as section dividers — no hr elements
    - Light mode only for v1 — semantic tokens designed for future dark mode without rearchitecting

key-files:
  created: [design-system/MASTER.md]
  modified: []

key-decisions:
  - "SPEC-02: Design palette — deep navy (#0F2349) + warm amber (#F59E0B) — professional credibility for Italian SMB B2B owners, not startup-flashy"
  - "SPEC-02: Single font family (Inter) — humanist sans-serif, readable on small screens, free via Google Fonts, coherent and fast-loading"
  - "SPEC-02: Light mode only for v1 — Italian SMB owners view on mobile in daylight (on-site, in vehicles)"
  - "SPEC-02: 8px grid base unit — all spacing is multiples of 8px, 4px only for micro-gaps"
  - "SPEC-02: No background images in hero — visual weight from typography alone, solid navy only for v1"
  - "SPEC-02: Hero headline NOT animated on load — value proposition visible instantly, no fade/slide"

patterns-established:
  - "Semantic token naming: color-background, color-surface, color-text-primary etc. — maps raw palette to functional meaning"
  - "Agent card: before/after stat in amber (the hero number) vs muted secondary for before — amber = outcome"
  - "LIVE badge: pill shape, green-500, white pulse dot animation (2s ease-in-out) — COMING SOON is intentionally static and muted"
  - "CTA button: amber-500 background with dark text (slate-900) for contrast — hover amber-600 with translateY(-1px)"
  - "Scroll reveal: Intersection Observer at 15% visibility, 400ms ease-out, 80ms card stagger"

requirements-completed: [SPEC-02]

# Metrics
duration: ~30min
completed: 2026-05-23
---

# Phase 1 Plan 02: Design System Summary

**Complete B2B design system for Italian SMB landing page — deep navy + warm amber palette, Inter typography, 9-section component rules, and copy-pasteable Tailwind config tokens**

## Performance

- **Duration:** ~30 min
- **Started:** 2026-05-23T11:00:00Z
- **Completed:** 2026-05-23T11:27:38Z
- **Tasks:** 3 (including human checkpoint)
- **Files modified:** 1

## Accomplishments

- Validated design direction via brainstorming: warm-and-grounded visual tone over cold enterprise SaaS — "Italian craftsmanship meets modern efficiency"
- Generated 745-line design system covering all 9 required sections: principles, color palette, typography, spacing, component rules, animations, iconography, dark/light decision, Tailwind config
- Human review checkpoint passed — user approved design system without change requests

## Task Commits

Each task was committed atomically:

1. **Task 1+2: Brainstorm direction + generate design system** - `b7c7722` (feat)
2. **Task 3: Human review checkpoint** - Approved by user ("approved")

**Plan metadata:** (this commit — docs)

## Files Created/Modified

- `design-system/MASTER.md` — Complete design system: palette with semantic tokens, typography scale, 8px spacing grid, 8 component rule sets, animation spec, Tailwind config code block, CSS custom properties, landing section map

## Decisions Made

- **Palette choice:** Deep navy (#0F2349) primary + warm amber (#F59E0B) accent. Rejected "electric blue" (too startup) and "forest green" (too organic). Navy + amber reads as professional, credible, energetic — right register for the Italian SMB audience.
- **Single font family:** Inter (humanist sans-serif). Rejected geometric sans (too precise/cold) and serif accent (adds weight without payoff at this scale). Inter balances approachability with professionalism and loads fast as a single Google Font weight set.
- **Light mode only for v1:** Italian SMB field sales users view on iPhone in daylight — light mode is safer for outdoor legibility. Semantic token architecture preserves dark mode optionality for v2.
- **No hero image:** Visual weight comes from typography alone — solid navy hero. Avoids stock photo clichés and keeps the page loading fast on mobile.
- **Hero headline: no load animation.** Value proposition must be immediately readable — no fade, no slide. CTA and stat callout animate subtly (200-300ms) after paint.

## Deviations from Plan

None — plan executed exactly as written. Both auto tasks (brainstorm + design system generation) completed and committed in a single commit. Human checkpoint approved without revision requests.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- `design-system/MASTER.md` is the complete handoff artifact for Phase 2. A Phase 2 executor reading only this file can build the entire landing without asking design questions.
- Tailwind config tokens block (Section 9) is ready to paste into `tailwind.config.ts`.
- CSS custom properties block is available for HTML/CSS usage if needed.
- Visual tone defined in Design Principles guides 01-03 copy direction: direct, professional, no tech jargon, trust over aesthetics.
- No open design questions remain for Phase 2.

---
*Phase: 01-spec-and-concept*
*Completed: 2026-05-23*
