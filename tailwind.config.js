/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['"Protest Revolution"', 'cursive'],
        'noto': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

