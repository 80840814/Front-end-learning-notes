# vue-router



## animation动画

### 实现路由的动画的方式：

#### 组件那边的定义方式：

```html
		<router-view #default="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
```

#### css的定义内容

进入的开始：

```vue
	.fade-enter-from {
		transform: translateX(-100%);
		opacity: 0;
	}
```

进入的过程：

```vue
	.fade-enter-active {
		transition: all 1s ease;
	}
```

进入的结束：

```vue
	.fade-enter-to {
		transform: translateX(0);
		opacity: 1;
	}
```

离开的开始：

```vue
	.fade-leave-from {
		transform: translateX(0);
	}
```



离开的过程：

```vue
	.fade-leave-active{
		transition: all 1s ease;
	}
```



离开的结束：

```vue
	.fade-leave-to {
		transform: translateX(-100%);
	}
```

### 不同模式的切换效果：

1. 默认
2. 先出后进    mode="out-in"
3. 先进后出    mode="in- out"
4. 通过css定义div的定位  将mode去除后，更改组件的样式，因为是文字流显示，给div一个绝对定位就可以实现效果

### 使用组件库[animate][https://animate.style/] 设置动画

1. 先给项目引入这个CDN文件
2. 再进行编辑进入和离开的特效
3. `animate__animated`是必须要写的，后面的在网站里面选择

```css
		<transition name="fade" 
			enter-active-class="animate__animated animate__bounceIn" 
			leave-active-class="animate__animated animate__hinge">
				<component :is="Component" />
		</transition>
```

### 为不同的路由设置不同的动画效果

#### 给路由里面加一个元信息

`meta: { enterClass: 'animate__animated animate__bounceIn' }`

#### 先把路由拿过来之后，取路由里面的元信息

```html
	<router-view #default="{ Component, route }">
			<transition
				name="fade"
				:enter-active-class="
					route.meta.enterClass ?? 'animate__animated animate__rotateOut'
				">
				<component :is="Component" />
			</transition>
	</router-view>
```

#### 如果有就取前者，没有就取后者



### 获取文章的内容：

#### 先获取这个链接的内容

```js
<script setup>
	import { ref } from "vue";
	const lists =await fetch(`http://127.0.0.1:3003/article`).then((r) => r.json());
</script>
```

#### 对链接内的内容，进行循环取出

```html
<div class="page">
		<div class="lists">
			<router-link
				:to="{ name: 'article', query: { id: article.id } }"
				v-for="article in lists"
				:key="article.id"
				>{{ article.title }}</router-link
			>
		</div>
	</div>
```

因为是异步。所以app.vue里面在代码的外部需要加一个`suspense`标签

并且代码要在根组件下面

### scrollBehaveior处理滚动

#### 普通的处理

```js
scrollBehavior(to, from, savedPosition) {
        return savedPosition ?? { el: '.page', top: 0, behavior: 'smooth' }
    },
```

`el`表示跳转到页面的哪一个部分，比如视频网站点击某一分类之后直接跳到视频观看页面，而不是轮播图区域

`behavior: 'smooth'`表示平滑移动，不会出现比较生硬的情况

#### 不同路由处理滚动：

`meta: { scrollEl: { el: '#home' } },`元数据里面设置这个东西

`if (to.meta.scrollEl?.el) options.el = to.meta.scrollEl.el`通过条件去判断，满足就进行跳转，反之不进行操作

#### 异步处理滚动的效果：

```js
return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(savedPosition ?? options)
            }, 1000)
        })
```

## 路由的懒加载

> 未经过懒加载

<img src="C:\Users\17188\AppData\Local\Temp\tianruoocr\截图_20230215214635.png" alt="截图_20230215214635" style="zoom:50%;" />

> 懒加载的方法：

```js
   {
            path: '/',
            name: 'home',
            //将之前的component: home 
            //变为异步
            component: () => import('@/views/home.vue')
        },
```



> 懒加载之后：

<img src="C:\Users\17188\AppData\Local\Temp\tianruoocr\截图_20230215215157.png" alt="截图_20230215215157" style="zoom:50%;" />

> vite合并打包之后

<img src="C:\Users\17188\AppData\Local\Temp\tianruoocr\截图_20230215220215.png" alt="截图_20230215220215" style="zoom:50%;" />

## 动态添加路由

路由的管理

路由添加

```js
router.addRoute({
    path: '/article',
    name: 'article',
    // component: article,
    component: () => import('@/views/article.vue')
})
```

路由的删除

```js
router.removeRoute('article')
```

添加一个404页面

```js
  		{
            path: '/:any(.+)',
            name: 'notFound',
            // component: home,
            component: () => import('@/views/404.vue')
        },
```

获取当前路由

`console.log(router.getRoutes());`

动态展示菜单：

```js
			<span
					v-for="route of $router.getRoutes()"
					:key="route.name">
					<router-link
						:to="{ name: 'home' }"
						v-if="route.meta?.isMenu && route.meta?.title"
						>{{ route.meta.title }}</router-link>
				</span>
```

```js
 		{
            path: '/:any(.+)',
            name: 'notFound',
            meta: { title: '404' ,isMenu:false},
            // component: home,
            component: () => import('@/views/404.vue')
        },
     
```

动态渲染router-link

```js
<div class="link">
						<span
							v-for="route of $router.getRoutes()"
							:key="route.name">
							<router-link
								:to="{ name: route.name }"
								v-if="route.meta?.isMenu && route.meta?.title"
								>{{ route.meta.title }}</router-link
							>
						</span>
					</div>
```

获取到router.js的数据

进行渲染这个router-link

配置基础的路由列表：

```js
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
```

获取路由权限将没有权限的路由进行过滤

```js
import routes from './routes'

const getRoutes = async () => {
    const permissions = await fetch(`http://127.0.0.1:3003/permissions`).then(r => r.json())


    return routes.filter(route => {
        return route.meta.permissions?.every(p => permissions.includes(p))
    })
}
export { getRoutes }

```

完成动态的路由注册

```js
let isAddRoute = false
router.beforeEach(async (to, from, next) => {
    const routes = await getRoutes()
    if (isAddRoute === false) {
        routes.forEach(route => {
            router.addRoute(route)
        })
        isAddRoute = true
        return next(to.fullPath)
    } else {
        next()
    }
})
getRoutes()
```

