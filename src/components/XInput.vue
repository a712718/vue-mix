<template>
  <input type="text"
   :value="value"
   @change="handleChange"
  />
</template>
<script>
export default {
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  // props: {
  //   value: String
  // },
  // data() {
  //   return {}
  // },
  // methods: {
  //   handleChange(event) {
  //     this.$emit('change', event.target.value)
  //   }
  // }
 
  // 用input事件的时候不用写model
  // 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，
  // 但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。
  // model 选项可以用来避免这样的冲突：
  props: {
    value: String
  },
  data() {
    return {}
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value)
    }
  }
  
}
</script>
<style scoped>

</style>