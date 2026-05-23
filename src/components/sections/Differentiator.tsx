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

  return (
    <section aria-labelledby="differentiator-heading" className="bg-[#0F2349] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 text-left md:text-center">
        <h2
          id="differentiator-heading"
          ref={headingRef}
          className="text-2xl md:text-3xl font-bold text-white leading-[1.2] reveal"
        >
          {headline}
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-navy-300 leading-relaxed mt-4 max-w-3xl md:mx-auto reveal"
          style={{ transitionDelay: '300ms' }}
        >
          {body}
        </p>
      </div>
    </section>
  )
}
