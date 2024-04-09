<template>
  <div>
    <ActivitiesCheck />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../store/app";
import { usePagination } from "@/store/pagination";
import ActivitiesCheck from "../components/ActivitiesCheck/index.vue";
const pagination = usePagination();
const appStore = useAppStore();
onMounted(async () => {
  await appStore.getAllApis();
  appStore.stepCircle = true;
  setTimeout(() => {
    pagination.setValuePage();
    pagination.data = appStore.concluidas;
    pagination.toGoPage();
    appStore.stepCircle = false;
    appStore.stepRouter = 4;
  }, 300);
});
</script>
