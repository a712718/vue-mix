<template>
  <div>
    <!-- <x-input v-model="data" /> -->
    <x-input :title="data" @change="data = $event"/>
    {{ data}}
  </div>
</template>

<script>
import XInput from '../components/XInput'
export default {
  components: {
    XInput
  },
  updated(){
    console.log('mhModel updated this.data', this.data);
  },
  data() {
    return { data: '123'}
  }

}

</script>

<style scoped>

</style>
