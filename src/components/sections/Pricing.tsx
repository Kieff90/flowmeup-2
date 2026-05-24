import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface AgentRow {
  name: string
  price: string
  status: 'live' | 'coming-soon'
}

interface PricingProps {
  dict: Record<string, unknown>
  lang: string
}

const agentsIT: AgentRow[] = [
  { name: 'Voice Lead', price: '€59/mese', status: 'live' },
  { name: 'Lead Scout', price: '€99/mese', status: 'live' },
  { name: 'Pre-Call Brief', price: '€69/mese', status: 'coming-soon' },
  { name: 'Follow-Up Radar', price: '€49/mese', status: 'coming-soon' },
]

const agentsEN: AgentRow[] = [
  { name: 'Voice Lead', price: '€59/month', status: 'live' },
  { name: 'Lead Scout', price: '€99/month', status: 'live' },
  { name: 'Pre-Call Brief', price: '€69/month', status: 'coming-soon' },
  { name: 'Follow-Up Radar', price: '€49/month', status: 'coming-soon' },
]

export function Pricing({ dict, lang }: PricingProps) {
  const pricing = dict.pricing as Record<string, string> | undefined
  const isEN = lang === 'en'

  const headline = pricing?.headline ?? (isEN ? 'Clear pricing. You pay only for what you use.' : 'Prezzi chiari. Paghi solo quello che usi.')
  const setupLine = pricing?.setup ?? (isEN
    ? 'One-time setup fee: €300 — covers configuration, integration with your data store, and team onboarding.'
    : 'Setup una tantum: €300 — include configurazione, integrazione con i tuoi dati, e onboarding del team.')
  const noBind = pricing?.noBind ?? (isEN
    ? 'Then you pay only for the agents you activate, month by month. No annual contracts.'
    : 'Poi paghi solo gli agenti che attivi, mese per mese. Nessun contratto annuale.')

  const headerAgent = isEN ? 'Agent' : 'Agente'
  const headerPrice = isEN ? 'Monthly price' : 'Prezzo mensile'
  const headerStatus = 'Status'

  const discountTitle = isEN ? 'Composition discounts' : 'Sconti composizione'
  const discountLines = isEN
    ? ['2 active agents: -10%', '3 active agents: -15%', '4 active agents: -20%']
    : ['2 agenti attivi: -10%', '3 agenti attivi: -15%', '4 agenti attivi: -20%']

  const exampleLabel = isEN ? 'Example' : 'Esempio'
  const exampleText = isEN
    ? 'A construction company activates Voice Lead + Follow-Up Radar. Setup: €300 one-time. Monthly: €59 + €49 = €108, with 2-agent discount: €97.20/month.'
    : "Un'azienda edile attiva Voice Lead + Follow-Up Radar. Setup: €300 una tantum. Mensile: €59 + €49 = €108, con sconto 2 agenti: €97,20/mese."

  const ctaText = pricing?.cta ?? (isEN ? 'Find out what you need' : 'Scopri cosa ti serve')
  const agents = isEN ? agentsEN : agentsIT

  return (
    <section aria-labelledby="pricing-heading" className="bg-ink-100 py-12 md:py-16 lg:py-20">
      <Container>
        <p className="mb-4 font-heading text-sm font-black text-ink-600">
          {isEN ? 'PRICING' : 'PREZZI'}
        </p>
        <h2 id="pricing-heading" className="font-heading text-3xl font-black leading-[1.02] text-ink-950 md:text-5xl">
          {headline}
        </h2>

        <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-ink-800">
          {setupLine}
        </p>
        <p className="mb-8 mt-2 text-lg text-ink-700">
          {noBind}
        </p>

        <div className="overflow-hidden border-2 border-ink-900 bg-ink-50">
          <table className="w-full border-collapse">
            <thead className="bg-ink-950">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-heading text-sm font-black text-ink-50 md:px-6">
                  {headerAgent}
                </th>
                <th scope="col" className="px-4 py-3 text-left font-heading text-sm font-black text-ink-50 md:px-6">
                  {headerPrice}
                </th>
                <th scope="col" className="hidden px-6 py-3 text-left font-heading text-sm font-black text-ink-50 md:table-cell">
                  {headerStatus}
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, idx) => (
                <tr
                  key={agent.name}
                  className={[
                    'hover:bg-signal-50 transition-colors',
                    idx < agents.length - 1 ? 'border-b-2 border-ink-900' : '',
                  ].join(' ')}
                >
                  <td className="px-4 py-4 font-heading text-base font-black text-ink-950 md:px-6">
                    {agent.name}
                  </td>
                  <td
                    className={[
                      'px-4 py-4 font-heading text-2xl font-black md:px-6',
                      agent.status === 'live' ? 'text-ink-950' : 'text-ink-500',
                    ].join(' ')}
                  >
                    {agent.price}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <Badge
                      variant={agent.status}
                      label={agent.status === 'live' ? (isEN ? 'Live' : 'Live') : (isEN ? 'Next' : 'In arrivo')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Discount callout */}
        <div className="mt-6 border-2 border-ink-900 bg-signal-400 p-5">
          <p className="mb-2 font-heading text-base font-black text-ink-950">{discountTitle}</p>
          <ul className="space-y-1">
            {discountLines.map((line) => (
              <li key={line} className="text-base font-semibold text-ink-900">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t-2 border-ink-900 pt-3">
            <p className="mb-1 font-heading text-sm font-black text-ink-950">{exampleLabel}</p>
            <p className="text-base font-semibold text-ink-900">{exampleText}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button variant="secondary" href="#contact">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  )
}
