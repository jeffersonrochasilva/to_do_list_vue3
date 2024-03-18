<template>
  <div class="app">
    <div class="contentLoading" v-if="appStore.stepCircle">
      <v-progress-circular color="red" indeterminate></v-progress-circular>
    </div>
    <router-view />
    <v-snackbar v-model="valueSnackbar" :color="colorSnackbar">
      <div class="container">
        {{ textSnackbar }}
      </div>
    </v-snackbar>
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { useAppStore } from "./store/app";
const appStore = useAppStore();

const colorSnackbar: ComputedRef<string> = computed(() => {
  return appStore.color;
});

const textSnackbar: ComputedRef<string> = computed(() => {
  return appStore.text;
});
const valueSnackbar: ComputedRef<boolean> = computed(() => {
  return appStore.snackbar;
});
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.contentLoading {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
