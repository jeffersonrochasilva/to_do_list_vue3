<template>
  <div>
    <CardFirst
      title="O quanto antes"
      :data="pagination.oQuantoAntes"
      :num="num"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import CardFirst from "../../components/CardFirst/index.vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
import { ComputedRef } from "vue";
const appStore = useAppStore();
const pagination = usePagination();
const num: ComputedRef<number> = computed(() => {
  return pagination.numPagination;
});

// onMounted(async () => {
//   pagination.setValuePage();
//   await appStore.getAllApis();
//   pagination.data = appStore.oQuantoAntes;
//   pagination.toGoPage();
// });
</script>
