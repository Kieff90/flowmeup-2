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
    <section aria-labelledby="pricing-heading" className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="pricing-heading" className="reveal text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2]">
          {headline}
        </h2>

        <p className="text-lg font-semibold text-slate-700 mt-3">
          {setupLine}
        </p>
        <p className="text-base text-slate-600 mt-2 mb-8">
          {noBind}
        </p>

        {/* Pricing table — semantic <table> for screen readers */}
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th scope="col" className="text-sm font-semibold text-slate-600 uppercase tracking-wide text-left px-6 py-3">
                  {headerAgent}
                </th>
                <th scope="col" className="text-sm font-semibold text-slate-600 uppercase tracking-wide text-left px-6 py-3">
                  {headerPrice}
                </th>
                <th scope="col" className="text-sm font-semibold text-slate-600 uppercase tracking-wide text-left px-6 py-3 hidden md:table-cell">
                  {headerStatus}
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, idx) => (
                <tr
                  key={agent.name}
                  className={[
                    'reveal hover:bg-slate-100 transition-colors',
                    idx < agents.length - 1 ? 'border-b border-slate-200' : '',
                  ].join(' ')}
                >
                  <td className="px-6 py-4 text-base font-semibold text-slate-800">
                    {agent.name}
                  </td>
                  <td
                    className={[
                      'px-6 py-4 text-2xl font-extrabold',
                      agent.status === 'live' ? 'text-navy-900' : 'text-slate-300',
                    ].join(' ')}
                  >
                    {agent.price}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <Badge variant={agent.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Discount callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
          <p className="text-sm font-semibold text-amber-800 mb-2">{discountTitle}</p>
          <ul className="space-y-1">
            {discountLines.map((line) => (
              <li key={line} className="text-sm text-amber-700">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-amber-200">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{exampleLabel}</p>
            <p className="text-sm text-amber-700">{exampleText}</p>
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
