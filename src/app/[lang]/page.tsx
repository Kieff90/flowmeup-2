import type { Locale } from '@/types/i18n'
import { getDict } from '@/lib/i18n'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { AgentCards } from '@/components/sections/AgentCards'
import { Differentiator } from '@/components/sections/Differentiator'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDict(lang)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Solution dict={dict} />
        <AgentCards />
        <Differentiator />
      </main>
      <Footer dict={dict} />
    </>
  )
}
