<template>
  <div>
    <h2>hello {{tname}}!</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    tname: {
      type: String,
      default:'nmp'
    }
  }
}
</script>
<style scoped>
h2 {
  color: red;
}
</style>
