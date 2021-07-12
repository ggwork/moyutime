export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '墨鱼推荐',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://lib.baomitu.com/normalize/4.2.0/normalize.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/global.css' }
    ],
    script: [
      // 友盟
      {
        src:'https://s9.cnzz.com/z_stat.php?id=1279994399&web_id=1279994399',type:'text/javascript',charset:'utf-8'
      },
      // 全局js
      {
        src:'/global.js',type:'text/javascript',charset:'utf-8',cacheControl:'no-cache'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  server:{
    port: 3001,
    host:'0.0.0.0'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/common.js',
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/ctx-error.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
