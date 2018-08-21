const state = {
  rooms: [
    { id: 1, text: '...', today: true },
    { id: 2, text: '...', today: false }
  ]
}

// getters
const getters = {
  roomsToday: state => {
    return state.rooms.filter(room => room.today)
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
