
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

createApp(App).use(router).mount('#app')

