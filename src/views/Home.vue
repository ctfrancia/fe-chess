<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <TournamentList tournaments="tournamentList"/> -->
    <TournamentList /> 
    sdf
    <!-- {{ TournamentList }} -->
  </div>
</template>

<script>
// @ is an alias to /src
import TournamentList from '@/components/TournamentList.vue'

export default {
  name: 'Home',
  components: {
    TournamentList
  },
  /*
  computed: {
    tournamentList () {
      const t = this.$store.getters.generalTournamentList
      console.log(t)
      return t
    }
  },
  */
  created() {
    this.fetchTournaments()
  },
  methods: { 
    async fetchTournaments() {
      this.$store.dispatch('updateTournamentList')
    },
    openTournament(tID) {
      this.$router.push({name: 'Tournament', params: { id: tID }})
    }
  } 
}
</script>
