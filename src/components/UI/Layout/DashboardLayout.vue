<template>
  <div>
    <the-hero/>
    <the-navbar/>
    <section class="section">
      <dashbaord-layout-content/>
    </section>
  </div>
</template>

<script>
  import TheHero from '@core/TheHero.vue'
  import TheNavbar from '@core/TheNavbar.vue'
  import DashbaordLayoutContent from '@/components/UI/Layout/DashboardLayoutContent.vue'

  export default {
    name:       'dashbaord-layout',
    components: {
      DashbaordLayoutContent,
      TheNavbar,
      TheHero
    }
  }
</script>
