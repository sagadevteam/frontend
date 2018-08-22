const state = {
  user: {}
}

// getters
const getters = {
  isAuthenticated ({ user }) {
    return user.user_id !== undefined
  },
  getUser ({ user }) {
    return user
  }
}

// actions
const actions = {
  setUser ({ commit }, user) {
    commit('setUser', user)
  }
}

// mutations
const mutations = {
  // TODO: some validation here
  setUser (state, user) {
    state.user = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
};
