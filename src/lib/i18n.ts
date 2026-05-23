import type { Locale } from '@/types/i18n'

export const locales: Locale[] = ['it', 'en']
export const defaultLocale: Locale = 'it'

export async function getDict(locale: Locale): Promise<Record<string, unknown>> {
  // Dictionaries will be added in Wave 2 when sections are built
  // Returns empty object until section plans populate /src/dictionaries/
  try {
    const dict = await import(`@/dictionaries/${locale}.json`)
    return dict.default
  } catch {
    return {}
  }
}
