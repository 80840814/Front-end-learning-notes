import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Article from '@/views/front/article/List.vue'
import Show from '@/views/front/article/Show.vue'
import UserList from '@/views/front/user/List.vue'
import UserShow from '@/views/front/user/Show.vue'
import NotFound from '@/views/common/NotFound.vue'
import NavUser from '@/components/NavUser.vue'
import Font from '@/layout/Font.vue'
import Member from '@/layout/Member.vue'
import Email from '@/views/member/Email.vue'
import Mobile from '@/views/member/Mobile.vue'

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'link-active', 
    //  linkActiveClass: 'link-active',
    routes: [
        {
            path: '/',
            // path: '/xm',
            name: Font,
            component: Font,
            // 不加根不继承父级的路径
            children: [
                { path: '/', name: 'home', component: Home },
                { path: 'article', name: 'article', component: Article },
                { path: 'show/article-:id(\\d).html', name: 'article-show', component: Show },
                { path: 'user', name: 'user', components: { navigation: NavUser, default: UserList } },
                { path: 'user/:id(\\d+)', name: 'user-show', component: UserShow },
            ]
        },
        {
            path: '/member',
            component: Member,
            name:'member',
            //重定向到mobile里面
            redirect:{name:'mobile'},
            children: [
                { path: 'mobile', component: Mobile, name: 'mobile',alias:['/hd','/me'] },
                { path: 'email', component: Email, name: 'email' },
            ],
        },
        { path: '/:any(.*)', component: NotFound },
    ]
})
export default router