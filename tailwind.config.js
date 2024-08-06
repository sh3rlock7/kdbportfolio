/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
        colors: {
          light :'#f7fbff',
          main: '#02061a'
        },
        backgroundImage:{
          'intro': "url('/compu3.jpg')",
          'skills': "url('/skillbg.jpg')"
        },
        fontFamily:{
          'Poppins': ["Poppins", "sans-serif"],
          'Garamond': ["EB Garamond", "serif"]
        },
        flex:{
          '20':'1 1 25%'
        }
    },
  },
  plugins: [],
}

