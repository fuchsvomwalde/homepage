import Vue from 'vue'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
// import { Subject } from 'rxjs/Subject' // required for domStreams option

import App from './App.vue'

// import old deprectaed JS scripts who should be replaced by Vue logic
// import './scripts/main.js'

// tada!
Vue.use(VueRx, {
  Observable
  // Subject
})

new Vue({
  el: '#app',
  render: h => h(App)
})
