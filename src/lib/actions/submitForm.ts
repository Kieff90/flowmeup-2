'use server'

export type FormData = {
  name: string
  company: string
  role: string
  sector: string
  message: string
  locale: 'it' | 'en'
}

export type SubmitResult = {
  success: boolean
  error?: string
}

export async function submitForm(data: FormData): Promise<SubmitResult> {
  try {
    const endpoint = process.env.FORMSPREE_ENDPOINT
    if (!endpoint) {
      // Dev fallback: log and return success
      console.log('[submitForm] No FORMSPREE_ENDPOINT configured. Form data:', data)
      return { success: true }
    }
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return { success: true }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}
