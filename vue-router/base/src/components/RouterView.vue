<template>
<component :is="view" />
</template>

<script setup>
import { computed } from 'vue';
import {path}from'../router'
// 可以不加index
// import router from '../router/index'
import router from '../router'


const view=computed(()=>{
const route=router.routers.find(route=>route.path==path.value)
return route.component
})
</script>

<style lang="scss" scoped>

</style>