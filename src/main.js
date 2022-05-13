import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './registerServiceWorker'
import { DateTime, Interval } from 'luxon'
import VueClipboard from 'vue-clipboard2'

// import store from './store'
// import router from './router'
import Notifications from '@kyvg/vue3-notification'

loadFonts()

const app = createApp(App)

app.config.globalProperties.$dt = DateTime
app.config.globalProperties.$intl = Interval

app.use(Notifications)
app.use(vuetify)
app.use(VueClipboard)
// app.use(store)
// app.use(router)
app.mount('#app')
