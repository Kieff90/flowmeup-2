interface VideoLoopProps {
  lang?: 'it' | 'en'
}

/**
 * VideoLoop — autoplay, muted, looping product demo (16:9).
 * Source rendered with Remotion (remotion/ project). The video's own
 * background is sky-950, matching this section so the edges blend.
 */
export function VideoLoop({ lang = 'it' }: VideoLoopProps) {
  const label = lang === 'en' ? 'Product demo' : 'Demo prodotto'

  return (
    <section aria-label={label} className="bg-sky-950">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/arex-flow-poster.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/arex-flow.webm" type="video/webm" />
          <source src="/videos/arex-flow.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
