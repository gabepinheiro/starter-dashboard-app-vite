/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',

      white: 'hsl(var(--white))',
      black: 'hsl(var(--black))',

      'primary-light': {
        1: 'hsl(var(--primary-light-1))',
        2: 'hsl(var(--primary-light-2))',
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      'primary-dark': {
        1: 'hsl(var(--primary-dark-1))',
        2: 'hsl(var(--primary-dark-2))',
      },

      'secondary-light': {
        1: 'hsl(var(--secondary-light-1))',
        2: 'hsl(var(--secondary-light-2))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      'secondary-dark': {
        1: 'hsl(var(--secondary-dark-1))',
        2: 'hsl(var(--secondary-dark-2))',
      },

      'tertiary-light': {
        1: 'hsl(var(--tertiary-light-1))',
        2: 'hsl(var(--tertiary-light-2))',
      },
      tertiary: {
        DEFAULT: 'hsl(var(--tertiary))',
      },
      'tertiary-dark': {
        1: 'hsl(var(--tertiary-dark-1))',
        2: 'hsl(var(--tertiary-dark-2))',
      },

      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },

      'success-light': {
        1: 'hsl(var(--success-light-1))',
        2: 'hsl(var(--success-light-2))',
      },
      success: 'hsl(var(--success))',
      'success-dark': {
        1: 'hsl(var(--success-dark-1))',
        2: 'hsl(var(--success-dark-2))',
      },

      'warning-light': {
        1: 'hsl(var(--warning-light-1))',
        2: 'hsl(var(--warning-light-2))',
      },
      warning: 'hsl(var(--warning))',
      'warning-dark': {
        1: 'hsl(var(--warning-dark-1))',
        2: 'hsl(var(--warning-dark-2))',
      },

      'error-light': {
        1: 'hsl(var(--error-light-1))',
        2: 'hsl(var(--error-light-2))',
      },
      error: 'hsl(var(--error))',
      'error-dark': {
        1: 'hsl(var(--error-dark-1))',
        2: 'hsl(var(--error-dark-2))',
      },

      purple: {
        100: 'hsl(var(--purple-100))',
        200: 'hsl(var(--purple-200))',
        300: 'hsl(var(--purple-300))',
        400: 'hsl(var(--purple-400))',
        500: 'hsl(var(--purple-500))',
      },

      blue: {
        100: 'hsl(var(--blue-100))',
        200: 'hsl(var(--blue-200)',
        300: 'hsl(var(--blue-300))',
        400: 'hsl(var(--blue-400))',
        500: 'hsl(var(--blue-500))',
      },

      green: {
        100: 'hsl(var(--green-100))',
        200: 'hsl(var(--green-200))',
        300: 'hsl(var(--green-300))',
        400: 'hsl(var(--green-400))',
        500: 'hsl(var(--green-500))',
      },

      yellow: {
        100: 'hsl(var(--yellow-100))',
        200: 'hsl(var(--yellow-200))',
        300: 'hsl(var(--yellow-300))',
        400: 'hsl(var(--yellow-400))',
        500: 'hsl(var(--yellow-500))',
      },

      red: {
        100: 'hsl(var(--red-100))',
        200: 'hsl(var(--red-200))',
        300: 'hsl(var(--red-300))',
        400: 'hsl(var(--red-400))',
        500: 'hsl(var(--red-500))',
      },

      orange: {
        100: 'hsl(var(--orange-100))',
        200: 'hsl(var(--orange-200))',
        300: 'hsl(var(--orange-300))',
        400: 'hsl(var(--orange-400))',
        500: 'hsl(var(--orange-500))',
      },

      neutral: {
        50: 'hsl(var(--neutral-50))',
        100: 'hsl(var(--neutral-100))',
        200: 'hsl(var(--neutral-200))',
        300: 'hsl(var(--neutral-300))',
        400: 'hsl(var(--neutral-400))',
        500: 'hsl(var(--neutral-500))',
        600: 'hsl(var(--neutral-600))',
        700: 'hsl(var(--neutral-700))',
        800: 'hsl(var(--neutral-800))',
        900: 'hsl(var(--neutral-900))',
      },

      borderRadius: {
        lg: '500px',
        md: 'calc(var(--radius) * 2)',
        sm: 'var(--radius)',
        xs: 'calc(var(--radius) - 2px)',
        none: '0px',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
