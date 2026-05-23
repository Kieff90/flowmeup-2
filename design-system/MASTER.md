# Flowmeup Design System — MASTER

> **Single Source of Truth for all Phase 2 visual decisions.**
> A Phase 2 executor reading only this file can build the entire landing without asking design questions.
> No values are left as TBD. Every field is specific and usable.

**Project:** Flowmeup Sales Agents Landing Page
**Generated:** 2026-05-23
**Audience:** Italian SMB owners — construction, manufacturing, B2B distribution (10–100 employees)
**Mode:** Light mode only (v1)

---

## 1. Design Principles

This design system optimises for trust over aesthetics. The target user is a 45-year-old construction company owner who has been burned by tech products that overpromised. Every visual decision asks: "does this feel credible and simple, or does it feel like another startup pitch?"

Directness is the core visual value. Headlines land without decoration. Numbers stand alone. Whitespace signals confidence, not emptiness. The palette and typography should read as "Italian craftsmanship meets modern efficiency" — professional without coldness, energetic without noise.

All components exist to reduce time-to-decision. No element is decorative-only. If something is on the page, it converts or it disappears.

Mobile is primary. The sales reps who will see this page are often on an iPhone in a parking lot between meetings.

---

## 2. Color Palette

### Primary — Deep Navy

| Token | Hex | Usage |
|-------|-----|-------|
| navy-50 | `#EFF6FF` | Very light backgrounds, hover tints |
| navy-100 | `#DBEAFE` | Subtle highlight backgrounds |
| navy-200 | `#BFDBFE` | Light borders, disabled states |
| navy-300 | `#93C5FD` | Secondary text on dark |
| navy-400 | `#60A5FA` | Icons on dark backgrounds |
| navy-500 | `#3B82F6` | Interactive links on dark |
| navy-600 | `#2563EB` | Secondary button border, links |
| navy-700 | `#1D4ED8` | Hover state for primary actions |
| navy-800 | `#1E3A8A` | Section backgrounds (dark sections) |
| navy-900 | `#0F2349` | **Primary brand color — headers, hero bg, navbar** |
| navy-950 | `#071730` | Deepest shade — footer bg |

### Accent — Warm Amber

| Token | Hex | Usage |
|-------|-----|-------|
| amber-50 | `#FFFBEB` | CTA hover background tint |
| amber-100 | `#FEF3C7` | Tag backgrounds |
| amber-200 | `#FDE68A` | Highlight underlines |
| amber-300 | `#FCD34D` | Secondary accent on dark |
| amber-400 | `#FBBF24` | Icon accent color |
| amber-500 | `#F59E0B` | **Primary CTA button — main accent** |
| amber-600 | `#D97706` | CTA button hover state |
| amber-700 | `#B45309` | Active/pressed CTA state |
| amber-800 | `#92400E` | Dark accent for text on light |
| amber-900 | `#78350F` | Very dark accent |

### Neutral — Slate Gray

| Token | Hex | Usage |
|-------|-----|-------|
| slate-50 | `#F8FAFC` | Page background |
| slate-100 | `#F1F5F9` | Section alternating background |
| slate-200 | `#E2E8F0` | Borders, dividers, input borders |
| slate-300 | `#CBD5E1` | Placeholder text, disabled borders |
| slate-400 | `#94A3B8` | Secondary text (smallest) |
| slate-500 | `#64748B` | Muted text, captions |
| slate-600 | `#475569` | Body text secondary |
| slate-700 | `#334155` | Body text primary |
| slate-800 | `#1E293B` | Headings on light bg |
| slate-900 | `#0F172A` | Highest contrast text on light |

### Semantic Tokens

| Token | Value | Hex | Notes |
|-------|-------|-----|-------|
| `color-background` | slate-50 | `#F8FAFC` | Page default background |
| `color-surface` | white | `#FFFFFF` | Cards, panels |
| `color-surface-alt` | slate-100 | `#F1F5F9` | Alternating section backgrounds |
| `color-text-primary` | slate-900 | `#0F172A` | Primary body text |
| `color-text-secondary` | slate-600 | `#475569` | Supporting copy |
| `color-text-muted` | slate-400 | `#94A3B8` | Labels, captions |
| `color-text-on-dark` | white | `#FFFFFF` | Text on navy backgrounds |
| `color-text-on-dark-secondary` | navy-300 | `#93C5FD` | Secondary text on navy bg |
| `color-border` | slate-200 | `#E2E8F0` | Default borders |
| `color-border-strong` | slate-300 | `#CBD5E1` | Emphasized borders |
| `color-primary` | navy-900 | `#0F2349` | Brand primary |
| `color-primary-dark` | navy-950 | `#071730` | Footer, deepest bg |
| `color-accent` | amber-500 | `#F59E0B` | CTA, highlights |
| `color-accent-hover` | amber-600 | `#D97706` | CTA hover |
| `color-live-badge` | `#22C55E` | — | Green — agent is live |
| `color-live-badge-text` | `#FFFFFF` | — | White text on green |
| `color-coming-soon-badge` | slate-300 | `#CBD5E1` | Muted gray |
| `color-coming-soon-badge-text` | slate-600 | `#475569` | Neutral text |
| `color-error` | `#EF4444` | — | Form errors |
| `color-focus-ring` | amber-400 | `#FBBF24` | Keyboard focus indicator |

---

## 3. Typography

### Font Families

**Heading font:** `Inter` (weights: 400, 600, 700, 800)
**Body font:** `Inter` (weights: 400, 500)

Inter is a humanist sans-serif — readable on small screens, modern without feeling cold, and free via Google Fonts. A single family keeps the system coherent and fast-loading.

**CSS import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

**Fallback stack:**
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Token | Size (desktop) | Size (mobile 375px) | Usage |
|-------|---------------|---------------------|-------|
| `text-xs` | 12px / 0.75rem | 12px | Labels, badges, fine print |
| `text-sm` | 14px / 0.875rem | 14px | Captions, helper text |
| `text-base` | 16px / 1rem | 16px | **Body text minimum on mobile** |
| `text-lg` | 18px / 1.125rem | 17px | Lead copy, card body |
| `text-xl` | 20px / 1.25rem | 18px | Card titles, section labels |
| `text-2xl` | 24px / 1.5rem | 21px | Subsection headings |
| `text-3xl` | 30px / 1.875rem | 26px | Section headings (H2) |
| `text-4xl` | 36px / 2.25rem | 30px | Feature headings |
| `text-5xl` | 48px / 3rem | 36px | **Hero headline** |

### Weight Usage

| Weight | When to use |
|--------|-------------|
| 400 | Body copy, form fields, captions |
| 500 | Card body, list items needing slight emphasis |
| 600 | Section subheadings, badge labels, nav items |
| 700 | H2 section headings, card titles |
| 800 | Hero headline, key stat numbers |

### Line Height Rules

| Context | Line height | Reason |
|---------|------------|--------|
| Hero headline (48px+) | 1.1 | Tight — makes large text pack well |
| Section headings (30-36px) | 1.2 | Slightly relaxed |
| Card titles (20-24px) | 1.3 | Readable at medium size |
| Body text | 1.6 | Maximum readability |
| Captions, badges | 1.4 | Compact but scannable |

### Mobile Scaling (375px)

All `text-5xl` (hero) reduces to 36px. `text-4xl` reduces to 30px. `text-3xl` reduces to 26px. Body text stays at 16px minimum — never reduce below this on mobile. Use Tailwind responsive prefixes: `text-3xl md:text-4xl lg:text-5xl`.

---

## 4. Spacing & Layout

### Base Unit

**8px grid.** All spacing values are multiples of 8px. Use 4px only for micro-gaps (icon to label, badge padding).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon-label gap, badge internal padding |
| `space-2` | 8px | Tight element gaps |
| `space-3` | 12px | Small internal padding |
| `space-4` | 16px | Standard element padding |
| `space-6` | 24px | Card internal padding |
| `space-8` | 32px | Component vertical gaps |
| `space-12` | 48px | Section internal padding (mobile) |
| `space-16` | 64px | Section internal padding (desktop) |
| `space-20` | 80px | Section vertical padding (desktop) |
| `space-24` | 96px | Hero padding |

### Section Padding

| Breakpoint | Vertical section padding | Horizontal padding |
|------------|------------------------|-------------------|
| Mobile (375px) | `py-12` (48px) | `px-4` (16px) |
| Tablet (768px) | `py-16` (64px) | `px-6` (24px) |
| Desktop (1024px) | `py-20` (80px) | `px-8` (32px) |
| Wide (1440px) | `py-24` (96px) | `px-0` (container handles) |

### Container

```css
max-width: 1200px;   /* max-w-[1200px] or max-w-6xl */
margin: 0 auto;
padding: 0 16px;     /* always 16px minimum horizontal padding */
```

At 1440px viewport: container is 1200px centered with equal whitespace on sides.

### Grid

| Breakpoint | Columns | Usage |
|------------|---------|-------|
| 375px | 1 column | Stack everything vertically |
| 768px | 2 columns | Agent cards 2×2, features 2-col |
| 1024px | 3 columns | Agent cards 2×2, pricing 3-col |
| 1440px | 4 columns | Agent cards 4×1 or 2×2 |

Agent cards specifically: 1 col mobile → 2 col tablet → 2×2 or 4×1 desktop (designer choice per visual weight).

---

## 5. Component Rules

### Hero Section

- **Background:** `color-primary` (`#0F2349`) navy — full width
- **Text color:** white primary, `color-text-on-dark-secondary` for supporting copy
- **Headline:** `text-5xl` (desktop) / `text-4xl` (tablet) / `text-3xl` (mobile), weight 800, line-height 1.1
- **Subheadline:** `text-lg` or `text-xl`, weight 400, line-height 1.6, `color-text-on-dark-secondary`
- **CTA button:** Primary button (see below), amber background — high contrast on navy
- **Min-height:** `min-h-[560px]` desktop, `min-h-[480px]` mobile
- **Padding:** `py-24 px-4` mobile, `py-32 px-8` desktop
- **No background image** — solid navy only for v1. Visual weight comes from typography.

### Agent Card

- **Dimensions:** `min-h-[280px]` — consistent height across all 4 cards
- **Background:** white (`color-surface`)
- **Border:** `1px solid color-border` (`#E2E8F0`)
- **Border radius:** `rounded-xl` (12px)
- **Padding:** `p-6` (24px)
- **Shadow:** `shadow-md` (default), `shadow-lg` on hover
- **Hover state:** `translateY(-4px)`, shadow upgrade, `border-color: #CBD5E1` — transition 200ms ease
- **Badge placement:** Top-right corner of card, absolute positioned
- **Before/after stat display:**
  - Before: `text-3xl font-800 color-text-secondary` — emphasized but muted
  - After: `text-3xl font-800 color-accent` (amber) — the hero number
  - Label: `text-sm color-text-muted` — "Prima" / "Dopo"
  - Stat container: flex row with a right-arrow or vs separator
- **Agent name:** `text-xl font-700 color-text-primary`
- **Description:** `text-base color-text-secondary` line-height 1.6
- **cursor-pointer** always

### LIVE Badge

```css
.badge-live {
  background: #22C55E;       /* green-500 */
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 99px;       /* pill shape */
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Optional pulse dot before "LIVE" label */
.badge-live::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #FFFFFF;
  border-radius: 50%;
  animation: live-pulse 2s ease-in-out infinite;
}

@keyframes live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}
```

### COMING SOON Badge

```css
.badge-coming-soon {
  background: #CBD5E1;       /* slate-300 */
  color: #475569;            /* slate-600 */
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 99px;
  display: inline-flex;
  align-items: center;
}
/* No animation — intentionally static and muted */
```

### Section Dividers

No horizontal rules. Sections are separated by:
1. **Background color alternation:** `color-background` (slate-50) → `color-surface-alt` (slate-100) → repeat
2. **Dark sections** (differentiator/AREX section): `color-primary` navy — creates strong visual break
3. Never use `<hr>` tags or visible border lines between sections

### CTA Button (Primary)

```css
.btn-primary {
  background: #F59E0B;       /* amber-500 */
  color: #0F172A;            /* slate-900 — dark text on amber for contrast */
  padding: 14px 28px;
  border-radius: 8px;        /* rounded-lg */
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  transition: background 200ms ease, transform 150ms ease;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary:hover {
  background: #D97706;       /* amber-600 */
  transform: translateY(-1px);
}

.btn-primary:active {
  background: #B45309;       /* amber-700 */
  transform: translateY(0);
}

.btn-primary:focus-visible {
  outline: 3px solid #FBBF24;   /* amber-400 focus ring */
  outline-offset: 2px;
}
```

Minimum size on mobile: full-width `w-full` or minimum `min-w-[200px]`.

### CTA Button (Secondary / Ghost)

```css
.btn-secondary {
  background: transparent;
  color: #0F2349;            /* navy-900 — on light backgrounds */
  border: 2px solid #0F2349;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #0F2349;
  color: #FFFFFF;
}

/* On dark (navy) backgrounds: */
.btn-secondary-on-dark {
  color: #FFFFFF;
  border-color: #FFFFFF;
}

.btn-secondary-on-dark:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

### Form Inputs

```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #E2E8F0;   /* slate-200 */
  border-radius: 8px;
  font-size: 16px;                /* never below 16px on mobile — prevents iOS zoom */
  font-family: inherit;
  color: #0F172A;
  background: #FFFFFF;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.input::placeholder {
  color: #94A3B8;                /* slate-400 */
}

.input:focus {
  outline: none;
  border-color: #F59E0B;         /* amber-500 */
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}

.input-error {
  border-color: #EF4444;
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.input-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #334155;                /* slate-700 */
  margin-bottom: 6px;
}

.input-error-message {
  font-size: 13px;
  color: #EF4444;
  margin-top: 4px;
}
```

### Pricing Table Row

- **Layout:** CSS Grid — `grid-cols-[2fr_1fr_1fr_1fr]` on desktop, stacked on mobile
- **Columns:** Agent name | Monthly price | Credits included | Top-up cost
- **Agent name:** `text-base font-600 color-text-primary`
- **Price number:** `text-2xl font-800 color-primary` — the hero value per row
- **Credits:** `text-sm color-text-secondary`
- **Row border:** `border-b border-color-border`
- **Row hover:** `bg-slate-50` — light tint to indicate interactivity
- **Discount callout:** Separate row or below-table note, `text-sm font-600 color-accent` (amber)

---

## 6. Animation Guidelines

### Principle

Animation should feel earned, not decorative. If removing an animation makes the page cleaner without losing meaning, remove it. Every animated element must serve a communicative purpose.

Always include:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Hero Entrance

**Do NOT animate the hero headline on load.** The headline should be immediately visible — no fade, no slide. The user needs the value proposition instantly.

What to animate on hero (optional, lightweight):
- CTA button: subtle fade-in with 200ms delay after paint — `opacity 0 → 1, translateY(4px) → 0`
- Stat callout (if present): fade-in at 300ms

### Scroll Reveal

Applied to: section headings, feature blocks, agent cards, pricing rows.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Trigger: Intersection Observer at 15% element visibility. Stagger cards by 80ms increments when multiple appear together.

### Card Hover

```css
.agent-card {
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.agent-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(15, 35, 73, 0.12);   /* navy-tinted shadow */
  border-color: #CBD5E1;
}
```

### LIVE Badge Pulse

```css
@keyframes live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(0.85); }
}
/* Duration: 2s, timing: ease-in-out, infinite */
/* Applied to the white dot inside the badge only — not the entire badge */
```

### Duration Reference

| Type | Duration | Easing |
|------|----------|--------|
| Micro (hover, focus) | 150–200ms | `ease` |
| Scroll reveal | 400ms | `ease-out` |
| CTA entrance | 200ms | `ease-out` |
| LIVE pulse cycle | 2000ms | `ease-in-out` |
| Page transitions | N/A (no SPA router in v1) | — |

---

## 7. Iconography & Visual Assets

### Icon Style

- **Library:** Heroicons (outline variant) or Lucide — both free, MIT licensed
- **Style:** Line icons only — no filled/solid variants in landing context
- **Size:** 20px (inline/card), 24px (section features), 32px (hero features)
- **Color:** Inherits from context — `color-accent` (amber) for feature icons, `color-text-secondary` for utility icons
- **Never use emojis as icons** — SVG only

### No Stock Photos

No photographs in v1. Visual assets are:
- Abstract geometric shapes if needed (simple, SVG, consistent with navy/amber palette)
- The before/after stat numbers ARE the visual — they should stand alone
- Agent cards use the agent name + badge as visual identity — no avatar images

### Agent Avatars (if implemented)

Recommended approach: **geometric abstract symbols** — one simple SVG shape per agent, using the navy/amber palette. Not initials (too generic), not photos (too human for an AI agent).

- Voice Lead: microphone outline icon (Heroicons `microphone`)
- Lead Scout: magnifying glass (`magnifying-glass`)
- Pre-Call Brief: document with lines (`document-text`)
- Follow-Up Radar: bell or clock (`bell` or `clock`)

These become the agent's visual identity throughout. 24×24px in card context.

---

## 8. Dark / Light Mode

**Decision: Light mode only for v1.**

Italian SMB owners are not dark-mode-first users. They view on phones in daylight (on-site, in vehicles). Light mode is safer for legibility in bright conditions.

The semantic token system (section 2) is designed to make dark mode possible in a future version without rearchitecting — simply provide alternate hex values for each semantic token.

No `dark:` Tailwind classes in v1 except where unavoidable. Keep the codebase clean for future dark mode addition.

---

## 9. Tailwind Config Tokens

Paste this into `tailwind.config.ts` (or `tailwind.config.js`) under `theme.extend`:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Deep Navy
        navy: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F2349',
          950: '#071730',
        },
        // Accent — Warm Amber
        amber: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Semantic aliases
        brand: {
          primary:        '#0F2349',  // navy-900
          'primary-dark': '#071730',  // navy-950
          accent:         '#F59E0B',  // amber-500
          'accent-hover': '#D97706',  // amber-600
        },
        badge: {
          live:               '#22C55E',  // green-500
          'live-text':        '#FFFFFF',
          'coming-soon':      '#CBD5E1',  // slate-300
          'coming-soon-text': '#475569',  // slate-600
        },
        status: {
          error:   '#EF4444',
          success: '#22C55E',
          focus:   '#FBBF24',  // amber-400 — focus ring
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Base Tailwind scale, explicitly declared for clarity
        xs:   ['12px',  { lineHeight: '16px' }],
        sm:   ['14px',  { lineHeight: '20px' }],
        base: ['16px',  { lineHeight: '24px' }],
        lg:   ['18px',  { lineHeight: '28px' }],
        xl:   ['20px',  { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
      fontWeight: {
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
        extrabold: '800',
      },
      spacing: {
        // Custom additions beyond Tailwind defaults
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        lg:  '8px',
        xl:  '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        sm:  '0 1px 2px rgba(0,0,0,0.05)',
        md:  '0 4px 6px rgba(0,0,0,0.07)',
        lg:  '0 10px 15px rgba(0,0,0,0.08)',
        xl:  '0 20px 25px rgba(0,0,0,0.10)',
        // Navy-tinted shadow for card hover
        'card-hover': '0 10px 30px rgba(15, 35, 73, 0.12)',
        // Amber glow for CTA focus
        'cta-focus':  '0 0 0 3px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'live-pulse': 'live-pulse 2s ease-in-out infinite',
        'reveal':     'reveal 400ms ease-out forwards',
        'fade-in':    'fade-in 200ms ease-out forwards',
      },
      keyframes: {
        'live-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.6', transform: 'scale(0.85)' },
        },
        'reveal': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### CSS Custom Properties (for non-Tailwind usage)

If using plain CSS or HTML/Tailwind with CSS variables:

```css
:root {
  /* Semantic tokens */
  --color-background:              #F8FAFC;
  --color-surface:                 #FFFFFF;
  --color-surface-alt:             #F1F5F9;
  --color-text-primary:            #0F172A;
  --color-text-secondary:          #475569;
  --color-text-muted:              #94A3B8;
  --color-text-on-dark:            #FFFFFF;
  --color-text-on-dark-secondary:  #93C5FD;
  --color-border:                  #E2E8F0;
  --color-border-strong:           #CBD5E1;
  --color-primary:                 #0F2349;
  --color-primary-dark:            #071730;
  --color-accent:                  #F59E0B;
  --color-accent-hover:            #D97706;
  --color-live-badge:              #22C55E;
  --color-live-badge-text:         #FFFFFF;
  --color-coming-soon-badge:       #CBD5E1;
  --color-coming-soon-badge-text:  #475569;
  --color-error:                   #EF4444;
  --color-focus-ring:              #FBBF24;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  /* Base unit */
  --space-unit: 8px;
}
```

---

## Quick Reference: Landing Section Map

| Section | Background | Text color | Key component |
|---------|-----------|------------|---------------|
| Navbar | `color-primary` (navy) | white | Sticky, logo + nav links + CTA |
| Hero | `color-primary` (navy) | white | Large headline + amber CTA |
| Problem | `color-background` (slate-50) | primary text | Copy-heavy, no distractions |
| Solution | `color-surface-alt` (slate-100) | primary text | 3-feature grid with icons |
| Agents | `color-background` (slate-50) | primary text | 4 cards 2×2 grid |
| Differentiator | `color-primary` (navy) | white | Bold statement, no cards |
| Delivery | `color-surface-alt` (slate-100) | primary text | 5-step numbered list |
| Pricing | `color-background` (slate-50) | primary text | Table + discount note |
| CTA / Contact | `color-primary` (navy) | white | Form + calendar link |
| Footer | `color-primary-dark` (navy-950) | muted white | Links + copyright |
