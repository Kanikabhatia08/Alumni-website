/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        fadeInTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        typedLetter: {
          '0%': {
            opacity: '0', // Invisible at the start
            transform: 'translateY(-10px)', // Slightly above
          },
          '99%': {
            opacity: '0', // Still invisible at 99%
          },
          '100%': {
            opacity: '1', // Fully visible at the end
            transform: 'translateY(0)', // Move to normal position
          },
        },
      },
      animation: {
        fadeInTop: 'fadeInTop 1.5s ease-out forwards',
        typedLetter: 'typedLetter 0.1s forwards',
        typewriter: 'typewriter 4s steps(40) 1s 1 normal both, blink 0.75s step-end infinite',
      },
      colors: {
        "blue": '#005b96',
        "darkBlue": "#2E5090",
        "lightBlue": "#aec8e2",
        "hoverBlue": "#eaf1fe",
        "gray": "#757575",
      },
      fontFamily: {
        "mons": "'Montserrat', sans-serif",
        "playfair": "'Playfair Display', serif",
        "poppins": "'Poppins', sans-serif",
      },
      backgroundImage: {
        'hero-pattern': "url('images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
