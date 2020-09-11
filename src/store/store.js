import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  user: {
    name: '',
    avatar: '',
    role: '',
    friends: []
  },
  tournaments: {
    generalTournamentList: [],
    attended: [],
    willAttend: [],
    favorites:  [],
  }
}

const mutations = {
  change(state, flavor) {
    state.user = flavor
  },
  getAllTournamentList(state, tournaments) {
    state.tournaments = tournaments
  }
}
const getters = {
  flavor: state => state.user,
  generalTournamentList: state => state.tournaments.generalTournamentList
}
const actions = {
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
