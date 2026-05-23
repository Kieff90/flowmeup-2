# Requirements: Flowmeup Sales Agents Landing Page

**Defined:** 2026-05-23
**Core Value:** Un commerciale registra un lead in 90 secondi dal telefono mentre guida — senza aprire nessun tool, senza cambiare nessuna abitudine.

---

## v1 Requirements

### Spec & Concept

- [ ] **SPEC-01**: Decisione approvata: mostrare 2 agenti live o tutti 4 (live + coming soon)
- [ ] **SPEC-02**: Design direction definita: stile visivo, palette, tipografia per B2B Italian SMB
- [ ] **SPEC-03**: Skill catalog scritto: lista delle skill disponibili per UI/UX/animazione con ordine di utilizzo
- [ ] **SPEC-04**: Copy brief IT approvato per tutte le sezioni della landing
- [ ] **SPEC-05**: Copy brief EN approvato per tutte le sezioni della landing
- [ ] **SPEC-06**: Stack tecnico scelto (Next.js/Tailwind vs HTML/Tailwind vs altro)

### Landing Structure

- [ ] **LAND-01**: Hero section — headline + subheadline + CTA primario (IT + EN)
- [ ] **LAND-02**: Problem section — "Ogni giorno i tuoi commerciali perdono ore..." (IT + EN)
- [ ] **LAND-03**: Solution section — "Agenti AI configurati sul tuo processo..." (IT + EN)
- [ ] **LAND-04**: Agent cards section — 4 card con nome + before/after + badge live/coming soon (IT + EN)
- [ ] **LAND-05**: Differentiator section — memoria condivisa AREX, senza nominarla (IT + EN)
- [ ] **LAND-06**: Delivery section — "Raccontaci il tuo processo. Sei operativo entro una settimana." (IT + EN)
- [ ] **LAND-07**: Pricing section — tabella per agent con prezzi mensili chiari (IT + EN)
- [ ] **LAND-08**: CTA / Contact section — form 5 campi + link calendario (IT + EN)

### Design & UX

- [ ] **DSGN-01**: Design system applicato: colori, tipografia, spaziatura, componenti base
- [ ] **DSGN-02**: Responsive implementata: 375px (mobile), 768px (tablet), 1024px, 1440px
- [ ] **DSGN-03**: Animazioni e micro-interazioni: hero entrance, scroll reveals, hover states sui card agenti
- [ ] **DSGN-04**: Language switcher IT/EN funzionante
- [ ] **DSGN-05**: Accessibilità base: contrasto 4.5:1, alt text, focus states, keyboard nav

### Contact & Conversion

- [ ] **CONV-01**: Form di contatto con 5 campi (nome, azienda, ruolo, settore, messaggio)
- [ ] **CONV-02**: Link a calendario esterno (Calendly o equivalente) per discovery call
- [ ] **CONV-03**: Confirmation feedback dopo invio form (success state)

### Technical

- [ ] **TECH-01**: Progetto scaffoldato con stack scelto in SPEC-06
- [ ] **TECH-02**: Meta tag base (title, description, canonical) per IT e EN
- [ ] **TECH-03**: Open Graph tags per condivisione social
- [ ] **TECH-04**: Build ottimizzata: immagini WebP/srcset, font loading ottimizzato, LCP < 2.5s

### SEO & Deploy

- [ ] **SEO-01**: Schema markup JSON-LD (Organization, Product/Service)
- [ ] **DEPL-01**: Deploy su dominio definitivo (o staging review-ready)

---

## v2 Requirements

### Content & Growth

- **CONT-01**: Demo video 60 secondi (asset più convertente, da creare post-v1)
- **CONT-02**: Case study / testimonial da primo cliente live
- **CONT-03**: Blog / content hub per acquisition organica
- **CONT-04**: Analytics avanzata (heatmap, session recording)

### Product Features

- **PROD-01**: Live chat / widget per pre-qualificazione leads
- **PROD-02**: Integrazione con CRM per raccolta lead dal form
- **PROD-03**: A/B test su headline e CTA

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| CRM dashboard / UI admin | Il prodotto si usa via messaging app, non via web |
| Demo interattiva agenti | Troppo complessa per v1; video è più efficace |
| Self-serve onboarding / trial | Modello done-for-you, no autonomo |
| Mobile app | Web-first |
| Real-time chat agenti embedded | Fuori da landing page scope |

---

## Skill Usage Map

Skill disponibili per UX/UI/animazione/landing (da `~/.claude/skills/`):

| # | Skill | Quando usarla | Fase |
|---|-------|---------------|------|
| 1 | `ui-ux-pro-max` | **Prima di tutto.** Genera design system completo: pattern, stile, colori, tipografia, regole animazione per B2B Italian SMB. Comando: `--design-system --persist` | SPEC-02, DSGN-01 |
| 2 | `copywriting` | Scrivere e ottimizzare il copy per ogni sezione. Usa dopo che il design direction è definito. | SPEC-04, SPEC-05 |
| 3 | `prototype` | Se emergono 2+ opzioni di design radicalmente diverse, build throwaway UI per validare prima del codice production. | SPEC-02 (opzionale) |
| 4 | `impeccable` | **Design implementation & refinement.** Sub-comandi utili: `/impeccable craft` (build da zero), `/impeccable shape` (definire struttura), `/impeccable animate` (aggiungere animazioni), `/impeccable colorize` (raffinare palette), `/impeccable layout` (layout review), `/impeccable audit` (UX review). Richiede PRODUCT.md + DESIGN.md nel progetto. | LAND-01–08, DSGN-01–05 |
| 5 | `frontend-patterns` | Pattern React/Next.js: composizione componenti, state, Framer Motion animations, performance (memoization, code splitting, virtualization). | TECH-01, DSGN-03 |
| 6 | `seo-geo` | SEO audit + schema markup + meta tag + GEO optimization (visibility su AI search engines). Usare DOPO il build. | SEO-01, TECH-02–03 |
| 7 | `humanizer` | Passaggio finale sul copy: rende il testo più naturale e meno "marketing-speak". | SPEC-04, SPEC-05 (post-draft) |

**Ordine raccomandato:**
1. `ui-ux-pro-max` → design system
2. `copywriting` → draft copy IT + EN
3. `prototype` → se serve validare opzioni design
4. `impeccable craft/shape` → build struttura landing
5. `frontend-patterns` → implementazione componenti + animazioni
6. `impeccable animate/colorize/audit` → refinement
7. `humanizer` → polish copy finale
8. `seo-geo` → ottimizzazione post-build

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SPEC-01 | Phase 1 | Pending |
| SPEC-02 | Phase 1 | Pending |
| SPEC-03 | Phase 1 | Pending |
| SPEC-04 | Phase 1 | Pending |
| SPEC-05 | Phase 1 | Pending |
| SPEC-06 | Phase 1 | Pending |
| LAND-01 | Phase 2 | Pending |
| LAND-02 | Phase 2 | Pending |
| LAND-03 | Phase 2 | Pending |
| LAND-04 | Phase 2 | Pending |
| LAND-05 | Phase 2 | Pending |
| LAND-06 | Phase 2 | Pending |
| LAND-07 | Phase 2 | Pending |
| LAND-08 | Phase 2 | Pending |
| DSGN-01 | Phase 2 | Pending |
| DSGN-02 | Phase 2 | Pending |
| DSGN-03 | Phase 2 | Pending |
| DSGN-04 | Phase 2 | Pending |
| DSGN-05 | Phase 2 | Pending |
| CONV-01 | Phase 2 | Pending |
| CONV-02 | Phase 2 | Pending |
| CONV-03 | Phase 2 | Pending |
| TECH-01 | Phase 2 | Pending |
| TECH-02 | Phase 3 | Pending |
| TECH-03 | Phase 3 | Pending |
| TECH-04 | Phase 3 | Pending |
| SEO-01 | Phase 3 | Pending |
| DEPL-01 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-23*
*Last updated: 2026-05-23 after initial definition from spec.md v1.0*
