<template>
  <div>
    <div>tournament list</div>
    <div v-for="t in tournamentList" :key="t.id">{{ t }} </div> 
  </div>
</template>

<script>
export default {
  name: 'TournamentList',
  computed: {
    tournamentList () {
      return this.$store.getters.generalTournamentList
    }
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

<style scoped>
</style>
