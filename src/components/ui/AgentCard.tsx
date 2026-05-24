export type AgentData = {
  name: string
  tagline: string
  badge: 'live' | 'coming-soon'
  beforeValue: string
  afterValue: string
  beforeLabel: string
  afterLabel: string
  trigger: string
  description: string
  liveLabel?: string
  soonLabel?: string
  className?: string
  featured?: boolean
}

export function AgentCard({
  name,
  tagline,
  badge,
  beforeValue,
  afterValue,
  beforeLabel,
  afterLabel,
  trigger,
  description,
  liveLabel = 'LIVE',
  soonLabel = 'In arrivo',
  className = '',
  featured = false,
}: AgentData) {
  return (
    <div
      role="article"
      tabIndex={0}
      className={[
        'relative cursor-pointer border-2 border-ink-900 bg-ink-50 p-5 transition-all duration-200',
        'hover:-translate-y-1 hover:bg-white hover:shadow-[8px_8px_0_rgba(23,19,12,0.22)]',
        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-signal-300 focus-visible:outline-offset-2',
        featured ? 'min-h-[360px] md:p-7' : 'min-h-[280px]',
        className,
      ].join(' ')}
    >
      <div className="absolute top-4 right-4">
        {badge === 'live' ? (
          <span className="inline-flex items-center gap-1 bg-[#22C55E] px-2.5 py-1 font-heading text-xs font-black text-ink-950">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-[live-pulse_2s_ease-in-out_infinite]" aria-hidden="true" />
            {liveLabel}
          </span>
        ) : (
          <span className="inline-flex items-center bg-ink-300 px-2.5 py-1 font-heading text-xs font-bold text-ink-700">
            {soonLabel}
          </span>
        )}
      </div>

      <h3 className="pr-24 font-heading text-2xl font-black leading-none text-ink-950">
        {name}
      </h3>

      <p className="mt-2 text-base font-semibold text-ink-700">{tagline}</p>

      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-end gap-3 border-y-2 border-ink-900 py-5">
        <div className="flex flex-col items-start">
          <span className="font-heading text-2xl font-black leading-tight text-ink-500 md:text-3xl">
            {beforeValue}
          </span>
          <span className="mt-1 text-xs font-bold text-ink-600">{beforeLabel}</span>
        </div>

        <span className="mb-6 font-heading text-2xl font-black text-signal-500">→</span>

        <div className="flex flex-col items-start">
          <span className="font-heading text-2xl font-black leading-tight text-ink-950 md:text-3xl">
            {afterValue}
          </span>
          <span className="mt-1 text-xs font-bold text-ink-600">{afterLabel}</span>
        </div>
      </div>

      <p className="mt-5 font-heading text-base font-black leading-snug text-ink-950">{trigger}</p>

      <p className="mt-3 text-base leading-relaxed text-ink-700">
        {description}
      </p>
    </div>
  )
}
