/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      '2xs': '540px',
      'sm': '640px',
      'md': '768px',
      'xmd': '840px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2440px',
    },
    extend: {
      boxShadow: {
        'primary': '0px 0px 6px #7F56D9',
        '3xl': '0px 32px 64px -12px #33196C24'
      },
      colors: {
        primary: {
          25: '#FCFAFF',
          50: '#F9F5FF',
          100: '#F4EBFF',
          200: '#E9D7FE',
          300: '#D6BBFB',
          400: '#B692F6',
          500: '#9E77ED',
          600: '#7f56d9',
          700: '#6941c6',
          800: '#53389E',
          900: '#42307D',
        },
        success: {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },
        shadowColor: '#33196C24',
      },
    },
    fontFamily: {
      'poppinslight': ['poppinslight','Poppinslight'],
      'poppinsBold': ['poppinsBold', 'Poppinsbold'],
      'poppinsRegular': ['poppinsRegular', 'Poppinsregular'],
      'poppinsMedium': ['poppinsMedium', 'Poppinsmedium'],
      'poppinsSemiBold': ['poppinsSemiBold', 'Poppinsremibold'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
