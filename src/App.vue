
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <List></List> -->
    <!-- <DND></DND> -->
    <!-- <Base></Base> -->
    <!-- <slotTest></slotTest> -->
    <!-- <mh-model></mh-model> -->
    <!-- <kityMinder></kityMinder> -->
    <!-- <vue-minder-editor></vue-minder-editor> -->
    <!-- <gojs></gojs> -->
    <!-- <ShapesOfCSS></ShapesOfCSS> -->
    <!-- <axios-form></axios-form> -->
    <!-- <jsPlumb></jsPlumb> -->
    <!-- <es6Test></es6Test> -->
    <vue-source3></vue-source3>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import List from './components/List.vue'
// import DND from './components/DND.vue'
// import Base from './learnVUE/base.vue'
// import slotTest from './learnVUE/slotTest.vue'
// import mhModel from './learnVUE/mhModel.vue'
// import kityMinder from './learnVUE/kityMinder.vue'
// import gojs from './learnVUE/gojs';
// import ShapesOfCSS from './components/ShapesOfCSS.vue'
// import axiosForm from './learnVUE/axiosForm.vue'
// import jsPlumb from './components/jsPlumb.vue'
// import es6Test from './components/es6Test.vue'
import vueSource3 from './learnVUE/vueSource3.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // List
    // DND
    // Base
    // slotTest
    // kityMinder
    // gojs
    // ShapesOfCSS,
    // axiosForm,
    // jsPlumb
    // es6Test,
    // mhModel
    vueSource3
  },
  data() {
    return {
      importJson: {
        "root": {
          "data": {
            "text": "test222"
          },
          "children": [
            { "data": { "text": "地图aa" } },
            { "data": { "text": "百科aa","expandState":"collapse"}}
          ]
        },
        "template":"default"
      }
    }
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
