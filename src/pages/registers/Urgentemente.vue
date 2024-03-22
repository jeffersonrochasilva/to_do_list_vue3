<template>
  <div>
    <CardFirst title="Urgentemente" :data="pagination.app" />
    <!-- <CardFirst title="Urgentemente" :data="appStore.urgentemente" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CardFirst from "../../components/CardFirst/index.vue";
import { usePagination } from "../../store/pagination";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const pagination = usePagination();

onMounted(async () => {
  await appStore.getAllApis();
  appStore.stepCircle = true;
  setTimeout(() => {
    pagination.setValuePage();
    pagination.data = appStore.urgentemente;
    pagination.toGoPage();
    appStore.stepCircle = false;
  }, 300);
});
</script>
