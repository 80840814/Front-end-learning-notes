<template>
  <div :class="[type,{disable}]"> {{ content }}</div>
</template>

<script>
  export default {
    props:{
      content:{
        type:String,//Boolean Number
         default:'确定',
         //设置必填为真
        required:true
      },
      type:{
        type:String,
        default:'info',
        validator(v){
          return ['success','danger','info'].includes(v)
        }
      },
      disable:{type:Boolean,default:false}

    }
    
  }
</script>

<style lang="scss" scoped>
div{
  background-color: rgb(203, 203, 203);
  color: #000;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: .6;
  transition: 1s;
  &:hover{
    opacity: 1;
  }
  // width: 110px;
  display: inline-block;
  cursor: pointer;
  &.info{
  background-color: #ccc;
}
&.success{
  background-color: #4bae3e;
}
&.danger{
  background-color: rgba(255, 9, 9, 0.933);
}
&.disable{
  background-color: #ccc;
  cursor: default;
  opacity: 1;
}
}


</style>