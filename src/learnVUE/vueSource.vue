<template>
   <span>写一个完善的响应系统</span>
</template>
<script>

export default {
  data () {
    return {}
  },
  created () {
    console.log('写一个完善的响应系统');
    // 原始数据
    const data = {
      text: 'hello word'
    };
    // 副作用函数，可以是vue模板解析出来的
    function effect() {
      // 注意要使用proxy obj 才能执行get和set 拦截行为
      document.body.innerText = obj.text;
    }
    // 存储副作用函数的桶
    const bucket = new Set()

    // 原对始数据的代理
    const obj = new Proxy(data, {
      // 拦截读取操作
      get(target, key) {
        // target 目标对象 key 对应属性
        console.log('get target,,,,,', target);
        console.log('get key,,,,,', key);
        bucket.add(effect)
        console.log('get target[key],,,,,', target[key]);
        return target[key]  // 这个必须写
      },
      // 设置拦截操作
      set(target, key, newVal) {
        console.log('set target,,,,,,', target);
        console.log('set key,,,,,,', key);
        console.log('set newVal,,,,,,', newVal);
        target[key] = newVal
        bucket.forEach(fn => fn())
        return true

      }
    })
    console.log('obj,,,,,,', obj);
    // 执行 副作用函数
    effect()
    setTimeout(() => {
      // 注意要使用proxy obj 才能执行get和set 拦截行为
      // 要使得Proxy起作用，必须针对Proxy实例
      obj.text = 'hello vue3'
    },2000)
  }
}
</script>
<style scoped>

</style>
