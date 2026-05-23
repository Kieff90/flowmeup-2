# Roadmap: Flowmeup Sales Agents Landing Page

## Overview

Three phases take the project from zero to live. Phase 1 locks down every decision that would slow the build — visual direction, copy, tech stack. Phase 2 builds the landing page in full: all sections, design system, responsive behavior, and conversion mechanics. Phase 3 makes it discoverable and live — SEO, meta tags, Open Graph, and deploy on the definitive domain.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Spec & Concept** - Lock all decisions needed to start building: agents shown, design direction, copy brief IT/EN, tech stack
- [ ] **Phase 2: Build Landing Page** - Build complete landing page — all 8 sections, design system, responsive, animations, contact form
- [ ] **Phase 3: SEO & GEO** - Ottimizza per search tradizionale e AI search engines; deploy gestito dall'utente

## Phase Details

### Phase 1: Spec & Concept
**Goal**: Every pre-build decision is documented and approved — no open questions block Phase 2
**Depends on**: Nothing (first phase)
**Requirements**: SPEC-01, SPEC-02, SPEC-03, SPEC-04, SPEC-05, SPEC-06
**Success Criteria** (what must be TRUE):
  1. A written decision exists on whether to show 2 or 4 agents (SPEC-01)
  2. Design system document exists: palette, typography, component rules for B2B Italian SMB audience (SPEC-02)
  3. Skill catalog is written with usage order and trigger conditions (SPEC-03)
  4. Copy brief IT is approved for all 8 landing sections — headline, body, CTA text (SPEC-04)
  5. Copy brief EN is approved for all 8 landing sections (SPEC-05)
  6. Tech stack decision is recorded with rationale (SPEC-06)
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Lock decisions (SPEC-01: 4 agents, SPEC-06: Next.js stack) + finalize skill catalog (SPEC-03)
- [ ] 01-02-PLAN.md — Generate design system with brainstorming + ui-ux-pro-max (SPEC-02)
- [ ] 01-03-PLAN.md — Write and approve copy briefs IT and EN for all 8 sections (SPEC-04, SPEC-05)

### Phase 2: Build Landing Page
**Goal**: A fully built, responsive landing page with all sections, design system applied, animations, and a working contact form
**Depends on**: Phase 1
**Requirements**: LAND-01, LAND-02, LAND-03, LAND-04, LAND-05, LAND-06, LAND-07, LAND-08, DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, CONV-01, CONV-02, CONV-03, TECH-01
**Success Criteria** (what must be TRUE):
  1. All 8 sections render correctly in both IT and EN — a visitor can switch language and read the full page (LAND-01 through LAND-08, DSGN-04)
  2. Page is fully responsive at 375px, 768px, 1024px, and 1440px without layout breakage (DSGN-02)
  3. Hero entrance animation, scroll reveals, and agent card hover states are visible and smooth (DSGN-03)
  4. Contact form submits successfully and shows a confirmation state; calendar link opens correctly (CONV-01, CONV-02, CONV-03)
  5. Accessibility passes baseline: 4.5:1 contrast ratio, all images have alt text, keyboard navigation works (DSGN-05)
**Plans**: TBD

### Phase 3: SEO & GEO
**Goal**: Landing page ottimizzata per motori di ricerca tradizionali e AI search engines (ChatGPT, Perplexity, Gemini, Claude); deploy gestito dall'utente
**Depends on**: Phase 2
**Requirements**: TECH-02, TECH-03, TECH-04, SEO-01, GEO-01
**Success Criteria** (what must be TRUE):
  1. Ogni pagina (IT e EN) ha title, meta description e canonical corretti — verificabili con dev tools o meta checker (TECH-02)
  2. Open Graph tags corretti: link condiviso su LinkedIn/WhatsApp mostra immagine, titolo e descrizione giusti (TECH-03)
  3. LCP < 2.5s su mobile — immagini WebP/srcset, nessun font layout shift (TECH-04)
  4. Schema markup JSON-LD valido — passa Google Rich Results Test (SEO-01)
  5. FAQ section presente, entity markup corretto, E-E-A-T signals visibili — la landing può essere citata da AI search engines come fonte autorevole (GEO-01)
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Spec & Concept | 1/3 | In Progress|  |
| 2. Build Landing Page | 0/TBD | Not started | - |
| 3. SEO & GEO | 0/TBD | Not started | - |
