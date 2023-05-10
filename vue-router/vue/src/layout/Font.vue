<template>
  <div>
    <router-view name="navigation" #default="{ Component }">
      <component :is="Component ?? Nav" />
    </router-view>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
</script>

<style lang="scss" scoped>
.navi {
  margin-bottom: 15px;
}
.router-view {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>
