import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8000 // default: 3000
  },

  // Env variable
  env: {
    GOOGLE: {
          protocol: 'oauth2',
          response_type:'code',
          client_id: '322340038052-ggato5uephq7cv0b2fjcfv43k5rje6tt.apps.googleusercontent.com',
          redirect_uri: 'http://localhost:8000/login',
          scope: 'openid profile email',
          state:'',
          code_challenge_method: ''
         }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - app',
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios:{
    baseUrl:'http://localhost:3000'
  },
  router: {
    middleware: ['auth'],
  },

  //Auth
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'id',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/users/login', method: 'post' },
          user: false,
          logout: false
          
        }
      },
     /* google: {
        clientId:process.env.CLIENT_ID,
        codeChallengeMethod: "",
        responseType: 'code',
       endpoints: {
          token: 'http://localhost:3000/users/login/google', // somm backend url to resolve your auth with google and give you the token back
          userInfo: 'http://localhost:3000/users/user' // the endpoint to get the user info after you recived the token 
        },
      }, */
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light:true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        }

      }
    }
  },
  watchers: {
    webpack: {
      poll: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
