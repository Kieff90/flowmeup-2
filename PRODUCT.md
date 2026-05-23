# Flowmeup — Product Context

> Required by the `impeccable shape` skill. Single source of truth for product context used during Phase 2 build.

## Register

**`register: brand`** — landing page is the product. Design IS the marketing surface. Brand register permissions apply: ambitious motion, committed color strategy, typographic risk, single-purpose viewports.

## Anti-References (do NOT design like these)

The current v1 fell into them. The rebuild must escape them.

- **Navy `#0F2349` + amber `#F59E0B` SaaS palette** — second-order reflex trap ("fintech that's not navy-and-gold → navy-and-gold"). Forbidden in v2.
- **Inter as default body+heading** — in impeccable's reflex-reject font list. Pick something that fits a 45yo Italian construction company owner, not a YC startup landing.
- **Stripe-cream / Linear-glass minimalism** — too tech-saturated for the SMB owner audience.
- **v0.dev / Lovable / Bolt default output** — the "AI made that" giveaway. Centered hero + icon cards + gradient text + faint shadows + Inter.
- **Editorial-magazine display-serif + italic + drop caps** — the lane one tier deeper. Recoleta, Fraunces, Cormorant on body copy. Wrong register: we're not Condé Nast.
- **Identical card grids** — AgentCards 4 cards same size icon-heading-text. Reads as template.
- **Hero-metric template** — big number + small label + supporting stats + gradient accent. SaaS cliché banned in `brand.md`.
- **All-caps "COMING SOON" tracking-wide labels as section grammar** — repeated kicker = AI scaffolding (`brand.md` brand bans).
- **Zero imagery** — for a field-sales product, hero photo of a real salesperson in a real environment (truck cab, construction site, warehouse) is not optional. Solid `<div>` placeholders are forbidden.

## Aesthetic Lane Target

**Committed color strategy** (per user direction): one saturated dominant color carries 30–60% of the surface. Reference moods to research, not copy:

- "Italian industrial signage" — yellow/black, mechanical, working-class confidence
- "1970s-era enterprise software manual" — cream + ink, technical without being sterile
- "Tactile blue-collar tools brand" (Caterpillar, Bosch Professional, Hilti) — saturated single hue + heavy weight
- "Italian editorial poster" (Massimo Vignelli, Bruno Munari) — bold, opinionated, geometric

The final palette must be **nameable as a reference** ("Hilti orange-on-graphite", "Vignelli yellow-and-black", etc.) — never "tasteful blue with accent".

## Core Value Proposition

A field sales rep logs a lead in 90 seconds from their phone while driving — without opening any tool, without changing any habit. No CRM friction. No lost leads.

**Before Flowmeup:** 30 minutes of manual CRM data entry after every client visit. Leads get lost in notebooks, WhatsApp, or memory.
**After Flowmeup:** 90-second voice lead log. Structured data in CRM. Automatic follow-up radar.

## Target Audience

- **Primary:** Italian SMB owners and sales managers — 10–100 employees
- **Sectors:** Construction, manufacturing, B2B distribution
- **Geography:** Italy (primary), EU English-speaking markets (secondary)
- **Decision maker profile:** 40–55 years old, skeptical of tech promises, values simplicity and ROI over features

## The 4 Agents

### Voice Lead LIVE — Active

- **Trigger:** Sales rep calls immediately after client meeting
- **Action:** Voice message transcribed → structured lead data → pushed to CRM
- **Before/After stat:** 30 min → 90 sec lead logging
- **Badge:** LIVE (green)

### Lead Scout LIVE — Active

- **Trigger:** Rep asks "who should I call today in [zone/sector]?"
- **Action:** Pulls warm leads from CRM + web signals → ranked call list with context brief
- **Before/After stat:** 2 hours → 8 min prospecting
- **Badge:** LIVE (green)

### Pre-Call Brief — Coming Soon

- **Trigger:** 30 minutes before a scheduled meeting
- **Action:** Summarizes client history, open deals, last touchpoints → WhatsApp brief
- **Badge:** COMING SOON (muted gray)

### Follow-Up Radar — Coming Soon

- **Trigger:** Automatic scan of CRM for overdue follow-ups
- **Action:** Prioritized follow-up list with suggested talking points → morning digest
- **Badge:** COMING SOON (muted gray)

## Business Model

**Done-for-you AI agents** — not a SaaS tool. Flowmeup installs, configures, and maintains the agents. The sales rep only interacts with WhatsApp or phone, never a dashboard.

- **Pricing model:** Monthly subscription per agent (see Pricing section)
- **Setup:** Flowmeup team handles CRM integration, voice transcription, and prompt tuning
- **No training required** for end users — designed to work with existing habits

## Key Differentiators

1. **Zero interface change** — agents work via voice/WhatsApp, no new app to install
2. **Italian-first** — designed for Italian SMB workflows, not adapted from US enterprise tools
3. **Done-for-you** — client pays monthly, Flowmeup handles everything technical
4. **Composable** — start with one agent, add others as team adoption grows

## Tone of Voice

Direct. Credible. No startup jargon. Speaks the language of a 45-year-old construction company owner who has been burned by tech products that overpromised. Headlines are outcomes, not features.

**Good:** "Il tuo commerciale registra un lead in 90 secondi mentre è ancora in macchina."
**Bad:** "Leveraging AI-powered conversational interfaces to optimize your sales pipeline."
