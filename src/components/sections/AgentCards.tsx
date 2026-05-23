'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { AgentCard, type AgentData } from '@/components/ui/AgentCard'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { Locale } from '@/types/i18n'

const agentsIT: AgentData[] = [
  {
    name: 'Voice Lead',
    tagline: 'registra un lead in 90 secondi',
    badge: 'live',
    beforeValue: '~30 min',
    afterValue: '90 sec',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Manda una nota vocale. Il lead è nel tuo sistema.',
    description:
      'Il commerciale dice "Ho incontrato Bianchi Costruzioni, interessati al prodotto X, richiamare tra due settimane." L\'agente trascrive, estrae i dati, aggiorna il record. Conferma in 30 secondi.',
  },
  {
    name: 'Lead Scout',
    tagline: 'trova nuovi prospect in 30 minuti',
    badge: 'live',
    beforeValue: '~1 giorno',
    afterValue: '30 min',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Scrivi cosa cerchi. Ricevi la lista.',
    description:
      '"Aziende in Lombardia che fanno serramenti, 20-100 dipendenti." L\'agente restituisce una lista di prospect qualificati, con ragione sociale, settore, località e contatti disponibili. Già filtrata per escludere i clienti che hai.',
  },
  {
    name: 'Pre-Call Brief',
    tagline: 'preparati in 30 secondi',
    badge: 'coming-soon',
    beforeValue: '15-20 min',
    afterValue: '30 sec',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Chiedi cosa sai su un cliente. Ricevi il brief.',
    description:
      '"Cosa so di Rossi?" L\'agente restituisce: ultimo contatto, offerte aperte, chi lo segue, note recenti. Senza scavare tra le email.',
  },
  {
    name: 'Follow-Up Radar',
    tagline: 'nessun lead si raffredda in silenzio',
    badge: 'coming-soon',
    beforeValue: 'Deal silenzioso',
    afterValue: 'Alert mattutino',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Automatico ogni mattina. O su richiesta.',
    description:
      "L'agente gira ogni giorno e ti manda la lista dei lead che non senti da più di 7 giorni. Non serve fare nulla di diverso: legge i dati che hai già.",
  },
]

const agentsEN: AgentData[] = [
  {
    name: 'Voice Lead',
    tagline: 'log a lead in 90 seconds',
    badge: 'live',
    beforeValue: '~30 minutes',
    afterValue: '90 seconds',
    beforeLabel: 'Before',
    afterLabel: 'After',
    trigger: 'Send a voice note. The lead is in your system.',
    description:
      'Your rep says "Met Bianchi Construction today, interested in product X, follow up in two weeks." The agent transcribes, extracts the fields, updates the record. Confirmation in 30 seconds.',
  },
  {
    name: 'Lead Scout',
    tagline: 'find new prospects in 30 minutes',
    badge: 'live',
    beforeValue: '~1 day',
    afterValue: '30 minutes',
    beforeLabel: 'Before',
    afterLabel: 'After',
    trigger: 'Describe what you\'re looking for. Get the list.',
    description:
      '"Construction companies in Northern Italy, 20-100 employees, commercial fit-outs." The agent returns a qualified prospect list with company name, sector, location, and available contact info. Already filtered to exclude companies you have.',
  },
  {
    name: 'Pre-Call Brief',
    tagline: 'get ready in 30 seconds',
    badge: 'coming-soon',
    beforeValue: '15-20 minutes',
    afterValue: '30 seconds',
    beforeLabel: 'Before',
    afterLabel: 'After',
    trigger: 'Ask what you know about a client. Get the brief.',
    description:
      '"What do we know about Rossi?" The agent returns: last contact, open offers, who\'s following them, recent notes. No email archaeology.',
  },
  {
    name: 'Follow-Up Radar',
    tagline: 'no lead goes cold silently',
    badge: 'coming-soon',
    beforeValue: 'Deals die silently',
    afterValue: 'Morning alert',
    beforeLabel: 'Before',
    afterLabel: 'After',
    trigger: 'Automatic every morning. Or on demand.',
    description:
      'The agent runs daily and sends you the list of leads you haven\'t contacted in more than 7 days. Nothing extra to do: it reads data you already have.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] } },
}

interface AgentCardsProps {
  lang?: Locale
  dict?: Record<string, unknown>
}

export function AgentCards({ lang = 'it', dict }: AgentCardsProps) {
  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, amount: 0.15 })

  const agents = lang === 'en' ? agentsEN : agentsIT
  const agentsDict = dict?.agents as Record<string, string> | undefined
  const headline = agentsDict?.headline ?? (lang === 'en' ? 'The Flowmeup agents' : 'Gli agenti Flowmeup')
  const subheadline = agentsDict?.subheadline ?? (lang === 'en'
    ? 'Live now or coming soon. Each one solves a specific sales process.'
    : 'Attivi subito o in arrivo. Ognuno risolve un processo commerciale specifico.')

  return (
    <section aria-labelledby="agents-heading" className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="text-center mb-8">
          <h2
            id="agents-heading"
            ref={headingRef}
            className="reveal text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2]"
          >
            {headline}
          </h2>
          <p className="text-base text-slate-600 mt-3">{subheadline}</p>
        </div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {agents.map((agent) => (
            <motion.div key={agent.name} variants={cardVariants}>
              <AgentCard {...agent} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
