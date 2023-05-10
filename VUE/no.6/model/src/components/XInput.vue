<template>
   <label for="">
        <div>{{ title }}</div>
        <input v-model="content">

    </label>

</template>

<script>
    export default {
        props:['title','modelValue'],
        emits:['update:modelValue'],
        data() {
            return {
                content:this.modelValue
            }
        },
    }
</script>

<style lang="scss" scoped>
    label{
        display: flex;
        justify-items: center;
        div{
            color: #666;
            font-size: 16px;
            margin-right: 10px;
        }
        input{
            padding: 5px 10px;
            border: 1px solid #000;
            outline: none;
        }
    }
</style>