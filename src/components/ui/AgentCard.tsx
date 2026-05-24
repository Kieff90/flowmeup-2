'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type AgentData = {
  name: string
  tagline: string
  trigger: string
  description: string
  Icon: LucideIcon
  className?: string
}

export function AgentCard({ name, tagline, trigger, description, Icon, className = '' }: AgentData) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={[
        'overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow',
        open ? 'shadow-md' : 'hover:shadow-sm',
        className,
      ].join(' ')}
    >
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
            <Icon size={20} className="text-sky-600" aria-hidden="true" />
          </div>
          <p className="font-heading text-xl font-black text-[#0a1628]">{name}</p>
        </div>
        <ChevronDown
          size={20}
          className={['shrink-0 text-gray-400 transition-transform duration-200', open ? 'rotate-180' : ''].join(' ')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="border-t border-gray-100 px-6 pb-6 pt-4">
          <p className="text-base font-semibold leading-relaxed text-[#0a1628]/60">{tagline}</p>
          <p className="mt-4 font-heading text-base font-black text-[#0a1628]">{trigger}</p>
          <p className="mt-2 text-base leading-relaxed text-gray-500">{description}</p>
        </div>
      )}
    </div>
  )
}
