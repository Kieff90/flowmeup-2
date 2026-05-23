import { MessageCircle, FileSpreadsheet, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface SolutionProps {
  dict: Record<string, unknown>
}

const icons = [
  { Icon: MessageCircle, label: 'WhatsApp' },
  { Icon: FileSpreadsheet, label: 'Excel' },
  { Icon: Calendar, label: 'Calendar' },
]

export function Solution({ dict }: SolutionProps) {
  const solution = dict.solution as Record<string, string> | undefined
  const headline = solution?.headline ?? ''
  const body = solution?.body ?? ''

  return (
    <section className="bg-slate-100 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          {/* .reveal class is a static placeholder — Framer Motion wiring in Wave 3 */}
          <h2 className="reveal text-2xl md:text-3xl font-bold text-slate-800 leading-[1.2] mb-6">
            {headline}
          </h2>

          <p className="text-[17px] lg:text-lg text-slate-700 leading-relaxed mb-8">
            {body}
          </p>

          {/* Inline tool icons — lightweight, no images */}
          <div className="flex items-center gap-6">
            {icons.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-600">
                <Icon size={20} className="text-amber-500" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
