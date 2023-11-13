/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./**/*.{html,js}",
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
      colors: {
        'lilac': '#bca1cc'
      }
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  