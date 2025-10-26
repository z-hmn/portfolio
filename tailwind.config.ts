import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-gradient-to-b',
    'from-purple-600',
    'via-purple-400',
    'to-pink-400',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8DC',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

