// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Deep Navy
        navy: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F2349',
          950: '#071730',
        },
        // Accent — Warm Amber
        amber: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Semantic aliases
        brand: {
          primary:        '#0F2349',  // navy-900
          'primary-dark': '#071730',  // navy-950
          accent:         '#F59E0B',  // amber-500
          'accent-hover': '#D97706',  // amber-600
        },
        badge: {
          live:               '#22C55E',  // green-500
          'live-text':        '#FFFFFF',
          'coming-soon':      '#CBD5E1',  // slate-300
          'coming-soon-text': '#475569',  // slate-600
        },
        status: {
          error:   '#EF4444',
          success: '#22C55E',
          focus:   '#FBBF24',  // amber-400 — focus ring
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Base Tailwind scale, explicitly declared for clarity
        xs:   ['12px',  { lineHeight: '16px' }],
        sm:   ['14px',  { lineHeight: '20px' }],
        base: ['16px',  { lineHeight: '24px' }],
        lg:   ['18px',  { lineHeight: '28px' }],
        xl:   ['20px',  { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
      fontWeight: {
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
        extrabold: '800',
      },
      spacing: {
        // Custom additions beyond Tailwind defaults
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        lg:  '8px',
        xl:  '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        sm:  '0 1px 2px rgba(0,0,0,0.05)',
        md:  '0 4px 6px rgba(0,0,0,0.07)',
        lg:  '0 10px 15px rgba(0,0,0,0.08)',
        xl:  '0 20px 25px rgba(0,0,0,0.10)',
        // Navy-tinted shadow for card hover
        'card-hover': '0 10px 30px rgba(15, 35, 73, 0.12)',
        // Amber glow for CTA focus
        'cta-focus':  '0 0 0 3px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'live-pulse': 'live-pulse 2s ease-in-out infinite',
        'reveal':     'reveal 400ms ease-out forwards',
        'fade-in':    'fade-in 200ms ease-out forwards',
      },
      keyframes: {
        'live-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.6', transform: 'scale(0.85)' },
        },
        'reveal': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
