/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        eef3f8: '#eef3f8',
        ash: "#747474"
      },
      'object-contain-25': {
        objectFit: 'contain',
        height: '20px',
        width: '20px',
      },
    },
  },
  variants: {
    extend: {
      // ...
     borderStyle: ['hover'],
    }
  },
  plugins: [],
}

