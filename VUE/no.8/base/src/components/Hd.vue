<script setup>
import { ref } from 'vue';
const show=ref(false)
</script>
<template>
    <section>
        <div>保存提交</div>
    </section>
  

</template>

<style lang="scss" scoped>
section{
    perspective: 800px;
}
div{
  background-color: #666;
  padding: 20px;
  border-radius: .5rem;
  display: inline-block;
  color: aqua;

  animation: identifier 2s ease;
  transition: 1s;
  cursor: pointer;
  &:hover{
    background-color: orange;

  }
}

@keyframes identifier {
  from{
    transform: translateX(-15px);
  }
  20%{
    transform: translateX(15px);
  }
  40%{
    transform: translateX(-15px);
  }
  60%{
    transform: translateX(15px);
  }
  80%{
    transform: translateX(-15px);
  }
  to{
    transform: translateX(0px);
  }
}
button{
  margin-top: 40px;
}
</style>
