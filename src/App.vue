<template>
  <div class="app">
    <Tolbar />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Tolbar from "./components/Tolbar/index.vue";
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
}
</style>
