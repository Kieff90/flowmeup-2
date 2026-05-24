import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flowmeup: AI Sales Agents',
  description: 'AI agents for field sales teams',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
