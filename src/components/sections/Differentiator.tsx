'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// {/* TODO v2: minimal agent→memory diagram */}

import type { Locale } from '@/types/i18n'

interface DifferentiatorProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function Differentiator({ dict, lang }: DifferentiatorProps) {
  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>()

  const d = dict.differentiator as Record<string, string> | undefined
  const headline = d?.headline ?? (lang === 'en'
    ? 'What the team knows, Flowmeup knows.'
    : 'Tutto quello che sa il team, lo sa anche Flowmeup.')
  const body = d?.body ?? (lang === 'en'
    ? 'All agents share the same company memory. A lead logged today is available to the whole team in real time, whether Marco added it from his phone or Giulia from the CRM. No re-briefing, no copy-pasting, no parallel spreadsheets.'
    : 'Gli agenti condividono la stessa memoria aziendale. Un lead registrato oggi è disponibile a tutto il team in tempo reale, che lo inserisca Marco dal telefono o Giulia dal CRM. Nessun re-briefing, nessun copia-incolla, nessun foglio parallelo.')
  const isEN = lang === 'en'

  return (
    <section aria-labelledby="differentiator-heading" className="bg-lime-300 py-14 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-sky-900/70">
            {isEN ? 'The multiplier' : 'Il moltiplicatore'}
          </p>
          <h2
            id="differentiator-heading"
            ref={headingRef}
            className="reveal font-heading text-4xl font-black leading-[1] text-sky-950 md:text-6xl"
          >
            {headline}
          </h2>
        </div>

        <div
          ref={bodyRef}
          className="reveal rounded-[24px] bg-white/72 p-6 shadow-[0_18px_50px_rgba(8,47,73,0.12)]"
          style={{ transitionDelay: '300ms' }}
        >
          <p className="mb-4 inline-block rounded-full bg-sky-950 px-4 py-1.5 font-heading text-sm font-black text-lime-300">
            {isEN ? 'Real-time, available to the whole team in seconds' : 'In tempo reale, disponibile a tutto il team in pochi secondi'}
          </p>
          <p className="text-xl font-semibold leading-relaxed text-sky-950">{body}</p>
        </div>
      </div>
    </section>
  )
}
