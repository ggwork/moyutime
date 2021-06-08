export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '墨鱼时间',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '墨鱼既摸鱼，在线工具推荐，在线工具开发，在线电子书下载，在线api文档阅读，在线牢骚吐槽' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/global.css' }
    ],
    script: [
      // 友盟
      {
        src:'https://s9.cnzz.com/z_stat.php?id=1279994399&web_id=1279994399',type:'text/javascript',charset:'utf-8'
      },
      // 全局js
      {
        src:'/global.js',type:'text/javascript',charset:'utf-8'
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
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/ctx-error.js',
    '@/plugins/common.js'
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
