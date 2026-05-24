import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  dict: Record<string, unknown>
}

function RotatingBadge({ isEN }: { isEN: boolean }) {
  const text = isEN
    ? '✦ VOICE LEAD ✦ 90 SECONDS ✦ FIELD SALES ✦ AI AGENT ✦ VOICE LEAD ✦ 90 SECONDS ✦ AI AGENT ✦ '
    : '✦ VOICE LEAD ✦ 90 SECONDI ✦ VENDITA CAMPO ✦ AGENTE AI ✦ VOICE LEAD ✦ 90 SECONDI ✦ AGENTE AI ✦ '

  return (
    <div className="relative size-[220px] shrink-0 select-none" aria-hidden="true">
      {/* Rotating text ring */}
      <div
        className="absolute inset-0"
        style={{ animation: 'spin-slow 22s linear infinite' }}
      >
        <svg viewBox="0 0 220 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              id="fmu-ring"
              d="M 110,110 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
            />
          </defs>
          <text
            fontSize="10"
            letterSpacing="2.6"
            fontFamily="Archivo, sans-serif"
            fontWeight="700"
            fill="#F2B705"
          >
            <textPath href="#fmu-ring">{text}</textPath>
          </text>
        </svg>
      </div>

      {/* Static center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex size-[68px] items-center justify-center rounded-full"
          style={{ border: '1px solid rgba(242,183,5,0.22)' }}
        >
          <span
            className="size-2.5 rounded-full bg-signal-400"
            style={{ animation: 'live-pulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  )
}

export function Hero({ dict }: HeroProps) {
  const hero = dict.hero as Record<string, string> | undefined
  const isEN = (hero?.headline ?? '').startsWith('Your')

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-ink-950"
    >
      {/* Ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-48 size-[680px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(242,183,5,0.13) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(242,183,5,0.07) 0%, transparent 65%)' }}
      />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center gap-16 py-24 lg:flex-row lg:items-center lg:gap-24">
        {/* Left: copy */}
        <div className="flex-1">
          {/* Live pill */}
          <p className="mb-7 inline-flex items-center gap-2 px-3 py-1 font-heading text-[11px] font-black uppercase tracking-[0.14em] text-signal-400"
            style={{ border: '1px solid rgba(242,183,5,0.28)' }}>
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-signal-400"
              style={{ animation: 'live-pulse 2s ease-in-out infinite' }}
            />
            {isEN ? '2 Agents Live' : '2 Agenti Live'}
          </p>

          <h1
            id="hero-heading"
            className="font-heading font-black leading-[0.93] tracking-[-0.025em] text-ink-50"
            style={{ fontSize: 'clamp(54px, 8.5vw, 112px)' }}
          >
            {isEN ? (
              <>Lead.<br />In 90 sec.<br />Done.</>
            ) : (
              <>Lead.<br />In 90 sec.<br />Fatto.</>
            )}
          </h1>

          <p className="mt-8 max-w-[44ch] text-lg font-medium leading-relaxed text-ink-400">
            {isEN
              ? "Your rep sends a voice note from the car. The agent transcribes, structures, pushes to CRM. No app to install, no training, no friction."
              : "Il commerciale manda un vocale dal furgone. L'agente trascrive, struttura, aggiorna il CRM. Nessuna app, nessun corso, zero attrito."}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button variant="primary" href="#contact">
              {hero?.cta ?? (isEN ? "Let's talk" : 'Parliamo')}
            </Button>
            <a
              href="#agents"
              className="font-heading text-sm font-black tracking-wider text-ink-500 underline decoration-ink-700 underline-offset-4 transition-colors hover:text-ink-200 hover:decoration-ink-400"
            >
              {isEN ? 'The 4 agents ↓' : 'I 4 agenti ↓'}
            </a>
          </div>

          {/* Proof strip */}
          <dl className="mt-12 flex flex-wrap gap-8 border-t border-ink-800 pt-8">
            {(isEN
              ? [['90s', 'per lead'], ['0', 'apps to install'], ['1 week', 'to go live']]
              : [['90s', 'per lead'], ['0', 'app da installare'], ['1 sett.', 'per partire']]
            ).map(([val, label]) => (
              <div key={`${val}-${label}`}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-heading">
                  <span className="block text-3xl font-black text-signal-400">{val}</span>
                  <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-ink-600">
                    {label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: rotating badge */}
        <div className="flex shrink-0 items-center justify-start lg:justify-end">
          <RotatingBadge isEN={isEN} />
        </div>
      </Container>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(242,183,5,0.35), transparent)' }}
      />
    </section>
  )
}
