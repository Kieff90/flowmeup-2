import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface AgentRow {
  name: string
  price: string
}

interface PricingProps {
  dict: Record<string, unknown>
  lang: string
}

const agentsIT: AgentRow[] = [
  { name: 'Cerca Prospect',    price: '€169/mese' },
  { name: 'Nota Lead',         price: '€149/mese' },
  { name: 'Brief Cliente',     price: '€129/mese' },
  { name: 'Radar Commerciale', price: '€109/mese' },
]

const agentsEN: AgentRow[] = [
  { name: 'Lead Scout',   price: '€169/month' },
  { name: 'Voice Lead',   price: '€149/month' },
  { name: 'Client Brief', price: '€129/month' },
  { name: 'Sales Radar',  price: '€109/month' },
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

  const discountTitle = isEN ? 'Composition discounts' : 'Sconti composizione'
  const discountLines = isEN
    ? ['2 active agents: -10%', '3 active agents: -15%', '4 active agents: -20%']
    : ['2 agenti attivi: -10%', '3 agenti attivi: -15%', '4 agenti attivi: -20%']

  const exampleLabel = isEN ? 'Example' : 'Esempio'
  const exampleText = isEN
    ? 'Start with one agent, then add the others as the sales system grows.'
    : 'Parti con un agente, poi aggiungi gli altri quando il sistema vendite cresce.'

  const ctaText = pricing?.cta ?? (isEN ? 'Find out what you need' : 'Scopri cosa ti serve')
  const agents = isEN ? agentsEN : agentsIT

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-[#f5f3ef] py-14 md:py-20 lg:py-24">
      <Container>
        <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-sky-700/70">
          {isEN ? 'PRICING' : 'PREZZI'}
        </p>
        <h2 id="pricing-heading" className="font-heading text-4xl font-black leading-[1] text-sky-950 md:text-6xl">
          {headline}
        </h2>

        <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-sky-950">
          {setupLine}
        </p>
        <p className="mb-8 mt-2 text-lg text-sky-900/72">
          {noBind}
        </p>

        <div className="overflow-hidden rounded-[22px] border border-sky-100 bg-white shadow-[0_18px_55px_rgba(8,47,73,0.08)]">
          <table className="w-full border-collapse">
            <thead className="bg-sky-950">
              <tr>
                <th scope="col" className="px-4 py-4 text-left font-heading text-sm font-black text-white md:px-6">
                  {headerAgent}
                </th>
                <th scope="col" className="px-4 py-4 text-left font-heading text-sm font-black text-white md:px-6">
                  {headerPrice}
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, idx) => (
                <tr
                  key={agent.name}
                  className={[
                    'transition-colors hover:bg-sky-50',
                    idx < agents.length - 1 ? 'border-b border-sky-100' : '',
                  ].join(' ')}
                >
                  <td className="px-4 py-4 font-heading text-base font-black text-sky-950 md:px-6">
                    {agent.name}
                  </td>
                  <td className="px-4 py-4 font-heading text-2xl font-black text-sky-950 md:px-6">
                    {agent.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Discount callout */}
        <div className="mt-6 rounded-[22px] bg-lime-300 p-5 shadow-[0_18px_55px_rgba(8,47,73,0.08)]">
          <p className="mb-2 font-heading text-base font-black text-sky-950">{discountTitle}</p>
          <ul className="space-y-1">
            {discountLines.map((line) => (
              <li key={line} className="text-base font-semibold text-sky-950">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-sky-950/18 pt-3">
            <p className="mb-1 font-heading text-sm font-black text-sky-950">{exampleLabel}</p>
            <p className="text-base font-semibold text-sky-950">{exampleText}</p>
          </div>
        </div>

        {/* Custom agents note */}
        <div className="mt-5 rounded-[18px] border border-sky-100 bg-white px-6 py-5">
          <p className="font-heading text-base font-black text-sky-950">
            {isEN ? 'Custom agents' : 'Agenti custom'}
          </p>
          <p className="mt-1 text-base leading-relaxed text-sky-900/70">
            {isEN
              ? 'We build agents tailored to your specific use case. Price varies by type and complexity — ask us.'
              : 'Costruiamo agenti su misura per le tue esigenze specifiche. Il costo dipende dal tipo e dalla complessità — scrivici.'}
          </p>
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
