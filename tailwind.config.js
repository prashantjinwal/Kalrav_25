/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        'protest': ['Protest Revolution', 'cursive'],
        'noto': ['Noto-Sans'],
        'imonoid': ['Imonoid', 'monospace'],
        'protest-guerrilla': ['Protest Guerrilla', 'cursive'],
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        scrollLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        scrollRight: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' }
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        "scroll-left": 'scrollLeft 20s linear infinite',
        "scroll-right": 'scrollRight 20s linear infinite',
      },
    },
  },
  plugins: [],
}

