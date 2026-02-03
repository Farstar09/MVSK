/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mvsk-blue': '#0066ff',
        'mvsk-dark': '#0a0a0a',
        'mvsk-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
