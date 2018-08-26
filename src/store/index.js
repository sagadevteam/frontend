import Vue from 'vue'
import Vuex from 'vuex'
import rooms from './modules/rooms'
import room from './modules/room'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rooms, room, user
  }
})
