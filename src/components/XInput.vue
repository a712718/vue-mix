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