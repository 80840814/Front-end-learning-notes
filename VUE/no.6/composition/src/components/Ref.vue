<template>
  <button @click="reduce">-</button>
  {{ num }}
  <button @click="add">+</button>
</template>

<script>
import { ref ,watch,watchEffect} from 'vue';
    export default {
        props:{
            init:{type:Number,default:6}
        },
        emits:['change'],
        setup(props,context){
            const {emit}=context;
            let num=ref(props.init)
            let add=()=>{
                num.value++
                emit('change',num.value)
                
            }
            // let reduce=()=>{
            //     if (num.value>0) {
            //         num.value--
            //     }else{
            //         alert('数字不能小于0')
            //     }
            // }
            let reduce=()=>{
                num.value--
                emit('change',num.value)
            }
            // watch(num,(v)=>{
            //     if(v<0) num.value=0
            // })
            watchEffect(()=>{
                if(num.value<0) num.value=0
                emit('change',num.value)
            })
            return {num,add,reduce}
        },
        //以往方式
        // watch:{
        //     num(v){
        //         if(v<0) this.num=0
        //     }
        // }
    }
</script>

<style lang="scss" scoped>

</style>