import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    blueprint: md3,
    theme: {
      defaultTheme: 'dark'
    },
    defaults: {
      global: {
        ripple: false,
      },
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
