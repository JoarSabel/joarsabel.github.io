/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,astro}"],
  theme: {
    extend: {},
  },
  plugins: [
   require('@tailwindcss/typography'),
  ],
}

