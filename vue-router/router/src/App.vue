<template>
	<div>
		<router-link :to="{ name: 'home' }">首页</router-link>
		<router-link :to="{ name: 'about' }">关于</router-link>
    <router-link :to="{ name: 'login' }">登录</router-link>
	</div>

	<div class="view">
		<router-view />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
a{
  display: inline-block;
  color: #fff;
  background-color: #e67e22;
  padding: 10px;
}
.view{
  background-color: #f3f3f3;
  padding: 20px;
  margin-top: 20px;
}
</style>
