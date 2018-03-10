import Vue from 'vue'
import App from './App.vue'

// import old deprectaed JS scripts who should be replaced by Vue logic
import './scripts/main.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
