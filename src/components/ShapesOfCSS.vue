<template>
  <div style="text-align: left">
    <h4>the shapes of css</h4>
    <h3>平行四边形</h3>
    <div class="parallelogram"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.parallelogram {
  width: 150px;
  height: 100px;
  transform: skew(20deg);
  background: red;
  transform-origin: 0% 0%;
}
</style>