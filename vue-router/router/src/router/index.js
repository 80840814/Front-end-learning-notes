import { createRouter, createWebHistory } from "vue-router";
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import login from '@/views/login.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/home',
        component: home,
        name: 'home'
    },
    {
        path: '/about',
        component: about,
        name: 'about'
    }, {
        path: '/login',
        component: login,
        name: 'login'
    }
    ],
})
router.beforeEach((to, from) => {
    // if (to.name == 'about') next('/login')
    // else next()
    //使用next最少使用一次
    if (to.name == 'about') return ('/login')
    
    // to and from are both route objects. must call `next`.
    // console.log(from.name,to.name);
})
export default router