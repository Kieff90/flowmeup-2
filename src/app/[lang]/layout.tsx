import { locales } from '@/lib/i18n'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
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
      <body className="font-sans antialiased bg-white text-[#0a1628]">
        {children}
      </body>
    </html>
  )
}
