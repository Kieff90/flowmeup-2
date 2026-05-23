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
}: AgentData) {
  return (
    <div
      className="
        relative bg-white rounded-xl p-6 border border-slate-200
        min-h-[280px] cursor-pointer
        hover:shadow-[0_10px_30px_rgba(15,35,73,0.12)]
        hover:-translate-y-1 hover:border-slate-300
        transition-all duration-200
      "
    >
      {/* Badge — top-right absolute */}
      <div className="absolute top-4 right-4">
        {badge === 'live' ? (
          <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold uppercase tracking-[0.05em] bg-[#22C55E] text-white">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-[live-pulse_2s_ease-in-out_infinite]" />
            LIVE
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] bg-slate-300 text-slate-600">
            COMING SOON
          </span>
        )}
      </div>

      {/* Agent name — right-padded to prevent overlap with badge */}
      <h3 className="text-xl font-bold text-slate-800 pr-20 leading-snug">
        {name}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-slate-500 mt-1">{tagline}</p>

      {/* Before / After stats block */}
      <div className="flex items-end gap-3 mt-4">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-extrabold text-slate-500 leading-tight">
            {beforeValue}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{beforeLabel}</span>
        </div>

        <span className="text-slate-300 text-xl font-bold mb-5">→</span>

        <div className="flex flex-col items-start">
          <span className="text-2xl font-extrabold text-amber-500 leading-tight">
            {afterValue}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{afterLabel}</span>
        </div>
      </div>

      {/* Trigger line */}
      <p className="text-sm font-semibold text-slate-700 mt-3">{trigger}</p>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mt-2">
        {description}
      </p>
    </div>
  )
}
