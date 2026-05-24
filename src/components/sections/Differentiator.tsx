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
  const isEN = headline.startsWith('What')

  return (
    <section aria-labelledby="differentiator-heading" className="bg-signal-400 py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 font-heading text-sm font-black text-ink-800">
            {isEN ? 'THE MULTIPLIER' : 'IL MOLTIPLICATORE'}
          </p>
          <h2
            id="differentiator-heading"
            ref={headingRef}
            className="reveal font-heading text-3xl font-black leading-[1.02] text-ink-950 md:text-5xl"
          >
            {headline}
          </h2>
        </div>

        <div
          ref={bodyRef}
          className="reveal border-l-4 border-ink-950 pl-6 text-xl font-semibold leading-relaxed text-ink-900"
          style={{ transitionDelay: '300ms' }}
        >
          <p>{body}</p>
        </div>
      </div>
    </section>
  )
}
