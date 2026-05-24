import type { Locale } from '@/types/i18n'
import { getDict } from '@/lib/i18n'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { AgentCards } from '@/components/sections/AgentCards'
import { Differentiator } from '@/components/sections/Differentiator'
import { Delivery } from '@/components/sections/Delivery'
import { Pricing } from '@/components/sections/Pricing'
import { ContactForm } from '@/components/sections/ContactForm'

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
        <Hero dict={dict} lang={lang} />
        <Problem dict={dict} lang={lang} />
        <Solution dict={dict} lang={lang} />
        <AgentCards lang={lang} dict={dict} />
        <Differentiator dict={dict} lang={lang} />
        <Delivery dict={dict} lang={lang} />
        <Pricing dict={dict} lang={lang} />
        <ContactForm dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} />
    </>
  )
}
