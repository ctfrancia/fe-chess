<template>
  <div>
  {{ tournament }} 
  </div>
</template>

<script>
export default {
  name: 'Tournament',
  computed: {
    tournament() {
      const { id } = this.$route.params
      // filter returns an array, but, there will only be one match
      return this.$store.state.tournaments.generalTournamentList.filter(t => t.ID === id)[0]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
