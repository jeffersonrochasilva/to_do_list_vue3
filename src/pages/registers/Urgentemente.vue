<template>
  <div>
    <CardFirst
      title="Urgentemente"
      :data="pagination.urgentemente"
      :num="num"
    />
    <!-- <CardFirst title="Urgentemente" :data="appStore.urgentemente" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import CardFirst from "../../components/CardFirst/index.vue";
import { usePagination } from "../../store/pagination";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const pagination = usePagination();
const num = pagination.numPagination;
// onMounted(async () => {
//   pagination.setValuePage();
//   await appStore.getAllApis();
//   pagination.data = appStore.urgentemente;
//   pagination.toGoPage();
// });
</script>
