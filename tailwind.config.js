/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        helvetica: ['"Helvetica Neue Roman"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          bg: '#08080c',
          card: '#0f0f16',
          panel: '#14141f',
          red: '#ef4444',
          crimson: '#dc2626',
          glow: '#ff3366',
          border: '#27273a',
          muted: '#8b8b9e',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
