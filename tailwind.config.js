/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'dm-sans': ['DM Sans'],
        'bebas-neue': ['Bebas Neue'],
        'druk-wide-bold': ['Druk Wide Bold'],
        'pessanger-sans-bold': ['Passenger Sans'],
        'nikkyou-sans': ['Nikkyou Sans'],
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
        animateToTop: {
          '100%': { transform: 'translateY(0)' }
        },
        shrinkTranslate: {
          '0%': { transform: 'scale(2) translateY(4rem)' },
          '100%': { transform: 'scale(1) translateY(0)' }
        },
        flicker: {
          "0%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "0.7", transform: "scale(1)" },
        },
        fireWave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
        

      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        "scroll-left": 'scrollLeft 20s linear infinite',
        "scroll-right": 'scrollRight 20s linear infinite',
        "shrinkAndTranslateT": 'shrinkTranslate 2s ease-in-out',
        "animateToTop": 'animateToTop 1s ease-in-out forwards',
       "fire": "flicker 1.5s infinite alternate",
        "fire-wave": "fireWave 2s infinite ease-in-out",

      },
      
      animationDelay: {
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animate-delay-0s': {
          'animation-delay': '0s',
        },
        '.animate-delay-1s': {
          'animation-delay': '1s',
        },
        '.animate-delay-2s': {
          'animation-delay': '2s',
        },
        '.animate-delay-3s': {
          'animation-delay': '3s',
        },
        '.animate-delay-4s': {
          'animation-delay': '4s',
        },
        '.animate-delay-5s': {
          'animation-delay': '5s',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

