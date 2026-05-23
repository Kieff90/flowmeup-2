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

  return (
    <section aria-labelledby="hero-heading" className="bg-navy-900 min-h-[480px] md:min-h-[560px] flex items-center py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          {/* H1 is NOT animated — SPEC-02 locked decision: headline must be immediately visible */}
          <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-navy-300 font-normal leading-relaxed max-w-2xl mb-10">
            {subheadline}
          </p>

          {/* CTA gets a fade-in entrance: 200ms delay, CSS animation only */}
          <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
            <Button variant="primary" href="#contact" fullWidth={false}>
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
