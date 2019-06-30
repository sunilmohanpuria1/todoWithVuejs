import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'

//import welcome from './components/welcome';

/* Vue.use(VueRouter)
const routes = [
  //{ path: '/', component: home },
  { path: '/welcome', component: welcome }
]
 */
//const route=new VueRouter({routes});

import store from './store/store'

Vue.config.productionTip = false

new Vue({
  //route,
  store,
  render: h => h(App),
}).$mount('#app')
