import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueMinderEditor from 'vue-minder-editor'
import Vuex from 'vuex';
import store from './store'
Vue.use(ElementUI);
Vue.use(vueMinderEditor);
Vue.use(Vuex);

// console.log('vueMinderEditor ,,,',vueMinderEditor);

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
