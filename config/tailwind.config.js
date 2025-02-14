const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // You might want to add these based on your design:
      backgroundColor: {
        'black-opacity-30': 'rgba(0, 0, 0, 0.3)', // For your video overlay
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '50': '50', // For your navigation
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}