<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <buttons />
        </el-main>
        <el-footer><about/></el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import About from "./views/About.vue";
import Buttons from "./views/Buttons.vue";
import Main from "./views/Main.vue";

</script>

<style lang="scss" scoped></style>