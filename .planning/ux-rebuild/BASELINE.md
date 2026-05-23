# UX Rebuild — Baseline Report (v1, pre-rebuild)

> **Phase 1 deliverable.** Captured state of the landing page before the rebuild, used as the comparison reference for the final tester agent in Phase 7.
>
> Date: 2026-05-23 · Source: `src/components/sections/*.tsx` + live inspection on `localhost:3000/it` · Lens: `~/.claude/skills/impeccable/reference/{brand,audit,critique}.md`

---

## 0. TL;DR — Anti-Patterns Verdict

**Does this look AI-generated? Yes. Unambiguously.**

The current landing trips the **second-order reflex trap** documented in impeccable's `brand.md`: it picked the "fintech that's not navy-and-gold → navy-and-gold" answer. Multiple compounding tells:

1. **Inter** as the only font family (reflex-reject list, `brand.md`).
2. **Navy `#0F2349` + amber `#F59E0B`** palette (anti-reference #1 in PRODUCT.md).
3. **4 identical agent cards** (auto-grid 1×4 / 2×2, same shape, same icon-name-stats-blurb scaffolding).
4. **Centered headlines + supporting paragraph** repeated across 6 of 9 sections.
5. **Hero metrics-of-time** pattern ("30 min → 90 sec") repeated as section grammar.
6. **`UPPERCASE TRACKING-WIDE` micro-labels** above repeated copy elements.
7. **Zero imagery** — no photo, no diagram, no SVG art, no canvas. The brand brief implies imagery (field sales, construction, warehouse) and there is none. Per `brand.md`: *"Zero imagery is a bug, not a design choice."*
8. **Card-grid solution** to every "list" problem (Agents, Delivery steps as bordered numbered tiles).
9. **No personality**: tone is correct (Pedro voice), but the visual surface has zero point of view. Could be any AI SaaS landing 2024–2026.

**Verdict:** v1 ships a credible structure but a *generic* design. The structure is reusable; the surface must be rebuilt with a committed POV.

---

## 1. Audit Health Score (code-level checks)

| # | Dimension | Score (0–4) | Key Finding |
|---|-----------|-------------|-------------|
| 1 | Accessibility | **3** | Semantic HTML solid (table for Pricing, aria-labelledby on sections, form labels paired). Risk: `.reveal` and Framer-Motion `useInView` leave content at `opacity:0` if observer fails (Safari quirks, headless, fast scroll, no-JS). |
| 2 | Performance | **3** | Google Fonts external import (FOIT risk, 4–6 weight subset). No `next/font` self-host. Static sections fine; AgentCards has minor `'use client'` overhead that could be RSC. |
| 3 | Theming | **3** | Tokens defined in `globals.css` BUT components hard-code: `bg-[#0F2349]` (Differentiator.tsx:19), raw `bg-[#22C55E]` (AgentCard.tsx:40), Tailwind palette colors mixed with custom tokens. No dark mode (intentional per spec). |
| 4 | Responsive | **3** | Breakpoints applied, touch targets ≥44px on CTA (`py-3.5` = 56px), buttons full-width on mobile. Hero `min-h-[480px]` + `py-24` creates a 720+px viewport gap on desktop; subheadline `max-w-2xl` cramped on mobile. Pricing `Status` column hidden under md — useful, but Badge info lost. |
| 5 | **Anti-Patterns** | **0** | AI slop gallery. See §0. Multiple high-saturation tells: reflex palette, reflex font, identical cards, centered stacks, repeated tracking-wide labels, zero imagery, hero-metrics pattern. |
| **Total** | | **12/20** | **Acceptable (significant work needed)** |

---

## 2. Critique — Nielsen's 10 Heuristics (design review)

| # | Heuristic | Score (0–4) | Key Issue |
|---|-----------|-------------|-----------|
| 1 | Visibility of system status | 2 | Form submit has loading state, but no visual continuity between section reveals; the page is "all or nothing" per section. No scroll indicator, no progress sense. |
| 2 | Match system / real world | 3 | Copy is excellent (Pedro voice, no jargon). "Voice Lead", "Lead Scout" are clear nouns. Numbers like €59/mese match Italian retail conventions. |
| 3 | User control & freedom | 2 | Calendar link is `href="#"` (dead). No way to dismiss reveals if observer stalls. LanguageSwitcher works but no persistence cue. |
| 4 | Consistency & standards | 2 | Same `bg-slate-50` / `bg-slate-100` / `bg-navy-900` ribbon stripe (slate, slate, navy, slate, navy, slate, slate, navy) — feels chunked, not designed. Pricing's amber-50 callout is the only color break, and it appears once. |
| 5 | Error prevention | 3 | Form `required` attributes set, `noValidate` disables native bubbles in favor of `aria-live` status. No inline validation per field. |
| 6 | Recognition rather than recall | 2 | No nav menu (single CTA only) — user can't tell what sections exist until scrolling all 19,358px of body height. No sticky anchor links. |
| 7 | Flexibility & efficiency | 1 | No keyboard shortcuts, no "skip to content" link, no tabular agent picker. Users must scroll every time. |
| 8 | Aesthetic & minimalist design | 1 | Aesthetic is timid: safe blues, safe ambers, safe spacing, safe everything. Per `brand.md`: *"Safe = invisible. Restraint without intent now reads as mediocre."* Body height 19,358px on desktop is excessive padding, not generosity. |
| 9 | Error recovery | 3 | Form error shows `role="alert"` with red-300 text. Retry possible. No specific guidance per field. |
| 10 | Help & documentation | 2 | No FAQ, no "how it works" deeper than 4-step Delivery section. No tooltips or progressive disclosure on agent cards. |
| **Total** | | **21/40** | **Acceptable, with major aesthetic gap (8/4 = critical)** |

**Honest note:** Heuristic 8 (Aesthetic) scores 1/4 — the biggest single drag on the experience. Fixing it is the highest-leverage move.

---

## 3. Section-by-Section Findings

### 3.1 Hero (`src/components/sections/Hero.tsx`)

**Verdict:** Generic SaaS hero. The headline is GOOD (Pedro voice, outcome-led, concrete). Everything around it is template.

| Issue | Severity | Evidence |
|---|---|---|
| Centered-stack hero with text-only content | P1 | `Hero.tsx:14-35`. Per `brand.md`: *"A centered-stack hero with icon-title-subtitle cards reads as template."* |
| No imagery — solid navy rectangle where a hero photo of a sales rep belongs | P1 | The brief implies imagery (construction, field sales). Per `brand.md`: *"Zero imagery is a bug, not a design choice."* |
| Excessive vertical padding (`py-24 md:py-32` + `min-h-[560px]`) = ~816px on desktop with only ~400px of content | P2 | Wastes the first fold. The fold-end barely shows the CTA. |
| Subheadline color `text-navy-300` (#93C5FD) is a **light-blue** on dark navy — reads as pastel pop quiz, not credible field-sales tone | P1 | Contrast OK (5.43:1) but the *register* is wrong. Reads like a YC startup. |
| CTA color `bg-amber-500` text `text-slate-900` = the cliché "yellow button on dark hero" | P1 | Anti-reference. Combine with the navy bg and it's the Stripe/Linear/Vercel reflex. |
| No motion beyond a 200ms CTA fade-in. Subheadline appears instantly. No staged reveal. | P2 | `brand.md` permits *"one well-orchestrated page-load with staggered reveals"* — none exists. |
| Headline left-aligned to a centered container creates a weak asymmetry | P3 | `max-w-3xl` inside a `Container` doesn't visually anchor; reads as accidental rather than intentional. |

**Recommended commands:** `/impeccable shape hero` → `/impeccable craft` → `/impeccable colorize` (uses new palette) → `/impeccable animate` (entry sequence).

### 3.2 Problem (`src/components/sections/Problem.tsx`)

**Verdict:** Wall of text. 43 lines of TSX for two paragraphs and a heading.

| Issue | Severity | Evidence |
|---|---|---|
| Two `<p>` blocks, no visual emphasis, no pull-quote, no diagram | P1 | `Problem.tsx:30-37`. The "before/after" idea begs a visual. |
| Section background `slate-50` is identical to two other sections (Agents, Pricing) | P2 | Background ribbon monotony (see §2 H4). |
| Headline `text-2xl md:text-3xl` is smaller than Pricing's `text-3xl md:text-4xl` — inconsistent H2 scale | P2 | Section grammar is broken. |
| Constrained to `max-w-2xl` left-aligned — desktop has acres of empty right column | P3 | Asymmetry could be intentional if accompanied by a visual element on the right. It isn't. |

**Recommended commands:** `/impeccable layout problem` → `/impeccable bolder problem`.

### 3.3 Solution (`src/components/sections/Solution.tsx`)

**Verdict:** Same template as Problem with three Lucide icons stuck on the end as decoration.

| Issue | Severity | Evidence |
|---|---|---|
| 3 lucide icons (`MessageCircle`, `FileSpreadsheet`, `Calendar`) used as visual filler | P1 | `Solution.tsx:42-49`. Per `brand.md`: *"Large rounded-corner icons above every heading. Screams template."* These aren't rounded, but they're functionally the same gesture. |
| Icons colored `text-amber-500` reinforce the reflex palette | P2 | Pull from the same well as Hero CTA. |
| Background `bg-slate-100` (one shade darker than Problem) is the only differentiator from the previous section | P3 | Section-to-section visual contrast lives entirely in 4% lightness shifts. |
| Same `max-w-2xl` left-aligned text + tiny icons row = forgettable | P1 | "Solution" section has lowest visual weight on the page. It should be the strongest. |

**Recommended commands:** `/impeccable shape solution` → `/impeccable delight`.

### 3.4 AgentCards (`src/components/sections/AgentCards.tsx`)

**Verdict:** The most visible AI-template tell on the page.

| Issue | Severity | Evidence |
|---|---|---|
| **4 identical white cards** (`AgentCard.tsx`), grid `1 col mobile / 2 cols desktop`, each with name+tagline+badge+before/after+description | **P0** | Per `brand.md`: *"Identical card grids... AI scaffolding."* Per `audit.md`: AI slop tell. |
| Each card uses the **hero-metric template** (big number "90 sec" + small label "Dopo") flagged in `brand.md` absolute bans | **P0** | `AgentCard.tsx:60-76`. |
| Badge "LIVE" / "COMING SOON" is **uppercase tracking-wide repeated as section grammar** (every card has one) | P1 | `AgentCard.tsx:40-48`. Per `brand.md`: *"Repeating a kicker as section grammar is AI scaffolding."* |
| Hover effect: `translate-y(-1)` + shadow upgrade — generic | P3 | Functional but identical to every Tailwind landing of 2023–2026. |
| Framer-motion `useInView({once:true, amount:0.15})` — content stays `opacity:0` until intersection fires. Screenshot test confirmed empty viewport when scrolled programmatically | **P1** | `AgentCards.tsx:130, 156-159`. No JS-disabled fallback. |
| The 4 stories *should* feel different (live vs coming-soon, voice vs scout vs brief vs radar) — instead they look interchangeable | **P0** | Differentiation is in copy only, not in surface. |
| "→" character used as flow arrow `text-slate-300` is a typographic shrug | P3 | A real arrow or a typographic device would carry voice. |

**Recommended commands:** `/impeccable shape agents` (rethink as 4 differentiated panels, not a card grid) → `/impeccable craft`.

### 3.5 Differentiator (`src/components/sections/Differentiator.tsx`)

**Verdict:** Hard-coded navy band with a centered headline + paragraph. Same fate as Hero, more compressed.

| Issue | Severity | Evidence |
|---|---|---|
| `bg-[#0F2349]` hard-coded instead of token | P2 | `Differentiator.tsx:19`. Theming inconsistency. |
| `text-navy-300` (#93C5FD) for body on dark — same pastel-pop-blue as Hero subheadline | P1 | Repeats the wrong tone twice in one page. |
| Centered text-only, no visual evidence of the "shared memory" claim it's making | P1 | The whole pitch is *"all agents work on the same memory"* — there is no diagram, no schematic, no SVG, nothing to *see* the differentiator. |
| TODO comment in file: `{/* TODO v2: minimal agent→memory diagram */}` | P1 | Acknowledged as a gap; the rebuild should close it. |
| `transitionDelay: '300ms'` inline style for body is sloppy — not in token, not in CSS | P3 | Inline animation timings shouldn't be ad-hoc. |

**Recommended commands:** `/impeccable shape differentiator` (the diagram is the section, the words support) → `/impeccable craft`.

### 3.6 Delivery (`src/components/sections/Delivery.tsx`)

**Verdict:** Number-circle stepper. The most familiar pattern on the web, executed without surprise.

| Issue | Severity | Evidence |
|---|---|---|
| 4 numbered circles in a `grid-cols-4` row, navy fill, white digit | P1 | `Delivery.tsx:83-103`. Search any landing-page template gallery and you'll find this exact element 10× per page. |
| `bg-navy-900` for the circle fill = same navy used in Hero, Differentiator, Footer — visual fatigue | P2 | Brand color is reused as decoration. |
| Each step is ONE LINE of body copy (`text-sm`) — the structure promises richness, the content thins it out | P2 | Reads as filler. |
| `text-base font-bold` for step titles is smaller than Pricing table cells (`text-base font-semibold`) — inverted hierarchy | P3 | Steps should feel weighty. |
| `<strong>` for emphasis word "una settimana" — correct semantically, but visually identical to surrounding text | P2 | Emphasis is invisible. |

**Recommended commands:** `/impeccable layout delivery` (timeline, not card row) → `/impeccable bolder`.

### 3.7 Pricing (`src/components/sections/Pricing.tsx`) — **the user-flagged "buchi"**

**Verdict:** Semantic `<table>` on `bg-slate-50` with an amber-50 callout. The user is right: it has gaps.

| Issue | Severity | Evidence |
|---|---|---|
| 2 active agents at €59 and €99, 2 coming-soon at €69 and €49, displayed as **a 4-row table with prices in the same column** | **P0** | `Pricing.tsx:90-113`. The COMING SOON prices appear next to the LIVE ones with the same emphasis (just lighter color). User reading: "Why are you charging for things that don't exist?" |
| COMING SOON prices `text-slate-300` (#CBD5E1) — **2.5:1 contrast on slate-50** — fail WCAG AA for normal text (4.5:1) | **P0** | Contrast violation, but also a structural problem: the prices are *there* but unreadable, which suggests they shouldn't be displayed at all yet. |
| No CTA per row — single "Scopri cosa ti serve" button below the whole table | P2 | User must read the whole table, scroll past the discount callout, then act. Should be per-row "Activate" / "Notify me when live". |
| Discount callout uses `bg-amber-50 border-amber-200 text-amber-700/800` — visual outlier (only amber-tinted block on the page) but doubles as the page's only "different-looking" content | P2 | The callout *should* be the most important moment of the section and instead reads as "warning toast". |
| `Status` column hidden on `md:` breakpoint downward — Badge info disappears below tablet | P1 | `Pricing.tsx:84-86, 109-111`. Mobile users see prices with no LIVE/COMING-SOON distinction. |
| "One-time setup fee: €300" buried in a `text-lg font-semibold` paragraph above the table | P1 | Should be a visible commitment, not a footnote. |
| No comparison logic — user with 2 agents can't see "your bundle: €X" without doing math themselves | P2 | `exampleText` does the math, but it's static, not interactive. |
| `border border-slate-200 rounded-xl overflow-hidden` is the only structural device — the table itself looks like a Bootstrap demo | P3 | No visual hierarchy beyond row stripes. |

**Recommended commands:** `/impeccable shape pricing` (split LIVE vs COMING-SOON into two distinct surfaces) → `/impeccable craft` → `/impeccable bolder`.

### 3.8 ContactForm (`src/components/sections/ContactForm.tsx`)

**Verdict:** Solid skeleton, weak surface.

| Issue | Severity | Evidence |
|---|---|---|
| Calendar link `href="#"` (dead) with TODO comment | **P0** | `ContactForm.tsx:170-172`. Ships a broken affordance. |
| Form 5-field tall stack on navy — fields are 49px tall with `py-3` (touch target OK), but visually it's a long scroll-block | P2 | Pattern works, but no progressive disclosure. |
| `focus:ring-amber-500/15` is barely visible (15% opacity) — meets WCAG focus visible requirement weakly | P2 | The visible amber border is fine; the ring is decoration. |
| Inputs `bg-white` on `bg-navy-900` is correct affordance, but the white-island-on-navy is the most "form-like" form possible | P3 | Could be more designed (e.g., bottom-border-only on navy, à la Linear). |
| No company-size, no budget, no "what's blocking you" — all open `<input type="text">` | P2 | Loses the chance to collect qualifying info. |
| Calendar link is `text-amber-400 underline` — same amber as CTA, weaker hierarchy | P3 | |
| Success message reuses dictionary string, no celebratory motion or visual change to the section | P3 | "Got it" energy is missed. |

**Recommended commands:** `/impeccable clarify contact` → `/impeccable harden` (real calendar URL, validation per field).

### 3.9 Navbar (`src/components/layout/Navbar.tsx`)

**Verdict:** Sticky navy bar, logo wordmark + LanguageSwitcher + CTA. Simple. Boring.

| Issue | Severity | Evidence |
|---|---|---|
| No nav links — user can't jump to a section | P1 | Single CTA "Parliamo del tuo processo". No "Agents / Pricing / How it works". A landing page benefits from at least anchor nav (esp. Pricing, since it's the conversion-relevant section). |
| Logo is wordmark only (`text-white font-bold text-xl tracking-tight`) — no logomark, no monogram, no shape | P2 | A 5-letter wordmark is the most replaceable brand element possible. |
| `h-16` (64px) navbar on `bg-navy-900` (#0F2349) is indistinguishable from the Hero below it (same color, no separator) | P2 | Visually the navbar bleeds into the hero, making the "navbar boundary" arbitrary. Could be intentional but reads as accidental. |
| LanguageSwitcher hidden on mobile (`hidden sm:block`) | P3 | EN visitors on phones can't switch. |

**Recommended commands:** `/impeccable layout navbar` → consider per-section anchor nav.

### 3.10 Footer (`src/components/layout/Footer.tsx`)

Not deeply inspected (18 lines). Reportedly minimal.

| Issue | Severity | Evidence |
|---|---|---|
| Likely just copyright + logo. No social, no privacy link, no link map. | P2 | A landing of this depth deserves at least 3-column footer (Agents / Company / Legal). |

---

## 4. Cross-Cutting / Systemic Issues

These appear across multiple sections and indicate gaps in the design system, not one-off mistakes.

| # | Pattern | Severity | Affected Files |
|---|---|---|---|
| C1 | **Inter as the only font** (reflex-reject, training-data default) | **P0** | `globals.css:1, 30`, every component |
| C2 | **Navy + amber palette** trips the second-order reflex trap | **P0** | `globals.css:18-21`, `tailwind.config.ts` |
| C3 | **Zero imagery** (no photos, no diagrams, no SVG illustrations) — bug per `brand.md` for a field-sales brand | **P0** | All sections |
| C4 | **`.reveal` + `useInView` invisibility risk** if observer doesn't fire (Safari quirks, no-JS, fast scroll) | P1 | `globals.css:44-53`, `AgentCards.tsx`, all sections with `useScrollReveal` |
| C5 | **Background ribbon monotony** — `slate-50 / slate-100 / navy / slate-50 / navy / slate-100 / slate-50 / navy / navy-950`, no other surface variation | P1 | `DESIGN.md` Section Background Map |
| C6 | **Same H2 styling repeated** (`text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2]`) — Pricing inconsistent (`text-slate-800` vs Problem's `text-slate-800`) | P2 | All section headings |
| C7 | **Hard-coded colors** in components instead of tokens (`bg-[#0F2349]` in Differentiator, `bg-[#22C55E]` in AgentCard, `text-amber-700` mixed with token references) | P2 | `Differentiator.tsx:19`, `AgentCard.tsx:40`, `Pricing.tsx:119-130` |
| C8 | **Tailwind `text-amber-*` palette referenced directly** alongside semantic `text-on-dark-secondary` — token system is half-applied | P2 | Many files |
| C9 | **No `next/font` self-hosting** — Google Fonts external CSS import causes FOIT/FOUT on first load | P2 | `globals.css:1` |
| C10 | **Container width `max-w-[1200px]`** identical on every section — no asymmetric layouts, no full-bleed images, no narrow-column moments | P2 | `Container.tsx`, every section |
| C11 | **No per-section identity** — sections are differentiated only by background tint, never by typography, layout grammar, or color treatment | P1 | All sections |

---

## 5. Persona Red Flags

### Persona A: Marco — 47yo titolare azienda edile, Brescia

> Profile from PRODUCT.md: skeptical of tech promises, values simplicity and ROI, has been burned by SaaS contracts.

**Walks the page in 90 seconds. What he sees:**

- **Hero**: "OK, 90 secondi sì, ma chi sono questi e dove sono gli altri come me?" → **No social proof, no logos, no field photo.** Reads like every other Italian "AI per le aziende" landing he's been pitched on LinkedIn.
- **Problem section**: "Sì, lo so, lo vivo ogni giorno. E quindi?" → The section spends two paragraphs restating what Marco already knows; the page should validate fast and move to *evidence*.
- **Agents**: "4 cose. 2 funzionano, 2 no. Perché mi mostrate quelle che non funzionano?" → **COMING SOON cards mixed with LIVE cards dilute trust.** "Hilti non mi vende un trapano dicendo 'arriverà'."
- **Pricing**: "€59 per uno, €99 per l'altro, e altri €69+€49 per cose che non esistono. Setup €300. Quindi mi state chiedendo... boh, dipende?" → **Pricing is unclear at a glance.** The table is honest but unfocused; the discount callout is buried.
- **Contact form**: "5 campi. Capirò se ho perso 10 minuti solo dopo che li riempio." → No trust ladder. No way to see anything else first.

**Red flags:** No proof, no photos of real customers, no logos, no ROI calculation, no exit option except "fill the form".

### Persona B: Giulia — 38yo sales manager B2B distribution, Milano

> Profile inferred: less skeptical than Marco, more time-poor, evaluating tools weekly.

- **Hero**: "Bel headline. Footer dove?" → She wants to know how a tool will fit *before* talking. **No demo, no video, no product visual.**
- **AgentCards**: "Voice Lead 90 secondi: come? Mostratemi una schermata, un workflow, qualcosa di reale." → **No product proof.** All four cards describe behavior; none show the behavior happening.
- **Delivery**: "1 settimana è veloce. Quanto è davvero veloce?" → **No customer quote**, no logo, no case study. Just "we say it takes one week".
- **ContactForm**: "5 campi è OK ma il calendar link è rotto." → Confidence drop.

**Red flags:** No product visual, no live demo, no quote, no logo of any customer.

---

## 6. What's Working (don't break it in the rebuild)

Three things v1 got right and the rebuild should preserve:

1. **Copy / Tone of voice.** Pedro's voice is consistent throughout. Headlines are outcomes. No "leveraging" / "AI-powered" / "synergy". Per `PRODUCT.md`: *"Direct. Credible. No startup jargon."* — achieved.
2. **Semantic HTML structure.** Every section has `aria-labelledby`, the Pricing block uses a real `<table>` with `<thead>/<th scope="col">`, form labels are paired, focus rings are visible. WCAG AA is mostly met on contrast.
3. **i18n architecture.** IT/EN dictionary system, LanguageSwitcher, locale-aware copy. Clean separation. The rebuild should reuse it unchanged.

---

## 7. Priority Issues (top 5, P0 first)

| # | Issue | Severity | Suggested command |
|---|---|---|---|
| 1 | **Whole-page aesthetic reflex** (navy+amber+Inter+identical cards+zero imagery) reads as AI-generated SaaS template | **P0** | `/impeccable colorize` (new committed palette) + `/impeccable typeset` (non-Inter font) — root cause of issues C1, C2, C3 |
| 2 | **AgentCards 4 identical cards** with hero-metric template | **P0** | `/impeccable shape agents` — rethink as differentiated panels |
| 3 | **Pricing displays prices for COMING SOON agents** with sub-AA contrast, no per-row CTA, hidden status on mobile | **P0** | `/impeccable shape pricing` |
| 4 | **Zero imagery** on a brief that implies field-sales / construction visuals | **P0** | `/impeccable craft` with real Unsplash hero photo (verified URLs) + a memory-diagram SVG for Differentiator |
| 5 | **Calendar link `href="#"` is broken** in ContactForm | **P0** | `/impeccable harden contact` — real Calendly URL or remove the affordance |

---

## 8. Recommended Command Sequence (Phase 2+ input)

In priority order, the rebuild Phases 2–6 should execute in this order:

1. **Phase 2 — Rebrand** (`/impeccable typeset` + `/impeccable colorize`): new font (non-Inter, picked via `ui-ux-pro-max` reference library) + new committed palette (saturated single hue 30–60% surface coverage). 3 parallel `prototype` directions, user picks. Update `globals.css` + `MASTER.md`.
2. **Phase 3 — Shape Pricing** (`/impeccable shape pricing`): split LIVE pricing card from COMING SOON waitlist surface. Per-row CTA. Mobile-visible status. Move setup fee to a confidence statement.
3. **Phase 4 — Rebuild components**: AgentCards (4 differentiated panels), Hero (with imagery), Differentiator (with memory diagram), Delivery (timeline not stepper), Navbar (anchor links).
4. **Phase 5 — Animate** (`/impeccable animate` + `/impeccable bolder`): orchestrated hero entry, scroll-driven transforms between sections, AgentCards stagger with depth, CTA breathing. Respect `prefers-reduced-motion`.
5. **Phase 6 — Polish** (`/impeccable polish` + `/impeccable delight`): spacing rhythm, focus states, calendar URL, real form integration. 1–2 delight touches.
6. **Phase 7 — Test** (`code-reviewer` + `e2e-runner` + UX critic re-run): re-score against this baseline. Must improve every dimension. Re-run `/impeccable critique` and compare against the §1 and §2 tables.

---

## 9. Comparison Reference

This BASELINE is the **"before" state** for the final tester agent. After the rebuild, re-run the critique against the same dimensions and expect, at minimum:

| Dimension | Baseline | Target |
|---|---|---|
| Audit Health Score | 12/20 | ≥ 17/20 (Good) |
| Critique Heuristic Total | 21/40 | ≥ 30/40 (Strong) |
| Anti-Patterns Score | 0/4 | ≥ 3/4 (Mostly clean) |
| Aesthetic & minimalist (H8) | 1/4 | ≥ 3/4 |
| Hero AI-reflex tells | 7+ | ≤ 1 |
| Imagery on page | 0 | ≥ 1 hero photo + ≥ 1 diagram |
| Pricing P0 issues | 3 | 0 |
| Calendar link `href="#"` | yes | no (real URL or removed) |

---

**End of BASELINE.md** · Captured by impeccable critique+audit lens. Next document expected at `.planning/ux-rebuild/PALETTE-DIRECTIONS.md` (Phase 2 prototype outputs).
