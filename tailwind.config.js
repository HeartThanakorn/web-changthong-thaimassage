import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5B2D82',
        'primary-accent': '#D4AF37',
        'background-light': '#F9F6F2',
        'background-dark': '#3D1A5C',
        'text-light': '#333333',
        'text-dark': '#F9F6F2',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [forms],
}
