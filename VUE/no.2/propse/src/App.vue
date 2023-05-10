<template>
  <div>
<!-- <hd-button :content="btContent"></hd-button> -->
<hd-button :content="btContent" type="success" />
<hd-button content="删除" type="danger" style="margin-right:5px;" />
<hd-button content="默认" type="danger" style="margin-right:5px;" />
<hd-button content="编辑" :disable='true' type="info" />
<hd-button  v-bind='{content:"save",type:"danger" ,style:"margin:20px 20px"
}' />
<hd-button  :disable='true' type="info" />
  </div>
</template> 

<script>
import hdButton from './components/Button.vue';
  export default {
    components:{hdButton},
    data() {
      return {
        btContent:'save-sub',
     
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>