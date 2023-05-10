<template>
    <div>
        <input type="text" name="" id="" v-model="form.title">
    <hr>
        <textarea name="" id="" cols="5" rows="2" v-model="form.content"></textarea>
        <hr>
        
<!-- 复选框更改默认值 -->
        <!-- <input type="checkbox" name="" id="" v-model="form.isPost" true-value="yes" false-value="no"> -->
        <!-- <input type="checkbox" name="" id="" v-model="form.isPost" > -->
        <!-- <hr>
        <input type="checkbox"  name="" id="" value="linux" v-model="form.lessons">linux
        <input type="checkbox"  name="" id="" value="css" v-model="form.lessons">css
        <input type="checkbox"  name="" id="" value="js" v-model="form.lessons">js
        <input type="checkbox"  name="" id="" value="c" v-model="form.lessons">c -->
        <label v-for="l of lessons" :key="l.value">
           <input type="checkbox" v-model="form.lessons" :value="l.value" />
           {{ l.title }}
        </label>
        <hr>
        <input type="radio" name="" id="" v-model="form.sex" :value="1">男
        <input type="radio" name="" id="" v-model="form.sex" :value="2">女
        <hr>
        <!-- 可以多选 -->
        <!-- <select name="" id="" v-model="form.citys" multiple> -->
        <select name="" id="" v-model="form.citys" > 
            <option value="">===请选择城市===</option>
            <option value="beijing">beijing</option>
            <!-- 不仅局限于数值还可以是对象 -->
            <!-- <option value="{name:'wuhan'}">wuhan</option> -->
            <option value="huhan">wuhan</option>
            
        </select>
        <hr>
        {{ form }}

    </div>
</template>

<script>
// import lessons from '../../data/lessons';
const form={title:'',content:'asdas',isPost:'flase',lessons:[],sex:1,citys:''}
const lessons=[{title:'css',value:'css'},{title:'node',value:'node'},{title:'js',value:'js'}]
    export default {
        data() {
            return {
                form,
                lessons,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>