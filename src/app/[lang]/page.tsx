import type { Locale } from '@/types/i18n'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  return (
    <main>
      <p className="p-8 text-navy-900 font-bold">
        Flowmeup — {lang.toUpperCase()} — scaffold ready
      </p>
    </main>
  )
}
