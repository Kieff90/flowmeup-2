---
phase: 01-spec-and-concept
plan: 03
subsystem: copy
tags: [copy, landing, italian, english, animation, brief]
dependency_graph:
  requires: [01-01-SUMMARY.md, design-system/MASTER.md]
  provides: [COPY-BRIEF-IT.md, COPY-BRIEF-EN.md]
  affects: [Phase 2 LAND-01 through LAND-08]
tech_stack:
  added: []
  patterns: [copy-brief, builder-guide, animation-spec-inline]
key_files:
  created: []
  modified:
    - .planning/phases/01-spec-and-concept/COPY-BRIEF-IT.md
    - .planning/phases/01-spec-and-concept/COPY-BRIEF-EN.md
decisions:
  - SPEC-04: Italian copy brief approved for all 8 landing sections
  - SPEC-05: English copy brief approved for all 8 landing sections (adapted, not translated)
  - Copy framing is tool-agnostic — friction narrative works for Excel, gestionale, and CRM users alike
  - Per-section animation specs embedded in builder notes — Phase 2 builders need no external reference
metrics:
  duration_minutes: 45
  completed_date: "2026-05-23T11:44:01Z"
  tasks_completed: 3
  files_modified: 2
---

# Phase 1 Plan 3: Copy Briefs IT and EN — Summary

**One-liner:** Full copy briefs for IT and EN landing pages — all 8 sections with headline, body direction, CTA, builder notes, and per-section animation specs cross-referenced from MASTER.md.

---

## What Was Built

Two complete copy briefs covering all 8 landing sections each. Both are builder guides, not just copy documents — each section includes exact animation values from design-system/MASTER.md so Phase 2 implementors never need to look up animation specs separately.

**Files:**
- `/Users/mac-pedro/Desktop/DEV/flowmeup/.planning/phases/01-spec-and-concept/COPY-BRIEF-IT.md`
- `/Users/mac-pedro/Desktop/DEV/flowmeup/.planning/phases/01-spec-and-concept/COPY-BRIEF-EN.md`

**Sections covered (both briefs):**
1. Hero — headline + subheadline + CTA
2. Problem — friction narrative, tool-agnostic
3. Solution — how agents work in plain language
4. Agent cards — 4 cards (Voice Lead LIVE, Lead Scout LIVE, Pre-Call Brief COMING SOON, Follow-Up Radar COMING SOON)
5. Differentiator — shared memory concept
6. Delivery — done-for-you, one week
7. Pricing — transparent table + discounts
8. CTA/Contact — 5-field form + calendar link

---

## Commits

| Task | Description | Hash |
|------|-------------|------|
| Task 1 | Write Italian copy brief (SPEC-04) | def5462 |
| Task 2 | Write English copy brief (SPEC-05) | ef29df4 |
| Task 3 (revision) | Fix CRM language + add per-section animation specs | 2a195d5 |

---

## Deviations from Plan

### Auto-fixed Issues

None — revision pass executed per user feedback at human-verify checkpoint.

### Revision Pass (Task 3 — post-checkpoint)

**1. CRM language — tool-agnostic framing**

- **Found during:** Human review checkpoint (Task 3)
- **Issue:** Section 2 body copy named "CRM" specifically, excluding Excel-only and gestionale users
- **Fix (IT):** "Il CRM e' sul PC in ufficio" → "Qualunque cosa usi per tenere i dati — foglio, gestionale, agenda — e' sul computer in ufficio"
- **Fix (EN Hero subheadline):** "no one opens a CRM from the car" → "no one opens their records from the car"
- **Fix (EN Section 2 headline):** "updating spreadsheets and CRMs" → "updating spreadsheets and records"
- **Fix (EN Section 2 body):** "The CRM is on the laptop back at the office" → "Whatever system they use to keep records — it's back at the desk"
- **Files modified:** COPY-BRIEF-IT.md, COPY-BRIEF-EN.md
- **Commit:** 2a195d5

**2. Per-section animation specs added to builder notes**

- **Found during:** Human review checkpoint (Task 3)
- **Issue:** Builder notes lacked animation specs — Phase 2 builders would need to cross-reference MASTER.md manually for every section
- **Fix:** Added `**Animazione (MASTER.md §6):**` / `**Animation (MASTER.md §6):**` block to each section's builder notes in both briefs, with exact values from MASTER.md sections 5 and 6
- **Sections updated:** All 8 in both briefs (16 total entries)
- **Specs added:**
  - Section 1 (Hero): CTA button fade-in 200ms delay
  - Section 2 (Problem): Scroll reveal heading, paragraphs as one block
  - Section 3 (Solution): Scroll reveal heading + icon stagger 80ms
  - Section 4 (Agents): Heading reveal + 4-card stagger 80ms + hover translateY(-4px)/shadow/border-color + LIVE badge dot pulse 2s
  - Section 5 (Differentiator): Heading reveal + diagram fade-in 300ms delay
  - Section 6 (Delivery): Heading reveal + step stagger 80ms
  - Section 7 (Pricing): Heading reveal + table row stagger 80ms
  - Section 8 (CTA/Form): Input focus amber border/shadow + submit hover amber-600/translateY(-1px)
  - All sections: prefers-reduced-motion override noted
- **Files modified:** COPY-BRIEF-IT.md, COPY-BRIEF-EN.md
- **Commit:** 2a195d5

---

## Decisions Made

- **SPEC-04 approved:** Italian copy brief covers all 8 sections, passes forbidden-terms check, uses tool-agnostic problem framing
- **SPEC-05 approved:** English copy brief adapted for EU English-speaking market — not a literal translation, slightly more formal register
- **Tool-agnostic framing:** Copy describes friction (gap between event and record) without naming any specific tool — resonates with Excel users, gestionale users, and CRM users equally
- **Animation specs in briefs:** Decision to embed MASTER.md animation values directly in copy brief builder notes — Phase 2 executor has a single file per section with no external lookups needed

---

## Phase 1 Status After This Plan

All three plans in Phase 1 are complete:

| Plan | Name | Status |
|------|------|--------|
| 01-01 | Lock decisions + skill catalog | Complete |
| 01-02 | Design system (MASTER.md) | Complete |
| 01-03 | Copy briefs IT + EN | Complete |

Requirements fulfilled: SPEC-04, SPEC-05

Phase 1 success criteria all met — Phase 2 (Build Landing Page) can begin.

---

## Self-Check: PASSED

- COPY-BRIEF-IT.md exists: confirmed
- COPY-BRIEF-EN.md exists: confirmed
- Both contain 8 section headers: confirmed (8 each)
- CRM references in copy direction replaced: confirmed (only appears in forbidden-words check line)
- Animation notes in all 8 sections: confirmed (8 entries IT, 8 entries EN)
- Commits exist: def5462, ef29df4, 2a195d5 — all confirmed in git log
