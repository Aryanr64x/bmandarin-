module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       nunito: ['Nunito', 'sans-serif'],
       lobster: ['Lobster', 'cursive']
      }
    },
    colors:{
      primary: '#F93943',
      secondary: '#FCECC9',
      tertiary: '#7EB2DD',
      white: '#ffffff',
      black: "#000000",
      star: "#FDBD31"
    }
  },
  plugins: [],
}
