'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getConsent, setConsent, clearConsent, type ConsentStatus } from '@/lib/consent'

interface ConsentContextValue {
  status: ConsentStatus
  grant: () => void
  deny: () => void
  reset: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>('unknown')

  useEffect(() => {
    setStatus(getConsent())
  }, [])

  const grant = useCallback(() => {
    setConsent('granted')
    setStatus('granted')
  }, [])

  const deny = useCallback(() => {
    setConsent('denied')
    setStatus('denied')
  }, [])

  const reset = useCallback(() => {
    clearConsent()
    setStatus('unknown')
  }, [])

  return (
    <ConsentContext.Provider value={{ status, grant, deny, reset }}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used inside ConsentProvider')
  return ctx
}
