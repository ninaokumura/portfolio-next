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
      colors: { almond: '#16161a', terracota: '#464655', teal: '#D5CFE1' },
      fontFamily: {
        sans: "'Karla', sans-serif",
        brand: "'Karla', monospace",
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
