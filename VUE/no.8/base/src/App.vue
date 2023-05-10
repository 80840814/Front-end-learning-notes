<script setup>
import Hd from "./components/Hd.vue";
import Trans from "./components/Trans.vue";
import { ref } from 'vue';
const show=ref(false)
components: { Hd ,Trans}
</script>

<template>
 <!-- <hd v-if="show"></hd> -->
<transition>
<Trans v-if="show">demo12312</Trans>
</transition>
<button @click="show=!show">切换</button>
</template>

<style lang="scss" scoped>

.v-enter-active,
.v-leave-active{
  transition: 2s ease;
}
.v-enter-to,
.v-leave-from{
  opacity: 1;
  // transform: rotateY(100deg);
}

.v-leave-to,
.v-enter-from{
  opacity: 0;
  // transform: translateY(-200px);
}

button{
  display: block;
  margin-top: 10px;
}

</style>
