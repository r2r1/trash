import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import { fa } from 'vuetify/lib/iconsets/fa'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#d7ccc8',
          surface: '#ffffff',
          primary: '#263238',
          secondary: '#4f5b62',
          accent: '#7e57c2',
          error: '#ff8a80'
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi, fa
      }
    }
  }
})
