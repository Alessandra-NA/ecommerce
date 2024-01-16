/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,ts}",
      "./node_modules/flowbite/**/*.js" // add this line
   ],
   theme: {
      colors: {
         'light-green': '#00B207',
         'dark-green': '#2C742F',
         'dark-gray': '#1A1A1A',
         'light-gray': '#4D4D4D',
         'bright-red': '#EA4B48'
      }
   },
   plugins: [
      require('flowbite/plugin')
   ],
}