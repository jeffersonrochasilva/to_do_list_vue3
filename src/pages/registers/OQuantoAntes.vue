<template>
  <div>
    <CardFirst title="O quanto antes" :data="pagination.app" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CardFirst from "../../components/CardFirst/index.vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
const appStore = useAppStore();
const pagination = usePagination();

onMounted(async () => {
  pagination.setValuePage();
  await appStore.getAllApis();
  appStore.stepCircle = true;
  setTimeout(() => {
    pagination.data = appStore.oQuantoAntes;
    pagination.toGoPage();
    appStore.stepCircle = false;
  }, 300);
});
</script>
