<template>
  <div class="login">
    <h4>后台管理</h4>
    <el-form  label-width="100px" :model="loginData" style="max-width: 460px">
      <el-form-item label="UserName">
        <el-input v-model="loginData.name" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="input" type="password" placeholder="Please input password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Login',
  setup() {
    let loginData = reactive({
      name: '',
      password: '',
    })
    return { loginData }
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  margin: 150px auto;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 20px;
}
</style>
