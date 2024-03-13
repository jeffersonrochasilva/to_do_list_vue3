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
  // pagination.toGoPage();
  // pagination.setDatePage();
  // pagination.data.value =
  // pagination.setValuePage();

  await appStore.getAllApis();
  // pagination.data = appStore.urgentemente;
  console.log(appStore.urgentemente, "testando");
  pagination.toGoPage();
});
</script>
