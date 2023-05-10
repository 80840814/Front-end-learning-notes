<template>
    <!-- <div>{{ obj.name }} </div> -->
    <!-- <div v-for="(a,index) in arr" :key="index">{{ a }}</div> -->
    <div v-for="(a,index) in arr" :key="index">{{ a }}</div>
</template>

<script>
const obj={name:'dasd'}
const arr=['dsadsa','dsadsad','dsadsa']
    export default {
        data() {
            return {
                obj,
                arr,
            };
        },
    mounted() {
        setTimeout(() => {
         this.arr.push('dasdsads')
        }, 2000);
    }
}

</script>

<style lang="scss" scoped>

</style>