'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// {/* TODO v2: minimal agent→memory diagram */}

interface DifferentiatorProps {
  dict: Record<string, unknown>
}

export function Differentiator({ dict }: DifferentiatorProps) {
  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>()

  const d = dict.differentiator as Record<string, string> | undefined
  const headline = d?.headline ?? 'Quello che registra il commerciale oggi, il titolare lo vede stasera.'
  const body = d?.body ?? 'Tutti gli agenti lavorano sulla stessa memoria. Quando Marco registra Bianchi Costruzioni con Voice Lead, la sera il titolare può chiedere "cosa sappiamo di Bianchi?" e avere la risposta completa. Nessun re-briefing, nessun "chiedilo a Mario", nessun copia-incolla tra fogli diversi. Il dato entra una volta e resta disponibile per tutto il team.'
  const isEN = headline.startsWith('Shared')

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
