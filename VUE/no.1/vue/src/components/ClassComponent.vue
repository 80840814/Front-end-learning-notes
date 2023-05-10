<template>
    <div class="Classponent">
    <div class="c1" :class="{current:active,hd:active}">后盾人 </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:true
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.Classponent{
.c1{
    color: pink;
}
}
.current{
    background: black;
}
</style>