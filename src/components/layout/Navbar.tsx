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
      <nav aria-label="Main navigation" className="bg-navy-900 sticky top-0 z-50 h-16">
        <Container className="h-full flex items-center justify-between">
          <span className="text-white font-bold text-xl tracking-tight">Flowmeup</span>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <Button variant="secondary-on-dark" href="#contact">
              {ctaText}
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
