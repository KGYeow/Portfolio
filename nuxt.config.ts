// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: https://nuxt.com/docs/api/configuration/nuxt-config#ssr
  // ssr: false,

  app: {
    // Global page headers: https://nuxt.com/docs/api/configuration/nuxt-config#head
    head: {
      title: 'Modernize - Nuxt3 Typescript based Free Admin Dashboard Template',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
    },
    baseURL: '/Portfolio/',
    buildAssetsDir: 'assets',
  },

  // Global css: https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: [
    '@/assets/scss/config/custom/main.scss',
  ],

  // modules: https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: [
    '@element-plus/nuxt',
  ],

  // runtimeConfig: https://nuxt.com/docs/api/nuxt-config#runtimeconfig
  runtimeConfig: {
    public: {
      baseURL: "https://localhost:7204/api",
    }
  },

  // typescript: https://nuxt.com/docs/api/nuxt-config#typescript
  typescript: {
    shim: false
  },

  // build: https://nuxt.com/docs/api/nuxt-config#build
  build: {
    transpile: ["vuetify"],
  },

  // vite: https://nuxt.com/docs/api/nuxt-config#vite
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    // build: {
    //   rollupOptions: {
    //     plugins: [
    //       require('rollup-plugin-css-only')({
    //         output: 'bundle.css'
    //       })
    //     ]
    //   }
    // }
  },

  // nitro: https://nuxt.com/docs/api/nuxt-config#nitro
  nitro: {
    serveStatic: true,
  },

  compatibilityDate: '2024-11-07'
})