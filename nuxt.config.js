module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Посохов Станислав - веб разработчик',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сайт-портфолио веб-разработчка Посохова Станислава' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,700' }
    ],
    script: [
      { src: 'http://polyfill.ru/js/libs.min.js', defer: 'defer' },
      { src: 'http://polyfill.ru/js/common.js', defer: 'defer' }
    ]
  },

  css: [
    '~assets/styles/common.styl'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
