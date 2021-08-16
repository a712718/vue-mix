<template>
  <div>
    <navigationLink :url="url">
      <h>百度</h>
    </navigationLink>
  </div>
</template>
<script>

// 作为插槽的那个组件（navigationLink 中有slot）
// 使用插槽组件的地方，在这个组件里写要插入的内容
import navigationLink from '../components/navigationLink.vue';

export default {
  components: {
    navigationLink
  },
  data(){
    return {
      url: 'http://www.baidu.com'
    }
  }
}
</script>
<style scoped>

</style>