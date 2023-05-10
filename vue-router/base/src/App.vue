<template>
  <router-link to="/">Home</router-link>

  <router-link to="/about">About</router-link>
  <hr>
 
  <router-view />
 
</template>

<script setup>

</script>

<style lang="scss" scoped>
a{
  display: inline-block;
  margin-right: 20px;
}
</style>