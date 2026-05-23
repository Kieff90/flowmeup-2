import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'secondary-on-dark'

interface BaseProps {
  variant?: Variant
  fullWidth?: boolean
  children: React.ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'>)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>)
  )

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-amber-500 text-slate-900',
    'hover:bg-amber-600 hover:-translate-y-px',
    'active:bg-amber-700 active:translate-y-0',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-amber-400 focus-visible:outline-offset-2',
    'transition-[background-color,transform] duration-[200ms,150ms] ease',
    'font-bold text-base',
    'px-7 py-3.5 rounded-lg',
    'inline-flex items-center gap-2 cursor-pointer border-0',
  ].join(' '),
  secondary: [
    'bg-transparent text-navy-900 border-2 border-navy-900',
    'hover:bg-navy-900 hover:text-white',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-amber-400 focus-visible:outline-offset-2',
    'transition-all duration-200 ease',
    'font-semibold text-base',
    'px-6 py-3 rounded-lg',
    'inline-flex items-center gap-2 cursor-pointer',
  ].join(' '),
  'secondary-on-dark': [
    'bg-transparent text-white border-2 border-white',
    'hover:bg-white/10',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-amber-400 focus-visible:outline-offset-2',
    'transition-all duration-200 ease',
    'font-semibold text-base',
    'px-6 py-3 rounded-lg',
    'inline-flex items-center gap-2 cursor-pointer',
  ].join(' '),
}

export function Button({ variant = 'primary', fullWidth = false, children, className = '', ...rest }: ButtonProps) {
  const classes = [
    variantClasses[variant],
    fullWidth ? 'w-full justify-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
