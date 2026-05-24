const LOGO_ITEMS = [
  { shape: 'circle',  label: 'Logoipsum' },
  { shape: 'star',    label: 'Logoipsum' },
  { shape: 'hex',     label: 'Logoipsum' },
  { shape: 'bolt',    label: 'Logoipsum' },
  { shape: 'circle',  label: 'Logoipsum' },
  { shape: 'star',    label: 'Logoipsum' },
  { shape: 'hex',     label: 'Logoipsum' },
  { shape: 'bolt',    label: 'Logoipsum' },
]

function LogoMark({ shape }: { shape: string }) {
  const size = 20
  if (shape === 'star') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.8 5.4H17l-4.3 3.1 1.6 5-4.3-3.1-4.3 3.1 1.6-5L3 7.4h5.2z" fill="#CBD5E1" />
      </svg>
    )
  }
  if (shape === 'hex') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l7 4v8l-7 4-7-4V6z" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
      </svg>
    )
  }
  if (shape === 'bolt') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M12 2L6 11h5l-3 7 9-11h-5z" fill="#CBD5E1" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" fill="#CBD5E1" />
    </svg>
  )
}

export function LogoStrip() {
  const doubled = [...LOGO_ITEMS, ...LOGO_ITEMS]

  return (
    <section
      aria-label="Partner e integrazioni"
      className="overflow-hidden border-y border-gray-100 bg-white py-5"
    >
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'ticker 28s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 px-10 text-gray-300"
          >
            <LogoMark shape={item.shape} />
            <span className="font-heading text-sm font-bold uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
