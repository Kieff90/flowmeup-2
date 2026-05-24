'use client'
import { FileSpreadsheet, MessageCircle, Wrench } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface SolutionProps {
  dict: Record<string, unknown>
}

const icons = [
  { Icon: MessageCircle, label: 'WhatsApp' },
  { Icon: FileSpreadsheet, label: 'Excel' },
  { Icon: Wrench, label: 'Done-for-you' },
]

export function Solution({ dict }: SolutionProps) {
  const solution = dict.solution as Record<string, string> | undefined
  const headline = solution?.headline ?? ''
  const body = solution?.body ?? ''
  const isEN = headline.startsWith('AI')

  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLDivElement>()

  return (
    <section aria-labelledby="solution-heading" className="bg-ink-950 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 font-heading text-sm font-black text-signal-300">
              {isEN ? 'WHAT CHANGES' : 'COSA CAMBIA'}
            </p>
          <h2
            id="solution-heading"
            ref={headingRef}
              className="reveal font-heading text-3xl font-black leading-[1.02] text-ink-50 md:text-5xl"
          >
            {headline}
          </h2>

            <p
              ref={bodyRef}
              className="reveal mt-6 max-w-3xl text-[18px] font-medium leading-relaxed text-ink-200 lg:text-xl"
              style={{ transitionDelay: '150ms' }}
            >
              {body}
            </p>
          </div>

          <div className="grid gap-3">
              {icons.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 border border-ink-50/20 px-4 py-4 text-ink-50">
                <Icon size={22} className="text-signal-300" aria-hidden="true" />
                <span className="font-heading text-base font-black">{label}</span>
                </div>
              ))}
            </div>
        </div>
      </Container>
    </section>
  )
}
