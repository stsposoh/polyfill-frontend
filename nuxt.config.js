module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'ru'
        },
        title: 'Посохов Станислав - веб разработчик',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Сайт-портфолио веб-разработчка Посохова Станислава' },
            { hid: 'keywords', name: 'keywords', content: 'веб разработка, верстка, создание сайтов' },
            { hid: 'robots', name: 'robots', content: 'index, follow' },
            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Сайт-портфолио веб-разработчка Посохова Станислава' },
            { hid: 'theme-color', name: 'theme-color', content: '#000' },
            { hid: 'msapplication-navbutton-color', name: 'msapplication-navbutton-color', content: '#000' },
            { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: '#000' }
        ],
        link: [
            { rel: 'dns-prefetch', href: 'http://polyfill.ru' },
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,700' }
        ]
    },
    /*
    script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.js', defer: 'defer' }
    ],
    */
    css: [
        '~assets/styles/common.styl'
        // { src: '~assets/styles/libs/test.css' }
    ],
    
    // build: {
    //     vendor: ['mylib']
    // },
    
    plugins: [
        { src: '~assets/js/experienceTimer.js', defer: 'defer' },
        { src: '~assets/js/headerBubble.js', defer: 'defer' }
    ],

    /*
    ** Customize the progress bar color
    */
    loading: false
    /*
    ** Build configuration
    */
}


