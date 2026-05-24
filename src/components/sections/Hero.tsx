function CloudShape({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none absolute select-none" style={style} aria-hidden="true">
      <div className="relative h-20 w-48">
        <div className="absolute inset-0 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute -left-8 top-3 h-14 w-32 rounded-full bg-white/70 blur-2xl" />
        <div className="absolute right-0 top-2 h-12 w-28 rounded-full bg-white/65 blur-2xl" />
      </div>
    </div>
  )
}

const WAVE_BARS = [3, 6, 10, 7, 13, 9, 5, 11, 7, 4, 9, 6]

function CardNotaLead({ isEN }: { isEN: boolean }) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-sky-950 p-3.5 shadow-2xl">
      <div className="flex items-end gap-[2px]" style={{ height: '28px' }}>
        {WAVE_BARS.map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-sm bg-lime-400"
            style={{ height: `${h * 2}px`, opacity: 0.7 + (i % 3) * 0.1 }}
          />
        ))}
      </div>
      <div>
        <p className="font-heading text-[10px] font-black text-lime-400">
          {isEN ? '✓ Logged in 30s' : '✓ Registrato in 30s'}
        </p>
        <p className="font-heading text-sm font-black leading-tight text-white">
          {isEN ? 'Voice Lead' : 'Nota Lead'}
        </p>
      </div>
    </div>
  )
}

function CardCercaProspect({ isEN }: { isEN: boolean }) {
  const tags = isEN ? ['Northern Italy', 'B2B', '20-100'] : ['Lombardia', 'Serramenti', 'B2B']
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-white p-3.5 shadow-2xl">
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-sky-100 px-1.5 py-px text-[8px] font-bold text-sky-700">
            {tag}
          </span>
        ))}
      </div>
      <div>
        <p className="font-heading text-3xl font-black leading-none text-sky-950">47</p>
        <p className="font-heading text-[10px] font-black text-sky-950">
          {isEN ? 'prospects' : 'prospect'}
        </p>
      </div>
      <p className="text-[9px] font-semibold text-sky-700/60">
        {isEN ? 'found in 28 min' : 'trovati in 28 min'}
      </p>
    </div>
  )
}

function CardBriefCliente({ isEN }: { isEN: boolean }) {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 rounded-2xl bg-white p-3.5 shadow-2xl">
      <p className="font-heading text-[10px] font-black text-sky-950">
        {isEN ? 'Client Brief' : 'Brief Cliente'}
      </p>
      <p className="text-[10px] font-bold text-sky-800">Rossi Impianti</p>
      <div className="flex flex-col gap-0.5">
        <p className="text-[8px] text-sky-700/60">
          {isEN ? 'Last contact: ' : 'Ultimo contatto: '}
          <span className="font-bold text-sky-700">{isEN ? '3d ago' : '3 gg fa'}</span>
        </p>
        <p className="text-[8px] text-sky-700/60">
          {isEN ? 'Open deal: ' : 'Offerta aperta: '}
          <span className="font-bold text-sky-700">€12.400</span>
        </p>
      </div>
      <div className="mt-auto flex items-center gap-1">
        <div className="size-1.5 rounded-full bg-lime-400" />
        <p className="text-[8px] font-bold text-sky-700">
          {isEN ? 'In negotiation' : 'In trattativa'}
        </p>
      </div>
    </div>
  )
}

const RADAR_LEADS = [
  { name: 'Bianchi', days: '8', color: 'bg-orange-500' },
  { name: 'Rossi',   days: '12', color: 'bg-orange-400' },
  { name: 'Ferri',   days: '15', color: 'bg-yellow-500' },
]

function CardRadarCommerciale({ isEN }: { isEN: boolean }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-2xl bg-lime-300 p-3.5 shadow-2xl">
      <p className="font-heading text-[10px] font-black text-sky-950">
        {isEN ? 'Sales Radar' : 'Radar Commerciale'}
      </p>
      {RADAR_LEADS.map(({ name, days, color }) => (
        <div key={name} className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className={`size-1.5 rounded-full ${color}`} />
            <p className="text-[9px] font-bold text-sky-950">{name}</p>
          </div>
          <p className="text-[9px] font-semibold text-sky-950/60">
            {days}{isEN ? 'd' : 'gg'}
          </p>
        </div>
      ))}
    </div>
  )
}

interface HeroProps {
  dict: Record<string, unknown>
}

export function Hero({ dict }: HeroProps) {
  const hero = dict.hero as Record<string, string> | undefined
  const isEN = (hero?.headline ?? '').startsWith('AI')

  const headline     = hero?.headline     ?? (isEN ? 'AI agents for faster sales'        : 'Agenti AI per vendite più veloci')
  const subheadline  = hero?.subheadline  ?? (isEN
    ? 'A composable suite to automate prospecting, qualification, follow-up and sales ops.'
    : 'Una suite componibile per automatizzare ricerca, qualificazione, follow-up e operazioni sales.')
  const eyebrow      = hero?.eyebrow      ?? (isEN ? 'AI agents for sales'               : 'Agenti AI per il sales')
  const ctaLabel     = hero?.cta          ?? (isEN ? "Let's talk"                        : 'Parliamo')
  const ctaSecondary = hero?.ctaSecondary ?? (isEN ? 'View agents'                       : 'Scopri gli agenti')

  const orbitalCards = [
    <CardNotaLead      key="nota-lead"     isEN={isEN} />,
    <CardCercaProspect key="cerca-prospect" isEN={isEN} />,
    <CardBriefCliente  key="brief-cliente"  isEN={isEN} />,
    <CardRadarCommerciale key="radar"       isEN={isEN} />,
  ]

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0c5d9e 0%, #1a8fd6 22%, #3da6e8 48%, #7cc6f2 72%, #b5ddf7 88%, #d9eefa 100%)',
        minHeight: '100svh',
      }}
    >
      {/* Clouds */}
      <CloudShape style={{ top: '7%',  left: '3%',   transform: 'scale(2.0)',           animation: 'cloud-drift 22s ease-in-out infinite alternate' }} />
      <CloudShape style={{ top: '5%',  right: '4%',  transform: 'scale(1.5) scaleX(-1)', animation: 'cloud-drift 28s ease-in-out infinite alternate-reverse' }} />
      <CloudShape style={{ top: '26%', left: '16%',  transform: 'scale(1.1)', opacity: 0.7, animation: 'cloud-drift 18s ease-in-out infinite alternate' }} />
      <CloudShape style={{ top: '20%', right: '18%', transform: 'scale(0.9)', opacity: 0.6, animation: 'cloud-drift 24s ease-in-out infinite alternate-reverse' }} />
      <CloudShape style={{ top: '44%', left: '42%',  transform: 'scale(0.7)', opacity: 0.45 }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center px-4 pb-12 pt-28 text-center">

        {/* Eyebrow */}
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 font-heading text-[11px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {eyebrow}
        </p>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="max-w-3xl font-heading font-black leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(42px, 7vw, 84px)' }}
        >
          {headline}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-lime-300 px-7 py-3.5 font-heading text-sm font-black uppercase tracking-widest text-sky-950 transition-transform hover:scale-105 active:scale-95"
          >
            {ctaLabel}
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-sky-950">
              <svg viewBox="0 0 10 10" className="size-3" fill="none">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="#bef264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a
            href="#agents"
            className="inline-flex items-center rounded-full border-2 border-white/50 px-7 py-3.5 font-heading text-sm font-black uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
          >
            {ctaSecondary}
          </a>
        </div>

        {/* Orbital 3D carousel */}
        <div
          className="orbital-scene mx-auto mt-14 w-full"
          style={{ height: '280px', maxWidth: '640px' }}
          aria-hidden="true"
        >
          <div className="orbital-ring">
            {orbitalCards.map((card, i) => (
              <div
                key={i}
                className="orbital-card-wrap"
                style={{ transform: `rotateY(${i * 90}deg) translateZ(220px)` }}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizon fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: 'linear-gradient(transparent, rgba(240,248,255,0.25))' }}
      />
    </section>
  )
}
