type BadgeVariant = 'live' | 'coming-soon'

const liveClasses = [
  'bg-badge-live text-badge-live-text',
  'text-[11px] font-bold tracking-[0.05em] uppercase',
  'px-2 py-[3px] rounded-full',
  'inline-flex items-center gap-1',
].join(' ')

const comingSoonClasses = [
  'bg-badge-coming-soon text-badge-coming-soon-text',
  'text-[11px] font-semibold tracking-[0.04em] uppercase',
  'px-2 py-[3px] rounded-full',
  'inline-flex items-center',
].join(' ')

export function Badge({ variant }: { variant: BadgeVariant }) {
  if (variant === 'live') {
    return (
      <span className={liveClasses}>
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-live-pulse" aria-hidden="true" />
        LIVE
      </span>
    )
  }

  return (
    <span className={comingSoonClasses}>
      COMING SOON
    </span>
  )
}
