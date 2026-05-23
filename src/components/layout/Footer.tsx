import { Container } from '@/components/ui/Container'

interface FooterProps {
  dict: Record<string, unknown>
}

export function Footer({ dict }: FooterProps) {
  const footer = dict.footer as Record<string, string> | undefined
  const copyright = footer?.copyright ?? '© 2025 Flowmeup.'

  return (
    <footer className="bg-navy-950 py-8">
      <Container>
        <p className="text-navy-300 text-sm">{copyright}</p>
      </Container>
    </footer>
  )
}
