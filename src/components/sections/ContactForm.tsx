'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { submitForm } from '@/lib/actions/submitForm'
import type { Locale } from '@/types/i18n'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  dict: Record<string, unknown>
  lang: Locale
}

export function ContactForm({ dict, lang }: ContactFormProps) {
  const contact = dict.contact as Record<string, unknown> | undefined
  const fields = contact?.fields as Record<string, string> | undefined
  const isEN = lang === 'en'

  const headline = contact?.headline as string ?? (isEN ? "Let's talk about your process." : 'Parliamo del tuo processo.')
  const subheadline = contact?.subheadline as string ?? ''
  const submitText = contact?.submit as string ?? (isEN ? 'Send us your process' : 'Inviami il tuo processo')
  const calendarText = contact?.calendarLink as string ?? (isEN ? 'Or pick a time directly' : 'Oppure scegli direttamente un orario')
  const successMsg = contact?.success as string ?? (isEN ? "Got it. We'll write to you within 24 hours to confirm a time." : 'Ricevuto. Ti scriviamo entro 24 ore per confermare l\'orario.')
  const errorMsg = contact?.error as string ?? (isEN ? 'An error occurred. Please try again.' : 'Si è verificato un errore. Riprova tra qualche istante.')

  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const fd = new FormData(e.currentTarget)
    const result = await submitForm({
      name: fd.get('name') as string,
      company: fd.get('company') as string,
      role: fd.get('role') as string,
      sector: fd.get('sector') as string,
      message: fd.get('message') as string,
      locale: lang,
    })
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorText(result.error ?? errorMsg)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 ' +
    'focus:outline-none focus:border-amber-500 focus:ring-3 focus:ring-amber-500/15 transition-colors duration-200'

  const labelClass = 'block text-sm font-semibold text-slate-300 mb-1'

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-navy-900 py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="contact-heading" className="reveal text-2xl md:text-3xl font-bold text-white leading-[1.2]">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-base lg:text-lg text-navy-300 mt-3 mb-10 max-w-2xl">
            {subheadline}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Form */}
          <div>
            {status === 'success' ? (
              <div role="status" aria-live="polite" className="text-white text-lg leading-relaxed py-8">
                {successMsg}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    {fields?.name ?? (isEN ? 'Name' : 'Nome')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className={labelClass}>
                    {fields?.company ?? (isEN ? 'Company' : 'Azienda')}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-role" className={labelClass}>
                    {fields?.role ?? (isEN ? 'Role' : 'Ruolo')}
                  </label>
                  <input
                    id="contact-role"
                    name="role"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-sector" className={labelClass}>
                    {fields?.sector ?? (isEN ? 'Sector' : 'Settore')}
                  </label>
                  <input
                    id="contact-sector"
                    name="sector"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    {fields?.message ?? (isEN ? 'Message' : 'Messaggio')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={fields?.messagePlaceholder ?? (isEN
                      ? 'E.g. We have 4 field reps, we use Excel for leads, WhatsApp for team communication.'
                      : 'Es. Abbiamo 4 commerciali in campo, usiamo Excel per i lead, WhatsApp per comunicare.')}
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {status === 'error' && (
                  <div role="alert" className="text-red-300 text-sm">
                    {errorText || errorMsg}
                  </div>
                )}

                <Button
                  variant="primary"
                  fullWidth
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting'
                    ? (isEN ? 'Sending…' : 'Invio in corso…')
                    : submitText}
                </Button>
              </form>
            )}
          </div>

          {/* Calendar link */}
          <div className="flex flex-col justify-center">
            <p className="text-navy-300 text-base mb-4">
              {isEN ? 'Prefer to pick a time straight away?' : 'Preferisci scegliere subito un orario?'}
            </p>
            {/* TODO: Replace # with Calendly URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors text-base font-medium focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-amber-400 focus-visible:outline-offset-2 rounded-sm"
            >
              {calendarText}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
