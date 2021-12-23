module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./projects/store/src/**/*.{html,ts}']
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        spin: 'spin 1s linear infinite'
      }
    },
  },
  plugins: [],
}
