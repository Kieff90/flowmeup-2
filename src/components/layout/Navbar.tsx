import { Globe } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Locale } from '@/types/i18n'

interface NavbarProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const navbar = dict.navbar as Record<string, unknown> | undefined
  const links = navbar?.links as Record<string, string> | undefined
  const ctaText = (navbar?.cta as string) ?? (lang === 'it' ? 'Parliamo' : "Let's talk")
  const isIT = lang === 'it'

  const navLinks = [
    { label: links?.about      ?? (isIT ? 'Chi siamo'      : 'About'),        href: '#problem'  },
    { label: links?.agents     ?? (isIT ? 'Agenti'         : 'Agents'),       href: '#agents'   },
    { label: links?.howItWorks ?? (isIT ? 'Come funziona'  : 'How it works'), href: '#solution' },
    { label: links?.contact    ?? (isIT ? 'Contatti'       : 'Contact'),      href: '#contact'  },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav aria-label="Main navigation" className="flex h-16 items-center justify-between gap-6">
          <a
            href={`/${lang}`}
            className="font-heading text-xl font-black tracking-tight text-sky-950"
          >
            Flowmeup
          </a>

          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-heading text-[11px] font-black uppercase tracking-[0.14em] text-sky-950/60 transition-colors hover:text-sky-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5" aria-label="Language switcher">
              <Globe size={13} className="hidden text-sky-950/40 md:block" aria-hidden="true" />
              <a
                href="/it"
                className={[
                  'font-heading text-[11px] font-black transition-colors',
                  lang === 'it' ? 'text-sky-950' : 'text-sky-950/35 hover:text-sky-950',
                ].join(' ')}
                aria-current={lang === 'it' ? 'true' : undefined}
              >
                IT
              </a>
              <span className="text-sky-950/20" aria-hidden="true">/</span>
              <a
                href="/en"
                className={[
                  'font-heading text-[11px] font-black transition-colors',
                  lang === 'en' ? 'text-sky-950' : 'text-sky-950/35 hover:text-sky-950',
                ].join(' ')}
                aria-current={lang === 'en' ? 'true' : undefined}
              >
                EN
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-lime-300 px-5 py-2 font-heading text-[11px] font-black uppercase tracking-[0.14em] text-sky-950 transition-transform hover:scale-105 active:scale-95"
            >
              {ctaText}
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
