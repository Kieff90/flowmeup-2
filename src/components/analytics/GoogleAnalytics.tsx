'use client'

import Script from 'next/script'
import { useConsent } from '@/components/providers/ConsentProvider'

const GA_ID = 'G-4MFYE86Y55'

export function GoogleAnalytics() {
  const { status } = useConsent()

  if (status !== 'granted') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
