<template>
    <header>
        <slot name="header" />
    </header>

    <main>
        <slot />
    </main>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
    border: 1px solid #000;
    header{
        border-bottom: solid 1px #ddd;
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        background-color: rgb(142, 137, 137);
        
    }
    main{
        padding: 10px;

    }
}

</style>