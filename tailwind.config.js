/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MarkAgency Color Palette
        primary: {
          DEFAULT: '#BB8B32',  // Gold
          50: '#FBF7F0',
          100: '#F5ECD9',
          200: '#E8D5B0',
          300: '#D9BD86',
          400: '#CBA65C',
          500: '#BB8B32',
          600: '#9A7229',
          700: '#795A21',
          800: '#584118',
          900: '#372910',
        },
        secondary: {
          DEFAULT: '#3281BB',  // Blue
          50: '#EDF5FA',
          100: '#D6E8F4',
          200: '#ADD1E9',
          300: '#84BADE',
          400: '#5BA3D3',
          500: '#3281BB',
          600: '#286897',
          700: '#1E4F73',
          800: '#14364F',
          900: '#0A1D2B',
        },
        accent: {
          DEFAULT: '#07121A',  // Dark Navy
          50: '#E8EAEB',
          100: '#C5CACD',
          200: '#9FA7AC',
          300: '#79848B',
          400: '#535F69',
          500: '#07121A',
          600: '#060F16',
          700: '#050C12',
          800: '#04090E',
          900: '#03060A',
        },
        'dark-blue': '#1F4F72',
        'gold-light': '#E6CDA0',
        'blue-light': '#B8D6EC',
        'gray-light': '#F3F9FE',
        'text-gray': '#6E6E6E',
        'white-soft': 'rgba(255, 255, 255, 0.83)',
        'border-light': 'rgba(255, 255, 255, 0.27)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['80px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['50px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['40px', { lineHeight: '1.25', fontWeight: '600' }],
        'h4': ['25px', { lineHeight: '1.3', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'h6': ['17px', { lineHeight: '1.5', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'accent': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      boxShadow: {
        'card': '6px 6px 9px rgba(0, 0, 0, 0.2)',
        'card-hover': '8px 8px 15px rgba(0, 0, 0, 0.25)',
        'deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'sink': 'sink 0.3s ease',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        sink: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
