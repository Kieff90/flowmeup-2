interface VideoLoopProps {
  lang?: 'it' | 'en'
}

/**
 * VideoLoop — autoplay, muted, looping video section.
 * Drop the final video file at /public/videos/demo.mp4 and uncomment src.
 * The placeholder shows until a real src is set.
 */
export function VideoLoop({ lang = 'it' }: VideoLoopProps) {
  const label = lang === 'en' ? 'Product demo' : 'Demo prodotto'

  return (
    <section aria-label={label} className="bg-sky-950">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        {/* Placeholder — visible when video has no src */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center bg-sky-950"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="font-heading text-[clamp(32px,6vw,72px)] font-black tracking-[0.18em] text-sky-800">
            VIDEO
          </span>
          <span className="mt-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-sky-900">
            {lang === 'en' ? 'Flowmeup Demo · autoplay loop' : 'Demo Flowmeup · autoplay loop'}
          </span>
        </div>

        {/*
          Replace the empty src below with the real video path, e.g.:
            src="/videos/demo.mp4"
          The video will overlay the placeholder automatically.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 z-10 h-full w-full object-cover"
          // src="/videos/demo.mp4"
        />
      </div>
    </section>
  )
}
