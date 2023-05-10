import home from "@/views/home.vue";
import about from "@/views/about.vue";
import article from "@/views/article.vue";
const routes = [
    {
        path: '/about',
        name: 'about',
        meta: { title: '关于我们', isMenu: true ,permissions:['about']},
        // component: home, 
        component: () => import('@/views/about.vue')
    },
    {
        path: '/article',
        name: 'article',
        meta: { title: '文章列表', isMenu: true ,permissions:['article']},
        // component: home, 
        component: () => import('@/views/article.vue')
    }, 
]
export default routes