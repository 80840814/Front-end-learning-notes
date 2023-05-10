<template>
    <card>
      <template #header>在线支付</template>
      <div>
        <x-input title="微信号" v-model="appName"/>
      </div>
    </card>
</template>

<script>


  export default {
    data() {
      return {
        appName:'demo'
      }
    },
    
  }
</script>

Card
<style lang="scss" scoped>

</style>