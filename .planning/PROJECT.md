# Flowmeup Sales Agents

## What This Is

Landing page e go-to-market per Flowmeup Sales Agents: una suite di agenti AI specializzati per sales rep di PMI italiane (10–100 dipendenti). Ogni agente risolve un processo commerciale specifico tramite WhatsApp/Telegram, senza installazioni e senza cambiare i workflow esistenti. La landing page è il primo punto di contatto con i potenziali clienti — titolari e responsabili commerciali di settori ad alta intensità di vendita sul campo.

## Core Value

Un commerciale registra un lead in 90 secondi dal telefono mentre guida — senza aprire nessun tool, senza cambiare nessuna abitudine.

## Requirements

### Validated

- ✓ Voice Lead agent funzionante (LIVE) — registra/aggiorna lead via voice note o testo
- ✓ Lead Scout agent funzionante (LIVE) — trova prospect tramite query in linguaggio naturale
- ✓ AREX shared context layer — tutti gli agenti condividono la stessa memoria aziendale
- ✓ Delivery model done-for-you — setup in 1 settimana, onboarding 30 min

### Active

- [ ] Spec & concept document completo e approvato (inclusa struttura landing, pricing, copy IT/EN)
- [ ] Identificazione e documentazione skill di sviluppo disponibili (UI/UX, animazione, landing page)
- [ ] Landing page IT + EN live: hero, problem, solution, 4 agent cards, differentiator, delivery, pricing, CTA
- [ ] Design system definito (colori, tipografia, stile per B2B Italian SMB)
- [ ] Copy IT approvato per tutte le sezioni
- [ ] Copy EN approvato per tutte le sezioni
- [ ] Form di contatto + link calendario integrato
- [ ] SEO base (meta tag, schema markup, Open Graph) per IT e EN
- [ ] Deploy su dominio definitivo

### Out of Scope

- CRM dashboard o UI di gestione — il prodotto si usa via messaging app, non via web
- Demo interattiva degli agenti sulla landing — troppo complessa per v1, video è più efficace
- Blog / content hub — focus v1 sulla conversione, non sull'acquisition organica
- App mobile — web-first
- Self-serve onboarding — il modello è done-for-you

## Context

**Prodotto esistente:** Voice Lead e Lead Scout sono già live. Pre-Call Brief e Follow-Up Radar sono in roadmap (proposed). La landing deve mostrare tutti e 4, marcando chiaramente live vs "coming soon".

**Target buyer:** Titolare o responsabile commerciale di PMI italiana, 10–100 dipendenti, settori costruzione/manifattura/distribuzione B2B. Non è tech-savvy, usa WhatsApp per il business, ha "CRM" = Excel o niente.

**Messaggio chiave:** Non è un chatbot. Non è un CRM AI. È un agente che parla con il tuo team e salva dove salvi già tu. La differenza è la memoria condivisa (AREX) — quello che registra il commerciale oggi, il titolare lo vede stasera.

**Cosa NON dire:** chatbot, AREX, contesto persistente, piattaforma modulare, CRM AI-powered, intelligenza artificiale (generico).

**Copy già definito:** Spec section 9 contiene headline IT/EN per ogni sezione della landing.

**Open decisions da risolvere in Fase 1:**
- Mostrare 2 o 4 agenti sulla landing
- Validazione pricing (5 discovery call prima di pubblicare)
- Demo video (60 sec) — asset più convertente, to create
- Canale di acquisition post-landing

## Constraints

- **Lingua**: IT (primary) + EN (identical structure, adapted copy — not translation)
- **Tech stack**: da definire in Fase 2 (probabilmente Next.js + Tailwind o HTML/Tailwind per semplicità)
- **Tempo al live**: target 1 settimana dal contratto per il prodotto; per la landing, nessun deadline rigido ma priorità alta
- **No self-serve**: il CTA porta a form + calendario, non a un trial
- **Pricing già definito**: €300 setup + €49–99/month per agent, discount bundle 10-20%

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Done-for-you delivery | PMI italiane <100 dipendenti non hanno IT interno | — Pending |
| 4 agenti separati (non suite unica) | Cliente attiva solo quello che serve, prezzo trasparente | — Pending |
| Mostrare 2 vs 4 agenti sulla landing | 4 dà completezza; 2 live dà credibilità immediate | — Pending |
| Stack landing page | Semplicità deploy vs performance animations | — Pending |

---
*Last updated: 2026-05-23 after initialization from spec.md v1.0*
