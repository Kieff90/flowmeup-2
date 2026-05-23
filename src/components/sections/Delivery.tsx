import { Container } from '@/components/ui/Container'

interface DeliveryStep {
  number: number
  title: string
  description: string
  emphasisWord?: string
}

interface DeliveryProps {
  dict: Record<string, unknown>
}

const stepsIT: DeliveryStep[] = [
  {
    number: 1,
    title: 'Chiamata 30 min',
    description: 'Descrivi come lavora il tuo team',
  },
  {
    number: 2,
    title: 'Configurazione',
    description: 'Noi configuriamo gli agenti',
  },
  {
    number: 3,
    title: 'Onboarding team',
    description: '30 minuti per il tuo team',
  },
  {
    number: 4,
    title: 'Operativo',
    description: 'Dal contratto al primo agente: ',
    emphasisWord: 'una settimana',
  },
]

const stepsEN: DeliveryStep[] = [
  {
    number: 1,
    title: '30-min call',
    description: 'Tell us how your team operates',
  },
  {
    number: 2,
    title: 'Configuration',
    description: 'We configure the agents',
  },
  {
    number: 3,
    title: 'Team onboarding',
    description: '30 minutes for your team',
  },
  {
    number: 4,
    title: 'Live',
    description: 'From signed contract to first agent: ',
    emphasisWord: 'one week',
  },
]

export function Delivery({ dict }: DeliveryProps) {
  const delivery = dict.delivery as Record<string, string> | undefined
  const headline =
    delivery?.headline ?? 'Raccontaci il tuo processo. Noi configuriamo. Sei operativo entro una settimana.'
  const subheadline =
    delivery?.subheadline ?? 'Done-for-you. Il tuo team non installa nulla e non segue nessun corso. Flowmeup si occupa di tutto.'

  // Determine language from dictionary content
  const isEN = typeof delivery?.headline === 'string' && delivery.headline.includes('Tell us')
  const steps = isEN ? stepsEN : stepsIT

  return (
    <section aria-labelledby="delivery-heading" className="bg-slate-100 py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="delivery-heading" className="reveal text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2]">
          {headline}
        </h2>
        <p className="text-base lg:text-lg text-slate-600 mt-3 mb-10">
          {subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {steps.map((step) => (
            <div key={step.number} className="reveal flex flex-col items-start gap-3">
              {/* Step number circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-900 text-white font-bold text-base flex-shrink-0">
                {step.number}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {step.description}
                  {step.emphasisWord && (
                    <strong className="font-bold text-slate-800">{step.emphasisWord}</strong>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
