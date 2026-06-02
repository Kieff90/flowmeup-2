import type { Metadata } from 'next'

const title = 'Flowmeup, l’AI che semplifica il processo vendita'
const description = 'Meno attività manuali, più controllo su contatti, offerte e trattative.'

export const metadata: Metadata = {
  metadataBase: new URL('https://salesagent.flowmeup.me'),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Flowmeup',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600, alt: title }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
