<script setup>
import api from '@/api/article'
import ListArticle from '@/components/ListArticle.vue'
import { useRoute } from 'vue-router'
import Card from '@/components/Card.vue'
import { watch, ref } from 'vue'
const article = ref()
const route = useRoute()
watch(route, async () => {
  article.value = await api.find(route.params.id)
})
// console.log(route.params.id);
article.value = await api.find(route.params.id)
</script>

<template>
  <div class="article-show">
    <div class="show">
      <h3>{{ article.title }}</h3>
      <div>
                             {{ article.content }}
      </div>
    </div>
    <div class="list-article">
      <Card>
        <template #header>文章列表</template>
        <list-article />
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-show {
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  .show {
    grid-column: span 4;
    // padding: 20px;
    background-color: #fff;
    div {
      color: #666;
      line-height: 1.6rem;
      font-size: 0.8rem;
      text-indent: 2em;
    }
  }
  .list-article {
    grid-column: span 2;
  }
}
</style>
