type BadgeVariant = 'live' | 'coming-soon'

const liveClasses = [
  'bg-badge-live text-badge-live-text',
  'text-xs font-heading font-black',
  'px-2.5 py-1 rounded-none',
  'inline-flex items-center gap-1',
].join(' ')

const comingSoonClasses = [
  'bg-badge-coming-soon text-badge-coming-soon-text',
  'text-xs font-heading font-bold',
  'px-2.5 py-1 rounded-none',
  'inline-flex items-center',
].join(' ')

export function Badge({ variant, label }: { variant: BadgeVariant; label?: string }) {
  if (variant === 'live') {
    return (
      <span className={liveClasses}>
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-live-pulse" aria-hidden="true" />
        {label ?? 'LIVE'}
      </span>
    )
  }

  return (
    <span className={comingSoonClasses}>
      {label ?? 'In arrivo'}
    </span>
  )
}
