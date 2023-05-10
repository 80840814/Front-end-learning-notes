<script setup>
import api from '@/api/user';
import { useRoute } from 'vue-router';
const route=useRoute();
// console.log(route.params.id);
const user=await api.find( route.params.id) 
</script>

<template>
    <div class="show">
        <!-- <h3>{{ user.name }}</h3>
         -->
         {{ user.name }}

    </div>
</template>


<style lang="scss" scoped>
.show{
 padding: 20px;
    background-color: #fff;
    div{
        color: #666;
        line-height: 1.6rem;
        font-size: 0.8rem;
        text-indent: 2em;
    }
}

</style>