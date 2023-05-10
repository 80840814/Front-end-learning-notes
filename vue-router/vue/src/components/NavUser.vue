<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">首页</router-link>
    <router-link :to="{ name: 'user' }">用户列表</router-link>
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
    border: 1px solid rgba(59, 141, 59, 0.136);
    box-shadow: 1px 1px 1px 1px rgba(111, 88, 88, 0.145);
  }
}
</style>
