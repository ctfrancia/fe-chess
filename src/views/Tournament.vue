<template>
  <div id="component-container">
    <div class="tournament-header">
      {{ tournament.Title }}
    </div>

    <div class="tournament-location">
      {{ tournament.Location }}
    </div>
    
    <div class="tournament-meta-data">
      Online: {{ tournament.IsOnline }}
      Rated: {{ tournament.Rated }}
      Time start:{{ tournament.MatchTimeStart }}
      TournamentType: {{ tournament.TournamentType }}
      Time end: {{ tournament.MatchTimeEnd }}
      Time control: {{ tournament.TimeControl }}
      Date: {{ tournament.TournamentDate }} 
      Contact: {{ tournament.TournamentContact }}
      Date Created: {{ tournament.Created }}
    </div>

    <div class="tournament-poster">
      poster goes here
    </div>

    <div class="tournament-additional-information">
      {{ tournament.AdditionalInformation }} 
    </div>

    <div>
    </div>
  <!-- {{ tournament }} -->
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
  #component-container {
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    border-radius: 10px;
  }
</style>
