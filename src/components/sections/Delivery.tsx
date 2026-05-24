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
    <section aria-labelledby="delivery-heading" className="industrial-grid bg-ink-200 py-12 md:py-16 lg:py-20">
      <Container>
        <p className="mb-4 font-heading text-sm font-black text-ink-600">
          {isEN ? 'HOW IT GOES LIVE' : 'COME SI VA LIVE'}
        </p>
        <h2 id="delivery-heading" className="font-heading text-3xl font-black leading-[1.02] text-ink-950 md:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-ink-700">
          {subheadline}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-2 border-ink-900 bg-ink-50 p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center bg-ink-950 font-heading text-lg font-black text-signal-300">
                {step.number}
              </div>

              <div>
                <h3 className="font-heading text-xl font-black leading-snug text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">
                  {step.description}
                  {step.emphasisWord && (
                    <strong className="font-black text-ink-950">{step.emphasisWord}</strong>
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
