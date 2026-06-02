import type { Metadata } from 'next'

const title = 'Flowmeup, agenti AI per la forza vendita'
const description = 'Registra un vocale, l\'AI compila il CRM al posto tuo.'

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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
