import Vue from 'vue'
import App from './App'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
