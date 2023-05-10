<template>
  <div class="card">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  background-color: #ed9db2;
  padding: 10px;
  color: #fff;
}
</style>
