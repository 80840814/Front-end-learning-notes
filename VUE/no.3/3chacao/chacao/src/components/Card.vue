<template>
    <div>
<header>
    <slot name="header" />
</header>
<main>
    <slot name="main" />
</main>
<footer>
    <slot name="footer" />
</footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
    border: 1px solid #ccc;
    header,main,footer {
        padding: 10px;
    }
    main {
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #ddd;
    }
}

</style>