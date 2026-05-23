---
plan: 02-05
phase: 02-build-landing-page
status: complete
completed: "2026-05-23"
requirements: [DSGN-02, DSGN-03]
---

# Summary: 02-05 — Framer Motion Animations + Responsive Polish

## What Was Built

**`src/hooks/useScrollReveal.ts`:**
- Intersection Observer hook, threshold 0.15 (15% visibility)
- Adds `.visible` class to element when it enters viewport (once)
- Used in Problem, Solution, Differentiator, AgentCards H2s
- CSS transition in `globals.css`: `.reveal { opacity:0; translateY(20px) } .reveal.visible { opacity:1; translateY(0) }` with 400ms ease-out

**Problem.tsx updated:**
- `'use client'` + `useScrollReveal` on H2 and body block (single-block reveal, no stagger — continuous narrative per brief)

**Solution.tsx updated:**
- `'use client'` + `useScrollReveal` on H2

**Differentiator.tsx updated:**
- `'use client'` + `useScrollReveal` on H2 and body paragraph
- Body: `transitionDelay: '300ms'` after heading reveals

**AgentCards.tsx (Framer Motion stagger):**
- `motion.div` container with `staggerChildren: 0.08` (80ms per card)
- `useInView` at 15% threshold, `once: true`
- Card variants: `hidden { opacity:0, y:20 }` → `visible { opacity:1, y:0 }` 400ms ease-out
- H2 uses `useScrollReveal` hook
- AgentCard hover state: Tailwind `hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,35,73,0.12)]` (CSS, 200ms)

**Hero.tsx:**
- H1: NOT animated (SPEC-02 locked ✓)
- CTA button: CSS `opacity-0 animate-fade-in [animation-delay:200ms]` — entrance from globals.css keyframes

**LIVE badge pulse:**
- `animate-live-pulse` on dot element — pure CSS animation (2s ease-in-out infinite), NOT Framer Motion

**prefers-reduced-motion:**
- Global override in `globals.css` (from 02-01): `animation-duration: 0.01ms; transition-duration: 0.01ms` — no per-component override needed

**Responsive polish:**
- Hero H1: `text-3xl md:text-4xl lg:text-5xl` — fits 375px
- Agent cards: `grid-cols-1 md:grid-cols-2` — single column on mobile
- Container `max-w-[1200px]` centers at 1440px
- Section padding: `py-12 md:py-16 lg:py-20`

## Key Deviations

- Plans 02-04 and 02-05 hit session limits mid-execution. Orchestrator completed work manually.
- Delivery.tsx and Pricing.tsx `.reveal` classes on rows use static CSS (no Framer Motion stagger applied to those sections yet — can be added in 02-06 if needed).

## Commits

- `00ba84b` — feat(02-04,02-05): delivery, pricing, scroll-reveal hook, section animations (partial)
- `d8d8392` — feat(02-04,02-05): complete wave 3 — AgentCards FM stagger, full page wired

## Self-Check

- [x] DSGN-02: Responsive breakpoints covered (375/768/1024/1440px)
- [x] DSGN-03: Scroll reveals (400ms ease-out, 15% IO), card stagger (80ms), Hero CTA entrance (200ms delay), card hover lift
- [x] Hero H1 NOT animated — SPEC-02 honored
- [x] LIVE badge dot pulses via CSS `animate-live-pulse`
- [x] `prefers-reduced-motion` global override in globals.css
- [x] Build passes (0 TypeScript errors)
