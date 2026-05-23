# Decisions — Phase 1: Spec & Concept

Strategic decisions resolved in this phase. Each record is an approved choice that unblocks downstream work.

---

## SPEC-01: Agent Count on Landing Page

**Decision:** Show all 4 agents — Voice Lead and Lead Scout as LIVE, Pre-Call Brief and Follow-Up Radar as COMING SOON

**Rationale:** The two live agents carry the conversion weight: the 90-second vs 30-minute before/after stat is the primary trust hook for skeptical Italian SMB owners. The two proposed agents signal that Flowmeup is building a full suite, not a single tool — this increases perceived value and creates anticipation without requiring immediate credibility. Explicit LIVE / COMING SOON badges manage expectations honestly, preventing the vaporware read that unlabeled "coming soon" copy would produce. When Pre-Call Brief and Follow-Up Radar ship, the badges flip to LIVE with zero structural change to the page.

**Impact on Phase 2:** LAND-04 must render 4 agent cards. Two cards (Voice Lead, Lead Scout) get a LIVE badge — green or accent color. Two cards (Pre-Call Brief, Follow-Up Radar) get a COMING SOON badge — muted/secondary color. Card layout per card: agent name + trigger description (one line) + before/after stat + badge.

**Decided:** 2026-05-23
**Status:** APPROVED

---

## SPEC-06: Tech Stack

**Decision:** Next.js 15 (App Router) + Tailwind CSS v4

**Rationale:** The landing page has 8 sections, 2 languages, animations, a contact form, and SEO requirements — this combination makes plain HTML the wrong tradeoff. Next.js App Router provides a `/[lang]` routing segment that handles IT/EN without manual URL management. The metadata API simplifies Open Graph and schema markup in Phase 3. Framer Motion integrates natively with React, enabling the hero entrance and scroll-reveal animations in DSGN-03. Vercel deploy is one-command from GitHub, which matches the user-managed deploy model. The complexity cost of Next.js over plain HTML is negligible for a single landing page with a developer managing it.

**Key choices within stack:**
- Routing: App Router with `/[lang]` segment for IT/EN
- Styling: Tailwind CSS v4 (utility-first, no custom CSS except design system tokens)
- Animations: Framer Motion
- Form handling: Resend (email delivery) or Formspree (zero-backend option)
- Deploy: Vercel (one-command deploy from GitHub)
- Language: TypeScript

**Impact on Phase 2:** TECH-01 — scaffold Next.js 15 project with App Router, Tailwind v4, Framer Motion installed.

**Decided:** 2026-05-23
**Status:** APPROVED
