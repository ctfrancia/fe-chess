<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TournamentList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TournamentList from '@/components/TournamentList.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    TournamentList
  }
}
</script>
