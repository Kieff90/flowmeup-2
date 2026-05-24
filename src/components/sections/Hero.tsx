import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  dict: Record<string, unknown>
}

export function Hero({ dict }: HeroProps) {
  const hero = dict.hero as Record<string, string> | undefined
  const headline = hero?.headline ?? ''
  const subheadline = hero?.subheadline ?? ''
  const cta = hero?.cta ?? 'Parliamo del tuo processo'
  const isEN = headline.startsWith('Your')
  const kicker = hero?.kicker ?? (isEN ? 'For field sales teams' : 'Per commerciali in campo')
  const proof = isEN
    ? ['90 sec voice lead', 'No app to install', 'Excel stays alive']
    : ['Lead vocale in 90 sec', 'Zero app da installare', 'Excel resta al suo posto']

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100svh-112px)] overflow-hidden bg-ink-950"
    >
      <Image
        src="/images/field-sales-voice-lead.png"
        alt={isEN ? 'Field sales rep recording a voice note from a work van' : 'Commerciale sul campo che registra una nota vocale dal furgone'}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,10,6,0.96)_0%,rgba(13,10,6,0.78)_42%,rgba(13,10,6,0.22)_78%,rgba(13,10,6,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-signal-400" />

      <Container className="relative z-10 flex min-h-[calc(100svh-112px)] items-center py-10 md:py-14">
        <div className="max-w-[760px]">
          <p className="mb-5 inline-block bg-signal-400 px-3 py-1 font-heading text-sm font-black text-ink-950">
            {kicker}
          </p>

          <h1 id="hero-heading" className="font-heading text-[42px] font-black leading-[0.98] text-ink-50 md:text-6xl lg:text-7xl">
            {headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-ink-200 md:text-xl">
            {subheadline}
          </p>

          <div className="mt-8 opacity-0 animate-fade-in [animation-delay:200ms]">
            <Button variant="primary" href="#contact" fullWidth={false}>
              {cta}
            </Button>
          </div>

          <dl className="mt-10 hidden max-w-2xl grid-cols-1 gap-3 border-t border-ink-50/25 pt-5 sm:grid sm:grid-cols-3">
            {proof.map((item) => {
              const [strong, ...rest] = item.split(' ')
              return (
                <div key={item}>
                  <dt className="sr-only">{isEN ? 'Proof point' : 'Prova'}</dt>
                  <dd className="font-heading text-base font-black text-ink-50">
                    <span className="text-signal-300">{strong}</span>{' '}
                    <span>{rest.join(' ')}</span>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </Container>
    </section>
  )
}
