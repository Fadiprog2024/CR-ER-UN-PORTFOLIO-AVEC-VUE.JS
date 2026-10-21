
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')

if (redirect !== null) {
  const base = import.meta.env.BASE_URL
  const path = redirect.startsWith('/') ? redirect : '/' + redirect

  window.history.replaceState(
    null,
    '',
    base.replace(/\/$/, '') + path
  )
}

const app = createApp(App)
app.use(router)

if (redirect !== null) {
  const path = redirect.startsWith('/') ? redirect : '/' + redirect
  router.replace(path)
}

router.isReady().then(() => {
  app.mount('#app')
})

