<template>
  <div class="container" id="dashbaord-layout-content">
    <transition name="fade" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name:       'dashbaord-layout-content',
  }
</script>
