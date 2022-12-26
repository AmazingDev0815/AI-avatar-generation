/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: '#FCFAFF',
          50: '#F9F5FF',
          100: '#F4FBFF',
          200: '#E9D7FE',
          300: '#D6BBFB',
          400: '#B692F6',
          500: '#9E77ED',
          600: '#7f56d9',
          700: '#6941c6',
          800: '#53389E',
          900: '#42307D',
        }
      }
    },
    fontFamily: {
      'poppinslight': ['poppinslight','Poppinslight'],
      'poppinsBold': ['poppinsBold', 'Poppinsbold'],
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
