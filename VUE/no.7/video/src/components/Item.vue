<script setup>
import useTodo from '../composable/useTodo';
const {del}=useTodo()
const {todo}=defineProps({
  todo:{type:Object,required:true}
})
</script>
<template>
  <section>
    <div class="item">
      {{ todo.id }}
    <input type="text" :value="todo.title" />
    <button @click="del(todo.id)">删除</button>
  </div>
  </section>
 
  
  
  </template>

<style lang="scss">
div.item{
  display: flex;
  input{
  padding: 10px;
  flex: 1;
}
button {
    
    margin-left: 10px;
    background-color: #d35400;
    color: #fff;
    border: none;
    padding: 5px 10px;
    }

}

</style>