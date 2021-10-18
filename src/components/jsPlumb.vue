<template>
  <div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="margin-left:50px;"></div>
  </div>
</template>
<script>
import {jsPlumb} from 'jsplumb'
export default {
  data() {
    return {}
  },
  mounted() {
    const jsPlumbIns = jsPlumb.getInstance();
    jsPlumbIns.ready(()=>{
      jsPlumbIns.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Blank',
        overlays: [['Arrow', {width: 8, length: 8, location: 1}]],
        anchor: ['Bottom'],
      })
    })
  },
  methods: {

  }
}
</script>
<style scoped>
.item{
  width: 100px;
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}

</style>