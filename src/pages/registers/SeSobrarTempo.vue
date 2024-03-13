<template>
  <div>
    <!-- <CardFirst title="Se sobrar tempo" :data="pagination.app" /> -->
    <CardFirst title="Se sobrar tempo" :data="appStore.seSobrarTempo" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
import CardFirst from "../../components/CardFirst/index.vue";
const appStore = useAppStore();
const pagination = usePagination();
const setDataThree = (item: any) => {
  pagination.data = appStore.seSobrarTempo;
  appStore.setSeSobrarTempo(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};

onMounted(async () => {
  pagination.setValuePage();

  await appStore.getAllApis();
  pagination.data = appStore.seSobrarTempo;
  pagination.toGoPage();
});
</script>
