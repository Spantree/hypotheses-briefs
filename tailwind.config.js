/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx,mdx}', './docs/**/*.mdx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
