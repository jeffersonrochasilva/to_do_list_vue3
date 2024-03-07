<template>
  <div>
    <CardFirst title="Urgentemente" :data="pagination.app" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CardFirst from "../../components/CardFirst/index.vue";
import { usePagination } from "../../store/pagination";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const pagination = usePagination();

onMounted(() => {
  // pagination.toGoPage();
  // pagination.setDatePage();
  pagination.data = appStore.urgentemente;
});
</script>
