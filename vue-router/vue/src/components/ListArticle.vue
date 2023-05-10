<template>
  <router-link
    v-for="article of articles"
    :key="article.id"
    :to="{ name: 'article-show', params: { id: article.id } }"
    class="list-item">
    {{ article.title }}
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api/article'
const articles = ref(await api.all())
</script>

<style lang="scss" scoped>
.list-item {
  background-color: #16a085;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
  flex: 1;
}
</style>
