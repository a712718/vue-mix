<template>
  <div>123</div>
</template>
<script>

export default {
  data() {
    return {}
  },
  created() {
    // const obj = new Proxy({}, {
    //   get: function (target, propkey, receiver) {
    //     console.log('getting target ', target);
    //     console.log('getting propkey ', propkey);
    //     console.log('getting receiver ', receiver);
    //     return Reflect.get(target, propkey, receiver)
    //   },
    //   set: function (target, propkey, value, receiver) {
    //     console.log('setting target', target);
    //     console.log('setting propkey', propkey);
    //     console.log('setting value', value);
    //     console.log('setting receiver', receiver);
    //     return Reflect.set(target, propkey, value, receiver);
    //   }
    // })
    // obj.count = 1; // set
    // obj.count++; // get set


    // const proxy = new Proxy({}, {
    //   get: function(target, propkey) {
    //     console.log('get,,,target,,,', target);
    //     console.log('get,,,propkey,,,', propkey);
    //     return 35;
    //   }
    // })
    // console.log('proxy.time', proxy.time); // 35
    // console.log('proxy,,,,,,', proxy); // Proxy{}

    // const target = {};
    // const handler = {};
    // const proxy = new Proxy(target, handler);
    // proxy.a = 'b',
    // console.log('proxy,,,,,', proxy); // Proxy{a: 'b'}
    // console.log('target,,,,', target); // {a: 'b'}
    // 注意 ： 要使得Proxy起作用，必须针对Proxy实例（proxy对象）进行操作，而不是针对目标对象（target）进行操作

  //  const proxy = new Proxy({}, {
  //    get: function(target, propkey) {
  //      console.log('target,,,,', target);
  //      console.log('propkey,,,,', propkey);
  //      return 35;
  //    }
  //  });
  //  const obj = Object.create(proxy);
  //  console.log('obj.time,,,,,', obj.time);
   // proxy对象是obj对象的原型，obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截

  const handler = {
    get: function(target, name) {
      console.log('get,,,,,target', target);
      console.log('get,,,,,name', name);
      if(name === 'prototype') {
        return Object.prototype;
      }
      return `hello ${name}`
    },
    apply: function(target, thisBinding, args) {
      console.log('apply,,,,,target', target);
      console.log('apply,,,,,thisBinding', thisBinding);
      console.log('apply,,,,,args', args);
      return args[0];
    },
    construct: function(target, args) {
      console.log('construct,,,,target', target);
      console.log('construct,,,,args', args);
      return {value: args[1]};
    }
   };
   const fproxy = new Proxy(function(x, y) {
      console.log('func,,,,,,x', x);
      console.log('func,,,,,,y', y);
      return x + y;
   }, handler)
   
    console.log('fproxy(1,2),,,,,,', fproxy(1,2)); // 1
    // console.log('new fproxy(1, 2),,,,,', new fproxy(1, 2)); // {value: 2}
    // console.log('fproxy.prototype === Object.prototype', fproxy.prototype === Object.prototype); // true
    // console.log("fproxy.foo === 'hello, foo'", fproxy.foo === 'hello foo'); // true

  }
  
}
</script>
<style scoped>

</style>