<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/create-tournament">Criar Torneo</router-link> | 
      <router-link to="/about">Sobre</router-link> | 
      <router-link to="/login">Iniciar Sesión</router-link> | 
      <!-- <router-link to="/sign-up">Sign Up</router-link> | -->
      <router-link to="/register">Registrarse</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
