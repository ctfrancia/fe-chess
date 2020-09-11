<template>
  <div>tournament list</div>
</template>

<script>
import { getAllTournaments } from '../services/TournamentService.js'

export default {
  name: 'TournamentList',
  mounted: async () => {
    try {
      const data = await getAllTournaments()
      console.log(data)
    } catch(err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
