import { Container } from '@/components/ui/Container'

interface FooterProps {
  dict: Record<string, unknown>
}

export function Footer({ dict }: FooterProps) {
  const footer = dict.footer as Record<string, string> | undefined
  const copyright = footer?.copyright ?? '© 2025 Flowmeup.'

  return (
    <footer className="bg-sky-950">
      {/* Top row: logo */}
      <Container className="pt-10 pb-6">
        <p className="font-heading text-lg font-black bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Flowmeup
        </p>
      </Container>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom row: copyright + social */}
      <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sky-300 text-sm">{copyright}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/flowmeup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Flowmeup su LinkedIn"
            className="text-sky-400 transition-colors hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  )
}
