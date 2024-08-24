/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.vue',
    './src/components/*.vue',
    './src/views/**/*.vue',
    './src/views/*.vue',
    './src/layout/*.vue',
    './src/App.vue',
    './index.html',
    './extera.html'
  ],
  theme: {
      extend: {
        transitionProperty: {
          'height': 'height',
          'size': 'height, width',
        },
        fontFamily: {
          estedad : 'estedad , sans-serif'
        },
        zIndex: {
          '100': '100',
        },
        colors: {
          'background' : '#E8EFFF',
          'text' : '#53566D',
          'textInverted' : '#A8A8BF',
          'brand' : '#3275F2',
        }
      },
    plugins: [],
  }
}
