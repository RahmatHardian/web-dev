/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f7',
          100: '#ffe5ec',
          200: '#ffccd9',
          300: '#ffb3c6',
          400: '#ff99b3',
          500: '#ffc0d0',  // Soft blush pink (main)
          600: '#ff85a1',
          700: '#ff5c85',
          800: '#ff3369',
          900: '#e6004d',
        },
        secondary: {
          50: '#f0f5f0',
          100: '#e1ebe0',
          200: '#c8dcc7',
          300: '#afcdae',
          400: '#96be95',
          500: '#a8dadc',  // Sage green (main)
          600: '#7db57c',
          700: '#649063',
          800: '#4b6b4a',
          900: '#324631',
        },
        accent: {
          50: '#fff9f5',
          100: '#fff3eb',
          200: '#ffe7d6',
          300: '#ffdbc2',
          400: '#ffcfad',
          500: '#ffd4b8',  // Warm peach (main)
          600: '#ffb899',
          700: '#ff9c7a',
          800: '#ff805b',
          900: '#ff643c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
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
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
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
      },
    },
  },
  plugins: [],
}
