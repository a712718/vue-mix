
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <List></List> -->
    <!-- <DND></DND> -->
    <!-- <Base></Base> -->
    <!-- <slotTest></slotTest> -->
    <!-- <mh-model></mh-model> -->
    <axios-form></axios-form>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import List from './components/List.vue'
// import DND from './components/DND.vue'
// import Base from './learnVUE/base.vue'
// import slotTest from './learnVUE/slotTest.vue'
// import mhModel from './learnVUE/mhModel.vue'
import axiosForm from './learnVUE/axiosForm.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // List
    // DND
    // Base
    // slotTest
    // mhModel
    axiosForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
