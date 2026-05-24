import { Container } from '@/components/ui/Container'
import type { Locale } from '@/types/i18n'

interface DeliveryStep {
  number: number
  title: string
  description: string
  emphasisWord?: string
}

interface DeliveryProps {
  dict: Record<string, unknown>
  lang: Locale
}

const stepsIT: DeliveryStep[] = [
  {
    number: 1,
    title: 'Mappa',
    description: 'Capire dove nascono attriti e dati dispersi',
  },
  {
    number: 2,
    title: 'Componi',
    description: 'Scegliere gli agenti utili adesso',
  },
  {
    number: 3,
    title: 'Collega',
    description: 'Integrare strumenti e dati esistenti',
  },
  {
    number: 4,
    title: 'Parti',
    description: 'Usare il primo agente con il team',
  },
]

const stepsEN: DeliveryStep[] = [
  {
    number: 1,
    title: 'Map',
    description: 'Find friction and scattered data',
  },
  {
    number: 2,
    title: 'Compose',
    description: 'Pick the agents that matter now',
  },
  {
    number: 3,
    title: 'Connect',
    description: 'Integrate current tools and data',
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Use the first agent with the team',
  },
]

export function Delivery({ dict, lang }: DeliveryProps) {
  const delivery = dict.delivery as Record<string, string> | undefined
  const isEN = lang === 'en'
  const headline =
    delivery?.headline ?? (isEN
      ? 'Live within one week.'
      : 'Raccontaci il tuo processo. Noi configuriamo. Sei operativo entro una settimana.')
  const subheadline =
    delivery?.subheadline ?? (isEN
      ? 'Done for you. Tell us how your team works. We configure everything.'
      : 'Done-for-you. Il tuo team non installa nulla e non segue nessun corso. Flowmeup si occupa di tutto.')
  const steps = isEN ? stepsEN : stepsIT

  return (
    <section id="delivery" aria-labelledby="delivery-heading" className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-sky-700/70">
          {isEN ? 'How it works' : 'Come funziona'}
        </p>
        <h2 id="delivery-heading" className="font-heading text-4xl font-black leading-[1] text-sky-950 md:text-6xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-sky-900/72">
          {subheadline}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[18px] border border-sky-100 bg-sky-50/70 p-5 shadow-[0_14px_40px_rgba(8,47,73,0.07)]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-sky-950 font-heading text-lg font-black text-lime-300">
                {step.number}
              </div>

              <div>
                <h3 className="font-heading text-xl font-black leading-snug text-sky-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-sky-900/70">
                  {step.description}
                  {step.emphasisWord && (
                    <strong className="font-black text-sky-950">{step.emphasisWord}</strong>
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
