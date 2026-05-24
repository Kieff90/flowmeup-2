'use client'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'

import type { Locale } from '@/types/i18n'

interface ProblemProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function Problem({ dict, lang }: ProblemProps) {
  const problem = dict.problem as Record<string, string> | undefined
  const headline = problem?.headline ?? ''
  const para1 = problem?.para1 ?? ''
  const para2 = problem?.para2 ?? ''
  const isEN = lang === 'en'

  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLDivElement>()

  return (
    <section aria-labelledby="problem-heading" className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-sky-700/70">
              {isEN ? 'Why it matters' : 'Perché conta'}
            </p>
          <h2
            id="problem-heading"
            ref={headingRef}
              className="reveal font-heading text-4xl font-black leading-[1] text-sky-950 md:text-6xl"
          >
            {headline}
          </h2>
          </div>

          <div
            ref={bodyRef}
            className="reveal rounded-[24px] border border-sky-100 bg-sky-50/70 px-5 py-6 shadow-[0_16px_50px_rgba(8,47,73,0.07)] md:px-8"
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-[18px] font-medium leading-relaxed text-sky-900/78 lg:text-xl">
              {para1}
            </p>

            <p className="mt-5 text-[18px] font-semibold leading-relaxed text-sky-950 lg:text-xl">
              {para2}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
