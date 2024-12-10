import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - BookShelf` || 'BookShelf'
  next()
})

app.use(router)
app.mount('#app')