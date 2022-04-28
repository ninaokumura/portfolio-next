/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  darkMode: 'class',
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
        brand: "'Roboto Mono', monospace",
        typewriter: "'Cutive Mono', monospace",
      },
      backgroundImage: {
        brush: "url('//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=078080')",
        brush2:
          "url('//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=f45d48')",
      },
    },
  },
  plugins: [],
}
