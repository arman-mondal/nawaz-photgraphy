/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","halloween"],
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')
],
  
}

