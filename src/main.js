import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')

if (redirect !== null) {
  const base = import.meta.env.BASE_URL
  const path = redirect.split('?')[0]
  const destination = base + path.replace(/^\/+/, '')

  window.history.replaceState(null, '', destination)
}

createApp(App).use(router).mount('#app')
