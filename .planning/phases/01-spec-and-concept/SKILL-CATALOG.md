# Flowmeup Skill Catalog

**Purpose:** Executor reference for which skills to invoke, in what order, and under what conditions. Any Claude instance running Phase 2 or 3 can use this file directly — no need to read REQUIREMENTS.md.
**Last updated:** 2026-05-23

---

## Phase 1 — Spec & Concept

### 1. brainstorming

**Trigger:** Before any creative or design work in Phase 1. Hard gate — invoke before `ui-ux-pro-max`. Specifically: before defining visual direction, before writing any copy, before making any layout decisions.
**Command:** `brainstorming`
**Input required:** `spec.md` loaded in context; target audience definition (Italian SMB B2B owners, 10–100 employees); brand voice brief (professional, direct, no-fluff, no generic AI language).
**Output:** Validated design direction with resolved ambiguities; approved concept for palette, typography, and visual register; unblocks SPEC-02.
**Must NOT invoke if:** Design direction already approved (SPEC-02 status = APPROVED). Invoking after approval wastes context and risks reopening closed decisions.
**Replaces:** Nothing — this is the mandatory Phase 1 entry gate.

---

### 2. ui-ux-pro-max

**Trigger:** After brainstorming validates the visual direction and SPEC-02 is in APPROVED state. Invoke exactly once per project to generate the design system.
**Command:** `ui-ux-pro-max --design-system --persist`
**Input required:** Approved brainstorming output; target audience definition (Italian SMB B2B); brand voice (professional, direct, no-fluff); spec.md section 9 (landing page structure with 8 sections).
**Output:** `design-system/MASTER.md` — full design system covering: color palette, typography pairings, spacing scale, component rules, animation guidelines, landing page patterns. Persisted for reuse across all Phase 2 tasks.
**Must NOT invoke if:** `design-system/MASTER.md` already exists in the project. Re-invoking overwrites a locked design system and breaks downstream consistency.
**Replaces:** Manual design system definition; ad hoc color/font choices during build.

---

### 3. copywriting

**Trigger:** After SPEC-01 and SPEC-02 are APPROVED. Invoke separately for IT and EN — two invocations total.
**Command:** `copywriting`
**Input required:** DECISIONS.md (SPEC-01, for agent count and badge system); design-system/MASTER.md (SPEC-02, for voice and register); spec.md section 9 (landing structure — 8 sections with IT/EN headlines); spec.md section 8 (target audience).
**Output:** Full copy brief per language — headline + body direction + CTA for each of the 8 sections (Hero, Problem, Solution, Agents, Differentiator, Delivery, Pricing, CTA). Raw draft; not yet humanized.
**Must NOT invoke if:** Copy brief already exists and has passed `writing-voice` + `humanizer` for that language. Do not re-invoke to "improve" approved copy.
**Replaces:** Nothing — first copy pass. Feeds into writing-voice and humanizer.

---

### 4. writing-voice

**Trigger:** After copywriting produces a draft for a given language. Edit mode only — do not use for generation.
**Command:** `writing-voice` (EDIT mode)
**Input required:** Draft copy brief output from copywriting skill (IT or EN). Do not invoke without a written draft.
**Output:** Edited copy with authentic voice: em dash removed (absolute rule), AI patterns reduced, rhythm improved, sentences shortened where needed.
**Must NOT invoke if:** Copy has already passed `humanizer` and is marked approved. Do not re-edit approved copy unless a specific section is flagged for revision.
**Replaces:** Manual line editing of AI-generated copy.

---

### 5. humanizer

**Trigger:** Final pass on copy after writing-voice edits are complete. Last step before copy approval for each language.
**Command:** `humanizer`
**Input required:** writing-voice edited draft (not the raw copywriting output — humanizer expects voice-edited text).
**Output:** Copy with 9 AI writing patterns removed: em dash, "rule of three" structures, filler vocabulary (leverage, seamless, robust, etc.), generic openers, passive hedging, and similar. Output is copy-ready for Phase 2 build.
**Must NOT invoke if:** Copy is already marked approved. Do not re-humanize after approval; reopens completed work.
**Replaces:** Nothing — final copy gate before approval.

---

## Phase 2 — Build Landing Page

### 6. prototype

**Trigger:** Only if two or more radically different design approaches are in play for the same section and the team cannot choose without seeing them rendered. Optional — invoke only when genuinely stuck on a visual trade-off.
**Command:** `prototype`
**Input required:** design-system/MASTER.md; spec.md section 9 (landing structure); at least 2 described design variants with their proposed layouts or interaction patterns.
**Output:** Throwaway UI on a single route showing both variants side by side. Not production code — for evaluation only.
**Must NOT invoke if:** Design direction is clear from the design system and there is no genuine ambiguity. Do not prototype to delay decisions. Do not use if `impeccable craft` has already produced a first build.
**Replaces:** Guessing which design approach to commit to in production code.

---

### 7. impeccable shape

**Trigger:** Before writing any production component code. Invoke once per major section or once for the full page layout. Defines information architecture and visual hierarchy before implementation.
**Command:** `impeccable shape`
**Input required:** `PRODUCT.md` and `DESIGN.md` must exist in the project root (required by the skill). design-system/MASTER.md; approved copy briefs for the sections being shaped.
**Output:** Defined information architecture: section structure, component hierarchy, spacing decisions, visual weight distribution. Blueprint for impeccable craft to build from.
**Must NOT invoke if:** Section layout has already been built and approved in production code. Re-shaping a built section forces a rebuild.
**Replaces:** Ad hoc layout decisions made during the build phase.

---

### 8. impeccable craft

**Trigger:** After impeccable shape produces a layout blueprint for one or more sections. This is the primary build skill — used for all LAND-01 through LAND-08.
**Command:** `impeccable craft` with relevant sub-commands as needed: `craft`, `colorize`, `layout`, `audit`, `overdrive`, `bolder`, `quieter`
**Input required:** design-system/MASTER.md (DSGN-01); approved copy brief per section (SPEC-04 / SPEC-05); impeccable shape output for the section; TECH-01 scaffold (Next.js 15 + Tailwind v4 project must be initialized).
**Output:** Production-quality frontend code for each landing section: Hero, Problem, Solution, Agents (4 cards with LIVE/COMING SOON badges), Differentiator, Delivery, Pricing table, CTA form. Covers LAND-01–08 and DSGN-01.
**Must NOT invoke if:** Section is already built and in approved state. Use `audit` sub-command to review, not `craft` to rebuild.
**Replaces:** Manual component coding without design system discipline.

---

### 9. frontend-patterns

**Trigger:** When implementing React/Next.js-specific patterns: component composition, Framer Motion animation hooks, performance optimizations (code splitting, lazy loading, memoization), form handling, keyboard accessibility. Invoke alongside or after impeccable craft for technical implementation details.
**Command:** `frontend-patterns`
**Input required:** TECH-01 scaffold (Next.js 15 App Router + Tailwind v4); the specific component or pattern being implemented (e.g., form submission handler, language switcher, animation hook).
**Output:** Idiomatic Next.js/React patterns applied: properly typed components, optimized animation hooks, accessible form with validation, keyboard navigation. Covers TECH-01, DSGN-03, CONV-01.
**Must NOT invoke if:** Pattern is already implemented and tested. Do not invoke for pure design decisions — this skill addresses code architecture, not visual choices.
**Replaces:** Hand-rolling boilerplate React patterns; guessing Framer Motion API usage.

---

### 10. impeccable animate

**Trigger:** After the static build is complete and approved. Adds the animation layer: hero entrance, scroll reveals, hover states on agent cards. Invoke separately from impeccable craft so animation iterations don't require rebuilding components.
**Command:** `impeccable animate`
**Input required:** Built and approved static components (output of impeccable craft); design-system/MASTER.md (animation guidelines section); Framer Motion installed in the project.
**Output:** Animated components: hero entrance animation (sequence defined in design system), scroll-triggered reveals for Problem/Solution/Agents sections, hover states on agent cards with LIVE/COMING SOON badge interaction. Covers DSGN-03.
**Must NOT invoke if:** Static build is not yet approved — do not add animation to unapproved layouts. Animation over broken layout obscures layout problems.
**Replaces:** Animating inside impeccable craft, which mixes build and animation concerns.

---

### 11. impeccable audit

**Trigger:** Before marking Phase 2 complete. Run after all LAND-01–08 are built and DSGN-03 animations are in place. Use as the final quality gate.
**Command:** `impeccable audit`
**Input required:** Fully built landing page (all 8 sections in production code); design-system/MASTER.md for checking design system adherence; accessibility checklist (DSGN-05 criteria: 4.5:1 contrast, alt text, focus states, keyboard nav).
**Output:** UX review report: contrast failures, cognitive load issues, responsive behavior at 375px/768px/1024px/1440px, accessibility gaps, interaction design problems. Each issue rated by severity. Covers DSGN-05.
**Must NOT invoke if:** Build is incomplete. Auditing a partial build produces false positives and wastes context.
**Replaces:** Manual UX review without a structured checklist.

---

### 12. e2e-testing

**Trigger:** After impeccable audit issues are resolved and the page is in final state. Final verification before Phase 2 sign-off.
**Command:** `e2e-testing`
**Input required:** Deployed or locally running landing page; test scenarios for: contact form submission (CONV-01), language switch IT/EN (DSGN-04), calendar link (CONV-02), form success state (CONV-03), responsive behavior at 4 breakpoints (DSGN-02).
**Output:** E2E test suite covering critical flows; pass/fail report for each test scenario. Unblocks Phase 2 completion sign-off.
**Must NOT invoke if:** Page has critical build errors or failed audit issues — fix blocking issues before testing. Testing broken UI generates noise, not signal.
**Replaces:** Manual click-through testing; undocumented smoke tests.

---

## Phase 3 — SEO & GEO

### 13. seo-geo

**Trigger:** After Phase 2 is complete and the landing page is deployed. Invoke once for the full SEO + GEO pass. Do not invoke during Phase 2 — SEO on an incomplete page wastes effort.
**Command:** `seo-geo`
**Input required:** Deployed landing page URL; spec.md section 9 (IT/EN copy for meta tag generation); Next.js metadata API already configured (TECH-02, TECH-03 in progress); target keywords for IT and EN audiences.
**Output:** Schema markup JSON-LD (Organization + Service type, valid at Google Rich Results Test); Open Graph tags for social sharing; GEO optimization: FAQ section in structured format, entity markup, E-E-A-T signals, content structured for AI citation by ChatGPT/Perplexity/Gemini/Claude/Copilot; audit script for ongoing monitoring. Covers SEO-01, GEO-01, TECH-02, TECH-03.
**Must NOT invoke if:** Phase 2 is not complete. Meta tags require final, approved copy and all 8 sections present. Schema markup on incomplete content will be invalid.
**Replaces:** Manual meta tag writing; hand-crafted JSON-LD without validation; ad hoc GEO optimization.

---

## Excluded Skills

The following skills from `~/.claude/skills/` are installed but not relevant to this project:

| Skill | Reason excluded |
|-------|-----------------|
| `liquid-glass-design` | iOS 26 / SwiftUI only — not applicable to web |
| `swiftui-patterns` | iOS only — project is web-based |
| `backend-patterns` | No backend — form uses Resend or Formspree |
| `django-*`, `springboot-*`, `golang-*`, `java-*` | Server-side frameworks — out of scope for static landing |
| `deployment-patterns` | Deploy managed by user (Vercel one-click from GitHub) |
| `database-migrations`, `postgres-patterns`, `clickhouse-io` | No database in this project |
| `linkedin-post-writer`, `articolo`, `banner-linkedin` | Social content — post-launch activity |
| `pedro-linkedin-pptx`, `pptx`, `pdf`, `xlsx`, `docx` | Document generation — out of scope |
