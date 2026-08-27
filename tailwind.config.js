/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#fbf8f5',
        paper: '#fffdfb',
        oat: '#f2ece7',
        sand: '#e7d8cd',
        blush: '#eac4cf',
        'blush-soft': '#fff0ee',
        rosewood: '#a96872',
        ink: '#2d2524',
        muted: '#847a75',
        line: '#e7dfda',
        deep: '#3d3030',
        success: '#557766',
        warning: '#b7824a',
        danger: '#a66566',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 44px rgba(62, 44, 38, 0.08)',
        card: '0 8px 28px rgba(62, 44, 38, 0.05)',
      },
      borderRadius: {
        xl: '0.75rem',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both',
        'pulse-soft': 'pulse-soft 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};