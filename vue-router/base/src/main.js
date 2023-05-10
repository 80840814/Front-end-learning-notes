import { createApp } from 'vue'
import RouterView from './components/RouterView.vue';
import RouterLink from './components/RouterLink.vue';
import './style.css'
import App from './App.vue'

const app=createApp(App)
app.component('RouterView',RouterView)
app.component('RouterLink',RouterLink)
app.mount('#app')
