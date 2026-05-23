# Requirements: Flowmeup Sales Agents Landing Page

**Defined:** 2026-05-23
**Core Value:** Un commerciale registra un lead in 90 secondi dal telefono mentre guida — senza aprire nessun tool, senza cambiare nessuna abitudine.

---

## v1 Requirements

### Spec & Concept

- [x] **SPEC-01**: Decisione approvata: mostrare 2 agenti live o tutti 4 (live + coming soon)
- [x] **SPEC-02**: Design direction definita: stile visivo, palette, tipografia per B2B Italian SMB
- [x] **SPEC-03**: Skill catalog scritto: lista delle skill disponibili per UI/UX/animazione con ordine di utilizzo
- [x] **SPEC-04**: Copy brief IT approvato per tutte le sezioni della landing
- [x] **SPEC-05**: Copy brief EN approvato per tutte le sezioni della landing
- [x] **SPEC-06**: Stack tecnico scelto (Next.js/Tailwind vs HTML/Tailwind vs altro)

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

- [x] **TECH-01**: Progetto scaffoldato con stack scelto in SPEC-06
- [ ] **TECH-02**: Meta tag base (title, description, canonical) per IT e EN
- [ ] **TECH-03**: Open Graph tags per condivisione social
- [ ] **TECH-04**: Build ottimizzata: immagini WebP/srcset, font loading ottimizzato, LCP < 2.5s

### SEO & GEO

- [ ] **SEO-01**: Schema markup JSON-LD (Organization, Product/Service) — valido al Google Rich Results Test
- [ ] **GEO-01**: Ottimizzazione per AI search engines (ChatGPT, Perplexity, Gemini, Claude): FAQ section, entity markup, E-E-A-T signals, contenuto strutturato citabile

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

Skill rilevanti per questo progetto (da `~/.claude/skills/`) — analisi completa di tutte le skill installate:

### Fase 1 — Pre-build / Spec & Concept

| Ordine | Skill | Cosa fa | Req target |
|--------|-------|---------|------------|
| 1 | `brainstorming` | **Obbligatoria prima di qualsiasi lavoro creativo.** Esplora requisiti e user intent, valida design prima dell'implementazione. Hard gate: nessuna implementazione finché non c'è design approvato. | SPEC-01, SPEC-02 |
| 2 | `ui-ux-pro-max` | Genera design system completo: 67 stili, 96 palette, 57 font pairing, regole animazione, landing page patterns per B2B Italian SMB. Comando principale: `--design-system --persist`. Crea `design-system/MASTER.md` riutilizzabile. | SPEC-02, DSGN-01 |
| 3 | `copywriting` | Scrive copy marketing per tutte e 8 le sezioni (hero, problem, solution, agents, differentiator, delivery, pricing, CTA) in IT e EN. Usa dopo che la direction è definita. | SPEC-04, SPEC-05 |
| 4 | `writing-voice` | Edita testo rimuovendo pattern AI, aggiungendo voce autentica. Modalità EDIT su copy già scritto. Regola assoluta: mai em dash. | SPEC-04, SPEC-05 (post-draft) |
| 5 | `humanizer` | Rimuove 9 pattern di scrittura AI (em dash, "rule of three", vocabulary AI, ecc.). Basato su Wikipedia "Signs of AI writing". Passaggio finale sul copy. | SPEC-04, SPEC-05 (post-draft) |

### Fase 2 — Build Landing Page

| Ordine | Skill | Cosa fa | Req target |
|--------|-------|---------|------------|
| 6 | `prototype` | Build throwaway UI con 2+ varianti design su route singola. Usa se emergono opzioni radicalmente diverse prima del codice production. | SPEC-02 (opzionale) |
| 7 | `impeccable shape` | Definisce struttura, gerarchia visiva, information architecture prima del build. Richiede `PRODUCT.md` + `DESIGN.md` nel progetto. | LAND-01–08 |
| 8 | `impeccable craft` | Build produzione da zero — codice frontend reale, scelte design nette. Sub-comandi utili: `craft`, `shape`, `animate`, `colorize`, `layout`, `audit`, `overdrive`, `bolder`, `quieter`. | LAND-01–08, DSGN-01–05 |
| 9 | `frontend-patterns` | Pattern React/Next.js: composizione componenti, Framer Motion animations, performance (code splitting, lazy loading, memoization), forms, accessibility keyboard nav. | TECH-01, DSGN-03, CONV-01 |
| 10 | `impeccable animate` | Aggiunge animazioni e micro-interazioni (hero entrance, scroll reveals, hover states). Separato dal `craft` per iterare solo sull'animazione. | DSGN-03 |
| 11 | `impeccable audit` | UX review: contrasto, cognitive load, responsive behavior, accessibility, interaction design. Usare prima della consegna di Fase 2. | DSGN-05 |
| 12 | `e2e-testing` | Test end-to-end dei flussi critici: form submission, language switch IT/EN, calendar link, responsive behavior. | CONV-01–03, DSGN-04 |

### Fase 3 — SEO & GEO

| Ordine | Skill | Cosa fa | Req target |
|--------|-------|---------|------------|
| 13 | `seo-geo` | SEO tradizionale + GEO (Generative Engine Optimization). Meta tag, schema markup JSON-LD, Open Graph. GEO: ottimizzazione per essere citati da ChatGPT, Perplexity, Gemini, Claude, Copilot. Include audit script, keyword research, structured content per AI citation. | SEO-01, GEO-01, TECH-02, TECH-03 |

### Skill escluse (non rilevanti per questo progetto)

| Skill | Motivo esclusione |
|-------|-------------------|
| `liquid-glass-design` | iOS 26 / SwiftUI only — non applicabile a web |
| `swiftui-patterns` | iOS only |
| `backend-patterns`, `django-*`, `springboot-*`, `golang-*`, `java-*` | Backend — non serve per landing page statica |
| `deployment-patterns` | Deploy gestito dall'utente |
| `database-migrations`, `postgres-patterns`, `clickhouse-io` | Database — fuori scope |
| `linkedin-post-writer`, `articolo`, `banner-linkedin` | Social content — post-launch |
| `pedro-linkedin-pptx`, `pptx`, `pdf`, `xlsx`, `docx` | Document generation — fuori scope |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SPEC-01 | Phase 1 | Complete |
| SPEC-02 | Phase 1 | Complete |
| SPEC-03 | Phase 1 | Complete |
| SPEC-04 | Phase 1 | Complete |
| SPEC-05 | Phase 1 | Complete |
| SPEC-06 | Phase 1 | Complete |
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
| GEO-01 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-23*
*Last updated: 2026-05-23 — Traceability confirmed against ROADMAP.md (Phase 1: 6 reqs, Phase 2: 17 reqs, Phase 3: 5 reqs)*
