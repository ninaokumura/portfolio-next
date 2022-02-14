/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { beige: '#f8f5f2', terracota: '#f45d48', teal: '#078080' },
      fontFamily: {
        sans: "'Montserrat', sans-serif",
        brand: "'Roboto Mono', monospace'",
        typewriter: "'Cutive Mono', monospace",
      },
    },
  },
  plugins: [],
}
