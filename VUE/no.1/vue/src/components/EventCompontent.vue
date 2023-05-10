<template>
    <div @click="d1">
        <div @click.stop="d2">d2</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num:1
            }
        },
        methods:{
            d1(){
                console.log('d1');
            },
            d2(){
                console.log('d2');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>