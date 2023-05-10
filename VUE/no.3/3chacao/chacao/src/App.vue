<template>
  <div>
    <card>
     <template v-slot:header>社区小贴</template>
     <template #main>后盾人是一个主张友好、分享、自由的技术交流社区。</template>
     <template #footer>请记住我们的口号 后盾人 人人做后盾</template>
    </card>
   
</div>
  
</template>

<script>
import HdButton from './components/Button.vue';
import Card from './components/Card.vue';
  export default {
  components: { Card, HdButton },
    
  }
</script>

<style lang="scss" scoped>

</style>