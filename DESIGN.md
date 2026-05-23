# Flowmeup — Design Reference

> Required by the `impeccable shape` skill. This file is a concise reference. The **single source of truth** for all design decisions is `design-system/MASTER.md`.

## Quick Reference

### Colors

| Role | Token | Hex |
|------|-------|-----|
| Primary brand | `navy-900` | `#0F2349` |
| CTA / Accent | `amber-500` | `#F59E0B` |
| CTA hover | `amber-600` | `#D97706` |
| Page background | `slate-50` | `#F8FAFC` |
| Section alt bg | `slate-100` | `#F1F5F9` |
| Body text | `slate-900` | `#0F172A` |
| Secondary text | `slate-600` | `#475569` |
| LIVE badge | `#22C55E` | green-500 |
| COMING SOON badge | `slate-300` | `#CBD5E1` |
| Footer bg | `navy-950` | `#071730` |

### Typography

- **Font:** Inter (Google Fonts) — single family for headings and body
- **Weights:** 400 (body), 500 (emphasis), 600 (subheadings), 700 (headings), 800 (hero / stats)
- **Hero headline:** `text-5xl font-extrabold` desktop, `text-3xl` mobile
- **Body text minimum:** 16px on mobile (never below — prevents iOS zoom)

### Grid & Spacing

- **Base unit:** 8px grid
- **Container:** `max-w-[1200px] mx-auto px-4`
- **Section padding:** `py-12` mobile, `py-16` tablet, `py-20` desktop

### Mode

**Light mode only** for v1. No `dark:` Tailwind classes. Semantic tokens in `tailwind.config.ts` preserve dark mode optionality for v2.

---

## Section Background Map

| Section | Background |
|---------|-----------|
| Navbar | `navy-900` (#0F2349) |
| Hero | `navy-900` (#0F2349) |
| Problem | `slate-50` (#F8FAFC) |
| Solution | `slate-100` (#F1F5F9) |
| Agents | `slate-50` (#F8FAFC) |
| Differentiator | `navy-900` (#0F2349) |
| Delivery | `slate-100` (#F1F5F9) |
| Pricing | `slate-50` (#F8FAFC) |
| CTA / Contact | `navy-900` (#0F2349) |
| Footer | `navy-950` (#071730) |

---

## Animation Rules (summary)

- Hero headline: **NOT animated** — must be immediately visible
- Scroll reveal: `.reveal` + `.visible` classes, 400ms ease-out, triggered at 15% visibility
- Card hover: `translateY(-4px)` + shadow upgrade, 200ms ease
- LIVE badge: white dot pulses at 2s cycle (badge itself does not animate)
- `prefers-reduced-motion`: override set in globals.css to disable all animations

---

## Full Spec

See `design-system/MASTER.md` for complete component rules, token values, animation specs, and iconography guidelines.
