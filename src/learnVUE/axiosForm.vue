<template>
  <div>
    <div @click="submit" style="cursor: pointer">按钮</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {}
  },
  methods: {
    submit(){
      const instance = axios.create();
      console.log('111111');
      instance.get('https://tp-pre.cainiao-inc.com/tps-rdc/recruit/supply/queryRecruitment.do?lng=119.997565&lat=30.275478', {
        withCredentials: true,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>
<style>
</style>