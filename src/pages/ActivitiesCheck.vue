<template>
  <div>
    <ActivitiesCheck />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../store/app";
import ActivitiesCheck from "../components/ActivitiesCheck/index.vue";
const appStore = useAppStore();
onMounted(() => {
  appStore.getActivitiesCheck();
});
</script>
