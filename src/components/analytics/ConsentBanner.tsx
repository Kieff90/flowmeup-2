'use client'

import { useConsent } from '@/components/providers/ConsentProvider'

interface ConsentBannerProps {
  lang?: 'it' | 'en'
}

const copy = {
  it: {
    text: 'Usiamo cookie analitici per migliorare la tua esperienza di navigazione. Nessun dato viene venduto o condiviso con terze parti.',
    accept: 'Accetta',
    deny: 'Rifiuta',
    privacy: 'Informativa privacy',
  },
  en: {
    text: 'We use analytics cookies to improve your browsing experience. No data is sold or shared with third parties.',
    accept: 'Accept',
    deny: 'Decline',
    privacy: 'Privacy policy',
  },
}

export function ConsentBanner({ lang = 'it' }: ConsentBannerProps) {
  const { status, grant, deny } = useConsent()

  if (status !== 'unknown') return null

  const t = copy[lang]

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={lang === 'it' ? 'Banner consenso cookie' : 'Cookie consent banner'}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-sky-100 bg-white px-4 py-5 shadow-[0_-8px_30px_rgba(8,47,73,0.10)] md:bottom-6 md:left-6 md:right-auto md:max-w-sm md:rounded-2xl md:border md:border-sky-100"
    >
      <p className="mb-1 font-heading text-sm font-black text-sky-950">
        {lang === 'it' ? 'Cookie e Privacy' : 'Cookies & Privacy'}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-sky-800/70">
        {t.text}
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={grant}
          className="flex-1 rounded-full bg-lime-300 py-2 font-heading text-xs font-black uppercase tracking-widest text-sky-950 transition-transform hover:scale-105 active:scale-95"
        >
          {t.accept}
        </button>
        <button
          onClick={deny}
          className="flex-1 rounded-full border border-sky-200 py-2 font-heading text-xs font-black uppercase tracking-widest text-sky-700 transition-colors hover:border-sky-400"
        >
          {t.deny}
        </button>
      </div>
    </div>
  )
}

// Small link to re-open banner (used in Footer)
export function ConsentReset({ lang = 'it' }: { lang?: 'it' | 'en' }) {
  const { reset } = useConsent()
  return (
    <button
      onClick={reset}
      className="text-sky-400 text-xs hover:text-white transition-colors underline underline-offset-2"
    >
      {lang === 'it' ? 'Gestisci cookie' : 'Manage cookies'}
    </button>
  )
}
