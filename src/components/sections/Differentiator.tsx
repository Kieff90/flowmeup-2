'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Section 5: Differentiator — shared memory
// Copy from COPY-BRIEF-IT.md Section 5 (IT default).
// Wave 3 will wire locale-aware dict props.
//
// {/* TODO v2: minimal agent→memory diagram */}

export function Differentiator() {
  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>()

  return (
    <section className="bg-[#0F2349] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 text-left md:text-center">
        <h2
          ref={headingRef}
          className="text-2xl md:text-3xl font-bold text-white leading-[1.2] reveal"
        >
          Quello che registra il commerciale oggi, il titolare lo vede stasera.
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-navy-300 leading-relaxed mt-4 max-w-3xl md:mx-auto reveal"
          style={{ transitionDelay: '300ms' }}
        >
          Tutti gli agenti lavorano sulla stessa memoria. Quando Marco registra
          Bianchi Costruzioni con Voice Lead, la sera il titolare può chiedere
          &ldquo;cosa sappiamo di Bianchi?&rdquo; e avere la risposta completa.
          Nessun re-briefing, nessun &ldquo;chiedilo a Mario&rdquo;, nessun
          copia-incolla tra fogli diversi. Il dato entra una volta e resta
          disponibile per tutto il team.
        </p>
      </div>
    </section>
  )
}
