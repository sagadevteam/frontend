import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuex from 'vuex'
import store from '@/store'
import HotelDatePicker from 'vue-hotel-datepicker'

Vue.component('HotelDatePicker', HotelDatePicker)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
