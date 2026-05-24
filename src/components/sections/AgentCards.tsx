'use client'

import { Mic2, UserSearch, ClipboardList, AlarmClock } from 'lucide-react'
import { AgentCard, type AgentData } from '@/components/ui/AgentCard'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { Locale } from '@/types/i18n'

const agentsIT: AgentData[] = [
  {
    name: 'Nota Lead',
    tagline: 'Registra un lead in 90 secondi con la voce.',
    trigger: 'Manda una nota vocale. Il lead è nel tuo CRM.',
    description:
      'Il commerciale dice "Ho incontrato Bianchi Costruzioni, interessati al prodotto X, richiamare tra due settimane." L\'agente trascrive, estrae i dati, aggiorna il record nel CRM. Conferma in 30 secondi.',
    Icon: Mic2,
  },
  {
    name: 'Cerca Prospect',
    tagline: 'Trova prospect qualificati in 30 minuti.',
    trigger: 'Scrivi cosa cerchi. Ricevi la lista.',
    description:
      '"Aziende in Lombardia che fanno serramenti, 20-100 dipendenti." L\'agente restituisce una lista di prospect qualificati con ragione sociale, settore, località e contatti. Già filtrata per escludere i tuoi clienti.',
    Icon: UserSearch,
  },
  {
    name: 'Brief Cliente',
    tagline: 'Preparati su un cliente in 30 secondi.',
    trigger: 'Chiedi cosa sai su un cliente. Ricevi il brief.',
    description:
      '"Cosa so di Rossi?" L\'agente restituisce: ultimo contatto, offerte aperte, chi lo segue, note recenti. Senza scavare tra email o CRM.',
    Icon: ClipboardList,
  },
  {
    name: 'Radar Commerciale',
    tagline: 'Nessun lead si raffredda in silenzio.',
    trigger: 'Automatico ogni mattina. O su richiesta.',
    description:
      "L'agente gira ogni giorno e ti manda la lista dei lead che non senti da più di 7 giorni. Non serve fare nulla di diverso: legge i dati che hai già.",
    Icon: AlarmClock,
  },
]

const agentsEN: AgentData[] = [
  {
    name: 'Voice Lead',
    tagline: 'Log a lead in 90 seconds with your voice.',
    trigger: 'Send a voice note. The lead is in your CRM.',
    description:
      'Your rep says "Met Bianchi Construction today, interested in product X, follow up in two weeks." The agent transcribes, extracts the fields, updates the CRM record. Confirmation in 30 seconds.',
    Icon: Mic2,
  },
  {
    name: 'Lead Scout',
    tagline: 'Find qualified prospects in 30 minutes.',
    trigger: "Describe what you're looking for. Get the list.",
    description:
      '"Construction companies in Northern Italy, 20-100 employees." The agent returns a qualified prospect list with company name, sector, location, and contact info. Already filtered to exclude your existing clients.',
    Icon: UserSearch,
  },
  {
    name: 'Client Brief',
    tagline: 'Get ready on a client in 30 seconds.',
    trigger: 'Ask what you know about a client. Get the brief.',
    description:
      '"What do we know about Rossi?" The agent returns: last contact, open offers, who\'s following them, recent notes. No email or CRM archaeology.',
    Icon: ClipboardList,
  },
  {
    name: 'Sales Radar',
    tagline: 'No lead goes cold silently.',
    trigger: 'Automatic every morning. Or on demand.',
    description:
      "The agent runs daily and sends you the list of leads you haven't contacted in more than 7 days. Nothing extra to do: it reads data you already have.",
    Icon: AlarmClock,
  },
]

interface AgentCardsProps {
  lang?: Locale
  dict?: Record<string, unknown>
}

export function AgentCards({ lang = 'it', dict }: AgentCardsProps) {
  const headingRef = useScrollReveal<HTMLHeadingElement>()

  const agents = lang === 'en' ? agentsEN : agentsIT
  const agentsDict  = dict?.agents as Record<string, string> | undefined
  const headline    = agentsDict?.headline    ?? (lang === 'en' ? 'Four agents. One sales process without friction.' : 'Quattro agenti. Un processo sales senza intoppi.')
  const subheadline = agentsDict?.subheadline ?? (lang === 'en' ? 'Activate one at a time. Or all together.'       : 'Attivali uno alla volta. O tutti insieme.')

  return (
    <section id="agents" aria-labelledby="agents-heading" className="bg-sky-50 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mb-10 max-w-2xl">
          <h2
            id="agents-heading"
            ref={headingRef}
            className="reveal font-heading text-3xl font-black leading-[1.02] text-sky-950 md:text-5xl"
          >
            {headline}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-sky-950/60">
            {subheadline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} {...agent} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-dashed border-sky-200 bg-sky-50 px-6 py-5">
          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-100">
            <span className="text-base leading-none">✦</span>
          </div>
          <div>
            <p className="font-heading text-base font-black text-sky-950">
              {lang === 'en' ? 'Need something specific?' : 'Hai un\'esigenza specifica?'}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-sky-950/60">
              {lang === 'en'
                ? 'We also build custom agents tailored to your sales process. Contact us to find out how.'
                : 'Costruiamo anche agenti custom su misura per il tuo processo. Scrivici per scoprire come.'}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
