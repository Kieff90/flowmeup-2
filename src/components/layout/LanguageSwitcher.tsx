'use client'

import Link from 'next/link'
import type { Locale } from '@/types/i18n'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 text-sm" aria-label="Language switcher">
      <Link
        href="/it"
        aria-current={currentLang === 'it' ? 'page' : undefined}
        className={
          currentLang === 'it'
            ? 'text-lime-300 font-bold underline underline-offset-4'
            : 'text-sky-300 hover:text-white transition-colors'
        }
      >
        IT
      </Link>
      <span className="text-sky-500" aria-hidden="true">|</span>
      <Link
        href="/en"
        aria-current={currentLang === 'en' ? 'page' : undefined}
        className={
          currentLang === 'en'
            ? 'text-lime-300 font-bold underline underline-offset-4'
            : 'text-sky-300 hover:text-white transition-colors'
        }
      >
        EN
      </Link>
    </div>
  )
}
