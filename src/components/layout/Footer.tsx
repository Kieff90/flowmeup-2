import { Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface FooterProps {
  dict: Record<string, unknown>
}

export function Footer({ dict }: FooterProps) {
  const footer = dict.footer as Record<string, string> | undefined
  const copyright = footer?.copyright ?? '© 2025 Flowmeup.'

  return (
    <footer className="bg-sky-950 py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <p className="font-heading text-lg font-black bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Flowmeup
          </p>
          <a
            href="https://www.linkedin.com/company/flowmeup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Flowmeup su LinkedIn"
            className="text-sky-400 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-sky-200 text-sm">{copyright}</p>
      </Container>
    </footer>
  )
}
