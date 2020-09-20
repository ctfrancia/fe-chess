<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TournamentList /> 
  </div>
</template>

<script>
import TournamentList from '@/components/TournamentList.vue'

export default {
  name: 'Home',
  components: {
    TournamentList
  },
  created() {
    this.fetchTournaments()
  },
  methods: { 
    async fetchTournaments() {
      this.$store.dispatch('updateTournamentList')
    }
  } 
}
</script>
