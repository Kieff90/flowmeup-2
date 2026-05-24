import { Container } from '@/components/ui/Container'

interface FooterProps {
  dict: Record<string, unknown>
}

export function Footer({ dict }: FooterProps) {
  const footer = dict.footer as Record<string, string> | undefined
  const copyright = footer?.copyright ?? '© 2025 Flowmeup.'

  return (
    <footer className="bg-sky-950 py-8">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-white font-black text-lg">Flowmeup</p>
        <p className="text-sky-200 text-sm">{copyright}</p>
      </Container>
    </footer>
  )
}
