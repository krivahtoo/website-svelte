module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
