<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png"
             alt="Bulma: a modern CSS framework based on Flexbox"
             width="112"
             height="28">
      </a>
      <a v-for="item in menuItems" class="navbar-item"> {{item.title}} </a>

      <div class="navbar-burger burger" :class="navbarClass" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    <div class="navbar-menu" :class="navbarClass">
      <a class="navbar-item"> Home </a>
      <a class="navbar-item"> Home </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'the-navbar',

    data: () => ({
      isOpen:    false,
      menuItems: [
        {title: 'Home', name: 'home.index'},
        {title: 'About', name: 'home.index'},
      ]
    }),


    computed: {
      navbarClass() {
        return this.isOpen ? 'is-active' : ''
      }
    },

    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped lang="scss">

</style>