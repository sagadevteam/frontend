import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    rooms: [
      { id: 1, text: '...', today: true },
      { id: 2, text: '...', today: false }
    ]
  },
  mutations: {
  },
  getters: {
    roomsToday: state => {
      return state.rooms.filter(room => room.today)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
