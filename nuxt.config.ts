// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '~/assets/styles/main.scss',
  ],
  app: {
    head: {
      titleTemplate: '%s - 米画师',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '米画师是为企划方与自由画师量身打造的专业美术外包服务平台，提供安全的交易担保、高效的稿件管理工具以及便捷的云端同步功能，为您带来与众不同的约稿体验，快速解决各种美术外包需求。' },
        { name: 'keywords', content: '米画师,mihuashi,约稿平台,约稿,插画外包,插画外包网站,美术外包平台,游戏美术外包,画师,绘师,美术外包,原画外包,插画师,原画师,原画外包网站' },
      ]
    }
  },
  modules: [
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'vue3-carousel-nuxt'
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  carousel: {
    prefix: '__carousel__'
  }
})
