<template>
  <div>
<Ref :init="4" @change="changeHandle"/>
<br/>
{{ count }}
  </div>
</template>

<script>
import Ref from './components/Ref.vue'
import {ref} from 'vue'
  export default {
  components: { Ref },
    setup(){
      let count=ref(0)
      const changeHandle=(v)=>count.value=v
      return {count,changeHandle}
    }
  }
</script>

<style lang="scss" scoped>

</style>