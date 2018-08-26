import Api from '@/components/api'

const state = {
  room: null,
  tickets: [],
  checkInDateUnix: null,
  checkOutDateUnix: null,
  successMsg: null,
  errorMsg: null
}

// getters
const getters = {
  getRoom (state) {
    return state.room
  },
  getTickets (state) {
    return state.tickets
  },
  getCheckInDateUnix () {
    return state.checkInDateUnix
  },
  getCheckOutDateUnix () {
    return state.checkOutDateUnix
  },
  getTotalPrice (state) {
    if ((state.tickets.length > 0) &&
        state.room && state.checkInDateUnix && state.checkOutDateUnix) {
      let price = state.room.price
      let checkInUnix = state.checkInDateUnix
      let checkOutUnix = state.checkOutDateUnix
      let matchedTickets = state.tickets.filter(ticket => {
        return ticket.end_time >= checkInUnix &&
        ticket.end_time <= checkOutUnix
      })
      return matchedTickets.length * price
    }
    return 0
  },
  getTicketIds (state) {
    if ((state.tickets.length > 0) &&
        state.room && state.checkInDateUnix && state.checkOutDateUnix) {
      let checkInUnix = state.checkInDateUnix
      let checkOutUnix = state.checkOutDateUnix
      let matchedTicketIds = state.tickets.filter(ticket => {
        return ticket.end_time >= checkInUnix &&
        ticket.end_time <= checkOutUnix
      }).map(ticket => ticket.ticket_id)
      return matchedTicketIds
    }
    return []
  },
  getSuccessMsg (state) {
    return state.successMsg
  },
  getErrorMsg (state) {
    return state.errorMsg
  }
}

// actions
const actions = {
  async fetchRoom ({ commit }, roomId) {
    let url = '/inventory?inventory_id=' + roomId
    let res = await Api.get(url)
    let room = res.data
    commit('showRoom', room)
  },
  async fetchTickets ({ commit }, roomId) {
    let url = '/tickets?inventory_id=' + roomId
    let res = await Api.get(url)
    let tickets = res.data.tickets
    commit('showTickets', tickets)
  },
  setCheckInDate ({ commit }, checkInDateUnix) {
    commit('checkInDateChanged', checkInDateUnix)
  },
  setCheckOutDate ({ commit }, checkOutDateUnix) {
    commit('checkOutDateChanged', checkOutDateUnix)
  },
  async buyTickets ({ commit }, ticketIds) {
    let url = '/buyticket'
    if (ticketIds.length > 0) {
      try {
        let res = await Api.post(url, { ticket_id: ticketIds })
        console.log(typeof res.data)
        let msg = res.data.msg
        commit('showSuccessResult', msg)
      } catch (e) {
        commit('showErrorResult', e.message)
      }
    }
  }
}

// mutations
const mutations = {
  showRoom (state, room) {
    state.room = room
  },
  showTickets (state, tickets) {
    state.tickets = tickets
  },
  checkInDateChanged (state, checkInDateUnix) {
    state.checkInDateUnix = checkInDateUnix
  },
  checkOutDateChanged (state, checkOutDateUnix) {
    state.checkOutDateUnix = checkOutDateUnix
  },
  showSuccessResult (state, successMsg) {
    state.successMsg = successMsg
  },
  showErrorResult (state, errorMsg) {
    state.errorMsg = errorMsg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
