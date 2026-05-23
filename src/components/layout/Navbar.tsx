import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/types/i18n'

interface NavbarProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const navbar = dict.navbar as Record<string, string> | undefined
  const ctaText = navbar?.cta ?? 'Parliamo del tuo processo'

  return (
    <nav className="bg-navy-900 sticky top-0 z-50 h-16">
      <Container className="h-full flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tight">Flowmeup</span>

        <div className="flex items-center gap-6">
          {/* Language switcher placeholder — full switcher in Wave 3 */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-navy-300">
            <a
              href="/it"
              className={`transition-colors hover:text-white ${lang === 'it' ? 'font-bold text-white underline' : ''}`}
            >
              IT
            </a>
            <span className="text-navy-400">|</span>
            <a
              href="/en"
              className={`transition-colors hover:text-white ${lang === 'en' ? 'font-bold text-white underline' : ''}`}
            >
              EN
            </a>
          </div>

          <Button variant="secondary-on-dark" href="#contact">
            {ctaText}
          </Button>
        </div>
      </Container>
    </nav>
  )
}
