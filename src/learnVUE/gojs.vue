<template>
  <div id="myDiagramDiv"
     style="width:400px; height:150px; background-color: #DAE4E4;"></div>
</template>
<script>
// import go from 'gojs'
window.go = require('../../gojs.js');
var $ = window.go.GraphObject.make;
export default {
  data() {
    return {}
  },
  mounted(){
    console.log('go,,,,,,', window.go);
    
    var myDiagram =$(window.go.Diagram, "myDiagramDiv", {
      isReadOnly: true,
      allowHorizontalScroll: false,
     allowVerticalScroll: false, // 水平/垂直滚动条，阻止画布拖动
     initialContentAlignment: window.go.Spot.Top, // 节点在画布顶部对齐
     "toolManager.mouseWheelBehavior": window.go.ToolManager.WheelNone, //鼠标滚轮事件禁止
    });
    myDiagram.model = new window.go.Model(
  [ // for each object in this Array, the Diagram creates a Node to represent it
    { key: "Alpha" },
    { key: "Beta" },
    { key: "Gamma" }
  ]);
  }
}
</script>
<style>

</style>