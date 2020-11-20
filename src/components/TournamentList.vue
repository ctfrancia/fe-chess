<template>
  <div>
    <div>tournament list</div>
    <table>
      <tbody>
        <tr>
          <th>title</th>
          <th>location</th>
          <th>date</th>
          <th>time start</th>
          <th>time end</th>
        </tr>

        <tr v-for="t in tournamentList" :key="t.ID" @click="openTournament(t.ID)">
          <td > {{ t.Title }} </td>
          <td> {{ t.Location }} </td>
          <td> {{ t.TournamentDate }} </td>
          <td> {{ t.MatchTimeStart }} </td>
          <td> {{ t.MatchTimeEnd }} </td>
        </tr>
      </tbody>
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
tbody td{
  padding: 10px;
}

tbody tr:nth-child(odd){
  background-color: #7C9885;
  color: #fff;
}

td:hover {
  cursor: pointer;
}
</style>
