<template>
  <section class="section" id="app">
    <div class="container">
      <div class="hello">
        <h1>Welcome to Your Vue.js App</h1>
      </div>
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app'
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
