// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '~/assets/styles/main.scss',
  ],
  app: {
		baseURL: '/white-noise/',
    head: {
      titleTemplate: '%s - WhiteNoise',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]
    }
  },
  modules: [
    // '@vueuse/sound/nuxt',
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0',
    port: 4001
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    optimizeDeps: {
      // * @vueuse/sound/nuxt
      exclude: ['vue-demi']
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // sound: {
  //   sounds: {
  //     scan: true
  //   }
  // }
})
