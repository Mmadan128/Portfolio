/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF5FC',
          100: '#D6E8F7',
          200: '#B3D1EF',
          300: '#88B0D8',
          400: '#5889C0',
          500: '#3D6A9C',
          600: '#1E3A5F',
          700: '#16304D',
          800: '#0E2035',
          900: '#081018',
        },
        secondary: {
          50: '#F0F9FA',
          100: '#DAF0F3',
          200: '#B5E0E6',
          300: '#84CAD3',
          400: '#4EAEBB',
          500: '#3A8A95',
          600: '#2E6F78',
          700: '#245761',
          800: '#1A3F47',
          900: '#0F2428',
        },
        accent: {
          50: '#FFF8EE',
          100: '#FEEBD2',
          200: '#FDD7A5',
          300: '#FBB869',
          400: '#FA9E37',
          500: '#F78404',
          600: '#C66803',
          700: '#954E02',
          800: '#633401',
          900: '#331A01',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};