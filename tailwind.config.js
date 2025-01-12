/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        borealis: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      backgroundImage: {
        'aurora-light': 'linear-gradient(135deg, rgba(176, 234, 255, 0.9), rgba(200, 255, 220, 0.9), rgba(255, 220, 240, 0.9))',
        'aurora-dark': 'linear-gradient(135deg, rgba(15, 76, 129, 0.8), rgba(28, 103, 88, 0.8), rgba(89, 44, 122, 0.8))',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0, 0) scale(1)', filter: 'hue-rotate(0deg) brightness(1) saturate(1)' },
          '25%': { transform: 'translate(25px, -25px) scale(1.4)', filter: 'hue-rotate(90deg) brightness(1.5) saturate(2)' },
          '50%': { transform: 'translate(-25px, 25px) scale(1.5)', filter: 'hue-rotate(180deg) brightness(1.4) saturate(1.8)' },
          '75%': { transform: 'translate(25px, 25px) scale(1.4)', filter: 'hue-rotate(270deg) brightness(1.5) saturate(2)' },
          '100%': { transform: 'translate(0, 0) scale(1)', filter: 'hue-rotate(360deg) brightness(1) saturate(1)' },
        },
        'aurora-pulse': {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        aurora: 'aurora 15s ease infinite',
        'aurora-pulse': 'aurora-pulse 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};