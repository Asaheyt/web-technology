module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./projects/store/src/**/*.{html,ts}']
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
