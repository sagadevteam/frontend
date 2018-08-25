import Api from '@/components/api'
import moment from 'moment'

const state = {
  rooms: []
}

// getters
const getters = {
  getRooms (state) {
    return state.rooms.map((room, index) => {
      room.start_time = moment.unix(room.start_time).format('MMMM Do')
      room.end_time = moment.unix(room.end_time).format('MMMM Do')
      let imgs = [
        'https://i.imgur.com/4LnD7e7.jpg',
        'https://i.imgur.com/055DMYC.jpg',
        'https://i.imgur.com/ougSPUF.jpg',
        'https://i.imgur.com/fx5iK83.jpg',
        'https://i.imgur.com/5RdQskc.jpg'
      ]
      room.img = imgs[index]
      return room
    })
  }
}

// actions
const actions = {
  async getRooms ({ commit }) {
    let url = '/inventories'
    let rooms = await Api.get(url)
    rooms = rooms.data.inventories
    commit('refreshHomePageRooms', rooms)
  }
}

// mutations
const mutations = {
  refreshHomePageRooms (state, rooms) {
    state.rooms = rooms
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
