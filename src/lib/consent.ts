export type ConsentStatus = 'unknown' | 'granted' | 'denied'

const COOKIE_NAME = 'flowmeup_consent'
const COOKIE_DAYS = 365

export function getConsent(): ConsentStatus {
  if (typeof document === 'undefined') return 'unknown'
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
  const value = match?.[1] ? decodeURIComponent(match[1]) : null
  if (value === 'granted') return 'granted'
  if (value === 'denied') return 'denied'
  return 'unknown'
}

export function setConsent(status: 'granted' | 'denied'): void {
  const expires = new Date()
  expires.setDate(expires.getDate() + COOKIE_DAYS)
  document.cookie = `${COOKIE_NAME}=${status}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

export function clearConsent(): void {
  document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}
