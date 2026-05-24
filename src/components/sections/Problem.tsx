'use client'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ProblemProps {
  dict: Record<string, unknown>
}

export function Problem({ dict }: ProblemProps) {
  const problem = dict.problem as Record<string, string> | undefined
  const headline = problem?.headline ?? ''
  const para1 = problem?.para1 ?? ''
  const para2 = problem?.para2 ?? ''
  const isEN = headline.startsWith('Every')

  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLDivElement>()

  return (
    <section aria-labelledby="problem-heading" className="industrial-grid bg-ink-100 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 font-heading text-sm font-black text-ink-600">
              {isEN ? 'THE REAL LEAK' : 'LA PERDITA REALE'}
            </p>
          <h2
            id="problem-heading"
            ref={headingRef}
              className="reveal font-heading text-3xl font-black leading-[1.02] text-ink-950 md:text-5xl"
          >
            {headline}
          </h2>
          </div>

          <div
            ref={bodyRef}
            className="reveal border-l-4 border-ink-950 bg-ink-50 px-5 py-6 md:px-8"
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-[18px] font-medium leading-relaxed text-ink-800 lg:text-xl">
              {para1}
            </p>

            <p className="mt-6 text-[18px] font-semibold leading-relaxed text-ink-950 lg:text-xl">
              {para2}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
