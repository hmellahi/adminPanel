import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,700' }
    ]
  },

  srcDir: 'client/',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          name: 'English',
          file : 'en-EN.js',
          //isRTL:true
        },
        {
          code: 'es',
          name: 'Español',
          file : 'es-ES.js'
        },
        {
          code: 'fr',
          name: 'Français',
          file : 'fr-FR.js'
        },
        {
          code: 'ar',
          name: 'Arabic',
          file : 'ar-AR.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }]
  ],

  /*i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          Ecommerce:"lol"
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido',
          Ecommerce:"lolES"
        }
      }
    }
  },*/
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: "00bf72", //colors.green.accent3,
      //grey:"#F4F7FC"
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    //vendor: ['chart']
  },
  /*transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
        this.$store.commit("setRoute", this.$route.name);
        document.title = this.$store.getters.appTitle;
    }
  },*/
}
