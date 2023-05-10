<template>
    <div class="ClassList">

    <div v-for="(lesson,index) in lessons" :key="index">
    <span :class="{'isDelete':lesson.satus}">{{ lesson.title }}</span>
    <button @click="lesson.satus=!lesson.satus">{{lesson.satus?'取消':'删除'}}</button>
    </div>
</div>
</template>
<script>
import lessons from '../../data/lessons';
    export default {
    data() {
        return {
            lessons
        }
    },
    }
</script>

<style lang="scss" scoped>
.ClassList{
    div {
        display: flex;
        justify-content: space-between;
        // border: 1px solid #000;
        span {
            &.isDelete{
                text-decoration: line-through;
                // border: 1px solid #000;
                font-size: 20px;
                // background-color: red;

            }
        }
    }
 
}

</style>