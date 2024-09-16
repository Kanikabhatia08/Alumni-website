/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "blue": '#005b96',
      "darkBlue": "#2E5090",
    },
    fontFamily:{
      "mons" :"'Montserrat', sans-serif",
      "playfair": "'Playfair Display', serif",
    },
    backgroundImage: {
      'hero-pattern': "url('images/banner.jpg')",
    },

    
  },
  plugins: [],
}
