<template>
  <router-link
    v-for="user of users"
    :key="user.id"
    :to="{ name: 'user-show', params: { id: user.id } }"
    class="list-user">
    {{ user.name }}
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api/user'
const users = ref(await api.all())
</script>

<style lang="scss" scoped>
.list-user {
  background-color: #e77c8e;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
  flex: 1;
}
</style>
