import { Container } from '@/components/ui/Container'

interface ProblemProps {
  dict: Record<string, unknown>
}

export function Problem({ dict }: ProblemProps) {
  const problem = dict.problem as Record<string, string> | undefined
  const headline = problem?.headline ?? ''
  const para1 = problem?.para1 ?? ''
  const para2 = problem?.para2 ?? ''

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          {/* .reveal class is a static placeholder — Framer Motion wiring in Wave 3 */}
          <h2 className="reveal text-2xl md:text-3xl font-bold text-slate-800 leading-[1.2] mb-8">
            {headline}
          </h2>

          <p className="text-[17px] lg:text-lg text-slate-700 leading-relaxed mb-6">
            {para1}
          </p>

          <p className="text-[17px] lg:text-lg text-slate-700 leading-relaxed">
            {para2}
          </p>
        </div>
      </Container>
    </section>
  )
}
