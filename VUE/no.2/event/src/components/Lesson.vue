<template>
    <div>
        <img :src="lesson.preview" alt="lesson.title">
        <h3 @dblclick="inputShow=true">
            <input v-if="inputShow" type="text"
             
             @input="$emit('update:modelValue',$event.target.value)"
             @keyup.enter="inputShow=false" 
             @blur="inputShow=false" />
            <strong v-else>{{lesson.title}}</strong>
            
            
        </h3>
        <h3 @dblclick="inputPriceShow=true">
            <input v-if="inputPriceShow" type="text"
            :value="lesson.price"
             @input="$emit('update:price',$event.target.value)"
             @keyup.enter="inputPriceShow=false" 
             @blur="inputPriceShow=false" />
            <strong v-else>{{lesson.price}}</strong>
            
            
        </h3>

        <span @click="del">x</span>
    </div>
</template>

<script>
import lessons from '../../../vue/data/lessons'
    export default {
        props:['lesson','modelValue','price'],
        data(){
            return{
                inputShow:false,
                inputPriceShow:false
            }
        },
        emits:{
            'update:modelValue':null,
            'update:price':null,
            del(v){
                if (/^\d+$/.test(v)) {
                    return true
                }
                // console.error('del emit 值不对');
                throw new Error('el emit 值不对')
            }
        },
        methods:{
            del(){
                if (confirm('确认要删除吗？') ){
                    this.$emit('del',this.lesson.id)
                } 
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        border: 1px solid #ccc;
        text-align: center;
        transition: 1s;
        position: relative;
        &:hover{
            box-shadow: 0 0 20px;
            >span{
                opacity: 1;
            }
        }
        span{
            display: block;
            background-color: #666;
            color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-content: center;
            position: absolute;
            top:10px;
            right: 10px;
            cursor: pointer;
            font-size: 12px;
            opacity: 0;
            transition: 1s;
        }

        h3{
            padding: 0 0 10px 0;
            margin: 0;
            font-size: 16px;
        }
        img{
            width: 100%;
        }
        
    }
</style>