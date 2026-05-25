import { locales } from '@/lib/i18n'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import { ConsentProvider } from '@/components/providers/ConsentProvider'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { ConsentBanner } from '@/components/analytics/ConsentBanner'
import '../globals.css'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!locales.includes(lang as Locale)) notFound()

  return (
    <html lang={lang}>
      <body className="font-sans antialiased bg-white text-sky-950">
        <ConsentProvider>
          <GoogleAnalytics />
          {children}
          <ConsentBanner lang={lang as Locale} />
        </ConsentProvider>
      </body>
    </html>
  )
}
