import Login from '@/views/Login.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    // component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
