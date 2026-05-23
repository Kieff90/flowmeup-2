---
plan: 02-04
phase: 02-build-landing-page
status: complete
completed: "2026-05-23"
requirements: [LAND-06, LAND-07, LAND-08, DSGN-04, CONV-01, CONV-02, CONV-03]
---

# Summary: 02-04 — Delivery, Pricing, ContactForm, LanguageSwitcher

## What Was Built

**Delivery section (Section 6):**
- 4-step horizontal layout (stacked on mobile) with numbered navy circles
- IT/EN bilingual steps hardcoded; reads locale from dict fallback
- "una settimana" / "one week" emphasised with `<strong>` in step 4
- `.reveal` class on H2 and each step for Wave 3 animation

**Pricing section (Section 7):**
- CSS Grid table: 2fr_1fr_1fr desktop / hides Status column on mobile
- LIVE agent prices: `text-navy-900 font-extrabold`; COMING SOON: `text-slate-300` (muted)
- Amber discount callout box (-10%/-15%/-20%) with construction company example
- Secondary CTA button links to `#contact`
- Reads from `dict.pricing` with locale-aware fallbacks

**ContactForm section (Section 8):**
- `id="contact"` anchor — target for all CTA buttons on page
- 5 fields: name, company, role, sector, message (textarea with descriptive placeholder)
- Submit button: "Inviami il tuo processo" (IT) / "Send us your process" (EN)
- Server Action `submitForm.ts` — Formspree via `FORMSPREE_ENDPOINT` env var, console.log fallback in dev
- Inline success state (no redirect) via `useState('idle'|'submitting'|'success'|'error')`
- Calendar link: `href="#"` placeholder with TODO comment
- `role="status" aria-live="polite"` on success region; `role="alert"` on error region
- Navy-900 background for visual closure matching hero

**LanguageSwitcher:**
- `'use client'` component, Next.js `<Link>` to `/it` and `/en`
- Active locale: bold + underline; inactive: navy-300 with hover
- `aria-current="page"` on active locale link
- Replaces Navbar placeholder — wired into Navbar

**EN dictionary extended:**
- Added `agents`, `differentiator`, `delivery`, `pricing`, `contact` keys with exact EN copy from COPY-BRIEF-EN.md

**page.tsx updated:**
- All 8 sections wired: Hero → Problem → Solution → AgentCards → Differentiator → Delivery → Pricing → ContactForm

## Key Deviations

- Plans 02-04 and 02-05 were interrupted by session limits. Work was completed manually by the orchestrator to avoid regression.
- Delivery.tsx reads locale from dict fallback rather than a `lang` prop — simpler approach that achieves the same result.

## Commits

- `00ba84b` — feat(02-04,02-05): delivery, pricing, scroll-reveal hook, section animations (partial)
- `d8d8392` — feat(02-04,02-05): complete wave 3 — ContactForm, LanguageSwitcher, EN dict, AgentCards FM stagger, full page wired

## Self-Check

- [x] All requirements covered: LAND-06, LAND-07, LAND-08, DSGN-04, CONV-01, CONV-02, CONV-03
- [x] Build passes (0 TypeScript errors)
- [x] `/it` and `/en` routes both build successfully
- [x] ContactForm has `id="contact"` — all page CTAs link to it
- [x] Form has exactly 5 fields with correct labels
- [x] Inline success message (no redirect)
- [x] LanguageSwitcher has `aria-current="page"` on active locale
