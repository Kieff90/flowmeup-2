import { AgentCard, type AgentData } from '@/components/ui/AgentCard'

// Agent data hardcoded from COPY-BRIEF-IT.md Section 4.
// Wave 3 will wire locale-aware dict props.
const agents: AgentData[] = [
  {
    name: 'Voice Lead',
    tagline: 'registra un lead in 90 secondi',
    badge: 'live',
    beforeValue: '~30 min',
    afterValue: '90 sec',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Manda una nota vocale. Il lead è nel tuo sistema.',
    description:
      'Il commerciale dice "Ho incontrato Bianchi Costruzioni, interessati al prodotto X, richiamare tra due settimane." L\'agente trascrive, estrae i dati, aggiorna il record. Conferma in 30 secondi.',
  },
  {
    name: 'Lead Scout',
    tagline: 'trova nuovi prospect in 30 minuti',
    badge: 'live',
    beforeValue: '~1 giorno',
    afterValue: '30 min',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Scrivi cosa cerchi. Ricevi la lista.',
    description:
      '"Aziende in Lombardia che fanno serramenti, 20-100 dipendenti." L\'agente restituisce una lista di prospect qualificati, con ragione sociale, settore, località e contatti disponibili. Già filtrata per escludere i clienti che hai.',
  },
  {
    name: 'Pre-Call Brief',
    tagline: 'preparati in 30 secondi',
    badge: 'coming-soon',
    beforeValue: '15-20 min',
    afterValue: '30 sec',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Chiedi cosa sai su un cliente. Ricevi il brief.',
    description:
      '"Cosa so di Rossi?" L\'agente restituisce: ultimo contatto, offerte aperte, chi lo segue, note recenti. Senza scavare tra le email.',
  },
  {
    name: 'Follow-Up Radar',
    tagline: 'nessun lead si raffredda in silenzio',
    badge: 'coming-soon',
    beforeValue: 'Deal silenzioso',
    afterValue: 'Alert mattutino',
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    trigger: 'Automatico ogni mattina. O su richiesta.',
    description:
      "L'agente gira ogni giorno e ti manda la lista dei lead che non senti da più di 7 giorni. Non serve fare nulla di diverso: legge i dati che hai già.",
  },
]

export function AgentCards() {
  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2] reveal">
            Gli agenti Flowmeup
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Attivi subito o in arrivo. Ognuno risolve un processo commerciale
            specifico.
          </p>
        </div>

        {/* 2x2 grid on tablet+, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <div key={agent.name} className="reveal">
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
