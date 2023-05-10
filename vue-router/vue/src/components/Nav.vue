<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">首页</router-link>
    <router-link :to="{ name: 'article' }" :class="{ 'link-active': $route.path.includes('artilce') }">列表页</router-link>
    <router-link :to="{ path: 'user' }" :class="{ 'link-active': $route.path.includes('user') }">用户</router-link>
    <router-link :to="{ name: 'member' }">会员中心</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  a {
    text-decoration: none;
    padding: 5px 10px;
    margin-left: 10px;
    color: #333;
    font-weight: bold;
    // margin-bottom:10px ;
    border: 1px solid rgba(59, 141, 59, 0.136);
    box-shadow: 1px 1px 1px 1px rgba(111, 88, 88, 0.145);
  }
}
</style>
