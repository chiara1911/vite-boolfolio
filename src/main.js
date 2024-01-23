import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App).use(router).mount('#app');

//  app.use(router)

// app.mount('#app')
