<template>
 <div class="about">
    <h1>Sign Up</h1>

    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <input type="text" v-model="verifyPassword" />
    <input type="text" v-model="firstName" />
    {{ email }}

  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => {
    return {
      email: '',
      password: '',
      verifyPassword: '',
      firstName: '',
      surname: '',
      lichessUsername: '',
      chessComUsername: ''
    }
  }
}
</script>

<style scoped>
</stlye>
