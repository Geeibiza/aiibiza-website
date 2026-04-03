/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        terminal: '#0F0F1A',
        obsidian: '#14141F',
        lime: '#AEFF00',
        phosphor: '#00FF88',
        violet: '#7B2FFF',
        sand: '#D4AF6A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
