<script>
import ClassComponent from './components/ClassComponent.vue';
import ClassList from './components/ClassList.vue';
import StyleComponent from './components/StyleComponent.vue';
import LessonFor from './components/LessonFor.vue';
import ArryComponent from './components/ArryComponent.vue';
import EventCompontent from './components/EventCompontent.vue';
import InputVue from './components/InputVue.vue';

export default{
  components:{ ClassComponent,
     ClassList, StyleComponent 
     ,LessonFor,ArryComponent,EventCompontent,InputVue},


  data() {
    return {
      title:'sdas',
      name:'1232121'
    }
  },
}
</script>

<template>
 <!-- <div id="hd">{{title}}--{{name}}</div>
 <ClassComponent />
   <class-component />  
    <class-list /> 
    <StyleComponent />  
    <LessonFor /> -->
   <!-- <ArryComponent /> -->
   <!-- <EventCompontent /> -->
<InputVue />
</template>


<style >

</style>
