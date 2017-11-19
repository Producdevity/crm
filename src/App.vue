<template>
  <div id="id">
    <the-hero/>
    <the-navbar/>
    <section class="section">
      <div class="container">
        <div class="hello">
          <h1>Welcome to Your Vue.js App</h1>
        </div>
        <img src="./assets/logo.png">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
  import TheHero from '@core/TheHero.vue'
  import TheNavbar from '@core/TheNavbar.vue'

  export default {
    name:       'app',
    components: {
      TheNavbar,
      TheHero
    }
  }
</script>

<style>
  #app {
    font-family:             'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align:              center;
    color:                   #2c3e50;
    margin-top:              60px;
  }
</style>
