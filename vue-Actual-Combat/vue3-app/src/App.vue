<template>
  <button type="success">demo</button>
</template>

<script>
import { getData } from './http/api.js'

export default {
  name: 'App',
  components: {},
  setup() {
    getData.then((res) => {
      console.log(res)
    })
  },
}
</script>

<style></style>
