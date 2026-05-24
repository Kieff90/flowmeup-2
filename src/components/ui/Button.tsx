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
    'bg-lime-300 text-sky-950',
    'hover:bg-lime-400 hover:-translate-y-px',
    'active:bg-lime-500 active:translate-y-0',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-lime-300 focus-visible:outline-offset-2',
    'transition-[background-color,transform] duration-[200ms,150ms] ease',
    'font-heading font-black text-base uppercase tracking-[0.12em]',
    'px-7 py-3.5 rounded-full',
    'inline-flex items-center gap-2 cursor-pointer border-0',
  ].join(' '),
  secondary: [
    'bg-transparent text-sky-950 border border-sky-950/20',
    'hover:bg-sky-950 hover:text-white',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-lime-300 focus-visible:outline-offset-2',
    'transition-all duration-200 ease',
    'font-heading font-bold text-base uppercase tracking-[0.12em]',
    'px-6 py-3 rounded-full',
    'inline-flex items-center gap-2 cursor-pointer',
  ].join(' '),
  'secondary-on-dark': [
    'bg-transparent text-white border border-white/45',
    'hover:bg-white/10',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-lime-300 focus-visible:outline-offset-2',
    'transition-all duration-200 ease',
    'font-heading font-bold text-base uppercase tracking-[0.12em]',
    'px-6 py-3 rounded-full',
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
