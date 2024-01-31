import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    defaults: {
      global: {
        ripple: false,
      },
      VBtn: {
        rounded: 'lg'
      },
      VCard: {
        rounded: 'lg'
      },
      VSheet: {
        rounded: 'lg'
      },
      VListItem: {
        rounded: 'lg'
      }
    },
    blueprint: md3,
    theme: {
      defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        account: mdiAccount,
      },
      sets: {
        mdi,
      },
    },
  })
  app.vueApp.use(vuetify)
})
