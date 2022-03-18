const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'venstregrønn': {
        standard: "#006666",
        light: "#008888",
        shade: "#005555"
      },
      'mørk-tavle': {
        standard: "#003333",
        light: "#004444",
        shade: "#002222"
      },
      'mynte':{
        standard: "#51D795",
        light: "#71F7B5",
        shade: "#31B775"
      },
      'sol':{
        standard: "#FF993E",
        light: "#FFA94E",
        shade: "#EF892E"
      },
      'krekling':{
        standard: "#8B153D",
        light: "#9B254D",
        shade: "#7B052D"
      },
    },
    extend: {
      
    },
  },
  plugins: [],
}
