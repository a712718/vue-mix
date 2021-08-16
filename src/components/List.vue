<template>
  <div>
    hello world
    <ul>
      <li v-for="item in list" :key="item">
        {{item}}
      </li>
    </ul>
    <div @click="change">change</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list: [1,2,3,4,5]
    }
  },
  methods:{
    change: function(){
      console.log('click change')
      // this.list[0] = 8888 //vue检测不到这个变化
      this.list.pop() // vue可以检测到这种变化
    }
  }
}
</script>
<style scoped>

</style>