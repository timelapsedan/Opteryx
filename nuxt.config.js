export default {
  target: 'static',
  // env variables
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    // openApiKey: process.env.OPENAI_API_KEY
  },
  // Use when creating dist in a sub folder
  // router: {
  //  base: '/chiro/'
  // },
  head: {
    title: 'Opteryx',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Oswald|Montserrat:400,500,600',
      },
      { 
        rel: 'icon', type: 'image/x-icon',
        href: '/favicon.ico' 
      }
    ]
  },
  css: [
    '~assets/css/reset.css',
    '~assets/css/base.css',
    '~assets/css/containers.css',
    '~assets/css/typography.css',
    '~assets/css/buttons.css'
  ],
  plugins: [
    {
      src: '@/assets/js/main.js', ssr: false
    }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
    // removes on page css - need to add this to docs
    extractCSS: true,

    // minify build
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },
    // post css
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-url': {},
        autoprefixer: {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    transpile: [
      'GLTFLoader.js',
      'DRACOLoader',
      'TransformControls.js',
      'RenderPass',
      'app'
    ],
    extend (config, ctx) {
    }
  }
}
