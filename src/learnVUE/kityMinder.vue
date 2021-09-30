<template>
  <div>
    <div @click="addChild">添加子节点</div>
    <div id="kityMinderContainer" style="width:400px; height: 400px"></div>
  </div>
</template>
<script>
import kity from 'kity';
import kityMinder from 'kityminder-core'
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(kity,kityMinder);
    // window.kity = kity;
    // window.kityMinder = kityMinder;
    this.naotu()
  },
  methods: {
    naotu(){
      this.km = new window.kityminder.Minder({
        renderTo: '#kityMinderContainer'
      })
    },
    addChild(){
      
    }
  }
}
</script>
<style>

</style>