module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "red-hat" : ['Red Hat Display', 'sans-serif'],
        "roboto" : ['Roboto', 'sans-serif'],
      },
      colors: {
        'clr-primary': '#151371',
        'clr-secondary': '#FFC700',
        'clr-accent': '#FF00B8',
      }
    },
  },
  plugins: [],
}
