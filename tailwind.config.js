/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        },
        dark: {
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626',
        }
      }
    },
  },
  plugins: [],
}