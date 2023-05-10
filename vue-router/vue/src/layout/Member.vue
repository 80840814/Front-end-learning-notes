<template>
  <div>
    <div class="layout-member">
      <nav>
        <div v-for="(link, index) of links" :key="index" @click="push(link)">{{ link.title }}</div>
        <!-- <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'member'}">修改手机号</router-link>
        <router-link :to="{name:'email'}">绑定邮箱</router-link> -->
      </nav>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const links = [
  { name: 'home', title: '首页' },
  { name: 'member', title: '修改手机号' },
  { name: 'email', title: '绑定邮箱' },
]
const push = link=> {
    // push有历史记录  **常用
    //replace没有历史记录
    //router.go(-1)
    //使用name的时候可以传参数，使用path的时候不能传
  router.replace({ name: link.name },)
}
</script>

<style lang="scss" scoped>
.layout-member {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #f3f3f3;
  padding: 20px;
  nav {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    background-color: rgb(167, 196, 167);
    padding: 10px;
    div {
      margin-bottom: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
  main {
    grid-column: span 9;
    padding: 20px;
  }
}
</style>
