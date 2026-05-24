'use client'
import { FileSpreadsheet, MessageCircle, Send, Database, Wrench } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface SolutionProps {
  dict: Record<string, unknown>
}

export function Solution({ dict }: SolutionProps) {
  const solution = dict.solution as Record<string, string> | undefined
  const headline = solution?.headline ?? ''
  const body = solution?.body ?? ''
  const isEN = headline.startsWith('Pick')

  const headingRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLDivElement>()

  const platformIcons = [
    { Icon: MessageCircle, label: 'WhatsApp' },
    { Icon: Send,          label: 'Telegram' },
    { Icon: FileSpreadsheet, label: 'Excel' },
    { Icon: Database,      label: 'CRM' },
    { Icon: Wrench,        label: isEN ? 'Done for you' : 'Configurato per te' },
  ]

  return (
    <section aria-labelledby="solution-heading" className="bg-sky-50 py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-sky-700/70">
              {isEN ? 'WHAT CHANGES' : 'COSA CAMBIA'}
            </p>
          <h2
            id="solution-heading"
            ref={headingRef}
              className="reveal font-heading text-4xl font-black leading-[1] text-sky-950 md:text-6xl"
          >
            {headline}
          </h2>

            <p
              ref={bodyRef}
              className="reveal mt-6 max-w-3xl text-[18px] font-medium leading-relaxed text-sky-900/76 lg:text-xl"
              style={{ transitionDelay: '150ms' }}
            >
              {body}
            </p>
          </div>

          <div className="grid gap-3">
            {platformIcons.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-5 py-4 text-sky-950 shadow-[0_12px_35px_rgba(8,47,73,0.08)]">
                <Icon size={22} className="text-sky-700" aria-hidden="true" />
                <span className="font-heading text-base font-black">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
