/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
        colors: {
          light :'#f7fbff'
        },
        backgroundImage:{
          'intro': "url('/assets/IntroPick.jpg')"
        }
    },
  },
  plugins: [],
}

