import type { Metadata } from 'next'

const title = 'Flowmeup, agenti AI per la forza vendita'
const description = 'Registra un vocale, l\'AI compila il CRM al posto tuo.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Flowmeup',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
