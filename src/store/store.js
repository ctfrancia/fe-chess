import Vue from "vue"
import Vuex from "vuex"
import { getAllTournaments } from '../services/TournamentService.js'

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
  tournamentList(state, tournaments) {
    state.tournaments.generalTournamentList = tournaments
  }
}
const getters = {
  generalTournamentList: state => state.tournaments.generalTournamentList,
  getSingleTournament: state => id => {
    return state.tournaments.generalTournamentList.find(t => t.id === id)
  }
}
const actions = {
  async updateTournamentList({ commit }) {
    commit('tournamentList', await getAllTournaments())
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
