import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import type { Locale } from '@/types/i18n'

interface NavbarProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const navbar = dict.navbar as Record<string, string> | undefined
  const ctaText = navbar?.cta ?? 'Parliamo del tuo processo'

  return (
    <header>
      <nav aria-label="Main navigation" className="bg-ink-950 sticky top-0 z-50 h-16 border-b border-signal-400/70">
        <Container className="h-full flex items-center justify-between">
          <span className="font-heading text-ink-50 font-black text-xl tracking-normal">Flowmeup</span>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:block">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <div className="hidden sm:block">
              <Button variant="secondary-on-dark" href="#contact">
                {ctaText}
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
