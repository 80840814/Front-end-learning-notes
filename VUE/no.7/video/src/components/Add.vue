<script setup>
import {ref} from 'vue'
import useTodo from '../composable/useTodo'
const title=ref('')
const onSubmit=()=>{
    useTodo().add({title:title.value})
    title.value=''

}
</script>

<template>
    <div class="add">
         <input type="text" v-model="title" placeholder="回车提交内容" @keyup.enter="onSubmit" />
    </div>
 </template>

<style lang="scss" scoped>
    div.add{
        display: flex;
        input{
            border: 5px solid #16a085;
            padding: 10px;
            flex: 1;
        }
    }
</style>