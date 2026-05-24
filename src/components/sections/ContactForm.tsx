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

  const headline = contact?.headline as string ?? (isEN ? "Let's talk." : 'Parliamo.')
  const subheadline = contact?.subheadline as string ?? ''
  const submitText = contact?.submit as string ?? (isEN ? 'Send us your process' : 'Inviaci il tuo processo')
  const successMsg = contact?.success as string ?? (isEN ? "Got it. We'll write to you within 24 hours." : 'Ricevuto. Ti scriviamo entro 24 ore.')
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
    'w-full rounded-[14px] border border-white/18 bg-white/92 px-4 py-3 text-base text-sky-950 placeholder-sky-900/42 ' +
    'focus:outline-none focus:border-lime-300 focus:ring-3 focus:ring-lime-300/25 transition-colors duration-200'

  const labelClass = 'block text-sm font-heading font-black text-white/82 mb-1'

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-sky-950 py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 font-heading text-[11px] font-black uppercase tracking-[0.18em] text-lime-300">
              {isEN ? 'NEXT STEP' : 'PROSSIMO PASSO'}
            </p>
            <h2 id="contact-heading" className="font-heading text-4xl font-black leading-[1] text-white md:text-6xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/72">
                {subheadline}
              </p>
            )}

            <div className="mt-8 rounded-[18px] border border-white/12 bg-white/8 p-6">
              <p className="mb-1 font-heading text-base font-black text-white">
                {isEN ? 'Book 30 minutes directly' : 'Prenota 30 minuti direttamente'}
              </p>
              <p className="mb-5 text-sm text-white/60">
                {isEN
                  ? 'Pick a slot and we\'ll talk through your process.'
                  : 'Scegli un orario e parliamo del tuo processo.'}
              </p>
              <a
                href="https://cal.eu/agent-flowmeup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-heading text-sm font-black uppercase tracking-widest text-[#0a1628] transition-transform hover:scale-105 active:scale-95"
              >
                {isEN ? 'Pick a time' : 'Scegli un orario'}
                <svg viewBox="0 0 10 10" className="size-3.5" fill="none">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="#0a1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-7">
            {status === 'success' ? (
              <div role="status" aria-live="polite" className="py-8 text-lg leading-relaxed text-white">
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
                      ? 'E.g. We have 4 field reps, we use Excel and CRM for leads, WhatsApp and Telegram for communication.'
                      : 'Es. Abbiamo 4 commerciali in campo, usiamo Excel e CRM per i lead, WhatsApp e Telegram per comunicare.')}
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {status === 'error' && (
                  <div role="alert" className="text-sm text-orange-300">
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
        </div>
      </Container>
    </section>
  )
}
