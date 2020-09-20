<template>
  <div>
    <div>tournament list</div>
    <table>
      <tr>
        <th>title</th>
        <th>location</th>
        <th>date</th>
        <th>time start</th>
        <th>time end</th>
      </tr>

      <tr v-for="t in tournamentList" :key="t.ID">
        <button @click="openTournament(t.ID)"><td > {{ t.Title }} </td></button>
        <td> {{ t.Location }} </td>
        <td> {{ t.TournamentDate }} </td>
        <td> {{ t.MatchTimeStart }} </td>
        <td> {{ t.MatchTimeEnd }} </td>
      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  name: 'TournamentList',
  computed: {
    tournamentList() {
      return this.$store.getters.generalTournamentList
    }
  },
  methods: {
    openTournament(tID) {
      this.$router.push({name: 'Tournament', params: { id: tID }})
    }
  }
}
</script>

<style scoped>
</style>
