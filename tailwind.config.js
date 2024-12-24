/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibmFlex": ['IBM Plex Serif', 'serif']
    }
    },
  },
  plugins: [],
}
