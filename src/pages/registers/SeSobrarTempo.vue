<template>
  <div>
    <CardFirst
      title="Se sobrar tempo"
      :data="pagination.seSobrarTempo"
      :num="num"
    />
    <!-- <CardFirst title="Se sobrar tempo" :data="appStore.seSobrarTempo" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
import CardFirst from "../../components/CardFirst/index.vue";
const appStore = useAppStore();
const pagination = usePagination();
const num = pagination.numPagination;

// onMounted(async () => {
//   await appStore.getAllApis();
//   pagination.data = appStore.seSobrarTempo;
//   pagination.toGoPage();
// });
</script>
