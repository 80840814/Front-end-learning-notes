<template>
<main>
      <div v-for="(component,index) of components"
        :key="index"
        @click="currentComponent=component.name"
        :class="{active:component.name==currentComponent}"
         
       >{{ component.title }}</div>
<!-- {{ currentComponent }} -->
</main>

<component :is="currentComponent" />
</template>

<script>
import Pay from './components/Pay.vue';
import Weixin from './components/Weixin.vue';



  export default {
    components: { Pay, Weixin },
    data() {
      return {
        currentComponent:'weixin',
        components:[
          {title:'微信管理',name:'weixin'},
          {title:'在线支付',name:'pay'},
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
main {
  display:flex;
  div {
    border: 1px solid #000;
    padding:10px;
    margin-right: 20px;
    cursor: pointer;
    &.active{
      background-color: rgb(236, 111, 111);
    }
  }
}
</style>